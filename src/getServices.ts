import axios from "axios";
import { RequestType, ServiceType } from "./types";
import { makeName } from "./utils/makeName";

export const getServices = async (address: string) => {
  const serviceArr: ServiceType[] = [];
  try {
    const res = await axios.get(address);
    const pathObject = res?.data?.paths ?? {};
    const pathsArr = Object.keys(pathObject);
    for (let pathStr of pathsArr) {
      const requestsObject = pathObject[pathStr] ?? {};
      const requestsStr = Object.keys(requestsObject);
      for (let requestStr of requestsStr) {
        const requestObject = requestsObject[requestStr] ?? {};
        const id = requestObject?.operationId ?? "";
        const name =
          makeName(requestObject?.summary ?? "", requestStr ?? "") ?? "";
        let refReq =
          requestObject?.requestBody?.content?.["application/json"]?.schema?.[
            "$ref"
          ];
        let refRes =
          requestObject?.responses?.["200"]?.content?.["application/json"]
            ?.schema?.["$ref"];
        if (refReq) {
          refReq = refReq.replace("#/components/schemas/", "");
        }
        if (refRes) {
          refRes = refRes.replace("#/components/schemas/", "");
        }
        serviceArr.push({
          path: pathStr,
          requestType: requestStr as RequestType,
          requestTypeName: refReq,
          responseTypeName: refRes,
          id,
          name,
        });
      }
    }
    return serviceArr;
  } catch (e) {
    console.log(e);
    return [];
  }
};

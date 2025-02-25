import { ServiceType } from "./types";

export const serviceFunc = (service: ServiceType) => {
  return `${service.name}: async (payload: ${
    service?.requestTypeName ?? "unknown"
  }) => {
    return await API<${service.responseTypeName ?? "unknown"}>("${
    service.requestType
  }", "${service.path}", payload);
  }`;
};

export const servicesFunc = (services: ServiceType[]) => {
  const servicesStr = services.map(serviceFunc).join(",");
  return `export const Service = {
        ${servicesStr}
    };`;
};

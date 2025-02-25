import { ServiceType } from "./types";

export const importFunc = (services: ServiceType[]) => {
  const typesStr = services
    .map((service) => {
      const isSemi = !!service?.requestTypeName && !!service?.responseTypeName;
      return `${service?.requestTypeName ?? ""}${isSemi ? "," : ""} ${service?.responseTypeName ?? ""}`;
    })
    .filter((item) => !!item.trim())
    .join(",");
  const importsStr = `
  import { API } from "@/services/api.ts";
  import {${typesStr}} from "@/types/generated";`;
  return importsStr;
};

import { API } from "@/services/api.ts";
import {
  FirstStepInputData,
  FirstStepOutputData,
  FirstStepInputDataIsochronousCurves,
  FirstStepOutputDataIsochronousCurves,
} from "@/types/generated";
export const Service = {
  healthCheckGet: async (payload: unknown) => {
    return await API<unknown>("get", "/health", payload);
  },
  calculateFirstStepPost: async (payload: FirstStepInputData) => {
    return await API<FirstStepOutputData>("post", "/step1", payload);
  },
  calculateIsochronousCurvesPost: async (payload: FirstStepInputDataIsochronousCurves) => {
    return await API<FirstStepOutputDataIsochronousCurves>("post", "/isochronous_curves", payload);
  },
};

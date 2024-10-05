import { URLServiceMapProps } from "./ServiceType";

export const URL_MAP: URLServiceMapProps = {
  getAdvice: {
    method: "GET",
    urlEndpoint: "/advice",
  },
  getAdviceProxy: {
    method: "POST",
    urlEndpoint: "/",
  },
};

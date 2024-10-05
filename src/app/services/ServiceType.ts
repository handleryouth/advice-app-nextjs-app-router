export type FetchMethod = "POST" | "GET";

export type ServiceKey = "getAdvice" | "getAdviceProxy";

export interface ServiceURLAndMethodProps {
  urlEndpoint: string;
  method: FetchMethod;
}

export type URLServiceMapProps = Record<ServiceKey, ServiceURLAndMethodProps>;

export type AbortControllerCollection = Record<string, AbortController>;

export interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

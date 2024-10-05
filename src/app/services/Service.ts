import { EnvironmentKey, getEnvironmentKey } from "../utils";
import { URL_MAP } from "./ServiceKey";
import { ServiceKey } from "./ServiceType";

function generateUrl(key: ServiceKey, environmentKey: EnvironmentKey) {
  const environmentKeyResult = getEnvironmentKey(environmentKey);
  return {
    url: environmentKeyResult + URL_MAP[key].urlEndpoint,
    method: URL_MAP[key].method,
  };
}

interface ServiceFunctionConfig<K> {
  onLoading?: () => void;
  onError: (error: Error) => void;
  onSuccess: (data: K) => void;
  onFinally?: () => void;
  options?: Omit<RequestInit, "cache">;
}

export async function requestFunction<K>(
  dataKey: ServiceKey,
  environmentKey: EnvironmentKey,
  {
    onError,
    onSuccess,
    onFinally,
    onLoading,
    options,
  }: ServiceFunctionConfig<K>
) {
  onLoading?.();
  return fetch(generateUrl(dataKey, environmentKey).url, {
    ...options,
    cache: "no-store",
    method: generateUrl(dataKey, environmentKey).method,
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      onSuccess(res as K);
    })
    .catch((err) => {
      onError(err);
    })
    .finally(() => {
      onFinally?.();
    });
}

import { AbortControllerCollection, ServiceKey } from "./ServiceType";

const MAP_OBJECT_VALUE: AbortControllerCollection = {};

export function abortRequest(key: ServiceKey) {
  MAP_OBJECT_VALUE[key]?.abort("Request Cancelled");
}

export function generateAbortController(key: ServiceKey) {
  abortRequest(key);
  const newController = new AbortController();
  MAP_OBJECT_VALUE[key] = newController;
  return newController.signal;
}

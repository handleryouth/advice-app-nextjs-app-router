export type EnvironmentKey = "baseUrl" | "apiProxy";

const ENV_LIST: Record<EnvironmentKey, string | undefined> = {
  baseUrl: process.env["BASE_URL"],
  apiProxy: process.env["API_PROXY"],
};

export function getEnvironmentKey(key: EnvironmentKey) {
  const environmentkey = ENV_LIST[key];

  if (environmentkey !== undefined) {
    return ENV_LIST[key];
  } else {
    throw new Error("ENV Key Not Found");
  }
}

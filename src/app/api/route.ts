import { requestFunction } from "../services";

export async function POST() {
  const result = await requestFunction("getAdvice", "baseUrl", {
    onSuccess(data) {
      return data;
    },
    onError() {
      return new Error("Error");
    },
  });

  if (result instanceof Error) {
    return Response.json({ error: result.message }, { status: 500 });
  } else {
    return Response.json(result);
  }
}

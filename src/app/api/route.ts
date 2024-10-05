import { AdviceResponse, requestFunction } from "../services";

export async function POST() {
  let result: AdviceResponse = {
    slip: {
      advice:
        "Consectetur ad ex dolor aliqua ut qui enim veniam do dolor cupidatat.",
      id: 0,
    },
  };
  await requestFunction("getAdvice", "baseUrl", {
    onSuccess(data) {
      result = data as AdviceResponse;
    },
    onError() {
      console.log("Error");
    },
  });

  if (result.slip.id === 0) {
    return Response.json({ error: "error" }, { status: 500 });
  } else {
    return Response.json(result);
  }
}

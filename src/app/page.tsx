import { Suspense } from "react";
import AdviceCard from "./AdviceCard";
import { AdviceResponse, requestFunction } from "./services";
import { Loading } from "./components";

export default async function Home() {
  const response: AdviceResponse = {
    slip: {
      id: 0,
      advice: "Non magna occaecat magna ex voluptate nulla.",
    },
  };
  await requestFunction<AdviceResponse>("getAdviceProxy", "apiProxy", {
    onError() {
      return console.log("error");
    },
    onSuccess(data) {
      return data;
    },
  });

  console.log("Response", response);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<Loading />}>
        <AdviceCard {...response} />
      </Suspense>
    </div>
  );
}

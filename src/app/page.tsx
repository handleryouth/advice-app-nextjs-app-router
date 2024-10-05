import { Suspense } from "react";
import AdviceCard from "./AdviceCard";
import { AdviceResponse, requestFunction } from "./services";
import { Loading } from "./components";

export default async function Home() {
  const response: AdviceResponse = await requestFunction<AdviceResponse>(
    "getAdviceProxy",
    "apiProxy",
    {
      onError() {
        const emptyObject: AdviceResponse = {
          slip: {
            id: 0,
            advice: "",
          },
        };

        return emptyObject;
      },
      onSuccess(data) {
        return data;
      },
    }
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Suspense fallback={<Loading />}>
        <AdviceCard {...response} />
      </Suspense>
    </div>
  );
}

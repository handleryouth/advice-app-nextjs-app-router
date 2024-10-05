"use client";
import React, { useState } from "react";
import { AdviceResponse, requestFunction } from "./services";
import { Button, Card, CardBody, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import patternDivider from "./assets/pattern-divider-desktop.svg";
import iconDice from "./assets/icon-dice.svg";

const AdviceCard = (advice: AdviceResponse) => {
  const [adviceState, setAdvice] = useState<AdviceResponse>(advice);
  const [loading, setLoading] = useState(false);

  const getAdvice = () => {
    requestFunction<AdviceResponse>("getAdviceProxy", "apiProxy", {
      onLoading() {
        setLoading(true);
      },
      onFinally() {
        setLoading(false);
      },
      onError(error) {
        return new Error(error.message);
      },
      onSuccess(data) {
        return setAdvice(data);
      },
    });
  };
  return (
    <Card className="bg-darkGrayishBlue max-w-96 mx-4">
      <CardBody className="p-8 text-center flex flex-col items-center gap-y-4">
        <Skeleton isLoaded={!loading} className="rounded-lg">
          <p>Advice #{adviceState.slip.id}</p>
        </Skeleton>

        <Skeleton isLoaded={!loading} className="rounded-lg">
          <h1>{adviceState.slip.advice}</h1>
        </Skeleton>

        <Image alt="Divider" src={patternDivider} width={384} height={100} />

        <Button onClick={getAdvice} isIconOnly className="bg-neonGreen mt-4">
          <Image alt="Dice" src={iconDice} width={200} height={200} />
        </Button>
      </CardBody>
    </Card>
  );
};

export default AdviceCard;

"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const ToyCard = () => {
  return (
    <div>
      <Card isFooterBlurred radius="lg">
        <CardHeader className="flex gap-3 shadow-md">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
            priority
          />
          <div className="flex flex-col">
            <p className="text-md capitalize">Rofikul Islam</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Image
          alt="Woman listing to music"
          className="object-cover"
          height={200}
          src="/barbie-Doll.webp"
          width={200}
          loading="lazy"
        />
        <Divider />

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToyCard;

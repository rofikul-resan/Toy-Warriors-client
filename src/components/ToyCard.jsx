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
import { BsArrowRight } from "react-icons/bs";

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
          <h1 className="text-2xl font-semibold">Barbie Boll </h1>
          <p>
            <span> Category : Barbie Boll </span>{" "}
          </p>
        </CardBody>
        <Image
          alt="Woman listing to music"
          className="object-cover mx-auto"
          height={200}
          src="/barbie-Doll.webp"
          width={200}
          loading="lazy"
        />
        <Divider />

        <CardFooter className="justify-between bg-black/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 mb-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_15px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white ">
            Available on Only :{" "}
            <span className="font-semibold italic">$ 10</span>
          </p>
          <Button
            className="text-tiny text-white bg-black/20 gap-2"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            endContent={<BsArrowRight />}
          >
            More Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToyCard;

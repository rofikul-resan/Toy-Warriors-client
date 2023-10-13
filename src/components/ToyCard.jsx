"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Rating from "react-rating";

const ToyCard = ({ toy }) => {
  const { price, rating, category, photo, name, seller } = toy;
  console.log(toy);
  return (
    <div>
      <Card isFooterBlurred radius="lg">
        <CardHeader className="flex gap-3 shadow-md">
          <Avatar
            src={seller?.photoURL}
            alt={seller?.name}
            size="sm"
            name={seller?.name}
            isBordered
            className="transition-transform "
            color="primary"
            radius="sm"
          />
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col">
              <p className="text-md capitalize">{seller?.name}</p>
              <p className="text-small  text-violet-600 italic">
                {seller?.email}
              </p>
            </div>
            <div className=" mr-5">
              <Tooltip content=" About More Info">
                <Link href={"#"}>
                  <BsArrowRight />
                </Link>
              </Tooltip>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-xs">
            <span className="font-semibold"> Category : #</span>
            <span className="italic text-gray-700 ">{category}</span>
          </p>
          <p className="text-xs flex items-center">
            <span className="font-semibold"> Ratting :</span>
            <Rating
              initialRating={rating}
              emptySymbol={
                <AiOutlineStar className="text-orange-600 ml-1 text-medium" />
              }
              fullSymbol={
                <AiFillStar className="text-orange-600 ml-1 text-medium" />
              }
            />{" "}
            <span className="font-semibold">{rating}</span>
          </p>
        </CardBody>
        <div className="h-56 overflow-hidden">
          <Image
            alt={name}
            className="object-cover w-full"
            height={200}
            src={photo}
            width={200}
            loading="lazy"
          />
        </div>
        <Divider />

        <CardFooter className="justify-between bg-black/30 before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 mb-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_15px)] shadow-small mx-2 z-10">
          <p className="text-tiny text-white ">
            Available on Only :{" "}
            <span className="font-semibold italic">$ {price}</span>
          </p>
          <Button
            className="text-tiny text-white bg-black/20 gap-2"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
            endContent={<BsArrowRight />}
            as={Link}
            href={`/toy/${toy?._id}`}
          >
            More Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToyCard;

"use client";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import Rating from "react-rating";
import { serverUrl } from "../../../../utils/utils";
import axios from "axios";

const ToyIdPage = ({ params }) => {
  const [toy, setToy] = useState({});
  const { id } = params;
  useEffect(() => {
    const url = `${serverUrl}/toy/get-toy/${id}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        setToy(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            height={400}
            width={400}
            loading="lazy"
            alt="ecommerce"
            className="lg:w-1/2 lg:h-auto w-10/12 mx-auto object-cover object-center rounded"
            src={toy?.photo}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Product Name
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {toy?.name}
            </h1>
            <div className="flex mb-4 items-center">
              <div className="flex items-center gap-3">
                <Rating
                  initialRating={toy?.rating}
                  emptySymbol={
                    <AiOutlineStar className="text-orange-600 ml-1  text-lg" />
                  }
                  fullSymbol={
                    <AiFillStar className="text-orange-600 ml-1 text-lg" />
                  }
                />{" "}
                <p className="font-semibold">{toy?.rating}</p>
              </div>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                <a className="text-gray-500">
                  <BsFacebook className="w-5 h-5 text-xl" />
                </a>
                <a className="text-gray-500">
                  <BsTwitter className="w-5 h-5 text-xl" />
                </a>
                <a className="text-gray-500 text-xl">
                  <BsMessenger />
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              {toy?.details ||
                "Educational toys enhance a child's learning process by including basic educational concepts in fun and creative ways from an early age. Educational toys can be used for various purposes such as teaching numbers or letters, encouraging children to work together, or promoting exploration and discovery."}
            </p>
            <Divider className="my-5" />
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>

              <Button
                variant="ghost"
                color="success"
                endContent={<AiOutlineHeart className="text-xl" />}
              >
                Add To Favorite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyIdPage;

"use client";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { BsFacebook, BsMessenger, BsTwitter } from "react-icons/bs";
import Rating from "react-rating";

const ToyIdPage = ({ params }) => {
  console.log(params);
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
            src="/Educational-toy.webp"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Product Name
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Baby Funny Math Book
            </h1>
            <div className="flex mb-4 items-center">
              <div className="flex items-center gap-3">
                <Rating
                  initialRating={4.5}
                  emptySymbol={
                    <AiOutlineStar className="text-orange-600 ml-1  text-lg" />
                  }
                  fullSymbol={
                    <AiFillStar className="text-orange-600 ml-1 text-lg" />
                  }
                />{" "}
                <p className="font-semibold">4.5</p>
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
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
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

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <Link href={"#category"}>
      <div className="relative category-card p-6 border border-gray-500 rounded-sm flex flex-col justify-center items-center h-full w-full duration-300">
        <Image
          height={200}
          width={200}
          alt="category logo image"
          src={image}
          className="w-full h-28"
          priority
        />
        <div className="title-category capitalize p-4 ">
          <h1 className="text-center font-semibold text-2xl">{title}</h1>
        </div>
        <div className="absolute flex justify-center items-center  inset-0">
          <div className="bg-black/50 h-full w-full  text-white duration-300 scale-0 category-weeper flex justify-center items-center ">
            <h1 className="text-center capitalize font-semibold text-2xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HomeToyCategory = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold py-6">
          All categorys toys for Your Child{" "}
        </h1>
      </div>
      <div className="py-10 px-6 md:w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <CategoryCard
          title={"action"}
          image={"https://i.ibb.co/M9V4ptS/Super-Hero-PNG-File-Copy.png"}
        />
        <CategoryCard title={"car"} image={"/banner1.jpg"} />
        <CategoryCard title={"barbie Doll"} image={"/barbie-Doll.webp"} />
        <CategoryCard title={"Educational"} image={"/Educational-toy.webp"} />
      </div>
    </div>
  );
};

export default HomeToyCategory;

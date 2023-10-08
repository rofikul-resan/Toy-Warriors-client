import Image from "next/image";
import React from "react";

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Our happy Client With Happy photo
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base border-b-3 border-orange-600 pb-6">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                height={500}
                width={300}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250 object-cover  object-center block"
                src="/b-blog-3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                height={500}
                width={300}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250 object-cover  object-center block"
                src="/b-blog-4.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                height={600}
                width={350}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250  object-cover object-center block"
                src="/b-blog-5.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                height={600}
                width={350}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250  object-cover object-center block"
                src="/b-blog-6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                height={500}
                width={300}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250 object-cover  object-center block"
                src="/b-blog-7.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                height={500}
                width={300}
                priority
                alt="gallery"
                className="w-full h-full hover:scale-105 duration-250 object-cover  object-center block"
                src="/banner2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

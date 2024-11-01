"use client";
import { Button } from "@nextui-org/react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const BannerCard = ({ image, title }) => {
  const bannerImgRef = useRef(null);
  const bannerContentRef = useRef(null);
  const imgView = useInView(bannerImgRef, { once: false });
  const contentView = useInView(bannerImgRef);
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div
        ref={bannerImgRef}
        className={`
          ${
            imgView ? " md:translate-x-[100px]" : " opacity-0  ease-in"
          } duration-500 h-fit
        `}
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt="banner  image"
          loading="lazy"
          className="h-72 w-fit mx-auto  "
        />
      </div>
      <div
        ref={bannerContentRef}
        className={`
          ${imgView ? " " : " opacity-0   ease-in"} duration-500
        `}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-neutral-dark">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center gap-8">
              <Button
                radius="sm"
                color="primary"
                variant="shadow"
                className="px-10"
              >
                View More
              </Button>
              <Button
                radius="sm"
                color="secondary"
                variant="shadow"
                className="px-10"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;

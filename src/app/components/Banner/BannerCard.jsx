"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const BannerCard = ({ image, title }) => {
  const bannerImgRef = useRef(null);
  const imgView = useInView(bannerImgRef, { once: false });
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div
        ref={bannerImgRef}
        className={`
          ${
            imgView
              ? " translate-x-[100px]"
              : " opacity-0 -translate-x-[500px]  ease-in"
          } duration-500
        `}
      >
        <Image
          src={image}
          width={400}
          height={400}
          alt="banner  image"
          loading="lazy"
        />
      </div>
      <div></div>
    </div>
  );
};

export default BannerCard;

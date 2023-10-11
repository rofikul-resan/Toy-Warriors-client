"use client";
import React from "react";
import BannerCard from "./BannerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  console.log(process.env.FIREBASE_APIKEY);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerCard image={"/banner1.jpg"} title={"Car for Your Baby"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard
            image={"/banner2.jpg"}
            title={"Supper Car for Your Baby"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard
            image={"/banner3.jpg"}
            title={"Monster Truck for Your Baby"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerCard
            image={
              "https://i.ibb.co/99Jbcgz/149101-photos-toy-superhero-avengers-free-clipart-hd-Copy.png"
            }
            title={"Action Toy for Your Baby"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

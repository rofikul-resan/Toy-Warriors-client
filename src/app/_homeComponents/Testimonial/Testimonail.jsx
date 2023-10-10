"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <div>
        <h1 className="text-center py-6 text-3xl font-semibold">
          Our happy Client With happy Review{" "}
        </h1>
        <div className="relative">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <TestimonialCard
                name={"Resan"}
                image={
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                name={"Siam"}
                image={
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                name={"Resad"}
                image={
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                name={"Maruf"}
                image={
                  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

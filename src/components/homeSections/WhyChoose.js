"use client";
import React from "react";
import HeadingText from "../HeadingText";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import WhyChooseCard from "../WhyChooseCard";
import CustomSwiper from "../CustomSwiper";

const WhyChoose = () => {
  return (
    <div className="my-4">
      <HeadingText
        title="Why Choose"
        title1="WoodenHousing?"
        text="We build smart, futuristic, and effortlessly stylish wooden homes and resorts."
      />
      {/* <div className="mt-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          pagination={false}
          //   pagination={{
          //     clickable: true,
          //   }}
          autoplay
          modules={[FreeMode, Pagination, Autoplay]}
          //   className="mySwiper"
        >
          {Array(10)
            .fill("")
            .map((item, index) => (
              <SwiperSlide>
                <WhyChooseCard />
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <CustomSwiper />
    </div>
  );
};

export default WhyChoose;

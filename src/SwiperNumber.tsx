import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const SwiperNumber: React.FC = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000, // 5000ms = 5 seconds
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">20K</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">90%</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">85%</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperNumber;

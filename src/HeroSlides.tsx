import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Phone1 from "@/assets/phone1.png";
import Trash from "@/assets/phone_trashbin.png";
import Playstore from "@/assets/playstore.png";
import "swiper/css";
import "swiper/css/pagination";

import "@/styles.css";

import { Pagination, Autoplay } from "swiper/modules";

type HeroSlideProps = {
  title: string;
  desc: string;
  img: string;
};

const data: HeroSlideProps[] = [
  {
    title: "Schedule Waste Pickups at Your Convenience",
    desc: "Easily schedule waste pickups at times that work best for you. Whether for your home or business, GarbageLite ensures timely and reliable service at the click of a button",
    img: Phone1,
  },
  {
    title: "Connect with Trusted Recycling Hubs Near You.",
    desc: "Find and schedule drop-offs at nearby recycling hubs. We make recycling easier by connecting you to responsible facilities that will give your waste a second life.",
    img: Trash,
  },
];

const HeroSlides: React.FC = () => {
  return (
    <div id="home" className="background-image  ">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
      >
        {data.map((dat) => (
          <SwiperSlide className="">
            <div className="py-20 px-2 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between  items-center">
              <div className="w-[80%]  bg-cover bg-no-repeat  sm:w-[50%] flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-center items-start sm:text-left">
                  <h2 className="md:text-5xl min-w-[350px] max-w-[450px]   md:leading-snug  text-4xl text-[#0B2027] font-bold">
                    {dat.title}
                  </h2>
                  <p className="text-sm sm:text-md  py-4">{dat.desc}</p>
                </div>
                <div className="flex justify-start text-right">
                  <div className=" w-[400px] ">
                    <img
                      src={Playstore}
                      className="object-cover w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="overflow-hidden h-[300px]  md:h-[500px] ">
                <img
                  src={dat.img}
                  className="object-contain w-auto h-full"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlides;

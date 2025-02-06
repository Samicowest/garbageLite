import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Phone1 from "@/assets/phone1.png";
import Trash from "@/assets/phone_trashbin.png";
import Hero1 from "@/assets/hero_page1.jpg";
import Hero2 from "@/assets/hero_page2.jpg";
import Playstore from "@/assets/playstore.png";

import "swiper/css";
import "swiper/css/pagination";

import "@/styles.css";

import { Pagination, Autoplay } from "swiper/modules";

type HeroSlideProps = {
  title: string;
  desc: string;
  img: string;
  slideImg: string;
};

const data: HeroSlideProps[] = [
  {
    title: "Schedule Waste Pickups at Your Convenience",
    desc: "Easily schedule waste pickups at times that work best for you. Whether for your home or business, GarbageLite ensures timely and reliable service at the click of a button",
    img: Phone1,
    slideImg: Hero1,
  },
  {
    title: "Connect with Trusted Recycling Hubs Near You.",
    desc: "Find and schedule drop-offs at nearby recycling hubs. We make recycling easier by connecting you to responsible facilities that will give your waste a second life.",
    img: Trash,
    slideImg: Hero2,
  },
];

const HeroSlides: React.FC = () => {
  return (
    <div id="home">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
      >
        {data.map((dat) => (
          <SwiperSlide
            className={`w-full h-100vh`}
            style={{
              backgroundImage: `url(${dat.slideImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`py-20 px-2 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between bg-cover bg-center bg-[url(${dat.slideImg})] items-center`}
            >
              <div className="w-[80%]  bg-cover bg-no-repeat  sm:w-[50%] flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-center items-start sm:text-left">
                  <h2 className="md:text-5xl min-w-[350px] max-w-[450px]   md:leading-snug  text-4xl text-[#6AAF23] font-bold">
                    {dat.title}
                  </h2>
                  <p className="text-md md:text-xl 2xl:text-3xl font-semibold py-4 text-white">
                    {dat.desc}
                  </p>
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

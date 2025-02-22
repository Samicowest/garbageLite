import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import heroImg from "@/assets/image_hero1.png";
import heroImg2 from "@/assets/image_hero2.png";
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
    img: heroImg,
    slideImg: Hero1,
  },
  {
    title: "Connect with Trusted Recycling Hubs Near You.",
    desc: "Find and schedule drop-offs at nearby recycling hubs. We make recycling easier by connecting you to responsible facilities that will give your waste a second life.",
    img: heroImg2,
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
            key={dat.title}
            className={`w-full h-100vh`}
            style={{
              backgroundImage: `url(${dat.slideImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`pt-20 px-2 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between bg-cover bg-center bg-[url(${dat.slideImg})] items-center md:items-end`}
            >
              <div className="w-[80%]  bg-cover bg-no-repeat  py-20 sm:w-[50%] flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-center items-start sm:text-left">
                  <h2
                    className="md:text-6xl tracking-widest font-mons min-w-[200px] max-w-[550px]   md:leading-snug  text-4xl text-white font-bold"
                    style={{
                      textShadow: "1px 1px 2px #00458A",
                    }}
                  >
                    {dat.title}
                  </h2>
                  <p className="text-md md:text-xl 2xl:text-3xl font-pops font-semibold py-4 text-white">
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
              <div className="overflow-hidden p-0 h-[300px]  md:h-[500px] self-center md:self-end flex">
                <img
                  src={dat.img}
                  className="object-cover w-auto h-full self-end"
                  alt=""
                />
              </div>
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlides;

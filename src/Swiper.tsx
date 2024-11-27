import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles.css";
import Img1 from "./assets/person1.png";
import Img2 from "./assets/person2.jfif";
import Img3 from "./assets/person3.jfif";

type Dat = {
  id: number;
  name: string;
  title: string;
  desc: string;
  img: React.ReactNode;
};

// Sample data
const data: Dat[] = [
  {
    id: 1,
    name: "Samson",
    title: "Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img1} className="object-cover w-full h-full" alt="Samson" />,
  },
  {
    id: 2,
    name: "Emmanuel",
    title: "Writer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: (
      <img src={Img2} className="object-cover w-full h-full" alt="Emmanuel" />
    ),
  },
  {
    id: 3,
    name: "Samuel",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img3} className="object-cover w-full h-full" alt="Samuel" />,
  },
];

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const SwiperPage: React.FC = () => {
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
        {data.map((dat) => (
          <SwiperSlide key={dat.id}>
            <div className="py-8 px-8">
              <div className="flex flex-col items-center">
                <p className="text-sm text-center text-light">{dat.desc}</p>
                <div className="overflow-hidden rounded-full w-10 h-10">
                  {dat.img}
                </div>
                <h2 className="text-center font-bold text-2xl">{dat.name}</h2>
                <p className="text-center text-md text-light ">{dat.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperPage;

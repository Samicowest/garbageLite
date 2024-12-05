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
    desc: " Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img1} className="object-cover w-full h-full" alt="Samson" />,
  },
  {
    id: 2,
    name: "Emmanuel",
    title: "Writer",
    desc: " Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: (
      <img src={Img2} className="object-cover w-full h-full" alt="Emmanuel" />
    ),
  },
  {
    id: 3,
    name: "Samuel",
    title: "Product Manager",
    desc: " Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img3} className="object-cover w-full h-full" alt="Samuel" />,
  },
  {
    id: 4,
    name: "Emmanuel",
    title: "Web Designer",
    desc: " Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img1} className="object-cover w-full h-full" alt="Samuel" />,
  },
  {
    id: 5,
    name: "Great",
    title: "Content Creator",
    desc: " Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img2} className="object-cover w-full h-full" alt="Samuel" />,
  },
];

// Import required modules
import { Pagination } from "swiper/modules";

const SwiperPage: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((dat) => (
          <SwiperSlide key={dat.id}>
            <div className="py-8 px-8 bg-[#ECECEC] rounded-md">
              <div className="flex flex-col ">
                <p className="text-sm  text-left text-light">{dat.desc}</p>
                <div className="flex justify-between items-center mt-12">
                  <div className="">
                    <h2 className=" font-bold text-left text-xl">{dat.name}</h2>
                    <p className=" text-sm text-left text-light ">
                      {dat.title}
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-full w-10 h-10">
                    {dat.img}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperPage;

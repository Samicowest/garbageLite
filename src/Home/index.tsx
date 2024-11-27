import React from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/heroImg.jpg";
import Picture1 from "../assets/picture1.jpg";
import GoogleImg from "../assets/googleplay.png";
import Apple from "../assets/applestore.png";
import Why from "../assets/whyus.jpg";
import Phone from "../assets/phonePic2.png";
import SwiperPage from "../Swiper";
import Img2 from "../assets/person2.jfif";
import Img3 from "../assets/person3.jfif";
import Img4 from "../assets/person4.jfif";
import Img5 from "../assets/person5.jfif";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

function Home() {
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
      img: (
        <img src={Img4} className="object-cover w-full h-full" alt="Samson" />
      ),
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
      img: (
        <img src={Img3} className="object-cover w-full h-full" alt="Samuel" />
      ),
    },
    {
      id: 3,
      name: "Sir Shegun",
      title: "Product Manager",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
      img: (
        <img src={Img5} className="object-cover w-full h-full" alt="Samuel" />
      ),
    },
  ];

  return (
    <>
      <nav className="fixed z-[99999] bg-white top-0 left-0 w-full flex justify-between items-center px-16 py-3">
        <div className="overflow-hidden w-[200px] h-auto">
          <img
            className="object-cover w-full h-full"
            src={Logo}
            alt="logo from"
          />
        </div>
        <div className="flex justify-between items-center gap-8 ">
          <a
            href="#"
            className="relative py-2 px-4 hover:before:absolute hover:before:bottom-0 hover:before:w-[80%] hover:before:h-[2px] hover:before:bg-blue-500 hover:before:left-1/2 hover:before:-translate-x-1/2"
          >
            About Us
          </a>
          <a
            href="#"
            className="relative py-2 px-4 hover:before:absolute hover:before:bottom-0 hover:before:w-[80%] hover:before:h-[2px] hover:before:bg-blue-500 hover:before:left-1/2 hover:before:-translate-x-1/2"
          >
            Why Us
          </a>
          <a
            href="#"
            className="relative py-2 px-4 hover:before:absolute hover:before:bottom-0 hover:before:w-[80%] hover:before:h-[2px] hover:before:bg-blue-500 hover:before:left-1/2 hover:before:-translate-x-1/2"
          >
            FAQ
          </a>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="border-gray-400 border py-3 px-4 rounded-md cursor-pointer">
            Search for hub
          </div>
          <div className="bg-blue-700 text-slate-300 px-5 py-3 rounded-md cursor-pointer">
            Web App
          </div>
        </div>
      </nav>
      <div className="pt-[100px] py-24 px-16 flex justify-between items-center">
        <div className="w-[50%] flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl text-[#0B2027] font-bold">
              Use your waste Plastics Papers{" "}
              <span className="text-[#6BB022]">Cartons Metals</span>
            </h2>
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="overflow-hidden w-[200px] h-auto">
              <img
                src={GoogleImg}
                className="object-cover w-full h-auto"
                alt=""
              />
            </div>
            <div className="overflow-hidden w-[200px] h-auto">
              <img src={Apple} className="object-cover w-full h-auto" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="overflow-hidden w-[80%] h-auto">
            <img src={Hero} className="object-cover w-full h-auto" alt="" />
          </div>
        </div>
      </div>
      <div className="py-4 px-16 bg-[#F4FFEA]">
        <div className="grid grid-cols-3 ">
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">20K</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">90%</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">85%</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
        </div>
      </div>
      <div className="py-8  flex items-center flex-col">
        <h2 className="w-[200px] text-center py-16">
          Use your waste Plastics Papers Cartons Metals
        </h2>
        <div className="py-4 w-full bg-[#F4FFEA] flex items-center justify-center">
          <div className="overflow-hidden w-[600px] h-[500px] py-8 flex justify-end">
            <img src={Picture1} className="object-contain h-80%" alt="" />
          </div>
          <div className="rounded-l-2xl bg-[#69B022] w-[50%] py-4 px-8 flex flex-col gap-8">
            <span className="text-lighter text-xs">subtitle page on this</span>
            <h2 className="text-[50px] font-bold text-slate-100 leading-snug">
              Use your waste Plastics Papers Cartons Metals
            </h2>
            <p className="text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              quia hic optio.
            </p>
            <div className="flex gap-12">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bold text-[40px]">1000+</h2>
                <span className="text-xl">Deliver</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="font-bold text-[40px]">3000+</h2>
                <span className="text-xl">Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 flex items-center flex-col w-full  bg-[#FFFFE1]">
        <h2 className="text-[40px] font-bold">Why us?</h2>
        <div className="flex  w-full  items-center py-18">
          <div className="overflow-hidden w-full flex-1 h-[500px] py-8 flex justify-end">
            <img src={Why} className="object-contain h-80%" alt="" />
          </div>
          <div className="w-[500px] px-8">
            <h2 className="text-[45px] font-bold leading-tight">
              Use your waste Plastics Papers Cartons Metals
            </h2>
            <p className="text-lighter text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              rem soluta voluptatem officia. Dolorem, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="my-16 px-8 bg-[#69B022] ">
        <div className="relative py-8 flex justify-end">
          <div className=" absolute -top-4 -bottom-4 left-[15%]  w-[500px] flex-1   ">
            <img src={Phone} className="object-cover h-full" alt="" />
          </div>
          <div className="w-[50%] py-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] text-white font-bold">
                Use your waste PlasticsPapers Cartons Metals
              </h2>
              <p className="text-sm font-light text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="overflow-hidden w-[200px] h-auto">
                <img
                  src={GoogleImg}
                  className="object-cover w-full h-auto"
                  alt=""
                />
              </div>
              <div className="overflow-hidden w-[200px] h-auto">
                <img
                  src={Apple}
                  className="object-cover w-full h-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16 bg-[#F6F6F6] w-full">
        <div className="mx-auto w-[800px] py-">
          <h2 className="text-4xl w-full py-2 my-4 text-center relative before:w-[60%] before:h-[1px] before:absolute before:-bottom-4 before:bg-slate-200 before:left-1/2 before:-translate-x-1/2">
            What people are saying about GarbageLit
          </h2>
          <SwiperPage />
        </div>
      </div>
      <div className="bg-[#F4FFEA] py-8 px-8 w-full flex items-center flex-col">
        <h2 className="font-extrabold text-2xl">Our Partners</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-4 gap-4 py-10 max-w-5xl">
          {data.map((dat) => (
            <div
              key={dat.id}
              className="p-4 border border-slate-200 flex-col gap-2"
            >
              <div className="overflow-hidden w-full h-[200px]">{dat.img}</div>
              <h2 className="font-bold text-xl">{dat.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black p-10 mt-16">
        <div className="flex justify-between items-start w-full ">
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden w-[200px]">
              <img src={Logo} className="object-cover w-full" alt="logo" />
            </div>
            <h2 className="text-slate-200 font-extrabold text-2xl">
              Search Hub
            </h2>
            <p className="text-slate-200">lorem ipsum</p>
            <div className="flex border border-slate-300 rounded-r-md overflow-hidden">
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-transparent "
                name="search"
                id=""
              />
              <span className="border bg-slate-300 cursor-pointer text-black  px-4 py-2">
                Search
              </span>
            </div>
          </div>
          <div className="w-[700px] flex items-start gap-2 ">
            <div className="w-[30%] px-4">
              <h2 className="font-bold text-xl text-white">Quicklinks </h2>
              <div className="flex flex-col text-white py-4 gap-2">
                <span className="text-sm">About Us</span>
                <span className="text-sm">Why Us</span>
                <span className="text-sm">FAQ's</span>
              </div>
            </div>
            <div className="w-[30%] px-4">
              <h2 className="font-bold text-xl text-white">Company</h2>
              <div className="flex flex-col text-white py-4 gap-2">
                <span className="text-sm">Privacy Policy</span>
                <span className="text-sm">Terms and Conditions</span>
                <span className="text-sm">Contact Us</span>
              </div>
            </div>
            <div className="w-[40%] px-4">
              <h2 className="font-bold text-xl text-white">Contact Us</h2>
              <div className="flex flex-col text-white py-4 gap-2">
                <span className="text-sm">Support@garbagelite.com</span>
                <span className="text-sm">N0 47, Lorem Ipsum, Nigeria.</span>
                <div className="flex gap-4  *:text-white *:text-xl">
                  <FaInstagram />
                  <CiFacebook />
                  <FaXTwitter />
                  <CiLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white font-bold text-sm mt-16 mb-2">
          2024 | GarbageLite
        </div>
      </div>
    </>
  );
}

export default Home;

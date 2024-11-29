import React from "react";
import Heros from "../assets/heroImg.jpg";
import Apple from "../assets/applestore.png";
import GoogleImg from "../assets/googleplay.png";
export function Hero() {
  return (
    <div className="pt-[100px]  py-24 px-2 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between bg-white items-center">
      <div className="w-[80%] sm:w-[50%] flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 text-center items-start sm:text-left">
          <h2 className="text-4xl text-[#0B2027] font-bold">
            Use your waste Plastics Papers{" "}
            <span className="text-[#6BB022]">Cartons Metals</span>
          </h2>
          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="flex gap-4 items-center justify-start ">
          <div className="overflow-hidden w-[40%] h-auto">
            <img
              src={GoogleImg}
              className="object-cover w-full h-auto"
              alt=""
            />
          </div>
          <div className="overflow-hidden w-[40%] h-auto">
            <img src={Apple} className="object-cover w-full h-auto" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[80%] sm:w-[50%]">
        <div className="overflow-hidden w-[80%] h-auto">
          <img src={Heros} className="object-cover w-full h-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../assets/logo.png";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";

export function Footer() {
  return (
    <div className="bg-black p-10 mt-16">
      <div className="flex justify-between flex-col md:flex-row items-start w-full ">
        <div className="flex flex-col gap-4 my-8">
          <div className="overflow-hidden w-[200px] ">
            <img src={Logo} className="object-cover w-full" alt="logo" />
          </div>
          <h2 className="text-slate-200 font-extrabold text-2xl">Search Hub</h2>
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
        <div className="grid grid-cols-2 xxm:grid-cols-3 ">
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">
              Quicklinks{" "}
            </h2>
            <div className="flex flex-col text-white py-4 gap-2">
              <span className="text-sm">About Us</span>
              <span className="text-sm">Why Us</span>
              <span className="text-sm">FAQ's</span>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">Company</h2>
            <div className="flex flex-col text-white py-4 gap-2">
              <span className="text-sm">Privacy Policy</span>
              <span className="text-sm">Terms and Conditions</span>
              <span className="text-sm">Contact Us</span>
            </div>
          </div>
          <div className="">
            <h2 className="font-bold text-md lg:text-xl text-white">
              Contact Us
            </h2>
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
  );
}

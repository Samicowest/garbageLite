import { NavLink } from "react-router-dom";
import Why from "../assets/whyus.jpg";

export function WhyUs() {
  return (
    <div
      id="whyus"
      className="py-8 pt-24 flex items-center flex-col w-full  bg-[#FFFFE1]"
    >
      <h2 className="text-[40px] font-bold">Why us?</h2>
      <div className="flex  w-full flex-col-reverse md:flex-row  items-center py-18">
        <div className="overflow-hidden w-full flex-1 h-[500px] py-8 flex justify-end">
          <img src={Why} className="object-contain h-80%" alt="" />
        </div>
        <div className="w-full flex flex-col items-center sm:item-start md:w-[500px] px-8">
          <h2 className="text-xl sm:text-[25px] mb-10 md:mb-2 sm:text-[30px] md:text-[45px] font-bold leading-tight text-center sm:text-left">
            Use your waste Plastics Papers Cartons Metals
          </h2>
          <p className="text-lighter mb-8 text-sm text-center sm:text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            rem soluta voluptatem officia. Dolorem, consectetur.
          </p>
          <NavLink
            to="/why"
            className="font-bold text-sm py-2 px-8 bg-blue-600 text-slate-200 rounded-md"
          >
            More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

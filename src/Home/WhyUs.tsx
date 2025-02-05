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
          <img src={Why} className="object-cover h-80%" alt="" />
        </div>
        <div className="w-full flex flex-col  sm:item-start md:w-1/2 px-8">
          <p className="text-normal text-md md:text-lg lg:text-2xl mb-8 text-md text-center sm:text-left ">
            GarbageLite stands out as the premier solution for modern waste
            management. Our intuitive platform simplifies the process of waste
            collection and recycling, providing unparalleled convenience and
            reliability.
          </p>
          <p className="text-normal text-md md:text-lg lg:text-2xl mb-8 text-md text-center sm:text-left ">
            We bridge the gap between individuals and eco-friendly waste
            disposal, ensuring that sustainability is not just a concept but an
            everyday practice. Choose us for our innovative approach,
            user-focused features, and commitment to making your environment
            cleaner and greener.
          </p>
          <div className="py-2">
            <NavLink
              to="/why"
              className="font-bold text-md lg:text-xl py-2 px-8 bg-primary text-slate-200 rounded-md"
            >
              Show More...
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

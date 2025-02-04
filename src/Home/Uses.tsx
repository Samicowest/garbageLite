import GoogleImg from "../assets/googleplay.png";
import Apple from "../assets/applestore.png";

import Phone from "../assets/phone3.png";

export function Uses() {
  return (
    <div className="my-16 px-4 sm:px-8 bg-[#69B022] ">
      <div className="relative py-8 flex flex-col-reverse sm:flex-row items-center justify-end">
        <div className=" absolute -bottom-[50px] xm:-bottom-[100px] left-1/2  -translate-x-1/2 sm:translate-x-0 sm:-top-4 h-400px w-[60%] xm:w-[50%]  sm:h-auto sm:-bottom-4 sm:left-[6%] lg:left-[15%]  sm:w-[500px] flex-1   ">
          <img src={Phone} className="object-cover h-full" alt="" />
        </div>
        <div className="w-[50%] h-[280px] xm:h-[350px] md:h-auto "></div>
        <div className="w-[80%] sm:w-[50%] py-12">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <h2 className="text-2xl xs:text-3xl text-center sm:text-left lg:text-4xl text-white font-bold">
              Use your waste PlasticsPapers Cartons Metals
            </h2>
            <p className="text-lg md:text-2xl font-semibold text-slate-200 text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center sm:justify-start">
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
      </div>
    </div>
  );
}

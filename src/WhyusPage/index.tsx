import Img1 from "../assets/why1.png";
import WhyUsSlide from "./WhyUsSlide";

function WhyUsPage() {
  return (
    <>
      <div className="flex pt-24 py-12   h-auto">
        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center ">
          <div className="px-10 w-full md:w-[50%]">
            <h2 className="text-slate-700 font-bold text-2xl md:text-4xl">
              Why Us
            </h2>
            <p className="text-md md:text-2xl leading-snug py-4">
              GarbageLite stands out as the premier solution for modern waste
              management. Our intuitive platform simplifies the process of waste
              collection and recycling, providing unparalleled convenience and
              reliability.
            </p>
            <p className="text-md md:text-2xl leading-snug py-4">
              We bridge the gap between individuals and eco-friendly waste
              disposal, ensuring that sustainability is not just a concept but
              an everyday practice. Choose us for our innovative approach,
              user-focused features, and commitment to making your environment
              cleaner and greener.
            </p>
          </div>
          <div className="overflow-hidden w-full px-4  md:px-0  md:w-[50%] h-auto">
            <img
              className="object-contain w-full h-full rounded-md md:rounded-l-md"
              src={Img1}
              alt="image1"
            />
          </div>
        </div>
      </div>

      <div className="py-12">
        <WhyUsSlide />
      </div>
    </>
  );
}

export default WhyUsPage;

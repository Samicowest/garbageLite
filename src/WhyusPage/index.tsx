import Img1 from "../assets/why1.png";
import Img2 from "../assets/why2.png";

function WhyUsPage() {
  return (
    <>
      <div className="flex pt-24 py-12   h-auto">
        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center ">
          <div className="px-10 w-full md:w-[50%]">
            <h2 className="text-slate-700 font-bold text-2xl">Why Us</h2>
            <p className="text-sm leading-snug py-4">
              GarbageLite stands out as the premier solution for modern waste
              management. Our intuitive platform simplifies the process of waste
              collection and recycling, providing unparalleled convenience and
              reliability.
            </p>
            <p className="text-sm leading-snug py-4">
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
      <div className="flex  py-12   h-auto">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center ">
          <div className="overflow-hidden px-4 md:px-0 w-full md:w-[50%] h-auto rounded-r-md">
            <img
              className="object-cover w-full h-full rounded-md md:rounded-r-md"
              src={Img2}
              alt="image1"
            />
          </div>
          <div className="px-10 w-full md:w-[50%]">
            <h2 className="text-slate-700 font-bold text-2xl">Core Values</h2>
            <div className="my-1">
              <span className="text-slate-700 font-bold text-sm">
                Sustainability:
              </span>
              <p className="text-sm leading-snug py-1">
                GarbageLite stands out as the premier solution for modern waste
                management. Our intuitive platform simplifies the process of
                waste collection and recycling, providing unparalleled
                convenience and reliability.
              </p>
            </div>
            <div className="my-1">
              <span className="text-slate-700 font-bold text-sm">
                Transparency:
              </span>
              <p className="text-sm leading-snug py-1">
                We uphold open communication and integrity in all our processes.
                Users enjoy full visibility, ensuring their waste is handled
                responsibly.
              </p>
            </div>
            <div className="my-1">
              <span className="text-slate-700 font-bold text-sm">
                Community Impact:
              </span>
              <p className="text-sm leading-snug py-1">
                By engaging communities, we foster a culture of environmental
                responsibility. Our initiatives empower individuals to
                contribute to positive change.
              </p>
            </div>
            <div className="my-1">
              <span className="text-slate-700 font-bold text-sm">
                Reliability:
              </span>
              <p className="text-sm leading-snug py-1">
                We deliver consistent, dependable waste management services.
                Timely collections and responsive support ensure seamless user
                experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUsPage;

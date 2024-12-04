import Picture1 from "../assets/picture1.jpg";

export function Recycle() {
  return (
    <div id="aboutus" className="py-8  flex items-center flex-col">
      <h2 className="text-2xl lg:text-4xl  font-bold text-slate-800 max-w-[450px] text-center py-16">
        Connect with Trusted Recycling Hubs Near You
      </h2>
      <div className="py-4 w-full bg-[#F4FFEA] flex flex-col sm:flex-row items-center justify-center">
        <div className="overflow-hidden w-full sm:w-[600px] h-[400px] md:h-[500px] py-8 flex items-center justify-center sm:justify-end">
          <img src={Picture1} className="object-contain h-80%" alt="" />
        </div>

        <div className="rounded-l-2xl hidden  bg-[#69B022] w-full sm:w-[45%] py-4 px-8 sm:flex flex-col gap-8">
          <h2 className="text-[20px] md:text-[30px] lg:text-[50px] font-bold text-slate-100 leading-snug">
            About Us
          </h2>
          <p className="text-sm text-slate-100">
            At GarbageLite, we believe in transforming the way waste is managed
            by providing a reliable waste collection system as well as
            connecting communities with efficient recycling solutions. Our
            platform is designed to bridge the gap between households,
            businesses, and waste management services, promoting sustainability
            and reducing environmental impact. By leveraging technology, we
            simplify waste collection, recycling, and tracking, making it easier
            than ever to live responsibly.
          </p>
          <p className="text-sm text-slate-100">
            Created by a group of Product Managers.
          </p>
          <p className="text-sm text-slate-100">
            <span className="font-bold">Our Mission: </span> "To lead the way in
            digital waste management, fostering sustainable habits and reducing
            environmental impact globally."
          </p>
        </div>
      </div>
    </div>
  );
}

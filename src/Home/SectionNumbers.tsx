import SwiperNumber from "../SwiperNumber";
export function SectionNumbers({}) {
  return (
    <>
      <div className="hidden sm:block py-4 px-16 bg-[#F4FFEA]">
        <div className="grid grid-cols-3 ">
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">90%</h2>
            <p className="text-center text-md md:text-2xl">
              User Satisfaction Rate
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">100%</h2>
            <p className="text-center text-md md:text-2xl">Anticipate Rate</p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">85%</h2>
            <p className="text-center text-md md:text-2xl">
              Recycling Efficiency
            </p>
          </div>
        </div>
      </div>
      <div className="block sm:hidden bg-[#F4FFEA]">
        <SwiperNumber />
      </div>
    </>
  );
}

import SwiperNumber from "../SwiperNumber";
export function SectionNumbers({}) {
  return (
    <>
      <div className="hidden sm:block py-4 px-16 bg-[#F4FFEA]">
        <div className="grid grid-cols-3 ">
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">20K</h2>
            <p className="text-center text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">90%</h2>
            <p className="text-center text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center py-14 px-8 flex-col">
            <h2 className="font-extrabold text-[50px]">85%</h2>
            <p className="text-center text-md md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic
              delectus maxime sit
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

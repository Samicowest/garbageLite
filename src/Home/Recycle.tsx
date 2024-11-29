import Picture1 from "../assets/picture1.jpg";
export function Recycle() {
  return (
    <div className="py-8  flex items-center flex-col">
      <h2 className="w-[200px] text-center py-16">
        Use your waste Plastics Papers Cartons Metals
      </h2>
      <div className="py-4 w-full bg-[#F4FFEA] flex flex-col sm:flex-row items-center justify-center">
        <div className="overflow-hidden w-full sm:w-[600px] h-[400px] md:h-[500px] py-8 flex items-center justify-center sm:justify-end">
          <img src={Picture1} className="object-contain h-80%" alt="" />
        </div>

        <div className="rounded-l-2xl hidden  bg-[#69B022] w-full sm:w-[50%] py-4 px-8 sm:flex flex-col gap-8">
          <span className="text-lighter text-xs">subtitle page on this</span>
          <h2 className="text-[20px] md:text-[30px] lg:text-[50px] font-bold text-slate-100 leading-snug">
            Use your waste Plastics Papers Cartons Metals
          </h2>
          <p className="text-xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            quia hic optio.
          </p>
          <div className="flex gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="font-bold text-[20px] lg:text-[40px]">1000+</h2>
              <span className="text-md lg:text-xl">Deliver</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="font-bold text-[20px] lg:text-[40px]">3000+</h2>
              <span className="text-md lg:text-xl">Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

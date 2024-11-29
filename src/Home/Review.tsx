import React from "react";

interface ReviewProps {
  children: React.ReactNode; // Defines the type for the children prop
}

export function Review({ children }: ReviewProps) {
  return (
    <div className="my-16 mt-24 bg-[#F6F6F6] w-full overflow-hidden">
      <div className="mx-auto max-w-[800px]  py-2">
        <h2 className="text-4xl w-full py-2 my-4 text-center relative before:w-[60%] before:h-[1px] before:absolute before:-bottom-4 before:bg-slate-200 before:left-1/2 before:-translate-x-1/2">
          What people are saying about GarbageLit
        </h2>
        {children}
      </div>
    </div>
  );
}
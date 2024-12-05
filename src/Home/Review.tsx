interface ReviewProps {
  children: React.ReactNode; // Defines the type for the children prop
}

export function Review({ children }: ReviewProps) {
  return (
    <div className="my-16 mt-24 px-4  w-full overflow-hidden">
      <div className="mx-auto max-w-[1000px]  py-2">
        <h2 className="text-2xl font-bold mb-10 sm:text-4xl w-full py-2 my-4 text-center relative before:w-[60%] before:h-[1px] before:absolute before:-bottom-4 before:bg-slate-200 before:left-1/2 before:-translate-x-1/2">
          We go beyond waste to customer satisfaction
        </h2>
        {children}
      </div>
    </div>
  );
}

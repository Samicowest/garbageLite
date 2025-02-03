import { useEffect, useState } from "react";

const AnimatedContainer = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-container");
      if (element) {
        const rect = element.getBoundingClientRect();
        setInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="animated-container"
      className="grid grid-cols-3 gap-4 w-full h-64 bg-gray-200 p-4"
    >
      {/* Child 1 */}
      <div
        className={`bg-blue-500 flex items-center justify-center text-white text-xl h-full transform transition-all duration-700 ease-out ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        Child 1
      </div>

      {/* Child 2 */}
      <div
        className={`bg-green-500 flex items-center justify-center text-white text-xl h-full transform transition-all duration-700 ease-out delay-200 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        Child 2
      </div>

      {/* Child 3 */}
      <div
        className={`bg-red-500 flex items-center justify-center text-white text-xl h-full transform transition-all duration-700 ease-out delay-400 ${
          inView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        Child 3
      </div>
    </div>
  );
};

export default AnimatedContainer;

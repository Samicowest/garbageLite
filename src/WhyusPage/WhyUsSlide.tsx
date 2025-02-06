import { useState, useEffect, useRef } from "react";

import IconCommunity from "@/assets/Icon_Community Impact.png";
import IconInnovation from "@/assets/Icon_Innovation.png";
import IconReliability from "@/assets/Icon_Reliability.png";
import IconSustainability from "@/assets/Icon_Sustainability.png";
import IconTransparency from "@/assets/Icon_Transparency.png";
import ImageCommunity from "@/assets/Image_Community Impact.png";
import ImageInnovation from "@/assets/Image_Innovation.png";
import ImageReliability from "@/assets/Image_Reliability.png";
import ImageSustainability from "@/assets/Image_Sustainability.png";
import ImageTransparency from "@/assets/Image_Transparency.png";

interface SlideContent {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

const ContentSlider = () => {
  const slides: SlideContent[] = [
    {
      id: 1,
      image: ImageCommunity,
      icon: IconCommunity,
      title: "Community Impact",
      description:
        "GarbageLite stands out as the premier solution for modern waste management. Our intuitive platform simplifies the process of waste collection and recycling, providing unparalleled convenience and reliability.",
    },
    {
      id: 2,
      image: ImageInnovation,
      icon: IconInnovation,
      title: "Innovation",
      description:
        "GarbageLite stands out as the premier solution for modern waste management. Our intuitive platform simplifies the process of waste collection and recycling, providing unparalleled convenience and reliability.",
    },
    {
      id: 3,
      image: ImageReliability,
      icon: IconReliability,
      title: "Reliability",
      description:
        "We deliver consistent, dependable waste management services. Timely collections and responsive support ensure seamless user experiences",
    },
    {
      id: 4,
      image: ImageSustainability,
      icon: IconSustainability,
      title: "Sustainability",
      description:
        "GarbageLite stands out as the premier solution for modern waste management. Our intuitive platform simplifies the process of waste collection and recycling, providing unparalleled convenience and reliability.",
    },
    {
      id: 5,
      image: ImageTransparency,
      icon: IconTransparency,
      title: "Transparency",
      description:
        "We uphold open communication and integrity in all our processes. Users enjoy full visibility, ensuring their waste is handled responsibly.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slideOrder, setSlideOrder] = useState<number[]>([
    ...slides.map((_, i) => i),
  ]);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Function to rotate array to put selected index at start
  const rotateArrayToIndex = (arr: number[], index: number) => {
    const position = arr.indexOf(index);
    return [...arr.slice(position), ...arr.slice(0, position)];
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        setSlideOrder((current) => rotateArrayToIndex(current, nextSlide));
        return nextSlide;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle manual slide selection
  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    setSlideOrder((current) => rotateArrayToIndex(current, index));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="text-3xl text-center py-4 px-4 font-bold">
        CORE VALUES
      </div>
      {/* Main content section */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row   gap-2">
          <div className=" w-full h-auto self-stretch min-h-56 md:w-56  bg-blue-800 flex items-center flex-col justify-center">
            <div className="w-28 h-28   p-4">
              <img
                src={slides[currentSlide].icon}
                alt="image"
                className="w-full  h-full  object-cover transition-all duration-500"
              />
            </div>
            <div className="text-sm md:text-md text-white font-bold">
              {slides[currentSlide].title}
            </div>
          </div>
          <div
            className="mt-2 md:w-1/2 p-6 relative before:absolute before:top-0 before:left-0 before:w-[30%] before:h-[3px] before:bg-blue-600 
                      after:absolute after:bottom-0 after:right-0 after:w-[30%] after:h-[3px] after:bg-blue-600 
                      "
          >
            <p className="text-md md:text-xl self-start font-semibold text-gray-600 transition-all duration-500">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Slider section */}
      <div className="relative bg-gray-100 p-4 rounded-lg overflow-hidden">
        <div
          ref={sliderRef}
          className="flex space-x-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(0px)`,
          }}
        >
          {slideOrder.map((slideIndex) => (
            <div
              key={slides[slideIndex].id}
              onClick={() => handleSlideClick(slideIndex)}
              className={`
                flex-shrink-0 cursor-pointer transition-all duration-500
                ${
                  currentSlide === slideIndex
                    ? "scale-105 shadow-lg"
                    : "scale-100 opacity-70"
                }
              `}
              style={{
                transform: `translateX(0px)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              <div className="w-56 h-48 relative rounded-lg overflow-hidden">
                <img
                  src={slides[slideIndex].image}
                  alt="image2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;

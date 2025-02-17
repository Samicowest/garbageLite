import React from "react";
import Logo from "@/assets/logo.png";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "large",
  color = "text-blue-500",
}) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "h-4 w-4";
      case "medium":
        return "h-8 w-8";
      case "large":
        return "h-24 w-24";
      default:
        return "h-8 w-8";
    }
  };

  return (
    <div className="flex justify-center flex-col gap-4 items-center h-[100vh] w-[100vw]">
      <div
        className={`animate-spin rounded-full border-blue-800 border-4 border-t-transparent ${color} ${getSizeClass()}`}
      ></div>
      <div className="overflow-hidden w-[200px] h-auto">
        <img className="object-cover w-full h-full" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Spinner;

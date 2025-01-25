import React from "react";

const CustomSelect: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}> = ({ value, onChange, options }) => {
  return (
    <div className="relative w-full md:w-[30%] mb-4">
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 pr-8 border border-gray-300 rounded-lg appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;

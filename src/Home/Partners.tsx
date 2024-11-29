import React from "react";
import Img2 from "../assets/person2.jfif";
import Img3 from "../assets/person3.jfif";
import Img4 from "../assets/person4.jfif";
import Img5 from "../assets/person5.jfif";

type Dat = {
  id: number;
  name: string;
  title: string;
  desc: string;
  img: React.ReactNode;
};

// Sample data
const data: Dat[] = [
  {
    id: 1,
    name: "Samson",
    title: "Developer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img4} className="object-cover w-full h-full" alt="Samson" />,
  },
  {
    id: 2,
    name: "Emmanuel",
    title: "Writer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: (
      <img src={Img2} className="object-cover w-full h-full" alt="Emmanuel" />
    ),
  },
  {
    id: 3,
    name: "Samuel",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img3} className="object-cover w-full h-full" alt="Samuel" />,
  },
  {
    id: 4,
    name: "Sir Shegun",
    title: "Product Manager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam expedita laudantium repellendus tempora nisi doloremque.",
    img: <img src={Img5} className="object-cover w-full h-full" alt="Samuel" />,
  },
];
export function Partners() {
  return (
    <div className="bg-[#F4FFEA] py-8 px-8 w-full flex items-center flex-col">
      <h2 className="font-extrabold text-2xl">Our Partners</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-4 gap-4 py-10 max-w-5xl">
        {data.map((dat) => (
          <div
            key={dat.id}
            className="p-4 border border-slate-200 flex-col gap-2"
          >
            <div className="overflow-hidden w-full h-[200px]">{dat.img}</div>
            <h2 className="font-bold text-xl">{dat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

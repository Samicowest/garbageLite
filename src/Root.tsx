import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";

import Whatsaap from "@/Whatsaap";
import { Footer } from "./Footer";

function Root() {
  return (
    <>
      <div className=" w-full bg-[#FFFFE1] ">
        <Whatsaap />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Root;

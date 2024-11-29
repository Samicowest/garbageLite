import { Footer } from "./Footer";
import { Review } from "./Review";
import { Uses } from "./Uses";
import { WhyUs } from "./WhyUs";
import { Recycle } from "./Recycle";
import { SectionNumbers } from "./SectionNumbers";
import { Hero } from "./Hero";
import { Navbar } from "../Navbar";
import React from "react";

import SwiperPage from "../Swiper";

function Home() {
  return (
    <>
      <div className="bg-[#FFFFE1] w-full">
        <Navbar />
        <Hero />
        <SectionNumbers />
        <Recycle />
        <WhyUs />
        <Uses />
        <Review>
          <SwiperPage />
        </Review>
        <Footer />
      </div>
    </>
  );
}

export default Home;

import { Review } from "./Review";
import { Uses } from "./Uses";
import { WhyUs } from "./WhyUs";
import { Recycle } from "./Recycle";
import { SectionNumbers } from "./SectionNumbers";
import { Hero } from "./Hero";

import SwiperPage from "../Swiper";
import CustomAccordion from "./CustomAccordion";
import Overlay from "./Overlay";

function Home() {
  return (
    <>
      <Hero />
      <SectionNumbers />
      <Recycle />
      <WhyUs />
      <Uses />
      <Review>
        <SwiperPage />
      </Review>
      <CustomAccordion />
      <Overlay />
    </>
  );
}

export default Home;

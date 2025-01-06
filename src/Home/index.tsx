import { Review } from "./Review";
import { Uses } from "./Uses";
import { WhyUs } from "./WhyUs";
import { Recycle } from "./Recycle";
import { SectionNumbers } from "./SectionNumbers";
import { Hero } from "./Hero";

import SwiperPage from "../Swiper";
import CustomAccordion from "./CustomAccordion";

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
    </>
  );
}

export default Home;

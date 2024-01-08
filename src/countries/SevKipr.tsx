import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Question from "../components/question/Question";
import Footer from "../components/footer/Footer";
import Content from "../components/content/ContentSevKipr";
import Line from "../components/line/Line";
import slider1 from "./../images/sevkipr/slider-image1.webp";
import slider2 from "./../images/sevkipr/slider-image2.jpg";
import slider3 from "./../images/sevkipr/slider-image3.webp";

import { countryProps } from "../types/types";

const SevKipr = (props: countryProps) => {
  return (
    <div>
      <Hero1
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        text="Северный Кипр"
      />
      <Interlayer />
      <Content />
      <Carousel code={props.code} />
      <Line />
      <Feedback />
      <About />
      <Question />
      <Footer />
    </div>
  );
};

export default SevKipr;

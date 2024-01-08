import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Question from "../components/question/Question";
import Footer from "../components/footer/Footer";
import Content from "../components/content/ContentTailand";
import Line from "../components/line/Line";
import slider1 from "./../images/thailand/slider-image1.jpg";
import slider2 from "./../images/thailand/slider-image2.jpg";
import slider3 from "./../images/thailand/slider-image3.jpg";

import { countryProps } from "../types/types";

const Thailand = (props: countryProps) => {
  return (
    <div>
      <Hero1
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        text="Тайланд"
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

export default Thailand;

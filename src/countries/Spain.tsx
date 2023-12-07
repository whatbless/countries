import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Question from "../components/question/Question";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";
import Feedback1 from "../components/feedback/Feedback1";
import Line from "../components/line/Line";

const Spain = () => {
  return (
    <div>
      <Hero1 />
      <Interlayer />
      <Carousel />
      <Feedback />
      <Content />
      <About />
      <Feedback1 />
      <Line />
      <Footer />
    </div>
  );
};

export default Spain;

import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero from "../components/hero/Hero";
import Interlayer from "../components/interlayer/Interlayer";
import Question from "../components/question/Question";
import Footer from "../components/footer/Footer";

const UK = () => {
  return (
    <div>
      <Hero />
      <Interlayer />
      <Carousel />
      <Feedback />
      <About />
      <Question />
      <Footer />
    </div>
  );
};

export default UK;

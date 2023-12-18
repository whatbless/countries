import React from "react";
import About from "../components/about/About";
import Carousel from "../components/carousel/Carousel";
import Feedback from "../components/feedback/Feedback";
import Hero1 from "../components/hero/Hero1";
import Interlayer from "../components/interlayer/Interlayer";
import Footer from "../components/footer/Footer";
import Content from "../components/content/Content";
import Feedback1 from "../components/feedback/Feedback1";
import Line from "../components/line/Line";
import slider1 from "./../images/slider1.jpeg";
import slider2 from "./../images/slider2.jpeg";
import slider3 from "./../images/slider3.jpeg";
import slider4 from "./../images/slider4.jpeg";
import Ender from "../components/ender/Ender";
// 
import {countryProps} from '../types/types';
// 

const Portugal = (props: countryProps) => {
  console.log(props.code);
  
  return (
    <div>
      <Hero1
        slider1={slider1}
        slider2={slider2}
        slider3={slider3}
        slider4={slider4}
        text="Пройдите краткий опрос и получите персональную консультацию по выбору лучшей недвижимости в израиле!"
      />
      <Interlayer />
      <Carousel code={props.code} />
      <Feedback />
      <Content />
      <About />
      <Feedback1 />
      <Line />
      <Ender />
      <Footer />
    </div>
  );
};

export default Portugal;

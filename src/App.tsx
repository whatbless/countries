import React, { useEffect, useState } from "react";
import Carousel from "./components/carousel/Carousel";
import Feedback from "./components/feedback/Feedback";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Question from "./components/question/Question";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./anims.css";
import logo1 from "./images/logo1.png";

function App() {
  const [scroll, setScroll] = React.useState(0);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width / height < 1.45;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      {isMobile ? (
        scroll > 200 ? (
          <div id="header">
            <Header />
          </div>
        ) : (
          <div className="absolute top-5 right-5">
            <img className="w-20" src={logo1} alt="logo1"></img>
          </div>
        )
      ) : (
        <Header />
      )}

      {scroll > 900 && (
        <a
          href="#hero"
          id="arrowUp"
          className="px-6 py-5 rounded-full fixed right-5 bottom-5 bg-regal-blue cursor-pointer z-50"
        >
          <FontAwesomeIcon className="text-white text-xl" icon={faAngleUp} />
        </a>
      )}
      <div>
        <Hero />
        <Interlayer />
        <Carousel />
        <Feedback />
        <About />
        <Question />
        <Footer />
      </div>
    </div>
  );
}

export default App;

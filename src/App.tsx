import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Header from "./components/header/Header";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./anims.css";
import logo1 from "./images/logo1.png";
import Navs from "./components/navs/Navs";
import { Route, Routes } from "react-router-dom";
//@ts-ignore
import Portugal from "./countries/Portugal";
import Argentina from "./countries/Argentina";
import France from "./countries/France";
import Italy from "./countries/Italy";
import UK from "./countries/UK";
import Spain from "./countries/Spain";

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
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Interlayer />
                <Navs />
              </div>
            }
          />
          <Route path="/portugal" element={<Portugal />} />
          <Route path="/argentina" element={<Argentina />} />
          <Route path="/france" element={<France />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/spain" element={<Spain />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

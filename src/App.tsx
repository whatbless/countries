import React, { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Interlayer from "./components/interlayer/Interlayer";
import Header from "./components/header/Header";
import Header1 from "./components/header/Header1";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./anims.css";
import logo1 from "./images/logo1.png";
import { Route, Routes } from "react-router-dom";
//@ts-ignore
import Portugal from "./countries/Portugal";
import Argentina from "./countries/Argentina";
import France from "./countries/France";
import Italy from "./countries/Italy";
import UK from "./countries/UK";
import Spain from "./countries/Spain";
import { NavLink } from "react-router-dom";

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
            path="/countries"
            element={
              <NavLink
                to="/"
                className="absolute px-10 text-5xl py-5 left-1/2 top-1/2 bg-pastel-grey"
              >
                Начать просмотр
              </NavLink>
            }
          />
          <Route
            path="/"
            element={
              <div>
                {isMobile ? (
                  scroll > 200 ? (
                    <div id="header">
                      <Header1 />
                    </div>
                  ) : (
                    <div className="absolute top-5 right-5">
                      <img className="w-20" src={logo1} alt="logo1"></img>
                    </div>
                  )
                ) : (
                  <Header1 />
                )}
                <Hero />
                <Interlayer />
              </div>
            }
          />
          <Route
            path="/portugal"
            element={
              <div>
                <Header />
                <Portugal />
              </div>
            }
          />
          <Route
            path="/argentina"
            element={
              <div>
                <Header />
                <Argentina />
              </div>
            }
          />
          <Route
            path="/france"
            element={
              <div>
                <Header />
                <France />
              </div>
            }
          />
          <Route
            path="/italy"
            element={
              <div>
                <Header />
                <Italy />
              </div>
            }
          />
          <Route
            path="/uk"
            element={
              <div>
                <Header />
                <UK />
              </div>
            }
          />
          <Route
            path="/spain"
            element={
              <div>
                <Header />
                <Spain />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

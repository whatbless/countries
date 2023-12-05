import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "./../../images/logo.png";
import logo1 from "./../../images/logo1.png";
import facebook from "./../../images/facebook.png";
import instagram from "./../../images/instagram.png";
import whatsapp from "./../../images/whatsapp.png";
import { SocialType } from "../../types/types";

const navs = [
  { title: "עמוד הבית", anchor: "#hero" },
  { title: "חיפוס נכס", anchor: "#objects" },
  { title: "מי אנחנו", anchor: "#about" },
  { title: "קבל ייעוץ", anchor: "#question" },
  { title: "צור קשר", anchor: "#about" },
];

const socials: Array<SocialType> = [
  { alt: "facebook", img: facebook, link: "/" },
  { alt: "instagram", img: instagram, link: "/" },
  {
    alt: "whatsapp",
    img: whatsapp,
    link: "https://wa.me/972586557877?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82",
  },
];

const Header = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        scroll < 200
          ? menuOpen
            ? "text-regal-blue z-40 fixed w-full flex justify-center duration-500 backdrop-blur-sm"
            : "text-regal-blue z-40 fixed w-full flex justify-center duration-500"
          : "text-regal-blue z-40 fixed w-full flex justify-center bg-white duration-500"
      }
    >
      <nav className="container relative mx-auto flex xl:flex-row flex-col items-start px-10">
        <div className="flex justify-between">
          <a href="/">
            <img
              className={isMobile ? "w-20 py-4" : "w-52"}
              src={isMobile ? logo1 : logo}
            ></img>
          </a>
          <div
            className={isMobile ? "menu1" : "menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <div className="flex xl:flex-row flex-col items-center w-full justify-center">
            {navs.map((nav) => (
              <li
                className={
                  scroll < 200 ? "drop-shadow-5xl xl:mb-0 mb-3" : "xl:mb-0 mb-3"
                }
              >
                <a
                  href={nav.anchor}
                  className={
                    scroll < 200
                      ? "mx-3.5 font-bold px-2.5 py-1 2xl:text-xl text-lg rounded-none uppercase cursor-pointer drop-shadow-5xl text-white hover:border-regal-red hover:border-b-2"
                      : "mx-3.5 font-bold px-2.5 2xl:text-xl text-lg py-1 rounded-none uppercase cursor-pointer text-regal-red hover:border-regal-red hover:border-b-2"
                  }
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </div>
          <div className="flex flex-row xl:mb-0 mb-3 items-center">
            {socials.map((social: SocialType) => (
              <li className="w-full flex justify-center">
                <a
                  target={"_blank"}
                  href={social.link}
                  className="w-9 mx-3 duration-300 hover:-translate-y-1"
                >
                  <img src={social.img} alt={social.alt} />
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

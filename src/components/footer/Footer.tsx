import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import whatsapp from "./../../images/whatsapp.png";
import instagram from "./../../images/instagram.png";
import facebook from "./../../images/facebook.png";
import logo from "./../../images/logo.png";
import { SocialType } from "../../types/types";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socials: Array<SocialType> = [
  { alt: "facebook", img: facebook, link: "/" },
  { alt: "instagram", img: instagram, link: "/" },
  {
    alt: "whatsapp",
    img: whatsapp,
    link: "https://wa.me/972586557877?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82",
  },
];

const Footer = () => {
  const navs = [
    { title: "מי אנחנו", anchor: "#about" },
    { title: "חיפוס נכם", anchor: "#objects" },
    { title: "קבל ייעוץ", anchor: "#question" },
  ];

  return (
    <footer className="w-full lg:py-10 py-0">
      <div className="container mx-auto px-5 flex lg:flex-row flex-col-reverse lg:space-y-0 space-y-10 justify-between items-center w-full h-full">
        <div className="flex flex-col sm:items-start justify-center items-center ">
          <img className="w-40" src={logo} alt="logo" />
          <div className="text-sm sm:text-left text-center text-regal-blue lg:pb-0 pb-8">
            @2023 All Rights Reserved
          </div>
        </div>
        <div className="">
          <ul className="flex flex-row space-x-12">
            {navs.map((nav) => (
              <a
                href={nav.anchor}
                className="uppercase 2xl:text-xl text-lg font-bold text-center text-regal-red hover:text-black cursor-pointer"
              >
                {nav.title}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-row justify-center">
            {socials.map((social: SocialType) => (
              <a href={social.link}>
                <img className="w-9 mx-3" src={social.img} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="text-center md:text-md text-sm font-bold text-regal-blue">
            <div>
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faLocationDot}
                />
                רחי הרצל 20, חיפה
              </p>
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faPhone}
                />
                0586557877
              </p>
              <p>
                <FontAwesomeIcon
                  className="text-regal-red mr-3 mt-2 text-xl"
                  icon={faEnvelope}
                />
                nadlanhaifa.nesher@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

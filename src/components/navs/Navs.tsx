import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  { title: "Португалия", link: "/portugal" },
  { title: "Аргентина", link: "/argentina" },
  { title: "Франция", link: "/france" },
  { title: "Италия", link: "/ilaly" },
  { title: "Великобритания", link: "/uk" },
  { title: "Испания", link: "/spain" },
];

const Navs = () => {
  return (
    <div className="w-full flex justify-between text-5xl font-bold">
      {navs.map((nav) => (
        <NavLink to={nav.link}>{nav.title}</NavLink>
      ))}
    </div>
  );
};

export default Navs;

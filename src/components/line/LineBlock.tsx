import React from "react";

const LineBlock = ({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-2xl p-5">
        <img className="rounded-xl" src={image} alt="image" />
        <h1 className="text-xl text-regal-blue my-1">{title}</h1>
        <p className="text-base text-regal-red">{desc}</p>
      </div>
    </div>
  );
};

export default LineBlock;

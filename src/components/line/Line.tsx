import React from "react";
import image from "./../../images/slider1.jpeg";
import LineBlock from "./LineBlock";

const blocks = [
  {
    title: "Remax grand - lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi nesciunt! Quia quasi unde similique!",
    image: image,
  },
  {
    title: "Remax grand - lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi nesciunt! Quia quasi unde similique!",
    image: image,
  },
  {
    title: "Remax grand - lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi nesciunt! Quia quasi unde similique!",
    image: image,
  },
  {
    title: "Remax grand - lorem",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi nesciunt! Quia quasi unde similique!",
    image: image,
  },
];

const Line = () => {
  const [scroll, setScroll] = React.useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-10 relative py-20 bg-pastel-grey overflow-hidden">
      <div className="container mx-auto w-full relative">
        <div className="absolute top-0 h-full w-full flex justify-center">
          <div className="w-3 rounded-full bg-white border h-full relative flex justify-center">
            {blocks.map((block, index: number) => (
              <div
                className={
                  scroll < 4430 + index * 480
                    ? "absolute px-7 py-5 bg-white  text-regal-red rounded-full duration-200 font-bold"
                    : "absolute px-7 py-5 bg-regal-red  text-white rounded-full duration-200 font-bold"
                }
                style={{ top: `${(index + 1) * 200 + index * 295}px` }}
              >
                {index + 1}
              </div>
            ))}
            <div
              className="w-full rounded-full bg-regal-red"
              style={{ height: `${scroll - 4200}px` }}
            ></div>
          </div>
        </div>
        <div className="space-y-10">
          {blocks.map((block, index: number) => (
            <div
              className={
                index % 2 == 0
                  ? scroll < 4430 + index * 480
                    ? "flex justify-start w-full opacity-0 -ml-96 duration-500"
                    : "flex justify-start w-full duration-500"
                  : scroll < 4430 + index * 480
                  ? "flex justify-end w-full opacity-0 ml-96 duration-500"
                  : "flex justify-end w-full duration-500"
              }
            >
              <div className="w-[40%] ">
                <LineBlock
                  title={block.title}
                  desc={block.desc}
                  image={block.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Line;

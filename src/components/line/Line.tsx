import React from "react";

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
    <section className="px-10 relative pt-5 pb-5 bg-pastel-grey">
      <div className="container mx-auto w-full">
        <div className="w-full flex justify-center">
          <div className="w-10 h-screen border-black border">
            <div
              className="w-full bg-black"
              style={{ height: `${scroll - 4200}px` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Line;

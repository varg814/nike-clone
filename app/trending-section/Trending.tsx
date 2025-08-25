import React from "react";
import Button from "../components/atoms/button/Button";
import trending from "../../public/trending.png";
import trending2 from "../../public/trending2.png";
import trending3 from "../../public/trending3.png";

const Trending = () => {
  return (
    <section className="w-full max-w-[1440px] p-12 m-auto flex flex-col gap-9 max-md:p-6">
      <h1 className="text-[#111111] text-2xl font-medium">Trending Now</h1>

      <div className="flex flex-col gap-6 max-md:gap-4">
        <div
          className="px-11 py-[72px] pb-64 bg-cover bg-center max-sm:p-6"
          style={{ backgroundImage: `url(${trending.src})` }}
        >
          <article className="text-white flex flex-col gap-4 mb-5">
            <h1 className="font-bold text-6xl max-md:text-4xl max-sm:text-3xl mb-4">
              React Presto
            </h1>
            <p className="font-normal text-xl max-md:text-lg max-sm:text-base">
              With React foam for the most comfortable Presto ever.
            </p>
          </article>
          <Button className="bg-white text-black px-6 py-3.5">Shop Now</Button>
        </div>

        <div className="flex text-white text-2xl font-medium gap-6 max-sm:flex-col max-md:gap-4">
          <div
            className="px-7 py-9 pt-[324px] flex-1/2 bg-cover bg-center max-sm:p-8"
            style={{ backgroundImage: `url(${trending2.src})` }}
          >
            <h1>Summer Must-Haves: Air Max Dia</h1>
          </div>

          <div
            className="px-7 py-9 pt-[324px] flex-1/2 bg-cover bg-center max-sm:p-8"
            style={{ backgroundImage: `url(${trending3.src})` }}
          >
            <h1>Air Jorden 11 Retro Low LE</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;

import React from "react";
import Button from "../components/atoms/button/Button";

interface HeroProps {
  paragraph: string;
  heading: string;
  longText: string;
  buttonText: string;
  backgroundImage: string;
}

const Hero = (props: HeroProps) => {
  return (
    <section
      className="w-full max-w-[1440px] px-12 py-36 m-auto relative bg-cover bg-center flex items-center max-md:px-6 max-md:py-12"
      style={
        props.backgroundImage
          ? { backgroundImage: `url(${props.backgroundImage})` }
          : {}
      }
    >
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="relative z-10 w-full max-w-[660px]">
        <article>
          <p className="text-[#E2418D] text-xl font-bold max-md:text-lg">
            {props.paragraph}
          </p>
          <h1 className="text-[#111111] text-7xl font-bold mt-4 max-md:text-6xl">
            {props.heading}
          </h1>
          <p className="text-[#111111] text-2xl font-normal mt-6 mb-6 max-md:text-xl">
            {props.longText}
          </p>
        </article>
        <Button className="bg-black text-white px-6 py-3.5">
          {props.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Hero;

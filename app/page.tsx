import React from "react";
import landing from "../public/landing.png";
import Hero from "./hero/Hero";
import HeroCarousel from "./hero-carousel/HeroCarousel";
import Trending from "./trending-section/Trending";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
      <Hero
        paragraph="Bold & Sporty"
        heading="Style That Moves With You."
        longText="Not just style. Not just comfort. Footwear that effortlessly moves with your every step."
        buttonText="Find Your Shoe"
        backgroundImage={landing.src}
      />
      <HeroCarousel text="Best of Air Max" />
      <Trending />
      <Hero
        paragraph="Bold & Sporty"
        heading="Nike React Presto by you"
        longText="Take advantage of brand new, proprietary cushioning technology with a fresh pair of Nike react shoes."
        buttonText="Shop Now"
        backgroundImage=""
      />
      <Footer/>
    </>
  );
};

export default Home;

"use client";
import React from "react";
import Item from "../item/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "../../data/products.json";

interface HeroCarouselProps {
  text: string;
}

const HeroCarousel = ({ text }: HeroCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] p-12 m-auto flex flex-col gap-9 max-md:p-6">
      <h1 className="text-[#111111] text-2xl font-medium">{text}</h1>

      <Slider {...settings}>
        {products.map((i) => (
          <div key={i.name}>
            <Item
              name={i.name}
              category={i.category}
              colors={i.colors}
              price={i.price}
              tag={i.tag}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;

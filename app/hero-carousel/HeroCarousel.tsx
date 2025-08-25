"use client";
import React from "react";
import Item from "../item/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import products from "../../data/products.json";

interface HeroCarouselProps {
  text: string;
}

const HeroCarousel = ({ text }: HeroCarouselProps) => {
  return (
    <section className="w-full max-w-[1440px] p-12 m-auto flex flex-col gap-9 max-md:p-6">
      <h1 className="text-[#111111] text-2xl font-medium">{text}</h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name} className="flex justify-center">
            <div className="max-w-[432px] w-full">
              <Item {...product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;

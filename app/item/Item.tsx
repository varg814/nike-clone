import React from "react";
import Image from "next/image";

interface ItemProps {
  name: string;
  category: string;
  colors: number;
  price: number;
  tag: string;
}

const getTagColor = (tag: string) => {
  if (tag === "Best Seller") return "#D33918";
  return "#007D48";
};

const Item = (props: ItemProps) => {
  return (
    <div className="w-full max-w-[432px] flex flex-col gap-3 cursor-pointer">
      <div className="relative">
        <button
          className="absolute top-4 left-4 rounded-2xl bg-white px-3.5 py-1 font-medium text-base"
          style={{ color: getTagColor(props.tag) }}
        >
          {props.tag}
        </button>

        <Image src={`/${props.name}.png`} alt="item image" width={432} height={432}/>
      </div>

      <article className="flex flex-col gap-0.5">
        <span className="flex justify-between font-medium">
          <p>{props.name}</p>
          <p>${props.price}</p>
        </span>
        <span className="text-[#757575] text-base font-normal">
          {props.category}
        </span>
        <span className="text-[#757575] text-base font-normal">
          {props.colors} Colour
        </span>
      </article>
    </div>
  );
};

export default Item;

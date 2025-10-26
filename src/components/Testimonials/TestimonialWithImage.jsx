import React from "react";
import { BsQuote } from "react-icons/bs";

export default function TestimonialWithImage({ image, quote, name, role }) {
  console.log("image is", image.type);
  return (
    <div className="border-4 pt-28 bg-white lg:bg-inherit lg:py-24 relative">
      <div className="bg-blue-800">
        <div className="text-white px-4 lg:px-10 lg:ml-[455px]">
          <img
            className="absolute max-h-[206px] w-xs rounded-xl top-0 object-cover object-[50%_25%] left-1/2 -translate-x-1/2 lg:max-h-full lg:w-full lg:max-w-sm lg:left-65 lg:top-1/2 lg:-translate-y-1/2"
            src={image.type}
            alt=""
          />
          <div className="pt-40 pb-16 lg:py-20 px-8 max-w-xs lg:max-w-[800px]">
            <BsQuote className="text-4xl" />
            <div className="py-6 text-2xl font-medium leading-8">{quote}</div>
            <div className="font-bold leading-6">{name}</div>
            <div className="leading-6">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

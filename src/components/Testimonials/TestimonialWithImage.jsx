import React from "react";
import { BsQuote } from "react-icons/bs";

export default function TestimonialWithImage({ image, quote, name, role }) {
  console.log("image is", image.type);
  return (
    <div className="border-4 py-24 relative">
      <div className="bg-blue-800">
        <div className=" flex text-white px-10 ml-[455px]">
          <img className="absolute left-16 top-1/2 -translate-y-1/2 rounded-xl" src={image.type} width="384" alt="" />
          <div className="py-20 px-8 max-w-[800px]">
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

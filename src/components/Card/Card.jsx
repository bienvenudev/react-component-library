import React from "react";
import { TbDeviceUnknownFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export default function Card({ icon = <TbDeviceUnknownFilled className="size-12"/>, iconBackgroundColor = '#6B7280', title, text, className = '' }) {
  return (
    <div className={
      twMerge(`w-96 bg-gray-50 px-6 py-8 text-center rounded-lg relative hover:drop-shadow-sm ${className}`)}>
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gray-500" style={{ color: iconBackgroundColor }}>{icon}</div>
      <h2 className="text-gray-900 pt-8 pb-5">{title}</h2>
      <p className="text-gray-500 font-normal leading-relaxed">{text}</p>
    </div>
  );
}
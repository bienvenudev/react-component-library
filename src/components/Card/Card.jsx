import React from "react";
import { TbDeviceUnknownFilled } from "react-icons/tb";

export default function Card({ icon = <TbDeviceUnknownFilled className="size-12"/>, iconBackgroundColor = '#6B7280', title, text, className = '' }) {
  return (
    <div className={`w-[384px] bg-[#F9FAFB] px-6 py-8 text-center rounded-lg relative hover:drop-shadow-sm ${className}`}>
      <div className="absolute top-[-24px] left-[50%] transform -translate-x-1/2" style={{ color: iconBackgroundColor }}>{icon}</div>
      <h2 className="text-[#111827] pt-8 pb-5">{title}</h2>
      <p className="text-[#6B7280] font-normal leading-relaxed">{text}</p>
    </div>
  );
}
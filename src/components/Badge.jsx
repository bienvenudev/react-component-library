import React from "react";
import { twMerge } from "tailwind-merge";

export default function Badge({
  text = "Badge",
  shape = "square",
  variant = "#F3F4F6",
  textClr = "#1F2937",
  className = "",
}) {
  const shapeClass = shape === "square" ? "rounded-sm" : "rounded-xl";

  console.log("textClr is", textClr);

  return (
    <div
      style={{
        backgroundColor: variant,
        color: textClr,
      }}
      className={twMerge(shapeClass, `px-3 py-2`, className)}
    >
      {text}
    </div>
  );
}

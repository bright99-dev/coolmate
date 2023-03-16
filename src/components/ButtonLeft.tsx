import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
export default function ButtonLeft({ ...props }) {
  return (
    <div
      {...props}
      className="absolute p-2 left-2 top-[50%] cursor-pointer z-20 bg-primary text-white rounded-full"
    >
      <AiOutlineLeft />
    </div>
  );
}

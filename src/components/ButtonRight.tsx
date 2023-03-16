import React from "react";
import { AiOutlineRight } from "react-icons/ai";
export default function ButtonRight({ ...props }) {
  return (
    <div
      {...props}
      className="p-2 absolute right-2 top-[50%] cursor-pointer z-20 bg-primary text-white rounded-full"
    >
      <AiOutlineRight />
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Header() {
  return (
    <div className="h-header bg-black flex justify-center items-center uppercase text-white text-[13px]">
      <Image src="/mceclip1_2.webp" alt="" width={18} height={18} />
      <div className="mx-2 font-bold leading-4  flex items-center">
        Ưu đãi sản phẩm bền vững đến 50%{" "}
      </div>
      <div className="font-normal capitalize flex">
        Mua ngay
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}

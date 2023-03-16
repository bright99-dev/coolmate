import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const colors = [
  {
    id: "1",
    code: "bg-slate-600",
  },
  {
    id: "2",
    code: "bg-slate-500",
  },
  {
    id: "3",
    code: "bg-slate-900",
  },
];
const sizes = [
  {
    id: "1",
    size: "M",
  },
  {
    id: "2",
    size: "L",
  },
  {
    id: "2",
    size: "XL",
  },
  {
    id: "2",
    size: "2XL",
  },
  {
    id: "2",
    size: "3XL",
  },
];
export default function CardProduct() {
  const [isChoose, setIsChoose] = useState("1");
  console.log(isChoose);

  return (
    <div className="mx-4">
      <div className="w-[306px] h-[409px] overflow-hidden rounded-lg relative group">
        <Link href="/products/productID">
          <Image
            src="/ao.avif"
            alt="counpon"
            width={306}
            height={409}
            className="rounded-lg w-full h-auto"
          />
        </Link>
        <div className="w-full flex justify-between absolute top-3 px-2 text-xs">
          <div className="font-semibold text-sm">
            5 * <span className="text-blue-600">(7)</span>
          </div>
          <button className="bg-lime-600 py-1 px-2 rounded text-white font-semibold">
            Bán chạy
          </button>
        </div>
        <div className="absolute bottom-5 flex-col bg-gray-300 rounded-md p-2 w-[258px] hidden group-hover:flex animate__slideInUp left-6">
          <p className="text-primary text-sm font-bold leading-[21px] text-center mb-1">
            Thêm nhanh vào giỏ hàng +
          </p>
          <div className="flex flex-wrap">
            {sizes?.map(({ id, size }: any) => (
              <div
                key={id}
                className={`rounded-lg flex justify-center items-center cursor-pointer bg-white hover:text-white hover:bg-primary mx-[2px] my-[2px] w-[52px] h-[35px]`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[15px]">
        <div className="flex">
          {colors?.map(({ id, code }: any) => (
            <div
              key={id}
              className={`border w-[41px] h-[26px]  rounded-2xl flex justify-center items-center cursor-pointer ${
                isChoose == id ? "border-primary" : "border-transparent"
              }`}
              onClick={() => setIsChoose(id)}
            >
              <span
                className={`w-[34px] h-5 bg-slate-600 rounded-[10px]`}
              ></span>
            </div>
          ))}
        </div>
        <Link href="" className="text-sm text-primary leading-4 mt-[9px] mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        </Link>
        <div className="flex text-sm leading-[21px]">
          <ins className="font-bold text-[#242424]">119.000đ</ins>
          <del className="text-[#c4c4c4] mx-[14px]">289.000đ</del>
          <span className="text-[#FF0000]">-33%</span>
        </div>
      </div>
    </div>
  );
}

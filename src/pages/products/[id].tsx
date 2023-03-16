import Carousel from "@/components/Carousel";
import Link from "next/link";
import React, { useState } from "react";
const images = [
  {
    id: 1,
    src: "/slide1.jpg",
  },
  {
    id: 2,
    src: "/slide2.jpg",
  },
  {
    id: 3,
    src: "/slide3.jpg",
  },
  {
    id: 4,
    src: "/slide4.jpg",
  },
  {
    id: 5,
    src: "/slide5.jpg",
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
    id: "3",
    size: "XL",
  },
  {
    id: "4",
    size: "2XL",
  },
  {
    id: "5",
    size: "3XL",
  },
];

const colors = [
  {
    id: "1",
    name: "Xám",
    code: "bg-slate-600",
  },
  {
    id: "2",
    name: "Xanh",
    code: "bg-slate-500",
  },
  {
    id: "3",
    name: "Vàng",
    code: "bg-slate-900",
  },
];
export default function ProductDetail() {
  const [colorChoose, setColorChoose] = useState(() => {
    return colors[0].name;
  });
  const [sizeChoose, setSizeChoose] = useState("");
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-sm text-gray6 font-semibold hover:text-blue3 pb-6">
        Trang chủ / Care and Share
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Carousel images={images} />
        </div>
        <div className="col-span-5 px-[35px]">
          <h1 className="text-[32px] font-bold leading-10 text-primary mb-[5px]">
            Combo 02 Áo thun cotton Care & Share Sun & Moon - màu Trắng/ Đen
          </h1>
          <ins className="text-primary">299.000đ</ins>{" "}
          <del className="text-gray-400 mx-[14px]">398.000đ</del>{" "}
          <span className="text-red-500">-25%</span>
          <h5 className="mt-[36px] text-sm">Các mã giảm giá có thể áp dụng:</h5>
          <button>Giảm 10%</button>
          <div>
            Màu sắc: <strong className="font-semibold">{colorChoose}</strong>
          </div>
          <div className="flex">
            {colors?.map(({ id, name, code }: any) => (
              <div
                onClick={() => setColorChoose(name)}
                key={id}
                className={`border-2 border-transparent w-[66px] h-10 p-[2px] rounded-2xl flex justify-center items-center cursor-pointer ${
                  colorChoose == name ? "border-blue-900" : null
                }`}
              >
                <span
                  className={`bg-gray-300 rounded-2xl w-full h-full`}
                ></span>
              </div>
            ))}
          </div>
          <div>
            Kích thước áo : <strong>{sizeChoose}</strong>
          </div>
          <div className="flex flex-wrap">
            {sizes?.map(({ id, size }: any) => (
              <div
                onClick={() => setSizeChoose(size)}
                key={id}
                className={`rounded-2xl flex justify-center items-center cursor-pointer bg-gray-300 text-primary hover:text-white hover:bg-primary mr-[12px] my-[2px] w-[66px] h-[40px] ${
                  sizeChoose == size ? "bg-primary text-white" : null
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 mt-2">
            <div className="col-span-2 rounded-full border border-black flex items-center justify-center">
              <div className="w-10 h-7 flex items-center justify-center">-</div>
              <div className="w-20 h-7 flex items-center justify-center">1</div>
              <div className="w-10 h-7 flex items-center justify-center">+</div>
            </div>
            <Link
              className="bg-primary hover:bg-[#d9d9d9] text-white hover:text-primary col-span-9 px-[30px] py-2 rounded-2xl flex justify-center items-center flex-1 mx-2"
              href="/"
            >
              Thêm vào giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

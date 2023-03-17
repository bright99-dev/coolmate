import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import TagItem from "./TagItem";

const tags = [
  {
    id: "1",
    title: "Áo khoác",
    link: "#",
  },
  {
    id: "2",
    title: "combo",
    link: "#",
  },
  {
    id: "3",
    title: "oversize",
    link: "#",
  },
  {
    id: "4",
    title: "polo",
    link: "#",
  },
  {
    id: "5",
    title: "jogger",
    link: "#",
  },
  {
    id: "6",
    title: "marvel",
    link: "#",
  },
  {
    id: "7",
    title: "áo ba lỗ",
    link: "#",
  },
  {
    id: "8",
    title: "tank top",
    link: "#",
  },
];

export default function SectionHomePageSearch() {
  const [tagInput, setTagInput] = useState("");
  
  return (
    <div className="pt-[50px] lg:pt-[90px] pb-[26px] lg:pb-[50px] text-primary flex flex-col justify-center items-center w-full lg:w-2/4 mx-auto">
      <h2 className="font-bold text-2xl lg:text-4xl leading-[54px] mb-4 lg:mb-5 flex items-center">
        Bạn tìm gì hôm nay ?
        <Image src="/mceclip1_2.webp" alt="" width={24} height={24} />
      </h2>
      <div className="w-full h-[45px] lg:h-[66px] relative px-4">
        <input
          className="bg-eee w-full h-full rounded-full px-5 outline-none text-xs lg:text-base"
          type="text"
          value={tagInput}
          onChange={(e)=>setTagInput(e.target.value)}
          placeholder='Hãy thử bắt đầu với"Quần đen" xem sao '
        />
        <CiSearch className="absolute right-7 top-2/4 -translate-y-2/4 text-2xl lg:text-3xl" />
      </div>
      <div className="mt-1 lg:mt-[15px] w-full">
        <p className="text-sm text-center mb-2 mt-4 font-medium">
          Từ khóa nổi bật ngày hôm nay
        </p>
        <div className="w-full flex justify-center px-3 overflow-x-auto">
          {tags?.map(({ id, title, link }) => (
            <TagItem key={id} title={title} link={link} onClick={()=>setTagInput(title)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

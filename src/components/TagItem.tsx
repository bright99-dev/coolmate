import Link from "next/link";
import React from "react";

export default function TagItem({ title, link, ...props }: any) {
  return (
    <div
      // href={link}
      {...props}
      className="text-primary cursor-pointer text-xs border font-medium rounded-2xl px-3 py-[7px] flex items-center justify-center mx-[2px] flex-nowrap whitespace-nowrap
      "
    >
      {title}
    </div>
  );
}

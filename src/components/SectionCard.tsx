import React from "react";
import CardProduct from "./CardProduct";

export default function SectionCard() {
  return (
    <div className="grid grid-cols-4">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  );
}

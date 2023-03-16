import React from "react";
import CardCoupon from "./CardCoupon";

export default function SectionCoupon() {
  return (
    <div className="pt-9 pb-[50px] grid grid-cols-4 gap-4 px-4">
      <CardCoupon />
      <CardCoupon />
      <CardCoupon />
      <CardCoupon />
    </div>
  );
}

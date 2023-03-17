import React, { useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import CardProduct from "./CardProduct";
interface Image {
  id: number;
  src: string;
}

interface ProductCarouselProps {
  images: Image[];
}

export default function SectionCard() {
  const mainImageRef = useRef<Slider>(null);

  useEffect(() => {
    if (mainImageRef.current) {
      mainImageRef.current.slickGoTo(0);
    }
  }, []);
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <ButtonLeft />,
    prevArrow: <ButtonRight />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      {/* grid grid-cols-2 md:grid-cols-4 px-4 gap-4 lg:gap-8 */}
      <Slider ref={mainImageRef} {...settings}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Slider>
    </div>
  );
}

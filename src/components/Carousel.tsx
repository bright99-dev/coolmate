import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from './ButtonRight';

interface Image {
  id: number;
  src: string;
}

interface ProductCarouselProps {
  images: Image[];
}

const Carousel: React.FC<ProductCarouselProps> = ({ images }) => {
  const mainImageRef = useRef<Slider>(null);
  const thumbnailSliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (mainImageRef.current) {
      mainImageRef.current.slickGoTo(0);
    }
  }, [images]);
 
  const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ButtonLeft />,
    prevArrow: <ButtonRight />,
    asNavFor: thumbnailSliderRef.current || undefined,
  };

  const thumbnailSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainImageRef.current || undefined,
  };

  return (
    <div className="relative w-[700px]">
      <div className="relative">
        <Slider ref={thumbnailSliderRef} {...thumbnailSettings}>
          {images.map(({ id, src }, index) => (
            <div key={index} className="grid grid-col-5 gap-1 cursor-pointer">
              <button
                className={`h-full w-[95%] mb-4 border-t-2 border-gray-300 `}
                onClick={() => thumbnailSliderRef.current?.slickGoTo(index)}
              ></button>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full rounded-xl max-w-5xl">
        <Slider ref={mainImageRef} {...settings}>
          {images.map(({ id, src }, index) => (
            <div key={index}>
              <Image
                src={src}
                width={700}
                height={1000}
                className="rounded-xl object-cover"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

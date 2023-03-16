import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

interface Image {
  id: number;
  src: string;
}

interface ProductCarouselProps {
  images: Image[];
}

const CarouselHome: React.FC<ProductCarouselProps> = ({ images }) => {
  const mainImageRef = useRef<Slider>(null);

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
  };

  return (
    <div className="w-full ">
      <Slider ref={mainImageRef} {...settings}>
        {images.map(({ id, src }, index) => (
          <div key={index}>
            <Image
              src={src}
              width={700}
              height={1000}
              className="object-cover w-full h-carousel"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
export default function MegaMenuItem({
  variant,
  className,
  classNameChild,
  listInfo,
  link,
  children,
  desc,
  title,
  srcImg,
  ...props
}: any) {
  switch (variant) {
    case "cardSmall":
      return (
        <div className="px-[15px] group">
          <Link href="/">
            <div className="w-[120px] h-[120px] overflow-hidden rounded-lg">
              <Image
                src={srcImg}
                width={119}
                height={122}
                alt=""
                className="group-hover:scale-105 transition-all"
              />
            </div>
            <p className="text-gray6 w-[120px] group-hover:text-blue3 font-semibold my-[14px] leading-6 text-sm line-clamp-2 text-center">
              {title}
            </p>
          </Link>
        </div>
      );
    case "cardMedium":
      return (
        <div className="px-[15px]">
          <Link href={link}>
            <div className="w-[210px] h-[164px] overflow-hidden">
              <Image
                src={srcImg}
                width={210}
                height={164}
                alt=""
                className="object-cover hover:scale-105 transition-all"
              />
            </div>
            <p className="text-gray6 hover:text-blue3 font-semibold my-[14px]">
              {title}
            </p>
          </Link>
        </div>
      );
    case "cardLarge":
      return (
        <Link
          href="/"
          className={`"w-60 h-60 overflow-hidden block"${className}`}
        >
          <Image
            src={srcImg}
            width={240}
            height={240}
            alt=""
            className="relative object-cover hover:scale-105 transition-all"
          />
          <div className="text-gray7 hover:text-blue3 font-semibold my-[14px] absolute bottom-6 px-4 w-60 flex justify-between items-center">
            <span className="text-white">{title} </span>
            <div className="h-10 w-10 rounded-full bg-white text-primary flex items-center justify-center mb-3">
              <BsArrowUpRight />
            </div>
          </div>
        </Link>
      );
    case "image":
      return (
        <div className="w-[375px] h-[240px] overflow-hidden">
          <Image
            src={srcImg}
            width={375}
            height={240}
            alt=""
            className="hover:scale-105 w-full h-full object-cover transition-all"
          />
        </div>
      );
    case "info":
      return (
        <div className="px-[15px] w-[240px]">
          <Link
            href="/"
            className="text-primary font-bold leading-8 text-3xl hover:text-blue2 "
          >
            {title}
          </Link>
          <p className="text-gray7 text-sm leading-8">{desc}</p>
          <Link
            href="/"
            className="bg-blue2 hover:bg-primary text-white font-semibold rounded-2xl leading-8 mt-[14px] h-10 flex items-center justify-center"
          >
            Khám phá ngay
          </Link>
        </div>
      );
    case "navItem":
      return (
        <Link
          href={link}
          {...props}
          className={`font-bold text-primary uppercase text-sm leading-4 py-5 px-[18px] border-b-2 border-transparent hover:border-primary ${className}`}
        >
          {title}
        </Link>
      );
    case "navItemSub":
      return (
        <Link
          href={link}
          {...props}
          className={`text-gray6 hover:text-primary text-sm py-[15px] px-[18px] leading-6 font-medium ${className}`}
        >
          {title}
        </Link>
      );
    case "iconsButton":
      return (
        <Link
          href={link}
          className={`"h-8 w-8 lg:w-12 h-12 flex justify-center items-center" ${className}`}
          {...props}
        >
          <Image
            src={srcImg}
            alt="icon"
            width={21}
            height={21}
            className={`${classNameChild}`}
          />
          {children}
        </Link>
      );
    case "link":
      return (
        <Link
          href={link}
          {...props}
          className="text-gray7 text-sm font-bold leading-[35px] hover:text-blue2"
        >
          {title}
        </Link>
      );
    case "profile":
      return (
        <Link
          href={link}
          {...props}
          className="text-gray7 text-sm font-bold leading-[35px] hover:text-blue2 flex items-center"
        >
          <span className="text-lg mr-2">{children}</span><span className="text-[13px] uppercase leading-4 my-[5px] font-medium">{title}</span>
        </Link>
      );
    case "empty":
      return <div className="w-[270px] h-[240px]"></div>;
    default:
      return null;
  }
}

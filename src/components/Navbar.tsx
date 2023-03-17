import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MegaMenuWrapper from "./MegaMenuWrapper";
import MegaMenuItem from "./MegaMenuItem";
import { navList } from "./navList";
import { AiOutlineUser } from "react-icons/ai";
import { TbListSearch } from "react-icons/tb";
import { BsFillBoxFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState("1");
  const [isActiveMegaItem, setIsActiveMegaItem] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openResult, setOpenResult] = useState(false);
  const handleMouseEnter = (id: any) => {
    setIsActive(id);
  };
  const handleMouseEnterMegaItem = (children_id: any) => {
    setIsActiveMegaItem(children_id);
  };
  const hanldeMouseLeave = () => {
    setIsActive("1");
    setIsActiveMegaItem("");
  };

  const handleSearch = () => {
    setOpenResult(true);
  };

  useEffect(() => {
    return () => {
      setIsActive("1");
      setIsActiveMegaItem("");
    };
  }, []);

  const handleClose = () => setOpenSearch(false);
  useClickOutside(inputRef, handleClose);

  return (
    <div className="relative z-10">
      {/* Top Nav */}
      <div className="h-navbar px-4 lg:px-[30px] flex items-center justify-between border-b">
        <button className="lg:hidden"><FaBars/></button>
        <Link href="/">
          <Image src="/logo.svg" width={96} height={40} alt="logo" />
        </Link>
        <div className="hidden lg:flex">
          {navList.map(({ id, title, link }) => (
            <MegaMenuItem
              variant="navItem"
              key={id}
              title={title}
              link={link}
              onMouseEnter={() => {
                handleMouseEnter(id);
              }}
              onMouseLeave={() => {
                setIsActive("1");
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-center relative">
          <MegaMenuItem
            variant="iconsButton"
            srcImg="/icon-search-new.svg"
            link="/"
            onClick={() => {
              setOpenSearch(true);
              setIsActiveMegaItem("");
            }}
          />
          <MegaMenuItem
            variant="iconsButton"
            className="relative"
            srcImg="/icon-account-new.svg"
            link="/"
            onMouseEnter={() => {
              setOpenProfile(true);
            }}
            onMouseLeave={() => setOpenProfile(false)}
          />
          <MegaMenuItem
            variant="iconsButton"
            srcImg="/icon-cart-new.svg"
            link="/"
            classNameChild="w-full h-full lg:w-12 lg:h-12 relative"
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center absolute right-1 top-2 lg:top-3
             bg-blue-700 text-white text-[10px] font-bold"
            >
              2
            </div>
          </MegaMenuItem>
          {openProfile && (
            <div className="absolute top-16 right-10 bg-white text-primary rounded-2xl z-10 p-[10px] flex flex-col w-56 border">
              <MegaMenuItem
                variant="profile"
                title="Thông tin cá nhân"
                link="/"
              >
                <AiOutlineUser />
              </MegaMenuItem>
              <MegaMenuItem
                variant="profile"
                title="Danh sách đơn hàng"
                link="/"
              >
                <TbListSearch />
              </MegaMenuItem>
              <MegaMenuItem variant="profile" title="coolsub" link="/">
                <BsFillBoxFill />
              </MegaMenuItem>
              <MegaMenuItem variant="profile" title="Thoát" link="/">
                <FiLogOut />
              </MegaMenuItem>
            </div>
          )}
        </div>
      </div>
      {/* End Top Nav */}
      {/* Bottom Nav */}
      <div className="h-[50px] hidden lg:flex justify-center items-center relative mx-auto">
        {navList.map(({ id, navItemsSub, infor, srcImg, listInfo }) => (
          <div key={id} className="flex justify-center items-center">
            {navItemsSub?.map(
              ({ navItemsSub_id, title, link, listLinks, content, items }) => (
                <div
                  key={navItemsSub_id}
                  className={isActive == id ? "" : "hidden"}
                >
                  <MegaMenuItem
                    variant="navItemSub"
                    className={
                      isActiveMegaItem == navItemsSub_id ? "text-primary" : ""
                    }
                    title={title}
                    link={link}
                    onMouseEnter={() => {
                      handleMouseEnterMegaItem(navItemsSub_id);
                    }}
                    onMouseLeave={() => setIsActive("1")}
                  />
                  <MegaMenuWrapper
                    variant="abstract"
                    className={
                      isActiveMegaItem == navItemsSub_id ? "" : "hidden"
                    }
                    onMouseLeave={() => setIsActiveMegaItem("")}
                    titlesub={title}
                    listLinks={listLinks}
                    content={content}
                    items={items}
                  />
                </div>
              )
            )}
            {infor && (
              <MegaMenuWrapper variant="default">
                {infor?.map(({ infor_id, title, link, desc }) => (
                  <div
                    key={infor_id}
                    className={isActive == id ? "" : "hidden"}
                  >
                    <MegaMenuWrapper
                      variant="default"
                      className="absolute top-0 pt-8 pb-6"
                      onMouseLeave={hanldeMouseLeave}
                    >
                      <MegaMenuItem variant="empty" />
                      <MegaMenuItem
                        variant="info"
                        title={title}
                        link={link}
                        desc={desc}
                      />
                      <MegaMenuItem variant="image" srcImg={srcImg} />
                    </MegaMenuWrapper>
                  </div>
                ))}
              </MegaMenuWrapper>
            )}
            {listInfo && (
              <MegaMenuWrapper
                variant="default"
                onMouseLeave={hanldeMouseLeave}
              >
                {listInfo?.map(({ listInfo_id, title, link, srcImg }) => (
                  <div
                    key={listInfo_id}
                    className={isActive == id ? "pt-8 pb-6" : "hidden"}
                  >
                    <MegaMenuItem
                      variant="cardMedium"
                      title={title}
                      link={link}
                      srcImg={srcImg}
                    />
                  </div>
                ))}
              </MegaMenuWrapper>
            )}
          </div>
        ))}
      </div>
      {openSearch && (
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-white flex justify-center items-center">
          <div className="w-[500px] h-[50px] relative" ref={inputRef}>
            <input
              type="text"
              autoFocus
              onChange={handleSearch}
              className="w-full h-full bg-gray-300 rounded-full outline-none leading-10 px-5"
              placeholder="Tìm kiếm sản phẩm"
            />
            <span className="absolute right-5 top-1/2 -translate-y-2/4">
              <BsSearch />
            </span>
          </div>
          {openResult && (
            <div className="w-[500px] absolute z-20 top-full bg-white border rounded-xl py-4 px-[10px] mt-2">
              <p className="text-sm text-center">
                Không tìm thấy kết quả phù hợp
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import React from "react";
import MegaMenuItem from "./MegaMenuItem";

export default function MegaMenuWrapper({
  title,
  children,
  className,
  classNameChild,
  variant,
  listLinks,
  titlesub,
  content,
  listInfo,
  items,
  ...props
}: any) {
  switch (variant) {
    case "default":
      return (
        <div
          className={`w-full bg-white absolute top-0 left-0 ${className}`}
          {...props}
        >
          <div
            className={`w-[1000px] mx-auto flex justify-between ${classNameChild}`}
          >
            {children}
          </div>
        </div>
      );
    case "abstract":
      return (
        <div
          className={`w-full bg-white left-0 border-t-2 absolute mt-3 ${
            listLinks || items ? "pt-8 pb-6" : ""
          } ${className}`}
          {...props}
        >
          <div className={`w-[1000px] mx-auto grid grid-cols-2`}>
            <div className="flex">
              {listLinks && <MegaMenuItem variant="empty" />}
              <div className="flex flex-col">
                {listLinks?.map(({ listLinks_id, title, link }: any) => (
                  <div key={listLinks_id}>
                    <MegaMenuItem variant="link" title={title} link={link} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-8">
              {content?.map(({ content_id, title, link, srcImg }: any) => (
                <MegaMenuItem
                  className="mx-4"
                  key={content_id}
                  variant="cardLarge"
                  title={title}
                  link={link}
                  srcImg={srcImg}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            {items?.map(({ content_id, title, link, srcImg }: any) => (
              <MegaMenuItem
                className="mx-4"
                key={content_id}
                variant="cardSmall"
                title={title}
                link={link}
                srcImg={srcImg}
              />
            ))}
          </div>
        </div>
      );
    default:
      return <div>{children}</div>;
  }
}

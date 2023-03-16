import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [scrollY, setScrollY] = useState(0);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    const handleScroll = () => {
      setVisible(currentScrollY > scrollY || currentScrollY < 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <>
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

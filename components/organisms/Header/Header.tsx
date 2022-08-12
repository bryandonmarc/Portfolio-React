import React, { useEffect, useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export interface ScrollProp {
  scrollDir: string;
}

export function Header() {
  const [scrollDir, setScrollDir] = useState("down");
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <HeaderDesktop scrollDir={scrollDir} />
      <HeaderMobile scrollDir={scrollDir} />
    </>
  );
}

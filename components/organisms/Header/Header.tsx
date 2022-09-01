import React, { useEffect, useRef, useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { useWindowEvent } from "@mantine/hooks";

export interface ScrollProp {
  scrollDir: string;
}

export function Header() {
  const scrollDir = useRef("down");
  const threshold = 0;
  let lastScrollY = 0;
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        scrollDir.current = scrollY > lastScrollY ? "down" : "up";
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      });
      ticking = true;
    }
  };

  useWindowEvent("scroll", onScroll);

  return (
    <>
      <HeaderDesktop scrollDir={scrollDir.current} />
      <HeaderMobile scrollDir={scrollDir.current} />
    </>
  );
}

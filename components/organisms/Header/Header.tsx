import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { useWindowEvent } from "@mantine/hooks";
import { NavBar } from "../NavBar";

export interface ScrollProp {
  scrollDir: string;
}

export function Header() {
  const scrollDir = useRef("up");
  const threshold = 0;
  let lastScrollY = useRef(0);
  let ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY.current) < threshold) {
          ticking.current = false;
          return;
        }
        scrollDir.current = scrollY > lastScrollY.current ? "down" : "up";
        lastScrollY.current = scrollY > 0 ? scrollY : 0;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [scrollDir, threshold, lastScrollY, ticking]);

  useWindowEvent("scroll", onScroll, { passive: true });

  return (
    <>
      <HeaderDesktop scrollDir={scrollDir.current} />
      <HeaderMobile scrollDir={scrollDir.current} />
      <NavBar scrollDir={scrollDir.current} />
    </>
  );
}

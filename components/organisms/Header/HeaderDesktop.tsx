/* eslint-disable import/no-relative-packages */
import React, { useState, useEffect } from "react";
import { useSpotlight } from "@mantine/spotlight";
import { HeaderControls } from "@components/molecules";
import { Logo } from "@components/atoms";
import useStyles from "./HeaderDesktop.styles";
import { HEADER_HEIGHT } from "./Header.styles";
import { Affix, Header, Transition } from "@mantine/core";
import { ScrollProp } from "./Header";
import { useWindowScroll } from "@mantine/hooks";

export function HeaderDesktop({ scrollDir }: ScrollProp) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();
  const [scroll] = useWindowScroll();

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <Transition
        transition="slide-down"
        mounted={scroll.y === 0 || scrollDir === "up"}
      >
        {(transitionStyles) => (
          <Header
            style={transitionStyles}
            height={HEADER_HEIGHT}
            className={classes.header}
          >
            <div className={classes.mainSection}>
              <Logo />
            </div>

            <HeaderControls pr="md" onSearch={spotlight.openSpotlight} />
          </Header>
        )}
      </Transition>
    </Affix>
  );
}

/* eslint-disable import/no-relative-packages */
import React, { useState, useEffect } from "react";
import { useSpotlight } from "@mantine/spotlight";
import { HeaderControls } from "@components/molecules";
import { Logo } from "@components/atoms";
import useStyles from "./HeaderDesktop.styles";
import { Affix, Header, Transition } from "@mantine/core";
import { ScrollProp } from "./Header";
import { motion } from "framer-motion";
import { HEADER_HEIGHT } from "./Header.styles";

const variants = {};

export function HeaderDesktop({ scrollDir }: ScrollProp) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <Header
        height={HEADER_HEIGHT}
        className={`${classes.header} ${
          scrollDir === "up" ? classes.open : classes.closed
        }`}
      >
        <div className={classes.mainSection}>
          <Logo />
        </div>

        <HeaderControls pr="md" onSearch={spotlight.openSpotlight} />
      </Header>
    </Affix>
  );
}

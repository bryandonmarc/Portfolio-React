/* eslint-disable import/no-relative-packages */
import React, { useState, useEffect } from "react";
import { useSpotlight } from "@mantine/spotlight";
import { HeaderControls } from "@components/molecules";
import { Logo } from "@components/atoms";
import useStyles from "./HeaderDesktop.styles";
import { Affix, Header, Transition } from "@mantine/core";
import { ScrollProp } from "./Header";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

export function HeaderDesktop({ scrollDir }: ScrollProp) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <motion.nav
        animate={scrollDir === "up" ? "open" : "closed"}
        variants={variants}
        className={classes.header}
      >
        <div className={classes.mainSection}>
          <Logo />
        </div>

        <HeaderControls pr="md" onSearch={spotlight.openSpotlight} />
      </motion.nav>
    </Affix>
  );
}

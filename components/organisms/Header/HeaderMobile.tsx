/* eslint-disable import/no-relative-packages */
import React from "react";
import {
  Affix,
  Burger,
  Container,
  Group,
  Header,
  Transition,
} from "@mantine/core";
import { ColorSchemeControl } from "@components/atoms";
// import { Logo } from '../../Logo/Logo';
import useStyles from "./HeaderMobile.styles";
import { ScrollProp } from "./Header";
import { useWindowScroll } from "@mantine/hooks";
import { Logo, SearchControlMobile } from "@components/atoms";
import { useSpotlight } from "@mantine/spotlight";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

export function HeaderMobile({ scrollDir }: ScrollProp) {
  const { classes } = useStyles();
  const spotlight = useSpotlight();

  return (
    <Affix position={{ top: 0, left: 0 }}>
      <motion.nav
        animate={scrollDir === "up" ? "open" : "closed"}
        variants={variants}
        className={classes.header}
      >
        <Group className={classes.inner}>
          <Logo />

          <Group
            sx={(theme) => ({
              [`& > * + *`]: {
                marginLeft: theme.spacing.xs,
              },
            })}
            // spacing="xs"
          >
            <SearchControlMobile onClick={spotlight.openSpotlight} />
            <ColorSchemeControl />
          </Group>
        </Group>
      </motion.nav>
      {/* <Transition transition="slide-down" mounted={}>
        {(transitionStyles) => <Header style={transitionStyles}></Header>}
      </Transition> */}
    </Affix>
  );
}

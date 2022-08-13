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
import { HEADER_HEIGHT } from "./Header.styles";
import useStyles from "./HeaderMobile.styles";
import { ScrollProp } from "./Header";
import { useWindowScroll } from "@mantine/hooks";
import { Logo, SearchControlMobile } from "@components/atoms";
import { useSpotlight } from "@mantine/spotlight";

export function HeaderMobile({ scrollDir }: ScrollProp) {
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
            height={HEADER_HEIGHT}
            className={classes.header}
            style={transitionStyles}
          >
            <Group className={classes.inner}>
              <Logo />

              <Group spacing="xs">
                <SearchControlMobile onClick={spotlight.openSpotlight} />
                <ColorSchemeControl />
              </Group>
            </Group>
          </Header>
        )}
      </Transition>
    </Affix>
  );
}

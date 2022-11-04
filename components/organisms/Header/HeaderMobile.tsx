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
import { UnstyledButton as Logo, SearchControlMobile } from "@components/atoms";
import { useSpotlight } from "@mantine/spotlight";
import { HEADER_HEIGHT } from "./Header.styles";

export function HeaderMobile({ scrollDir }: ScrollProp) {
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
        <Group className={classes.inner}>
          <Logo link="/" label="Home" />

          <Group
            sx={(theme) => ({
              [`& > * + *`]: {
                marginLeft: theme.spacing.xs,
              },
            })}
          >
            <SearchControlMobile onClick={spotlight.openSpotlight} />
            <ColorSchemeControl />
          </Group>
        </Group>
      </Header>
    </Affix>
  );
}

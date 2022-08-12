/* eslint-disable import/no-relative-packages */
import React from "react";
import { Burger, Container, Group, Header } from "@mantine/core";
import { ColorSchemeControl } from "@mantine/ds";
// import { Logo } from '../../Logo/Logo';
import { HEADER_HEIGHT } from "./Header.styles";
import useStyles from "./HeaderMobile.styles";
import { ScrollProp } from "./Header";

export function HeaderMobile({ scrollDir }: ScrollProp) {
  const { classes } = useStyles();

  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      <Group className={classes.inner}>
        <div className={classes.logo}>logo</div>
        <ColorSchemeControl />
      </Group>
    </Header>
  );
}

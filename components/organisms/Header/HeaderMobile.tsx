/* eslint-disable import/no-relative-packages */
import React from "react";
import { Burger } from "@mantine/core";
import { ColorSchemeControl } from "@mantine/ds";
// import { Logo } from '../../Logo/Logo';
import useStyles from "./HeaderMobile.styles";

export function HeaderMobile() {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <div className={classes.logo}>logo</div>
        <ColorSchemeControl />
      </div>
    </div>
  );
}

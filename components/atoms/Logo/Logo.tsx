import React from "react";
import useStyles from "./Logo.styles";
import { NextLink } from "@mantine/next";
import { Icon3dCubeSphere as IconHome } from "@tabler/icons";
import { Anchor } from "@mantine/core";

export function Logo() {
  const { classes } = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <div className={classes.logoContainer}>
        <Anchor
          component={NextLink}
          href="/"
          className={classes.logo}
          aria-label="Home"
        >
          <IconHome size={32} />
        </Anchor>
      </div>
    </div>
  );
}

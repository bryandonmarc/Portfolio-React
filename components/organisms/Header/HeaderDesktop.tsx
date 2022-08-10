/* eslint-disable import/no-relative-packages */
import React from "react";
import { useSpotlight } from "@mantine/spotlight";
import { HeaderControls } from "@components/molecules";
import { Logo } from "@components/atoms";
import useStyles from "./HeaderDesktop.styles";

export function HeaderDesktop() {
  const { classes } = useStyles();
  const spotlight = useSpotlight();

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo logoProps={classes.logo} />
          </div>
        </div>
      </div>

      <HeaderControls pr="md" onSearch={spotlight.openSpotlight} />
    </div>
  );
}

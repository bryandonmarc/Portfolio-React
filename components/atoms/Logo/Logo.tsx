import React from "react";
import useStyles from "./Logo.styles";
import Link from "next/link";
import { Icon3dCubeSphere as IconHome } from "@tabler/icons";
import { Anchor } from "@mantine/core";

export function Logo() {
  const { classes } = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <div className={classes.logoContainer}>
        <Link href="/" className={classes.logo} aria-label="Home">
          <Anchor
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[1]
                  : theme.colors.gray[8],

              ...theme.fn.hover({
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.colors.gray[9],
              }),
            })}
            className={classes.logoContainer}
          >
            <IconHome size={32} />
          </Anchor>
        </Link>
      </div>
    </div>
  );
}

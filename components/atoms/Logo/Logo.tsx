import React from "react";
import useStyles from "./Logo.styles";
import Link from "next/link";
import { Icon3dCubeSphere as IconHome } from "@tabler/icons";
import { Anchor } from "@mantine/core";

interface LogoProps {
  logoProps: string;
}

export function Logo({ logoProps }: LogoProps) {
  const { classes } = useStyles();

  return (
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
        className={logoProps}
      >
        <IconHome size={32} />
      </Anchor>
    </Link>
  );
}

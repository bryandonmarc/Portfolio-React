import React from "react";
import useStyles from "./UnstyledButton.styles";
import { NextLink } from "@mantine/next";
import { Icon3dCubeSphere as IconHome, TablerIcon } from "@tabler/icons";
import { Anchor } from "@mantine/core";
import { Url } from "url";

export interface UnstyledButtonProps {
  link: string;
  label: string;
  Icon?: TablerIcon;
  size?: number;
}

export function UnstyledButton({
  link,
  label,
  Icon,
  size,
}: UnstyledButtonProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <div className={classes.logoContainer}>
        <Anchor
          component={NextLink}
          href={link}
          className={classes.logo}
          aria-label={label}
        >
          {Icon ? (
            <Icon size={size || 32}></Icon>
          ) : (
            <IconHome size={size || 32} />
          )}
        </Anchor>
      </div>
    </div>
  );
}
import React from "react";
import useStyles from "./UnstyledButton.styles";
import Link from "next/link";
import { Icon3dCubeSphere as IconHome, TablerIcon } from "@tabler/icons";
import { Anchor, Text } from "@mantine/core";
import { Url } from "url";
import { useUserState } from "context/UserStateContext";

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
  const { setPath } = useUserState();

  return (
    <div className={classes.logoWrapper}>
      <div className={classes.logoContainer}>
        <Link
          onClick={() => link === "/" && setPath(link)}
          href={link}
          className={classes.logo}
          aria-label={label}
        >
          {Icon ? (
            <Icon size={size || 32}></Icon>
          ) : (
            <IconHome size={size || 32} />
          )}
        </Link>
      </div>
    </div>
  );
}

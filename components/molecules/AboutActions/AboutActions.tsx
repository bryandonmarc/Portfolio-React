import { openModal } from "@components/templates";
import { Button, Group, useMantineTheme } from "@mantine/core";
import { IconDownload, TablerIcon } from "@tabler/icons";
import { useRouter } from "next/router";
import React from "react";
import useStyles from "./AboutActions.styles";
import Link from "next/link";
export interface AboutActionsProps {
  primary: string;
  secondary: string;
  IconPrimary?: TablerIcon;
  IconSecondary?: TablerIcon;
}

export function AboutActions({
  primary,
  secondary,
  IconPrimary,
  IconSecondary,
}: AboutActionsProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Group className={classes.wrapper}>
      <Button
        variant="gradient"
        gradient={{ from: "grape", to: "indigo" }}
        size="md"
        radius="md"
        leftIcon={IconPrimary && <IconPrimary size={20} />}
        className={classes.control}
        component={Link}
        href="/projects"
      >
        {primary}
      </Button>

      <Button
        variant={theme.colorScheme === "dark" ? "subtle" : "outline"}
        size="md"
        radius="md"
        leftIcon={IconSecondary && <IconSecondary size={20} />}
        className={classes.control}
        onClick={openModal}
        sx={(theme) => ({
          "&:hover": {
            color:
              theme.colorScheme === "dark"
                ? theme.white
                : theme.colors.violet[6],
          },
        })}
      >
        {secondary}
      </Button>
    </Group>
  );
}

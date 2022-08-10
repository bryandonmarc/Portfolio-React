import React, { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons";
import { UnstyledButton, Text, Group, DefaultProps } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import useStyles from "./SearchControl.styles";

interface SearchControlProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<"button"> {
  onClick(): void;
}

export function SearchControl({ className, ...others }: SearchControlProps) {
  const { classes, cx } = useStyles();
  const [command, setCommand] = useState("Ctrl");
  const os = useOs();
  useEffect(() => {
    (os === "undetermined" || os === "macos") && setCommand("⌘");
  }, [os]);

  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group spacing="xs">
        <IconSearch size={14} stroke={1.5} />
        <Text size="sm" color="dimmed" pr={80}>
          Search
        </Text>
        <Text weight={700} className={classes.shortcut}>
          {command} + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}

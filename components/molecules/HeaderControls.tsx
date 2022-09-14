import React from "react";
import { DefaultProps, Group, Tooltip } from "@mantine/core";
import {
  SearchControl,
  KofiControl,
  LinkedInControl,
  GithubControl,
  ColorSchemeControl,
} from "@components/atoms";

interface HeaderControlsProps extends DefaultProps {
  onSearch(): void;
}

export function HeaderControls({ onSearch, ...others }: HeaderControlsProps) {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group
        sx={(theme) => ({
          [`& > * + *`]: {
            marginLeft: theme.spacing.xs,
          },
        })}
        // spacing="xs"
        {...others}
      >
        <SearchControl onClick={onSearch} />
        <KofiControl />
        <LinkedInControl />
        <GithubControl />
        <ColorSchemeControl />
      </Group>
    </Tooltip.Group>
  );
}

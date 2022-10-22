import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons";
import { HeaderControl } from "@components/atoms";

export function ColorSchemeControl() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <HeaderControl
      onClick={() => toggleColorScheme()}
      tooltip={`${colorScheme === "dark" ? "Light" : "Dark"} mode`}
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors[theme.primaryColor][4]
            : theme.colors[theme.primaryColor][6],
      })}
    >
      {colorScheme === "dark" ? (
        <IconSun size={22} stroke={1.5} />
      ) : (
        <IconMoon size={22} stroke={1.5} />
      )}
    </HeaderControl>
  );
}

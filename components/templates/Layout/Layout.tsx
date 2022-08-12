import React, { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { LayoutInner, LayoutProps } from "./LayoutInner";
import { ThemeContext } from "@emotion/react";
// import { GreycliffCF } from "../../fonts/GreycliffCF/GreycliffCF";

const THEME_KEY = "mantine-color-scheme";

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      {/* <GreycliffCF /> */}
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: "violet",
          // headings: { fontFamily: "Greycliff CF, sans serif" },
        }}
      >
        <Global
          styles={(theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
            },

            body: {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[1]
                  : theme.colors.gray[8],
              fontSize: 15,
            },
          })}
        />
        <div>
          <LayoutInner>{children}</LayoutInner>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
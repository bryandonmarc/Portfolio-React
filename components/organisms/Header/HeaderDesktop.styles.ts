import { createStyles } from "@mantine/core";
import { NAVBAR_BREAKPOINT, HEADER_HEIGHT } from "./Header.styles";

export default createStyles((theme) => ({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    zIndex: 6,
    position: "fixed",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[7], 0.5)
        : theme.fn.rgba(theme.white, 0.5),
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2]
    }`,
    backdropFilter: `blur(100px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "var(--removed-scroll-width, 0px)",

    [theme.fn.smallerThan(NAVBAR_BREAKPOINT)]: {
      display: "none",
    },
  },

  mainSection: {
    display: "flex",
    alignItems: "center",
  },

  version: {
    ...theme.fn.focusStyles(),
    fontWeight: 700,
    textDecoration: "none",
    marginTop: 2,

    [theme.fn.smallerThan(860)]: {
      display: "none",
    },
  },
}));

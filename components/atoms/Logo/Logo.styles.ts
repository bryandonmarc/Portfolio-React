import { HEADER_HEIGHT } from "@components/organisms";
import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: "none",
    userSelect: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  logoContainer: {
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    pointerEvents: "all",
  },
}));

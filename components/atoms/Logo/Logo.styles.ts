import { HEADER_HEIGHT } from "@components/organisms";
import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: "none",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    border: `1px solid transparent`,
    borderRadius: theme.radius.md,

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

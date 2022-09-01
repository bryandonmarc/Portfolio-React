import { createStyles } from "@mantine/core";

export default createStyles((theme, _params, getRef) => ({
  indicator: {
    width: 14,
    height: 5,
    transition: "width 250ms ease",
    backgroundColor: theme.black,

    "&[data-active]": {
      width: 44,
    },
  },

  control: {
    backgroundColor: theme.fn.rgba(theme.black, 0.75),
    border: "none",
    color: theme.white,

    [`& svg`]: {
      width: 24,
      height: 24,
    },
  },

  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },

  viewport: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      height: "100%",
    },
  },

  container: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      height: "100%",
    },
  },
}));

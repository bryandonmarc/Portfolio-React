import { createStyles } from "@mantine/core";

export default createStyles((theme, _params, getRef) => ({
  indicator: {
    height: 12,
    width: 4,
    transition: "height  250ms ease",

    "&[data-active]": {
      height: 40,
    },
  },

  control: {
    backgroundColor: "transparent",
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

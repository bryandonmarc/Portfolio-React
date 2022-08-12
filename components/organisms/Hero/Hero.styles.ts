import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms";
import { relative } from "path";

export default createStyles((theme) => ({
  cover: {
    maxWidth: "100vw",

    marginTop: `calc(${theme.spacing.lg * 4}px + ${HEADER_HEIGHT}px)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    maxWidth: 640,
    width: "100%",

    [theme.fn.smallerThan("lg")]: {
      marginLeft: theme.spacing.lg,
    },

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  image: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "auto",
    maxWidth: "600px",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

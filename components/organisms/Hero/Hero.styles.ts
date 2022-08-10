import { createStyles } from "@mantine/core";
import { relative } from "path";

export default createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  content: {
    maxWidth: 640,
    width: "100%",
    marginTop: theme.spacing.lg * 3,

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

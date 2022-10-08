import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    [theme.fn.largerThan(1279)]: {
      display: "none",
    },

    width: "100%",
    display: "flex",
    scrollSnapType: `x mandatory`,
    overflowX: "auto",
    position: "relative",
    padding: "1rem",

    [`& > *`]: {
      marginRight: "1.5rem",
      scrollSnapAlign: "center",
      flexShrink: 0,
      width: "12rem",
    },

    [theme.fn.largerThan("md")]: {
      [`& > *`]: {
        marginRight: "2rem",
        width: "18rem",
      },
    },
  },
}));

import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing.lg,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column-reverse",
    },
  },

  content: {
    maxWidth: 640,
    width: "100%",
    marginLeft: theme.spacing.lg,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
      marginBottom: theme.spacing.xl * 1.5,
    },
  },
}));

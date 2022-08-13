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
    gap: theme.spacing.lg,
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
}));

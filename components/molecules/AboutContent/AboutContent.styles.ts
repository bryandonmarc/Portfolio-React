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
    flexDirection: "row",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column-reverse",
      gap: theme.spacing.xl * 1.5,
    },
  },

  content: {
    maxWidth: 640,
    width: "100%",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },
}));

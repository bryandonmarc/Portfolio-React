import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
    marginBottom: theme.spacing.sm,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).background
        : "unset",
    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).background
        : theme.fn.variant({
            variant: "gradient",
            gradient: {
              from: "indigo",
              to: "grape",
            },
          }).background,
    backgroundClip: theme.colorScheme === "dark" ? "unset" : "text",
    WebkitTextFillColor: theme.colorScheme === "dark" ? "unset" : "transparent",
    padding: theme.colorScheme === "dark" ? "4px 12px" : "unset",
  },

  description: {
    lineHeight: 1.6,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.spacing.md * 2,
  },
}));

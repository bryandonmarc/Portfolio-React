import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  card: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing.xl,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,

    [`& span`]: {
      display: "none",
    },
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  image: {
    ...theme.fn.cover(),
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
  },

  wrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
}));

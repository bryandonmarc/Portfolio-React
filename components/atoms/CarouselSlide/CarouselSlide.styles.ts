import { createStyles, keyframes } from "@mantine/core";

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export default createStyles((theme, _, getRef) => ({
  card: {
    position: "relative",
    height: "100%",

    [theme.fn.smallerThan("sm")]: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
    },

    [`&:hover .${getRef("container")}`]: {
      opacity: 1,
    },
    [`&:hover .${getRef("gif")}`]: {
      display: "inline",
      animationName: fadeIn,
    },
    [`&:not(:hover) .${getRef("gif")}.entered`]: {
      display: "inline",
      animationName: fadeOut,
    },

    [`&:hover .${getRef("image")}`]: {
      opacity: 0,
    },
  },

  container: {
    ref: getRef("container"),
    ...theme.fn.cover(),
    width: "100%",
    height: "100%",
    overflow: "hidden",

    // padding: theme.spacing.xl,
    // display: "none",
    opacity: 0,

    transitionDuration: "150ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: "500ms",
  },

  wrapper: {
    ref: getRef("wrapper"),
    ...theme.fn.cover(),
    width: "100%",
    height: "100%",
    zIndex: 1,

    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "flex-start",
  },

  gif: {
    ref: getRef("gif"),
    width: "100%",
    height: "auto",
    objectFit: "cover",
    objectPosition: "center",
    display: "none",
    // opacity: 0,

    animationDuration: "150ms",
    animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    animationDelay: "500ms",
  },

  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    ref: getRef("image"),
    width: "auto",
    height: "100%",
    objectFit: "cover",

    transitionDuration: "150ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: "500ms",
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginBottom: theme.spacing.md,

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

  hide: {
    display: "none",
  },

  show: {
    display: "block",
  },
}));

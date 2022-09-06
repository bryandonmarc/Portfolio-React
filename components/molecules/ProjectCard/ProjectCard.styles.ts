import { fadeIn, fadeOut } from "@components/atoms";
import { createStyles } from "@mantine/core";

export default createStyles((theme, _params, getRef) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  cardImage: {
    position: "relative",
    width: "100%",

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

  image: {
    ref: getRef("image"),
    width: "100%",
    height: "auto",
    objectFit: "cover",

    transitionDuration: "150ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: "500ms",
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

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  badges: {
    [`& > *`]: {
      // marginLeft: 2,
      marginBottom: 10,
    },
  },
}));

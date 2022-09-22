import { fadeIn, fadeOut } from "@components/atoms";
import { createStyles } from "@mantine/core";

export default createStyles(
  (theme, { hasGif }: { hasGif: boolean }, getRef) => ({
    card: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`,
      transitionProperty: "transform",
      transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDuration: "150ms",

      [`&:hover`]: {
        transform: `scaleX(1.025) scaleY(1.025)`,
      },
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
        opacity: hasGif ? 0 : 1,
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
      transitionProperty: `${hasGif ? "opacity" : "none"}`,
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      transitionDelay: "500ms",
    },

    image: {
      ref: getRef("image"),
      width: "100%",
      height: "auto",
      objectFit: "cover",

      transitionDuration: "150ms",
      transitionProperty: `${hasGif ? "opacity" : "none"}`,
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

      animationName: `${hasGif ? "none" : "none !important"}`,
      animationDuration: "150ms",
      animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      animationDelay: "500ms",
    },

    section: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
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
        // marginRight: 4,
        marginBottom: 10,
      },
    },
  })
);

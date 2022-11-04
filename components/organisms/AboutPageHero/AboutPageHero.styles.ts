import { createStyles, keyframes } from "@mantine/core";

const spin = keyframes({
  "0%": { transform: `translate(-50%, -50%) rotate(0deg)` },
  "100%": { transform: `translate(-50%, -50%) rotate(360deg)` },
});

export default createStyles((theme) => ({
  cover: {
    maxWidth: "100vw",
    marginBottom: 108,
  },

  inner: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors.dark[7], 0.5)
        : theme.fn.rgba(theme.white, 0.5),
    backdropFilter: `blur(100px)`,
    borderRadius: 32,
    boxShadow: `0 25px 50px -12px rgb(0 0 0 / 0.25)`,

    [`&::before`]: {
      content: '""',
      display: "block",
      background:
        theme.colorScheme === "dark"
          ? `conic-gradient(
              ${theme.colors.grape[4]}, 
              ${theme.colors.cyan[6]}, 
              ${theme.colors.violet[8]}, 
              ${theme.colors.grape[4]}
            )`
          : `conic-gradient(
              ${theme.colors.grape[5]}, 
              ${theme.colors.cyan[7]}, 
              ${theme.colors.violet[9]},
              ${theme.colors.grape[5]} 
            )`,
      width: `calc(100% * 1.41421356237)`,
      paddingBottom: `calc(100% * 1.41421356237)`,
      position: "absolute",
      left: `50%`,
      top: `50%`,
      transform: `translate(-50%, -50%)`,
      borderRadius: `100%`,
      zIndex: -2,
      animation: `${spin} 5s linear infinite`,
    },

    [`&::after`]: {
      content: '""',
      position: "absolute",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      backdropFilter: `blur(100px)`,
      borderRadius: 32,
      top: ".25rem",
      right: ".25rem",
      bottom: ".25rem",
      left: ".25rem",
      zIndex: -1,
    },
  },

  content: {
    minWidth: 640,
    width: "100%",

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
    maxWidth: "420px",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

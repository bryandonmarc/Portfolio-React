import { createStyles, keyframes } from "@mantine/core";

export default createStyles((theme) => ({
  wrapper: {
    position: "relative",
    marginTop: theme.spacing.lg * 5,
    paddingTop: 160,
    paddingBottom: 40,

    [theme.fn.smallerThan("md")]: {
      paddingTop: 80,
      paddingBottom: 30,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.primaryColor,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    fontWeight: 900,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    // [theme.fn.smallerThan("sm")]: {
    //   fontSize: 28,
    //   textAlign: "left",
    // },
  },

  highlight: {
    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.fn.linearGradient(
            -45,
            theme.colors.indigo[3],
            theme.colors.grape[3],
            theme.colors.cyan[5],
            theme.colors.violet[3],
            theme.primaryColor
          )
        : theme.fn.linearGradient(
            -45,
            theme.colors.indigo[6],
            theme.colors.grape[6],
            theme.colors.cyan[6],
            theme.colors.violet[6],
            theme.primaryColor
          ),
    backgroundSize: "400% 400%",
    animation: `${animatedGradient} 6s ease infinite`,
  },

  description: {
    textAlign: "center",
    lineHeight: 1.6,
    fontSize: theme.fontSizes.md,
  },
}));

const animatedGradient = keyframes({
  "0%": { backgroundPosition: "0 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0 50%" },
});

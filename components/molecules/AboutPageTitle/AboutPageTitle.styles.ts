import { createStyles, keyframes } from "@mantine/core";

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
    lineHeight: 1.6,
    fontSize: theme.fontSizes.md,
    marginBottom: theme.spacing.md * 2,
  },
}));

const animatedGradient = keyframes({
  "0%": { backgroundPosition: "0 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0 50%" },
});

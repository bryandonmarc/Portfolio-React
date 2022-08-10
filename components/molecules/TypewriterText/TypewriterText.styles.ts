import { createStyles, keyframes, MantineTheme } from "@mantine/core";

const typing = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: "100%",
  },
});

const blinkCaret = (theme: MantineTheme) =>
  keyframes({
    [`from, to`]: {
      borderColor: "transparent",
    },
    "50%": {
      borderColor: theme.primaryColor,
    },
  });

export default createStyles((theme) => ({
  typewriter: {
    overflow: "hidden",
    borderRight: `0.15em solid ${theme.primaryColor}`,
    margin: "0 auto",
    paddingRight: "0.1em",
    animation: `${typing} 3.5s steps(40, end), ${blinkCaret(
      theme
    )} 1s step-end infinite`,
  },
}));

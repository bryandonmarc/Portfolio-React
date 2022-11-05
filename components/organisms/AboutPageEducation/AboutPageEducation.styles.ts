import { createStyles, keyframes, MantineColor } from "@mantine/core";

// const gradientGenerator = (color: MantineColor) => {
//   let gradient = `conic-gradient(`;

//   for (let i = 0, m = 1, k = 12; i < m; i += m / k) {
//     if (i % 2 == 0) gradient += `${color} ${i}turn,`;
//     else gradient += `${color} ${i}turn,`;
//   }
// };

export default createStyles((theme) => ({
  step: {
    [`&:first-of-type`]: {
      [`.mantine-Stepper-verticalSeparator`]: {
        top: `50%`,
      },
      [`.mantine-Stepper-stepIcon`]: {
        borderColor: theme.colors[theme.primaryColor][4],
        position: "relative",
        overflow: "hidden",
        padding: ".5rem",
        borderRadius: "1.5rem",
      },
    },
    [`&:last-child`]: {
      [`.mantine-Stepper-verticalSeparator`]: {
        height: `50%`,
      },
    },
    marginTop: 0,
  },
  stepWrapper: {
    width: 42,
    height: 146,
    flexShrink: 0,
  },
  stepIcon: {
    backgroundColor: theme.colorScheme === "dark" ? "#1A1B1E" : theme.white,
    borderColor: theme.colors[theme.primaryColor][4],
    zIndex: 1,
    margin: 0,
    position: "absolute",
    top: `50%`,
    transform: `translateY(-50%)`,
  },
  verticalSeparator: {
    top: 0,
  },
  stepLabel: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: theme.fontSizes.xl * 3,

    [theme.fn.smallerThan("xs")]: {
      fontSize: theme.fontSizes.xl * 2,
    },
  },

  stepDescription: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.gray[8],
    fontSize: theme.fontSizes.xl * 1.25,

    // [theme.fn.smallerThan("xs")]: {
    //   fontSize: 28,
    // },
  },
}));

import { createStyles, keyframes, MantineColor } from "@mantine/core";

const spin = keyframes({
  "0%": { transform: `translate(-50%, -50%) rotate(0deg)` },
  "100%": { transform: `translate(-50%, -50%) rotate(360deg)` },
});

// const gradientGenerator = (color: MantineColor) => {
//   let gradient = `conic-gradient(`;

//   for (let i = 0, m = 1, k = 12; i < m; i += m / k) {
//     if (i % 2 == 0) gradient += `${color} ${i}turn,`;
//     else gradient += `${color} ${i}turn,`;
//   }
// };

export default createStyles((theme) => ({
  step: {
    [`&:first-child`]: {
      [`.mantine-Stepper-verticalSeparator`]: {
        top: `50%`,
      },
      [`.mantine-Stepper-stepLabel`]: {
        color: theme.primaryColor,
        fontWeight: "bolder",
      },
      [`.mantine-Stepper-stepIcon`]: {
        border: "none",
        position: "relative",
        overflow: "hidden",
        padding: ".5rem",
        borderRadius: "1.5rem",
      },
      [`.mantine-Stepper-stepIcon::before`]: {
        content: '""',
        display: "block",
        background:
          theme.colorScheme === "dark"
            ? `conic-gradient(
              ${theme.primaryColor} 0.08333turn, 
              #1A1B1E 0.08333turn 0.16667turn, 
              ${theme.primaryColor} 0.16667turn 0.25turn, 
              #1A1B1E 0.25turn 0.33333turn, 
              ${theme.primaryColor} 0.33333turn 0.41667turn, 
              #1A1B1E 0.41667turn 0.5turn, 
              ${theme.primaryColor} 0.5turn 0.58333turn, 
              #1A1B1E 0.58333turn 0.66667turn, 
              ${theme.primaryColor} 0.66667turn 0.75turn, 
              #1A1B1E 0.75turn 0.83333turn, 
              ${theme.primaryColor} 0.83333turn 0.91667turn, 
              #1A1B1E 0.91667turn 1.00turn
            )`
            : `conic-gradient(
              ${theme.primaryColor} 0.08333turn, 
              #fff 0.08333turn 0.16667turn, 
              ${theme.primaryColor} 0.16667turn 0.25turn, 
              #fff 0.25turn 0.33333turn, 
              ${theme.primaryColor} 0.33333turn 0.41667turn, 
              #fff 0.41667turn 0.5turn, 
              ${theme.primaryColor} 0.5turn 0.58333turn, 
              #fff 0.58333turn 0.66667turn, 
              ${theme.primaryColor} 0.66667turn 0.75turn, 
              #fff 0.75turn 0.83333turn, 
              ${theme.primaryColor} 0.83333turn 0.91667turn, 
              #fff 0.91667turn 1.00turn
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
      [`.mantine-Stepper-stepIcon::after`]: {
        content: '""',
        position: "absolute",
        background: theme.colorScheme === "dark" ? "#1A1B1E" : theme.white,
        top: ".25rem",
        right: ".25rem",
        bottom: ".25rem",
        left: ".25rem",
        zIndex: -1,
        borderRadius: "1.5rem",
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
    borderColor: theme.primaryColor,
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

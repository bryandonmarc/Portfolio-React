import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  wrapper: {
    ...theme.fn.cover(),
    height: theme.colorScheme === "dark" ? "200vh" : "inherit",
    zIndex: -1,
  },

  gradient: {
    ...theme.fn.cover(),
    height: "inherit",
    zIndex: -3,
    opacity: 0.15,
    backgroundImage: `linear-gradient(60deg, ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff"
    } 0%, 
        ${theme.colors.grape[8]} 30%,
        ${theme.colors.indigo[8]} 80%,
        ${theme.fn.rgba(theme.colors.violet[8], 0.36)} 100%);`,
  },

  overlay: {
    ...theme.fn.cover(),
    height: "inherit",
    zIndex: -2,
    backgroundImage: `linear-gradient(0deg, ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff"
    } 50%, 
        rgba(255, 255, 255, 0) 100%);`,
    // backgroundImage: `linear-gradient(${
    //   theme.colorScheme === "dark" ? "0deg" : "180deg"
    // }, ${theme.colorScheme === "dark" ? theme.colors.dark[7] : "#fff"} 50%,
    //     rgba(255, 255, 255, 0) 100%);`,
  },
}));

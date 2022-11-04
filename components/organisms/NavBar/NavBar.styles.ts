import { createStyles } from "@mantine/core";

const state = (spotlightOpen: boolean) => ({
  open: { opacity: spotlightOpen ? 0 : 1, transform: `translate3d(0, 0, 0)` },
  closed: { opacity: 0, transform: `translate3d(0, 100%, 0)` },
});

export default createStyles(
  (
    theme,
    { spotlightOpen, show }: { spotlightOpen: boolean; show: boolean }
  ) => ({
    root: {
      zIndex: 6,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      boxShadow: `0 25px 50px -12px rgb(0 0 0 / 0.25)`,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[1]
      }`,
      ...(show ? state(spotlightOpen).open : state(spotlightOpen).closed),
      transitionDuration: "250ms",
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },

    active: {
      backgroundImage: theme.fn.gradient({ from: "grape", to: "indigo" }),
    },

    control: {
      border: "0 !important",
      overflow: "visible",
    },

    input: {
      overflow: "visible",
    },

    labelActive: {
      color: `${theme.white} !important`,
      overflow: "visible",
    },
  })
);

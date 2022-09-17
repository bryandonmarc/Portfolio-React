import { createStyles, MantineColor } from "@mantine/core";

export default createStyles(
  (theme, { color }: { color: MantineColor }, getRef) => ({
    item: {
      ...theme.fn.focusStyles(),
      opacity: `1 !important`,
      ref: getRef("item"),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: theme.radius.md,
      height: 90,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,

      // "&:hover": {
      //   boxShadow: `${theme.shadows.md} !important`,
      //   transform: "scale(1.05)",
      //   // backgroundColor: theme.colors[color][6],
      //   // color: theme.white,
      // },

      [`&:hover`]: {
        cursor: "grab",
      },

      [`&:active, &[aria-pressed='true']`]: {
        cursor: "grabbing",
        backgroundColor: theme.colors[color][6],
        color: theme.white,
        zIndex: 1,

        [`& .${getRef("icon")} > *`]: {
          color: theme.white,
        },
        [`& .${getRef("icon")}.${getRef("fill")} > *`]: {
          fill: "currentcolor",
        },
      },
    },

    icon: {
      ref: getRef("icon"),

      [`& > *`]: {
        color: theme.colors[color][6],
      },
    },

    fill: {
      ref: getRef("fill"),
    },
  })
);

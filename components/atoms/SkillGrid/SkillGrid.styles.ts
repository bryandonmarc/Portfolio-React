import { createStyles, MantineColor } from "@mantine/core";

export default createStyles((theme, _params, getRef) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    width: `calc(100% - ${theme.spacing.lg}px)`,

    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.sm,
    },
  },

  drag: {
    cursor: `grabbing !important` /* W3C standards syntax, should come least */,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,

    [theme.fn.smallerThan("sm")]: {
      gap: theme.spacing.sm,
      marginTop: theme.spacing.md,
    },
  },

  title: {
    fontWeight: 700,
  },
}));

import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    width: `calc(100% - ${theme.spacing.lg}px)`,
  },

  title: {
    fontWeight: 700,
  },
}));

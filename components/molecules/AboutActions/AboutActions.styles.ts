import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  wrapper: {
    gap: 0,

    [`& > * + *`]: {
      marginLeft: theme.spacing.md,
    },
  },
}));

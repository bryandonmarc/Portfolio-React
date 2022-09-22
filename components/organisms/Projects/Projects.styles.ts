import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms";

export default createStyles((theme) => ({
  cover: {
    marginTop: `calc(${
      theme.spacing.lg * 4
    }px + ${HEADER_HEIGHT}px) !important`,
  },

  stack: {
    [`& > *`]: {
      // marginRight: 4,
      marginBottom: 16,
    },
  },

  grid: {
    [`& > *`]: {
      // marginRight: 4,
      marginRight: 16,
    },
  },
}));

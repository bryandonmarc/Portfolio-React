import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms";

export default createStyles((theme) => ({
  cover: {
    marginTop: `calc(${
      theme.spacing.lg * 4
    }px + ${HEADER_HEIGHT}px) !important`,
  },
}));

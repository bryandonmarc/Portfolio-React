import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  root: {
    [theme.fn.largerThan(1280)]: {
      display: "none",
    },
  },
}));

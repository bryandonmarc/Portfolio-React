import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },
}));

import { createStyles, MantineNumberSize } from "@mantine/core";

export interface SliderLogoParams {
  size?: MantineNumberSize;
}

export default createStyles((theme, { size }: SliderLogoParams) => ({
  root: {
    height: "auto",
    width: size ? size : 500,

    [theme.fn.smallerThan("sm")]: {
      width: size ? size : 250,
    },
  },
}));

import { createStyles, MantineNumberSize } from "@mantine/core";

export interface SliderLogoParams {
  size?: MantineNumberSize;
  fill?: string;
}

export default createStyles((theme, { size }: SliderLogoParams) => ({
  root: {
    height: "auto",
    width: size ? size : 280,

    [theme.fn.smallerThan("sm")]: {
      width: size ? size : 140,
    },
  },
}));

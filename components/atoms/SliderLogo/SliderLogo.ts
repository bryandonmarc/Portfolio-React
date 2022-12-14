import { DefaultProps, MantineNumberSize, Selectors } from "@mantine/core";
import { FC } from "react";
import useStyles, { SliderLogoParams } from "./SliderLogo.styles";

type SliderLogoStylesNames = Selectors<typeof useStyles>;

export interface SliderLogoProps
  extends DefaultProps<SliderLogoStylesNames, SliderLogoParams> {
  size?: MantineNumberSize;
  fill?: string;
}

export type SliderLogo = FC<SliderLogoProps>;

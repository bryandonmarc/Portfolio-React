import { CarouselSlider, CarouselSliderProps } from "@components/molecules";
import { Box } from "@mantine/core";

export interface ProjectProps {
  carousel: CarouselSliderProps;
}

export function Project({ carousel }: ProjectProps) {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        marginTop: theme.spacing.xl * 9,
        marginBottom: theme.spacing.xl * 9,
      })}
    >
      <CarouselSlider {...carousel}></CarouselSlider>
    </Box>
  );
}

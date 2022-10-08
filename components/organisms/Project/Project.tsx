import { CarouselSlider, CarouselSliderProps } from "@components/molecules";
import { ProjectTitle } from "@components/molecules/ProjectTitle/ProjectTitle";
import {
  VerticalSlider,
  VerticalSliderProps,
} from "@components/molecules/VerticalSlider";
import { Box, Container } from "@mantine/core";

export interface ProjectProps {
  carousel: CarouselSliderProps;
  slider: VerticalSliderProps;
}

export function Project({ carousel, slider }: ProjectProps) {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        marginTop: theme.spacing.xl * 9,
        marginBottom: theme.spacing.xl * 9,
      })}
    >
      <Container size={1420}>
        <ProjectTitle />
        <CarouselSlider {...carousel}></CarouselSlider>
        <VerticalSlider {...slider}></VerticalSlider>
      </Container>
    </Box>
  );
}

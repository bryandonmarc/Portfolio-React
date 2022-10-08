import { ProjectProps } from "@components/organisms";
import { carouselSlides, projectCards } from "@components/templates";

export const projectProps: ProjectProps = {
  carousel: {
    sliders: carouselSlides,
  },
  slider: {
    cards: projectCards,
  },
};

import { Box } from "@mantine/core";
import { ProjectCard, ProjectCardProps } from "../ProjectCard";
import useStyles from "./VerticalSlider.styles";

export interface VerticalSliderProps {
  cards: ProjectCardProps[];
}

export function VerticalSlider({ cards }: VerticalSliderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {/* <Box sx={{ width: "4rem !important" }}></Box> */}
      {cards.map((project: ProjectCardProps) => (
        <ProjectCard {...project} key={project.alt} hideContent={true} />
      ))}
    </div>
  );
}

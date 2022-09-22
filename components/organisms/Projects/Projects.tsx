import { ProjectCard, ProjectCardProps } from "@components/molecules";
import { ProjectTitle } from "@components/molecules";
import { Box, Container, SimpleGrid, Stack } from "@mantine/core";
import useStyles from "./Projects.styles";

export interface ProjectsProps {
  projects: ProjectCardProps[];
}

export function Projects({ projects }: ProjectsProps) {
  const { classes } = useStyles();

  return (
    <Container size={1420} my="md" mb={48} className={classes.cover}>
      <ProjectTitle />
      <SimpleGrid
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
        cols={2}
        className={classes.grid}
        spacing={0}
      >
        <Stack className={classes.stack} spacing={0}>
          {projects
            .filter((_, i) => i % 2)
            .map((project: ProjectCardProps) => (
              <ProjectCard {...project} key={project.alt} />
            ))}
        </Stack>
        <Stack className={classes.stack} spacing={0}>
          {projects
            .filter((_, i) => !(i % 2))
            .map((project: ProjectCardProps) => (
              <ProjectCard {...project} key={project.alt} />
            ))}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

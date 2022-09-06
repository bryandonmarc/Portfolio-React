import { ProjectCard, ProjectCardProps } from "@components/molecules";
import { Container, SimpleGrid, Stack } from "@mantine/core";
import useStyles from "./Projects.styles";

export interface ProjectsProps {
  projects: ProjectCardProps[];
}

export function Projects({ projects }: ProjectsProps) {
  const { classes } = useStyles();

  return (
    <Container size="xl" my="md" className={classes.cover}>
      <SimpleGrid cols={2}>
        <Stack>
          {projects
            .filter((_, i) => i % 2)
            .map((project: ProjectCardProps) => (
              <ProjectCard {...project} key={project.alt} />
            ))}
        </Stack>
        <Stack>
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

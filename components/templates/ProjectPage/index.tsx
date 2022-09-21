import { ProjectCardProps } from "@components/molecules";
import { ProjectTitle } from "@components/molecules/ProjectTitle/ProjectTitle";
import { Projects, ProjectsProps } from "@components/organisms";

export interface ProjectPageProps {
  projectsProps: ProjectsProps;
}

export function ProjectPage({ projectsProps }: ProjectPageProps) {
  return (
    <>
      <Projects {...projectsProps} />
    </>
  );
}

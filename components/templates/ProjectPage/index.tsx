import { ProjectCardProps } from "@components/molecules";
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

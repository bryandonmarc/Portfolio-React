import { NextPage } from "next";
import { ProjectPage, ProjectPageProps } from "@components/templates";
import { projectsProps } from "@components/templates/ProjectPage/projectsProps";

const projectPage: ProjectPageProps = {
  projectsProps,
};

const Projects: NextPage = () => {
  return <ProjectPage {...projectPage} />;
};

export default Projects;

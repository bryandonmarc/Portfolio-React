import type { NextPage } from "next";
import { ProjectPage, ProjectPageProps } from "@components/templates";
import { projectsProps } from "@components/templates/ProjectPage/projectsProps";

const projectPage: ProjectPageProps = {
  projectsProps,
};

const Test2: NextPage = () => {
  return <ProjectPage {...projectPage} />;
};

export default Test2;

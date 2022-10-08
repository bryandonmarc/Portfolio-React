import { NextPage } from "next";
import { AboutPage, AboutPageProps } from "@components/templates";
import { aboutProps } from "@components/templates/AboutPage/aboutProps";

const aboutPage: AboutPageProps = {
  ...aboutProps,
};

const About: NextPage = () => {
  return <AboutPage {...aboutPage} />;
};

export default About;

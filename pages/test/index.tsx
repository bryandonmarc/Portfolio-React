import type { NextPage } from "next";
import { HomePage } from "@components/templates";
import { HomePageProps } from "@components/templates";
import { heroProps } from "@components/templates/HomePage/heroProps";
import { aboutProps } from "@components/templates/HomePage/aboutProps";
import { projectProps } from "@components/templates/HomePage/projectProps";

const homePage: HomePageProps = {
  heroProps,
  aboutProps,
  projectProps,
};

const Test: NextPage = () => {
  return <HomePage {...homePage} />;
};

export default Test;

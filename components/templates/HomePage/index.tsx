import {
  Hero,
  HeroProps,
  About,
  AboutProps,
  Project,
  ProjectProps,
} from "@components/organisms";

export interface HomePageProps {
  heroProps: HeroProps;
  aboutProps: AboutProps;
  projectProps: ProjectProps;
}

export function HomePage({
  heroProps,
  aboutProps,
  projectProps,
}: HomePageProps) {
  return (
    <>
      <Hero {...heroProps} />
      <About {...aboutProps} />
      <Project {...projectProps} />
    </>
  );
}

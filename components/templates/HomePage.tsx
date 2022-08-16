import {
  Hero,
  HeroProps,
  About,
  AboutProps,
  Project,
} from "@components/organisms";

export interface HomePageProps {
  heroProps: HeroProps;
  aboutProps: AboutProps;
}

export function HomePage({ heroProps, aboutProps }: HomePageProps) {
  return (
    <>
      <Hero {...heroProps} />
      <About {...aboutProps} />
      <Project />
    </>
  );
}

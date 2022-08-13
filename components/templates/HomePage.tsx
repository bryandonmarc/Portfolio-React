import { Hero, HeroProps } from "@components/organisms";

export interface HomePageProps {
  heroProps: HeroProps;
}

export function HomePage({ heroProps }: HomePageProps) {
  return (
    <>
      <Hero {...heroProps} />
      <Hero {...heroProps} />
    </>
  );
}

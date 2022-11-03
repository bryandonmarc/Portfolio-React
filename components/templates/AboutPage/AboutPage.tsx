import { AboutPageTitle } from "@components/molecules";
import {
  AboutPageEducation,
  AboutPageEducationProps,
  AboutPageHero,
  AboutPageHeroProps,
  AboutPageJourney,
  AboutPageJourneyProps,
  HEADER_HEIGHT,
} from "@components/organisms";
import { Center, Container } from "@mantine/core";

export interface AboutPageProps {
  heroProps: AboutPageHeroProps;
  journeyProps: AboutPageJourneyProps;
  educationProps: AboutPageEducationProps;
}

export function AboutPage({
  heroProps,
  journeyProps,
  educationProps,
}: AboutPageProps) {
  return (
    <Center
      component="section"
      sx={(theme) => ({
        maxWidth: "100vw",
        marginTop: `calc(${theme.spacing.lg * 2}px + ${HEADER_HEIGHT}px)`,
      })}
    >
      <Container size={1420}>
        <AboutPageHero {...heroProps}></AboutPageHero>
        <AboutPageTitle title="Journey" emoji="💼" />
        <AboutPageJourney {...journeyProps} />
        <AboutPageTitle title="Education" emoji="✍️" />
        <AboutPageEducation {...educationProps} />
      </Container>
    </Center>
  );
}

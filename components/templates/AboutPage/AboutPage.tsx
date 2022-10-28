import { AboutPageTitle } from "@components/molecules";
import {
  AboutPageEducation,
  AboutPageEducationProps,
  AboutPageJourney,
  AboutPageJourneyProps,
  HEADER_HEIGHT,
} from "@components/organisms";
import { Center, Container } from "@mantine/core";

export interface AboutPageProps {
  journeyProps: AboutPageJourneyProps;
  educationProps: AboutPageEducationProps;
}

export function AboutPage({ journeyProps, educationProps }: AboutPageProps) {
  return (
    <Center
      component="section"
      sx={(theme) => ({
        maxWidth: "100vw",
        marginTop: `calc(${theme.spacing.lg * 4}px + ${HEADER_HEIGHT}px)`,
      })}
    >
      <Container size={1420}>
        <AboutPageTitle title="Journey" emoji="💼" />
        <AboutPageJourney {...journeyProps} />
        <AboutPageTitle title="Education" emoji="✍️" />
        <AboutPageEducation {...educationProps} />
      </Container>
    </Center>
  );
}

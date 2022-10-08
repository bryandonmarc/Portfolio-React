import { AboutPageTitle } from "@components/molecules";
import {
  AboutOrganism,
  AboutOrganismProps,
  HEADER_HEIGHT,
} from "@components/organisms";
import { Center, Container } from "@mantine/core";

export interface AboutPageProps {
  aboutProps: AboutOrganismProps;
}

export function AboutPage({ aboutProps }: AboutPageProps) {
  return (
    <Center
      component="section"
      sx={(theme) => ({
        maxWidth: "100vw",
        marginTop: `calc(${theme.spacing.lg * 4}px + ${HEADER_HEIGHT}px)`,
      })}
    >
      <Container size={1420}>
        <AboutPageTitle />
        <AboutOrganism {...aboutProps} />
      </Container>
    </Center>
  );
}

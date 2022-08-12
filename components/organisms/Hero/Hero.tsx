import { Center, Container, Group } from "@mantine/core";
import Image from "next/future/image";
import { HeroTitle, HeroContent, HeroActions } from "@components/molecules";
import useStyles from "./Hero.styles";
import img from "@assets/images/avatar-half-suit.png";
import { GradientBackground, StaggeredTransition } from "@components/atoms";

export function Hero() {
  const { classes } = useStyles();

  return (
    <>
      <Center className={classes.cover}>
        <GradientBackground />
        <Container size="xl">
          <Group className={classes.inner}>
            <Group
              className={classes.content}
              spacing={0}
              align="start"
              sx={{ flexDirection: "column" }}
            >
              <StaggeredTransition delay={[0, 3, 4]}>
                <HeroTitle />
                <HeroContent />
                <HeroActions />
              </StaggeredTransition>
            </Group>
            <Image
              quality="90"
              priority
              placeholder="blur"
              src={img}
              className={classes.image}
              sizes="100vw"
              alt="Zekken Yuuki"
            />
          </Group>
        </Container>
      </Center>
    </>
  );
}

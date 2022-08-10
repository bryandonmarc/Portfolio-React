import { Container, Group } from "@mantine/core";
import Image from "next/future/image";
import { HeroTitle, HeroContent, HeroActions } from "@components/molecules";
import useStyles from "./Hero.styles";
import img from "@assets/images/avatar-half-suit.png";
import { GradientBackground } from "@components/atoms";

export function Hero() {
  const { classes } = useStyles();

  return (
    <>
      <GradientBackground />
      <Container size="xl">
        <Group className={classes.inner}>
          <Group
            className={classes.content}
            spacing={0}
            align="start"
            sx={{ flexDirection: "column" }}
          >
            <HeroTitle />
            <HeroContent />
            <HeroActions />
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
    </>
  );
}

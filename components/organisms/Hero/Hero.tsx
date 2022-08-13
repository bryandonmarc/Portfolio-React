import { Center, Container, Group } from "@mantine/core";
import Image from "next/future/image";
import { HeroTitle, HeroContent, HeroActions } from "@components/molecules";
import useStyles from "./Hero.styles";
import img from "@assets/images/avatar-half-suit.png";
import { GradientBackground, StaggeredTransition } from "@components/atoms";
import {
  HeroTitleProps,
  HeroContentProps,
  HeroActionsProps,
} from "@components/molecules";

export interface HeroProps {
  title: HeroTitleProps;
  content: HeroContentProps;
  actions: HeroActionsProps;
}

export function Hero({ title, content, actions }: HeroProps) {
  const { classes } = useStyles();

  return (
    <>
      <Center className={classes.cover}>
        <GradientBackground />
        <Container size="xl">
          <div className={classes.inner}>
            <Group
              className={classes.content}
              spacing={0}
              align="start"
              sx={{ flexDirection: "column" }}
            >
              <StaggeredTransition delay={[0, 3, 4]}>
                <HeroTitle {...title} />
                <HeroContent {...content} />
                <HeroActions {...actions} />
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
          </div>
        </Container>
      </Center>
    </>
  );
}

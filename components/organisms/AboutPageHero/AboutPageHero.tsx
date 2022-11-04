import {
  GradientBackground,
  StaggeredTransition,
  UnstyledButton,
} from "@components/atoms";
import {
  HeroActions,
  HeroActionsProps,
  HeroContent,
  HeroContentProps,
  HeroTitle,
  HeroTitleProps,
} from "@components/molecules";
import Image from "next/image";
import img from "@assets/images/avatar/avatar-full-shirt-cropped.png";
import { Center, Container, Group } from "@mantine/core";
import useStyles from "./AboutPageHero.styles";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons";
import { meta } from "@components/templates";

export interface AboutPageHeroProps {
  title: HeroTitleProps;
}

export function AboutPageHero({ title }: AboutPageHeroProps) {
  const { classes } = useStyles();

  return (
    <Center component="section" className={classes.cover}>
      <GradientBackground />
      <Container size={1420} px={0}>
        <div className={classes.inner}>
          <Image
            quality="90"
            priority
            placeholder="blur"
            src={img}
            className={classes.image}
            sizes="100vw"
            alt="Zekken Yuuki"
          />
          <Group
            className={classes.content}
            spacing={0}
            align="start"
            sx={{ flexDirection: "column" }}
          >
            <StaggeredTransition delay={[0, 3, 4]}>
              <HeroTitle {...title} />
              <Group mt={48}>
                <UnstyledButton link={"#"} label="Email" Icon={IconMail} />
                <UnstyledButton
                  link={"#"}
                  label="Github"
                  Icon={IconBrandGithub}
                />
                <UnstyledButton
                  link={"#"}
                  label="LinkedIn"
                  Icon={IconBrandLinkedin}
                />
              </Group>
            </StaggeredTransition>
          </Group>
        </div>
      </Container>
    </Center>
  );
}

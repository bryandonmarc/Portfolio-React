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
import { Center, Container, Group, Stack } from "@mantine/core";
import useStyles from "./AboutPageHero.styles";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import { meta } from "@components/atoms";
import Link from "next/link";
import IconPhilippines from "@iconify-icons/twemoji/flag-philippines";
import IconMail from "@iconify-icons/twemoji/open-mailbox-with-raised-flag";
import { Icon as Iconify } from "@iconify/react/dist/offline";
export interface AboutPageHeroProps {
  title: HeroTitleProps;
}

export function AboutPageHero({ title }: AboutPageHeroProps) {
  const { classes, theme } = useStyles();

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
            <StaggeredTransition delay={[0, 3, 4, 5]}>
              <HeroTitle {...title} />
              <Stack my={18} className={classes.contact} id="contact">
                <Link className={classes.link} href={`mailto:${meta.email}`}>
                  {meta.email}{" "}
                  <Iconify
                    icon={IconMail}
                    style={{ marginLeft: theme.spacing.xs }}
                  ></Iconify>
                </Link>
                <Link
                  className={classes.link}
                  href={`tel:${meta.phone.replace(/[\(\)\-\ ]+/g, "")}`}
                >
                  {meta.phone}{" "}
                  <Iconify
                    icon={IconPhilippines}
                    style={{ marginLeft: theme.spacing.xs }}
                  ></Iconify>
                </Link>
              </Stack>
              <Group my={18}>
                {/* <UnstyledButton
                  link={`mailto:${meta.email}`}
                  label="Email"
                  Icon={IconMail}
                /> */}
                <UnstyledButton
                  link={meta.githubLink}
                  label="Github"
                  Icon={IconBrandGithub}
                />
                <UnstyledButton
                  link={meta.linkedInLink}
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

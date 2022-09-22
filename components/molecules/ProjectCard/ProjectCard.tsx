import {
  fadeIn,
  fadeOut,
  LanguageControl,
  SliderLogo,
} from "@components/atoms";
import { Languages } from "@components/templates";
import { ActionIcon, Card, Group, Stack, Text } from "@mantine/core";
import useStyles from "./ProjectCard.styles";
import Image, { StaticImageData } from "next/future/image";
import { IconExternalLink } from "@tabler/icons";
import { useEventListener, useMergedRef } from "@mantine/hooks";
import { useRef } from "react";
import { ProjectsProps } from "@components/templates/meta";

export interface ProjectCardProps extends ProjectsProps {
  color: string;
  Logo: SliderLogo;
}

export function ProjectCard({
  src,
  alt,
  gif,
  href,
  langs,
  description,
}: ProjectCardProps) {
  const { classes } = useStyles({ hasGif: Boolean(gif) });
  // Animated display toggle transition/animation for proper lazy loading
  // https://stackoverflow.com/a/9334132
  const ref = useRef();
  const animationStart = useEventListener("animationstart", (e) => {
    const target = e.target! as HTMLElement;
    if (e.animationName === fadeIn.name) {
      target.classList.add("entered");
    }
  });
  const animationEnd = useEventListener("animationend", (e) => {
    const target = e.target! as HTMLElement;
    if (e.animationName === fadeOut.name) {
      target.classList.remove("entered");
    }
  });
  const mergedRef = useMergedRef(ref, animationStart, animationEnd);

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Card.Section
        className={classes.cardImage}
        ref={mergedRef}
        component="a"
        target="_blank"
        href={href}
        tabIndex={-1}
      >
        <Image quality="90" className={classes.image} src={src} alt={alt} />

        {gif && (
          <div className={classes.container}>
            <Image
              quality="90"
              src={gif}
              className={classes.gif}
              sizes="100vw"
              alt={alt}
            />
          </div>
        )}
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Stack>
          <Group position="apart" noWrap={true}>
            <Text
              size="xl"
              weight={500}
              component="a"
              target="_blank"
              href={href}
              tabIndex={-1}
            >
              {alt}
            </Text>
            <ActionIcon
              component="a"
              href={href}
              target="_blank"
              radius="md"
              size={36}
            >
              <IconExternalLink size={18} color="white" stroke={1.5} />
            </ActionIcon>
          </Group>
          <Group mt={5} spacing={0} className={classes.badges}>
            {langs.map((lang) => (
              <LanguageControl
                size="lg"
                darken={false}
                lang={lang}
                key={lang}
              />
            ))}
          </Group>
        </Stack>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      {/* <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
      </Group> */}
    </Card>
  );
}

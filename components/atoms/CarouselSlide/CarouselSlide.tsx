import { Carousel } from "@mantine/carousel";
import { Button, Paper, Title, Text, Box } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import useStyles, { fadeIn, fadeOut } from "./CarouselSlide.styles";
import { useEventListener, useMergedRef } from "@mantine/hooks";
import { useRef } from "react";
import { IconExternalLink } from "@tabler/icons";
import { LanguageControl } from "../LanguageControl";
import { ProjectCardProps } from "@components/molecules";
import { SliderLogo } from "@components/atoms";
export interface CarouselSlideProps extends ProjectCardProps {
  alt: string;
  gif: string | StaticImageData;
  color: string;
  Logo: SliderLogo;
}

export function CarouselSlide({
  src,
  alt,
  Logo,
  gif,
  color,
  href,
  langs,
}: CarouselSlideProps) {
  const { classes } = useStyles();

  // Animated display toggle transition/animation for proper lazy loading
  // https://stackoverflow.com/a/9334132
  const ref = useRef();
  const animationStart = useEventListener(
    "animationstart",
    (e) => {
      const target = e.target! as HTMLElement;
      if (e.animationName === fadeIn.name) {
        target.classList.add("entered");
      }
    },
    { passive: true }
  );
  const animationEnd = useEventListener(
    "animationend",
    (e) => {
      const target = e.target! as HTMLElement;
      if (e.animationName === fadeOut.name) {
        target.classList.remove("entered");
      }
    },
    { passive: true }
  );
  const mergedRef = useMergedRef(ref, animationStart, animationEnd);

  return (
    <Carousel.Slide>
      <Paper shadow="md" radius="md" className={classes.card} ref={mergedRef}>
        <Image
          quality="90"
          priority
          placeholder="blur"
          src={src}
          className={classes.image}
          sizes="100vw"
          alt={alt}
        />
        <div className={classes.container}>
          <Image
            quality="90"
            src={gif}
            className={classes.gif}
            sizes="100vw"
            alt={alt}
          />
          <Box p="xl" className={classes.wrapper}>
            <div className={classes.header}>
              <Title order={3} className={classes.title}>
                <span>{alt}</span>
                <Logo fill={color} />
              </Title>
              <Text className={classes.category} size="xs">
                {langs.map((lang) => (
                  <LanguageControl lang={lang} key={lang} />
                ))}
              </Text>
            </div>

            <Button
              tabIndex={-1}
              component="a"
              target="_blank"
              href={href}
              styles={(theme) => ({
                root: {
                  backgroundColor: color,

                  "&:hover": {
                    backgroundColor: theme.fn.lighten(color, 0.05),
                  },
                },
              })}
              color={color}
              rightIcon={<IconExternalLink size={16} />}
            >
              See Project
            </Button>
          </Box>
        </div>
      </Paper>
    </Carousel.Slide>
  );
}

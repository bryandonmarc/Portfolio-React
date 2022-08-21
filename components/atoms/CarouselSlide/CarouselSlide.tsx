import { Carousel } from "@mantine/carousel";
import { Button, Paper, Title, Text, Box } from "@mantine/core";
import Image from "next/future/image";
import useStyles, { fadeIn, fadeOut } from "./CarouselSlide.styles";
import { StaticImageData } from "next/future/image";
import { useEventListener, useMergedRef } from "@mantine/hooks";
import { useRef } from "react";

export interface CarouselSlideProps {
  src: string | StaticImageData;
  gif: string | StaticImageData;
  alt: string;
  logo: React.ReactNode;
}

export function CarouselSlide({ src, alt, logo, gif }: CarouselSlideProps) {
  const { classes } = useStyles();

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
                {logo}
              </Title>
              <Text className={classes.category} size="xs">
                {"category"}
              </Text>
            </div>
            <Button variant="white" color="dark">
              Read article
            </Button>
          </Box>
        </div>
      </Paper>
    </Carousel.Slide>
  );
}

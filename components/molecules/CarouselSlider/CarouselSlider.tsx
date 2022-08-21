import { CarouselSlide, CarouselSlideProps } from "@components/atoms";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms";
import { useRef } from "react";
import useStyles from "./CarouselSlider.styles";
export interface CarouselSliderProps {
  sliders: CarouselSlideProps[];
}

export function CarouselSlider({ sliders }: CarouselSliderProps) {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  return (
    <Container
      size={1420}
      // sx={(theme) => ({
      //   position: "relative",

      //   [theme.fn.smallerThan("sm")]: {
      //     padding: 0,
      //     marginLeft: theme.spacing.xl * 1.25,
      //     marginRight: theme.spacing.xl * 1.25,
      //   },
      // })}
    >
      <Carousel
        classNames={classes}
        height={(1420 * 628) / 1200}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={(_) => {
          autoplay.current.reset();
          autoplay.current.play();
        }}
        orientation="vertical"
        slideGap="md"
        loop
        withIndicators
        mx="auto"
        // sx={(theme) => ({
        //   [theme.fn.smallerThan("sm")]: {
        //     height: `calc(100vh - ${HEADER_HEIGHT * 2}px)`,
        //   },
        // })}
      >
        {sliders.map((slide) => (
          <CarouselSlide {...slide} key={slide.alt} />
        ))}
      </Carousel>
    </Container>
  );
}

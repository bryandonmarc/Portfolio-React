import { CarouselSlide, CarouselSlideProps } from "@components/atoms";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import useStyles from "./CarouselSlider.styles";
export interface CarouselSliderProps {
  sliders: CarouselSlideProps[];
}

export function CarouselSlider({ sliders }: CarouselSliderProps) {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  return (
    // sx={(theme) => ({
    //   position: "relative",

    //   [theme.fn.smallerThan("sm")]: {
    //     padding: 0,
    //     marginLeft: theme.spacing.xl * 1.25,
    //     marginRight: theme.spacing.xl * 1.25,
    //   },
    // })}

    <Carousel
      classNames={classes}
      height="100%"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={(_) => {
        autoplay.current.reset();
        autoplay.current.play();
      }}
      // orientation="vertical"
      slideGap="md"
      // breakpoints={[
      //   { maxWidth: "md", slideSize: "50%" },
      //   { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      // ]}
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
  );
}

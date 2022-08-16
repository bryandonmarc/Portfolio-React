import { CarouselSlide } from "@components/atoms";
import { Carousel } from "@mantine/carousel";
import { Container, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { HEADER_HEIGHT } from "@components/organisms";

export function CarouselSlider() {
  const { height } = useViewportSize();

  const theme = useMantineTheme();

  return (
    <Container
      size={1420}
      sx={(theme) => ({
        [theme.fn.smallerThan("sm")]: {
          padding: 0,
          marginLeft: theme.spacing.xl * 1.25,
          marginRight: theme.spacing.xl * 1.25,
        },
      })}
    >
      <Carousel
        height={768}
        orientation="vertical"
        slideGap="md"
        loop
        withIndicators
        mx="auto"
        sx={(theme) => ({
          [theme.fn.smallerThan("sm")]: {
            height: `calc(100vh - ${HEADER_HEIGHT * 2}px)`,
          },
        })}
        styles={{
          indicator: {
            height: 12,
            width: 4,
            transition: "height  250ms ease",

            "&[data-active]": {
              height: 40,
            },
          },

          control: {
            backgroundColor: "transparent",
            border: "none",
            color: theme.white,

            [`& svg`]: {
              width: 24,
              height: 24,
            },
          },

          viewport: {
            [theme.fn.smallerThan("sm")]: {
              height: "100%",
            },
          },

          container: {
            [theme.fn.smallerThan("sm")]: {
              height: "100%",
            },
          },
        }}
      >
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <CarouselSlide key={i} index={i + 1} />
          ))}
      </Carousel>
    </Container>
  );
}

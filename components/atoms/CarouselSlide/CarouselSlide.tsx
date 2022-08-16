import { Carousel } from "@mantine/carousel";
import { Button, Paper, Title, Text, Box, Sx } from "@mantine/core";
import Image from "next/image";
import { RenuLogo } from "@components/atoms";
import useStyles from "./CarouselSlide.styles";

export function CarouselSlide({ index }: { index: number }) {
  const { classes } = useStyles();

  return (
    <Carousel.Slide>
      <Paper shadow="md" radius="md" className={classes.card}>
        <Image
          quality="90"
          priority
          placeholder="blur"
          src={`https://picsum.photos/seed/${index}/1366/768`}
          blurDataURL={`https://picsum.photos/seed/${index}/10/10`}
          layout="fill"
          className={classes.image}
          sizes="100vw"
          alt={`Random Picsum ${index}`}
        />
        <Box className={classes.wrapper}>
          <Text className={classes.category} size="xs">
            {"category"}
          </Text>
          <Title order={3} className={classes.title}>
            <span>{"title"}</span>
            <RenuLogo />
          </Title>
        </Box>
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
    </Carousel.Slide>
  );
}

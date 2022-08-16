import { CarouselSlider } from "@components/molecules";
import { Box } from "@mantine/core";

export function Project() {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        marginTop: theme.spacing.xl * 9,
        marginBottom: theme.spacing.xl * 9,
      })}
    >
      <CarouselSlider></CarouselSlider>
    </Box>
  );
}

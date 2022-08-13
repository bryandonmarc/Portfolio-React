import { Box, SimpleGrid } from "@mantine/core";
import { StatsCard, StatsCardProps } from "./StatsCard";

interface StatsGridProps {
  data: StatsCardProps[];
}

export function StatsGrid({ data }: StatsGridProps) {
  return (
    <Box
      sx={(theme) => ({
        root: {
          padding: theme.spacing.xl * 1.5,
        },
      })}
    >
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {data.map((props, i) => (
          <StatsCard key={i} {...props}></StatsCard>
        ))}
      </SimpleGrid>
    </Box>
  );
}

import { Container, SimpleGrid } from "@mantine/core";
import { StatsCard, StatsCardProps } from "./StatsCard";

export interface StatsGridProps {
  stats: StatsCardProps[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <Container
      size="xl"
      sx={(theme) => ({
        root: {
          padding: theme.spacing.xl * 1.5,
        },
        paddingBottom: theme.spacing.xl * 1.5,
      })}
    >
      <SimpleGrid
        cols={stats.length}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {stats.map((props, i) => (
          <StatsCard key={i} {...props}></StatsCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

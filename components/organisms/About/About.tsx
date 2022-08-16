import { StatsGrid, StatsGridProps } from "@components/atoms";
import {
  AboutContent,
  AboutContentProps,
  AboutTitle,
  AboutTitleProps,
} from "@components/molecules";
import { Box } from "@mantine/core";

export interface AboutProps {
  title: AboutTitleProps;
  statsGrid: StatsGridProps;
  content: AboutContentProps;
}

export function About({ title, statsGrid, content }: AboutProps) {
  return (
    <Box component="section">
      <AboutTitle {...title} />
      <StatsGrid {...statsGrid} />
      <AboutContent {...content} />
    </Box>
  );
}

import { StatsGrid, StatsGridProps } from "@components/atoms";
import {
  AboutContent,
  AboutContentProps,
  AboutTitle,
  AboutTitleProps,
} from "@components/molecules";

export interface AboutProps {
  title: AboutTitleProps;
  statsGrid: StatsGridProps;
  content: AboutContentProps;
}

export function About({ title, statsGrid, content }: AboutProps) {
  return (
    <>
      <AboutTitle {...title} />
      <StatsGrid {...statsGrid} />
      <AboutContent {...content} />
    </>
  );
}

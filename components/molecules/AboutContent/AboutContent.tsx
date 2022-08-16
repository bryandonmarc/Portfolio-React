import { SkillGrid, SkillGridProps } from "@components/atoms";
import {
  Container,
  Group,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { AboutActions, AboutActionsProps } from "@components/molecules";
import useStyles from "./AboutContent.styles";

export interface AboutContentProps {
  heading: string;
  markdown: React.ReactNode;
  skillGrid: SkillGridProps;
  actions: AboutActionsProps;
}

export function AboutContent({
  heading,
  markdown,
  skillGrid,
  actions,
}: AboutContentProps) {
  const { classes, theme } = useStyles();

  return (
    <Container size="xl" mb={theme.spacing.xl}>
      <div className={classes.inner}>
        <SkillGrid {...skillGrid} />
        <Group className={classes.content} spacing={0} align="start">
          <div>
            <Title order={2} className={classes.title}>
              {heading}
            </Title>
            <TypographyStylesProvider>{markdown}</TypographyStylesProvider>
          </div>
          <AboutActions {...actions} />
        </Group>
      </div>
    </Container>
  );
}

import { Anchor, Card, Group, SimpleGrid, Text } from "@mantine/core";
import { SkillCard, SkillCardProps } from "../SkillCard";
import useStyles from "./SkillGrid.styles";

export interface SkillGridProps {
  heading: string;
  skills: SkillCardProps[];
}

export function SkillGrid({ heading, skills }: SkillGridProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>{heading}</Text>
      </Group>
      <SimpleGrid cols={3} mt="md">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </SimpleGrid>
    </Card>
  );
}

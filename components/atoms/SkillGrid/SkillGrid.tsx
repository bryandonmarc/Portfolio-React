import { useRef, useState } from "react";
import { SkillCard, SkillCardProps } from "../SkillCard";
import useStyles from "./SkillGrid.styles";
import { ReactSortable } from "react-sortablejs";
import { Anchor, Card, Group, Text } from "@mantine/core";

export interface SkillGridProps {
  heading: string;
  subheading: string;
  skills: SkillCardProps[];
}

export function SkillGrid({ heading, subheading, skills }: SkillGridProps) {
  const { classes } = useStyles();
  const [state, setState] = useState(skills.slice());

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>{heading}</Text>
        <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          {subheading}
        </Text>
      </Group>
      <ReactSortable
        className={classes.grid}
        list={state}
        setList={setState}
        animation={150}
      >
        {state.map((skill) => (
          <div key={skill.id}>
            <SkillCard {...skill} />
          </div>
        ))}
      </ReactSortable>
    </Card>

    // <Card withBorder radius="md" className={classes.card}>
    // <Group position="apart">
    //   <Text className={classes.title}>{heading}</Text>
    // </Group>
    //   <SimpleGrid cols={3} mt="md">
    //     {skills.map((skill) => (
    //       <SkillCard key={skill.title} data-id={skill.title} {...skill} />
    //     ))}
    //   </SimpleGrid>
    // </Card>
  );
}

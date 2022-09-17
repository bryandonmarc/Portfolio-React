import { useState, forwardRef } from "react";
import { SkillCard, SkillCardProps } from "../SkillCard";
import useStyles from "./SkillGrid.styles";
import { Box, Card, Group, Text } from "@mantine/core";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Item } from "../SkillCard/Item";

export interface SkillGridProps {
  heading: string;
  subheading: string;
  skills: SkillCardProps[];
}

export function SkillGrid({ heading, subheading, skills }: SkillGridProps) {
  const { classes } = useStyles();
  const [active, setActive] = useState<SkillCardProps | null>(null);
  const [items, setItems] = useState(skills.slice());
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text className={classes.title}>{heading}</Text>
        <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
          {subheading}
        </Text>
      </Group>

      <Box className={classes.grid}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </SortableContext>
          {/* <DragOverlay>{active ? <Item {...active} /> : null}</DragOverlay> */}
        </DndContext>
      </Box>
    </Card>
  );

  function handleDragStart(event: DragEndEvent) {
    const { active } = event;

    setActive(items[+active.id]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over!.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over!.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActive(null);
  }

  // return (
  // <Card withBorder radius="md" className={classes.card}>
  //   <Group position="apart">
  //     <Text className={classes.title}>{heading}</Text>
  //     <Text size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
  //       {subheading}
  //     </Text>
  //   </Group>
  //     <ReactSortable
  //       className={classes.grid}
  //       list={state}
  //       setList={setState}
  //       animation={150}
  //     >
  //       {state.map((skill) => (
  //         <div key={skill.id}>
  //           <SkillCard {...skill} />
  //         </div>
  //       ))}
  //     </ReactSortable>
  //   </Card>

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
  // );
}

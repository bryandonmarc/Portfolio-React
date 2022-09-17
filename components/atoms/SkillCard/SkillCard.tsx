import { Text, MantineColor, DefaultProps } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import useStyles from "./SkillCard.styles";
import { Icon as Iconify, IconifyIcon } from "@iconify/react/dist/offline";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Item } from "./Item";

export interface SkillCardProps extends DefaultProps {
  id: string;
  Icon?: TablerIcon;
  icon?: IconifyIcon;
  color: MantineColor;
  fill?: boolean;
  children?: React.ReactNode;
}

export function SkillCard({ id, Icon, color, icon, fill }: SkillCardProps) {
  const { classes, cx } = useStyles({ color });
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item
      ref={setNodeRef}
      style={style}
      id={id}
      color={color}
      {...attributes}
      {...listeners}
      className={classes.item}
    >
      {Icon && <Icon className={classes.icon} size={32} />}
      {icon && (
        <Iconify
          className={fill ? cx(classes.icon, classes.fill) : classes.icon}
          style={{ fontSize: "32px", fill: "currentColor" }}
          icon={icon}
        />
      )}
      <Text size="xs" mt={7}>
        {id}
      </Text>
    </Item>
  );
}

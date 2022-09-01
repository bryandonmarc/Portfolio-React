import { Text, MantineColor, Box } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import useStyles from "./SkillCard.styles";

export interface SkillCardProps {
  id: number;
  title: string;
  Icon?: TablerIcon;
  icon?: (color: string) => React.ReactNode;
  color: MantineColor;
}

export function SkillCard({ title, Icon, color, icon }: SkillCardProps) {
  const { classes } = useStyles({ color });

  return (
    <Box className={classes.item}>
      {Icon && <Icon className={classes.icon} size={32} />}
      {icon && icon(classes.icon)}
      <Text size="xs" mt={7}>
        {title}
      </Text>
    </Box>
  );
}

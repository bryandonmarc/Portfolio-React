import { Text, MantineColor, Box } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import useStyles from "./SkillCard.styles";

export interface SkillCardProps {
  id: number;
  title: string;
  Icon: TablerIcon;
  color: MantineColor;
}

export function SkillCard({ title, Icon, color }: SkillCardProps) {
  const { classes } = useStyles({ color });

  return (
    <Box className={classes.item}>
      <Icon className={classes.icon} size={32}></Icon>
      <Text size="xs" mt={7}>
        {title}
      </Text>
    </Box>
  );
}

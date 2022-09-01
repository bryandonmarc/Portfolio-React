import { Text, MantineColor, Box } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import useStyles from "./SkillCard.styles";
import { Icon as Iconify, IconifyIcon } from "@iconify/react/dist/offline";
export interface SkillCardProps {
  id: number;
  title: string;
  Icon?: TablerIcon;
  icon?: IconifyIcon;
  color: MantineColor;
}

export function SkillCard({ title, Icon, color, icon }: SkillCardProps) {
  const { classes } = useStyles({ color });

  return (
    <Box className={classes.item}>
      {Icon && <Icon className={classes.icon} size={32} />}
      {icon && (
        <Iconify
          className={classes.icon}
          style={{ fontSize: "32px", fill: "currentColor" }}
          icon={icon}
        />
      )}
      <Text size="xs" mt={7}>
        {title}
      </Text>
    </Box>
  );
}

import { Text, MantineColor, Box, clsx } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import useStyles from "./SkillCard.styles";
import { Icon as Iconify, IconifyIcon } from "@iconify/react/dist/offline";
export interface SkillCardProps {
  id: string;
  Icon?: TablerIcon;
  icon?: IconifyIcon;
  color: MantineColor;
  fill?: boolean;
}

export function SkillCard({ id, Icon, color, icon, fill }: SkillCardProps) {
  const { classes, cx } = useStyles({ color });

  return (
    <Box className={classes.item}>
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
    </Box>
  );
}

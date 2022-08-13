import {
  ThemeIcon,
  Progress,
  Text,
  Group,
  Paper,
  MantineGradient,
  MantineColor,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import useStyles from "./StatsCard.styles";

const ICON_SIZE = 60;

export interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  percentage: number;
  color: MantineColor;
}

export function StatsCard({ icon, title, percentage, color }: StatsCardProps) {
  const { classes } = useStyles();
  const { ref, width } = useElementSize();

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon
        color={color}
        className={classes.icon}
        size={ICON_SIZE}
        radius={ICON_SIZE}
      >
        {icon}
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        {title}
      </Text>

      <Group
        position="apart"
        mt="xs"
        style={{ width: "100%", position: "relative" }}
      >
        <Text size="xs" color="dimmed">
          Competent
        </Text>
        <Text
          ref={ref}
          sx={{
            position: "absolute",
            left: `calc(50% - ${width / 2}px)`,
          }}
          size="xs"
          color="dimmed"
        >
          Proficient
        </Text>
        <Text size="xs" color="dimmed">
          Expert
        </Text>
      </Group>

      <Progress color={color} value={percentage} mt={5} />
    </Paper>
  );
}

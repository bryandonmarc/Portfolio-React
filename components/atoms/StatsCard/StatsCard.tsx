import { ThemeIcon, Progress, Text, Group, Badge, Paper } from "@mantine/core";
import { IconSwimming } from "@tabler/icons";
import useStyles from "./StatsCard.styles";

const ICON_SIZE = 60;

export interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  percentage: number;
}

export function StatsCard({ icon }: StatsCardProps) {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        {icon}
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        Web Development
      </Text>
      {/* <Text color="dimmed" align="center" size="sm">
        32 km / week
      </Text> */}

      <Group position="apart" mt="xs">
        <Text size="xs" color="dimmed">
          Competent
        </Text>
        <Text size="xs" color="dimmed">
          Proficient
        </Text>
        <Text size="xs" color="dimmed">
          Expert
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      {/* <Group position="apart" mt="md">
        <Text size="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group> */}
    </Paper>
  );
}

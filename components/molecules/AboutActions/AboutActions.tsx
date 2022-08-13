import { Button, Group } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import useStyles from "./AboutActions.styles";

export interface AboutActionsProps {
  primary: string;
  secondary: string;
}

export function AboutActions({ primary, secondary }: AboutActionsProps) {
  const { classes } = useStyles();

  return (
    <Group>
      <Button
        variant="gradient"
        gradient={{ from: "grape", to: "indigo" }}
        radius="md"
        size="md"
        className={classes.control}
      >
        {primary}
      </Button>

      <Button
        variant="outline"
        size="md"
        radius="md"
        className={classes.control}
        sx={(theme) => ({
          "&:hover": {
            color: theme.white,
          },
        })}
      >
        {secondary}
      </Button>
    </Group>
  );
}

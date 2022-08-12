import { Button, Group } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import useStyles from "./HeroActions.styles";

export function HeroActions() {
  const { classes } = useStyles();

  return (
    <Group mt={30}>
      <Button
        variant="gradient"
        gradient={{ from: "grape", to: "indigo" }}
        radius="md"
        size="md"
        className={classes.control}
      >
        About Me
      </Button>

      <Button
        leftIcon={<IconDownload size={16} />}
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
        Resume
      </Button>
    </Group>
  );
}

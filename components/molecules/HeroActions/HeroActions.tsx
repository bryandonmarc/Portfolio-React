import { Button, Group, useMantineTheme } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import useStyles from "./HeroActions.styles";

export interface HeroActionsProps {
  primary: string;
  secondary: string;
}

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Group mt={30} className={classes.wrapper}>
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
        leftIcon={<IconDownload size={20} />}
        variant={theme.colorScheme === "dark" ? "light" : "outline"}
        size="md"
        radius="md"
        className={classes.control}
        sx={(theme) => ({
          "&:hover": {
            color:
              theme.colorScheme === "dark"
                ? theme.white
                : theme.colors.violet[6],
          },
        })}
      >
        {secondary}
      </Button>
    </Group>
  );
}

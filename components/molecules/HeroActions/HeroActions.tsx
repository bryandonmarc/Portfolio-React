import { openModal } from "@components/templates";
import { Button, Group, useMantineTheme } from "@mantine/core";
import { IconDownload } from "@tabler/icons";
import { useRouter } from "next/router";
import useStyles from "./HeroActions.styles";
import Link from "next/link";
import { useUserState } from "context/UserStateContext";

export interface HeroActionsProps {
  primary: string;
  secondary: string;
}

export function HeroActions({ primary, secondary }: HeroActionsProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();
  const { setPath } = useUserState();

  return (
    <Group mt={30} className={classes.wrapper}>
      <Button
        variant="gradient"
        gradient={{ from: "grape", to: "indigo" }}
        radius="md"
        size="md"
        className={classes.control}
        component={Link}
        href="/about"
        onClick={() => setPath("/about")}
      >
        {primary}
      </Button>

      <Button
        leftIcon={<IconDownload size={20} />}
        variant={theme.colorScheme === "dark" ? "light" : "outline"}
        size="md"
        radius="md"
        className={classes.control}
        component={Link}
        href="/Donmarc-Salcedo-Resume-Web-Developer-2023.pdf"
        target={"_blank"}
        download={true}
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

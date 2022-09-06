import { languages, Languages } from "@components/templates";
import { Badge, MantineSize, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react/dist/offline";
import useStyles from "./LanguageControl.styles";

export function LanguageControl({
  lang,
  darken = true,
  size = "xl",
}: {
  lang: Languages;
  darken?: boolean;
  size?: MantineSize;
}) {
  const { classes } = useStyles({ lang, darken });

  return (
    <Badge
      size={size}
      radius="sm"
      pt={0}
      pb={0}
      pl={2}
      pr={8}
      mr="xs"
      className={classes.badge}
      styles={{ inner: { textTransform: "none" } }}
      leftSection={
        <ThemeIcon
          size="lg"
          radius="xl"
          ml={4}
          variant="outline"
          className={classes.icon}
        >
          <Icon style={{ fontSize: "inherit" }} icon={languages[lang].icon} />
        </ThemeIcon>
      }
    >
      {languages[lang].name}
    </Badge>
  );
}

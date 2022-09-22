import { languages, Languages } from "@components/templates";
import { Badge, MantineSize, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react/dist/offline";
import useStyles from "./LanguageControl.styles";

export function LanguageControl({
  lang,
  darken = true,
  size = "md",
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
      styles={{ inner: { textTransform: "none" } }}
      classNames={classes}
      leftSection={
        <ThemeIcon
          size="lg"
          radius="xl"
          ml={4}
          variant="outline"
          sx={(theme) => ({
            border: "none",
            background: "none",

            [`& svg`]: {
              height: "1.2em",
              width: "auto",
              color: theme.black,
            },
          })}
        >
          <Icon
            style={{ fontSize: "inherit", color: "currentcolor" }}
            icon={languages[lang].icon}
          />
        </ThemeIcon>
      }
    >
      {languages[lang].name}
    </Badge>
  );
}

import { languages, Languages } from "@components/templates";
import { Badge, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react/dist/offline";

export function LanguageControl({ lang }: { lang: Languages }) {
  return (
    <Badge
      size="xl"
      radius="sm"
      pt={2}
      pb={0}
      pl={4}
      pr={8}
      mr="xs"
      sx={(theme) => ({
        background: theme.fn.rgba(languages[lang].color, 0.25),
        color: theme.fn.darken(languages[lang].color, 0.25),
      })}
      styles={{ inner: { textTransform: "none" } }}
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
          <Icon style={{ fontSize: "inherit" }} icon={languages[lang].icon} />
        </ThemeIcon>
      }
    >
      {languages[lang].name}
    </Badge>
  );
}

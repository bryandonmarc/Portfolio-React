import { languages, Languages } from "@components/templates";
import { createStyles } from "@mantine/core";

export default createStyles(
  (theme, { lang, darken }: { lang: Languages; darken: boolean }) => ({
    badge: {
      [theme.fn.largerThan("sm")]: {
        background: theme.fn.rgba(languages[lang].color, 0.1),
        color: darken
          ? theme.fn.darken(languages[lang].color, 0.25)
          : ["unity", "apexCharts", "heroku", "pwa"].includes(lang)
          ? theme.colorScheme === "dark"
            ? theme.white
            : languages[lang].color
          : languages[lang].color,
      },
    },

    icon: {
      border: "none",
      background: "none",

      [`& svg`]: {
        height: "1.2em",
        width: "auto",
        color: theme.black,
      },
    },
  })
);

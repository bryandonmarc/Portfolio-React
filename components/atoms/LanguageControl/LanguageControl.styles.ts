import { languages, Languages } from "@components/templates";
import { createStyles } from "@mantine/core";

export default createStyles(
  (theme, { lang, darken }: { lang: Languages; darken: boolean }) => ({
    root: {
      background: ["unity", "apexCharts", "heroku", "pwa"].includes(lang)
        ? theme.fn.rgba(languages[lang].color, 0.25)
        : theme.fn.rgba(languages[lang].color, 0.1),
      color: darken
        ? theme.fn.darken(languages[lang].color, 0.25)
        : ["unity", "apexCharts", "heroku", "pwa", "unocss", "i18n"].includes(
            lang
          )
        ? theme.colorScheme === "dark"
          ? theme.white
          : languages[lang].color
        : languages[lang].color,
      marginRight: theme.spacing.xs,

      [theme.fn.smallerThan("xs")]: {
        marginRight: theme.spacing.md / 2,
      },
    },

    leftSection: {
      [`& > *`]: {
        color:
          theme.colorScheme === "dark" ? theme.white : languages[lang].color,
      },

      [theme.fn.smallerThan("xs")]: {
        marginRight: 0,
      },
    },

    inner: {
      [theme.fn.smallerThan("xs")]: {
        display: "none",
      },
    },
  })
);

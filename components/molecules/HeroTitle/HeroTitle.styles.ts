import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  header: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    fontWeight: 900,
  },

  title: {
    fontSize: 88,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 56,
    },
  },

  subheader: {
    fontSize: 44,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  content: {
    lineHeight: 1.15,
    fontSize: 33,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 21,
    },
  },
}));

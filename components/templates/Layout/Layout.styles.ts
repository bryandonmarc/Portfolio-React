import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms/Header";

export default createStyles((theme) => ({
  "@global": {
    "#nprogress": {
      zIndex: 100000,
    },
  },

  main: {
    scrollMarginTop: HEADER_HEIGHT,
    flex: 1,
    paddingTop: HEADER_HEIGHT,
  },

  bodyColor: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[8],
  },

  bodyColorHighlight: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[9],
  },

  content: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
}));

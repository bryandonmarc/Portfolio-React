import { createStyles } from "@mantine/core";
import { HEADER_HEIGHT } from "@components/organisms/Header";

export default createStyles((theme) => ({
  "@global": {
    "#nprogress": {
      zIndex: 100000,
    },
  },

  main: {
    flex: 1,
  },

  // headerPadding: {
  //   scrollMarginTop: HEADER_HEIGHT,
  //   paddingTop: HEADER_HEIGHT,
  // },

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
    minHeight: "100vh",
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
}));

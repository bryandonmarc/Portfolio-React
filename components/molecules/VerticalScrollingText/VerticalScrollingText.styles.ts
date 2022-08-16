import { CSSObject } from "@emotion/react";
import { createStyles, keyframes } from "@mantine/core";

const scrollUp = (itemCount: number) => {
  const keyframeObject: CSSObject = {};
  for (let index = 1; index < itemCount; index++) {
    keyframeObject[
      `${
        (index * (100 / (itemCount - 1)) - 1 / itemCount / 2).toFixed(2) + "%"
      }, ${(index * (100 / (itemCount - 1))).toFixed(2) + "%"}`
    ] = {
      transform: `translateY(${((-100 / itemCount) * index).toFixed(2) + "%"})`,
    };
  }
  return keyframes(keyframeObject);
};

export default createStyles((theme, { itemCount }: { itemCount: number }) => ({
  container: {
    display: "inline-flex",
    alignItems: "center",

    [theme.fn.smallerThan("xs")]: {
      fontSize: 17,
    },
  },

  wrapper: {
    height: "3rem",
    margin: 0,
    overflow: "hidden",
  },

  list: {
    marginLeft: "0.625rem",
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    animation: `${scrollUp(itemCount)} ${(4 / 3) * (itemCount - 1)}s infinite`,
    animationDelay: "2s",
  },

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    height: "3rem",
    listStyle: "none",
  },
}));

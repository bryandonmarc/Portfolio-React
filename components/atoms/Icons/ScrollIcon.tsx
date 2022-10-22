import { createStyles, keyframes } from "@mantine/core";

const scrollDown = keyframes({
  "0%": { opacity: 0, transform: `translate(0, -8px)` },
  "50%": { opacity: 1, transform: `translate(0, 0)` },
  "100%": { opacity: 0, transform: `translate(0, 8px)` },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    bottom: "0",
    top: "35%",
    transform: `translate(-50%, -50%)`,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  scroll: {
    textAlign: "center",
    margin: `0 auto 8px`,
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
    borderRadius: "30px",
    height: 46,
    width: 30,
  },

  pointer: {
    animation: `${scrollDown} 1.5s infinite`,
    fill: theme.colors[theme.primaryColor][4],
  },

  delay: {
    animationDelay: ".75s",
  },
}));

export function ScrollIcon() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.scroll}>
        <svg height="30" width="10">
          <circle className={classes.pointer} cx="5" cy="15" r="2" />
          <circle
            className={cx(classes.pointer, classes.delay)}
            cx="5"
            cy="15"
            r="2"
          />
        </svg>
      </div>
    </div>
  );
}

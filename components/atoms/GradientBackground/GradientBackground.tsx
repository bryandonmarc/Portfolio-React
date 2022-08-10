import useStyles from "./GradientBackground.styles";

export function GradientBackground() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.gradient} />
      <div className={classes.overlay} />
    </div>
  );
}

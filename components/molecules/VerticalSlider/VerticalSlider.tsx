import useStyles from "./VerticalSlider.styles";

export interface VerticalSliderProps {
  props?: string;
}

export function VerticalSlider({ props }: VerticalSliderProps) {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.root}></div>
    </>
  );
}

import { StepperContent, StepperContentProps } from "@components/atoms";
import { Stepper } from "@mantine/core";
import useStyles from "./AboutPageEducation.styles";

export interface AboutPageEducationProps {
  schools: StepperContentProps[];
}

export function AboutPageEducation({ schools }: AboutPageEducationProps) {
  const { classes } = useStyles();

  return (
    <Stepper active={0} orientation="vertical" classNames={classes} mb={216}>
      {schools.map((school) => (
        <Stepper.Step
          key={school.header}
          label={school.header}
          description={<StepperContent {...school} />}
        ></Stepper.Step>
      ))}
    </Stepper>
  );
}

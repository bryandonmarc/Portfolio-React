import {
  JobTitle,
  StepperContent,
  StepperContentProps,
} from "@components/atoms";
import { List, Stepper, Text } from "@mantine/core";
import { IconDiamond } from "@tabler/icons";
import { HEADER_HEIGHT } from "../Header";
import useStyles from "./AboutPageJourney.styles";

export interface AboutPageJourneyProps {
  jobs: StepperContentProps[];
}

export function AboutPageJourney({ jobs }: AboutPageJourneyProps) {
  const { classes, theme } = useStyles();

  return (
    <Stepper active={0} orientation="vertical" classNames={classes} mb={216}>
      <Stepper.Step
        icon={
          <IconDiamond style={{ color: theme.colors[theme.primaryColor][4] }} />
        }
        label={"An upcoming opportunity!"}
        description={
          <>
            <JobTitle title="Future Job" />
            <List my="lg" withPadding listStyleType="none" ml={20}>
              <List.Item>
                Put your company here! I am currently open to new opportunities.
                I&apos;d be more than glad to finally find the right place to
                let my passion and skills bloom! 🌺
              </List.Item>
            </List>
          </>
        }
      ></Stepper.Step>
      {jobs.map((job) => (
        <Stepper.Step
          key={job.header}
          label={job.header}
          description={<StepperContent {...job} />}
        ></Stepper.Step>
      ))}
    </Stepper>
  );
}

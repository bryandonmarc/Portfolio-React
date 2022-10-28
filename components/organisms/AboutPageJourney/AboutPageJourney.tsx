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
            {/* <Text mb="lg">
              present – <i>future</i>
            </Text> */}
            <List my="lg" withPadding>
              <List.Item>I am confident, my pamilee</List.Item>
              <List.Item>Black is out, gold is in</List.Item>
              <List.Item>Mabuting bata</List.Item>
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

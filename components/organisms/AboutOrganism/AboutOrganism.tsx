import {
  JobTitle,
  StepperContent,
  StepperContentProps,
} from "@components/atoms";
import { List, Stepper, Text } from "@mantine/core";
import { IconDiamond } from "@tabler/icons";
import { HEADER_HEIGHT } from "../Header";
import useStyles from "./AboutOrganism.styles";

export interface AboutOrganismProps {
  jobs: StepperContentProps[];
}

export function AboutOrganism({ jobs }: AboutOrganismProps) {
  const { classes, theme } = useStyles();

  return (
    <Stepper active={0} orientation="vertical" classNames={classes}>
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
          key={job.jobCompany}
          label={job.jobCompany}
          description={<StepperContent {...job} />}
        ></Stepper.Step>
      ))}
    </Stepper>
  );
}

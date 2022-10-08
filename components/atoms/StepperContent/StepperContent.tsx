import { Languages } from "@components/templates";
import { Group, List, Text } from "@mantine/core";
import { JobTitle } from "../JobTitle";
import { LanguageControl } from "../LanguageControl";
import useStyles from "./StepperContent.styles";

export interface StepperContentProps {
  jobCompany: string;
  jobTitle: string;
  jobDate: string;
  jobDescription: string[];
  langs: Languages[];
}

export function StepperContent({
  jobTitle,
  jobDate,
  jobDescription,
  langs,
}: StepperContentProps) {
  const { classes } = useStyles();

  return (
    <>
      <JobTitle title={jobTitle} />
      <Text>{jobDate}</Text>

      <List my="lg" withPadding>
        {jobDescription.map((desc, i) => (
          <List.Item key={i}>{desc}</List.Item>
        ))}
      </List>

      <Group mb="lg" spacing={0} className={classes.badges}>
        {langs.map((lang) => (
          <LanguageControl size="lg" darken={false} lang={lang} key={lang} />
        ))}
      </Group>
    </>
  );
}

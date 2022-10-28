import { Languages } from "@components/templates";
import { Group, List, Text } from "@mantine/core";
import { JobTitle } from "../JobTitle";
import { LanguageControl } from "../LanguageControl";
import useStyles from "./StepperContent.styles";

export interface StepperContentProps {
  header: string;
  title: string;
  date: string;
  description: string[];
  langs: Languages[];
}

export function StepperContent({
  title,
  date,
  description,
  langs,
}: StepperContentProps) {
  const { classes } = useStyles();

  return (
    <>
      <JobTitle title={title} />
      <Text>{date}</Text>

      <List
        my="lg"
        withPadding
        listStyleType="disc"
        styles={{
          item: {
            whiteSpace: "nowrap",
          },
          itemWrapper: {
            display: "inline-flex",
            flexDirection: "column",
            whiteSpace: "normal",
            marginRight: "1.125rem",
          },
        }}
      >
        {description.map((desc, i) => (
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

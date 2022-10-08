import useStyles from "./JobTitle.styles";
import { Text } from "@mantine/core";

export interface JobTitleProps {
  title: string;
}

export function JobTitle({ title }: JobTitleProps) {
  const { classes } = useStyles();

  return (
    <>
      <Text component="span" className={classes.accent}>
        &lt;
      </Text>
      <Text component="span">{title.replace(/ /g, "")}</Text>
      <Text component="span" className={classes.accent}>
        &frasl;&gt;
      </Text>
    </>
  );
}

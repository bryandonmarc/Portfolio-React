import { JobTitle } from "@components/atoms";
import { Title, Text, List, Group } from "@mantine/core";
import useStyles from "./VerticalScrollingText.styles";

interface TextProps {
  textArray: string[];
}

export function VerticalScrollingText({ textArray }: TextProps) {
  const { classes } = useStyles({ itemCount: textArray.length + 1 });

  return (
    <Title order={2} className={classes.container}>
      <Text component="span">I am a</Text>
      <Group className={classes.wrapper}>
        <List
          className={classes.list}
          styles={{
            itemWrapper: {
              flexDirection: "row",
            },
          }}
          sx={{ fontSize: "inherit" }}
        >
          {textArray.map((listItem, index) => (
            <List.Item key={index} className={classes.item}>
              <JobTitle title={listItem} />
            </List.Item>
          ))}
          <List.Item className={classes.item}>
            <JobTitle title={textArray[0]} />
          </List.Item>
        </List>
      </Group>
    </Title>
  );
}

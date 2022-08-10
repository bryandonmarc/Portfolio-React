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
        <List className={classes.list} sx={{ fontSize: "inherit" }}>
          {textArray.map((listItem, index) => (
            <List.Item key={index} className={classes.item}>
              <Text
                component="span"
                sx={(theme) => ({ color: theme.primaryColor })}
              >
                &lt;
              </Text>
              <Text component="span">{listItem.replaceAll(" ", "")}</Text>
              <Text
                component="span"
                sx={(theme) => ({ color: theme.primaryColor })}
              >
                &frasl;&gt;
              </Text>
            </List.Item>
          ))}
          <List.Item className={classes.item}>
            <Text
              component="span"
              sx={(theme) => ({ color: theme.primaryColor })}
            >
              &lt;
            </Text>
            <Text component="span">{textArray[0].replaceAll(" ", "")}</Text>
            <Text
              component="span"
              sx={(theme) => ({ color: theme.primaryColor })}
            >
              &frasl;&gt;
            </Text>
          </List.Item>
        </List>
      </Group>
    </Title>
  );
}

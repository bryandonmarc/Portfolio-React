import { Title, Text } from "@mantine/core";
import { TypewriterText } from "@components/molecules/TypewriterText";
import { VerticalScrollingText } from "../VerticalScrollingText";
import useStyles from "./HeroTitle.styles";
import { meta } from "@components/templates/meta";

export function HeroTitle() {
  const { classes, cx } = useStyles();

  return (
    <>
      <Text
        component="span"
        variant="gradient"
        gradient={{ from: "indigo", to: "grape" }}
        className={cx(classes.header, classes.subheader)}
        inherit
      >
        {meta.heading}
      </Text>

      <Title className={cx(classes.header, classes.title)}>
        <TypewriterText text={meta.name} />
      </Title>

      <VerticalScrollingText textArray={meta.titles} />

      <Text className={classes.content} color="dimmed" mt="md">
        {meta.description}
      </Text>
    </>
  );
}

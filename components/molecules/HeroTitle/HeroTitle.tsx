import { Title, Text } from "@mantine/core";
import { TypewriterText } from "@components/molecules/TypewriterText";
import { VerticalScrollingText } from "../VerticalScrollingText";
import useStyles from "./HeroTitle.styles";
import { meta } from "@components/templates/meta";
import { StaggeredTransition } from "@components/atoms";

export function HeroTitle() {
  const { classes, cx } = useStyles();

  return (
    <StaggeredTransition>
      <Text
        component="span"
        variant="gradient"
        gradient={{ from: "indigo", to: "grape" }}
        className={cx(classes.header, classes.subheader)}
        inherit
      >
        {meta.hero.heading}
      </Text>

      <Title className={cx(classes.header, classes.title)}>
        <TypewriterText text={meta.hero.name} />
      </Title>

      <VerticalScrollingText textArray={meta.hero.titles} />

      <Text className={classes.content} color="dimmed" mt="md">
        {meta.hero.description}
      </Text>
    </StaggeredTransition>
  );
}

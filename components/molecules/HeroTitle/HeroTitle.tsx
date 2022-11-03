import { Title, Text } from "@mantine/core";
import { TypewriterText } from "@components/molecules/TypewriterText";
import { VerticalScrollingText } from "../VerticalScrollingText";
import useStyles from "./HeroTitle.styles";
import { StaggeredTransition } from "@components/atoms";

export interface HeroTitleProps {
  heading?: string;
  name: string;
  titles?: string[];
  description?: string;
}

export function HeroTitle({
  heading,
  name,
  titles,
  description,
}: HeroTitleProps) {
  const { classes, cx } = useStyles();

  return (
    <StaggeredTransition>
      {heading && (
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "indigo", to: "grape" }}
          className={cx(classes.header, classes.subheader)}
          inherit
        >
          {heading}
        </Text>
      )}

      <Title className={cx(classes.header, classes.title)}>
        <TypewriterText text={name} />
      </Title>

      {titles && <VerticalScrollingText textArray={titles} />}

      {description && (
        <Text className={classes.content} color="dimmed" mt="md">
          {description}
        </Text>
      )}
    </StaggeredTransition>
  );
}

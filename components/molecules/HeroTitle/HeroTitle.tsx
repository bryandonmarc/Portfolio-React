import { Title, Text } from "@mantine/core";
import { TypewriterText } from "@components/molecules/TypewriterText";
import { VerticalScrollingText } from "../VerticalScrollingText";
import useStyles from "./HeroTitle.styles";

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
        Hello there! I&apos;m
      </Text>

      <Title className={cx(classes.header, classes.title)}>
        <TypewriterText text="Zekken Yuuki" />
      </Title>

      <VerticalScrollingText
        textArray={[
          "Front-end Developer",
          "Software Engineer",
          "Web Developer",
          "Cloud Practitioner",
          "Full-stack Developer",
          "Shopify Developer",
        ]}
      />

      <Text className={classes.content} color="dimmed" mt="md">
        A self-taught developer with a passion for tech & knowledge and
        curiosity to learn even more!
      </Text>
    </>
  );
}

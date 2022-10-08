import { Title, Text } from "@mantine/core";
import useStyles from "./ProjectTitle.styles";

export function ProjectTitle() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title}>
        Stuff I&apos;ve <span className={classes.highlight}>worked</span> on.
      </Title>
      <Text size="sm" color="dimmed" className={classes.description}>
        Here are some of the projects I spearheaded and built.{" "}
        <Text
          sx={(theme) => ({
            [theme.fn.smallerThan("xl")]: {
              display: "none",
            },

            display: "inline",
          })}
        >
          Hover over them and have a look 😊
        </Text>
      </Text>
    </>
  );
}

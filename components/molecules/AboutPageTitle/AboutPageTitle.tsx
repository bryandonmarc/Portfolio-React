import { Title, Text } from "@mantine/core";
import useStyles from "./AboutPageTitle.styles";

// export interface AboutPageTitleProps {
//   props: string;
// }

export function AboutPageTitle({
  title,
  emoji,
}: {
  title: string;
  emoji: string;
}) {
  // { props }: AboutPageTitleProps
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} mb="xl">
        <Text
          component="span"
          className={classes.highlight}
          variant="gradient"
          inherit
        >
          {title}
        </Text>{" "}
        {emoji}
      </Title>
      {/* <Text size="sm" color="dimmed" className={classes.description}>
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
      </Text> */}
    </>
  );
}

import { Title, Text, Container } from "@mantine/core";
import useStyles from "./AboutTitle.styles";
import { Dots } from "./Dots";

export interface AboutTitleProps {
  title: (className: string) => React.ReactNode;
  description: string;
}

export function AboutTitle({ title, description }: AboutTitleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>{title(classes.highlight)}</Title>

        <Container p={0} size={600}>
          <Text size="sm" color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>
      </div>
    </div>
  );
}

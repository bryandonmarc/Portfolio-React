import { Title, Text, Button, Container } from "@mantine/core";
import useStyles from "./AboutTitle.styles";
import { Dots } from "./Dots";

export function AboutTitle() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{" "}
          <Text component="span" className={classes.highlight} inherit>
            code reviews
          </Text>{" "}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>
      </div>
    </Container>
  );
}

import { NextPage } from "next";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  Center,
  keyframes,
} from "@mantine/core";
import { GradientBackground } from "@components/atoms";
import Link from "next/link";

const animatedGradient = keyframes({
  "0%": { backgroundPosition: "0 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0 50%" },
});

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    backgroundImage:
      theme.colorScheme === "dark"
        ? theme.fn.linearGradient(
            -45,
            theme.colors.indigo[3],
            theme.colors.grape[3],
            theme.colors.cyan[5],
            theme.colors.violet[3],
            theme.colors[theme.primaryColor][3]
          )
        : theme.fn.linearGradient(
            -45,
            theme.colors.indigo[6],
            theme.colors.grape[6],
            theme.colors.cyan[6],
            theme.colors.violet[6],
            theme.colors[theme.primaryColor][4]
          ),
    backgroundSize: "400% 400%",
    animation: `${animatedGradient} 6s ease infinite`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

const Custom404: NextPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <GradientBackground />
      <Center className={classes.root}>
        <Container>
          <Text variant="gradient" className={classes.label}>
            404
          </Text>
          <Title className={classes.title}>
            You arrived at some place unknown.
          </Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            I can&apos;t find the URL you are looking for, but I might be the
            right candidate for the job you&apos;re looking for ;&#41;
          </Text>
          <Group position="center">
            <Button component={Link} href="/" variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Group>
        </Container>
      </Center>
    </>
  );
};

export default Custom404;

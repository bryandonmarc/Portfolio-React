import { Icon } from "@iconify/react/dist/offline";
import { Anchor, ThemeIcon } from "@mantine/core";
import { IconDeviceLaptop, IconRocket } from "@tabler/icons";
import { meta } from "@components/templates";
import Shopify from "@iconify-icons/logos/shopify";
import { HeroProps } from "@components/organisms";

export const heroProps: HeroProps = {
  title: {
    heading: "Hello there! I'm",
    name: meta.name,

    titles: [
      "Front-end Developer",
      "Software Engineer",
      "Web Developer",
      "Shopify Developer",
    ],

    description:
      "I build code. I love programming. I'm passionate for tech & learning. I have the curiosity and drive to learn even more!",
  },

  content: {
    contents: [
      {
        Icon: IconRocket,
        heading: "#OpenToWork ",
        description: (
          <span>Exploring career opportunities and growth projects.</span>
        ),
      },
      {
        Icon: IconDeviceLaptop,
        heading: "#Freelance ",
        description: (
          <>
            <span>Currently building beautiful, custom&nbsp;</span>
            <ThemeIcon
              size="lg"
              radius="xl"
              variant="outline"
              sx={(theme) => ({
                border: "none",
                [theme.fn.smallerThan("xs")]: {
                  display: "none",
                },
              })}
            >
              <Icon style={{ fontSize: "24px" }} icon={Shopify} />
            </ThemeIcon>
            <span>themes at&nbsp;</span>
            <Anchor
              href="https://artologie.co/"
              target="_blank"
              sx={(theme) => ({
                textDecorationLine: "underline",
                textUnderlineOffset: 2,
                fontWeight: "bold",
                color: theme.colors.pink[3],
                "&:hover": {
                  color: theme.colors.pink[4],
                },
              })}
            >
              Artologie
            </Anchor>
            .
          </>
        ),
      },
    ],
  },

  actions: {
    primary: "About Me",
    secondary: "Resume",
  },
};

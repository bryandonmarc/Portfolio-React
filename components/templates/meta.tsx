import { ThemeIcon, Anchor } from "@mantine/core";
import { IconRocket, IconDeviceLaptop } from "@tabler/icons";
import { Icon } from "@iconify/react/dist/offline";
import Shopify from "@iconify-icons/logos/shopify";

interface MetaFields {
  hero: {
    heading: string;
    name: string;
    titles: string[];
    description: string;
    content: {
      icon: JSX.Element;
      heading: string;
      description: string | JSX.Element;
    }[];
  };
}

export const meta: MetaFields = {
  hero: {
    heading: "Hello there! I'm",
    name: "Zekken Yuuki",

    titles: [
      "Front-end Developer",
      "Software Engineer",
      "Web Developer",
      "Cloud Practitioner",
      "Full-stack Developer",
      "Shopify Developer",
    ],

    description:
      "I build code. I love programming. I'm passionate for tech & learning. I have the curiosity and drive to learn even more!",

    content: [
      {
        icon: (
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="outline"
            sx={{ border: "none" }}
          >
            <IconRocket size={40} stroke={1.5} />
          </ThemeIcon>
        ),
        heading: "#OpenToWork ",
        description: "Exploring career opportunities and growth projects.",
      },
      {
        icon: (
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="outline"
            sx={{ border: "none" }}
          >
            <IconDeviceLaptop size={40} stroke={1.5} />
          </ThemeIcon>
        ),
        heading: "#Freelance ",
        description: (
          <>
            Currently building beautiful, custom&nbsp;
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
            themes at&nbsp;
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
};

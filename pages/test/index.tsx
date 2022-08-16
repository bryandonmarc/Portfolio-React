import type { NextPage } from "next";
import { HomePage } from "@components/templates";
import { ThemeIcon, Anchor, Text } from "@mantine/core";
import {
  IconRocket,
  IconDeviceLaptop,
  IconBrush,
  IconWorld,
  IconTool,
  IconServer,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconHexagon,
  IconBrandReactNative,
  IconBrandVue,
  IconBrandGit,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandFirebase,
  IconBrandPython,
  IconBrandPhp,
  IconDatabase,
  TablerIcon,
  Icon3dCubeSphere,
  IconCSharp,
  IconAppWindow,
  IconPhoneIncoming,
} from "@tabler/icons";
import { Icon } from "@iconify/react/dist/offline";
import Shopify from "@iconify-icons/logos/shopify";
import { HomePageProps, meta } from "@components/templates";

const homePage: HomePageProps = {
  heroProps: {
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
          description: (
            <span>Exploring career opportunities and growth projects.</span>
          ),
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
  },

  aboutProps: {
    title: {
      title: (className) => (
        <>
          Nice to meet{" "}
          <Text
            component="span"
            className={className}
            variant="gradient"
            inherit
          >
            you
          </Text>
          !
        </>
      ),

      description:
        "Let me introduce myself more! Oh, and here are the things I'm good at 😎",
    },

    statsGrid: {
      stats: [
        {
          Icon: IconWorld,
          title: "Web Development",
          color: "violet",
          percentage: 63,
        },
        {
          Icon: IconBrush,
          title: "Front-end Development",
          color: "grape",
          percentage: 74,
        },
        {
          Icon: IconServer,
          title: "Back-end Development",
          color: "indigo",
          percentage: 36,
        },
        {
          Icon: IconTool,
          title: "Software Development",
          color: "cyan",
          percentage: 45,
        },
      ],
    },

    content: {
      heading: "Hey 👋",

      markdown: (
        <>
          <p>
            I&apos;m {meta.name}. Ever since I was a kid, I&apos;ve always loved
            computers and video games, which led me into taking a degree in{" "}
            <b>Computer Science</b>, because it had the word
            &lsquo;computer&rsquo; in it 😅. But I&apos;m glad I did! It was one
            of the most fulfilling decisions I&apos;ve ever made.
          </p>
          <p>
            I&apos;m a Computer Science graduate and a <b>Magna Cum Laude</b> 📖{" "}
            latin honor candidate . I held <b>leadership positions</b> in our
            college council and our university&apos;s student chapters of
            national and international organizations involving the field of
            computing and ICT. I am a recipient of the OWWA EDSP scholarship, a
            competitive program that only selects top students across all
            regions of the Philippines qualified by DOST-SEI.
          </p>
          <p>
            Knowledge is my <b>passion</b>, and programming even more so. I am
            fully competent in various frameworks and languages, and eager and
            persistent to learn even more! I am open and looking for{" "}
            <b>job opportunities</b> where I can grow and fully utilize my
            passion. Not sold yet? See the projects I&apos;ve worked on, and
            don&apos;t hesistate to contact me once you decide you&apos;d want
            us to work together! 😉
          </p>
        </>
      ),

      skillGrid: {
        heading: "I'm confident with...",
        subheading: "+ many more!",
        skills: [
          {
            id: 1,
            title: "HTML",
            Icon: IconBrandHtml5,
            color: "orange",
          },
          {
            id: 2,
            title: "CSS",
            Icon: IconBrandCss3,
            color: "blue",
          },
          {
            id: 3,
            title: "JavaScript",
            Icon: IconBrandJavascript,
            color: "yellow",
          },
          {
            id: 4,
            title: "React",
            Icon: IconBrandReactNative,
            color: "cyan",
          },
          {
            id: 5,
            title: "Vue",
            Icon: IconBrandVue,
            color: "green",
          },
          {
            id: 6,
            title: "NodeJS",
            Icon: IconHexagon,
            color: "lime",
          },
          {
            id: 7,
            title: "NextJS",
            Icon: IconBrandNextjs,
            color: "gray",
          },
          {
            id: 8,
            title: "NuxtJS",
            Icon: IconBrandNuxt,
            color: "teal",
          },
          {
            id: 9,
            title: "MySQL",
            Icon: IconDatabase,
            color: "blue",
          },
          {
            id: 10,
            title: "TailwindCSS",
            Icon: IconBrandTailwind,
            color: "cyan",
          },
          {
            id: 11,
            title: "Sass",
            Icon: IconBrandSass,
            color: "pink",
          },
          {
            id: 12,
            title: "Firebase",
            Icon: IconBrandFirebase,
            color: "orange",
          },
          // {
          //   id: 13,
          //   title: "Python",
          //   Icon: IconBrandPython,
          //   color: "yellow",
          // },
          // {
          //   id: 14,
          //   title: "PHP",
          //   Icon: IconBrandPhp,
          //   color: "indigo",
          // },
          // {
          //   id: 15,
          //   title: "C-Sharp",
          //   Icon: IconCSharp,
          //   color: "violet",
          // },
        ],
      },

      actions: {
        primary: "See Projects",
        secondary: "Contact Me",
        IconSecondary: IconPhoneIncoming,
      },
    },
  },
};

const Test: NextPage = () => {
  return <HomePage {...homePage} />;
};

export default Test;

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
        "Cloud Practitioner",
        "Full-stack Developer",
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
          icon: <IconWorld size={28} stroke={1.5} />,
          title: "Web Development",
          color: "violet",
          percentage: 74,
        },
        {
          icon: <IconBrush size={28} stroke={1.5} />,
          title: "Front-end Development",
          color: "grape",
          percentage: 81,
        },
        {
          icon: <IconServer size={28} stroke={1.5} />,
          title: "Back-end Development",
          color: "indigo",
          percentage: 68,
        },
        {
          icon: <IconTool size={28} stroke={1.5} />,
          title: "Software Development",
          color: "cyan",
          percentage: 63,
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
            &lsquo;computer&rsquo; in it 😅 But I&apos;m glad I did! It was one
            of the most satisfying decisions I&apos;ve ever made.
          </p>
          <p>
            I&apos;m a Bachelor of Computer Science graduate with{" "}
            <b>Magna Cum Laude</b> latin honors. I held{" "}
            <b>leadership positions</b> in our college council and national and
            international organizations&apos; student chapters that involves the
            field of computing and ICT. I am a recipient of the OWWA EDSP
            scholarship, a competitive program that only selects top students
            across all regions of the Philippines qualified by DOST-SEI.
          </p>
          <p>
            Knowledge is my <b>passion</b>, and programming more so. I am fully
            competent in various frameworks and languages, and eager and
            persistent to learn even more! I am open and looking for{" "}
            <b>job opportunities</b> where I can grow and fully utilize my
            passion. See the projects I&apos;ve worked on, and please don&apos;t
            hesistate to contact me once you decide you&apos;d want us to work
            together! 😉
          </p>
        </>
      ),

      skillGrid: {
        heading: "My Tech Stack",
        skills: [
          {
            title: "HTML5",
            icon: (theme, color) => (
              <IconBrandHtml5 color={theme.colors[color][6]} size={32} />
            ),
            color: "orange",
          },
          {
            title: "CSS3",
            icon: (theme, color) => (
              <IconBrandCss3 color={theme.colors[color][6]} size={32} />
            ),
            color: "blue",
          },
          {
            title: "JavaScript ES6",
            icon: (theme, color) => (
              <IconBrandJavascript color={theme.colors[color][6]} size={32} />
            ),
            color: "yellow",
          },
          {
            title: "NodeJS",
            icon: (theme, color) => (
              <IconHexagon color={theme.colors[color][6]} size={32} />
            ),
            color: "lime",
          },
          {
            title: "React",
            icon: (theme, color) => (
              <IconBrandReactNative color={theme.colors[color][6]} size={32} />
            ),
            color: "cyan",
          },
          {
            title: "Vue",
            icon: (theme, color) => (
              <IconBrandVue color={theme.colors[color][6]} size={32} />
            ),
            color: "green",
          },
          {
            title: "Git",
            icon: (theme, color) => (
              <IconBrandGit color={theme.colors[color][6]} size={32} />
            ),
            color: "orange",
          },
          {
            title: "NextJS",
            icon: (theme, color) => (
              <IconBrandNextjs color={theme.colors[color][6]} size={32} />
            ),
            color: "gray",
          },
          {
            title: "NuxtJS",
            icon: (theme, color) => (
              <IconBrandNuxt color={theme.colors[color][6]} size={32} />
            ),
            color: "teal",
          },
          {
            title: "TailwindCSS",
            icon: (theme, color) => (
              <IconBrandTailwind color={theme.colors[color][6]} size={32} />
            ),
            color: "cyan",
          },
          {
            title: "Sass",
            icon: (theme, color) => (
              <IconBrandSass color={theme.colors[color][6]} size={32} />
            ),
            color: "pink",
          },
          {
            title: "Firebase",
            icon: (theme, color) => (
              <IconBrandFirebase color={theme.colors[color][6]} size={32} />
            ),
            color: "orange",
          },
          {
            title: "Python",
            icon: (theme, color) => (
              <IconBrandPython color={theme.colors[color][6]} size={32} />
            ),
            color: "yellow",
          },
          {
            title: "Unity",
            icon: (theme, color) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-unity"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={theme.colors[color][6]}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 13h11l5 -10"></path>
                <path d="M6.5 18l-4.5 -5l4.5 -5"></path>
                <path d="M13 13l5 8"></path>
                <path d="M11.5 4l6.5 -1l2 6"></path>
                <path d="M20 15l-2 6l-6.5 -.5"></path>
              </svg>
            ),
            color: "gray",
          },
          {
            title: "PHP",
            icon: (theme, color) => (
              <IconBrandPhp color={theme.colors[color][6]} size={32} />
            ),
            color: "indigo",
          },
        ],
      },

      actions: {
        primary: "Contact Me",
        secondary: "Projects",
      },
    },
  },
};

const Test: NextPage = () => {
  return <HomePage {...homePage} />;
};

export default Test;

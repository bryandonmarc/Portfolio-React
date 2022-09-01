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
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandFirebase,
  IconPhoneIncoming,
  IconBrandGit,
  IconMessages,
} from "@tabler/icons";
import { Icon } from "@iconify/react/dist/offline";
import Shopify from "@iconify-icons/logos/shopify";
import NodeJS from "@iconify-icons/mdi/nodejs";
import TypeScript from "@iconify-icons/mdi/language-typescript";
import { HomePageProps, meta } from "@components/templates";
import projectRenu from "@assets/images/project/project-renu.webp";
import projectRenuGif from "@assets/images/project/project-renu.gif";
import projectCandle from "@assets/images/project/project-candle.webp";
import projectCandleGif from "@assets/images/project/project-candle.gif";
import projectCovidTracker from "@assets/images/project/project-covidtracker.webp";
import projectCovidTrackerGif from "@assets/images/project/project-covidtracker.gif";
import projectEdutech from "@assets/images/project/project-edutech.webp";
import projectEdutechGif from "@assets/images/project/project-edutech.gif";
import {
  CandleLogo,
  CovidTrackerLogo,
  EduTechLogo,
  RenuLogo,
} from "@components/atoms";

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
          Icon: IconTool,
          title: "Software Development",
          color: "indigo",
          percentage: 36,
        },
        {
          Icon: IconMessages,
          title: "Leadership & Communication",
          color: "cyan",
          percentage: 45,
        },
      ],
    },

    content: {
      skillGrid: {
        heading: "I'm confident working with...",
        subheading: "+ many more!",
        skills: [
          {
            id: 1,
            title: "HTML5",
            Icon: IconBrandHtml5,
            color: "orange",
          },
          {
            id: 2,
            title: "CSS3",
            Icon: IconBrandCss3,
            color: "indigo",
          },
          {
            id: 3,
            title: "JavaScript (ES6+)",
            Icon: IconBrandJavascript,
            color: "yellow",
          },
          {
            id: 4,
            title: "React",
            Icon: IconBrandReactNative,
            color: "blue",
          },
          {
            id: 5,
            title: "Vue",
            Icon: IconBrandVue,
            color: "green",
          },
          {
            id: 6,
            title: "TypeScript",
            icon: (className) => (
              <Icon
                className={className}
                style={{ fontSize: "32px", fill: "currentColor" }}
                icon={TypeScript}
              />
            ),
            color: "blue",
          },
          {
            id: 7,
            title: "Next.js",
            Icon: IconBrandNextjs,
            color: "gray",
          },
          {
            id: 8,
            title: "Nuxt.js",
            Icon: IconBrandNuxt,
            color: "teal",
          },
          {
            id: 9,
            title: "Node.js",
            icon: (className) => (
              <Icon
                className={className}
                style={{ fontSize: "32px" }}
                icon={NodeJS}
              />
            ),
            color: "lime",
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
            title: "Git",
            Icon: IconBrandGit,
            color: "red",
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
            latin honor awardee. I held <b>leadership positions</b> in our
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

      actions: {
        primary: "Projects",
        secondary: "Contact Me",
        IconSecondary: IconPhoneIncoming,
      },
    },
  },

  projectProps: {
    carousel: {
      sliders: [
        {
          src: projectRenu,
          alt: "RENU Naturals",
          logo: <RenuLogo fill="#223F35" />,
          gif: projectRenuGif,
          color: "#223F35",
          href: "https://renunaturals.com/",
          langs: ["shopify", "alpine", "tailwind", "pwa", "googleAnalytics"],
        },
        {
          src: projectCandle,
          alt: "1220 Candle Company",
          logo: <CandleLogo fill="#003E4D" />,
          gif: projectCandleGif,
          color: "#003E4D",
          href: "https://1220candlecompany.com/",
          langs: ["shopify", "alpine", "tailwind", "googleAnalytics"],
        },
        {
          src: projectCovidTracker,
          alt: "MCL COVID19 Case Tracker for Laguna",
          logo: <CovidTrackerLogo fill="#00204D" />,
          gif: projectCovidTrackerGif,
          color: "#00204D",
          href: "https://mcl-covid19tracker-laguna.netlify.app/",
          langs: [
            "nuxt",
            "tailwind",
            "sass",
            "apexCharts",
            "python",
            "netlify",
          ],
        },
        {
          src: projectEdutech,
          alt: "eduGames Teach",
          logo: <EduTechLogo fill="#301C80" />,
          gif: projectEdutechGif,
          color: "#301C80",
          href: "https://edu-tech-ssr.herokuapp.com/",
          langs: ["vue", "tailwind", "node", "firebase", "unity", "heroku"],
        },
      ],
    },
  },
};

const Test: NextPage = () => {
  return <HomePage {...homePage} />;
};

export default Test;

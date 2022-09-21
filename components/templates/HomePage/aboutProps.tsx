import { AboutProps } from "@components/organisms";
import { Text } from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGraphql,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNuxt,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReactNative,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandVue,
  IconBrush,
  IconDatabase,
  IconMessages,
  IconPhoneIncoming,
  IconTool,
  IconWorld,
} from "@tabler/icons";
import NodeJS from "@iconify-icons/mdi/nodejs";
import TypeScript from "@iconify-icons/mdi/language-typescript";
import MySQL from "@iconify-icons/logos/mysql-icon";
import AspNET from "@iconify-icons/mdi/dot-net";
import { meta } from "@components/templates";

export const aboutProps: AboutProps = {
  title: {
    title: (className) => (
      <>
        Nice to meet{" "}
        <Text component="span" className={className} variant="gradient" inherit>
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
          id: "HTML5",
          Icon: IconBrandHtml5,
          color: "orange",
        },
        {
          id: "CSS3",
          Icon: IconBrandCss3,
          color: "indigo",
        },
        {
          id: "JavaScript (ES6+)",
          Icon: IconBrandJavascript,
          color: "yellow",
        },
        {
          id: "React",
          Icon: IconBrandReactNative,
          color: "blue",
        },
        {
          id: "Vue",
          Icon: IconBrandVue,
          color: "green",
        },
        {
          id: "TypeScript",
          icon: TypeScript,
          color: "blue",
        },
        {
          id: "Next.js",
          Icon: IconBrandNextjs,
          color: "gray",
        },
        {
          id: "Nuxt.js",
          Icon: IconBrandNuxt,
          color: "teal",
        },
        {
          id: "Node.js",
          icon: NodeJS,
          color: "lime",
        },
        {
          id: "TailwindCSS",
          Icon: IconBrandTailwind,
          color: "cyan",
        },
        {
          id: "Sass",
          Icon: IconBrandSass,
          color: "pink",
        },
        {
          id: "Git",
          Icon: IconBrandGit,
          color: "red",
        },
        {
          id: "Firebase",
          Icon: IconBrandFirebase,
          color: "yellow",
        },
        {
          id: "GraphQL",
          Icon: IconBrandGraphql,
          color: "pink",
        },
        {
          id: "MySQL",
          icon: MySQL,
          color: "cyan",
          fill: true,
        },
        {
          id: "ASP.NET C#",
          icon: AspNET,
          color: "violet",
        },
        {
          id: "PHP",
          Icon: IconBrandPhp,
          color: "indigo",
        },
        {
          id: "Python",
          Icon: IconBrandPython,
          color: "yellow",
        },
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
          latin honor awardee. I held <b>leadership positions</b> in our college
          council and our university&apos;s student chapters of national and
          international organizations involving the field of computing and ICT.
          I am a recipient of the OWWA EDSP scholarship, a competitive program
          that only selects top students across all regions of the Philippines
          qualified by DOST-SEI.
        </p>
        <p>
          Knowledge is my <b>passion</b>, and programming even more so. I am
          fully competent in various frameworks and languages, and eager and
          persistent to learn even more! I am open and looking for{" "}
          <b>job opportunities</b> where I can grow and fully utilize my
          passion. Not sold yet? See the projects I&apos;ve worked on, and
          don&apos;t hesistate to contact me once you decide you&apos;d want us
          to work together! 😉
        </p>
      </>
    ),

    actions: {
      primary: "Projects",
      secondary: "Contact Me",
      IconSecondary: IconPhoneIncoming,
    },
  },
};

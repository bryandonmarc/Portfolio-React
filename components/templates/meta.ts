import { ProjectCardProps } from "@components/molecules";
import projectRenu from "@assets/images/project/project-renu.webp";
import projectRenuGif from "@assets/images/project/project-renu.gif";
import projectCandle from "@assets/images/project/project-candle.webp";
import projectCandleGif from "@assets/images/project/project-candle.gif";
import projectCovidTracker from "@assets/images/project/project-covidtracker.webp";
import projectCovidTrackerGif from "@assets/images/project/project-covidtracker.gif";
import projectEdutech from "@assets/images/project/project-edutech.webp";
import projectEdutechGif from "@assets/images/project/project-edutech.gif";
import projectPortfolio from "@assets/images/project/project-portfolio.webp";
import {
  CandleLogo,
  CarouselSlideProps,
  CovidTrackerLogo,
  EduTechLogo,
  RenuLogo,
  SliderLogo,
} from "@components/atoms";
import { StaticImageData } from "next/future/image";
import { Languages } from "./languages";

export interface ProjectsProps {
  src: string | StaticImageData;
  gif?: string | StaticImageData;
  alt: string;
  href: string;
  langs: Languages[];
  description: string;
}

export const projects: ProjectsProps[] = [
  {
    src: projectRenu,
    alt: "RENU Naturals",
    gif: projectRenuGif,
    href: "https://renunaturals.com/",
    langs: ["shopify", "alpine", "tailwind", "pwa", "googleAnalytics"],
    description:
      "A skincare beauty brand featuring natural cruelty-free and vegan skincare products, made and infused with the highest quality organic ingredients and botanical extracts, herbs and oils.",
  },
  {
    src: projectCandle,
    alt: "1220 Candle Company",
    gif: projectCandleGif,
    href: "https://1220candlecompany.com/",
    langs: ["shopify", "alpine", "tailwind", "googleAnalytics"],
    description:
      "1220 Candle Company is a Mississippi based candle company with a mission to simply create luxury candles with alluring aromas and fragrances, luscious and moisturizing body butters, sensuous room sprays, and captivating wax melts.",
  },
  {
    src: projectCovidTracker,
    alt: "MCL COVID19 Case Tracker",
    gif: projectCovidTrackerGif,
    href: "https://mcl-covid19tracker-laguna.netlify.app/",
    langs: ["nuxt", "tailwind", "sass", "apexCharts", "python", "netlify"],
    description:
      "COVID19 Dashboard and Case Tracker for Laguna, tracking health cases and reports from the city/municipality down to the barangay/district level. Developed by MCL College of Computer and Information Science.",
  },
  {
    src: projectEdutech,
    alt: "eduGames Teach",
    gif: projectEdutechGif,
    href: "https://edu-tech-ssr.herokuapp.com/",
    langs: ["vue", "tailwind", "node", "firebase", "unity", "heroku"],
    description:
      "Experience a new way of learning for your students using this teaching companion service featuring gamified learning with a fun, interactive educational game! It also serves as a supplementary eLearning system with an integrated metric model on detecting, analyzing, and predicting learner engagement",
  },
  {
    src: projectPortfolio,
    alt: "Portfolio-Vue",
    href: "http://portfolio-site-vitesse.s3-website.ap-east-1.amazonaws.com/",
    langs: ["vue", "typescript", "vite", "unocss", "pwa", "i18n", "aws"],
    description:
      "My past portfolio I've made with me exploring new web technologies and applying my learnings from my on-the-job training! Built with Vitesse and statically deployed on Amazon S3.",
  },
];

const projectCardProps: { color: string; Logo: SliderLogo }[] = [
  { color: "#223F35", Logo: RenuLogo }, // RENU Naturals
  { color: "#003E4D", Logo: CandleLogo }, // 1220 Candle Company
  { color: "#00204D", Logo: CovidTrackerLogo }, // MCL Covid Tracker
  { color: "#301C80", Logo: EduTechLogo }, // eduGames Teach
];

export const projectCards: CarouselSlideProps[] = projects.map(
  (project: ProjectsProps, i): CarouselSlideProps => ({
    ...project,
    ...projectCardProps[i],
  })
);

export const meta = {
  name: "Zekken Yuuki",
};

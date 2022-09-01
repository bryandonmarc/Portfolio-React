import { ProjectProps } from "@components/organisms";
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

export const projectProps: ProjectProps = {
  carousel: {
    sliders: [
      {
        src: projectRenu,
        alt: "RENU Naturals",
        Logo: RenuLogo,
        gif: projectRenuGif,
        color: "#223F35",
        href: "https://renunaturals.com/",
        langs: ["shopify", "alpine", "tailwind", "pwa", "googleAnalytics"],
      },
      {
        src: projectCandle,
        alt: "1220 Candle Company",
        Logo: CandleLogo,
        gif: projectCandleGif,
        color: "#003E4D",
        href: "https://1220candlecompany.com/",
        langs: ["shopify", "alpine", "tailwind", "googleAnalytics"],
      },
      {
        src: projectCovidTracker,
        alt: "MCL COVID19 Case Tracker for Laguna",
        Logo: CovidTrackerLogo,
        gif: projectCovidTrackerGif,
        color: "#00204D",
        href: "https://mcl-covid19tracker-laguna.netlify.app/",
        langs: ["nuxt", "tailwind", "sass", "apexCharts", "python", "netlify"],
      },
      {
        src: projectEdutech,
        alt: "eduGames Teach",
        Logo: EduTechLogo,
        gif: projectEdutechGif,
        color: "#301C80",
        href: "https://edu-tech-ssr.herokuapp.com/",
        langs: ["vue", "tailwind", "node", "firebase", "unity", "heroku"],
      },
    ],
  },
};

import Shopify from "@iconify-icons/logos/shopify";
import AlpineJS from "@iconify-icons/logos/alpinejs-icon";
import Tailwind from "@iconify-icons/logos/tailwindcss-icon";
import PWA from "@iconify-icons/logos/pwa";
import Sass from "@iconify-icons/logos/sass";
import GoogleAnalytics from "@iconify-icons/logos/google-analytics";
import Nuxt from "@iconify-icons/logos/nuxt-icon";
import ApexCharts from "@iconify-icons/mdi/chart-areaspline-variant";
import Python from "@iconify-icons/logos/python";
import Netlify from "@iconify-icons/logos/netlify";
import Azure from "@iconify-icons/logos/azure-icon";
import Vue from "@iconify-icons/logos/vue";
import NodeJS from "@iconify-icons/logos/nodejs-icon";
import Firebase from "@iconify-icons/logos/firebase";
import Unity from "@iconify-icons/logos/unity";
import Heroku from "@iconify-icons/logos/heroku-icon";
import { IconifyIcon } from "@iconify/react";

export interface LanguageProps {
  name: string;
  icon: IconifyIcon;
  color: string;
}

export type Languages =
  | "shopify"
  | "alpine"
  | "tailwind"
  | "pwa"
  | "sass"
  | "googleAnalytics"
  | "nuxt"
  | "apexCharts"
  | "python"
  | "netlify"
  | "azure"
  | "vue"
  | "node"
  | "firebase"
  | "unity"
  | "heroku";

export const languages: {
  [key in Languages]: LanguageProps;
} = {
  shopify: {
    name: "Liquid",
    icon: Shopify,
    color: "#95BF46",
  },
  alpine: {
    name: "AlpineJS",
    icon: AlpineJS,
    color: "#77C1D2",
  },
  tailwind: {
    name: "TailwindCSS",
    icon: Tailwind,
    color: "#0EA5E9",
  },
  pwa: {
    name: "PWA",
    icon: PWA,
    color: "#5A0FC8",
  },
  sass: {
    name: "Sass",
    icon: Sass,
    color: "#BF4080",
  },
  googleAnalytics: {
    name: "Google Analytics",
    icon: GoogleAnalytics,
    color: "#F9AB00",
  },
  nuxt: {
    name: "Nuxt",
    icon: Nuxt,
    color: "#00DC82",
  },
  apexCharts: {
    name: "ApexCharts.js",
    icon: ApexCharts,
    color: "#222C37",
  },
  python: {
    name: "Python",
    icon: Python,
    color: "#FBD38D",
  },
  netlify: {
    name: "Netlify",
    icon: Netlify,
    color: "#37B0BB",
  },
  azure: {
    name: "Azure",
    icon: Azure,
    color: "#3CCBF4",
  },
  vue: {
    name: "Vue",
    icon: Vue,
    color: "#41B883",
  },
  node: {
    name: "Node.js",
    icon: NodeJS,
    color: "#84ba64",
  },
  firebase: {
    name: "Firebase",
    icon: Firebase,
    color: "#FCCA3F",
  },
  unity: {
    name: "Unity",
    icon: Unity,
    color: "#222C37",
  },
  heroku: {
    name: "Heroku",
    icon: Heroku,
    color: "#430098",
  },
};

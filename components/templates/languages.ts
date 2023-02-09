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
import UnoCSS from "@iconify-icons/logos/unocss";
import Vite from "@iconify-icons/logos/vitejs";
import TypeScript from "@iconify-icons/logos/typescript-icon";
import Partytown from "@iconify-icons/logos/partytown-icon";
import AWS from "@iconify-icons/logos/aws";
import i18n from "@iconify-icons/mdi/web";
import React from "@iconify-icons/logos/react";
import NextJS from "@iconify-icons/logos/nextjs-icon";
import Mantine from "@iconify-icons/logos/mantine-icon";
import Vercel from "@iconify-icons/logos/vercel-icon";
import Bash from "@iconify-icons/logos/bash-icon";
import GraphQL from "@iconify-icons/logos/graphql";
import PHP from "@iconify-icons/logos/php";
import Lavarel from "@iconify-icons/logos/laravel";
import JQuery from "@iconify-icons/mdi/jquery";
import MySQL from "@iconify-icons/logos/mysql-icon";
import Bootstrap from "@iconify-icons/logos/bootstrap";
import CSharp from "@iconify-icons/logos/c-sharp";
import WEKA from "@iconify-icons/mdi/code";
import Java from "@iconify-icons/logos/java";
import Kotlin from "@iconify-icons/logos/kotlin-icon";
import Android from "@iconify-icons/logos/android-icon";
import Strapi from "@iconify-icons/logos/strapi-icon";
import Git from "@iconify-icons/logos/git-icon";
import Github from "@iconify-icons/logos/github-icon";
import npm from "@iconify-icons/logos/npm-icon";
import Yarn from "@iconify-icons/logos/yarn";
import pnpm from "@iconify-icons/logos/pnpm";
import Webpack from "@iconify-icons/logos/webpack";
import Javascript from "@iconify-icons/logos/javascript";
import HTML from "@iconify-icons/logos/html-5";
import CSS from "@iconify-icons/logos/css-3";
import Windows from "@iconify-icons/logos/microsoft-windows";
import Linux from "@iconify-icons/logos/linux-tux";
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
  | "heroku"
  | "vite"
  | "unocss"
  | "typescript"
  | "partytown"
  | "aws"
  | "i18n"
  | "react"
  | "nextjs"
  | "mantine"
  | "vercel"
  | "graphql"
  | "bash"
  | "php"
  | "laravel"
  | "jquery"
  | "mysql"
  | "bootstrap"
  | "csharp"
  | "weka"
  | "java"
  | "kotlin"
  | "android"
  | "strapi"
  | "git"
  | "github"
  | "npm"
  | "yarn"
  | "pnpm"
  | "webpack"
  | "javascript"
  | "html"
  | "css"
  | "windows"
  | "linux";

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
  vite: {
    name: "Vite",
    icon: Vite,
    color: "#bd34fe",
  },
  unocss: {
    name: "UnoCSS",
    icon: UnoCSS,
    color: "#222C37",
  },
  typescript: {
    name: "TypeScript",
    icon: TypeScript,
    color: "#228BE6",
  },
  partytown: {
    name: "Partytown",
    icon: Partytown,
    color: "#2E6AC8",
  },
  aws: {
    name: "AWS",
    icon: AWS,
    color: "#FF9900",
  },
  i18n: {
    name: "i18n",
    icon: i18n,
    color: "#222C37",
  },
  react: {
    name: "React",
    icon: React,
    color: "#00D8FF",
  },
  nextjs: {
    name: "Next.js",
    icon: NextJS,
    color: "#222C37",
  },
  mantine: {
    name: "Mantine",
    icon: Mantine,
    color: "#339AF0",
  },
  vercel: {
    name: "Vercel",
    icon: Vercel,
    color: "#222C37",
  },
  bash: {
    name: "Bash",
    icon: Bash,
    color: "#222C37",
  },
  graphql: {
    name: "GraphQL",
    icon: GraphQL,
    color: "#E535AB",
  },
  php: {
    name: "PHP",
    icon: PHP,
    color: "#6181B6",
  },
  laravel: {
    name: "Laravel",
    icon: Lavarel,
    color: "#FF2D20",
  },
  jquery: {
    name: "jQuery",
    icon: JQuery,
    color: "#21609B",
  },
  mysql: {
    name: "MySQL",
    icon: MySQL,
    color: "#F29111",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: Bootstrap,
    color: "#7E13F8",
  },
  csharp: {
    name: "C#",
    icon: CSharp,
    color: "#1E9E25",
  },
  weka: {
    name: "WEKA",
    icon: WEKA,
    color: "#222C37",
  },
  java: {
    name: "Java",
    icon: Java,
    color: "#E76F00",
  },
  kotlin: {
    name: "Kotlin",
    icon: Kotlin,
    color: "#C316E3",
  },
  android: {
    name: "Android",
    icon: Android,
    color: "#3DDC84",
  },
  strapi: {
    name: "Strapi",
    icon: Strapi,
    color: "#8E75FF",
  },
  git: {
    name: "Git",
    icon: Git,
    color: "#DE4C36",
  },
  github: {
    name: "Github",
    icon: Github,
    color: "#222C37",
  },
  npm: {
    name: "npm",
    icon: npm,
    color: "#C12127",
  },
  yarn: {
    name: "Yarn",
    icon: Yarn,
    color: "#368FB9",
  },
  pnpm: {
    name: "pnpm",
    icon: pnpm,
    color: "#F9AD00",
  },
  webpack: {
    name: "Webpack",
    icon: Webpack,
    color: "#8ED6FB",
  },
  javascript: {
    name: "JavaScript",
    icon: Javascript,
    color: "#F7DF1E",
  },
  html: {
    name: "HTML",
    icon: HTML,
    color: "#F16529",
  },
  css: {
    name: "CSS",
    icon: CSS,
    color: "#2965F1",
  },
  windows: {
    name: "Windows",
    icon: Windows,
    color: "#00ADEF",
  },
  linux: {
    name: "Linux",
    icon: Linux,
    color: "#222C37",
  },
};

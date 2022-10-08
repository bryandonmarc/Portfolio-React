import { AboutPageProps } from "./AboutPage";

export const aboutProps: AboutPageProps = {
  aboutProps: {
    jobs: [
      {
        jobCompany: "Artologie",
        jobTitle: "Shopify Developer",
        jobDate: "Dec 2021 – present",
        jobDescription: [
          "Built customized lightweight and modern Shopify themes utilizing newer web technologies, and JavaScript and CSS frameworks",
          "Provided efficient support and communication to the store owners in explaining technical information during website development.",
          "Maximized client satisfaction by catering an open approach during eCommerce development to meet dynamic client requirements.",
          "Migrated 2 existing Shopify storefronts onto newly designed custom-developed client-tailored themes within 1 month each.",
        ],
        langs: [
          "shopify",
          "alpine",
          "tailwind",
          "sass",
          "pwa",
          "googleAnalytics",
        ],
      },
      {
        jobCompany: "jasonm.co",
        jobTitle: "Shopify Developer",
        jobDate: "Aug 2021 – Dec 2021",
        jobDescription: [
          'Utilized lazy-loading concepts to build a custom "Infinite scrolling" component that render products just-in-time while the user scrolls through the website, decreasing initial page load, and reducing user effort on paginated navigation to increase retention rate',
          "Created a private Shopify app to expose Shopify Storefront API and Admin API consumed with GraphQL endpoints.",
          "Developed a custom Python web-scraping script for automated product tagging and upload with images and descriptions from Google Search.",
          "Migrated an existing eCommerce Website from a different platform onto Shopify.",
        ],
        langs: [
          "shopify",
          "vue",
          "tailwind",
          "python",
          "sass",
          "pwa",
          "googleAnalytics",
        ],
      },
      {
        jobCompany: "College of Computer and Information Science @ MCL",
        jobTitle: "Assistant Researcher",
        jobDate: "Jul 2021 – Aug 2021",
        jobDescription: [
          "Utilized bleeding edge JAMStack technologies and JavaScript frameworks such as Nuxt and ApexCharts.js to create beautiful and powerful chart components with dynamically fetched data.",
          "Optimized and abstracted existing codebase and data pipeline to ensure website accessibility for users with limited mobile data bandwidth, drastically reducing user data consumption and increasing Google Lighthouse performance metrics.",
          "Co-developed and deployed an automated Python web scrapping cloud function and data sanitizer on Microsoft Azure to fetch COVID-19 Case Data from the Google Drive data drop repository of the Department of Health.",
          "Integrated a CI/CD pipeline for continuous generation and deployment of the static website using data fetched from the automated web scrapping cloud function using Github Actions and Netlify.",
        ],
        langs: ["node", "nuxt", "vue", "tailwind", "sass", "pwa", "python"],
      },
    ],
  },
};

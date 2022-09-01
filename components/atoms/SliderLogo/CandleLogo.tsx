import { SliderLogoProps } from "./SliderLogo";
import useStyles from "./SliderLogo.styles";

export function CandleLogo({
  classNames,
  styles,
  unstyled,
  size,
  className,
  ...others
}: SliderLogoProps) {
  const { classes, cx } = useStyles(
    { size },
    { name: "CandleLogo", classNames, styles, unstyled }
  );
  return (
    <svg
      className={cx(classes.root, className)}
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1285 245.3"
    >
      <path d="M1001.1 137.7a26.8 26.8 0 0 0 3.1-6.6 27.5 27.5 0 0 0 1.2-8.4 27 27 0 0 0-1.1-8.4 28.7 28.7 0 0 0-3-6.6h-.1a22.3 22.3 0 0 0-4.6-4.8 25.9 25.9 0 0 0-16.3-5.7h-19.5v51h19.6a26.3 26.3 0 0 0 20.8-10.5Zm-3.8-6a16.8 16.8 0 0 1-10.7 9.8 26.7 26.7 0 0 1-8.2 1h-11.5v-39.7h11.5a30.1 30.1 0 0 1 8.2 1 16.8 16.8 0 0 1 10.8 9.8 25 25 0 0 1 1.6 9 22.3 22.3 0 0 1-1.6 9Zm-94.2-25.9 29.7 42.5h7.6V97.2h-6.1v42.4h-.2l-29.6-42.4H897v51.1h6v-42.5h.1zm-33.8 29.9 5 12.6h7.2L859.8 97H854l-22.6 51h6.8l5.3-12.4ZM856.6 105l10.1 25h-20.6l-.2.1Zm-63.3-1.8a17.8 17.8 0 0 1 14.9-.1 15.7 15.7 0 0 1 5.6 4.6l5.3-3.8a18.5 18.5 0 0 0-8-6.1 27.2 27.2 0 0 0-20.5.2 25.7 25.7 0 0 0-15.4 24.6 29.6 29.6 0 0 0 2 10.8 25.8 25.8 0 0 0 13.7 14 25.2 25.2 0 0 0 10.3 2 28 28 0 0 0 11-2.1 21.6 21.6 0 0 0 8.3-6.8l-4.5-3.8a18.9 18.9 0 0 1-6.5 5.3h-.1a19.4 19.4 0 0 1-22.3-4.2 23.6 23.6 0 0 1 0-30 19.2 19.2 0 0 1 6.1-4.6Zm487.5 36.8h-.1a4.2 4.2 0 0 0-3 1.3 4 4 0 0 0-1.3 3 4.2 4.2 0 0 0 1.3 3.1 4.4 4.4 0 0 0 3 1.3 4.3 4.3 0 0 0 3-1.3 3.5 3.5 0 0 0 1.3-3 4.3 4.3 0 0 0-1.2-3.1 4.2 4.2 0 0 0-3-1.3Zm-38.1-42.2a26.8 26.8 0 0 0-10.7-2 29.2 29.2 0 0 0-10.8 2 25.8 25.8 0 0 0-14 14.1 29.6 29.6 0 0 0 0 21.4 24.9 24.9 0 0 0 14 14.1 27.3 27.3 0 0 0 10.8 2 26.8 26.8 0 0 0 10.7-2 25.8 25.8 0 0 0 14-14 30 30 0 0 0 2-10.8 29 29 0 0 0-2-10.7 25 25 0 0 0-5.6-8.5 25.9 25.9 0 0 0-8.4-5.6Zm8 33.1a19.4 19.4 0 0 1-18.7 13 19.8 19.8 0 0 1-14.6-6.3 20 20 0 0 1-4.2-6.7 23 23 0 0 1 4.2-23.3 19.4 19.4 0 0 1 14.6-6.2 19.8 19.8 0 0 1 14.5 6.2 21.6 21.6 0 0 1 4.2 6.8 23 23 0 0 1 0 16.6Zm-86.7-27.7a17.8 17.8 0 0 1 14.9-.1 15.7 15.7 0 0 1 5.7 4.6l5.2-3.8a18.5 18.5 0 0 0-8-6.1 27.2 27.2 0 0 0-20.5.2 25.7 25.7 0 0 0-15.5 24.7 29.6 29.6 0 0 0 2 10.8 25.8 25.8 0 0 0 13.7 14 25.2 25.2 0 0 0 10.3 2 28 28 0 0 0 11-2.1 21.6 21.6 0 0 0 8.3-6.8l-4.5-3.8a18.9 18.9 0 0 1-6.5 5.2h.1a19.6 19.6 0 0 1-22.4-4.2 23.6 23.6 0 0 1 0-30 19.2 19.2 0 0 1 6.2-4.6Zm-63.3-.4v-5.6h-32.2v51.1h33.5v-5.7h-27.3v-18.1h24.3v-5.7h-24.3v-16h26zm-76.8-5.6v51.1h29.4v-5.7h-23.5V97.2h-5.9zM137.7 241.9Zm149.9-127c-1.9 0-2.5.6-2.8 3.8-2.3 23-10.5 31-23.7 31-19.3 0-54.7-15.5-79.4-15.5-25.9 0-38.8 16.4-38.8 34.4a73 73 0 0 0 .6 9.2h-1.2a128 128 0 0 1-.7-12.7c0-33.4 21.2-56.2 67.6-65.7C250.3 91 276 74.1 276 45.7 276 19.2 244.3.8 206.7.8c-40.4 0-68.2 20.6-68.2 44.3 0 14.5 9.8 22.7 21.1 22.7 10.5 0 19.3-5.3 19.3-15.1 0-12.4-13-14.6-13-27.2 0-10.7 13-19.3 29.4-19.3 22.8 0 38.3 13 38.3 39.2 0 23-9.5 38.5-43.3 51.5-34.5 13-54.4 35.4-54.4 70.5 0 12.6 2.6 17.6 7.6 17.6 4.1 0 6.6-2.2 6.6-5.3 0-3.8-2.2-6.7-2.2-9.8 0-5.7 2.9-8.9 9.8-8.9 18.7 0 68 22.8 94.2 22.8 20.5 0 30.6-11 35-37a266.6 266.6 0 0 0 3.2-29.7c0-1.2-.6-2.2-2.5-2.2Zm411.1 8.2a16 16 0 1 0 10.4 28.2c-3 13-11.1 25.4-24.6 26.7-16.4.7-30.3-9.7-44.3-17.9-10.1-5.7-19.5-12.4-29.4-19-15.1-8.4-28.2-20.7-44.8-26.6q-1-10.7-1.3-21.4v-8.6c0-66.6 16-80.2 36.2-80.2h2c19.2 1 34.4 15.6 34.4 80.2a255.5 255.5 0 0 1-2 34.3 114.8 114.8 0 0 1-4.3 20.7c5.1 3.4 10.2 6.7 15.5 9.7l2.5 1.5a81.6 81.6 0 0 0 24.4-47v-.4l.5-2.6v-.3c.5-3 .8-6 1-8.9v-4l.1-3c0-51-31.7-84.5-74-84.5s-74.2 33.4-74.2 84.5a104.9 104.9 0 0 0 4.2 29.9c-15 8-22.6 27.6-24.3 48-3.7 26.5-14.3 35.7-31 35.7-25.6 0-72.7-20.6-105.5-20.6-34.5 0-51.8 22-51.8 45.9a95.8 95.8 0 0 0 .9 12.2h-1.7c-.4-5.5-.8-11-.8-16.8 0-44.6 28.1-75 90-87.6 54.7-11.3 88.8-33.6 88.8-71.5 0-35.3-42.1-59.7-92.2-59.7-53.8 0-90.8 27.3-90.8 58.9 0 19.3 13 30.3 28.1 30.3 14 0 25.7-7.2 25.7-20.2 0-16.4-17.2-19.4-17.2-36.2 0-14.3 17.2-25.7 39-25.7 30.4 0 51 17.3 51 52.2 0 30.7-12.6 51.3-57.7 68.6-45.8 17.2-72.3 47.1-72.3 93.8 0 16.8 3.4 23.6 10 23.6 5.6 0 9-3 9-7.2 0-5-3-8.8-3-13 0-7.6 3.8-11.8 13-11.8 24.8 0 90.5 30.3 125.4 30.3 27.3 0 40.8-14.7 46.7-49.2 1.4-9 2.5-18 3.2-25.5v-.2c.5-4.3.8-8 1-10.9a54 54 0 0 1 1-5.8c3-15.5 9.4-25.4 18-30a102 102 0 0 0 5.6 11.5 69.9 69.9 0 0 0 61.8 35.4l4.1-.2-4.6-4.1a26 26 0 0 1-22-10.3l-.1-.2-.9-1.1v-.2l-1-1.4-.1-.1-1.7-3-.3-.5-1.5-3.3-.3-.8-.4-1-.4-1a97.5 97.5 0 0 1-4.4-17.4c2.8 1.4 5.6 3 8.5 4.8 20.6 12.6 35.8 30.5 55.5 44.9 20 13.5 54.2 25 71.4 1.6 6.8-9.4 8.5-20.3 11-31.1a10.9 10.9 0 0 0 .8-3.1l.1-.4.1-1.9a16 16 0 0 0-16-16ZM5 30.4c39.8 6.2 42.3 16.1 42.3 66.3V183c0 37.7-.9 46.8-38.2 54.7-3.3.8-5.8 1.3-5.8 4.2 0 1.6.8 2.4 3 2.4 4 0 37.2-2.9 63-2.9s60 3 65.5 3c2 0 2.9-.9 2.9-2.4 0-2.6-3.8-3.4-11.6-6.7-26.2-8.3-27.8-21.6-27.8-70V71.8c.4-33.1 2.9-61.8 2.9-65.5 0-1.6-.9-2-3-2-6.2 0-44.7 16.5-94 18.2-2.6 0-4.2 1.7-4.2 3.7 0 2.5 1.6 3.8 5 4.2Z" />
    </svg>
  );
}
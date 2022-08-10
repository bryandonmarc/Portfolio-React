import { IconProps } from "./Icon";

export function LinkedInIcon({ size, ...others }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 183.2 182.9"
      width={size}
      height={size}
      {...others}
    >
      <path
        fill="currentColor"
        d="M3 60.7h38v122.2H3zM102.8 122.4c0-15.9 3-31.3 22.7-31.3 19.5 0 19.8 18.2 19.8 32.4v59.4h37.9v-67c0-33-7.1-58.2-45.5-58.2a40 40 0 0 0-36 19.7h-.5V60.7H64.8V183h38ZM22 44A22 22 0 1 0 0 22a22 22 0 0 0 22 22Z"
      />
    </svg>
  );
}

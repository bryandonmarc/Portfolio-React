import { SliderLogoProps } from "./SliderLogo";
import useStyles from "./SliderLogo.styles";

export function RenuLogo({
  classNames,
  styles,
  unstyled,
  size,
  className,
  ...others
}: SliderLogoProps) {
  const { classes, cx } = useStyles(
    { size },
    { name: "RenuLogo", classNames, styles, unstyled }
  );

  return (
    <svg
      className={cx(classes.root, className)}
      {...others}
      fill="#F1EAD5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9001 810"
    >
      <path
        fillRule="evenodd"
        d="M0 1c161-1 338-12 436 50 88 55 114 178 41 269-28 35-76 62-123 77l-58 13 2 1 32 16c21 12 39 27 57 42 68 55 121 159 159 245 13 30 31 60 41 93h-92c-8-48-40-110-62-148-68-117-132-235-318-235v383H0V1Zm764 0h471v27H880v341l233 1-1 28H880v381h352v28H764V1Zm612 0c25 0 107-6 124 2l454 609h1V1h34v806h-22L1403 67v720h-27V1Zm818 0h114v435c0 74-8 166 15 221 26 61 82 94 156 107 147 27 275-59 306-160 19-63 14-147 14-226V1h29v393c0 79 4 173-17 233-30 87-105 142-198 168-26 7-52 6-82 11-32 5-75 3-104-3-102-20-182-58-219-143-31-71-14-142-14-229V1Zm1089 0c25 0 107-6 124 2l455 609V1h34v806c-8 0-19 1-24-2L3309 66v721h-26V1Zm1117 0h25l342 806h-127l-120-295h-297l-113 295h-43L4400 1Zm214 0h785v27h-336v779h-117V28h-333l1-27Zm925 0h115v437c0 76-7 168 16 222 27 62 86 92 163 105 54 9 114-3 152-18 68-27 115-64 142-132 23-59 18-145 18-224V1h29v384c0 81 5 169-15 234-27 90-102 147-193 174-28 8-56 8-89 13-35 5-80 2-111-4-97-19-176-59-211-139-31-71-16-143-16-233V1Zm821 0c161-1 338-11 436 50 89 56 113 179 40 270-29 37-79 63-129 78l-51 11 2 1 42 22 49 38c66 53 118 156 155 239 14 31 32 63 43 97h-92c-8-37-26-71-40-103-48-110-128-236-248-272-26-8-58-8-92-8v383h-115V1Zm1078 0h25l342 806-128-1-84-205c-8-20-25-76-37-89h-296l-112 295h-43v-1L7438 1Zm515 0h117v779h445v27h-562V1Zm761 2c108-2 176 37 217 102l-2 3-22 17-3-2c-17-40-73-77-120-88-98-23-193 47-163 146 13 45 48 72 82 96 68 48 145 88 212 137 52 38 101 106 83 206-15 85-57 141-127 171-140 59-307-32-353-123l21-23 2 1c6 15 20 26 29 38 37 47 80 78 149 93 102 22 211-58 194-161-12-73-62-104-114-137-73-46-179-92-226-162-52-77-46-194 16-256 23-23 53-42 89-52ZM115 35v362c38 0 86 6 121-2 100-22 138-57 154-164 4-26 1-59-5-81a191 191 0 0 0-34-70c-39-50-146-45-236-45Zm6360 0v362c152 2 246-13 272-139 6-31 6-77-2-107-8-28-19-52-35-72-39-50-146-44-235-44ZM4368 148l-137 336h278l-141-336Zm3038 0-137 336h278l-141-336Z"
      ></path>
    </svg>
  );
}

import { Affix, Center, SegmentedControl, Tooltip } from "@mantine/core";
import { useSpotlight } from "@mantine/spotlight";
import { IconBulb, IconCategory2, IconHome } from "@tabler/icons";
import { ScrollProp } from "../Header/Header";
import useStyles from "./NavBar.styles";
import { useRouter } from "next/router";
import { NAVBAR_BREAKPOINT } from "../Header";
import { useContext } from "react";
import { useUserState } from "context/UserStateContext";

// export interface NavBarProps {
//   props: string;
// }

export function NavBar({ scrollDir }: ScrollProp) {
  const { path, setPath } = useUserState();
  const router = useRouter();
  const spotlight = useSpotlight();
  const { classes } = useStyles({
    spotlightOpen: spotlight.opened,
    show: scrollDir === "up",
  });

  return (
    <Affix
      position={{ bottom: 32 }}
      sx={(theme) => ({
        width: `100vw`,
        display: "flex",
        justifyContent: "center",
        left: 0,

        [theme.fn.largerThan(1366)]: {
          left: -8,
        },
      })}
    >
      <SegmentedControl
        onChange={(value) => {
          setPath(value);
          router.push(value);
        }}
        value={path}
        radius="md"
        size="lg"
        data={[
          {
            value: "/",
            label: (
              <Center>
                <IconHome size={22} />
              </Center>
            ),
          },
          {
            value: "/projects",
            label: (
              <Center>
                <IconCategory2 size={22} />
              </Center>
            ),
          },
          {
            value: "/about",
            label: (
              <Center>
                <IconBulb size={22} />
              </Center>
            ),
          },
        ]}
        classNames={classes}
      />
    </Affix>
  );
}

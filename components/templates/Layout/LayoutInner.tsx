import React, { useContext } from "react";
import { NextRouter, useRouter } from "next/router";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider, ContextModalProps } from "@mantine/modals";
import { SpotlightProvider, SpotlightAction } from "@mantine/spotlight";
import { Text, Button } from "@mantine/core";
import {
  IconHome,
  IconFileText,
  IconSearch,
  IconCategory2,
  IconBulb,
} from "@tabler/icons";
import { Header } from "@components/organisms";

import useStyles from "./Layout.styles";
import { useWindowScroll } from "@mantine/hooks";
import {
  UserStateContext,
  UserStateContextInterface,
  UserStateProvider,
  useUserState,
} from "context/UserStateContext";

export interface LayoutProps {
  children: React.ReactNode;
}

// const demonstrationModal = ({
//   context,
//   id,
//   innerProps,
// }: ContextModalProps<{ modalBody: string }>) => (
//   <>
//     <Text size="sm">{innerProps.modalBody}</Text>
//     <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
//       Close modal
//     </Button>
//   </>
// );

// function getActions(data: ReturnType<typeof getDocsData>): SpotlightAction[] {
//   return data.reduce<SpotlightAction[]>((acc, part) => {
//     if (!part || !Array.isArray(part.groups)) {
//       return acc;
//     }

//     part.groups.forEach((group) => {
//       if (group && Array.isArray(group.pages)) {
//         acc.push(
//           ...group.pages.map((item) => ({
//             title: item.title,
//             description: item.search || item.description,
//             onTrigger: () => navigate(item.slug),
//           }))
//         );
//       }
//     });

//     part.uncategorized
//       .filter(
//         (page) =>
//           page.title.toLowerCase() !== "getting started" &&
//           !page.title.toLowerCase().includes("version")
//       )
//       .forEach((page) => {
//         acc.push({
//           title: page.title,
//           description: page.search || page.description,
//           onTrigger: () => navigate(page.slug),
//         });
//       });

//     return acc;
//   }, []);
// }

function getActions({
  router,
  setPath,
}: {
  router: NextRouter;
  setPath: (path: string) => void;
}): SpotlightAction[] {
  return [
    {
      title: "Home",
      description: "Get to know me at first glance! 😊",
      onTrigger: () => {
        setPath("/");
        router.push("/");
      },
      icon: <IconHome size={18} />,
    },
    {
      title: "Projects",
      description: "See the projects I've worked on 😎",
      onTrigger: () => {
        setPath("/projects");
        router.push("/projects");
      },
      icon: <IconCategory2 size={18} />,
    },
    {
      title: "About",
      description: "Know more about me, my story, and my accomplishments! 💎",
      onTrigger: () => {
        setPath("/about");
        router.push("/about");
      },
      icon: <IconBulb size={18} />,
    },
  ];
}

export function LayoutInner({ children }: LayoutProps) {
  const { classes, cx } = useStyles();
  const [scroll] = useWindowScroll();
  const router = useRouter();
  const { setPath } = useUserState();

  return (
    <SpotlightProvider
      actions={getActions({ router, setPath })}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search my portfolio"
      shortcut={["mod + K", "mod + P", "/"]}
      highlightQuery
      transition={{
        in: { transform: "translateY(0)", opacity: 1 },
        out: { transform: "translateY(-20px)", opacity: 0 },
        transitionProperty: "transform, opacity",
      }}
    >
      <div>
        <Header />

        <main className={classes.main}>
          <div className={classes.content}>
            <ModalsProvider
            // labels={{ confirm: "Confirm", cancel: "Cancel" }}
            // modals={{ demonstration: demonstrationModal }}
            >
              <NotificationsProvider>{children}</NotificationsProvider>
            </ModalsProvider>
          </div>
        </main>
      </div>
    </SpotlightProvider>
  );
}

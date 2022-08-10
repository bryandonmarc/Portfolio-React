import React from "react";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider, ContextModalProps } from "@mantine/modals";
import { SpotlightProvider, SpotlightAction } from "@mantine/spotlight";
import { Text, Button } from "@mantine/core";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons";
import { Header } from "@components/organisms";

import useStyles from "./Layout.styles";

export interface LayoutProps {
  children: React.ReactNode;
}

const demonstrationModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => (
  <>
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

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

function getActions(): SpotlightAction[] {
  return [
    {
      title: "Home",
      description: "Get to home page",
      onTrigger: () => console.log("Home"),
      icon: <IconHome size={18} />,
    },
    {
      title: "Dashboard",
      description: "Get full information about current system status",
      onTrigger: () => console.log("Dashboard"),
      icon: <IconDashboard size={18} />,
    },
    {
      title: "Documentation",
      description: "Visit documentation to lean more about all features",
      onTrigger: () => console.log("Documentation"),
      icon: <IconFileText size={18} />,
    },
  ];
}

export function LayoutInner({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <SpotlightProvider
      actions={getActions()}
      searchIcon={<IconSearch size={18} />}
      searchPlaceholder="Search documentation"
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
              labels={{ confirm: "Confirm", cancel: "Cancel" }}
              modals={{ demonstration: demonstrationModal }}
            >
              <NotificationsProvider>{children}</NotificationsProvider>
            </ModalsProvider>
          </div>
        </main>
      </div>
    </SpotlightProvider>
  );
}

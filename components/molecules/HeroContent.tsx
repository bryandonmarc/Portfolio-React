import { Anchor, List, ThemeIcon, Text } from "@mantine/core";
import { IconRocket, IconDeviceLaptop } from "@tabler/icons";
import { Icon } from "@iconify/react/dist/offline";
import Shopify from "@iconify-icons/logos/shopify";
import { meta } from "@components/templates/meta";

export function HeroContent() {
  return (
    <List mt={30} spacing="xs" size="md" center={true}>
      {meta.hero.content.map((listItem, index) => (
        <List.Item key={index} icon={listItem.icon}>
          <Text
            component="span"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              flexShrink: 0,
              alignItems: "center",
              lineHeight: 1,
            }}
          >
            <b>{listItem.heading}</b>&nbsp;–&nbsp;{listItem.description}
          </Text>
        </List.Item>
      ))}
    </List>
  );
}

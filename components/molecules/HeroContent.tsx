import { Anchor, List, ThemeIcon, Text } from "@mantine/core";
import { IconRocket, IconDeviceLaptop } from "@tabler/icons";
import { Icon } from "@iconify/react/dist/offline";
import Shopify from "@iconify-icons/logos/shopify";

export function HeroContent() {
  return (
    <List mt={30} spacing="xs" size="md" center={true}>
      <List.Item
        icon={
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="outline"
            sx={{ border: "none" }}
          >
            <IconRocket size="xl" stroke={1.5} />
          </ThemeIcon>
        }
      >
        <b>#OpenToWork</b> – Exploring career opportunities and growth projects.
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="outline"
            sx={{ border: "none" }}
          >
            <IconDeviceLaptop size="xl" stroke={1.5} />
          </ThemeIcon>
        }
      >
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
          <b>#Freelance</b>&nbsp;– Currently building custom&nbsp;
          <ThemeIcon
            size="lg"
            radius="xl"
            variant="outline"
            sx={(theme) => ({
              border: "none",
              [theme.fn.smallerThan("xs")]: {
                display: "none",
              },
            })}
          >
            <Icon style={{ fontSize: "24px" }} icon={Shopify} />
          </ThemeIcon>
          Shopify themes at&nbsp;
          <Anchor
            href="https://artologie.co/"
            target="_blank"
            sx={(theme) => ({
              textDecorationLine: "underline",
              textUnderlineOffset: 2,
              fontWeight: "bold",
              color: theme.colors.pink[3],
              "&:hover": {
                color: theme.colors.pink[4],
              },
            })}
          >
            Artologie
          </Anchor>
          .
        </Text>
      </List.Item>
    </List>
  );
}

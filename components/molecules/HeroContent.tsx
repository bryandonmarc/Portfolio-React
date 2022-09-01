import { List, Text, ThemeIcon } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

export interface HeroContentProps {
  contents: {
    Icon: TablerIcon;
    heading: string;
    description: React.ReactNode;
  }[];
}

export function HeroContent({ contents }: HeroContentProps) {
  return (
    <List mt={30} spacing="xs" size="md" center={true}>
      {contents.map((listItem, index) => (
        <List.Item
          key={index}
          icon={
            <ThemeIcon
              size="xl"
              radius="xl"
              variant="outline"
              sx={{ border: "none" }}
            >
              <listItem.Icon size={40} stroke={1.5} />
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
            <b>{listItem.heading}</b>
            <span>&nbsp;–&nbsp;</span>
            {listItem.description}
          </Text>
        </List.Item>
      ))}
    </List>
  );
}

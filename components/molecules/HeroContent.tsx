import { List, Text } from "@mantine/core";

export interface HeroContentProps {
  contents: {
    icon: React.ReactNode;
    heading: string;
    description: React.ReactNode;
  }[];
}

export function HeroContent({ contents }: HeroContentProps) {
  return (
    <List mt={30} spacing="xs" size="md" center={true}>
      {contents.map((listItem, index) => (
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

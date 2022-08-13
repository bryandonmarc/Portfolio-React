import {
  UnstyledButton,
  Text,
  MantineColor,
  MantineTheme,
} from "@mantine/core";
import useStyles from "./SkillCard.styles";

export interface SkillCardProps {
  title: string;
  icon: (theme: MantineTheme, color: MantineColor) => React.ReactNode;
  color: MantineColor;
}

export function SkillCard({ title, icon, color }: SkillCardProps) {
  const { classes, theme } = useStyles();

  return (
    <UnstyledButton className={classes.item}>
      {icon(theme, color)}
      <Text size="xs" mt={7}>
        {title}
      </Text>
    </UnstyledButton>
  );
}

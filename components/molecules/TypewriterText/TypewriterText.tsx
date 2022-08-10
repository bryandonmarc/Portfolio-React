import { Text } from "@mantine/core";
import { useCallback, useEffect, useRef, useState } from "react";
import useStyles from "./TypewriterText.styles";

interface TextProps {
  text: string;
  speed?: number;
}

export function TypewriterText({ text, speed = 100 }: TextProps) {
  const { classes } = useStyles();
  const [type, setType] = useState("");
  const i = useRef(0);

  const typeWriter = useCallback(() => {
    if (i.current < text.length) {
      setType(text.slice(0, i.current + 1));
      i.current += 1;
      setTimeout(typeWriter, speed);
    }
  }, [i, speed, text, setType]);

  useEffect(() => {
    setTimeout(typeWriter, 1000);
  }, [typeWriter]);

  return (
    <Text component="span" className={classes.typewriter}>
      {type}
    </Text>
  );
}

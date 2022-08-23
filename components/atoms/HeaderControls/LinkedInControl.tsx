import React from "react";
import { HeaderControl, LinkedInIcon } from "@components/atoms";
import { meta } from "./meta";

export function LinkedInControl() {
  return (
    <HeaderControl
      tooltip="LinkedIn Profile"
      component="a"
      target="_blank"
      href={meta.linkedInLink}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: meta.linkedInColor,
        borderColor: meta.linkedInColor,

        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(meta.linkedInColor, 0.1),
        }),
      })}
    >
      <LinkedInIcon size={22} />
    </HeaderControl>
  );
}

import React from "react";
import { HeaderControl, KofiIcon } from "@components/atoms";
import { meta } from "./meta";

export function KofiControl() {
  return (
    <HeaderControl
      tooltip="Buy me a coffee!"
      component="a"
      href={meta.kofiLink}
      target="_blank"
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: meta.kofiColor,
        borderColor: meta.kofiColor,

        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(meta.kofiColor, 0.1),
        }),
      })}
    >
      <KofiIcon size={22} />
    </HeaderControl>
  );
}

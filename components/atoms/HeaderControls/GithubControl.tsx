import React from "react";
import { HeaderControl, GithubIcon } from "@components/atoms";
import { meta } from "./meta";

export function GithubControl() {
  return (
    <HeaderControl
      tooltip="GitHub Profile"
      component="a"
      href={meta.githubLink}
    >
      <GithubIcon size={22} />
    </HeaderControl>
  );
}

import { Box } from "@mantine/core";
import React, { forwardRef } from "react";
import { SkillCardProps } from "./SkillCard";

export const Item = forwardRef<HTMLDivElement, SkillCardProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <Box {...props} style={style} ref={ref}>
        {children}
      </Box>
    );
  }
);
Item.displayName = "Item";

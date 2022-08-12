import { motion } from "framer-motion";
import React, { Children, ReactNode } from "react";

interface TransitionProps {
  children: ReactNode;
  step?: number;
  delay?: number[];
}

export function StaggeredTransition({
  children,
  step = 0.2,
  delay,
}: TransitionProps) {
  return (
    <>
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            delay: ((delay ? delay[i] : 0) * step + i * step) / 2,
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}

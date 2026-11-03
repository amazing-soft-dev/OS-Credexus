import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DURATION = 0.4;
const STAGGER = 0.35;

export const RollingText = memo(function RollingText({
  text,
  active,
}: {
  text: string;
  active: boolean;
}) {
  const reduced = useReducedMotion();
  const chars = Array.from(text);
  const hovering = active && !reduced;

  return (
    <span className="inline-flex overflow-hidden">
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="block"
          style={{ textShadow: "0 1.2em 0 currentColor" }}
          initial={false}
          animate={{ y: hovering ? "-1.2em" : "0em" }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  type: "spring",
                  duration: DURATION,
                  bounce: 0,
                  delay: hovering
                    ? (DURATION / chars.length) * index * STAGGER
                    : 0,
                }
          }
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
});

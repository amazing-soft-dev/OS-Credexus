import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ScrollMask({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const stop = useTransform(scrollYProgress, [0.15, 0.65], [-10, 140], {
    clamp: true,
  });
  const lead = useTransform(stop, (value) => value - 40);
  const maskImage = useMotionTemplate`linear-gradient(115deg, rgba(0,0,0,1) ${lead}%, rgba(0,0,0,0.12) ${stop}%)`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              maskImage,
              WebkitMaskImage: maskImage,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }
      }
    >
      {children}
    </motion.div>
  );
}

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function CountUp({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    const node = numberRef.current;
    if (!node || !inView) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      const eased = 1 - (1 - progress) ** 3;
      node.textContent = `${Math.round(value * eased)}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    node.textContent = `0${suffix}`;
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, suffix, value]);

  return (
    <div>
      <p
        ref={ref}
        className="font-display text-6xl tracking-tight text-foreground md:text-7xl"
      >
        <span ref={numberRef}>
          {value}
          {suffix}
        </span>
      </p>
      <p className="mt-3 max-w-xs text-muted">{label}</p>
    </div>
  );
}

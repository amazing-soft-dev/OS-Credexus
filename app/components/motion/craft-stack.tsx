import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import {
  motion,
  motionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Photo } from "~/components/photo";
import { ScrollMask } from "~/components/motion/scroll-mask";
import { disciplines, type Discipline } from "~/content/site";

const cardHeight = "md:h-[min(42rem,calc(100svh-8rem))]";
const stackSlots = 4;
const splitSpring = { type: "spring" as const, stiffness: 400, damping: 60, mass: 1 };

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 48rem)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return desktop;
}

function useBrokenCards(desktop: boolean, reduced: boolean | null) {
  const nodes = useRef<(HTMLDivElement | null)[]>(disciplines.map(() => null));
  const cover = useMemo(() => disciplines.map(() => motionValue(0)), []);
  const [broken, setBroken] = useState<boolean[]>(() => disciplines.map(() => false));

  useEffect(() => {
    if (!desktop || reduced === true) {
      setBroken(disciplines.map(() => false));
      cover.forEach((value) => value.set(0));
      return;
    }

    let frame = 0;
    const update = () => {
      const pin = nodes.current[0]
        ? Number.parseFloat(getComputedStyle(nodes.current[0]).top) || 80
        : 80;
      const next = disciplines.map((_, index) => {
        const node = nodes.current[index + 1];
        if (!node) {
          cover[index].set(0);
          return false;
        }
        const { top, bottom } = node.getBoundingClientRect();
        const start = pin + 160;
        cover[index].set(Math.min(1, Math.max(0, (start - top) / (start - pin))));
        return top < window.innerHeight && bottom > 0;
      });
      setBroken((current) =>
        current.length === next.length && current.every((value, index) => value === next[index])
          ? current
          : next,
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cover, desktop, reduced]);

  return { nodes, broken, cover };
}

function CraftCard({
  item,
  index,
  broken,
  cover,
  desktop,
  reduced,
  cardRef,
}: {
  item: Discipline;
  index: number;
  broken: boolean;
  cover: MotionValue<number>;
  desktop: boolean;
  reduced: boolean | null;
  cardRef: (node: HTMLDivElement | null) => void;
}) {
  const open = desktop && reduced !== true && broken;
  const shade = useTransform(cover, [0, 1], [0, 0.28]);

  return (
    <div
      ref={cardRef}
      className={`craft-stack-card ${cardHeight}`}
      style={{
        top: `calc(5rem + ${Math.min(index, stackSlots - 1)} * 1.25rem)`,
        zIndex: index + 1,
      }}
    >
      <Link
        to={`/disciplines/${item.slug}`}
        className="craft-stack-row relative flex h-full flex-col gap-6 overflow-hidden shadow-[0_24px_50px_-28px_rgba(0,0,0,0.85)] md:flex-row md:gap-0"
      >
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-10 border border-white/10 bg-[#0d0d0d] p-6 md:p-10">
          <div>
            <ScrollMask>
              <h3 className="font-display text-4xl leading-[0.95] font-medium tracking-tight uppercase md:text-5xl">
                {item.name}
              </h3>
            </ScrollMask>
            <ScrollMask className="mt-4 max-w-sm">
              <p className="text-sm leading-relaxed text-background/60">{item.summary}</p>
            </ScrollMask>
          </div>
          <div className="flex items-start gap-6">
            <p className="font-display text-sm text-background/60">({item.number})</p>
            <ul className="grid gap-2 text-sm leading-relaxed text-background/60">
              {item.looksLike.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div
          className="min-w-0 flex-1 border border-white/10 bg-[#0d0d0d] p-6 md:border-l-0 md:p-10"
          initial={false}
          animate={{ marginLeft: open ? 40 : 0 }}
          transition={splitSpring}
        >
          <Photo
            src={item.image}
            alt={item.alt}
            frameClassName="md:h-full"
            className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full"
          />
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black"
          style={{ opacity: shade }}
        />
      </Link>
    </div>
  );
}

export function CraftStack() {
  const reduced = useReducedMotion();
  const desktop = useIsDesktop();
  const { nodes, broken, cover } = useBrokenCards(desktop, reduced);

  return (
    <div className="mt-14 flex flex-col gap-10">
      {disciplines.map((item, index) => (
        <CraftCard
          key={item.slug}
          item={item}
          index={index}
          broken={broken[index] ?? false}
          cover={cover[index]}
          desktop={desktop}
          reduced={reduced}
          cardRef={(node) => {
            nodes.current[index] = node;
          }}
        />
      ))}
    </div>
  );
}

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Discipline } from "~/content/site";
import { Photo } from "~/components/photo";

const cardSpring = { type: "spring" as const, stiffness: 400, damping: 60, mass: 1 };
const restScale = 1.3;
const hoverScale = restScale * 1.05;

export function DisciplineCard({ item }: { item: Discipline }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      to={`/disciplines/${item.slug}`}
      className="relative isolate block h-[300px] overflow-hidden rounded-[4px] text-white no-underline md:h-[450px] lg:h-[600px]"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <motion.div
        className="discipline-card-photo absolute inset-0 origin-center"
        initial={false}
        animate={{ scale: active ? hoverScale : restScale }}
        transition={cardSpring}
      >
        <Photo
          src={item.image}
          alt={item.alt}
          frameClassName="h-full w-full"
          className="h-full w-full object-cover blur-3xl"
        />
      </motion.div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/20" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
        <h2 className="font-display text-3xl font-medium tracking-tight uppercase">
          {item.name}
        </h2>
        <p className="mt-2 flex items-center gap-3 text-sm text-white/70">
          <span>Discipline</span>
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-white" />
          <span>{item.number}</span>
        </p>
        <motion.div
          className="discipline-card-summary overflow-hidden"
          initial={false}
          animate={{ height: active ? "auto" : 0 }}
          transition={cardSpring}
        >
          <p className="max-w-[80%] pt-6 text-sm leading-relaxed text-white/80">
            {item.summary}
          </p>
        </motion.div>
      </div>
      <motion.span
        aria-hidden
        className="discipline-card-arrow absolute right-8 bottom-8 z-10 flex size-10 items-center justify-center rounded-full bg-white text-black"
        initial={false}
        animate={{ scale: active ? 1 : 0 }}
        transition={cardSpring}
      >
        <ArrowUpRight className="size-5" strokeWidth={1.5} />
      </motion.span>
    </Link>
  );
}

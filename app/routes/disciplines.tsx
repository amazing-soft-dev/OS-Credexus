import { Link } from "react-router";
import type { Route } from "./+types/disciplines";
import { disciplines } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Photo } from "~/components/photo";
import { pageMeta } from "~/lib/seo";
import { cn } from "~/lib/utils";

const layoutClass = {
  portrait: "",
  square: "",
  wide: "md:col-span-2",
  landscape: "",
} as const;

const imageClass = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-video",
  landscape: "aspect-[4/3]",
} as const;

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Disciplines",
    description:
      "Fifteen separate searches, from product engineering to DevOps, data science, embedded systems, games, blockchain, and ERP. Not one generic profile.",
    path: "/disciplines",
  });
}

export default function Disciplines() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <Eyebrow>Disciplines</Eyebrow>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] font-medium tracking-tight uppercase md:text-7xl">
        A selection of the work we hire for.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Fifteen disciplines. General software engineering beside the specialties
        that do not survive being renamed &quot;full stack.&quot;
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {disciplines.map((item) => (
          <Link
            key={item.slug}
            to={`/disciplines/${item.slug}`}
            className={cn("group block", layoutClass[item.layout])}
          >
            <article className="h-full overflow-hidden border border-line bg-card">
              <Photo
                src={item.image}
                alt={item.alt}
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                  imageClass[item.layout],
                )}
              />
              <div className="p-5">
                <p className="font-display text-[10px] tracking-[0.22em] text-muted">
                  {item.number}
                </p>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">{item.name}</h2>
                <p className="mt-2 text-sm text-muted">{item.summary}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

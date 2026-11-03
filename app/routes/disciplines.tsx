import type { Route } from "./+types/disciplines";
import { disciplines } from "~/content/site";
import { DisciplineCard } from "~/components/discipline-card";
import { Eyebrow } from "~/components/eyebrow";
import { pageMeta } from "~/lib/seo";

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
          <DisciplineCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

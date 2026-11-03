import type { Route } from "./+types/disciplines";
import { disciplines, type Discipline } from "~/content/site";
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

function Plate({ item }: { item: Discipline }) {
  return (
    <div className="md:h-[420px] lg:h-[520px]">
      <DisciplineCard item={item} />
    </div>
  );
}

function Stack({ items }: { items: Discipline[] }) {
  const rows = items.length === 2 ? "md:grid-rows-2" : "md:grid-rows-3";

  return (
    <div className={`grid h-full min-h-0 gap-4 ${rows}`}>
      {items.map((item) => (
        <DisciplineCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

function Split({
  left,
  right,
}: {
  left: Discipline[];
  right: Discipline[];
}) {
  return (
    <div className="grid gap-4 md:h-[720px] md:grid-cols-2 lg:h-[840px]">
      <Stack items={left} />
      <Stack items={right} />
    </div>
  );
}

function Trio({ items }: { items: Discipline[] }) {
  return (
    <div className="grid gap-4 md:h-[420px] md:grid-cols-3 lg:h-[520px]">
      {items.map((item) => (
        <DisciplineCard key={item.slug} item={item} />
      ))}
    </div>
  );
}

export default function Disciplines() {
  const [
    frontend,
    backend,
    fullstack,
    mobile,
    data,
    ai,
    salesforce,
    gis,
    devops,
    cloud,
    dataScience,
    embedded,
    games,
    blockchain,
    erp,
  ] = disciplines;

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
      <div className="mt-12 flex flex-col gap-4">
        <Plate item={frontend} />
        <Split
          left={[backend, fullstack]}
          right={[mobile, data, ai]}
        />
        <Split
          left={[salesforce, gis, devops]}
          right={[cloud, dataScience]}
        />
        <Plate item={embedded} />
        <Trio items={[games, blockchain, erp]} />
      </div>
    </section>
  );
}

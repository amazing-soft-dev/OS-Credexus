import { Link } from "react-router";
import type { Route } from "./+types/notes";
import { notes } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { ShineCard } from "~/components/visual/shine-card";
import { pageMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Notes",
    description:
      "Notes on hiring across regions, writing a role brief, and why specialist searches stay separate.",
    path: "/notes",
  });
}

export default function Notes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Eyebrow>Notes</Eyebrow>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-none tracking-tight md:text-7xl">
        Notes from the desk.
      </h1>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <Link key={note.slug} to={`/notes/${note.slug}`} className="group block">
            <ShineCard className="h-full border border-line bg-card/80">
              <img
                src={note.image}
                alt={note.alt}
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="p-5">
                <h2 className="font-display text-2xl tracking-tight">{note.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{note.dek}</p>
              </div>
            </ShineCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

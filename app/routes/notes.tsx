import { Link } from "react-router";
import type { Route } from "./+types/notes";
import { notes } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Photo } from "~/components/photo";
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
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <Eyebrow>Notes</Eyebrow>
      <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.95] font-medium tracking-tight uppercase md:text-7xl">
        Notes from the desk.
      </h1>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note.slug}
            to={`/notes/${note.slug}`}
            className="group block [content-visibility:auto] [contain-intrinsic-size:auto_22rem]"
          >
            <article className="relative h-full overflow-hidden border border-line bg-card">
              <Photo
                skeleton="card"
                src={note.image}
                alt={note.alt}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="p-5">
                <h2 className="font-display text-2xl font-medium tracking-tight">{note.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{note.dek}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

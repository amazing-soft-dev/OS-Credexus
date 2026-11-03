import type { Route } from "./+types/note";
import { getNote } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Photo } from "~/components/photo";
import { pageMeta } from "~/lib/seo";

export function loader({ params }: Route.LoaderArgs) {
  const note = getNote(params.slug);
  if (!note) {
    throw new Response("Not found", { status: 404 });
  }
  return { note };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return pageMeta({
      title: "Note",
      description: "This note is not on the Credexus desk.",
      path: "/notes",
    });
  }
  return pageMeta({
    title: data.note.title,
    description: data.note.dek,
    path: `/notes/${data.note.slug}`,
    image: data.note.image,
  });
}

export default function NotePage({ loaderData }: Route.ComponentProps) {
  const { note } = loaderData;

  return (
    <article>
      <Photo
        priority
        src={note.image}
        alt={note.alt}
        sizes="100vw"
        className="aspect-[16/7] w-full object-cover"
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Eyebrow>Notes</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
          {note.title}
        </h1>
        <p className="mt-6 text-lg text-muted">{note.dek}</p>
        <div className="mt-10 grid gap-6 text-lg leading-relaxed">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

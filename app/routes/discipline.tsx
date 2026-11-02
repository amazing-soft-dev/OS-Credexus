import { Link } from "react-router";
import type { Route } from "./+types/discipline";
import { getDiscipline } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Photo } from "~/components/photo";
import { Button } from "~/components/ui/button";
import { pageMeta } from "~/lib/seo";

export function loader({ params }: Route.LoaderArgs) {
  const discipline = getDiscipline(params.slug);
  if (!discipline) {
    throw new Response("Not found", { status: 404 });
  }
  return { discipline };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return pageMeta({
      title: "Discipline",
      description: "This discipline is not on the Credexus list.",
      path: "/disciplines",
    });
  }
  return pageMeta({
    title: data.discipline.name,
    description: data.discipline.summary,
    path: `/disciplines/${data.discipline.slug}`,
    image: data.discipline.image,
  });
}

export default function Discipline({ loaderData }: Route.ComponentProps) {
  const { discipline } = loaderData;

  return (
    <article>
      <Photo
        src={discipline.image}
        alt={discipline.alt}
        className="aspect-[16/8] w-full object-cover"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <Eyebrow>{`Discipline ${discipline.number}`}</Eyebrow>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight uppercase md:text-7xl">
          {discipline.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {discipline.intro}
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl tracking-tight">What a strong introduction looks like</h2>
            <ul className="mt-6 grid gap-4">
              {discipline.looksLike.map((item) => (
                <li key={item} className="border-t border-line pt-4 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl tracking-tight">What companies usually ask</h2>
            <p className="mt-6 leading-relaxed text-muted">{discipline.companiesAsk}</p>
            <div className="mt-8">
              <Button asChild>
                <Link to={`/contact?discipline=${discipline.slug}`}>
                  Hire {discipline.name}
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

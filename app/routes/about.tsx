import { Link } from "react-router";
import type { Route } from "./+types/about";
import { company, regions, steps, team } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Photo } from "~/components/photo";
import { Reveal } from "~/components/motion/reveal";
import { Button } from "~/components/ui/button";
import { pageMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "About",
    description:
      "How Credexus introduces engineers, which regions we hire from, and the people who make the introductions.",
    path: "/about",
  });
}

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-8">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-tight uppercase md:text-7xl">
          We introduce engineers. We do not invent them.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {company.lede} The people you meet are practicing engineers. The
          portraits on this page are the Credexus team who make those
          introductions.
        </p>
      </section>

      <Reveal>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <Eyebrow>Introductions</Eyebrow>
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight uppercase">
              How an introduction works
            </h2>
            <ol className="mt-8 grid gap-8">
              {steps.map((step) => (
                <li key={step.number} className="border-t border-line pt-6">
                  <p className="font-display text-xs tracking-[0.22em] text-muted">
                    {step.number}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <Eyebrow>Regions</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight uppercase">
            Where the engineers are
          </h2>
          <div className="mt-10 grid gap-8">
            {regions.map((region) => (
              <article
                key={region.slug}
                className="grid items-center gap-6 border-t border-line pt-8 md:grid-cols-[280px_1fr]"
              >
                <Photo
                  src={region.image}
                  alt={region.alt}
                  sizes="(min-width: 768px) 280px, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div>
                  <h3 className="font-display text-3xl font-medium tracking-tight">
                    {region.name}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">
                    {region.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight uppercase md:text-6xl">
            The people you will work with
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The Credexus team who run the introductions. They are not a roster
            of engineers for hire.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
            {team.map((person) => (
              <li key={person.name}>
                <div className="aspect-[4/5] overflow-hidden bg-card">
                  <Photo
                    src={person.image}
                    alt={person.alt}
                    sizes="(min-width: 768px) 30vw, 50vw"
                    frameClassName="h-full w-full"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
                <p className="mt-4 font-display text-xl font-medium tracking-tight">
                  {person.name}
                </p>
                <p className="mt-1 text-sm text-muted">[{person.role}]</p>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <Eyebrow>Limits</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight uppercase">
          What we don&apos;t do
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "We don't publish a roster of invented engineers.",
            "We don't dress a logo wall up as a client list.",
            "We don't put a price on a relationship before we know the role.",
          ].map((item) => (
            <li key={item} className="border border-line bg-card p-6 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button asChild>
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

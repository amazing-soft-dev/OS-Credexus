import { Link } from "react-router";
import type { Route } from "./+types/about";
import { company, regions, steps } from "~/content/site";
import { Eyebrow } from "~/components/eyebrow";
import { Reveal } from "~/components/motion/reveal";
import { Button } from "~/components/ui/button";
import { pageMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "About",
    description:
      "How Credexus introduces engineers, which regions we hire from, and what we refuse to pretend.",
    path: "/about",
  });
}

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-none tracking-tight md:text-7xl">
          WE INTRODUCE ENGINEERS. WE DO NOT INVENT THEM.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          {company.lede} The people you meet are practicing engineers. They are
          not a bench of stock portraits with job titles underneath.
        </p>
      </section>

      <Reveal>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <Eyebrow>Introductions</Eyebrow>
          <div>
            <h2 className="font-display text-4xl tracking-tight">
              How an introduction works
            </h2>
            <ol className="mt-8 grid gap-8">
              {steps.map((step) => (
                <li key={step.number} className="border-t border-line pt-6">
                  <p className="font-display text-xs tracking-[0.22em] text-muted">
                    {step.number}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <Eyebrow>Regions</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight">
            Where the engineers are
          </h2>
          <div className="mt-10 grid gap-8">
            {regions.map((region) => (
              <article
                key={region.slug}
                className="grid items-center gap-6 border-t border-line pt-8 md:grid-cols-[220px_1fr]"
              >
                <img
                  src={region.image}
                  alt={region.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div>
                  <h3 className="font-display text-3xl tracking-tight">{region.name}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted">
                    {region.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Eyebrow>Limits</Eyebrow>
        <h2 className="mt-4 font-display text-4xl tracking-tight">What we don&apos;t do</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "We don't publish a roster of invented engineers.",
            "We don't dress a logo wall up as a client list.",
            "We don't put a price on a relationship before we know the role.",
          ].map((item) => (
            <li key={item} className="border border-line bg-card/70 p-6 leading-relaxed">
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

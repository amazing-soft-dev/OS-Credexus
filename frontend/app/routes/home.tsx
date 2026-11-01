import { Link } from "react-router";
import type { Route } from "./+types/home";
import { company, disciplines, engagements, notes, regions, steps } from "~/content/site";
import { ContactForm } from "~/components/contact-form";
import { Eyebrow } from "~/components/eyebrow";
import { FaqList } from "~/components/faq-list";
import { Reveal } from "~/components/motion/reveal";
import { ShineCard } from "~/components/visual/shine-card";
import { CountUp } from "~/components/visual/count-up";
import { pageMeta } from "~/lib/seo";
import { cn } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Credexus",
    description: company.lede,
    path: "/",
  });
}

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

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <Eyebrow>Credexus</Eyebrow>
        <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
          CREDEXUS
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {company.lede}
        </p>
      </section>

      <img
        src="/images/hero.webp"
        alt="A dark studio with a closed laptop and thin rays of cyan light."
        width={1600}
        height={900}
        className="aspect-video w-full object-cover"
      />

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Regions</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight md:text-5xl">
            Four regions. One standard.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {regions.map((region) => (
              <ShineCard key={region.slug} className="border border-line bg-card/80">
                <img
                  src={region.image}
                  alt={region.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display text-2xl tracking-tight">
                    {region.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {region.summary}
                  </p>
                </div>
              </ShineCard>
            ))}
          </div>
        </section>
      </Reveal>

      <img
        src="/images/abstract-rays.webp"
        alt=""
        className="h-40 w-full object-cover md:h-56"
      />

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Disciplines</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight md:text-5xl">
                The crafts we introduce
              </h2>
            </div>
            <Link to="/disciplines" className="text-sm text-muted hover:text-foreground">
              All disciplines
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {disciplines.map((item) => (
              <Link
                key={item.slug}
                to={`/disciplines/${item.slug}`}
                className={cn("group block", layoutClass[item.layout])}
              >
                <ShineCard className="h-full border border-line bg-card/80">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={cn(
                      "w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                      imageClass[item.layout],
                    )}
                  />
                  <div className="flex items-baseline justify-between gap-4 p-5">
                    <div>
                      <p className="font-display text-[10px] tracking-[0.22em] text-muted">
                        {item.number}
                      </p>
                      <h3 className="mt-1 font-display text-2xl tracking-tight">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{item.summary}</p>
                    </div>
                  </div>
                </ShineCard>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-8">
          <Eyebrow>Introductions</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            How an introduction works
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-line pt-6">
                <p className="font-display text-xs tracking-[0.22em] text-muted">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Engagements</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl tracking-tight md:text-5xl">
            Three ways to work with us
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {engagements.map((item) => (
              <ShineCard key={item.title} className="border border-line bg-card/80 p-6">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point} className="border-t border-line pt-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </ShineCard>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <CountUp value={4} label="Regions we hire from" />
          <CountUp value={8} label="Disciplines we introduce" />
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Notes</Eyebrow>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                Notes from the desk
              </h2>
            </div>
            <Link to="/notes" className="text-sm text-muted hover:text-foreground">
              All notes
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {notes.map((note) => (
              <Link key={note.slug} to={`/notes/${note.slug}`} className="group block">
                <ShineCard className="h-full border border-line bg-card/80">
                  <img
                    src={note.image}
                    alt={note.alt}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl tracking-tight">{note.title}</h3>
                    <p className="mt-2 text-sm text-muted">{note.dek}</p>
                  </div>
                </ShineCard>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <img
        src="/images/abstract-rays.webp"
        alt=""
        className="h-40 w-full object-cover md:h-56"
      />

      <section className="mx-auto max-w-6xl px-6 py-24" id="contact">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
          Let&apos;s start a conversation
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Tell us the role. If the form is quiet, write to{" "}
          <a className="text-foreground underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
        <div className="mt-10 max-w-3xl">
          <ContactForm />
        </div>
      </section>

      <FaqList />
    </>
  );
}

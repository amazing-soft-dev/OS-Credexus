import { Link } from "react-router";
import type { Route } from "./+types/home";
import { company, disciplines, engagements, hero, notes, regions, steps } from "~/content/site";
import { ContactForm } from "~/components/contact-form";
import { Eyebrow } from "~/components/eyebrow";
import { Logo } from "~/components/logo";
import { Photo } from "~/components/photo";
import { FaqList } from "~/components/faq-list";
import { CraftStack } from "~/components/motion/craft-stack";
import { Reveal } from "~/components/motion/reveal";
import { CountUp } from "~/components/visual/count-up";
import { Button } from "~/components/ui/button";
import { pageMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Credexus",
    description: company.lede,
    path: "/",
    image: hero.image,
  });
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden bg-[#c4a574]">
        <Photo
          priority
          src={hero.image}
          alt={hero.alt}
          frameClassName="absolute inset-0 h-full w-full"
          className="h-full w-full object-cover object-[68%_center]"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background via-background/85 to-transparent md:w-[68%]" />
        <div className="relative z-10 flex min-h-[92vh] flex-col justify-end px-6 pt-28 pb-12 md:w-[54%] md:px-10 md:pb-16">
          <Logo size="md" />
          <h1 className="mt-6 font-display text-5xl leading-[0.9] font-medium tracking-tight text-foreground uppercase md:text-7xl lg:text-8xl">
            Engineers, introduced with intent
            <span className="text-accent">*</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground md:text-base">
            {company.lede}
          </p>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div className="flex items-center gap-3">
            <Logo />
            <Eyebrow>Who we are</Eyebrow>
          </div>
          <div>
            <h2 className="font-display text-4xl leading-[0.95] font-medium tracking-tight uppercase md:text-6xl">
              We introduce engineers. We do not invent them.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {company.lede} The people you meet are practicing engineers. The
              portraits on the about page are the Credexus team who make those
              introductions.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/about">Know more about us</Link>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="bg-black text-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow className="text-background/55">Disciplines</Eyebrow>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-[0.95] font-medium tracking-tight uppercase md:text-6xl">
                The crafts we introduce
              </h2>
            </div>
            <Link
              to="/disciplines"
              className="text-sm text-background/70 hover:text-background"
            >
              All disciplines
            </Link>
          </div>
          <CraftStack />
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Eyebrow>Regions</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight uppercase md:text-6xl">
            Four regions. One standard.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {regions.map((region) => (
              <article key={region.slug} className="relative overflow-hidden">
                <Photo
                  src={region.image}
                  alt={region.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-6 text-white">
                  <h3 className="font-display text-2xl font-medium tracking-tight uppercase">
                    {region.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                    {region.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-8 md:px-8">
          <Eyebrow>Introductions</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight uppercase md:text-5xl">
            How an introduction works
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-line pt-6">
                <p className="font-display text-xs tracking-[0.22em] text-muted">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Eyebrow>Engagements</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-tight uppercase md:text-5xl">
            Three ways to work with us
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {engagements.map((item) => (
              <article key={item.title} className="border border-line bg-card p-6">
                <h3 className="font-display text-2xl font-medium tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.summary}</p>
                <ul className="mt-6 grid gap-3 text-sm leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point} className="border-t border-line pt-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-8">
          <CountUp value={4} label="Regions we hire from" />
          <CountUp value={disciplines.length} label="Disciplines we introduce" />
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Notes</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight uppercase md:text-5xl">
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
                <article className="h-full overflow-hidden border border-line bg-card">
                  <Photo
                    src={note.image}
                    alt={note.alt}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-medium tracking-tight">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{note.dek}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8" id="contact">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-4 font-display text-4xl font-medium tracking-tight uppercase md:text-5xl">
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

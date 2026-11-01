import { data } from "react-router";
import type { Route } from "./+types/contact";
import { company, disciplineSlugs } from "~/content/site";
import { ContactForm } from "~/components/contact-form";
import { Eyebrow } from "~/components/eyebrow";
import {
  contactFieldErrors,
  contactSchema,
  type ContactActionData,
} from "~/lib/contact-schema";
import { pageMeta } from "~/lib/seo";

export function loader({ request }: Route.LoaderArgs) {
  const discipline = new URL(request.url).searchParams.get("discipline") ?? "";
  const allowed = disciplineSlugs.find((slug) => slug === discipline) ?? "";
  return { discipline: allowed };
}

export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const marketing = form.get("marketing");
  const parsed = contactSchema.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    company: form.get("company"),
    discipline: form.get("discipline"),
    region: form.get("region"),
    message: form.get("message"),
    ...(marketing === "on" ? { marketing: "on" } : {}),
  });

  if (!parsed.success) {
    return data<ContactActionData>(
      {
        ok: false,
        fieldErrors: contactFieldErrors(parsed.error),
        formError: null,
      },
      { status: 400 },
    );
  }

  const { sendLead } = await import("~/lib/send-lead.server");
  const sent = await sendLead(parsed.data);
  if (!sent.ok) {
    return data<ContactActionData>(
      { ok: false, fieldErrors: {}, formError: sent.formError },
      { status: 503 },
    );
  }

  return data<ContactActionData>({
    ok: true,
    fieldErrors: {},
    formError: null,
  });
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Contact",
    description: `Tell Credexus the role you need to hire. You can also write to ${company.email}.`,
    path: "/contact",
  });
}

export default function Contact({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl">
          CONNECT WITH US.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Tell us the role. Or write directly to{" "}
          <a className="text-foreground underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          .
        </p>
        <div className="mt-12 max-w-3xl">
          <ContactForm
            key={loaderData.discipline}
            defaultDiscipline={loaderData.discipline}
          />
        </div>
      </section>
    </>
  );
}

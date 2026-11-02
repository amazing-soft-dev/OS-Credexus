import { Resend } from "resend";
import type { ContactInput } from "~/lib/contact-schema";
import { company, disciplines, hiringRegions } from "~/content/site";

export async function sendLead(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_TO_EMAIL || company.email;

  if (!apiKey || !from) {
    return {
      ok: false as const,
      formError: `The form is not configured yet. Email ${company.email} and we will reply from there.`,
    };
  }

  const discipline =
    disciplines.find((item) => item.slug === input.discipline)?.name ??
    input.discipline;
  const region =
    hiringRegions.find((item) => item.value === input.region)?.label ??
    input.region;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: input.email,
    subject: `Introduction request from ${input.company}`,
    text: [
      `Name: ${input.name}`,
      `Email: ${input.email}`,
      `Company: ${input.company}`,
      `Discipline: ${discipline}`,
      `Region: ${region}`,
      `Marketing emails: ${input.marketing === "on" ? "yes" : "no"}`,
      "",
      input.message,
    ].join("\n"),
  });

  if (error) {
    return {
      ok: false as const,
      formError: `We could not send that. Email ${company.email} instead.`,
    };
  }

  return { ok: true as const, formError: null };
}

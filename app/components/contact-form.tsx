import { useState, type ReactNode } from "react";
import { useFetcher } from "react-router";
import { company, disciplines, hiringRegions } from "~/content/site";
import type { ContactActionData } from "~/lib/contact-schema";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

export function ContactForm({
  defaultDiscipline = "",
}: {
  defaultDiscipline?: string;
}) {
  const fetcher = useFetcher<ContactActionData>();
  const [discipline, setDiscipline] = useState(defaultDiscipline);
  const [region, setRegion] = useState("");
  const [marketing, setMarketing] = useState(false);
  const busy = fetcher.state !== "idle";
  const result = fetcher.data;
  const errors = result && !result.ok ? result.fieldErrors : {};

  if (result?.ok) {
    return (
      <p role="status" className="max-w-xl text-lg leading-relaxed text-foreground">
        Received. We will reply to you at the email you gave us, from{" "}
        {company.email}.
      </p>
    );
  }

  return (
    <fetcher.Form method="post" action="/contact" className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Work email" name="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>
      <Field label="Company" name="company" error={errors.company}>
        <Input id="company" name="company" autoComplete="organization" required />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Discipline" name="discipline" error={errors.discipline}>
          <input type="hidden" name="discipline" value={discipline} />
          <Select
            value={discipline || undefined}
            onValueChange={setDiscipline}
          >
            <SelectTrigger id="discipline" aria-label="Discipline">
              <SelectValue placeholder="What you need to hire" />
            </SelectTrigger>
            <SelectContent>
              {disciplines.map((item) => (
                <SelectItem key={item.slug} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Region" name="region" error={errors.region}>
          <input type="hidden" name="region" value={region} />
          <Select value={region || undefined} onValueChange={setRegion}>
            <SelectTrigger id="region" aria-label="Region">
              <SelectValue placeholder="Where should we look" />
            </SelectTrigger>
            <SelectContent>
              {hiringRegions.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
      <Field label="What you need to hire" name="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="The role, the stack, and the hours that need to overlap."
        />
      </Field>
      <div className="flex items-start gap-3">
        <Checkbox
          id="marketing"
          checked={marketing}
          onCheckedChange={(checked) => setMarketing(checked === true)}
        />
        {marketing ? <input type="hidden" name="marketing" value="on" /> : null}
        <Label htmlFor="marketing" className="leading-snug">
          I agree to receive occasional notes from Credexus. This is optional.
        </Label>
      </div>
      {result?.formError ? (
        <p role="alert" className="text-sm text-accent">
          {result.formError}
        </p>
      ) : null}
      <div>
        <Button type="submit" disabled={busy}>
          {busy ? "Sending" : "Start a conversation"}
        </Button>
      </div>
    </fetcher.Form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-sm text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

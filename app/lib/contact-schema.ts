import { z } from "zod";
import { disciplineSlugs, hiringRegions } from "~/content/site";

const regionValues = hiringRegions.map((region) => region.value) as [
  (typeof hiringRegions)[number]["value"],
  ...(typeof hiringRegions)[number]["value"][],
];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.string().trim().email("Use a work email we can reply to."),
  company: z.string().trim().min(2, "Tell us the company."),
  discipline: z.enum(disciplineSlugs, "Choose a discipline."),
  region: z.enum(regionValues, "Choose a region."),
  message: z
    .string()
    .trim()
    .min(20, "Describe the role in a sentence or two."),
  marketing: z.literal("on").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactActionData = {
  ok: boolean;
  fieldErrors: Record<string, string>;
  formError: string | null;
};

export function contactFieldErrors(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }
  return fieldErrors;
}

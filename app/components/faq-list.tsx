import { Link } from "react-router";
import { faqs } from "~/content/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Eyebrow } from "~/components/eyebrow";

export function FaqList() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <Eyebrow>Questions</Eyebrow>
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">
          Questions, answered
        </h2>
        <Accordion type="single" collapsible>
          {faqs.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <p className="mt-8 text-sm text-muted">
        Still stuck?{" "}
        <Link to="/contact" className="text-foreground underline">
          Start a conversation
        </Link>
        .
      </p>
    </section>
  );
}

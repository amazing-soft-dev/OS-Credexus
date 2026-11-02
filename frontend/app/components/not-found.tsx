import { Link } from "react-router";
import { Button } from "~/components/ui/button";

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 py-24 md:px-8">
      <p className="font-display text-xs tracking-[0.28em] text-muted uppercase">
        {"{404}"}
      </p>
      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] font-medium tracking-tight uppercase md:text-7xl">
        THIS PAGE ISN&apos;T STAFFED.
      </h1>
      <p className="mt-6 max-w-xl text-muted">
        The address does not match a page on Credexus. The work is still on the
        disciplines we do hire for.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/disciplines">View disciplines</Link>
        </Button>
      </div>
    </section>
  );
}

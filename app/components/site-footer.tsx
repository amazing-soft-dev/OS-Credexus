import { Link } from "react-router";
import { company, nav, regions } from "~/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl font-semibold tracking-[0.08em]">
            {company.name.toUpperCase()}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {company.lede}
          </p>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-muted uppercase">
            {"{Navigation}"}
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs tracking-[0.28em] text-muted uppercase">
            {"{Regions}"}
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            {regions.map((region) => (
              <li key={region.slug}>{region.name}</li>
            ))}
          </ul>
          <a
            className="mt-6 inline-block text-sm hover:text-accent"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-7xl px-6 pb-10 font-display text-6xl font-medium tracking-tight text-foreground uppercase md:px-8 md:text-8xl">
        {company.name}
      </p>
    </footer>
  );
}

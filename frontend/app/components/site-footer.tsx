import { Link } from "react-router";
import { company, nav, regions } from "~/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-[0.14em]">
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
    </footer>
  );
}

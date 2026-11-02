import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { company, nav } from "~/content/site";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-[0.08em]">
          {company.name.toUpperCase()}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="group inline-flex items-baseline gap-2 text-sm"
            >
              {({ isActive }) => (
                <>
                  <span className="font-display text-[10px] tracking-[0.2em] text-muted">
                    {item.index}
                  </span>
                  <span
                    className={cn(
                      "relative",
                      isActive ? "text-foreground" : "text-muted",
                    )}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line px-6 py-4 md:hidden"
        >
          <ul className="grid gap-4">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 text-lg"
                >
                  <span className="font-display text-xs tracking-[0.2em] text-muted">
                    {item.index}
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

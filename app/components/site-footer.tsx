import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { company, nav, regions } from "~/content/site";
import { Logo } from "~/components/logo";
import { RollingText } from "~/components/motion/rolling-text";

const linkType =
  "inline-flex max-w-full overflow-hidden font-display text-[clamp(1.25rem,2.1vw,2.5rem)] leading-[1.2] font-semibold tracking-[0.2px] text-white uppercase select-none";

function useRoll() {
  const [active, setActive] = useState(false);
  return {
    active,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    onFocus: () => setActive(true),
    onBlur: () => setActive(false),
  };
}

function RollLink({ to, children }: { to: string; children: string }) {
  const roll = useRoll();
  return (
    <Link
      to={to}
      className={linkType}
      onMouseEnter={roll.onMouseEnter}
      onMouseLeave={roll.onMouseLeave}
      onFocus={roll.onFocus}
      onBlur={roll.onBlur}
    >
      <RollingText text={children} active={roll.active} />
    </Link>
  );
}

function FitWordmark({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const fit = () => {
      const target = parent.clientWidth * 0.92;
      el.style.fontSize = "100px";
      const width = el.scrollWidth;
      if (width <= 0 || target <= 0) return;
      el.style.fontSize = `${(100 * target) / width}px`;
    };

    let cancelled = false;
    const run = () => {
      if (!cancelled) fit();
    };
    void document.fonts
      ?.load("600 100px 'Clash Grotesk'")
      .then(run)
      .catch(run);
    run();
    const observer = new ResizeObserver(run);
    observer.observe(parent);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className="w-max font-display text-[clamp(4.25rem,15vw,16rem)] leading-none font-semibold tracking-[0.01em] whitespace-nowrap text-white uppercase"
    >
      {text}
    </p>
  );
}

export function SiteFooter() {
  const email = useRoll();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_34%_58%,rgba(255,255,255,0.14),transparent_58%)]" />
        <div
          className="absolute top-[-35%] left-[2%] h-[180%] w-[34%] blur-3xl"
          style={{
            transform: "rotate(38deg)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 34%, rgba(190,190,190,0.28) 47%, rgba(255,255,255,0.62) 51%, rgba(255,255,255,0.12) 58%, transparent 74%)",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 px-6 pt-12 min-[1100px]:px-[60px] min-[1100px]:pt-[60px]">
        <div className="grid gap-12 min-[1100px]:grid-cols-[minmax(0,1.2fr)_auto_auto] min-[1100px]:items-start min-[1100px]:gap-x-16">
          <div>
            <Logo size="fluid" tone="light" />
            <p className="mt-6 max-w-[500px] text-2xl leading-[1.4] font-semibold">
              {company.lede}
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.05em] text-white/50 uppercase">
              Navigation
            </p>
            <ul className="mt-4 grid gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <RollLink to={item.to}>{item.label}</RollLink>
                </li>
              ))}
              <li>
                <RollLink to="/contact">Contact</RollLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.05em] text-white/50 uppercase">
              Regions
            </p>
            <ul className="mt-4 grid gap-1">
              {regions.map((region) => (
                <li key={region.slug} className={linkType}>
                  {region.name}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${company.email}`}
              className={`${linkType} mt-2`}
              onMouseEnter={email.onMouseEnter}
              onMouseLeave={email.onMouseLeave}
              onFocus={email.onFocus}
              onBlur={email.onBlur}
            >
              <RollingText text={company.email} active={email.active} />
            </a>
          </div>
        </div>
        <div className="mt-16">
          <FitWordmark text={company.name} />
        </div>
      </div>
    </footer>
  );
}

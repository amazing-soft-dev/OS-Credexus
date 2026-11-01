import type { ReactNode } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import type { Route } from "./+types/root";
import { NotFound } from "~/components/not-found";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { SmoothScroll } from "~/components/motion/smooth-scroll";
import { LightRays } from "~/components/visual/light-rays";
import "./app.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07080a" />
        <Meta />
        <Links />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScroll />
          <LightRays />
          <div className="relative z-10">
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
            >
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
          <Analytics />
        </MotionConfig>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main id="main">
      <Outlet />
    </main>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main id="main">
        <NotFound />
      </main>
    );
  }

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-5xl tracking-tight">Something broke.</h1>
      <p className="mt-4 max-w-xl text-muted">
        The page could not be rendered. Email hello@credexus.org if it keeps
        happening.
      </p>
    </main>
  );
}

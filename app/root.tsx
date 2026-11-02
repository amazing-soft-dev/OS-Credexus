import type { ReactNode } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import type { Route } from "./+types/root";
import { NotFound } from "~/components/not-found";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { SmoothScroll } from "~/components/motion/smooth-scroll";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico", sizes: "any" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScroll />
          <div className="relative">
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
    <main id="main" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <h1 className="font-display text-5xl tracking-tight">Something broke.</h1>
      <p className="mt-4 max-w-xl text-muted">
        The page could not be rendered. Email hello@credexus.org if it keeps
        happening.
      </p>
    </main>
  );
}

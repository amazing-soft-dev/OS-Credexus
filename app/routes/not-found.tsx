import { data } from "react-router";
import type { Route } from "./+types/not-found";
import { NotFound } from "~/components/not-found";
import { pageMeta } from "~/lib/seo";

export function loader() {
  return data(null, { status: 404 });
}

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Page not found",
    description: "This page is not staffed. Head back to Credexus.",
    path: "/404",
  });
}

export default function NotFoundRoute() {
  return <NotFound />;
}

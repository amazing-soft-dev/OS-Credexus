import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("disciplines", "routes/disciplines.tsx"),
  route("disciplines/:slug", "routes/discipline.tsx"),
  route("notes", "routes/notes.tsx"),
  route("notes/:slug", "routes/note.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

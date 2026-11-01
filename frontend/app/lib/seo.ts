const DEFAULT_SITE_URL = "https://credexus.org";
const DEFAULT_IMAGE = "/og.png";

export function siteOrigin() {
  const fromVite = import.meta.env.VITE_SITE_URL;
  const fromProcess =
    typeof process !== "undefined" ? process.env.SITE_URL : undefined;
  const raw =
    (typeof fromVite === "string" && fromVite) || fromProcess || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function pageMeta({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const origin = siteOrigin();
  const url = new URL(path, origin).toString();
  const imageUrl = new URL(image, origin).toString();
  const fullTitle = title === "Credexus" ? title : `${title} · Credexus`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:site_name", content: "Credexus" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

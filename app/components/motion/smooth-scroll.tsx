import { useEffect } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";

export function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
    });

    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}

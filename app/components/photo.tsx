import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

const imageSize: Record<string, { width: number; height: number }> = {
  "/images/hero.jpg": { width: 4274, height: 3419 },
  "/images/discipline-ai.jpg": { width: 7890, height: 5263 },
  "/images/discipline-backend.jpg": { width: 5568, height: 3712 },
  "/images/discipline-blockchain.jpg": { width: 3000, height: 2001 },
  "/images/discipline-cloud.jpg": { width: 5022, height: 3622 },
  "/images/discipline-data.jpg": { width: 6000, height: 4000 },
  "/images/discipline-data-science.jpg": { width: 6720, height: 4480 },
  "/images/discipline-devops.jpg": { width: 8256, height: 5504 },
  "/images/discipline-embedded.jpg": { width: 6000, height: 4000 },
  "/images/discipline-erp.jpg": { width: 6000, height: 4000 },
  "/images/discipline-frontend.jpg": { width: 6000, height: 4000 },
  "/images/discipline-fullstack.jpg": { width: 7850, height: 4416 },
  "/images/discipline-games.jpg": { width: 4158, height: 2776 },
  "/images/discipline-gis.jpg": { width: 4160, height: 6240 },
  "/images/discipline-mobile.jpg": { width: 6000, height: 4000 },
  "/images/discipline-salesforce.jpg": { width: 6000, height: 4000 },
  "/images/note-brief.jpg": { width: 3000, height: 2287 },
  "/images/note-regions.jpg": { width: 6240, height: 4160 },
  "/images/note-specialists.jpg": { width: 3360, height: 5040 },
  "/images/region-asia.jpg": { width: 5841, height: 3894 },
  "/images/region-canada.jpg": { width: 3960, height: 2970 },
  "/images/region-europe.jpg": { width: 3024, height: 4032 },
  "/images/region-latam.jpg": { width: 3989, height: 5984 },
  "/images/team-elena.jpg": { width: 5760, height: 3840 },
  "/images/team-jonas.jpg": { width: 3648, height: 5472 },
  "/images/team-kenji.jpg": { width: 4000, height: 6000 },
  "/images/team-mateo.jpg": { width: 4658, height: 6777 },
  "/images/team-mira.jpg": { width: 4640, height: 6960 },
  "/images/team-priya.jpg": { width: 4000, height: 6000 },
};

export function Photo({
  src,
  alt,
  className,
  frameClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const size = imageSize[src] ?? { width: 1600, height: 1067 };

  useEffect(() => {
    const image = ref.current;
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <span className={cn("relative block", frameClassName)}>
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 bg-[#f2f2f2] motion-safe:animate-pulse",
          loaded && "hidden",
        )}
      />
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn(
          className,
          "transition-opacity duration-300 motion-reduce:transition-none",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </span>
  );
}

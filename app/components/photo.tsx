import { memo } from "react";
import { FrameSkeleton, MediaSkeleton } from "~/components/media-skeleton";
import { useImageLoaded } from "~/hooks/use-image-loaded";
import { imageVariants } from "~/lib/image-variants";
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

export const Photo = memo(function Photo({
  src,
  alt,
  className,
  frameClassName,
  priority = false,
  sizes = "100vw",
  skeleton = "fill",
}: {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  priority?: boolean;
  sizes?: string;
  skeleton?: "card" | "fill";
}) {
  const { ref, loaded, onLoad, onError } = useImageLoaded(src);
  const size = imageSize[src] ?? { width: 1600, height: 1067 };
  const variant = imageVariants[src];

  return (
    <>
      <span className={cn("block", skeleton === "fill" && "relative", frameClassName)}>
        {skeleton === "fill" && !loaded ? <FrameSkeleton /> : null}
        <img
          ref={ref}
          src={variant?.src ?? src}
          srcSet={variant?.srcSet}
          sizes={sizes}
          alt={alt}
          width={size.width}
          height={size.height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={onLoad}
          onError={onError}
          className={cn(
            className,
            "transition-opacity duration-300 motion-reduce:transition-none",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      </span>
      {skeleton === "card" && !loaded ? (
        <span aria-hidden className="absolute inset-0 z-10">
          <MediaSkeleton />
        </span>
      ) : null}
    </>
  );
});

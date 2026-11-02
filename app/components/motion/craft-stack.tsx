import { Link } from "react-router";
import { Photo } from "~/components/photo";
import { disciplines } from "~/content/site";

const cardHeight = "md:h-[min(42rem,calc(100svh-8rem))]";

export function CraftStack() {
  return (
    <div className="mt-14 flex flex-col gap-10">
      {disciplines.map((item, index) => (
        <Link
          key={item.slug}
          to={`/disciplines/${item.slug}`}
          style={{
            top: `calc(5rem + ${index} * 1.25rem)`,
            zIndex: index + 1,
          }}
          className={`craft-stack-card grid gap-6 overflow-hidden md:grid-cols-2 md:gap-10 ${cardHeight}`}
        >
          <div className="flex flex-col justify-between gap-10 bg-[#0d0d0d] p-6 md:p-10">
            <div>
              <h3 className="font-display text-4xl leading-[0.95] font-medium tracking-tight uppercase md:text-5xl">
                {item.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
                {item.summary}
              </p>
            </div>
            <div className="flex items-start gap-6">
              <p className="font-display text-sm text-background/60">({item.number})</p>
              <ul className="grid gap-2 text-sm leading-relaxed text-background/60">
                {item.looksLike.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#0d0d0d] p-6 md:min-h-0 md:p-10">
            <Photo
              src={item.image}
              alt={item.alt}
              frameClassName="md:h-full"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

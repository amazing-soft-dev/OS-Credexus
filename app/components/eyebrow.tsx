import { cn } from "~/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-display text-xs tracking-[0.28em] text-muted uppercase",
        className,
      )}
    >
      {`{${children}}`}
    </p>
  );
}

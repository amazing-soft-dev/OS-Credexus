import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export function ShineCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      {children}
      <span
        aria-hidden="true"
        className="shine-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100 motion-reduce:hidden"
      />
    </div>
  );
}

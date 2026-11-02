import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full border border-line bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus-visible:border-accent",
        className,
      )}
      {...props}
    />
  );
}

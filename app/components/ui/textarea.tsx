import type { ComponentProps } from "react";
import { cn } from "~/lib/utils";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y border border-line bg-transparent px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted/70 focus-visible:border-accent",
        className,
      )}
      {...props}
    />
  );
}

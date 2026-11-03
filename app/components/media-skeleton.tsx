import { cn } from "~/lib/utils";

const bar = "bg-[#e4e4e4] motion-safe:animate-pulse";

export function MediaSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex h-full w-full gap-4 rounded-2xl bg-[#f6f6f6] p-4",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start gap-3">
          <div className={cn(bar, "size-12 shrink-0 rounded-md")} />
          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1.5">
            <div className={cn(bar, "h-2.5 w-2/5 rounded-full")} />
            <div className={cn(bar, "h-2.5 w-3/5 rounded-full")} />
          </div>
        </div>
        <div className="my-4 h-px bg-[#e6e6e6]" />
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="flex min-w-0 gap-2">
            <div className={cn(bar, "h-2.5 w-14 rounded-full")} />
            <div className={cn(bar, "h-2.5 w-20 rounded-full")} />
          </div>
          <div className={cn(bar, "h-8 w-24 shrink-0 rounded-full")} />
        </div>
      </div>
      <div className={cn(bar, "w-[34%] shrink-0 self-stretch rounded-xl")} />
    </div>
  );
}

export function FrameSkeleton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("absolute inset-0 bg-[#e4e4e4] motion-safe:animate-pulse", className)}
    />
  );
}

export function BarSkeleton({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("grid gap-3", className)}>
      <div className={cn(bar, "h-3 w-24 rounded-full")} />
      <div className={cn(bar, "h-3 w-2/3 max-w-md rounded-full")} />
      <div className={cn(bar, "mt-4 h-32 rounded-2xl bg-[#f0f0f0]")} />
    </div>
  );
}

const logoSize = {
  sm: 32,
  md: 48,
  fluid: 192,
} as const;

const logoClass = {
  sm: "size-8",
  md: "size-12",
  fluid: "size-[clamp(4.5rem,12vw,12rem)]",
} as const;

export function Logo({
  size = "sm",
  tone = "dark",
}: {
  size?: keyof typeof logoSize;
  tone?: "dark" | "light";
}) {
  const pixels = logoSize[size];

  return (
    <img
      src="/apple-touch-icon.png"
      alt=""
      width={pixels}
      height={pixels}
      decoding="async"
      className={`${logoClass[size]} shrink-0${tone === "light" ? " invert" : ""}`}
    />
  );
}

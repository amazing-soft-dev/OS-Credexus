const logoSize = {
  sm: 32,
  md: 48,
} as const;

const logoClass = {
  sm: "size-8",
  md: "size-12",
} as const;

export function Logo({ size = "sm" }: { size?: keyof typeof logoSize }) {
  const pixels = logoSize[size];

  return (
    <img
      src="/apple-touch-icon.png"
      alt=""
      width={pixels}
      height={pixels}
      decoding="async"
      className={`${logoClass[size]} shrink-0`}
    />
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-start"} ${
        align === "center" ? "" : "mx-0"
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold leading-tight ${
          light ? "text-white" : "text-[var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[1.05rem] leading-8 ${
            light ? "text-white/85" : "text-[var(--color-muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

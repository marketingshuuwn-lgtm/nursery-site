import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-2 text-sm font-bold",
            align === "center" && "justify-center",
            tone === "light" ? "text-clay-300" : "text-clay-600",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "inline-block h-px w-8",
              tone === "light" ? "bg-clay-300/70" : "bg-clay-500/60",
            )}
          />
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "mt-3 font-display text-3xl font-extrabold leading-[1.35] sm:text-4xl",
          tone === "light" ? "text-cream-50" : "text-forest-950",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-8 sm:text-lg",
            tone === "light" ? "text-forest-100/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

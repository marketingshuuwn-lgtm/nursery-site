import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  code: string;
  aspect?: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  code,
  aspect = "aspect-[4/3]",
  className,
}: ImagePlaceholderProps) {
  return (
    <figure
      role="img"
      aria-label={`موضع صورة مخصص: ${label}`}
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[2rem] border-2 border-dashed border-forest-300 bg-gradient-to-br from-forest-50 via-cream-50 to-clay-50 p-6 text-center",
        aspect,
        className,
      )}
    >
      <Sprout
        aria-hidden="true"
        className="absolute -bottom-8 -start-8 size-40 rotate-12 text-forest-100"
        strokeWidth={1}
      />
      <span className="relative grid size-14 place-items-center rounded-2xl bg-white shadow-sm">
        <Sprout aria-hidden="true" className="size-7 text-forest-500" strokeWidth={1.5} />
      </span>
      <figcaption className="relative">
        <span className="block text-sm font-bold text-forest-800">{label}</span>
        <span
          dir="ltr"
          className="mt-1 block font-mono text-[11px] font-medium tracking-wider text-muted"
        >
          [IMAGE REQUIRED: {code}]
        </span>
      </figcaption>
    </figure>
  );
}

import { Sprout } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a
      href="#home"
      aria-label={`${siteContent.business.name} — الانتقال إلى الرئيسية`}
      className="group inline-flex items-center gap-3"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest-700 text-cream-50 shadow-sm transition-transform duration-200 group-hover:-rotate-6">
        <Sprout aria-hidden="true" className="size-6" strokeWidth={1.7} />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[15px] font-bold sm:text-base",
            tone === "light" ? "text-cream-50" : "text-forest-950",
          )}
        >
          مشتل سلطان العتيبي
        </span>
        <span
          className={cn(
            "block text-xs font-medium",
            tone === "light" ? "text-forest-200" : "text-muted",
          )}
        >
          الزراعية — الرياض
        </span>
      </span>
    </a>
  );
}

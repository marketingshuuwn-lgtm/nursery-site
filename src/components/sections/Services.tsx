import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Flower2,
  Layers,
  Leaf,
  Shovel,
  Sparkles,
  Trees,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import type { ServiceIconKey } from "@/types/content";

const serviceIcons: Record<ServiceIconKey, LucideIcon> = {
  design: Flower2,
  nursery: Trees,
  plants: Leaf,
  tools: Shovel,
  irrigation: Droplets,
  lighting: Leaf,
  metalwork: Leaf,
  turf: Layers,
};

export function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-12 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const isPlantService = service.icon === "plants";

            return (
              <Reveal key={service.number} delay={(index % 2) * 100}>
                <article
                  className={`flex gap-5 border-t border-forest-200/70 pt-7 ${
                    isPlantService
                      ? "rounded-2xl bg-forest-50/50 p-6 border-forest-300 shadow-xs"
                      : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    dir="ltr"
                    className="pt-1 font-display text-2xl font-extrabold leading-none text-clay-400"
                  >
                    {service.number}
                  </span>

                  <div className="w-full">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest-100/70 text-forest-700">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <h3 className="font-display text-lg font-bold leading-7 text-forest-950">
                        {service.title}
                      </h3>
                      {isPlantService && (
                        <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-clay-500/10 px-2.5 py-0.5 text-xs font-bold text-clay-700">
                          <Sparkles className="size-3" />
                          الأكثر طلباً
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-[15px] leading-7 text-muted">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 flex items-start gap-4 rounded-2xl border border-clay-200 bg-clay-50 p-6 sm:p-7">
            <Leaf aria-hidden="true" className="mt-1 size-5 shrink-0 text-clay-600" />
            <p className="text-base font-bold leading-8 text-forest-900">{services.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

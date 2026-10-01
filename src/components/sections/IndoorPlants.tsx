"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  CloudSun,
  Droplets,
  Home,
  LampDesk,
  MessageCircle,
  Sparkles,
  Sprout,
  Sun,
  SunDim,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import type { PlantCategoryIconKey, PlantItem } from "@/types/content";

const categoryIcons: Record<PlantCategoryIconKey, LucideIcon> = {
  "low-light": SunDim,
  "indirect-light": CloudSun,
  "wide-space": Home,
  desk: LampDesk,
};

const filterTabs = [
  { id: "all", label: "جميع النباتات" },
  { id: "low-light", label: "قليلة الإضاءة (للزوايا)" },
  { id: "indirect-light", label: "إضاءة غير مباشرة" },
  { id: "wide-space", label: "صالات ومداخل واسعة" },
  { id: "desk", label: "للمكاتب والأرفف" },
] as const;

export function IndoorPlants() {
  const { indoorPlants, business } = siteContent;
  const [activeTab, setActiveTab] = useState<string>("all");

  const allPlants: PlantItem[] = (indoorPlants as any).plants || [];

  const filteredPlants =
    activeTab === "all"
      ? allPlants
      : allPlants.filter((plant) => plant.category === activeTab);

  return (
    <section id="plants" className="bg-forest-950 py-16 sm:py-20 lg:py-28 text-cream-50">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow={indoorPlants.eyebrow}
            title={indoorPlants.title}
            description={indoorPlants.description}
            className="max-w-3xl"
          />
        </Reveal>

        {/* Plant Visual Showcase Header & Filter Tabs */}
        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-clay-400/30 bg-clay-400/10 px-3.5 py-1 text-xs font-bold text-clay-300">
                <Sparkles className="size-3.5" />
                معرض النباتات الحية
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                {(indoorPlants as any).galleryTitle || "تشكيلة النباتات المتوفرة بالصور"}
              </h3>
              <p className="mt-1 text-sm text-forest-200/80">
                {(indoorPlants as any).gallerySubtitle ||
                  "تصفح النباتات بالصور الحقيقية وتعرف على شروط العناية بها:"}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-clay-500 text-white shadow-md shadow-clay-500/30"
                      : "border border-white/15 bg-white/5 text-forest-100/90 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plant Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlants.map((plant, index) => {
              const whatsappMessage = encodeURIComponent(
                `مرحباً مشتل سلطان العتيبي، أود الاستفسار عن توفر وسعر نبتة: ${plant.name}`
              );
              const plantWhatsappUrl = `https://wa.me/966578326985?text=${whatsappMessage}`;

              return (
                <Reveal key={plant.id} delay={(index % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-black/20">
                    {/* Plant Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-900">
                      <Image
                        src={plant.image}
                        alt={plant.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/20" />

                      {/* Plant Tag Badge */}
                      <span className="absolute start-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-forest-950/80 px-2.5 py-1 text-xs font-bold text-cream-50 backdrop-blur-md">
                        <Sprout className="size-3 text-clay-400" />
                        {plant.tag}
                      </span>
                    </div>

                    {/* Plant Card Details */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-display text-lg font-bold text-cream-50 group-hover:text-clay-300 transition-colors">
                          {plant.name}
                        </h4>
                      </div>
                      <span className="font-sans text-xs text-forest-200/60" dir="ltr">
                        {plant.englishName}
                      </span>

                      <p className="mt-3 text-xs leading-6 text-forest-100/80">
                        {plant.description}
                      </p>

                      {/* Care and Light Indicators */}
                      <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs">
                        <div className="flex items-center gap-2 text-forest-100/90">
                          <Sun className="size-3.5 shrink-0 text-clay-400" />
                          <span className="font-medium text-forest-200/70">الإضاءة:</span>
                          <span className="font-bold text-cream-50">{plant.lightLevel}</span>
                        </div>
                        <div className="flex items-center gap-2 text-forest-100/90">
                          <Droplets className="size-3.5 shrink-0 text-clay-400" />
                          <span className="font-medium text-forest-200/70">العناية:</span>
                          <span className="font-bold text-cream-50">{plant.careLevel}</span>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                        <a
                          href={plantWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-800/80 py-2.5 px-4 text-xs font-bold text-cream-50 transition-colors duration-200 hover:bg-clay-600 hover:text-white"
                        >
                          <MessageCircle className="size-4 text-clay-300" />
                          <span>طلب النبتة أو استفسار</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Section: Categories based on home light */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-cream-50">
              {indoorPlants.chooseTitle}
            </h3>
            <p className="mt-2 text-sm text-forest-100/70">
              لكل ركن في منزلك نبتة مخصصة تتأقلم مع كمية الضوء الطبيعي:
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {indoorPlants.categories.map((category, index) => {
              const Icon = categoryIcons[category.icon];

              return (
                <Reveal key={category.id} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08]">
                    <span className="grid size-11 place-items-center rounded-xl bg-clay-400/15 text-clay-300">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h4 className="mt-4 font-display text-base font-bold text-cream-50">
                      {category.title}
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-forest-100/80">
                      {category.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Section: Checklist & Nursery Note */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-cream-50">
                {indoorPlants.checklistTitle}
              </h3>
              <p className="mt-1.5 text-sm text-forest-100/70">{indoorPlants.checklistSubtitle}</p>

              <ol className="mt-6 space-y-3">
                {indoorPlants.checklist.map((question, index) => (
                  <li
                    key={question}
                    className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-full bg-clay-400/20 font-display text-xs font-bold text-clay-300"
                    >
                      {index + 1}
                    </span>
                    <span className="font-medium text-cream-50">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4 rounded-3xl border border-clay-300/25 bg-gradient-to-br from-clay-400/15 to-forest-900/50 p-6 sm:p-8">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-clay-500/20 text-clay-300">
                <Sprout aria-hidden="true" className="size-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-cream-50">
                مشورة متخصصة قبل أن تشتري
              </h4>
              <p className="text-sm leading-7 text-forest-100/90">{indoorPlants.note}</p>
              <div className="pt-2">
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-clay-500 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-clay-500/25 transition-transform hover:-translate-y-0.5 hover:bg-clay-600"
                >
                  <MessageCircle className="size-4" />
                  <span>تواصل معنا لاستشارة اختيار النبات مجاناً</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

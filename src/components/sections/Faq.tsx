"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = siteContent;

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
              <p className="mt-6 text-sm leading-7 text-muted">
                لم تجدي إجابتك؟{" "}
                <a
                  href="#contact"
                  className="font-bold text-forest-700 underline-offset-4 hover:underline"
                >
                  تواصلي معنا مباشرة
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {faq.items.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-button-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <li
                    key={item.question}
                    className={cn(
                      "rounded-2xl border transition-colors duration-200",
                      isOpen
                        ? "border-forest-200 bg-cream-50 shadow-sm"
                        : "border-forest-100 bg-white hover:border-forest-200",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-start sm:px-6 sm:py-5"
                      >
                        <span
                          className={cn(
                            "text-base font-bold sm:text-lg",
                            isOpen ? "text-forest-800" : "text-forest-950",
                          )}
                        >
                          {item.question}
                        </span>
                        <span
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full transition-colors",
                            isOpen
                              ? "bg-forest-700 text-white"
                              : "bg-forest-50 text-forest-600",
                          )}
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "size-4 transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-[15px] leading-8 text-muted sm:px-6 sm:pb-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

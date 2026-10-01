import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.lead} />

            <p className="mt-4 leading-8 text-muted">{about.body}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-100 bg-cream-50/60 p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-forest-700 text-cream-50">
                  <Eye aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-forest-950">
                  {about.vision.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{about.vision.text}</p>
              </div>

              <div className="rounded-2xl border border-forest-100 bg-cream-50/60 p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-clay-500 text-white">
                  <Target aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-forest-950">
                  {about.mission.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{about.mission.text}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <Image
                src="/images/about.jpg"
                alt="مشتل سلطان العتيبي الزراعية — نباتات وحدائق"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-[2rem] object-cover"
              />
              <div className="relative z-10 mx-4 -mt-14 rounded-2xl bg-forest-800 p-6 text-cream-50 shadow-lg shadow-forest-900/20 sm:mx-8">
                <p className="font-display text-xl font-extrabold text-white">
                  {about.experience.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-forest-100/90">
                  {about.experience.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

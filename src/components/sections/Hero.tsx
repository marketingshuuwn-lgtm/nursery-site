import Image from "next/image";
import { ArrowLeft, Leaf } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 start-[-10rem] size-[30rem] rounded-full bg-forest-100/50 blur-3xl" />
        <div className="absolute -bottom-48 end-[-12rem] size-[32rem] rounded-full bg-clay-100/60 blur-3xl" />
      </div>

      <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-forest-200 bg-white/80 px-4 py-1.5 text-sm font-bold text-forest-700">
              <Leaf aria-hidden="true" className="size-4 text-forest-500" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.25] text-forest-950 sm:text-5xl sm:leading-[1.2] lg:text-[3.4rem]">
              {hero.headlineStart}{" "}
              <span className="bg-[linear-gradient(to_top,transparent_58%,var(--color-clay-200)_58%,var(--color-clay-200)_92%,transparent_92%)] px-1 text-forest-700">
                {hero.headlineAccent}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-forest-800 sm:text-xl sm:leading-9">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-4 max-w-xl space-y-3 leading-8 text-muted">
              <p>{hero.description}</p>
              <p>{hero.secondaryDescription}</p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl rounded-2xl border-s-4 border-clay-500 bg-clay-50 p-4 text-[15px] font-bold leading-7 text-forest-900">
              {hero.highlight}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} external size="lg">
                <WhatsAppIcon className="size-5" />
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                {hero.secondaryCta.label}
              </Button>
              <a
                href={hero.tertiaryCta.href}
                className="group inline-flex items-center gap-1.5 rounded-full px-2 py-2 text-sm font-bold text-forest-700 underline-offset-4 transition-colors hover:text-forest-900 hover:underline"
              >
                {hero.tertiaryCta.label}
                <ArrowLeft
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-x-1"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-forest-200/70 pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    dir="ltr"
                    className="text-start font-display text-3xl font-extrabold text-forest-700"
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -rotate-2 rounded-[2.2rem] bg-forest-100"
            />
            <Image
              src="/images/hero.jpg"
              alt="حديقة منزلية خضراء — مشتل سلطان العتيبي الزراعية"
              width={1200}
              height={1500}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-forest-900/10"
              priority
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

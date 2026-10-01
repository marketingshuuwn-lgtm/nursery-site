import { Leaf, Phone, Sprout } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site-content";

export function ContactCta() {
  const { contact, business } = siteContent;

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-forest-700)_0%,transparent_60%)] opacity-60" />
              <Leaf className="absolute -top-6 start-8 size-28 rotate-12 text-white/5" strokeWidth={1} />
              <Sprout className="absolute -bottom-8 end-6 size-36 -rotate-12 text-white/5" strokeWidth={1} />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-[1.4] text-cream-50 sm:text-4xl">
                {contact.title}
              </h2>
              <p className="mt-4 text-lg font-bold text-clay-300">{contact.subtitle}</p>
              <p className="mx-auto mt-4 max-w-2xl leading-8 text-forest-100/85">
                {contact.description}
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href={contact.primaryCta.href} external variant="light" size="lg">
                  <WhatsAppIcon className="size-5 text-forest-600" />
                  {contact.primaryCta.label}
                </Button>
                <Button href={contact.secondaryCta.href} variant="outlineLight" size="lg">
                  <Phone aria-hidden="true" className="size-4" />
                  {contact.secondaryCta.label}
                </Button>
              </div>

              <p className="mt-6 text-sm text-forest-200">
                <span dir="ltr">{business.phone.display}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

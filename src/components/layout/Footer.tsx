import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteContent } from "@/content/site-content";

export function Footer() {
  const { footer, business } = siteContent;

  return (
    <footer className="bg-forest-950 text-forest-100">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-forest-200">
              {footer.description}
            </p>
          </div>

          <nav aria-label="روابط سريعة" className="lg:col-span-2">
            <h2 className="font-display text-base font-bold text-cream-50">روابط سريعة</h2>
            <ul className="mt-5 space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="خدماتنا" className="lg:col-span-2">
            <h2 className="font-display text-base font-bold text-cream-50">خدماتنا</h2>
            <ul className="mt-5 space-y-3">
              {footer.servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-forest-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-display text-base font-bold text-cream-50">تواصل معنا</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-clay-300" />
                <span className="leading-6 text-forest-200">{business.location}</span>
              </li>
              <li>
                <a
                  href={business.phone.href}
                  className="flex items-center gap-3 text-forest-200 transition-colors hover:text-white"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-clay-300" />
                  <span dir="ltr">{business.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-forest-200 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-clay-300" />
                  واتساب — احجز استشارتك
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-forest-800/80 pt-6">
          <p className="text-center text-sm text-forest-300">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

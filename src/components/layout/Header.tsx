"use client";

import { useEffect, useState } from "react";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteContent } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav, business } = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/90 backdrop-blur transition-[box-shadow,border-color] duration-200 supports-[backdrop-filter]:bg-background/80",
        scrolled || menuOpen
          ? "border-b border-forest-100 shadow-sm"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-bold text-forest-800 transition-colors hover:bg-forest-50 hover:text-forest-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href={nav.cta.href} external>
            {nav.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          className="grid size-11 place-items-center rounded-xl text-forest-900 transition-colors hover:bg-forest-50 lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </Container>

      {/* قائمة الجوال */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-18 z-40 border-t border-forest-100 bg-background lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav aria-label="قائمة الجوال" className="h-full overflow-y-auto px-6 py-6">
          <ul className="divide-y divide-forest-100">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-lg font-bold text-forest-900 transition-colors hover:text-forest-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href={nav.cta.href}
              external
              size="lg"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              {nav.cta.label}
            </Button>
          </div>

          <div className="mt-6 space-y-3 rounded-2xl bg-cream-100/70 p-4 text-sm">
            <a
              href={business.phone.href}
              className="flex items-center gap-2.5 font-bold text-forest-800"
            >
              <Phone aria-hidden="true" className="size-4 text-forest-600" />
              <span dir="ltr">{business.phone.display}</span>
            </a>
            <p className="flex items-center gap-2.5 text-muted">
              <MapPin aria-hidden="true" className="size-4 text-forest-600" />
              {business.location}
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}

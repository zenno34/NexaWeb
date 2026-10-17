import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import type { NavigateFn, PageKey } from "../data/content";
import { Logo } from "./ui";

const LINKS: { key: PageKey; label: string }[] = [
  { key: "accueil", label: "Accueil" },
  { key: "services", label: "Services" },
  { key: "realisations", label: "Réalisations" },
  { key: "apropos", label: "À propos" },
  { key: "contact", label: "Contact" },
];

interface NavbarProps {
  currentPage: PageKey;
  navigate: NavigateFn;
}

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (page: PageKey) => {
    setMenuOpen(false);
    navigate(page);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen ? "border-b border-ink-900/[0.06] bg-white/85 shadow-[0_8px_30px_-18px_rgb(10_15_30/0.25)] backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <Logo onClick={() => go("accueil")} />

        {/* Liens — ordinateur */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => {
            const active = currentPage === link.key;
            return (
              <li key={link.key}>
                <button
                  type="button"
                  onClick={() => go(link.key)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[0.93rem] font-medium transition-colors duration-200",
                    active ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "bg-brand-gradient absolute right-4 -bottom-0.5 left-4 h-0.5 rounded-full transition-all duration-300",
                      active ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go("contact")}
            className="group bg-brand-gradient shadow-glow hidden cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:inline-flex"
          >
            Parler de mon projet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition-colors hover:bg-ink-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pt-2 pb-6 sm:px-6">
          {LINKS.map((link) => {
            const active = currentPage === link.key;
            return (
              <button
                key={link.key}
                type="button"
                onClick={() => go(link.key)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium transition-colors",
                  active ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-ink-50"
                )}
              >
                {link.label}
                <ArrowRight className={cn("h-4 w-4", active ? "text-brand-600" : "text-ink-900/30")} aria-hidden="true" />
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => go("contact")}
            className="bg-brand-gradient mt-3 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99]"
          >
            Parler de mon projet
            <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

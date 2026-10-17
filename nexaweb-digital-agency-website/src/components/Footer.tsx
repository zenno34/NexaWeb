import { ArrowUpRight, Mail } from "lucide-react";
import { EMAIL, EMAIL_LINK, type NavigateFn, type PageKey } from "../data/content";
import { Logo } from "./ui";

const NAV_LINKS: { key: PageKey; label: string }[] = [
  { key: "accueil", label: "Accueil" },
  { key: "services", label: "Services" },
  { key: "realisations", label: "Réalisations" },
  { key: "apropos", label: "À propos" },
  { key: "contact", label: "Contact" },
];

const SERVICE_LINKS = ["Création de site vitrine", "Boutique Shopify", "Refonte de site web", "Projet personnalisé"];

export default function Footer({ navigate }: { navigate: NavigateFn }) {
  return (
    <footer className="bg-ink-950 text-white" aria-label="Pied de page">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <Logo dark onClick={() => navigate("accueil")} />
            <p className="mt-5 max-w-xs leading-relaxed text-ink-100/65">Création de sites web et solutions digitales.</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-100/50">
              Des sites modernes. Une image professionnelle. Des solutions adaptées à votre activité.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <h3 className="font-display text-sm font-bold tracking-[0.12em] text-white/90 uppercase">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    type="button"
                    onClick={() => navigate(link.key)}
                    className="text-[0.95rem] text-ink-100/65 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.12em] text-white/90 uppercase">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => navigate("services")}
                    className="text-[0.95rem] text-ink-100/65 transition-colors duration-200 hover:text-white"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.12em] text-white/90 uppercase">Contact</h3>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-100/65">
              Une question ou un projet à nous présenter ? Écrivez-nous par email :
            </p>
            <a
              href={EMAIL_LINK}
              className="group mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[0.92rem] font-semibold text-white transition-all duration-300 hover:border-brand-400/50 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-brand-400" aria-hidden="true" />
              {EMAIL}
              <ArrowUpRight className="h-3.5 w-3.5 text-white/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="mt-4 block text-[0.92rem] font-medium text-ink-100/65 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Ou utilisez notre formulaire de contact
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-ink-100/45 sm:flex-row">
          <p>© 2026 NexaWeb. Tous droits réservés.</p>
          <p>Site conçu par NexaWeb — Création digitale</p>
        </div>
      </div>
    </footer>
  );
}

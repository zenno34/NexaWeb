import {
  ArrowRight,
  Blocks,
  Check,
  Compass,
  Monitor,
  RefreshCcw,
  Rocket,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { PROJECTS, type NavigateFn, type Project } from "../data/content";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { Button, CTASection, Eyebrow, SectionHeading } from "../components/ui";
import { SitePreview } from "../components/Mockup";

interface ServiceDetail {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  includedTitle: string;
  included: string[];
  ctaLabel: string;
  contactType: string;
  visualProject: Project;
  visualNote: string;
}

const projectById = (id: string) => PROJECTS.find((project) => project.id === id) ?? PROJECTS[0];

const SERVICES: ServiceDetail[] = [
  {
    id: "site-vitrine",
    icon: Monitor,
    eyebrow: "Service 01",
    title: "Création de site vitrine",
    description:
      "Un site professionnel pour présenter votre activité, vos services, vos réalisations et permettre à vos visiteurs de vous contacter facilement.",
    includedTitle: "Ce que comprend votre site vitrine",
    included: [
      "Design personnalisé",
      "Version mobile",
      "Plusieurs pages",
      "Formulaire de contact",
      "Optimisation de la structure",
      "Intégration des contenus",
      "Mise en ligne",
    ],
    ctaLabel: "Discuter de mon projet",
    contactType: "Site vitrine",
    visualProject: projectById("studio-forma"),
    visualNote: "Exemple de démonstration — Studio Forma",
  },
  {
    id: "boutique-shopify",
    icon: ShoppingBag,
    eyebrow: "Service 02",
    title: "Boutique Shopify",
    description:
      "Une boutique en ligne moderne pour présenter vos produits et offrir une expérience d'achat claire et professionnelle.",
    includedTitle: "Ce que comprend votre boutique Shopify",
    included: [
      "Configuration Shopify",
      "Design de boutique",
      "Pages produits",
      "Collections",
      "Navigation",
      "Optimisation mobile",
      "Mise en place des éléments essentiels du parcours d'achat",
    ],
    ctaLabel: "Lancer ma boutique",
    contactType: "Boutique Shopify",
    visualProject: projectById("maison-alba"),
    visualNote: "Exemple de démonstration — Maison Alba",
  },
  {
    id: "refonte",
    icon: RefreshCcw,
    eyebrow: "Service 03",
    title: "Refonte de site web",
    description:
      "Votre site semble ancien, compliqué ou peu professionnel ? Nous pouvons repenser son design et sa structure.",
    includedTitle: "Ce que comprend une refonte",
    included: [
      "Analyse de l'existant",
      "Nouveau design",
      "Réorganisation des pages",
      "Amélioration de l'expérience utilisateur",
      "Adaptation mobile",
      "Modernisation visuelle",
    ],
    ctaLabel: "Moderniser mon site",
    contactType: "Refonte de site",
    visualProject: projectById("lumen-immobilier"),
    visualNote: "Exemple de démonstration — Lumen Immobilier, après refonte",
  },
  {
    id: "sur-mesure",
    icon: Blocks,
    eyebrow: "Service 04",
    title: "Projet personnalisé",
    description:
      "Vous avez une idée particulière ? NexaWeb peut concevoir une interface ou une solution adaptée à votre besoin.",
    includedTitle: "Exemples de besoins sur mesure",
    included: [
      "Interface adaptée à votre métier",
      "Fonctionnalités spécifiques à votre activité",
      "Catalogue, réservation ou espace dédié",
      "Parcours utilisateur personnalisé",
      "Évolutif selon vos besoins futurs",
    ],
    ctaLabel: "Présenter mon idée",
    contactType: "Projet personnalisé",
    visualProject: projectById("autonova"),
    visualNote: "Exemple de démonstration — AutoNova",
  },
];

const ALWAYS_INCLUDED = [
  {
    icon: Smartphone,
    title: "Responsive par défaut",
    description: "Votre site s'adapte aux téléphones, tablettes et ordinateurs.",
  },
  {
    icon: Compass,
    title: "Structure claire",
    description: "Des pages organisées pour guider vos visiteurs vers l'action.",
  },
  {
    icon: Rocket,
    title: "Mise en ligne incluse",
    description: "Nous finalisons et publions votre site, prêt à être découvert.",
  },
];

const GUIDES = [
  { situation: "Vous démarrez votre activité", advice: "Un site vitrine pour présenter vos services et être trouvé en ligne.", type: "Site vitrine" },
  { situation: "Vous vendez des produits", advice: "Une boutique Shopify claire, pensée pour présenter et vendre vos produits.", type: "Boutique Shopify" },
  { situation: "Votre site actuel fait daté", advice: "Une refonte pour moderniser votre image et simplifier la navigation.", type: "Refonte de site" },
  { situation: "Vous avez une idée précise", advice: "Un projet personnalisé, conçu autour de votre besoin spécifique.", type: "Projet personnalisé" },
];

export default function Services({ navigate }: { navigate: NavigateFn }) {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Des solutions digitales adaptées à <span className="text-gradient">votre projet</span>.
          </>
        }
        description="Création de site web, boutique Shopify, refonte ou projet sur mesure : découvrez en détail ce que NexaWeb peut concevoir pour vous."
      />

      {/* ------------------------- Services détaillés ------------------------- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {SERVICES.map((service, index) => (
          <section
            key={service.id}
            className={cn("grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20", index !== 0 && "border-t border-ink-900/[0.06]")}
            aria-labelledby={`${service.id}-title`}
          >
            {/* Texte */}
            <Reveal className={cn(index % 2 === 1 && "lg:order-2")}>
              <span className="bg-brand-50 text-brand-600 flex h-13 w-13 items-center justify-center rounded-2xl">
                <service.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">{service.eyebrow}</p>
              <h2 id={`${service.id}-title`} className="font-display mt-2.5 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-600">{service.description}</p>

              <h3 className="font-display mt-8 text-sm font-bold tracking-[0.08em] text-ink-900 uppercase">{service.includedTitle}</h3>
              <ul className="mt-4 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="mt-9" onClick={() => navigate("contact", { projectType: service.contactType })}>
                {service.ctaLabel}
              </Button>
            </Reveal>

            {/* Visuel */}
            <Reveal delay={140} className={cn(index % 2 === 1 && "lg:order-1")}>
              <div className="relative rounded-[2rem] bg-gradient-to-br from-brand-50 via-ink-50 to-white p-5 sm:p-8">
                <div
                  className="absolute -top-6 right-10 h-24 w-24 rounded-full opacity-30 blur-2xl"
                  style={{ backgroundColor: service.visualProject.accent }}
                  aria-hidden="true"
                />
                <SitePreview project={service.visualProject} large className="relative" />
                <p className="relative mt-4 flex items-center gap-2 text-xs font-medium text-ink-600/80">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: service.visualProject.accent }} aria-hidden="true" />
                  {service.visualNote}
                </p>
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      {/* ----------------------- Inclus dans chaque projet ----------------------- */}
      <section className="bg-ink-900 bg-grid-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8" aria-label="Inclus dans chaque projet">
        <div className="pointer-events-none absolute top-0 right-1/4 h-64 w-64 rounded-full bg-brand-600/25 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <Eyebrow dark>Sans exception</Eyebrow>
              <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
                Inclus dans chacun de nos projets
              </h2>
            </div>
            <p className="max-w-md leading-relaxed text-ink-100/70">
              Quel que soit le service choisi, votre projet bénéficie des mêmes fondamentaux : qualité d'affichage, clarté et mise en ligne soignée.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ALWAYS_INCLUDED.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/25 text-brand-100">
                    <item.icon className="h-5.5 w-5.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-100/65">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Aide au choix --------------------------- */}
      <section className="px-4 py-24 sm:px-6 lg:px-8" aria-label="Choisir la bonne solution">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Bien choisir"
            title={
              <>
                Vous ne savez pas quelle solution <span className="text-gradient">vous convient</span> ?
              </>
            }
            description="Repérez votre situation : nous vous orienterons vers la formule la plus adaptée, sans engagement."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {GUIDES.map((guide, index) => (
              <Reveal key={guide.situation} delay={index * 90}>
                <button
                  type="button"
                  onClick={() => navigate("contact", { projectType: guide.type })}
                  className="group flex h-full w-full cursor-pointer flex-col rounded-3xl border border-ink-900/[0.07] bg-white p-7 text-left shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/25 hover:shadow-lift"
                  aria-label={`${guide.situation} — demander un ${guide.type.toLowerCase()}`}
                >
                  <p className="text-xs font-bold tracking-[0.12em] text-brand-600 uppercase">Votre situation</p>
                  <h3 className="font-display mt-3 text-lg leading-snug font-bold text-ink-900">{guide.situation}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-ink-600">{guide.advice}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    {guide.type}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

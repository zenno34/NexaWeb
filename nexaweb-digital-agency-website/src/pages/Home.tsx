import { useState } from "react";
import {
  ArrowRight,
  Blocks,
  Check,
  ChevronDown,
  MessagesSquare,
  Monitor,
  Palette,
  RefreshCcw,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import { FAQ_ITEMS, METHOD_STEPS, PROJECTS, type NavigateFn } from "../data/content";
import Reveal from "../components/Reveal";
import { Button, CTASection, Eyebrow, SectionHeading } from "../components/ui";
import { HeroVisual, PhonePreview, SitePreview } from "../components/Mockup";
import ProjectCard from "../components/ProjectCard";

/* ------------------------------- Données ------------------------------- */

const SERVICE_CARDS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Monitor,
    title: "Création de site web",
    description: "Des sites vitrines modernes, rapides et adaptés à votre activité.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique Shopify",
    description: "Des boutiques en ligne pensées pour présenter vos produits et faciliter l'achat.",
  },
  {
    icon: RefreshCcw,
    title: "Refonte de site",
    description: "Modernisez un site existant et améliorez son design, sa structure et son expérience utilisateur.",
  },
  {
    icon: Blocks,
    title: "Solutions personnalisées",
    description: "Des fonctionnalités et interfaces adaptées aux besoins spécifiques de votre projet.",
  },
];

const ADVANTAGES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Palette,
    title: "Design moderne",
    description: "Une identité visuelle soignée, actuelle et cohérente avec votre activité.",
  },
  {
    icon: Smartphone,
    title: "Compatible mobile",
    description: "Un affichage impeccable sur téléphone, tablette et ordinateur.",
  },
  {
    icon: Target,
    title: "Structure pensée pour vos objectifs",
    description: "Des pages organisées pour informer, rassurer et inciter à vous contacter.",
  },
  {
    icon: MessagesSquare,
    title: "Accompagnement personnalisé",
    description: "Un échange direct et des conseils adaptés à votre projet, du début à la mise en ligne.",
  },
];

const EXPERTISES = [
  "Site vitrine",
  "Boutique Shopify",
  "Refonte de site",
  "Design responsive",
  "Expérience utilisateur",
  "Identité visuelle",
  "E-commerce",
  "Mise en ligne",
];

/* --------------------------------- Page --------------------------------- */

export default function Home({ navigate }: { navigate: NavigateFn }) {
  const openProject = (projectId: string) => navigate("realisations", { projectId });
  const previewProjects = PROJECTS.slice(0, 6);

  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="bg-grid-light relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div className="pointer-events-none absolute -top-40 right-[8%] h-96 w-96 rounded-full bg-accent-violet/15 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute top-64 -left-24 h-80 w-80 rounded-full bg-accent-blue/15 blur-[120px]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pt-36 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pt-44 lg:pb-28">
          <div className="animate-page-in">
            <Eyebrow>NexaWeb — Création digitale</Eyebrow>
            <h1 className="font-display mt-6 text-[2.6rem] leading-[1.08] font-bold tracking-tight text-balance text-ink-900 sm:text-6xl lg:text-[4.1rem]">
              Créons un site web qui donne envie de <span className="text-gradient">vous choisir</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              NexaWeb conçoit des sites web modernes, des boutiques Shopify et des expériences digitales adaptées à
              votre activité.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => navigate("services")}>Découvrir nos services</Button>
              <Button variant="secondary" onClick={() => navigate("realisations")}>
                Voir nos réalisations
              </Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-600">
              {["Design sur mesure", "Adapté à tous les écrans", "Accompagnement personnalisé"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-page-in px-2 sm:px-6 lg:px-0" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* =========================== BANDEAU EXPERTISES =========================== */}
      <section className="border-y border-ink-900/[0.06] bg-white py-5" aria-label="Nos expertises">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...EXPERTISES, ...EXPERTISES].map((expertise, index) => (
              <span key={`${expertise}-${index}`} className="flex items-center gap-10" aria-hidden={index >= EXPERTISES.length}>
                <span className="font-display text-sm font-semibold tracking-wide whitespace-nowrap text-ink-600/80">
                  {expertise}
                </span>
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-400" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CE QUE NOUS FAISONS ============================ */}
      <section className="px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ce que nous faisons"
            title={
              <>
                Tout ce qu'il faut pour développer votre <span className="text-gradient">présence en ligne</span>.
              </>
            }
            description="Site vitrine, boutique en ligne, refonte ou besoin spécifique : chaque projet est conçu sur mesure, avec le même niveau d'exigence."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICE_CARDS.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink-900/[0.07] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/25 hover:shadow-lift">
                  <span className="bg-brand-50 text-brand-600 group-hover:bg-brand-gradient flex h-13 w-13 items-center justify-center rounded-2xl transition-all duration-500 group-hover:text-white group-hover:shadow-glow">
                    <service.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-6 text-lg font-bold tracking-tight text-ink-900">{service.title}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-ink-600">{service.description}</p>
                  <button
                    type="button"
                    onClick={() => navigate("services")}
                    className="group/link mt-6 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                    aria-label={`En savoir plus sur : ${service.title}`}
                  >
                    En savoir plus
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ POURQUOI NEXAWEB ============================ */}
      <section className="bg-ink-900 bg-grid-dark relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="pourquoi-title">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-brand-600/25 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent-blue/15 blur-[120px]" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              align="left"
              eyebrow="Pourquoi NexaWeb"
              title={
                <>
                  Un site ne doit pas seulement <span className="text-gradient">être beau</span>.
                </>
              }
              description="Il doit présenter clairement votre activité, inspirer confiance et permettre à vos visiteurs de passer à l'action."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {ADVANTAGES.map((advantage, index) => (
                <Reveal key={advantage.title} delay={index * 90}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors duration-300 hover:border-brand-400/40 hover:bg-white/[0.07]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/25 text-brand-100">
                      <advantage.icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-4 text-[1.02rem] font-bold text-white">{advantage.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-100/65">{advantage.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="bg-brand-gradient absolute top-1/2 left-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[90px]" aria-hidden="true" />
            <SitePreview project={PROJECTS[1]} className="relative" />
            <PhonePreview project={PROJECTS[1]} className="absolute -right-3 -bottom-10 hidden sm:block lg:-right-6" />
            <div className="animate-float absolute -bottom-6 left-4 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lift" aria-hidden="true">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Target className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[11px] leading-tight font-bold text-ink-900">Pensé pour convertir</p>
                <p className="text-[10px] text-ink-600">Appels à l'action clairs</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== RÉALISATIONS ============================== */}
      <section className="bg-ink-50/60 px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="realisations-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Réalisations"
            title={
              <>
                Quelques <span className="text-gradient">projets</span>
              </>
            }
            description="Un aperçu de ce que nous pouvons créer pour vous. Les projets ci-dessous sont des démonstrations réalisées pour illustrer notre savoir-faire."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {previewProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 90}>
                <ProjectCard project={project} onOpen={openProject} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Button variant="dark" onClick={() => navigate("realisations")}>
              Voir toutes les réalisations
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ================================ MÉTHODE ================================ */}
      <section className="px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="methode-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Notre méthode"
            title={
              <>
                Un projet clair, <span className="text-gradient">de l'idée à la mise en ligne</span>.
              </>
            }
            description="Une démarche simple et transparente, en quatre étapes, pour avancer sereinement du premier échange à la publication de votre site."
          />

          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              className="absolute top-7 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-500/20 lg:block"
              aria-hidden="true"
            />
            {METHOD_STEPS.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 110} className="relative text-center">
                <span className="bg-brand-gradient font-display relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-glow">
                  {index + 1}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-ink-900">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] leading-relaxed text-ink-600">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ================================== FAQ ================================== */}
      <section className="bg-ink-50/60 px-4 py-24 sm:px-6 lg:px-8" aria-labelledby="faq-title">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title={
              <>
                Tout ce que vous vous demandez, <span className="text-gradient">avant de commencer</span>.
              </>
            }
          />
          <FaqAccordion />
          <Reveal className="mt-10 text-center">
            <p className="text-ink-600">Une autre question ? Écrivez-nous, nous vous répondrons avec plaisir.</p>
            <Button className="mt-5" onClick={() => navigate("contact")}>
              Poser ma question
            </Button>
          </Reveal>
        </div>
      </section>

      <div className="h-24" />
      <CTASection navigate={navigate} />
    </>
  );
}

/* ------------------------------- Accordéon FAQ ------------------------------- */

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 space-y-3">
      {FAQ_ITEMS.map((item, index) => {
        const open = openIndex === index;
        return (
          <Reveal key={item.question} delay={index * 60}>
            <div
              className={cn(
                "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                open ? "border-brand-500/30 shadow-soft" : "border-ink-900/[0.07]"
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-[1.02rem] font-semibold text-ink-900">{item.question}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    open ? "bg-brand-gradient rotate-180 text-white" : "bg-ink-50 text-ink-600"
                  )}
                >
                  <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
              </button>
              <div className={cn("grid transition-all duration-400 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-ink-600">{item.answer}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

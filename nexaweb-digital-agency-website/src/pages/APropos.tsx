import {
  ArrowRight,
  Check,
  Gem,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Monitor,
  RefreshCcw,
  Search,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { METHOD_STEPS, type NavigateFn } from "../data/content";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { Button, CTASection, SectionHeading } from "../components/ui";

const VALUES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Clarté avant tout",
    description:
      "Un bon site se comprend en quelques secondes. Nous privilégions les messages simples, les parcours évidents et les pages bien structurées.",
  },
  {
    icon: Gem,
    title: "Exigence du détail",
    description:
      "Typographie, espacements, cohérence visuelle : nous soignons chaque élément pour une image vraiment professionnelle.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité & écoute",
    description:
      "Chaque projet est unique. Nous prenons le temps de comprendre votre activité pour créer un site qui vous ressemble.",
  },
];

const PRINCIPLES = [
  "Nous commençons toujours par comprendre votre activité et vos clients.",
  "Nous concevons des sites rapides, lisibles et adaptés au mobile.",
  "Nous avançons par étapes claires, avec des échanges réguliers.",
  "Nous restons joignables par email, simplement et directement.",
];

const AUDIENCES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lightbulb,
    title: "Entrepreneurs & porteurs de projets",
    description: "Vous lancez votre activité et avez besoin d'une présence en ligne crédible dès le départ.",
  },
  {
    icon: Monitor,
    title: "Professionnels & indépendants",
    description: "Vous souhaitez présenter vos services clairement et faciliter la prise de contact.",
  },
  {
    icon: ShoppingBag,
    title: "Commerçants & marques",
    description: "Vous voulez vendre en ligne avec une boutique claire, rassurante et facile à parcourir.",
  },
  {
    icon: RefreshCcw,
    title: "Sites à moderniser",
    description: "Votre site actuel ne reflète plus votre activité : il est temps de lui offrir une seconde jeunesse.",
  },
];

export default function APropos({ navigate }: { navigate: NavigateFn }) {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            NexaWeb, une approche <span className="text-gradient">simple</span> du digital.
          </>
        }
        description="NexaWeb accompagne les professionnels, entrepreneurs et porteurs de projets dans la création de leur présence en ligne."
      />

      {/* ------------------------------ Mission ------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8" aria-label="Notre mission">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl leading-snug font-bold tracking-tight text-balance text-ink-900 sm:text-4xl">
              Notre objectif est simple : créer des expériences web <span className="text-gradient">modernes, claires et adaptées</span> à chaque projet.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Trop de professionnels disposent d'un site qui ne reflète pas la qualité de leur travail — ou n'en ont pas
              du tout. NexaWeb est né d'un constat simple : une présence en ligne soignée change la façon dont vos
              futurs clients vous perçoivent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Site vitrine, boutique Shopify ou refonte complète, nous concevons des sites qui présentent votre
              activité avec clarté, inspirent confiance et donnent envie de vous contacter.
            </p>
            <Button className="mt-8" onClick={() => navigate("services")}>
              Découvrir nos services
            </Button>
          </Reveal>

          <Reveal delay={140}>
            <div className="bg-ink-900 bg-grid-dark relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
              <div className="pointer-events-none absolute -top-16 right-0 h-48 w-48 rounded-full bg-brand-600/30 blur-[80px]" aria-hidden="true" />
              <h3 className="font-display relative text-lg font-bold text-white">Notre façon de travailler</h3>
              <ul className="relative mt-6 space-y-4">
                {PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 leading-relaxed text-ink-100/80">
                    <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {principle}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="font-display text-[1.05rem] leading-relaxed font-semibold text-white">
                  « Des sites modernes. Une image professionnelle. Des solutions adaptées à votre activité. »
                </p>
                <p className="mt-2 text-sm text-ink-100/55">— La signature NexaWeb</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Valeurs ------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-label="Nos valeurs">
        <SectionHeading
          eyebrow="Ce qui nous guide"
          title={
            <>
              Trois principes, <span className="text-gradient">à chaque projet</span>.
            </>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 100}>
              <article className="group h-full rounded-3xl border border-ink-900/[0.07] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-500/25 hover:shadow-lift">
                <span className="bg-brand-50 text-brand-600 group-hover:bg-brand-gradient flex h-13 w-13 items-center justify-center rounded-2xl transition-all duration-500 group-hover:text-white group-hover:shadow-glow">
                  <value.icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-ink-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-600">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ Méthode ------------------------------ */}
      <section className="bg-ink-50/60 px-4 py-24 sm:px-6 lg:px-8" aria-label="Notre méthode">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Notre méthode"
            title={
              <>
                Quatre étapes, <span className="text-gradient">zéro surprise</span>.
              </>
            }
            description="Un déroulé clair dès le départ : vous savez où en est votre projet à tout moment."
          />

          <ol className="relative mt-16 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[1.65rem] before:w-px before:bg-gradient-to-b before:from-brand-500/40 before:via-brand-500/15 before:to-transparent sm:before:left-1/2">
            {METHOD_STEPS.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 80}>
                <div className={`relative flex gap-6 sm:w-1/2 ${index % 2 === 0 ? "sm:pr-14" : "sm:ml-auto sm:pl-14"}`}>
                  <span
                    className={`bg-brand-gradient font-display z-10 flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-glow sm:absolute sm:top-0 ${
                      index % 2 === 0 ? "sm:-right-[1.65rem] sm:translate-x-1/2" : "sm:-left-[1.65rem] sm:-translate-x-1/2"
                    }`}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div className="flex-1 rounded-3xl border border-ink-900/[0.07] bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lift sm:p-7">
                    <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">Étape {index + 1}</p>
                    <h3 className="font-display mt-2 text-xl font-bold text-ink-900">{step.title}</h3>
                    <p className="mt-1 font-medium text-ink-700">{step.description}</p>
                    <p className="mt-2 leading-relaxed text-ink-600">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-14 text-center">
            <Button onClick={() => navigate("contact")}>
              Commencer par un premier échange
            </Button>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- Pour qui ? --------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="À qui s'adresse NexaWeb">
        <SectionHeading
          eyebrow="Pour qui ?"
          title={
            <>
              NexaWeb s'adresse <span className="text-gradient">à vous</span> si…
            </>
          }
          description="Que vous partiez de zéro ou que vous souhaitiez faire évoluer un site existant, il existe une solution adaptée à votre situation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {AUDIENCES.map((audience, index) => (
            <Reveal key={audience.title} delay={(index % 2) * 100}>
              <div className="flex h-full gap-5 rounded-3xl border border-ink-900/[0.07] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <span className="bg-brand-50 text-brand-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <audience.icon className="h-5.5 w-5.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink-900">{audience.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-600">{audience.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-brand-50 px-7 py-7 sm:flex-row sm:px-9">
          <p className="flex items-center gap-3 text-center font-medium text-ink-800 sm:text-left">
            <MessagesSquare className="hidden h-6 w-6 shrink-0 text-brand-600 sm:block" aria-hidden="true" />
            Vous vous reconnaissez dans l'une de ces situations ?
          </p>
          <button
            type="button"
            onClick={() => navigate("contact")}
            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-700 active:scale-[0.98]"
          >
            Parlons de votre projet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </Reveal>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

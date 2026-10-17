import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FlaskConical,
  Info,
  Layers,
  Palette,
  Smartphone,
  Target,
} from "lucide-react";
import { cn } from "../utils/cn";
import { PROJECTS, PROJECT_FILTERS, type NavigateFn, type Project, type ProjectFilter } from "../data/content";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { Button, CTASection } from "../components/ui";
import { PhonePreview, SitePreview } from "../components/Mockup";
import ProjectCard from "../components/ProjectCard";

type FilterKey = ProjectFilter | "tous";

interface RealisationsProps {
  navigate: NavigateFn;
  selectedProjectId?: string;
}

export default function Realisations({ navigate, selectedProjectId }: RealisationsProps) {
  const selectedProject = selectedProjectId ? PROJECTS.find((project) => project.id === selectedProjectId) : undefined;

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} navigate={navigate} />;
  }

  return <ProjectList navigate={navigate} />;
}

/* ------------------------------- Liste ------------------------------- */

function ProjectList({ navigate }: { navigate: NavigateFn }) {
  const [filter, setFilter] = useState<FilterKey>("tous");

  const filteredProjects = useMemo(
    () => (filter === "tous" ? PROJECTS : PROJECTS.filter((project) => project.filters.includes(filter))),
    [filter]
  );

  const countFor = (key: FilterKey) =>
    key === "tous" ? PROJECTS.length : PROJECTS.filter((project) => project.filters.includes(key)).length;

  const openProject = (projectId: string) => navigate("realisations", { projectId });

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Nos <span className="text-gradient">réalisations</span>
          </>
        }
        description="Sites vitrines, boutiques en ligne et refontes : explorez des exemples concrets de ce que NexaWeb peut créer pour votre activité."
      >
        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-left">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-amber-900">
            <strong className="font-semibold">En toute transparence :</strong> les projets présentés sur cette page sont
            des <strong className="font-semibold">projets de démonstration fictifs</strong>, créés pour illustrer notre
            savoir-faire. Ils ne correspondent pas à des clients réels.
          </p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" aria-label="Liste des projets">
        {/* Filtres */}
        <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filtrer les projets par type">
          {PROJECT_FILTERS.map((item) => {
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                aria-pressed={active}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full px-4.5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97]",
                  active
                    ? "bg-brand-gradient text-white shadow-glow"
                    : "border border-ink-900/10 bg-white text-ink-600 hover:border-brand-500/35 hover:text-ink-900"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[0.68rem] font-bold",
                    active ? "bg-white/20 text-white" : "bg-ink-50 text-ink-600"
                  )}
                >
                  {countFor(item.key)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grille */}
        <div key={filter} className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="animate-pop-in" style={{ animationDelay: `${index * 70}ms` }}>
              <ProjectCard project={project} onOpen={openProject} />
            </div>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl border border-ink-900/[0.07] bg-ink-50/70 px-6 py-10 text-center sm:px-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
            Vous imaginez déjà le vôtre ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-600">
            Chaque projet commence par un simple échange. Présentez-nous votre activité et vos idées, nous nous
            occupons du reste.
          </p>
          <Button className="mt-7" onClick={() => navigate("contact")}>
            Démarrer mon projet
          </Button>
        </Reveal>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

/* ------------------------------- Détail ------------------------------- */

function ProjectDetail({ project, navigate }: { project: Project; navigate: NavigateFn }) {
  const otherProjects = PROJECTS.filter((item) => item.id !== project.id).slice(0, 3);
  const openProject = (projectId: string) => navigate("realisations", { projectId });

  return (
    <>
      <section className="bg-grid-light relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[34rem] -translate-x-1/2 rounded-full opacity-15 blur-[100px]"
          style={{ backgroundColor: project.accent }}
          aria-hidden="true"
        />
        <div className="animate-page-in relative mx-auto max-w-6xl px-4 pt-36 pb-10 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("realisations")}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft transition-all duration-300 hover:border-brand-500/35 hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
            Retour aux réalisations
          </button>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white">
              <FlaskConical className="h-3.5 w-3.5 text-amber-300" aria-hidden="true" />
              Projet de démonstration
            </span>
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
            >
              {project.categoryLabel}
            </span>
            <span className="text-sm font-medium text-ink-600">{project.sector}</span>
          </div>

          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{project.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">{project.shortDescription}</p>

          <div className="relative mt-12 rounded-[2rem] bg-gradient-to-br from-brand-50 via-ink-50 to-white p-4 sm:p-8">
            <SitePreview project={project} large />
            <p className="mt-4 text-center text-xs font-medium tracking-wide text-ink-600/70">
              Aperçu du site — maquette de démonstration réalisée par NexaWeb
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8" aria-label="Détails du projet">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div>
            {/* Objectif */}
            <Reveal>
              <h2 className="font-display flex items-center gap-3 text-2xl font-bold tracking-tight text-ink-900">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ backgroundColor: project.accent }}>
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                L'objectif du projet
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.objective}</p>
            </Reveal>

            {/* Fonctionnalités */}
            <Reveal className="mt-12">
              <h2 className="font-display flex items-center gap-3 text-2xl font-bold tracking-tight text-ink-900">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ backgroundColor: project.accent }}>
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </span>
                Fonctionnalités mises en place
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 rounded-xl bg-ink-50/80 px-4 py-3 text-[0.95rem] text-ink-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Design */}
            <Reveal className="mt-12">
              <h2 className="font-display flex items-center gap-3 text-2xl font-bold tracking-tight text-ink-900">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ backgroundColor: project.accent }}>
                  <Palette className="h-5 w-5" aria-hidden="true" />
                </span>
                Le design
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{project.designNotes}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3" aria-label="Palette de couleurs du projet">
                {[
                  { color: project.accent, label: "Couleur principale" },
                  { color: project.dark ? "#0d1322" : "#ffffff", label: "Fond" },
                  { color: project.dark ? "#ffffff" : "#0a0f1e", label: "Texte" },
                ].map((swatch) => (
                  <span key={swatch.label} className="flex items-center gap-2 rounded-full border border-ink-900/[0.08] bg-white py-1.5 pr-3.5 pl-1.5 text-xs font-medium text-ink-700 shadow-soft">
                    <span className="h-5 w-5 rounded-full border border-ink-900/10" style={{ backgroundColor: swatch.color }} aria-hidden="true" />
                    {swatch.label} · {swatch.color}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-3xl border border-ink-900/[0.07] bg-white p-6 shadow-soft">
                <h2 className="font-display text-base font-bold tracking-tight text-ink-900">Informations du projet</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-ink-900">Type de projet</dt>
                    <dd className="mt-0.5 text-ink-600">{project.categoryLabel}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Secteur d'activité</dt>
                    <dd className="mt-0.5 text-ink-600">{project.sector}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Statut</dt>
                    <dd className="mt-0.5 text-ink-600">Projet de démonstration (fictif)</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Expertises mobilisées</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
                <Button className="mt-7 w-full" onClick={() => navigate("contact")}>
                  Un projet similaire ?
                </Button>
              </div>
            </Reveal>

            {/* Responsive */}
            <Reveal delay={180}>
              <div className="overflow-hidden rounded-3xl bg-ink-900 p-6">
                <h2 className="font-display flex items-center gap-2.5 text-base font-bold text-white">
                  <Smartphone className="h-5 w-5 text-brand-400" aria-hidden="true" />
                  Pensé pour le mobile
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-100/65">
                  Comme tous nos projets, ce site s'adapte à tous les écrans : navigation simplifiée, boutons tactiles et
                  contenus réorganisés pour le téléphone.
                </p>
                <div className="mt-6 flex justify-center">
                  <PhonePreview project={project} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Autres projets */}
        <div className="mt-20 border-t border-ink-900/[0.06] pt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Découvrir d'autres projets</h2>
            <button
              type="button"
              onClick={() => navigate("realisations")}
              className="group inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Toutes les réalisations
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otherProjects.map((other) => (
              <ProjectCard key={other.id} project={other} onOpen={openProject} />
            ))}
          </div>
        </div>
      </section>

      <CTASection navigate={navigate} />
    </>
  );
}

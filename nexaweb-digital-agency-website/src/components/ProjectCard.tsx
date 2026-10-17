import { ArrowRight, FlaskConical } from "lucide-react";
import type { Project } from "../data/content";
import { SitePreview } from "./Mockup";

interface ProjectCardProps {
  project: Project;
  onOpen: (projectId: string) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
      {/* Aperçu */}
      <button
        type="button"
        onClick={() => onOpen(project.id)}
        className="relative block cursor-pointer overflow-hidden bg-gradient-to-br from-ink-50 to-brand-50/60 p-4 pb-0 text-left sm:p-5 sm:pb-0"
        aria-label={`Voir le projet de démonstration ${project.name}`}
      >
        <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink-900/85 px-2.5 py-1 text-[0.68rem] font-semibold text-white backdrop-blur">
          <FlaskConical className="h-3 w-3 text-amber-300" aria-hidden="true" />
          Projet de démonstration
        </span>
        <div className="translate-y-3 transition-transform duration-500 ease-out group-hover:translate-y-1.5 group-hover:scale-[1.015]">
          <SitePreview project={project} className="rounded-b-none!" />
        </div>
      </button>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2.5 py-1 text-[0.7rem] font-bold"
            style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
          >
            {project.categoryLabel}
          </span>
          <span className="text-xs font-medium text-ink-600/70">{project.sector}</span>
        </div>

        <h3 className="font-display mt-3.5 text-xl font-bold tracking-tight text-ink-900">{project.name}</h3>
        <p className="mt-2 flex-1 text-[0.93rem] leading-relaxed text-ink-600">{project.shortDescription}</p>

        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="group/link mt-5 inline-flex w-fit cursor-pointer items-center gap-2 text-[0.93rem] font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Voir le projet
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

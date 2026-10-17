import type { ReactNode } from "react";
import { Eyebrow } from "./ui";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-grid-light relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-accent-violet/12 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

      <div className="animate-page-in relative mx-auto max-w-4xl px-4 pt-40 pb-16 text-center sm:px-6 lg:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-6 text-4xl leading-[1.12] font-bold tracking-tight text-balance text-ink-900 sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {description && <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">{description}</p>}
        {children}
      </div>
    </section>
  );
}

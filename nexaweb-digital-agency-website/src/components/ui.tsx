import type { ReactNode } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { cn } from "../utils/cn";
import { EMAIL, EMAIL_LINK, type NavigateFn } from "../data/content";
import Reveal from "./Reveal";

/* -------------------------------- Logo -------------------------------- */

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "bg-brand-gradient shadow-glow inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="white" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18V6l12 12V6" />
      </svg>
    </span>
  );
}

export function Logo({ dark = false, onClick }: { dark?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-2.5 text-left"
      aria-label="NexaWeb — retour à l'accueil"
    >
      <LogoMark className="transition-transform duration-300 group-hover:scale-105" />
      <span className={cn("font-display text-[1.35rem] font-bold tracking-tight", dark ? "text-white" : "text-ink-900")}>
        Nexa<span className="text-gradient">Web</span>
      </span>
    </button>
  );
}

/* ------------------------------- Boutons ------------------------------- */

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost-light" | "dark";
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  withArrow = true,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-brand-gradient text-white shadow-glow hover:shadow-lift hover:brightness-110 active:scale-[0.985]",
    secondary:
      "bg-white text-ink-900 border border-ink-900/10 shadow-soft hover:border-brand-500/40 hover:text-brand-600 active:scale-[0.985]",
    "ghost-light":
      "bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20 active:scale-[0.985]",
    dark: "bg-ink-900 text-white hover:bg-ink-700 shadow-soft active:scale-[0.985]",
  } as const;

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
      {withArrow && <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </button>
  );
}

/* ---------------------------- Badge / Tag ----------------------------- */

export function Eyebrow({ children, dark = false, className }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase",
        dark ? "border-white/15 bg-white/5 text-brand-100" : "border-brand-600/15 bg-brand-50 text-brand-700",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-accent-cyan" : "bg-brand-gradient")} aria-hidden="true" />
      {children}
    </span>
  );
}

/* --------------------------- Titre de section -------------------------- */

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, dark = false, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display mt-5 text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-ink-100/75" : "text-ink-600/90")}>{description}</p>
      )}
    </Reveal>
  );
}

/* ------------------------------ Section CTA ---------------------------- */

export function CTASection({ navigate }: { navigate: NavigateFn }) {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8" aria-label="Démarrer un projet">
      <Reveal className="mx-auto max-w-7xl">
        <div className="bg-ink-900 bg-grid-dark relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          {/* Halos décoratifs */}
          <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-brand-600/30 blur-[110px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 -bottom-32 h-72 w-72 rounded-full bg-accent-violet/25 blur-[110px]" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <Eyebrow dark>Un projet en tête ?</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Votre présence en ligne, pensée pour <span className="text-gradient">faire la différence</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-100/75 sm:text-lg">
              Un site à créer, une boutique à lancer ou un projet à moderniser ? Présentez-nous votre idée, nous vous
              répondrons par email.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button onClick={() => navigate("contact")}>Parler de mon projet</Button>
              <a
                href={EMAIL_LINK}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-[0.95rem] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 active:scale-[0.985]"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

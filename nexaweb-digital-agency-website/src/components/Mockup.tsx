import {
  Armchair,
  Building2,
  CarFront,
  CheckCircle2,
  Coffee,
  Dumbbell,
  Flower2,
  Hammer,
  Lock,
  ShoppingBag,
  Smartphone,
  Sofa,
  Star,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../utils/cn";
import type { MockupVariant, Project } from "../data/content";

const VARIANT_ICONS: Record<MockupVariant, LucideIcon> = {
  cafe: Coffee,
  shop: ShoppingBag,
  auto: CarFront,
  studio: Armchair,
  maison: Sofa,
  fitness: Dumbbell,
  immo: Building2,
  beaute: Flower2,
  atelier: Hammer,
};

const VARIANT_CTA: Record<MockupVariant, string> = {
  cafe: "Réserver",
  shop: "Panier",
  auto: "Rendez-vous",
  studio: "Devis",
  maison: "Boutique",
  fitness: "Essai gratuit",
  immo: "Estimer",
  beaute: "Commander",
  atelier: "Devis",
};

/* --------------------------- Blocs élémentaires -------------------------- */

function Bar({ className, dark, strong = false }: { className?: string; dark: boolean; strong?: boolean }) {
  return (
    <span
      className={cn("block rounded-full", strong ? (dark ? "bg-white/75" : "bg-ink-900/70") : dark ? "bg-white/20" : "bg-ink-900/15", className)}
      aria-hidden="true"
    />
  );
}

function ImgBlock({
  accent,
  Icon,
  className,
  iconClassName,
}: {
  accent: string;
  Icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden rounded-lg", className)}
      style={{ background: `linear-gradient(135deg, ${accent}55, ${accent}18 55%, ${accent}30)` }}
      aria-hidden="true"
    >
      <div className="absolute -right-3 -bottom-5 h-16 w-16 rounded-full opacity-25" style={{ backgroundColor: accent }} />
      <Icon className={cn("relative h-7 w-7 opacity-80", iconClassName)} style={{ color: accent }} strokeWidth={1.6} />
    </div>
  );
}

function ProductCard({ project, price }: { project: Project; price: string }) {
  const Icon = VARIANT_ICONS[project.variant];
  return (
    <div className={cn("rounded-lg p-1.5", project.dark ? "bg-white/5" : "bg-ink-900/[0.04]")} aria-hidden="true">
      <ImgBlock accent={project.accent} Icon={Icon} className="aspect-[4/3] w-full" iconClassName="h-5 w-5" />
      <Bar dark={project.dark} strong className="mt-2 h-1.5 w-4/5" />
      <div className="mt-1.5 flex items-center justify-between">
        <span className="text-[9px] font-bold" style={{ color: project.accent }}>
          {price}
        </span>
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full" style={{ backgroundColor: project.accent }}>
          <ShoppingBag className="h-2 w-2 text-white" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ Corps du site ----------------------------- */

function SiteBody({ project }: { project: Project }) {
  const { dark, accent, variant } = project;
  const Icon = VARIANT_ICONS[variant];

  if (variant === "shop" || variant === "maison" || variant === "beaute") {
    return (
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-end justify-between">
          <div>
            <Bar dark={dark} strong className="h-2 w-28" />
            <Bar dark={dark} className="mt-1.5 h-1.5 w-20" />
          </div>
          <span
            className="rounded-full px-2 py-1 text-[8px] font-bold text-white"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          >
            Nouvelle collection
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <ProductCard project={project} price="49 €" />
          <ProductCard project={project} price="79 €" />
          <ProductCard project={project} price="39 €" />
        </div>
      </div>
    );
  }

  if (variant === "auto") {
    return (
      <div className="px-4 pt-3 pb-4">
        <div className="relative overflow-hidden rounded-lg" style={{ background: `linear-gradient(120deg, ${accent}30, transparent 60%)` }}>
          <div className="p-3">
            <Bar dark={dark} strong className="h-2.5 w-32" />
            <Bar dark={dark} strong className="mt-1.5 h-2.5 w-20" />
            <Bar dark={dark} className="mt-2 h-1.5 w-24" />
            <span className="mt-2.5 inline-block rounded-full px-2 py-1 text-[8px] font-bold text-white" style={{ backgroundColor: accent }} aria-hidden="true">
              Voir les véhicules
            </span>
          </div>
          <CarFront className="absolute -right-1 bottom-1 h-16 w-16 opacity-70" style={{ color: accent }} strokeWidth={1.1} aria-hidden="true" />
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2" aria-hidden="true">
          {["Vente", "Entretien", "Reprise"].map((label) => (
            <div key={label} className="rounded-md bg-white/5 px-2 py-1.5 text-center text-[8px] font-semibold text-white/80">
              {label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "fitness") {
    return (
      <div className="px-4 pt-3 pb-4">
        <Bar dark={dark} strong className="h-3 w-36" />
        <Bar dark={dark} strong className="mt-1.5 h-3 w-24" />
        <div className="mt-3 space-y-1.5" aria-hidden="true">
          {[
            ["Cross training", "18h30"],
            ["Yoga doux", "12h15"],
            ["Musculation", "7j/7"],
          ].map(([label, time]) => (
            <div key={label} className="flex items-center justify-between rounded-md bg-white/5 px-2.5 py-1.5">
              <span className="flex items-center gap-1.5 text-[8.5px] font-semibold text-white/85">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
                {label}
              </span>
              <span className="text-[8px] font-bold" style={{ color: accent }}>
                {time}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "immo") {
    return (
      <div className="px-4 pt-3 pb-4">
        <Bar dark={dark} strong className="mx-auto h-2.5 w-40" />
        <div className="mx-auto mt-2.5 flex max-w-[85%] items-center gap-1.5 rounded-full border border-ink-900/10 bg-white p-1 shadow-sm" aria-hidden="true">
          <span className="ml-2 text-[8px] text-ink-900/40">Ville, type de bien…</span>
          <span className="ml-auto rounded-full px-2 py-1 text-[8px] font-bold text-white" style={{ backgroundColor: accent }}>
            Rechercher
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <ProductCard project={project} price="289 000 €" />
          <ProductCard project={project} price="415 000 €" />
          <ProductCard project={project} price="198 000 €" />
        </div>
      </div>
    );
  }

  if (variant === "studio") {
    return (
      <div className="px-4 pt-3 pb-4">
        <Bar dark={dark} strong className="h-3 w-44" />
        <Bar dark={dark} strong className="mt-1.5 h-3 w-28" />
        <div className="mt-3 grid grid-cols-5 gap-2">
          <ImgBlock accent={accent} Icon={Icon} className="col-span-3 aspect-[16/10] w-full" />
          <ImgBlock accent={accent} Icon={Armchair} className="col-span-2 aspect-auto w-full" iconClassName="h-5 w-5" />
        </div>
      </div>
    );
  }

  /* cafe + atelier : mise en page texte / visuel */
  return (
    <div className="grid grid-cols-2 gap-3 px-4 pt-3 pb-4">
      <div className="flex flex-col justify-center">
        <span
          className="inline-flex w-fit items-center gap-1 rounded-full px-1.5 py-0.5 text-[7.5px] font-bold"
          style={{ backgroundColor: `${accent}22`, color: accent }}
          aria-hidden="true"
        >
          {variant === "cafe" ? "★ Adresse gourmande" : "Savoir-faire artisanal"}
        </span>
        <Bar dark={dark} strong className="mt-2 h-2.5 w-full" />
        <Bar dark={dark} strong className="mt-1.5 h-2.5 w-2/3" />
        <Bar dark={dark} className="mt-2.5 h-1.5 w-4/5" />
        <Bar dark={dark} className="mt-1.5 h-1.5 w-3/5" />
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          <span className="rounded-full px-2 py-1 text-[8px] font-bold text-white" style={{ backgroundColor: accent }}>
            {variant === "cafe" ? "Voir le menu" : "Nos réalisations"}
          </span>
          <span className={cn("rounded-full border px-2 py-1 text-[8px] font-semibold", dark ? "border-white/25 text-white/80" : "border-ink-900/15 text-ink-700")}>
            Contact
          </span>
        </div>
      </div>
      <ImgBlock accent={accent} Icon={Icon} className="aspect-[4/3.4] w-full self-center" iconClassName="h-9 w-9" />
    </div>
  );
}

/* ------------------------- Aperçu navigateur du site ------------------------ */

export function SitePreview({ project, className, large = false }: { project: Project; className?: string; large?: boolean }) {
  const { dark, accent, name } = project;
  const Icon = VARIANT_ICONS[project.variant];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border text-left shadow-lift",
        dark ? "border-white/10" : "border-ink-900/10",
        className
      )}
      style={{ backgroundColor: dark ? "#0d1322" : "#ffffff" }}
      role="img"
      aria-label={`Aperçu du site de démonstration ${name}`}
    >
      {/* Barre du navigateur */}
      <div
        className={cn("flex items-center gap-2 border-b px-3 py-2", dark ? "border-white/10 bg-white/[0.04]" : "border-ink-900/[0.07] bg-ink-50")}
        aria-hidden="true"
      >
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
        <span
          className={cn(
            "mx-auto flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[8.5px] font-medium",
            dark ? "bg-white/[0.07] text-white/60" : "bg-white text-ink-600 shadow-sm"
          )}
        >
          <Lock className="h-2.5 w-2.5" />
          {project.id}.exemple.fr
        </span>
        <span className="w-8" />
      </div>

      {/* En-tête du site */}
      <div className="flex items-center justify-between px-4 pt-3" aria-hidden="true">
        <span className="flex items-center gap-1.5">
          <span className="flex h-4.5 w-4.5 items-center justify-center rounded-md" style={{ backgroundColor: accent }}>
            <Icon className="h-3 w-3 text-white" />
          </span>
          <span className={cn("font-display font-bold", large ? "text-sm" : "text-[11px]", dark ? "text-white" : "text-ink-900")}>{name}</span>
        </span>
        <span className="hidden items-center gap-2.5 sm:flex">
          <Bar dark={dark} className="h-1.5 w-7" />
          <Bar dark={dark} className="h-1.5 w-9" />
          <Bar dark={dark} className="h-1.5 w-7" />
        </span>
        <span className="rounded-full px-2 py-1 text-[8px] font-bold text-white" style={{ backgroundColor: accent }}>
          {VARIANT_CTA[project.variant]}
        </span>
      </div>

      <SiteBody project={project} />
    </div>
  );
}

/* ---------------------------- Aperçu téléphone ---------------------------- */

export function PhonePreview({ project, className }: { project: Project; className?: string }) {
  const { dark, accent, name } = project;
  const Icon = VARIANT_ICONS[project.variant];

  return (
    <div
      className={cn("w-40 overflow-hidden rounded-[1.6rem] border-[5px] shadow-lift", dark ? "border-ink-700" : "border-ink-900", className)}
      style={{ backgroundColor: dark ? "#0d1322" : "#ffffff" }}
      role="img"
      aria-label={`Version mobile du site de démonstration ${name}`}
    >
      <div className="px-3 pt-3 pb-4" aria-hidden="true">
        <div className={cn("mx-auto mb-2.5 h-1 w-10 rounded-full", dark ? "bg-white/20" : "bg-ink-900/15")} />
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded" style={{ backgroundColor: accent }}>
              <Icon className="h-2.5 w-2.5 text-white" />
            </span>
            <span className={cn("font-display text-[9px] font-bold", dark ? "text-white" : "text-ink-900")}>{name}</span>
          </span>
          <span className="space-y-0.5">
            <Bar dark={dark} strong className="h-0.5 w-3.5" />
            <Bar dark={dark} strong className="h-0.5 w-3.5" />
          </span>
        </div>
        <Bar dark={dark} strong className="mt-3 h-2 w-4/5" />
        <Bar dark={dark} strong className="mt-1 h-2 w-3/5" />
        <ImgBlock accent={accent} Icon={Icon} className="mt-2.5 aspect-[16/10] w-full" iconClassName="h-6 w-6" />
        <Bar dark={dark} className="mt-2.5 h-1.5 w-full" />
        <Bar dark={dark} className="mt-1 h-1.5 w-2/3" />
        <span className="mt-3 block rounded-full py-1.5 text-center text-[8px] font-bold text-white" style={{ backgroundColor: accent }}>
          {VARIANT_CTA[project.variant]}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------ Visuel du hero ----------------------------- */

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
      {/* Halo */}
      <div className="bg-brand-gradient absolute top-1/2 left-1/2 h-[110%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]" />

      {/* Fenêtre principale */}
      <div className="shadow-lift relative overflow-hidden rounded-2xl border border-ink-900/10 bg-white">
        <div className="flex items-center gap-2 border-b border-ink-900/[0.07] bg-ink-50 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className="mx-auto flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-[11px] font-medium text-ink-600 shadow-sm">
            <Lock className="h-3 w-3 text-emerald-500" />
            votre-entreprise.fr
          </span>
          <span className="w-10" />
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="bg-brand-gradient flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-bold text-white">V</span>
              <span className="font-display text-sm font-bold text-ink-900">Votre marque</span>
            </span>
            <span className="hidden gap-4 text-[11px] font-medium text-ink-600 sm:flex">
              <span>Accueil</span>
              <span>Services</span>
              <span>Galerie</span>
            </span>
            <span className="bg-brand-gradient rounded-full px-3 py-1.5 text-[11px] font-bold text-white">Contact</span>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-4">
            <div className="col-span-3 flex flex-col justify-center">
              <span className="w-fit rounded-full bg-brand-50 px-2 py-0.5 text-[9px] font-bold tracking-wide text-brand-700 uppercase">
                Bienvenue
              </span>
              <p className="font-display mt-2 text-lg leading-snug font-bold text-ink-900 sm:text-[1.35rem]">
                Votre activité, <span className="text-gradient">mise en valeur</span> en ligne.
              </p>
              <span className="mt-3 block h-2 w-4/5 rounded-full bg-ink-900/10" />
              <span className="mt-1.5 block h-2 w-3/5 rounded-full bg-ink-900/10" />
              <div className="mt-4 flex gap-2">
                <span className="bg-brand-gradient rounded-full px-3 py-1.5 text-[10px] font-bold text-white">Découvrir</span>
                <span className="rounded-full border border-ink-900/12 px-3 py-1.5 text-[10px] font-semibold text-ink-700">
                  Nos services
                </span>
              </div>
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-violet-100 to-blue-50">
              <div className="absolute -right-4 -bottom-6 h-24 w-24 rounded-full bg-brand-500/20" />
              <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-bold text-ink-800 backdrop-blur">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                Qualité premium
              </div>
              <ShoppingBag className="absolute right-4 bottom-4 h-12 w-12 text-brand-600/70" strokeWidth={1.3} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Design moderne", "100 % responsive", "Mise en ligne"].map((label) => (
              <div key={label} className="rounded-lg bg-ink-50 px-3 py-2.5">
                <span className="block h-1.5 w-2/3 rounded-full bg-ink-900/15" />
                <span className="mt-1.5 block text-[10px] font-semibold text-ink-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carte flottante — boutique */}
      <div className="animate-float shadow-lift absolute -top-5 -right-2 hidden w-44 rounded-2xl border border-ink-900/[0.07] bg-white p-3 sm:block lg:-right-8">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ShoppingBag className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[11px] leading-tight font-bold text-ink-900">Boutique Shopify</p>
            <p className="text-[10px] text-ink-600">Prête à vendre</p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between rounded-lg bg-ink-50 px-2 py-1.5">
          <span className="h-1.5 w-10 rounded-full bg-ink-900/15" />
          <span className="text-[10px] font-bold text-ink-900">59 €</span>
        </div>
      </div>

      {/* Carte flottante — responsive */}
      <div className="animate-float-slow shadow-lift absolute -bottom-6 -left-2 hidden items-center gap-2.5 rounded-2xl border border-ink-900/[0.07] bg-white px-3.5 py-3 sm:flex lg:-left-10">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Smartphone className="h-4.5 w-4.5" />
        </span>
        <div>
          <p className="text-[11px] leading-tight font-bold text-ink-900">Design responsive</p>
          <p className="text-[10px] text-ink-600">Mobile, tablette, ordinateur</p>
        </div>
      </div>

      {/* Carte flottante — mise en ligne */}
      <div
        className="animate-float shadow-lift absolute right-6 -bottom-5 hidden items-center gap-2 rounded-full border border-ink-900/[0.07] bg-white py-2 pr-4 pl-2.5 md:flex"
        style={{ animationDelay: "1.4s" }}
      >
        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        <span className="text-[11px] font-bold text-ink-900">Site mis en ligne</span>
      </div>
    </div>
  );
}

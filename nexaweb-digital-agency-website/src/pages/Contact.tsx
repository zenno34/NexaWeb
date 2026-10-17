import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageSquareText,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../utils/cn";
import { BUDGET_OPTIONS, EMAIL, EMAIL_LINK, PROJECT_TYPES } from "../data/content";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const NEXT_STEPS = [
  {
    title: "Vous envoyez votre demande",
    description: "Décrivez votre projet en quelques phrases, simplement, avec vos propres mots.",
  },
  {
    title: "Nous échangeons par email",
    description: "Nous revenons vers vous pour préciser vos besoins, vos objectifs et vos envies.",
  },
  {
    title: "Vous recevez une proposition adaptée",
    description: "Une solution claire, pensée pour votre activité et votre budget, sans engagement.",
  },
];

export default function Contact({ initialProjectType = "" }: { initialProjectType?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: initialProjectType,
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const buildMailtoLink = () => {
    const subject = `Demande de projet — ${form.projectType || "À définir"} — ${form.name}`;
    const body = [
      "Bonjour NexaWeb,",
      "",
      form.message,
      "",
      "---",
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      `Type de projet : ${form.projectType || "Non précisé"}`,
      `Budget indicatif : ${form.budget || "Non précisé"}`,
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {};
    if (form.name.trim().length < 2) newErrors.name = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      newErrors.email = "Merci d'indiquer une adresse email valide.";
    if (form.message.trim().length < 10)
      newErrors.message = "Décrivez votre projet en quelques mots (10 caractères minimum).";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    window.location.href = buildMailtoLink();
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de <span className="text-gradient">votre projet</span>.
          </>
        }
        description="Vous avez une idée, un site à créer ou un projet à améliorer ? Présentez-nous votre besoin."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" aria-label="Formulaire de contact">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          {/* ------------------------------ Formulaire ------------------------------ */}
          <Reveal>
            <div className="rounded-[2rem] border border-ink-900/[0.07] bg-white p-6 shadow-soft sm:p-9">
              {submitted ? (
                <div className="animate-pop-in py-6 text-center" role="status">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h2 className="font-display mt-6 text-2xl font-bold tracking-tight text-ink-900">
                    Votre demande est presque envoyée !
                  </h2>
                  <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-600">
                    Votre messagerie devrait s'ouvrir avec un message pré-rempli adressé à{" "}
                    <strong className="font-semibold text-ink-900">{EMAIL}</strong>. Il ne vous reste qu'à cliquer sur
                    « Envoyer » dans votre messagerie.
                  </p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600/80">
                    Si rien ne s'est ouvert, utilisez le bouton ci-dessous ou écrivez-nous directement par email.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={buildMailtoLink()}
                      className="bg-brand-gradient shadow-glow inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.985]"
                    >
                      <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                      Ouvrir ma messagerie
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ink-900/10 bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-ink-800 transition-all duration-300 hover:border-brand-500/35 active:scale-[0.985]"
                    >
                      <RotateCcw className="h-4.5 w-4.5" aria-hidden="true" />
                      Écrire un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-display flex items-center gap-3 text-xl font-bold tracking-tight text-ink-900">
                    <span className="bg-brand-50 text-brand-600 flex h-10 w-10 items-center justify-center rounded-xl">
                      <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    Décrivez-nous votre projet
                  </h2>
                  <p className="mt-2.5 leading-relaxed text-ink-600">
                    Quelques informations suffisent pour commencer. Votre demande sera envoyée à{" "}
                    <strong className="font-semibold text-ink-900">{EMAIL}</strong>.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Votre nom" required error={errors.name} htmlFor="contact-name">
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Ex. : Marie Dupont"
                          value={form.name}
                          onChange={(event) => update("name", event.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          className={inputClassName(Boolean(errors.name))}
                        />
                      </Field>

                      <Field label="Votre email" required error={errors.email} htmlFor="contact-email">
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="vous@exemple.fr"
                          value={form.email}
                          onChange={(event) => update("email", event.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          className={inputClassName(Boolean(errors.email))}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Type de projet" htmlFor="contact-type">
                        <div className="relative">
                          <select
                            id="contact-type"
                            name="projectType"
                            value={form.projectType}
                            onChange={(event) => update("projectType", event.target.value)}
                            className={cn(inputClassName(false), "appearance-none pr-11", !form.projectType && "text-ink-600/60")}
                          >
                            <option value="">Sélectionner…</option>
                            {PROJECT_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4.5 w-4.5 -translate-y-1/2 text-ink-600/60" aria-hidden="true" />
                        </div>
                      </Field>

                      <Field label="Budget indicatif" htmlFor="contact-budget">
                        <div className="relative">
                          <select
                            id="contact-budget"
                            name="budget"
                            value={form.budget}
                            onChange={(event) => update("budget", event.target.value)}
                            className={cn(inputClassName(false), "appearance-none pr-11", !form.budget && "text-ink-600/60")}
                          >
                            <option value="">Sélectionner…</option>
                            {BUDGET_OPTIONS.map((budget) => (
                              <option key={budget} value={budget}>
                                {budget}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4.5 w-4.5 -translate-y-1/2 text-ink-600/60" aria-hidden="true" />
                        </div>
                      </Field>
                    </div>

                    <Field label="Votre message" required error={errors.message} htmlFor="contact-message">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        placeholder="Bonjour, je souhaite créer un site pour mon activité de… Voici ce que j'imagine :"
                        value={form.message}
                        onChange={(event) => update("message", event.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        className={cn(inputClassName(Boolean(errors.message)), "resize-y")}
                      />
                    </Field>

                    <button
                      type="submit"
                      className="group bg-brand-gradient shadow-glow inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99] sm:w-auto sm:px-8"
                    >
                      Envoyer ma demande
                      <Send className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </button>

                    <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-600/75">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      En envoyant ce formulaire, votre messagerie s'ouvrira avec votre demande pré-remplie. Aucune
                      donnée n'est conservée sur ce site et l'échange est sans engagement.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* ---------------------------- Colonne latérale ---------------------------- */}
          <div className="space-y-6">
            <Reveal delay={120}>
              <div className="bg-ink-900 bg-grid-dark relative overflow-hidden rounded-[2rem] p-7 sm:p-8">
                <div className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-brand-600/35 blur-[70px]" aria-hidden="true" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/30 text-brand-100">
                  <Mail className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h2 className="font-display relative mt-5 text-xl font-bold text-white">Écrivez-nous directement</h2>
                <p className="relative mt-2 leading-relaxed text-ink-100/70">
                  Vous pouvez également nous écrire directement à :
                </p>
                <a
                  href={EMAIL_LINK}
                  className="group relative mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 font-semibold break-all text-white transition-all duration-300 hover:border-brand-400/50 hover:bg-white/[0.12]"
                >
                  {EMAIL}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
                <p className="relative mt-4 text-sm text-ink-100/55">
                  C'est notre unique moyen de contact : simple, direct et sans intermédiaire.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-[2rem] border border-ink-900/[0.07] bg-white p-7 shadow-soft sm:p-8">
                <h2 className="font-display text-lg font-bold tracking-tight text-ink-900">Ce qui se passe ensuite</h2>
                <ol className="mt-6 space-y-6">
                  {NEXT_STEPS.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="bg-brand-gradient font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-glow" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-ink-900">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="rounded-[2rem] bg-brand-50 p-7 sm:p-8">
                <h2 className="font-display text-lg font-bold tracking-tight text-ink-900">Pas encore sûr de votre besoin ?</h2>
                <p className="mt-2 leading-relaxed text-ink-600">
                  Aucun problème : décrivez simplement votre activité et ce que vous aimeriez accomplir en ligne. Nous
                  vous aiderons à y voir plus clair.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* --------------------------- Éléments de formulaire --------------------------- */

function inputClassName(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-600/45 transition-all duration-200",
    "focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none",
    hasError ? "border-red-300 bg-red-50/40" : "border-ink-900/12 hover:border-ink-900/25"
  );
}

function Field({
  label,
  htmlFor,
  required = false,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink-900">
        {label}
        {required && (
          <span className="ml-1 text-brand-600" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

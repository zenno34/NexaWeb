/* ------------------------------------------------------------------ */
/*  NexaWeb — Contenus du site                                         */
/*  Tous les projets présentés sont des projets de démonstration.      */
/* ------------------------------------------------------------------ */

export type PageKey = "accueil" | "services" | "realisations" | "apropos" | "contact";

export interface NavigateOptions {
  projectId?: string;
  projectType?: string;
}

export type NavigateFn = (page: PageKey, options?: NavigateOptions) => void;

export const EMAIL = "nexaweb34@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

/* ----------------------------- Projets ---------------------------- */

export type ProjectFilter = "vitrine" | "ecommerce" | "shopify" | "refonte";

export type MockupVariant = "cafe" | "shop" | "auto" | "studio" | "maison" | "fitness" | "immo" | "beaute" | "atelier";

export interface Project {
  id: string;
  name: string;
  categoryLabel: string;
  sector: string;
  filters: ProjectFilter[];
  shortDescription: string;
  objective: string;
  features: string[];
  designNotes: string;
  accent: string;
  dark: boolean;
  variant: MockupVariant;
  tags: string[];
}

export const PROJECT_FILTERS: { key: ProjectFilter | "tous"; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "vitrine", label: "Sites vitrines" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "shopify", label: "Shopify" },
  { key: "refonte", label: "Refonte" },
];

export const PROJECTS: Project[] = [
  {
    id: "urban-coffee",
    name: "Urban Coffee",
    categoryLabel: "Site vitrine",
    sector: "Café & restauration",
    filters: ["vitrine"],
    shortDescription:
      "Un site vitrine chaleureux pour un café fictif : menu, galerie et réservation de table en quelques clics.",
    objective:
      "L'objectif de cette démonstration : présenter l'univers d'un café de quartier, mettre la carte en avant et inciter les visiteurs à réserver ou à se rendre sur place.",
    features: ["Menu interactif par catégories", "Galerie photos plein écran", "Module de réservation", "Horaires et page d'accès", "Version mobile optimisée"],
    designNotes:
      "Une direction artistique chaude et éditoriale : tons café et crème, grandes typographies et beaucoup d'espace pour laisser respirer les visuels.",
    accent: "#d9903f",
    dark: true,
    variant: "cafe",
    tags: ["Site vitrine", "Responsive", "Réservation"],
  },
  {
    id: "modea",
    name: "Modea",
    categoryLabel: "Boutique e-commerce",
    sector: "Mode & accessoires",
    filters: ["ecommerce"],
    shortDescription:
      "Une boutique de mode fictive au design épuré, pensée pour mettre les collections en valeur et simplifier l'achat.",
    objective:
      "Cette démonstration explore un parcours d'achat fluide : découverte des collections, fiches produits claires et panier accessible à tout moment.",
    features: ["Catalogue avec filtres par taille et couleur", "Fiches produits détaillées", "Panier coulissant", "Sélection « nouveautés »", "Design pensé pour le mobile"],
    designNotes:
      "Un univers lumineux et minimaliste, où les produits occupent le premier plan. Accents rose poudré et typographie élégante.",
    accent: "#db2777",
    dark: false,
    variant: "shop",
    tags: ["E-commerce", "Catalogue produits", "Panier"],
  },
  {
    id: "autonova",
    name: "AutoNova",
    categoryLabel: "Site automobile",
    sector: "Automobile",
    filters: ["vitrine"],
    shortDescription:
      "Un site de présentation fictif pour un professionnel de l'automobile : véhicules, services et prise de rendez-vous.",
    objective:
      "L'idée de cette démonstration : rassurer et informer rapidement — catalogue de véhicules, prestations d'atelier et demande de rendez-vous en ligne.",
    features: ["Catalogue de véhicules filtrable", "Pages services détaillées", "Demande de rendez-vous en ligne", "Estimation de reprise", "Affichage rapide, même sur mobile"],
    designNotes:
      "Un design sombre et technique, inspiré des codes automobiles : contrastes forts, accent bleu électrique et visuels immersifs.",
    accent: "#38bdf8",
    dark: true,
    variant: "auto",
    tags: ["Site vitrine", "Catalogue", "Rendez-vous"],
  },
  {
    id: "studio-forma",
    name: "Studio Forma",
    categoryLabel: "Site professionnel",
    sector: "Architecture d'intérieur",
    filters: ["vitrine"],
    shortDescription:
      "Un portfolio fictif pour un studio d'architecture d'intérieur, où chaque projet raconte une histoire.",
    objective:
      "Cette démonstration met l'accent sur la présentation de réalisations : grandes images, descriptions détaillées et demande de devis simplifiée.",
    features: ["Portfolio filtrable par type de lieu", "Pages projets détaillées", "Présentation des prestations", "Formulaire de demande de devis", "Navigation fluide et élégante"],
    designNotes:
      "Un style éditorial très épuré : beige, blanc cassé et noir profond, grandes marges et typographie structurée comme une grille d'architecte.",
    accent: "#b08d57",
    dark: false,
    variant: "studio",
    tags: ["Portfolio", "Site vitrine", "Devis en ligne"],
  },
  {
    id: "maison-alba",
    name: "Maison Alba",
    categoryLabel: "Boutique Shopify",
    sector: "Décoration & maison",
    filters: ["shopify", "ecommerce"],
    shortDescription:
      "Une boutique Shopify fictive dédiée à la décoration, avec des collections par pièce et un achat en toute simplicité.",
    objective:
      "Cette démonstration Shopify montre comment organiser une boutique par univers — salon, chambre, cuisine — pour guider l'inspiration jusqu'à l'achat.",
    features: ["Configuration Shopify complète", "Collections par univers", "Fiches produits avec conseils", "Navigation claire et recherche", "Parcours d'achat optimisé mobile"],
    designNotes:
      "Une ambiance douce et naturelle : terracotta, lin et blanc chaud, photos d'ambiance et cartes produits aérées.",
    accent: "#c2703d",
    dark: false,
    variant: "maison",
    tags: ["Shopify", "Collections", "E-commerce"],
  },
  {
    id: "fitzone",
    name: "FitZone",
    categoryLabel: "Site de présentation",
    sector: "Sport & bien-être",
    filters: ["vitrine"],
    shortDescription:
      "Un site énergique et fictif pour une salle de sport : cours, planning et formules d'abonnement lisibles en un coup d'œil.",
    objective:
      "L'objectif de cette démonstration : donner envie de s'inscrire grâce à un planning clair, des formules comparables facilement et une séance d'essai mise en avant.",
    features: ["Planning des cours interactif", "Comparateur de formules", "Présentation des coachs", "Réservation de séance d'essai", "Design adapté aux écrans mobiles"],
    designNotes:
      "Un univers sombre et dynamique : noir profond, vert électrique, typographies puissantes et chiffres clés mis en scène.",
    accent: "#a3e635",
    dark: true,
    variant: "fitness",
    tags: ["Site vitrine", "Planning", "Abonnements"],
  },
  {
    id: "lumen-immobilier",
    name: "Lumen Immobilier",
    categoryLabel: "Refonte de site",
    sector: "Immobilier",
    filters: ["refonte"],
    shortDescription:
      "Exemple de refonte pour une agence immobilière fictive : d'un site daté à une expérience claire et moderne.",
    objective:
      "Cette démonstration illustre une refonte complète : nouvelle structure, recherche de biens simplifiée et image bien plus professionnelle.",
    features: ["Analyse de l'ancien site", "Nouvelle arborescence", "Recherche de biens par critères", "Fiches biens avec galerie", "Formulaire d'estimation"],
    designNotes:
      "Avant : pages chargées et navigation confuse. Après : interface claire, bleu nuit élégant et visuels des biens au centre de l'expérience.",
    accent: "#2563eb",
    dark: false,
    variant: "immo",
    tags: ["Refonte", "Recherche avancée", "UX repensée"],
  },
  {
    id: "pivoine",
    name: "Pivoine",
    categoryLabel: "Boutique Shopify",
    sector: "Beauté & soins",
    filters: ["shopify", "ecommerce"],
    shortDescription:
      "Une boutique Shopify fictive pour une marque de soins, douce et raffinée, centrée sur les rituels beauté.",
    objective:
      "Cette démonstration présente une boutique qui conseille autant qu'elle vend : produits regroupés par routine et guides d'utilisation intégrés.",
    features: ["Boutique Shopify sur mesure", "Produits par routine beauté", "Guides et conseils intégrés", "Avis produits mis en valeur", "Expérience mobile soignée"],
    designNotes:
      "Palette pastel violet et rose, formes douces et typographie délicate : un univers apaisant qui reflète l'univers des soins.",
    accent: "#9333ea",
    dark: false,
    variant: "beaute",
    tags: ["Shopify", "E-commerce", "Univers de marque"],
  },
  {
    id: "atelier-roux",
    name: "Atelier Roux",
    categoryLabel: "Refonte de site",
    sector: "Artisanat — menuiserie",
    filters: ["refonte"],
    shortDescription:
      "Exemple de refonte pour un artisan menuisier fictif : un savoir-faire enfin présenté à la hauteur de son travail.",
    objective:
      "Cette démonstration montre comment une refonte peut valoriser un artisan : réalisations en images, prestations clarifiées et demandes de devis facilitées.",
    features: ["Modernisation visuelle complète", "Galerie de réalisations", "Pages prestations restructurées", "Demande de devis guidée", "Adaptation mobile intégrale"],
    designNotes:
      "Matières et authenticité : tons bois et anthracite, grandes photos d'atelier et typographie sobre qui laisse parler le savoir-faire.",
    accent: "#92400e",
    dark: false,
    variant: "atelier",
    tags: ["Refonte", "Artisanat", "Galerie"],
  },
];

/* ----------------------------- Méthode ---------------------------- */

export const METHOD_STEPS = [
  {
    title: "Échange",
    description: "Comprendre votre activité et vos objectifs.",
    detail: "Nous commençons par discuter de votre projet, de vos clients et de ce que votre site doit accomplir.",
  },
  {
    title: "Conception",
    description: "Imaginer une structure et une identité adaptées.",
    detail: "Nous définissons les pages, l'organisation des contenus et une direction visuelle cohérente avec votre image.",
  },
  {
    title: "Création",
    description: "Développer le site et ses différentes fonctionnalités.",
    detail: "Votre site prend forme : design, intégration des contenus et mise en place des fonctionnalités prévues.",
  },
  {
    title: "Mise en ligne",
    description: "Finaliser et publier le projet.",
    detail: "Derniers ajustements, vérifications sur tous les écrans, puis publication de votre site.",
  },
];

/* ------------------------------- FAQ ------------------------------ */

export const FAQ_ITEMS = [
  {
    question: "Combien coûte la création d'un site web ?",
    answer:
      "Le budget dépend de votre projet : nombre de pages, fonctionnalités souhaitées, boutique en ligne ou site vitrine… Décrivez-nous votre besoin via le formulaire de contact, nous vous proposerons une solution adaptée à votre situation.",
  },
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "La durée varie selon la complexité du projet et la disponibilité de vos contenus (textes, photos, produits). Nous définissons ensemble un planning réaliste dès le début du projet.",
  },
  {
    question: "Mon site sera-t-il adapté aux téléphones ?",
    answer:
      "Oui. Chaque site que nous concevons est responsive : il s'adapte aux ordinateurs, tablettes et smartphones, car une grande partie de vos visiteurs navigue depuis un mobile.",
  },
  {
    question: "Je n'ai pas encore de textes ni d'images, est-ce un problème ?",
    answer:
      "Pas du tout. Nous vous aidons à structurer vos contenus et à définir ce qu'il faut préparer. L'essentiel est de présenter clairement votre activité et ce que vous proposez.",
  },
  {
    question: "Pouvez-vous refaire mon site actuel ?",
    answer:
      "Oui, la refonte fait partie de nos services. Nous analysons votre site existant, conservons ce qui fonctionne et repensons le design, la structure et l'expérience utilisateur.",
  },
  {
    question: "Comment démarrer un projet avec NexaWeb ?",
    answer:
      "C'est simple : remplissez le formulaire de la page Contact ou écrivez-nous directement par email. Présentez votre idée en quelques phrases, nous reviendrons vers vous pour en discuter.",
  },
];

/* ---------------------------- Formulaire -------------------------- */

export const PROJECT_TYPES = ["Site vitrine", "Boutique Shopify", "Boutique e-commerce", "Refonte de site", "Projet personnalisé", "Autre / je ne sais pas encore"];

export const BUDGET_OPTIONS = ["Moins de 1 000 €", "1 000 € – 3 000 €", "3 000 € – 5 000 €", "Plus de 5 000 €", "À définir ensemble"];

import { useCallback, useEffect, useState } from "react";
import { PROJECTS, type NavigateFn, type PageKey } from "./data/content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

const PAGE_TITLES: Record<PageKey, string> = {
  accueil: "NexaWeb — Création de sites web & Shopify",
  services: "Nos services — NexaWeb | Site vitrine, Shopify, refonte",
  realisations: "Réalisations — NexaWeb | Exemples de sites web et boutiques",
  apropos: "À propos — NexaWeb | Une approche simple du digital",
  contact: "Contact — NexaWeb | Parlons de votre projet web",
};

export default function App() {
  const [page, setPage] = useState<PageKey>("accueil");
  const [selectedProjectId, setSelectedProjectId] = useState<string | undefined>(undefined);
  const [presetProjectType, setPresetProjectType] = useState("");
  const [contactKey, setContactKey] = useState(0);

  const navigate: NavigateFn = useCallback((nextPage, options) => {
    setPage(nextPage);
    setSelectedProjectId(options?.projectId);
    if (nextPage === "contact") {
      setPresetProjectType(options?.projectType ?? "");
      setContactKey((key) => key + 1);
    }
  }, []);

  /* Retour en haut de page + titre du document à chaque navigation */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const project = selectedProjectId ? PROJECTS.find((item) => item.id === selectedProjectId) : undefined;
    document.title = project ? `${project.name} — Projet de démonstration | NexaWeb` : PAGE_TITLES[page];
  }, [page, selectedProjectId]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar currentPage={page} navigate={navigate} />

      <main className="flex-1">
        {page === "accueil" && <Home navigate={navigate} />}
        {page === "services" && <Services navigate={navigate} />}
        {page === "realisations" && <Realisations navigate={navigate} selectedProjectId={selectedProjectId} />}
        {page === "apropos" && <APropos navigate={navigate} />}
        {page === "contact" && <Contact key={contactKey} initialProjectType={presetProjectType} />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}

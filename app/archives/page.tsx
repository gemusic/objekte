"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ArchivesPage() {
  const archives = [
    {
      id: "01",
      title: "Le Purificateur Haute Précision",
      status: "Sélection Actuelle",
      summary: "La fin des bonbonnes à Cotonou. Une barrière de 7 couches entre le réseau et votre santé.",
      link: "/produit",
      cta: "Voir l'objet actuel"
    },
    {
      id: "00",
      title: "[PROCHAINEMENT]",
      status: "En cours de tests",
      summary: "Nous testons actuellement la durabilité et l'impact de notre prochaine sélection. Elle ne sera révélée que lorsqu'elle aura prouvé sa justesse.",
      link: "#",
      cta: null
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h1 className="text-3xl md:text-4xl font-playfair mb-6 leading-tight">La Cohérence du Temps.</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Chaque objet sélectionné par objekté est conçu pour rester pertinent, même après avoir quitté le devant de la scène. Voici la trace de nos recherches.
            </p>
          </div>

          <div className="space-y-20 md:space-y-32">
            {archives.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-12">
                  <span className="text-3xl md:text-4xl font-playfair text-[#E1E1E1] group-hover:text-[#1A1A1A] transition-colors">
                    {item.id}
                  </span>
                  <div className="flex-1 space-y-4 md:space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <h2 className="text-xl md:text-2xl font-playfair">{item.title}</h2>
                      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.1em] px-2 py-1 border border-[#E1E1E1] text-muted-foreground">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                      {item.summary}
                    </p>
                    {item.cta && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:opacity-60 transition-opacity"
                      >
                        {item.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 md:mt-48 pt-16 md:pt-24 border-t border-[#E1E1E1] space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.2em] mb-6">Accès aux consommables</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-8">
                Besoin d'une cartouche de rechange pour votre Purificateur ? Les composants essentiels de nos objets archivés restent disponibles pour garantir leur pérennité.
              </p>
              <button className="w-full sm:w-auto bg-[#1A1A1A] text-white px-8 py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors">
                Commander une cartouche — 5 000 FCFA
              </button>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-sm space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em]">Pourquoi un seul objet ?</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Le bruit est l'ennemi de la clarté. Nous ne présentons qu'une seule sélection à la fois pour vous garantir une attention totale et un contrôle qualité absolu. Une fois qu'un objet entre dans l'Archive, il laisse place à la prochaine solution essentielle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

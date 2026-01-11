"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-16 md:pb-24 px-6 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 md:mb-8"
        >
          Objet n°01 — Cotonou, Bénin
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl lg:text-7xl font-playfair tracking-tight mb-6 md:mb-8 max-w-4xl leading-tight"
        >
          LE PURIFICATEUR HAUTE PRÉCISION.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mb-10 md:mb-12 px-4"
        >
          L’assurance d’une eau pure à la source, sans l'effort des bonbonnes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[16/9] mb-12 md:mb-16 overflow-hidden rounded-sm"
        >
          <Image
            src="/images/product/img1.jpg"
            alt="Le Purificateur Haute Précision"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full md:w-auto px-4"
        >
          <Link
            href="/produit"
            className="w-full md:w-auto inline-flex justify-center items-center gap-4 bg-[#1A1A1A] text-white px-12 py-5 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors"
          >
            Sélectionner — 14 000 FCFA
          </Link>
        </motion.div>
      </section>

      {/* Manifeste Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-playfair mb-8 md:mb-12 leading-tight">
            Le filtre ultime dans un monde saturé.
          </h2>
          <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              À Cotonou, la qualité de l’eau et l’état des canalisations sont des variables que vous ne maîtrisez pas. La vétusté invisible des réseaux peut transformer un geste quotidien en un risque pour votre santé.
            </p>
            <p>
              <span className="text-foreground font-medium">objekté</span> n'est pas une boutique, c'est votre Majordome Moderne. Notre rôle est de filtrer le marché pour ne retenir qu'une seule solution. Nous ne vendons pas simplement un accessoire, mais la certitude d'offrir à votre famille une eau cristalline, sans odeur, directement à la source.
            </p>
          </div>
        </div>
      </section>

      {/* Promesse Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pilier 1</span>
              <h3 className="text-xl md:text-2xl font-playfair">L'Essentiel.</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Une technologie de filtration hybride à 7 couches. La membrane en céramique haute densité bloque les sédiments (rouille, boue, sable) tandis que le charbon actif absorbe le chlore et les métaux lourds. Rien de superflu, juste la performance pure.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pilier 2</span>
              <h3 className="text-xl md:text-2xl font-playfair">La Clarté.</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Libérez-vous de la manipulation pénible des bonbonnes de 25L et du coût des packs d'eau. Un investissement de 14 000 FCFA rentabilisé dès le premier mois d'utilisation. Le calme d'un esprit et d'un budget désencombrés.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pilier 3</span>
              <h3 className="text-xl md:text-2xl font-playfair">La Fiabilité.</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Une installation universelle en moins de 2 minutes, sans outils. Si le dispositif ne s’adapte pas à votre robinet ou si l’objet vous déçoit, nous reprenons le produit sous 24h. C'est notre engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistique Section */}
      <section className="py-20 md:py-32 px-6 border-t border-[#E1E1E1]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16">
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-6">Livraison Gratuite</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Uniquement à Cotonou. Chez vous aujourd'hui ou demain.
            </p>
          </div>
          <div className="max-w-md">
            <h3 className="text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-6">Stock Limité</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Nous ne gérons qu'un seul objet à la fois pour garantir une excellence de service absolue.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

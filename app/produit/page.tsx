"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductPage() {
  const images = [
    "/images/product/img1.jpg",
    "/images/product/img2.jpg",
    "/images/product/img3.jpg",
    "/images/product/img4.jpg",
    "/images/product/img5.png",
  ];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-32 space-y-4 md:space-y-8">
              <motion.div 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-[4/5] bg-white rounded-sm overflow-hidden"
              >
                <Image
                  src={images[activeImage]}
                  alt="Le Purificateur Haute Précision"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-5 gap-2 md:gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-square bg-white rounded-sm overflow-hidden border transition-colors ${
                      activeImage === idx ? "border-[#1A1A1A]" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt={`Vue ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Content */}
            <div className="space-y-16 md:space-y-24">
              {/* Header */}
              <div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                  Objet n°01
                </span>
                <h1 className="text-3xl md:text-5xl font-playfair mb-4 md:mb-6 leading-tight">
                  LE PURIFICATEUR HAUTE PRÉCISION.
                </h1>
                <p className="text-xl md:text-2xl font-playfair text-muted-foreground">
                  14 000 FCFA
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-16 md:space-y-24">
                {/* 1. LE CONSTAT FROID */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                    1. Le Constat Froid
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      À Cotonou, l’eau du réseau parcourt des canalisations dont l’état est souvent invisible et incertain. Résultat : un goût de chlore agressif, une présence de sédiments (rouille, boue, sable) et un risque sanitaire réel (calculs rénaux, impuretés bactériennes).
                    </p>
                    <p>
                      La dépendance aux packs d'eau minérale ou aux bonbonnes de 25L n'est pas une fatalité, c'est une charge financière et logistique qui encombre votre foyer.
                    </p>
                  </div>
                </div>

                {/* 2. LA RÉPONSE OBJEKTÉ */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                    2. La Réponse objekté
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>
                      Nous avons sélectionné ce purificateur pour sa capacité à transformer instantanément votre robinet en une source d'eau cristalline.
                    </p>
                    <ul className="space-y-6">
                      <li>
                        <strong className="text-foreground block mb-2">Technologie Hybride à 7 Couches :</strong>
                        Contrairement aux filtres basiques, cet objet combine une membrane en céramique haute densité (qui bloque les micro-particules) et un noyau en charbon actif de noix de coco (qui absorbe les odeurs et les produits chimiques).
                      </li>
                      <li>
                        <strong className="text-foreground block mb-2">Économie Radicale :</strong>
                        Un investissement unique de 14 000 FCFA remplace l'achat de plus de 200 packs d'eau de 1,5L. Le calcul est simple : le filtre est rentabilisé en moins de 30 jours.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. L'USAGE AU QUOTIDIEN */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                    3. L'Usage au Quotidien
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-6">
                      <li>
                        <strong className="text-foreground block mb-2">Installation sans outils :</strong>
                        Conçu pour être universel. Le kit inclus contient plusieurs adaptateurs pour s'ajuster à n'importe quel filetage (interne ou externe) de robinet standard à Cotonou. Installation en moins de 2 minutes.
                      </li>
                      <li>
                        <strong className="text-foreground block mb-2">Levier de Commutation Intelligent :</strong>
                        Un geste simple permet de basculer entre l'eau filtrée (pour boire et cuisiner) et l'eau brute (pour la vaisselle), prolongeant ainsi intelligemment la durée de vie de votre cartouche.
                      </li>
                      <li>
                        <strong className="text-foreground block mb-2">Maintenance Simplifiée :</strong>
                        La cartouche est lavable et réutilisable jusqu'à 6 mois. Si le débit diminue, il suffit de la frotter avec le papier de verre fourni pour qu'elle retrouve sa performance d'origine.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 4. FICHE TECHNIQUE & SANTÉ */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                    4. Fiche Technique & Santé
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-xs md:text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1 uppercase tracking-wider">Performance</p>
                      <p>Élimine 99% du chlore, des métaux lourds et des résidus de sédiments.</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1 uppercase tracking-wider">Santé</p>
                      <p>Préserve les minéraux essentiels tout en agissant comme un bouclier contre les maladies hydriques.</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1 uppercase tracking-wider">Matériaux</p>
                      <p>Plastique alimentaire ABS haute résistance et céramique naturelle.</p>
                    </div>
                  </div>
                </div>

                {/* 5. L'ENGAGEMENT LOGISTIQUE */}
                <div className="space-y-6 md:space-y-8">
                  <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                    5. L'Engagement Logistique
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>Livraison Gratuite : Uniquement dans la zone de Cotonou.</p>
                    <p>Contenu du coffret : 1 Purificateur, 1 Cartouche céramique, Kit complet d'adaptateurs, 1 Papier de verre d'entretien.</p>
                  </div>
                </div>
              </div>

              {/* 6. ACTION FINALE */}
              <div className="pt-8 md:pt-12 space-y-6">
                <Link
                  href="/paiement"
                  className="w-full inline-flex justify-center items-center gap-4 bg-[#1A1A1A] text-white px-12 py-6 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors"
                >
                  Commander l'Objet n°01 — 14 000 FCFA
                </Link>
                <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  Paiement via Mobile Money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

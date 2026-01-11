"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center pt-32 md:pt-48 pb-20 md:pb-32 px-6">
        <div className="max-w-xl w-full text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#1A1A1A] flex items-center justify-center">
              <Check strokeWidth={1} size={32} className="md:size-[40px]" />
            </div>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Objet n°01 : Sélection validée
            </span>
            <h1 className="text-3xl md:text-4xl font-playfair leading-tight">Merci pour votre confiance.</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed px-4">
              Votre paiement de 14 000 FCFA a été reçu avec succès. Vous avez choisi d'investir dans votre santé et votre confort quotidien.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-sm space-y-6 md:space-y-8 text-left mx-4">
            <div className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.2em] border-b border-[#E1E1E1] pb-4">
                Prochaine Étape
              </h2>
              <div className="space-y-4 md:space-y-6 text-xs md:text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Logistique :</strong> Un email détaillé vient de vous être envoyé à l'adresse fournie.
                </p>
                <p>
                  <strong className="text-foreground">Livraison :</strong> Notre service logistique prépare actuellement votre colis. Un livreur vous contactera par téléphone dans les 2 prochaines heures pour confirmer votre présence et finaliser la remise en main propre à Cotonou.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 px-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              Pour toute question urgente, notre concierge est disponible sur WhatsApp : <span className="text-foreground font-medium">[Ton Numéro]</span>
            </p>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 border border-[#1A1A1A] px-12 py-5 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Retour à la sélection
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

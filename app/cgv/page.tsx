import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CGV() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm prose-stone">
          <h1 className="text-4xl font-playfair mb-12">Conditions Générales de Vente</h1>
          
          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">1. Objet</h2>
              <p>Les présentes CGV régissent les ventes effectuées par objekté de l'Objet n°01 (Le Purificateur Haute Précision) et de toute sélection future aux clients résidant exclusivement à Cotonou, Bénin. Toute commande validée sur le site implique l'adhésion sans réserve aux présentes conditions.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">2. Produits et Disponibilité</h2>
              <p>objekté propose un seul objet à la fois pour garantir une qualité de service optimale. Nos offres sont valables tant qu'elles sont visibles sur le site et dans la limite des stocks disponibles. Les caractéristiques techniques sont présentées avec la plus grande précision possible sur la page "L'Examen".</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">3. Prix</h2>
              <p>Les prix sont indiqués en Francs CFA (FCFA) et sont nets. Le prix de l'Objet n°01 est fixé à 14 000 FCFA. La livraison à Cotonou est offerte gratuitement par objekté.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">4. Commande et Paiement</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Validation : La commande est ferme dès la validation du paiement électronique.</li>
                <li>Paiement : Seuls les paiements via Mobile Money (MTN MoMo, Moov Money) ou Cartes Bancaires sont acceptés.</li>
                <li>Absence de paiement à la livraison : Pour des raisons logistiques et de sécurité, aucune transaction en espèces ne sera effectuée lors de la remise du colis.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">5. Livraison (Cotonou Uniquement)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zone : Nous livrons exclusivement dans la zone urbaine de Cotonou.</li>
                <li>Délais : Toute commande passée avant 12h est livrée le jour même. Après 12h, la livraison intervient le lendemain matin.</li>
                <li>Modalités : Le client s'engage à être joignable sur le numéro de téléphone fourni lors de la commande pour coordonner la remise avec le livreur.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">6. Droit de Rétractation et Retours</h2>
              <p>Conformément à notre promesse "Sans Regret" :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Si l'objet présente un défaut de fabrication ou ne s'adapte pas à votre installation (malgré l'usage des adaptateurs fournis), vous disposez de 48 heures après la livraison pour demander un échange ou un remboursement.</li>
                <li>L'objet doit être retourné dans son emballage d'origine avec tous ses accessoires.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">7. Garantie et SAV</h2>
              <p>objekté assure un support technique via WhatsApp pour l'installation et l'entretien (nettoyage de la cartouche). La garantie ne couvre pas les dommages résultant d'une mauvaise manipulation ou d'un choc après livraison.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-foreground">8. Litiges</h2>
              <p>En cas de contestation, nous privilégions toujours une solution amiable. À défaut, les tribunaux de Cotonou seront seuls compétents.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

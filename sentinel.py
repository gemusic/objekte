

import smtplib
import sys
import json
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_universal_notification(data):
    # --- CONFIGURATION ---
    # Ces informations sont récupérées depuis les variables d'environnement de Vercel
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    sender_email = os.environ.get("SENDER_EMAIL", "gerernoscommandes@gmail.com")
    sender_password = os.environ.get("SENDER_PASSWORD", "sjui nygc otpy vwrp")
    receiver_email = os.environ.get("RECEIVER_EMAIL", "gerernoscommandes@gmail.com")

    # --- CONSTRUCTION DE L'EMAIL ---
    msg = MIMEMultipart()
    msg['From'] = f"SENTINELLE UNIVERSELLE <{sender_email}>"
    msg['To'] = receiver_email
    
    # Sujet dynamique (si vous envoyez 'form_name' dans votre formulaire, il sera utilisé)
    form_name = data.get('form_name', 'NOUVELLE SOUMISSION')
    msg['Subject'] = f"[{form_name}] Nouveau formulaire reçu"

    # --- GÉNÉRATION AUTOMATIQUE DU CORPS ---
    # Le script parcourt chaque clé du formulaire automatiquement
    body = f"ALERTE : RÉCEPTION DE DONNÉES ({form_name})\n"
    body += "="*45 + "\n\n"
    
    for key, value in data.items():
        if key != 'form_name': # On n'affiche pas le nom technique du formulaire
            # Transforme 'nom_complet' en 'Nom Complet' pour la lisibilité
            label = key.replace('_', ' ').title()
            body += f"{label} : {value}\n"
    
    body += "\n" + "="*45
    body += "\nAction : Traitement manuel requis."
    
    msg.attach(MIMEText(body, 'plain'))

    # --- ENVOI ---
    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)
        server.quit()
        print("Notification envoyée avec succès.")
    except Exception as e:
        print(f"Erreur d'envoi : {e}")

if __name__ == "__main__":
    # Le script lit les données envoyées par le site (en format texte JSON)
    if len(sys.argv) > 1:
        try:
            payload = json.loads(sys.argv[1])
            send_universal_notification(payload)
        except Exception as e:
            print(f"Erreur de lecture : {e}")


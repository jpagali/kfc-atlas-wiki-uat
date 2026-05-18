---
title: Paiements & Appels d'offres
description: Comment la plate-forme Atlas gère les paiements par carte, les bons, les appels d'offres partagés et les cartes-cadeaux d'une manière conforme aux ICP.
sidebar_label: Paiements & Appels d'offres
---

# Paiements & Appels d'offres

**What it does:** Gérez la façon dont les clients paient — cartes, bons, offres fractionnées et cartes-cadeaux — d'une manière conforme à l'IPC et résistante à la fraude.

**Why it matters:** Le paiement est le dernier obstacle aux revenus. Les paiements échoués ou les paiements insuffisants UX réduisent directement l'exécution de la commande. Ce domaine est également la plus haute zone de sécurité-sensibilité de la plateforme.

:::caution Byte Helium ne gère pas les données de carte
Le SDK PSP capture les données de carte directement — aucun PAN (numéro de carte) ne passe jamais par Byte Helium ou est stocké dans Atlas. Byte Helium ne gère que les jetons. Toute configuration de paiement (identifiants PSP, règles d'acheminement, polices de supplément) vit dans le portail Byte et la faille PSP.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Payez avec la carte** | Le client veut utiliser une carte de débit ou de crédit | Indique la carte et traite le paiement par l'entremise du PSP | PSP SDK gère la capture de carte (pas de PAN dans Byte Helium); jeton envoyé à Checkout Orchestrator; authentification 3DS au besoin | PSP / Vault, Orchestra de départ | Session de caisse valide | 3DS peut ajouter frottement; défaillance → réessayer ou interrupteur tendre | Taux de succès des paiements |
| **Payez avec la carte enregistrée** | Le client veut réutiliser une carte stockée | Listes des cartes sauvegardées; le client en choisit une pour le paiement | Jetons de carte sauvegardés récupérés de PSP Vault; jeton sélectionné utilisé dans l'intention de paiement | PSP / Vault | Client connecté; carte précédemment enregistrée | La carte ne doit pas être expirée; chambre forte gérée par PSP (pas Byte Helium) | Taux d'utilisation de la carte enregistrée |
| **Supprimer la carte enregistrée** | Le client veut supprimer une carte stockée | Supprime la carte des méthodes de paiement sauvegardées du client | Supprimer l'appel à PSP Vault via Byte Helium | PSP / Vault | Client connecté | Impossible d'annuler la suppression | Activités de gestion des fautes |
| **Payez avec un bon** | Le client a un bon numérique | Applique un code de bon comme paiement intégral ou partiel | Bon d'achat validé avec le service de bon d'achat; valeur jointe en tant qu'offre à la commande | Service de bons, Commander Orchestrator | Code du bon valide; non expiré ou remboursé | Les règles du bon varient selon le marché; validation côté serveur; double-dépense évitée (409) | Taux de remboursement du bon |
| **Appel d'offres échelonné (carte + bon)** | Le bon couvre une partie du projet de loi | Permet au client de payer le reste avec une carte après avoir appliqué un bon | Bon d'achat appliqué en premier; solde restant soumissionné par l'intention de paiement par carte | Service de bons, PSP, Commander Orchestrator | Chèque valide; session de caisse active | Séquençage d'appel d'offres géré par Orchestrator | Taux d'adjudication divisé |
| **Acheter un bon** | Le client veut acheter un bon numérique (cadeau) | Permet au client d'acheter un bon par carte | Paiement via PSP; bon généré et livré par courriel/SMS | Service du bon, PSP | Mode de paiement actif | Le flux d'achat du bon est compatible avec le marché; séparé de la commande | Volume des ventes des bons |
| **Renvoyer les détails de la carte-cadeau** | Le client a perdu son email de carte cadeau | Renvoye la livraison de la carte cadeau au contact enregistré du client | Appel à taux limité au service de carte cadeau; livré par canal configuré | Service de cartes-cadeaux, messagerie | Client connecté; carte cadeau achetée | Limite de taux par carte d'identité pour prévenir les abus | Taux de demande de renvoi |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Pay with Card / Split Tender</summary>

- **FRD References:** [FRD-HEL-016](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-016), [FRD-HEL-017](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-017), [FRD-HEL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-018)
- **TRD Domain:** Payments & Tenders
- **Key Interfaces / APIs:** Card Tokenise/Pay (PSP SDK), Voucher Apply/Redeem, Submit Payment Intent (Orchestrator)
- **Data Contracts:** PaymentIntent (amount, currency, tenders[]); TenderCard (token, scheme, 3dsStatus — no PAN in logs)
- **Source Summary:**
  - PCI-DSS compliant: SDK handles card capture; no PAN stored in Byte Helium or logs
  - 3DS supported; 3DS outcome tracked via telemetry
  - Auth capture success target: ≥99.5%
  - Voucher double-spend prevented via idempotency (409 returns original token)
  - Payment APIs: additive only, 180-day deprecation window (longest in platform — schema mandates apply)

</details>

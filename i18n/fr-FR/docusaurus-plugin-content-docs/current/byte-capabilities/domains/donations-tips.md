---
title: Dons et conseils
description: Comment la plateforme Atlas permet aux clients d'ajouter un don de bienfaisance ou un conseil de conducteur de livraison lors de la caisse.
sidebar_label: Dons et conseils
---

# Dons et conseils

**What it does:** Permet aux clients d'ajouter un don de bienfaisance (Ajouter Hope) ou un pourboire pour leur chauffeur de livraison pendant la caisse.

**Why it matters:** Add Hope est un programme de RSE important au niveau mondial. Les conseils améliorent la satisfaction des conducteurs et la perception de la qualité de la livraison. Tous deux exigent une manipulation soigneuse des paiements et un habilitation par marché.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| ** Dons supplémentaires** | Les clients veulent donner à une cause à la caisse | Permet au client d'ajouter un don à son total de commande | Service de don fournit des options de cause; le client choisit le montant ou arrondi; ligne de don ajoutée à la commande | Service de dons, PSP | Commande active; Add-Hope activé pour le marché | Le marché doit permettre Add-Hope; si le service de don échoue (5xx), don ignoré et ordre signalé | Taux de fixation du don, valeur moyenne du don |
| **Ajouter le tuyau du pilote de livraison** | Le client veut donner des conseils à son chauffeur | Permet au client d'ajouter un pourboire à sa commande de livraison | Le service de pointe fixe l'offre de pointe à la commande; peut être une capture PSP séparée | Service de conseils, PSP | Mode de livraison actif; commande en cours | Conseils disponibles uniquement pour les commandes de livraison; le conseil peut être une capture de paiement séparée | Taux de fixation de la pointe, valeur moyenne de la pointe |
| **Voir à propos d'ajouter l'espoir** | Le client veut savoir à quoi il fait don | Renforce la page d'information Add-Hope | Page CMS récupérée et rendue | Service CMS, Config de don | Aucune | Contenu géré en CMS — pas Byte Helium | Engagement des pages, conversion des dons |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Add-Hope Donation / Driver Tip</summary>

- **FRD References:** [FRD-HEL-022](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-022), [FRD-HEL-023](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-023), [FRD-HEL-073](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-073)
- **TRD Domain:** Donations & Tips
- **Key Interfaces / APIs:** Donation Config/Collect, Add Tip (Bearer auth)
- **Data Contracts:** DonationLine (amount, causeId); TipTender (amount, method)
- **Source Summary:**
  - Add-Hope market-enabled via Byte Portal configuration
  - Donation service failure (5xx): donation skipped, order tagged for reporting
  - Tip may be a separate PSP capture (market and PSP dependent)
  - Reporting fields required for compliance (donation amounts tracked)
  - APIs: additive changes only, 90-day deprecation

</details>

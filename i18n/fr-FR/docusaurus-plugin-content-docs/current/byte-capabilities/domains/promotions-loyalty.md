---
title: Promotions et fidélité
description: Comment la plateforme Atlas surpasse les offres personnalisées, gère les récompenses, suit les défis et connecte les comptes de fidélité à des commandes.
sidebar_label: Promotions et fidélité
---

# Promotions et fidélité

**What it does:** Surfaces offres personnalisées, gère les récompenses, suit les défis, et connecte le compte de fidélité du client à leurs commandes.

**Why it matters:** La loyauté et les promotions sont des leviers clés de revenus et de rétention. Toute offre fausse ou tout rachat raté érode la confiance. Ce domaine couvre l'intégralité du parcours client, de la découverte à l'achèvement de la commande.

:::caution L'éligibilité est toujours côté serveur
Byte Helium ne calcule jamais la promo ou récompense l'admissibilité localement. Toute l'évaluation d'admissibilité se produit dans le moteur Promo sur le serveur. Si une offre apparaît mais échoue à la rédemption, la correction est dans la configuration promo dans le portail Byte — pas dans Byte Helium.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Voir offres et récompenses localisées** | Le client doit découvrir les offres disponibles | Affiche des offres personnalisées pour le marché et le compte du client | Byte Helium fetches offre le flux de Promo Engine avec le contexte du marché + utilisateur; personnalisé si connecté | Promo Engine, Service de fidélité | Localisation terminée | Les utilisateurs non authentifiés voient des offres non personnalisées; offre alimentation p95 ≤200ms | Offres visites de page, offre taux de clic |
| **Loyalité à bord** | Les nouveaux clients ne sont pas au courant du programme de récompenses | Introduit le programme de fidélisation et favorise l'inscription | In-app flow guide le client à rejoindre; lié à la création de compte ou post-commande | Service de fidélité | Client connecté | Un programme de fidélisation doit être mis en place pour le marché | Taux de fidélisation |
| **Inscrivez-vous à Fidélité et Récompenses** | Le client veut rejoindre le programme de récompenses | Enrôle le client dans le programme de fidélité du marché | Appel d'inscription au service de fidélité; solde de points initialisé | Service de fidélité | Client connecté | Impossible de participer sans compte; les règles du programme varient selon le marché | Taux de fidélité |
| **Voir l'équilibre des points** | Loyalty Membre veut savoir combien de points ils ont | Affiche le solde actuel des points du client | Le service de fidélité retourne le solde des points avec les dates d'expiration | Service de fidélité | Client connecté et inscrit | La précision des points dépend de la synchronisation du service de fidélité | Taux d'engagement des points |
| **Voir toutes les récompenses** | Membre de fidélité veut parcourir les récompenses disponibles | Liste toutes les récompenses dans le catalogue avec le coût des points requis | Les récompenses du service de fidélité | Service de fidélité | Engagés dans la loyauté | Disponibilité des récompenses spécifiques au marché; le coût en points varie | Récompense les vues des pages |
| **Remboursez une récompense** | Le client veut utiliser des points gagnés | Conversion des points en une prime appliquée au panier | Appel de rédemption de récompense (idémpotent); jeton appliqué au chariot | Service de fidélité, service Cart | Balance des points suffisante; chariot actif | Prévenir la double rédemption (409); la récompense peut expirer | Taux de remboursement |
| **Voir et relever les défis** | Gamification entraîne des visites répétées | Afficher les défis les clients peuvent compléter pour les points bonus / récompenses | Flux de contestation du service de fidélité/gamification; suivi de l'achèvement | Service de fidélité/Gamification | Engagés dans la loyauté | Le marché doit avoir des défis configurés | Taux de participation au défi |
| **Récompenses reçues à l'occasion de l'anniversaire / inscription** | Les événements de fidélisation déclenchés conduisent les fiançailles | Récompense automatiquement les dates spéciales | Le service de fidélité déclenche des événements de subvention; le client est informé | Service de fidélité, plateforme Engagement | Enregistré; DOB capturé (pour anniversaire) | Nécessite des données de profil correctes; les contrôles de configuration du marché qui déclenchent sont actifs | Taux de la prime de rétribution, taux de l'ordre postérieur à la subvention |
| **Voir et gérer les préférences de communication** | Le client contrôle ses préférences marketing | Permet au client d'opter pour le courriel, la poussée, le marketing par SMS | CRM Prefs API read/write; piste de vérification maintenue; synchronisée avec CMP | CRM, CMP, fournisseur Push | Signé | Canaux spécifiques au marché; piste de vérification requise pour la conformité | Taux d'entrée par canal |
| **Message dans l'application (boîte de réception)** | Marque doit atteindre les clients dans l'application | Affiche un flux de messages personnalisés dans l'application des campagnes CRM | La plate-forme d'engagement fournit un flux de messages; des messages paginés; des liens profonds pris en charge | Plateforme de mobilisation | Signé (personnalisé) ou anonyme (mondial) | fraicheur du message ≤60s; les cibles de liaison profonde doivent être actives | Boîte de réception taux ouvert, message taux de clic |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Offers Feed / Reward Redemption</summary>

- **FRD References:** [FRD-HEL-019](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-019), [FRD-HEL-020](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-020), [FRD-HEL-021](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-021), [FRD-HEL-026](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-026), [FRD-HEL-031](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-031), [FRD-HEL-032](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-032), [FRD-HEL-033](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-033), [FRD-HEL-034](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-034), [FRD-HEL-035](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-035), [FRD-HEL-036](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-036), [FRD-HEL-037](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-037), [FRD-HEL-038](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-038), [FRD-HEL-039](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-039), [FRD-HEL-040](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-040), [FRD-HEL-041](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-041), [FRD-HEL-042](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-042), [FRD-HEL-043](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-043), [FRD-HEL-044](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-044)
- **TRD Domain:** Promotions & Loyalty
- **Key Interfaces / APIs:** Offers Feed (personalised), Validate/Apply Promo, Rewards Feed/Detail, Redeem Reward, Challenges Feed/Complete, Comms Prefs Get/Update
- **Data Contracts:** Offer (id, title, eligibility, value); Reward (id, cost, expiry); Prefs (channel, status, timestamp)
- **Source Summary:**
  - Eligibility always server-side — Byte Helium never computes eligibility locally
  - Offers feed p95: ≤200ms; reward redemption p99: ≥99.8%
  - Idempotency on redemption (409 returns original token — no double-spend)
  - Expired offer (410): hidden and user notified
  - Promo/Loyalty APIs: additive changes only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers find deals and rewards in the front-end → [Find Deals and Rewards](/docs/frontend/customer-journey/find-deals-and-rewards/)
- Creating and managing promotions in Byte Portal → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Store Groups](/docs/admin-portal-guide/store-groups/)
- Step-by-step promotion guides → [Playbooks: Promotions Setup Guide](/docs/playbooks/promotions-setup-guide) and [Promotion Recipes](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo)
:::

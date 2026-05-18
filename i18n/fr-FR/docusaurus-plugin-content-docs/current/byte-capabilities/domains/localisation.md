---
title: Mode Localisation & Commande
description: Comment la plate-forme détecte le marché du client, définit leur langue et leur permet de choisir la livraison ou la collecte.
sidebar_label: Mode Localisation & Commande
---

# Mode Localisation & Commande

**What it does:** Détecte le marché et la langue du client, lui permet de choisir la façon dont il veut commander (livraison ou collecte), et choisit son adresse de magasin ou de livraison.

**Why it matters:** Chaque expérience ultérieure — menu, prix, promotions, checkout — dépend du contexte du marché correctement établi. Se tromper signifie que les clients voient le mauvais menu, les mauvais prix, ou ne peuvent pas vérifier du tout.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Démarrer la localisation** | Les clients doivent être jumelés au bon marché | Détecte le marché du client via géo-IP ou sélection explicite; définit local | App calls Config service → obtient des marchés disponibles; Géo service résout emplacement → marché confirmé | Service géo, Service Config, Service contextuel | Le marché doit être configuré dans le portail Byte | Contexte fetch doit être ≤150ms p95; la détection du marché peut échouer si géo bloqué | Taux de réussite de la localisation, taux de décrochage |
| **Mode d'ordre de la commande — Collection** | Le client veut prendre un magasin | Permet aux clients de rechercher et sélectionner un magasin KFC pour la collection | Le client sélectionne store → store ID stocked in session context | Localisateur de magasins, Service contextuel | A conserver actif et ouvert | Impossible de collecter auprès de magasins fermés ou limités | Taux de recouvrement |
| **Mode de commande de la commande — Livraison** | Le client veut de la nourriture livrée | Permet au client d'entrer une adresse de livraison et valide la couverture | Le client entre l'adresse → contrôle de couverture → zone de livraison confirmée | Service géo, service de couverture, service contextuel | Store avec couverture de livraison doit être disponible | Pas de repli si aucun magasin ne couvre l'adresse; la couverture varie selon le marché | Taux de livraison, taux de couverture |
| **Trouver un KFC (Locateur de magasins)** | Le client veut trouver son restaurant le plus proche | Affiche une carte/liste des magasins KFC avec heures, distance et caractéristiques | Localisateur de magasin d'appels avec emplacement du client; retour de la liste des magasins avec statut et heures | Localisateur de magasins, Fournisseur de cartes, Données de magasins | Autorisation GPS/localisation ou entrée manuelle de l'adresse | Heures de trading gérées dans le portail Byte; l'état en temps réel (ouvert/fermé) doit être précis | Engagement du localisateur |
| **Voir et modifier les adresses enregistrées** | Les clients enregistrés veulent réutiliser les adresses de livraison | Affiche les adresses enregistrées et permet aux clients de les modifier ou de les supprimer | Fetches liste d'adresses du service Adresse; mises à jour écrites en arrière | Service d'adresse | Le client doit être | Non disponible pour les utilisateurs invités | Taux d'enregistrement de l'adresse, vitesse de départ |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Start Localisation</summary>

- **FRD References:** [FRD-HEL-005](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-005), [FRD-HEL-082](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-082)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Locale Config, Geo Resolve Market, Set Fulfilment Mode
- **Data Contracts:** Context (market, language, mode, storeId — signed context IDs)
- **Source Summary:**
  - Context persisted per user/device; signed for integrity
  - p95 fetch target: ≤150ms
  - Fallback: if coverage unavailable (5xx), offer collection mode with error telemetry
  - Context API: backward compatible minor, 90-day deprecation
  - Market config owned by Byte Portal / Shared Catalogues

</details>

<details>
<summary>📎 Technical Source: Set Order Mode — Delivery</summary>

- **FRD References:** [FRD-HEL-007](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-007)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Set Fulfilment Mode, Coverage Check, Address Validate
- **Data Contracts:** Context (mode=delivery, storeId, coverageZoneId)
- **Source Summary:**
  - Coverage check runs before mode is confirmed
  - Failure (no coverage): user offered collection mode instead
  - Context signed and persisted across session
  - Delivery tracking availability is market-dependent (optional)
  - Trading hours from Byte Portal Stores module must be accurate

</details>

---

:::tip See it in the wiki
- Customer-facing store locator and order mode flows → [Find a Store](/docs/frontend/customer-journey/find-a-store/) and [Setup Order](/docs/frontend/customer-journey/setup-order/)
- Configuring store hours and coverage in Byte Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
:::

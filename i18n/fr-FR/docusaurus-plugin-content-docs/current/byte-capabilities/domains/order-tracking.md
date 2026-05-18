---
title: Suivi et historique des commandes
description: Comment la plateforme Atlas permet aux clients de voir l'état de livraison, de voir les commandes passées, de réorganiser et d'accéder aux reçus.
sidebar_label: Suivi et historique des commandes
---

# Suivi et historique des commandes

**What it does:** Permet aux clients de voir où se trouve leur livraison, voir les commandes passées, réorganiser et accéder aux reçus.

**Why it matters:** L'expérience post-commande façonne les NPS et répète le taux d'achat. Le suivi en temps réel réduit les contacts du service à la clientèle. L'historique de l'ordre conduit à réorganiser le comportement.

:::warning Le suivi en temps réel est facultatif sur le marché
Le suivi en direct de la livraison GPS est **pas automatiquement disponible** pour chaque marché. Elle nécessite une intégration avec un fournisseur de logistique tiers. Sans cette intégration, les clients ne voient que le statut de la commande POS (accepté/prêt/achevé). Ceci doit être décidé et configuré avant de passer à l'action.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| ** Suivi des ordres de livraison** | Le client veut savoir quand la nourriture arrive | Affiche l'état de livraison en temps réel et l'heure d'arrivée estimée | Tracking Gateway fournit des événements de livraison et ETA; sondage ou poussé selon le marché | Service de suivi des commandes, logistique 3P (facultatif) | Commande de livraison passée | Le suivi en temps réel est facultatif par marché; le repli est le statut de la commande POS | Suivi du taux d'engagement, les contacts CS évités |
| ** Ordre de livraison reçu** | La commande de confirmation des besoins du client est reçue | Affiche l'écran confirmé avec les étapes suivantes | Livraison Confirmer l'événement du suivi; confirmation rendue | Service de suivi des commandes | Commande passée | Sans objet | Taux de confirmation de commande |
| **Voir l'historique des commandes** | Client enregistré veut voir les commandes passées | Liste toutes les commandes précédentes avec dates, éléments et totaux | Service des commandes retourne la liste paginée des commandes de l'utilisateur | Service des commandes | Client connecté | Commandes des clients non accessibles via l'historique | Taux d'engagement de l'historique des commandes |
| **Voir les détails de la commande / reçu** | Le client veut voir ce qu'il a commandé et payé | Affiche la ventilation complète de la commande avec le reçu détaillé | Détails de commande récupérés; reçu rendu du service de réception; lien CDN disponible | Service des commandes, service de réception | Signé; ordre complété | Les commandes des clients peuvent être envoyées par e-mail reçu seulement | Taux d'accès reçu |
| **Commander à nouveau** | Le client veut répéter une commande préférée | Repopule chariot avec des articles d'une commande passée et commence la commande | Commande précédente récupérée; éléments disponibles ajoutés au nouveau panier | Service de commandes, service de chariot, service de menu | Signé; ordre antérieur existe | Les éléments supprimés du menu actuel sont exclus avec avertissement | Taux de réorganisation |
| **Ordres préférés** | Le client a un bon de commande | Permet au client d'enregistrer et d'accéder rapidement à une configuration de commande préférée | Favoris sauvegardés sur le profil du client; chargés dans le chariot sur demande | Service des commandes, service du chariot | Signé | Les favoris sont liés au compte — pas disponible pour les invités | Taux d'épargne préférentiel, réordre-from-favourite |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Delivery Tracking / Order History</summary>

- **FRD References:** [FRD-HEL-024](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-024), [FRD-HEL-025](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-025), [FRD-HEL-052](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-052), [FRD-HEL-053](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-053), [FRD-HEL-054](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-054), [FRD-HEL-055](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-055), [FRD-HEL-056](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-056)
- **TRD Domain:** Order Tracking (Delivery)
- **Key Interfaces / APIs:** Order List (paginated), Order Detail, Delivery Events/ETA (poll/push), Receipt Render
- **Data Contracts:** Order (id, status, items[], totals); DeliveryEvent (ts, type, eta); Receipt (url, type, amount)
- **Source Summary:**
  - Tracking availability target: 99.9%
  - Real-time tracking optional per market; 3P logistics integration market-dependent
  - Event gap fallback: POS order status used; sequence IDs tracked for telemetry
  - Order list p95: ≤200ms
  - Orders/Tracking APIs: additive only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers track their delivery in the front-end → [Track Order: Delivery](/docs/frontend/customer-journey/track-order/delivery) and [Pickup](/docs/frontend/customer-journey/track-order/pickup)
:::

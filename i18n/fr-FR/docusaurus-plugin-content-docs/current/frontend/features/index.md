---
title: Caractéristiques Aperçu
sidebar_position: 1
---

# Caractéristiques

Cette section documente chaque capacité intégrée à la plateforme Atlas de la KFC. Chaque fonctionnalité a sa propre page dédiée couvrant ce qu'elle fait, comment elle se comporte à travers les plateformes, et toute considération spécifique au marché.

## Qu'est - ce qui compte comme caractéristique?

Une caractéristique d'Atlas est une capacité distincte, orientée vers l'utilisateur ou vers l'opérateur qui :

- Fournit un produit spécifique ou une valeur opérationnelle
- A défini le comportement sur iOS, Android et Web
- Peut être activé, configuré ou étendu par marché

## Caractéristiques actuelles

| Fonctionnalité | Désignation des marchandises | Plateformes |
|---|---|---|
| [KFC Deeplink \ | Lien universel](./KFC-deeplink-universal-link) | Ouvrez le contenu spécifique de KFC directement dans l'application via n'importe quelle URL de KFC | iOS, Android, Web |
| [Branche Deeplink](./branch-deeplink) | Attribution-connaissez la liaison profonde et l'acheminement différé via Branch.io | iOS, Android |
| [MarTech](./martech) | Suivi des événements, données clients et intégrations d'automatisation marketing | iOS, Android, Web |
| [Connexion sociale](./social-sign-in) | Connexion Google, Facebook et Apple sur le web et l'application native | iOS, Android, Web |
| [Réservation de l'élément de menu](./menu-item-reservation) | Permettre aux clients de pré-commander et réserver des éléments de menu spécifiques à l'avance | iOS, Android, Web |

:::info
Les fonctionnalités sont activées par marché via la configuration — pas des déploiements de code séparés. Voir[Configurations du marché](/docs/frontend/market-configurations)pour plus de détails.
:::

## Dépendances des caractéristiques

Chaque caractéristique d'Atlas est conçue pour être réutilisable sur tous les marchés. Cela dit, certaines caractéristiques peuvent avoir des dépendances sur des systèmes tiers — comme le point de vente (POS) ou le système de gestion de la livraison (DMS) d'un marché — et nécessiteront une évaluation de l'intégration avant qu'ils ne puissent aller en vie.

Menu Item La réservation est un exemple : tout flux de réservation spécifique au marché dépend des API stock et timeslot du système de point de vente ou d'inventaire pertinent. Les marchés sans support API équivalent de leur POS devraient compléter cette intégration avant que la fonctionnalité puisse être activée.

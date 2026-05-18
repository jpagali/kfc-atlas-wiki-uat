---
title: Référence du moteur de commerce
description: Ce que fait l'Atlas Commerce Backend, sa ventilation de domaine, et les contrats de données clés.
sidebar_label: Aide au commerce
---

# Référence des caractéristiques

> Le Commerce Backend est invisible pour les clients mais orchestre tout ce qui se passe entre les systèmes front-end et en magasin.

---

## Ce qu'il fait

Le DOC Backend est le moteur qui traite chaque commande numérique passée sur la plateforme Atlas. Il s'occupe de la création et de l'entretien des chariots, du calcul des prix et de la taxe, de l'autorisation de paiement et de la saisie, de la gestion des commandes, de l'injection de POS/KDS, de l'ingestion des commandes d'agrégateurs et de la liaison des comptes clients.

Byte Helium n'ordonne jamais directement les commandes — il envoie des demandes à Commerce Backend, et Commerce Backend gère le résultat.

:::note Octet POS Cavat
Byte Commerce est branché pour parler directement à **Byte POS**. Si un marché n'utilise pas Byte POS, **Byte Connect** est requis comme pont entre Byte Commerce et le marché POS, et devrait être traité comme faisant partie de Byte Commerce à bord.
:::

---

## Aperçu du domaine Commerce Backend

| Domaine TRD | Ce qu'il fait | Détenu par |
|---|---|---|
| Commande & Cart Cycle de vie | Création de chariot, maintenance, prix, commande machine d'état | Produits d'appui au commerce & Ingénierie |
| Menu Consommation, prix et taxes | Disponibilité du menu, prix dynamique, calcul de la taxe, application promo | Menu & Tarifs d'octets |
| Paiements et remboursements | Paiement auth, saisie, traitement des remboursements, intégration PSP | Paiements de soutien au commerce |
| Comptes clients & Auth | Identité via OIDC/OAuth2; profil client | Plateforme client Byte |
| Préférences & Liens de fidélité | Favoris, lien de compte de fidélité, suivi du consentement | Plateforme client / fidélité |
| Intégration POS / KDS | Commandez l'injection aux systèmes en magasin; synchronisation de l'état; les marchés de POS non-octets passent par Byte Connect | Aide au commerce + Opérations |
| Intégration de l'agrégateur | ingestion normalisée d'Uber Manger, DoorDash, etc. | Commerce Backend + Byte Connect |
| Migration des données | Migrer les clients et l'historique des commandes | Outillage de migration / Plateforme client |
| Observabilité | Exploitation forestière, recherche, santé, mesures | Plateforme / SRE |

---

## Commerce Backend Principaux contrats de données

Ce sont les contrats de données en version (DCI — Data Contracts & Interfaces) qui régissent la communication des services à travers la plateforme.

| ID du contrat | Ce qu'il décrit |
|---|---|
| DCI#BCOM-Cart-API-v1 | Structure du chariot: lignes, totaux, avantages |
| DCI#BCOM-Ordonnance-API-v1 | Enregistrement de commande : items, état, totaux, clé idempotency |
| DCI#BCOM-Menu-Projection-v1 | Données de menu projetées pour le stockage/canal |
| DCI#BCOM-Pricing-API-v1 | Demande de prix/réponse avec ventilation fiscale |
| DCI#BCOM-POS-Ordonnance-API-v1 | Commander la charge utile envoyée aux systèmes POS |
| DCI#BCOM-KDS-Order-Event-v1 | Événement de ticket KDS avec panne d'élément/poste |
| DCI#BCOM-Ordre-Statut-Événement-v1 | Mises à jour de l'état d'avancement de l'exécution à partir de POS/KDS |
| DCI#BCOM-Agrégateur-Ordre-API-v1 | Format de commande de l'agrégateur normalisé |
| DCI#BCOM-Agrégator-Status-Event-v1 | Mises à jour de l'état des agrégateurs |

---

*Source: Commerce Backend FRD/TRD Master Index, Commerce Backend Exigences fonctionnelles, Commerce Backend Exigences techniques, Commerce Backend TRD Domain Catalogue.*

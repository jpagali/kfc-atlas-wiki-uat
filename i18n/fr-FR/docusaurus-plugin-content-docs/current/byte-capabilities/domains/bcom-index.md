---
title: Capacités de soutien du commerce Byte
description: Toutes les capacités détenues par Byte Commerce Backend — le moteur de traitement des commandes de la plateforme Atlas KFC.
sidebar_label: Aperçu général
---

# Capacités de soutien du commerce Byte

**Byte Commerce Backend** est le moteur de chaque transaction sur la plateforme Atlas. Il est invisible pour les clients mais orchestre tout entre les systèmes de front-end et en magasin - gestion des chariots, prix, calcul de la taxe, traitement des paiements, état de commande, injection POS, et ingestion d'ordre agrégateur.

:::note Octet POS Cavat
Byte Commerce parle directement à **Byte POS**. Si un marché n'utilise pas Byte POS, **Byte Connect** doit être inclus dans le paquet Byte Commerce à bord afin que Byte Commerce puisse atteindre le marché POS par le chemin **Byte Commerce -> Byte Connect -> POS**.
:::

Chaque commande passée par Byte Helium est traitée par Commerce Backend. Chaque prix que le client voit a été calculé par Commerce Backend. Chaque paiement était autorisé par l'intermédiaire de l'orchestreur de paiement de Commerce Backend.

---

## Ce que possède le soutien du commerce

| Domaine | Ce qu'il fait |
|---|---|
| ** Commande & Cart Cycle de vie** | Création de chariot, maintenance, prix, commande machine d'état |
| **Consommation, prix et taxe de revenu** | Disponibilité du menu, prix dynamique, calcul de la taxe, application promo |
| **Paiements et remboursements** | Paiement auth, saisie, traitement des remboursements, intégration PSP |
| **Comptes clients et dépenses** | Identité via OIDC/OAuth2; profil client |
| **Préférences et lien de fidélité** | Favoris, lien de compte de fidélité, suivi du consentement |
| **Intégration POS/KDS** | Commandez l'injection aux systèmes en magasin; synchronisation d'état, en utilisant Byte Connect lorsque le POS du marché n'est pas Byte POS |
| **Intégration des agrégats (Byte Connect)** | ingestion normalisée par Uber Manger, DoorDash et autres agrégateurs |
| ** Migration des données** | Migrer les clients et l'historique des commandes |
| **Observabilité** | Exploitation forestière, traçage, surveillance de la santé, mesures |

---

## Principaux contrats de données

Ce sont les schémas d'API/événement qui régissent la façon dont Commerce Backend communique avec Byte Helium, Byte Portal, les systèmes POS et les agrégateurs.

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

:::tip Autres
- Référence technique complète →[Référence du moteur de commerce](/docs/byte-capabilities/reference/commerce-backend)
- Besoin de la mise en garde à bord ? Commencez par[Byte Connect](/docs/byte-capabilities/enablement/byte-connect)
:::

---

## Sources techniques

<details>
<summary>📎 Technical Source: Byte Commerce Backend Capability Overview</summary>

- **FRD References:** [FRD-BCOM-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144136503), [FRD-BCOM-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144464036), FRD-BCOM-033, FRD-BCOM-057
- **TRD Domains:** Cart, Pricing, Payments, Order Management, POS Integration, Aggregator Integration
- **Key Interfaces / APIs:** Cart API, Pricing API, Order API, POS Order API, Aggregator Order API, Status Events
- **Data Contracts:** Cart, order, pricing response, payment transaction, POS payload, order status event
- **Source Summary:**
  - Byte Commerce Backend is the transactional source of truth behind the customer journey rendered by Byte Helium
  - It owns pricing, taxes, payment orchestration, order lifecycle, and downstream handoff into POS and aggregator channels
  - Lower-level contract detail is maintained in the dedicated [Commerce Backend Reference](/docs/byte-capabilities/reference/commerce-backend)

</details>

---
title: Capacités d'hélium à octets
description: Toutes les fonctionnalités face au client appartenant à Byte Helium — le web et l'application front-end de la plateforme Atlas KFC.
sidebar_label: Aperçu général
---

# Capacités d'hélium à octets

**Byte Helium** est le système de conception d'entreprise de Yum! et la fondation avant-garde. Dans Atlas, le front-end mondial de KFC est construit sur Helium et dépouillé pour la marque KFC, couvrant tout, de l'inscription et de la navigation au menu jusqu'à la caisse, le paiement et le suivi après commande.

Dans le contexte Atlas, Helium rend ce que le moteur fournit. Il ne possède pas de prix, d'admissibilité à la promo, d'état de commande ou de contenu — ceux qui appartiennent respectivement à Byte Commerce, Promo Engine et CMS. Helium a pour mission de fournir la base de départ qu'Atlas présente à travers la marque KFC et le parcours client.

---

## Domaine des capacités de l'hélium Byte

| Domaine | Ce qu'il couvre |
|---|---|
| [Identité & signe- Dans](/docs/byte-capabilities/domains/identity) | Création de compte, connexion OTP, Google/Apple OAuth, profil, confidentialité |
| [Mode Localisation & Commande](/docs/byte-capabilities/domains/localisation) | Détection du marché, livraison par rapport au mode de collecte, localisation des magasins |
| [Menu Parcourir & PDP](/docs/byte-capabilities/domains/menu) | Liste des produits, détail de l'article, modificateurs, nutrition/allergènes |
| [Panier](/docs/byte-capabilities/domains/cart) | Ajouter/mise à jour/supprimer des éléments, appliquer des codes promo, attacher des récompenses de fidélité |
| [Départ](/docs/byte-capabilities/domains/checkout) | Variantes de caisse, de livraison et de collection |
| [Paiements & Appels d'offres](/docs/byte-capabilities/domains/payments) | Carte, carte sauvegardée, bon, offre partagée, carte cadeau |
| [Promotions et fidélité](/docs/byte-capabilities/domains/promotions-loyalty) | Offre flux, récompenses, défis, fidélité à bord, comms prefs |
| [Dons et conseils](/docs/byte-capabilities/domains/donations-tips) | Add-Hope dons de bienfaisance, conseils de chauffeur de livraison |
| [Suivi et historique des commandes](/docs/byte-capabilities/domains/order-tracking) | Suivi de livraison en temps réel, historique des commandes, reçus, réordre, favoris |
| [Contenu & juridique](/docs/byte-capabilities/domains/content-legal) | Pages de marque CMS, documents juridiques, consentement aux cookies |
| [Engagement & Messagerie](/docs/byte-capabilities/domains/engagement) | Préférences de notification dans la boîte de réception de l'application, push et email |

---

:::caution Ce que Byte Helium ne possède pas
Byte Helium rend mais ne possède pas: prix (Commerce Backend), éligibilité promo (Promo Engine), points de fidélité (Service Loyalty), capture de paiement (PSP), contenu de menu (Byte Menu), contenu légal (CMS légal), ou état du magasin (Byte Portal + POS). Voir[Limites des capacités](/docs/byte-capabilities/enablement/capability-boundaries)pour la carte de propriété complète.
:::

---

## Sources techniques

<details>
<summary>📎 Technical Source: Byte Helium Capability Overview</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001), [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domains:** Identity, Localisation, Menu, Cart, Checkout, Payments, Loyalty, Tracking, Content
- **Key Interfaces / APIs:** App shell, Context/Store selection, Menu, Cart, Checkout, Payment, Order Status
- **Data Contracts:** Session context, cart, checkout session, payment intent, order summary, order status
- **Source Summary:**
  - Byte Helium is the customer-facing front-end foundation and orchestration surface for the KFC digital journey
  - Backend systems remain the source of truth for pricing, eligibility, order state, and most configuration
  - Domain-level technical details live in the linked capability pages below, each with its own source notes where needed

</details>

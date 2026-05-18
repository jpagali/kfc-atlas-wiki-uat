---
title: Capacités d'octets
description: Commencez ici — ce que fait la plateforme Atlas / Byte Helium de KFC, comment cela fonctionne, et quels marchés doivent savoir avant d'aller vivre.
sidebar_label: Commencez ici
---

# Capacités d'octets

> **Audience :** Promotion du marché, équipes de lancement, gestionnaires de produits, intervenants interfonctionnels > **But :** Source unique de vérité pour ce que fait la plateforme Atlas / Byte Helium, comment elle est structurée, et ce qui est nécessaire pour aller vivre.

Cette section vit en dehors des guides opérationnels par conception. Les[Guide avant](/docs/frontend/overview)et[Guide du portail administratif](/docs/admin-portal-guide/)vous dire *comment utiliser* la plate-forme — Byte Capabilities vous dit *ce qu'est la plate-forme et ce qu'elle peut faire*.

:::note Portée dans le système Atlas
Dans Atlas Wiki, **Byte Capabilities** est intentionnellement projeté sur l'image Atlas **Commerce + Portail**. Dans la pratique, cela signifie:

- **L'Atlas** est le front-end mondial de la KFC
- **Byte Commerce + Byte Portal** sont la couche commerce et configuration derrière Atlas
- **Byte Helium** est le système de conception d'entreprise de Yum! et la fondation frontale sur laquelle Atlas est construit et marqué par
- **Byte Connect** est la couche médiane utilisée lorsqu'un POS du marché n'est pas le POS du Byte

Les[Guide du portail administratif](/docs/admin-portal-guide/)Il possède toujours les instructions de fonctionnement étape par étape.
:::

---

## Comment utiliser cette section

| Si tu veux... | Allez... |
|---|---|
| Comprendre la plateforme complète en 5 minutes | [Modèle mental](/docs/byte-capabilities/mental-model) |
| Voir ce que chaque partie centrale (Atlas sur Byte Helium / Byte Commerce / Byte Portal / Byte Connect) fait | [Couches de plate-forme](/docs/byte-capabilities/platform-layers) |
| Trouver une fonctionnalité spécifique | [Domaines](/docs/byte-capabilities/domains/identity)— choisissez votre domaine |
| Savoir ce qui peut et ne peut pas être fait | [Limites des capacités](/docs/byte-capabilities/enablement/capability-boundaries) |
| Préparez-vous à un déploiement du marché | [Vérification de la réalité](/docs/byte-capabilities/enablement/reality-check) |
| Obtenez une liste de vérification go/no go pour le lancement | [Liste de vérification du lancement du marché](/docs/byte-capabilities/enablement/market-launch-checklist) |
| Rechercher un terme technique | [Glossaire](/docs/byte-capabilities/reference/glossary) |
| Vérifier les SLO de performance | [SLO de performance](/docs/byte-capabilities/reference/performance-slos) |

---

## La Plateforme en un seul paragraphe

**KFC Atlas** est le front-end mondial de KFC pour la commande numérique. Atlas lui-même est construit sur **Byte Helium**, le système de conception d'entreprise de Yum! et la fondation frontale, dépeint pour refléter la marque KFC. Derrière ce front-end se trouve l'image opérationnelle **Byte Commerce + Byte Portal** : le commerce traite les commandes, les prix, les paiements et l'injection de POS, tandis que Byte Portal gère le marché et la configuration opérationnelle qui fait fonctionner Atlas en production.

Lorsqu'un marché n'est pas sur Byte POS, **Byte Connect** devient la couche intermédiaire entre Byte Commerce et l'environnement du marché POS. Comprendre comment Atlas, Helium, Commerce, Portail et Connect s'harmonisent est la base du lancement et de la prise de décision opérationnelle.

---

## Les 12 domaines de capacités

La plateforme est organisée en 12 domaines fonctionnels. Chaque domaine a sa propre page avec une table de fonctionnalités, comment il fonctionne, dépendances, limitations, et des liens vers des guides wiki connexes.

| Domaine | Ce qu'il couvre |
|---|---|
| [Identité & signe- Dans](/docs/byte-capabilities/domains/identity) | Création de compte, connexion OTP, Google/Apple OAuth, profil, confidentialité |
| [Mode Localisation & Commande](/docs/byte-capabilities/domains/localisation) | Détection du marché, livraison par rapport au mode de collecte, localisation des magasins |
| [Menu Parcourir & PDP](/docs/byte-capabilities/domains/menu) | Liste des produits, détail de l'article, modificateurs, nutrition/allergènes |
| [Panier](/docs/byte-capabilities/domains/cart) | Ajouter/mise à jour/supprimer des éléments, appliquer des codes promo, attacher des récompenses de fidélité |
| [Départ](/docs/byte-capabilities/domains/checkout) | Variantes de caisse, de livraison et de collection |
| [Paiements & Appels d'offres](/docs/byte-capabilities/domains/payments) | Carte, carte sauvegardée, bon, offre partagée, carte cadeau |
| [Promotions et fidélité](/docs/byte-capabilities/domains/promotions-loyalty) | Offre flux, récompenses, défis, fidélité à bord, comms prefs |
| [Dons et conseils](/docs/byte-capabilities/domains/donations-tips) | Add-Hope dons, conseils de chauffeur de livraison |
| [Suivi et historique des commandes](/docs/byte-capabilities/domains/order-tracking) | Suivi en temps réel, historique des commandes, reçus, réordre, favoris |
| [Contenu & juridique](/docs/byte-capabilities/domains/content-legal) | Pages CMS, documents juridiques, consentement aux cookies |
| [Engagement & Messagerie](/docs/byte-capabilities/domains/engagement) | Préférences de notification dans la boîte de réception de l'application, push et email |
| [Portail — Administrateur & Configuration](/docs/byte-capabilities/domains/portal-admin) | RBAC, magasins, menus, promos, impôts, paiements, rapports, vérification |

---

## Ce que cette section ne couvre pas

Cette section est intentionnellement conceptuelle. Pour les guides étape par étape sur les choses *faire* dans la plateforme, allez à la section opérationnelle pertinente:

- Comment faire fonctionner Byte Portal jour après jour →[Guide du portail administratif](/docs/admin-portal-guide/)
- Comment configurer et gérer les magasins →[Guide du portail Admin: Magasins](/docs/admin-portal-guide/stores/)
- Comment créer et configurer des promotions →[Guide du Portail Admin : Promotions](/docs/admin-portal-guide/promotions/)
- Comment construire et exécuter des campagnes de promotion →[Livres de lecture](/docs/playbooks/onboarding)
- Comment les clients vivent le front-end →[Guide avant](/docs/frontend/overview)

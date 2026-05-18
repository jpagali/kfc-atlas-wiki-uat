---
title: Capacités du portail Byte
description: Toutes les capacités détenues par le portail Byte — le plan de contrôle administratif pour les équipes du marché et des opérations sur la plateforme Atlas KFC.
sidebar_label: Aperçu général
---

# Capacités du portail d'octets

**Byte Portal** est le plan de contrôle administratif associé à Byte Commerce — le marché des outils et les équipes d'ops utilisent pour configurer et exploiter la plateforme Atlas derrière le front-end. Sans Byte Portal, les marchés ne peuvent pas vivre. Chaque fonction expérience des clients dans Atlas dépend de quelque chose d'abord configuré correctement dans Byte Portal.

Byte Portal ne fait pas de menus d'auteur (c'est le Menu Byte), ne traite pas les paiements (c'est le PSP), et n'envoie pas de notifications push (c'est le fournisseur push). Il configure, assigne et contrôle tout le reste.

---

## Ce que possède le portail Byte

| Capacité | Ce que les équipes de marché font ici |
|---|---|
| **Utilisateurs et rôles (RBAC)** | Inviter les utilisateurs, attribuer des rôles, faire respecter la portée du marché, du magasin ou du groupe |
| **Configuration du & groupe** | Configurer les magasins, les heures de trading, l'état en temps réel, la cartographie des POS, le grottling |
| **Assignation et Patching de menu** | Affecter les versions des menus publiés; appliquer le prix, la disponibilité et les redéfinitions basées sur la partie de jour |
| **Promotions Configuration** | Créer des promotions avec les règles d'admissibilité, les codes, les budgets et la portée |
| ** Configuration fiscale** | Définir les profils fiscaux, les taux, les règles et les arrondis par marché |
| ** Configuration des paiements** | Configurer les profils PSP, les méthodes de paiement, les règles d'acheminement, les polices de surtaxe |
| **Ordres et remboursements (Op)** | Commandes de recherche, remboursements de traitement, gestion des ajustements |
| **Localisation et gestion du contenu** | Gérer les locaux, les clés de traduction, les blocs de contenu et les mentions légales |
| **Drapeaux et paramètres de caractéristiques** | Fonction de contrôle déploiements par marché, canal, ou segment client |
| ** Déclaration et exportations** | Définir les rapports, enregistrer les vues, exporter les données à la demande ou dans les délais |
| **Hooks Web & Intégrations** | Abonnez des systèmes tiers aux événements de la plateforme |
| **Audit et observabilité** | Registre d'audit immuable de toutes les actions administratives; contrôles de santé et suivi des SLO |

---

:::tip Voir le portail Byte en action
Guides étape par étape pour chaque tâche du Portail →[Guide du portail administratif](/docs/admin-portal-guide/)
:::

:::caution Byte Portal ne fait pas de menus auteurs
Le contenu du menu (items, descriptions, prix, options) est créé dans **Byte Menu** — un outil séparé en dehors de la plateforme Atlas. Byte Portal attribue des versions de menu déjà publiées et peut appliquer des correctifs en haut, mais ne peut pas créer de contenu de menu à partir de zéro.
:::

---

## Sources techniques

<details>
<summary>📎 Technical Source: Byte Portal Capability Overview</summary>

- **FRD References:** [FRD-PORTAL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), [FRD-PORTAL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), FRD-PORTAL-041, FRD-PORTAL-063
- **TRD Domains:** RBAC, Store Configuration, Menu Assignment, Promotions, Tax, Payments, Reporting, Audit
- **Key Interfaces / APIs:** Admin UI, RBAC policy engine, configuration services, export jobs, audit events
- **Data Contracts:** User role scope, store config, menu assignment, promotion config, tax profile, payment profile, audit record
- **Source Summary:**
  - Byte Portal is the configuration and operational control plane that determines how the market runs on Atlas
  - It does not process customer transactions directly, but its settings materially shape what Byte Helium and Commerce Backend do at runtime
  - Step-by-step operator workflows remain in the [Admin Portal Guide](/docs/admin-portal-guide/)

</details>

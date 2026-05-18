---
title: Menu Parcourir & PDP
description: Comment la plateforme Atlas montre aux clients le menu localisé, les détails de l'article, les modificateurs et les informations nutritionnelles.
sidebar_label: Menu Parcourir & PDP
---

# Menu Parcourir & PDP

**What it does:** Affiche aux clients le menu localisé pour leur marché et magasin sélectionné, avec tous les détails de l'article, des modificateurs et des informations nutritionnelles.

**Why it matters:** Le menu est le haut de l'entonnoir — chaque commande commence ici. La précision du menu, la vitesse et la pertinence conduisent directement les tarifs add-to-cart et la valeur de commande moyenne.

:::caution Byte Helium ne possède pas le menu
Byte Helium rend le menu qu'il reçoit du service Menu. Les prix, les descriptions des articles, la disponibilité et les modificateurs sont tous gérés dans **Byte Menu** (l'outil de création du menu) et attribués via le portail **Byte**. Si quelque chose ne va pas avec le menu, la correction n'est pas dans Byte Helium.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Voir le menu localisé (PLP)** | Les clients doivent voir ce qui est disponible | Affiche la page de liste des produits avec les catégories et les éléments pour le magasin/canal sélectionné | Byte Helium appelle Menu Service avec contexte de magasin → obtient la liste des catégories/item → rendes | Menu Service, Service contextuel | La localisation doit être achevée en premier | Les prix sont spécifiques au marché; Byte Helium ne possède pas de prix; PLP p95 ≤200ms | Taux d'impression du menu, profondeur du défilement |
| **Voir le détail du point (PDP)** | Le client a besoin d'informations complètes avant de commander | Affiche le nom de l'article, la description, l'image, le prix, les modificateurs et les informations nutritionnelles | Byte Helium appelle le service Menu avec ID d'élément + contexte → obtient le détail complet de l'élément | Service de menu | PLP vu; élément dans le menu | Options filtrées par contexte (p. ex., éléments de livraison cachés pour la collecte) | Taux de vue PDP, taux de sélection du modificateur |
| **Modifier l'élément de menu sélectionné** | Le client veut personnaliser sa commande | Permet au client de choisir la taille, les add-ons, enlever les ingrédients et ajuster la quantité | Options de modification récupérées du service de menu; sélections saisies avant add-to-cart | Service de menu | Item doit avoir des modificateurs configurés dans le menu | Tous les éléments ne sont pas personnalisables; la configuration du modificateur est un Byte Menu / responsabilité du marché | Taux de fixation de la modification |
| **Guide sur la nutrition et les allergènes** | Les clients ont besoin d'informations diététiques | Affiche la ventilation nutritionnelle complète et l'information allergène pour les éléments de menu | Données nutritionnelles obtenues à partir d'indices nutritionnels/détails spécifiques | Service de nutrition (via Menu) | Le menu doit inclure des données nutritionnelles (configuré dans le menu Byte) | Les données doivent être écrites et conservées dans le menu Byte — pas une responsabilité Byte Helium | Taux d'engagement |
| **FAQ** | Les clients ont des questions qui ne sont pas des commandes | Renforce une page FAQ consultable | CMS API retourne les entrées FAQ pour le marché local; la recherche est côté client | Service CMS | Contenu de la FAQ rédigé dans CMS (Byte Portal) | La qualité du contenu dépend de ce que les marchés publient dans CMS | Visites des pages FAQ, recherches |
| **Voir le tableau d'emploi** | KFC utilise son application/web comme canal de recrutement | Listes des rôles ouverts sur le marché | Tirs de ATS (Système de suivi des demandeurs) via proxy CMS | Intégration ATS, CMS | Intégration ATS active sur le marché | Données sur l'emploi gérées à l'extérieur — pas dans Atlas | Affichage des pages de carrière |

---

## Sources techniques

<details>
<summary>📎 Technical Source: View Localised Menu (PLP)</summary>

- **FRD References:** [FRD-HEL-008](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-008)
- **TRD Domain:** Menu Browse & PDP
- **Key Interfaces / APIs:** PLP Menu Feed (App → Menu), PDP Item Detail (App → Menu)
- **Data Contracts:** MenuItem (id, name, price, options[] — market-specific pricing)
- **Source Summary:**
  - PLP filtered by store context and channel (delivery vs. collection items differ)
  - Soft-refresh triggered on cache age detection; no hard reload
  - PLP p95: ≤200ms; cache telemetry monitored
  - Pricing is market-specific and owned by Commerce Backend — Byte Helium renders only
  - Menu APIs: SemVer backward compatible minor, 120-day deprecation (markets need stage rollout time)

</details>

---

:::tip See it in the wiki
- How customers browse the menu front-end → [Find Products](/docs/frontend/customer-journey/find-products/)
- Managing menu items and modifiers in Byte Portal → [Admin Portal Guide: Products](/docs/admin-portal-guide/products/) and [Menus](/docs/admin-portal-guide/menus/)
:::

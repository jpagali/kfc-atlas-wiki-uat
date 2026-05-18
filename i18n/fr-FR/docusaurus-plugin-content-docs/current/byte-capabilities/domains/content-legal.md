---
title: Contenu & juridique
description: Comment la plate-forme Atlas rend les pages de marque, FAQ, documents juridiques, et le consentement des cookies pour chaque marché et local.
sidebar_label: Contenu & juridique
---

# Contenu & juridique

**What it does:** Renver tous les contenus non transactionnels — pages de marque, FAQ, documents juridiques et consentement aux cookies — pour chaque marché et local.

**Why it matters:** La conformité juridique et la confiance de la marque dépendent d'un contenu précis, à jour et localisé. Byte Helium rend ce que Byte Portal et CMS fournissent — la qualité du contenu est une responsabilité du marché.

:::caution Byte Helium rend; les marchés possèdent le contenu
Chaque page de ce domaine est gérée en dehors de Byte Helium. Les documents juridiques sont rédigés par l'équipe juridique du CMS juridique. Les pages de marque et les FAQ sont publiées dans le CMS (accessible via le portail Byte). Les catégories de cookies sont configurées dans le CMP. Si le contenu est erroné ou manquant, la correction est dans le système source — pas dans Byte Helium.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Page d'accueil** | Le client a besoin d'une expérience d'atterrissage | Renforce la page d'accueil locale avec des éléments en vedette, promos et contenu | CMS, Localisation et contextes Promo combinés; sections de projecteurs animées par la configuration CMS | CMS, Service contextuel, Promo Engine | Localisation terminée | Mise en page et contenu de la page d'accueil gérés en Byte Portal/CMS — pas Byte Helium | Accueil engagement, taux de rebond |
| **À propos / Notre histoire** | Pages d'histoire de marque | Pages de marque statiques | Page CMS récupérée par limace et locale; CDN-cached | CMS / CDN | Contenu publié dans CMS | Les modifications de contenu nécessitent la publication du CMS — pas une modification de code | Pages vues |
| **Guide sur la nutrition et les allergènes** | Exigences réglementaires et attentes des clients | Affiche les valeurs nutritionnelles et les informations allergènes pour tous les éléments du menu | Indice de nutrition/détails obtenus par article ou catégorie | Services de nutrition | Données nutritionnelles publiées dans le menu Byte | La précision des données est un Byte Menu / responsabilité du marché | Guide d'engagement |
| **Termes et conditions** | Obligation légale d'afficher les T&C | Rendu les T&C actuels pour la localité du client | Le CMS juridique fournit des documents en version par lieu et date d'entrée en vigueur | CMS juridique | T&C publiées pour le marché local | Byte Helium rend seulement — L'équipe juridique gère le contenu | Taux d'acceptation T&C |
| **Politique de confidentialité** | RGPD et législation locale sur les données | Renforce la politique de confidentialité actuelle pour la localité | Document juridique en version CMS | CMS juridique | Politique de confidentialité publiée | Même chose que les C et C — le contenu relève de la responsabilité de Legal | Taux de perception des politiques |
| ** Paramètres des témoins** | Conformité à la législation sur les cookies (UE et autres) | Affiche les catégories de cookies; permet le consentement de mise à jour du client | Widget CMP intégré; préférences stockées avec horodatage et source | CMP | CMP configuré pour le marché | Les catégories et le texte juridique doivent être définis dans la CMP — pas dans l'hélium Byte | Taux d'acceptation du consentement |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Legal Pages / CMS / Cookie Consent</summary>

- **FRD References:** [FRD-HEL-070](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-070), [FRD-HEL-074](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-074), [FRD-HEL-075](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-075), [FRD-HEL-076](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-076), [FRD-HEL-071](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-071), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domain:** Content & Legal Pages
- **Key Interfaces / APIs:** CMS Page List/Render, FAQ List/Search, Legal Docs List/Render, CMP Get/Update
- **Data Contracts:** Page (id, title, slug, locale, contentUrl); LegalDoc (type, version, effectiveDate); Consent (category, status, ts)
- **Source Summary:**
  - CMS render p95: ≤150ms (CDN-cached)
  - CMS failure (5xx): fallback to cached version; CDN metrics monitored
  - Legal docs versioned by effective date per locale; Byte Helium renders current version
  - Consent preferences stored with source and timestamp for audit
  - CMS/Legal APIs: additive, 180-day deprecation (longest after Payments)

</details>

---

:::tip See it in the wiki
- How customers access brand content in the front-end → [Learn About KFC](/docs/frontend/customer-journey/learn-about-kfc/)
- Managing homepage and CMS content → [Contentful Guide](/docs/frontend/contentful/)
:::

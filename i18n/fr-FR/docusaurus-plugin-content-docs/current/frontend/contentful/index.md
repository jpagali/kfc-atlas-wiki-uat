---
title: Aperçu général
sidebar_position: 1
---

# Contenu

Contentful est le système de gestion de contenu (CMS) qui alimente la couche éditoriale de l'expérience web de KFC Atlas. Il donne aux équipes de marché — créateurs de contenu, auteurs de menus et traducteurs — la capacité de gérer le contenu front-end sans nécessiter un déploiement de produit ou un support technique.

Pensez-y comme le panneau de contrôle de ce que les clients *voir* dans les points de contact numériques de KFC: quels produits sont affichés, comment les promotions apparaissent, quelle copie est affichée, et comment les pages sont structurées — à la fois sur le **web** et l'application **mobile**.

## Qui l'utilise

| Rôle | Ce qu'ils font dans le contenu |
|---|---|
| **Contenu Créateur** | Publie et met à jour les bannières de page d'accueil, le contenu promotionnel et la copie de page |
| **Auteur principal** | Gère les listes de produits, les catégories, les paquets et les offres |
| **Traducteur** | Gère le contenu localisé pour chaque langue prise en charge dans un marché |

## Ce qui peut être géré

| Domaine de contenu | Désignation des marchandises | Guide |
|---|---|---|
| **Page d'accueil** | bannières héros, produits en vedette, tuiles de campagne | [Guide: Page d'accueil](./guide-homepage) |
| **Catégories** | Structure de la catégorie de menu, étiquettes et images | [Guide: Contenu de la catégorie](./guide-category) |
| **Produits** | Détails du produit, descriptions et affichage des prix | [Guide: Contenu du produit](./guide-product) |
| **Bundes et offres** | Offres repas, offres combo, et la configuration du forfait | [Guide: Forfaits et offres](./guide-bundles-deals) |
| ** Promotions** | bannières promotionnelles limitées dans le temps et contenu de campagne | [Guide : Contenu des promotions](./guide-promo) |
| **Vente dans le panier** | Produits recommandés présentés lors de la commande | [Guide: Vente croisée dans le panier](./guide-cross-sell) |
| **Footer** | Liens de navigation, texte juridique et icônes sociales | [Guide: Contenu du pied de page](./guide-footer) |
| **SEO** | Titres des pages, méta descriptions et URLs canoniques | [Guide: SEO](./guide-seo) |
| **Traductions** | Contenu multilingue pour tout ce qui précède | [Guide: Traductions](./guide-translations) |

## Fonctionnement de l'édition

Contentful utilise un workflow structuré de publication :

1. Le contenu est **écrit** par un créateur de contenu ou un auteur de menu
2. Il est **revu** et approuvé en interne
3. Il est **publié via Launch** — l'outil de publication programmé de Contentful — qui coordonne lorsque le contenu passe simultanément par plusieurs entrées

Cela permet aux marchés de préparer des campagnes à l'avance et de les publier à un moment précis, sans avoir besoin d'être en ligne au moment de la mise en route.

## Appui à la plateforme

Surfaces de contenu bien gérées sur le Web et l'application mobile. Les mêmes entrées de contenu — descriptions de produit, copie promotionnelle, bannières et étiquettes de catégorie — sont consommées par les deux plateformes via la couche API Atlas.

| Plateforme | Appui |
|---|---|
| **Web** | Le support complet — tous les types de contenu s'appliquent |
| **iOS / Android** | • Prise en charge — le contenu est livré à l'application via la même API; certains champs spécifiques à la mise en page (par exemple les ratios d'aspect de bannière) peuvent différer par plate-forme |

> **Note:** Certaines configurations de l'application uniquement (comme la copie de notification push ou les métadonnées de l'application store) sont gérées en dehors de Contentful. Ce guide couvre le contenu qui apparaît dans l'expérience de l'application KFC elle-même.

---
title: "Guide: Forfaits et offres"
sidebar_position: 5
---

# Guide: Forfaits et offres

Les ensembles sont des repas combinés, un ensemble fixe de produits vendus ensemble. Les transactions sont des regroupements promotionnels qui combinent des produits ou des paquets à un prix spécial, souvent avec un lien cible pour une navigation plus profonde. Les deux nécessitent une configuration de contenu dans Contentful après avoir été configuré dans le portail Byte Admin.

:::info
Bundles and Deals ** doit être créé dans le portail Byte Admin d'abord** avant de pouvoir être configuré dans Contentful. Les éléments sans contenu sont ** cachés dans le menu**.
:::

---

## Où vous le voyez au front

**Bundle Cards** — Apparaît dans le menu aux côtés de produits individuels, montrant une image combo, titre et prix. Les clients choisissent un paquet et personnalisent les éléments inclus.

**Cartes de série** — Surface sur le menu ou sur une page dédiée aux affaires. Un Deal regroupe généralement un ou plusieurs produits ou ensembles sous cadre promotionnel, et peut être relié en profondeur à une page ou à un menu spécifique via un URI cible.

Les deux types de contenu peuvent être affichés sur la page d'accueil** comme éléments promus lorsque configurés.

---

## Que configurer dans Contentful

### Publication d'un ensemble avec du contenu

1. Cliquez sur **Ajouter Entrée** → sélectionner **Bundle**
2. Cliquez sur **Sélectionner à partir de Yum** sous le champ Bundle Code pour choisir un bundle déjà créé
   - Contentful ne permettra pas une deuxième entrée pour un paquet qui a déjà du contenu — éditer l'entrée existante à la place
3. Cliquez sur **+ Ajouter un média** pour ajouter des images groupées
4. Cliquez sur le bouton vert **Publier** — ou utilisez la flèche déroulante pour planifier une date future

### Édition d'un accord avec le contenu

1. Cliquez sur **Ajouter Entrée** → sélectionner **Déal**
2. Populer les champs requis:
   - **Titre en anglais** et **Titre en espagnol** (ou deuxième local pertinent)
   - **Item(s)** — ajouter des produits ou des ensembles existants par **Ajouter du contenu existant**
   - **Cibler URI** — le chemin vers lequel la carte de distribution se lie lorsqu'elle est tapée
3. Cliquez sur **+ Ajouter un média** pour attribuer des images
4. Vous pouvez cliquer sur n'importe quel produit ou bundle lié dans l'entrée Deal pour faire des modifications
5. Cliquez sur **Publier** — ou programmer via le menu déroulant

---

## Cas d'utilisation

**Nouveau repas combo** — Lorsqu'un bundle est créé dans le portail Byte Admin, créez son entrée Contentful avec des images et un titre d'affichage pour qu'il apparaisse sur le menu avec le traitement visuel correct.

**Promotional deal page** — Créer une entrée de Deal qui regroupe plusieurs produits sous un nom de campagne (p. ex. «Fête de la famille») et des liens vers une page d'atterrissage des offres dédiées.

**Échéancier d'une offre à durée limitée** — Utilisez l'édition programmée pour définir un paquet ou un marché pour aller en direct au début d'une fenêtre promotionnelle, et un autre publier pour le supprimer à la fin.

**Cross-market offers** — Différents marchés peuvent configurer des entrées de Deal séparées avec des titres et des images localisés pour la même offre de produits sous-jacente.

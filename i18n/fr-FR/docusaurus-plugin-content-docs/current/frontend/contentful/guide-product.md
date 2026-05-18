---
title: "Guide: Contenu du produit"
sidebar_position: 4
---

# Guide: Contenu du produit

Le contenu du produit est l'endroit où vous mettez à jour des éléments de menu individuels — en attribuant des images, des titres et en affichant des détails aux produits qui ont déjà été créés dans le portail Byte Admin.

:::info
Les produits ** doivent exister dans le portail Byte Admin d'abord** avant de pouvoir être configurés dans Contentful. Les produits sans contenu sont ** cachés dans le menu**.
:::

---

## Où vous le voyez au front

**Cartes de produits Menu** — Chaque élément affiché dans une grille de catégorie (nom, image et prix) est alimenté par le contenu du produit Contentful.

**Détail du produit** — Lorsqu'un client tape ou clique sur un produit, la vue détaillée montre l'image, le titre et la description du produit provenant de Contentful.

**Sélection variée** (pour les marchés de pizza) — Les options Pizza croûte, taille et garniture ont chacune leurs propres entrées de contenu dans Contentful, qui alimentent la sélection de modification UI.

---

## Que configurer dans Contentful

### Publier un produit avec du contenu

1. Cliquez sur **Ajouter Entrée** (le bouton bleu sur le côté droit de l'écran)
2. Dans la liste déroulante des types de contenu, sélectionnez **Produit**
3. Cliquez sur **Sélectionner à partir de Yum** pour choisir un produit déjà créé
   - Les produits présentent un badge statut : **PUBLIÉ** (vert), **DRAFT** (jaune) ou **NOUVEAU** (violet)
   - Choisir un produit PUBLISÉ vous invite à confirmer avant d'écraser le contenu existant
4. Popular le titre** et **Afficher l'ordre**
5. Cliquez sur **+ Ajouter un média** pour attribuer des images — utiliser **Ajouter des médias existants** pour les actifs précédemment téléchargés, ou **Ajouter des nouveaux médias** pour télécharger des images fraîches
6. Cliquez sur le bouton vert **Publier** — ou utilisez la flèche déroulante pour programmer la publication à une date ultérieure

### Édition Pizza Crust Content

1. Ajouter Entrée → sélectionner **Pizza Crust**
2. Cliquez sur le champ **Code de valeur d'option** pour sélectionner la variante croûte
3. Populer le titre et attribuer des images par **+ Ajouter un média**
4. Publier

### Édition du contenu de la pizza

1. Ajouter Entrée → sélectionner **Pizza Taille**
2. Cliquez sur le champ **Code de valeur d'option** pour sélectionner la taille
3. Populer le titre et attribuer des images
4. Publier

### Édition de contenu de garniture de pizza

1. Ajouter Entrée → sélectionner **Topping**
2. Cliquez sur le champ **Modifier Nom interne** pour sélectionner le topping
3. Populer le titre et attribuer des images
4. Publier

:::note :
Contentful ne vous permettra pas de créer une entrée dupliquée pour un produit, une croûte, une taille ou une garniture qui a déjà publié du contenu. Modifiez plutôt l'entrée existante.
:::

---

## Cas d'utilisation

** Lancement d'un nouvel élément de menu** — Lorsqu'un produit est créé dans le portail Byte Admin, créez son entrée Contentful pour l'amener en direct sur le menu avec des images et un nom d'affichage.

**Mise à jour de la photographie de produit** — Rafraîchir les images sur les produits existants lors de rafraîchissements de marque ou de campagnes saisonnières sans toucher aucune donnée dans Byte Admin Portal.

**Localisation des noms de produits** — Entrez les titres propres au marché par région (p. ex. « Zinger Burger » vs « Zinger Sandwich » selon le marché).

**Échéancier d'une révélation de produit** — Utilisez le menu déroulant de publication programmé pour faire la file d'attente d'un nouveau produit pour aller en direct à une date et à une heure précises, aligné sur un lancement de campagne.

**Gérer les variantes de pizza** — Pour les marchés de pizza, configurer chaque option croûte et taille avec sa propre image afin que les clients voient un visuel précis lors de la personnalisation de leur commande.

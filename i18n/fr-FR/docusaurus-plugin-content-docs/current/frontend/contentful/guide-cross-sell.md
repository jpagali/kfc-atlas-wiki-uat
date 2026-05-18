---
title: "Guide: Vente croisée dans le panier"
sidebar_position: 7
---

# Guide: Vente croisée dans le panier

Dynamic Cross-Sell permet aux auteurs de menu de configurer quels produits sont recommandés aux clients dans le panier, en fonction de ce qui est déjà dans leur panier. C'est un outil de vente ciblée, la bonne suggestion au bon moment.

---

## Où vous le voyez au front

**Cart / Panier** — Ci-dessous la liste des articles qu'un client a ajoutés, un "Vous pourriez aussi aimer" ou les produits recommandés de surfaces de rangée étiquetés de la même façon. Les produits présentés dans cette rangée sont dynamiques — ils changent en fonction du ou des éléments spécifiques du panier.

Par exemple: si un client ajoute un Zinger Burger, la section de vente croisée peut montrer Fries, une boisson ou un Dessert. Un article différent dans le panier pourrait déclencher un ensemble complètement différent de suggestions.

Cette surface est sur **Web** et **Mobile App**.

---

## Que configurer dans Contentful

1. Dans Contentful, filtrez par **Type de contenu: Type de contenu dynamique**
2. Cliquez sur **Ajouter Entrée** → sélectionner **Dynamic Cross Sell**

L'entrée comporte trois champs:

**Nom / Titre** — Une étiquette interne pour l'entrée (non montrée aux clients). Utilisez quelque chose de descriptif, par exemple "Cross-sell for Zinger Burger".

**Point de référence** — L'élément déclencheur. Lorsque ce produit est dans le panier du client, les suggestions de vente croisée ci-dessous seront affichées. Cliquez sur **Sélectionnez parmi Yum** pour choisir l'élément du menu.

** Vendre des produits bruts** — La liste des produits recommandés lorsque l'élément déclencheur est dans le panier. Cliquez sur **Ajouter des produits**, sélectionnez plusieurs éléments si nécessaire, et cliquez sur **Enregistrer les sélections**.

3. Cliquez sur **Publier** pour activer la règle de vente croisée

---

## Cas d'utilisation

**Brink upsell** — Déclenchez une recommandation de boisson chaque fois qu'un hamburger est ajouté au panier, nudging clients pour compléter un repas.

**Suggestion d'article latéral** — Présentez des frites ou une salade latérale comme une vente croisée chaque fois qu'une protéine autonome (p. ex. des bandes de poulet) est dans le panier.

**Déssert fermer** — Recommander une crème glacée ou une tarte lorsqu'un plat principal est présent, augmentant la valeur moyenne des commandes à un point de décision naturel.

**Appariements spécifiques à la campagne** — Lors d'une promotion à temps limité, configurer une vente croisée pour mettre en valeur l'article promotionnel chaque fois qu'un produit admissible est dans le panier.

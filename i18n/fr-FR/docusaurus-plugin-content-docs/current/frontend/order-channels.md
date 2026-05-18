---
title: Chaînes de commande
sidebar_position: 3
---

# Chaînes de commande

:::warning Avertissement
Tout le contenu ci-dessous devrait être traité comme un cadrage de produit de placeholder basé sur ce qui est actuellement pris en charge dans le Guide du portail Admin. Valider les détails de déploiement spécifiques au marché avant d'utiliser cette page comme source finale de vérité.
:::

Atlas prend en charge un modèle de commande multicanaux par magasin**, permettant aux équipes de façonner la façon dont les menus, la disponibilité et les expériences de commande sont livrés à travers les points de contact clients.

Plutôt que de traiter les canaux d'ordre comme un trio mondial fixe comme`Dine-in / Delivery / Takeaway`, Atlas est mieux compris comme une plateforme de distribution basée sur **canal**. Les magasins peuvent publier différents menus vers différentes destinations telles que **Digital**, **Kiosk** et **In-Store**, tandis que l'expérience frontend s'adapte en conséquence.

Pour l'avant, cela crée deux couches d'expérience :

- le canal de commande **** le magasin est configuré pour servir
- le mode de commande **** le client choisit à l'intérieur de cette expérience, comme la livraison, le ramassage ou le dîner

## Affichage des produits

### Digital est la surface de commande principale du client
Le canal numérique est le fondement de l'application et de la commande web. C'est là que la disponibilité des menus devient visible du client, où la commande en ligne est contrôlée de manière opérationnelle, et où l'expérience en vitrine devient actionnable.

Du point de vue des produits, cela donne aux équipes un modèle d'exploitation clair :

- les clients ne voient que les menus en direct qui ont été assignés et publiés au canal numérique de ce magasin
- désactivation **Acceptation des commandes en ligne** supprime la commande sans nécessiter de modifications de menu plus larges
- disponibilité en magasin peut être gérée au niveau du magasin sans changer l'expérience globale du produit

Cela rend Atlas opérationnellement flexible tout en gardant le parcours client simple.

### Modes de commande en direct dans l'expérience du canal
Le voyage frontal traite déjà **livraison**, **pickup**, **dine-in**, **Gite** et **commande programmée** comme des choix du client. Cependant, le Guide du portail d'administration décrit des étiquettes de canaux comme **Digital**, **Kiosk** et **In-Store**.

L'interprétation la plus propre du produit est :

- **Digital** est le canal opérationnel
- **livraison** et **pickup** dans ce canal numérique en tant que modes de commande à la clientèle
- **Kiosk** et **In-Store** peuvent avoir leur propre stratégie de menu et des règles d'expérience

Cette distinction est importante car elle permet à la plateforme de séparer **distribution opérationnelle** du choix d'accomplissement du client**.

### Une stratégie de menu basée sur les canaux est une force
Le Guide du portail Admin confirme que les magasins peuvent attribuer différents menus à différents canaux et les publier indépendamment.

Cela crée une forte valeur produit sur la façade:

- La disponibilité des produits peut différer entre app/web, kiosque et commande en magasin
- prix, forfaits ou structure de catégorie peuvent différer selon le canal
- un changement de menu peut apparaître sur une surface avant qu'il n'apparaisse sur une autre si la publication est faite canal par canal

Ceci est particulièrement utile lorsque l'entreprise veut adapter l'expérience par point de contact au lieu de forcer un menu à servir chaque cas d'utilisation.

### La commande programmée est contrôlée, non supposée
Le Guide du Portail Admin documente un **Autorise les commandes futures** et note que cela dépend d'un canal de commande supporté.

Pour la façade, ces postes programmés commandent comme une expérience gérée:

- commande programmée existe comme une capacité configurable
- il n'apparaît que là où le stockage et la configuration du canal le supportent
- il peut être introduit sélectivement sans redéfinir l'ensemble du voyage

Cela permet aux marchés de lancer la fonctionnalité intentionnellement au lieu de la rendre obligatoire partout.

### Les opérations de magasinage façonnent directement l'expérience client
Le portail Byte expose les contrôles des magasins tels que **Accepter les commandes en ligne** et l'édition de menus spécifiques aux magasins.

Cela signifie que la façade est sensible au stockage par conception:

- un magasin peut être commandé alors qu'un autre est temporairement indisponible
- un magasin peut afficher un menu numérique tandis qu'un autre n'a pas de menu numérique en direct publié
- des fermetures temporaires ou des pauses opérationnelles peuvent s'expliquer par des réglages de stockage plutôt qu'une panne de plate-forme

Il s'agit d'une caractéristique précieuse du produit car elle permet aux équipes opérationnelles de réagir rapidement tout en préservant un modèle de plateforme cohérent.

## Positionnement recommandé

La meilleure façon de positionner Atlas aujourd'hui est :

- Atlas prend en charge plusieurs canaux de commande par magasin
- Les noms de canaux sont spécifiques à l'implémentation, avec des exemples tels que **Digital**, **Kiosk** et **In-Store**
- le parcours client numérique se situe au-dessus de la configuration du canal numérique d'un magasin
- Les modes de commande orientés vers le client tels que **livraison** et **pickup** sont des expériences dans cette couche numérique, pas la même chose que les canaux d'édition admin
- la visibilité du menu et la disponibilité des commandes sont façonnées par l'attribution des canaux par magasin, l'état de publication et les toggles opérationnels

:::tip
Si vous devez documenter le comportement de frontend spécifique au marché, vérifiez les étiquettes de canaux et les attributions de menus dans la vue **Menus** du magasin d'abord, puis décrivez le parcours client en plus de cette configuration opérationnelle.
:::

## Ce que nous devrions éviter de surestimer

- que tous les marchés utilisent les mêmes trois canaux clients
- que chaque canal supporte les mêmes capacités
- que le comportement de l'agrégateur peut être déduit de l'actuel Guide du Portail Admin seul
- que tout marché spécifique a dîné, livré et à emporter déployé de la même manière dans chaque magasin

## Sources du portail Byte derrière ces présomptions

- [Affichage d'un menu Store](/docs/admin-portal-guide/stores/view-a-stores-menu/)
- [Affecter un nouveau menu](/docs/admin-portal-guide/stores/assign-new-menu/)
- [Publier un menu](/docs/admin-portal-guide/stores/publish-a-menu/)
- [Modifier les détails du magasin](/docs/admin-portal-guide/stores/edit-store-details/)
- [Accepter les commandes en ligne (déplacer ou désactiver)](/docs/admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off/)
- [Autoriser les commandes futures (détourner ou désactiver)](/docs/admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off/)

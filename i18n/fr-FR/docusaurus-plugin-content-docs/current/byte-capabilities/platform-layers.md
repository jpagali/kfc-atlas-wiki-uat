---
title: Couches de plate-forme
description: Ce que chaque couche de la plateforme Atlas / Byte Helium fait en anglais clair, et ce que les marchés peuvent configurer dans chaque.
sidebar_label: Couches de plate-forme
---

# Couches de plate-forme

La plate-forme Atlas comporte quatre parties principales et un ensemble de services externes. Cette page donne une ventilation en anglais clair de ce que chaque partie fait et, critiquement, ce que les marchés peuvent et ne peuvent pas configurer.

:::note Portée dans le système Atlas
Lorsque Atlas Wiki fait référence à **Byte Capabilities**, le champ d'application principal est l'image Atlas **Commerce + Portail**: Atlas en tant que front-end global de KFC, **Byte Helium** en tant que fond de teint Yum!, **Byte Commerce + Portail Byte** en tant que couche de commerce et de configuration derrière, et **Byte Connect** en tant que couche intermédiaire pour les marchés POS non-Byte. Les étapes d'exploitation détaillées pour Byte Portal appartiennent toujours dans le[Guide du portail administratif](/docs/admin-portal-guide/).
:::

:::caution Principe clé
Byte Helium *renders* mais ne possède pas la plupart des choses. La tarification, l'éligibilité, l'état et le contenu vivent tous dans le backend ou les services externes. Quand quelque chose semble mal dans l'application, la correction est presque toujours dans la configuration de backend — pas le front-end.
:::

---

## Responsabilités essentielles

| Partie | Rôle | Ce que les marchés configurent |
|---|---|---|
| **Atlas sur Byte Helium** | Le front-end mondial de KFC, construit sur la fondation commune de Yum! et marqué pour les clients de KFC | Le comportement du marché est fonction de la configuration, et non de la reconfiguration séparée par marché |
| ** Commerce par correspondance** | Traitement de chaque commande — prix, taxe, paiement, injection de POS; les marchés de POS non-octets nécessitent Byte Connect | Via Byte Portal — promos, taxes, routage des paiements, opérations de marché |
| ** Portail Byte** | Outil d'administration associé au commerce pour les marchés et les équipes opérationnelles | Heures de magasin, menus, promos, taxes, paiements, remboursements, utilisateurs |
| **Byte Connect** | Couche d'intégration intermédiaire entre le commerce Byte et les environnements de POS non Byte | Cartographie des marchés/vendeurs et préparation à l'intégration pour les flux d'ordres de points de vente autres qu'octets |
| **Service de menu** | Fournit catalogue article, prix, options | Outil de création du menu Byte (hors Atlas) |
| **Identité/SSO** | Gérer les comptes clients et les sessions de connexion | OTP, Google, Apple — configuré par marché |
| **PSP / Vault** | Prise en charge du jeton de carte et de la saisie de paiement | Profils PSP configurés dans le portail Byte |
| **Loyalty & Promo Engine** | Évaluations offre admissibilité, récompenses, défis | Promotions réalisées dans le portail Byte |
| ** Suivi des commandes** | Fournit un état de livraison en temps réel | Facultatif par marché; dépend de la logistique 3P |
| **POS / KDS** | Recevoir les commandes numériques en magasin | Intégration configurée par marché/vendeur; les marchés POS non-octets se connectent par Byte Connect |

---

## Ce que chaque pièce principale fait en détail

### Atlas sur Byte Helium — Front-End
Atlas est le front-end mondial de la KFC. Il est construit sur **Byte Helium**, le système de conception d'entreprise de Yum! et la fondation avant-garde, puis dépeint et façonné pour refléter la marque KFC et le parcours client. Atlas reçoit des données de Byte Commerce, Menu Service, CMS et des services externes, et les rend dans le Web et l'application expérience clients utilisent effectivement. Atlas ne calcule pas les prix, n'évalue pas l'admissibilité aux promotions et n'est pas propriétaire de l'ordre. C'est la couche frontale orientée client construite sur Helium.

### Commerce d'octets
Byte Commerce est le moteur de chaque transaction. Lorsqu'un client ajoute un article à son panier, Byte Commerce calcule le prix. Lorsqu'ils appliquent un code promo, Byte Commerce valide l'admissibilité côté serveur. Lorsqu'ils paient, Byte Commerce orchestre l'intention de paiement par l'entremise du PSP. Lorsqu'une commande est passée, Byte Commerce l'injecte dans le POS/KDS en magasin. Byte Commerce parle directement à Byte POS; si un marché n'utilise pas Byte POS, Byte Connect est la couche intermédiaire requise pour le marché POS. Rien de transactionnel ne se passe sans Byte Commerce.

:::note Octet POS Cavat
Ne présumez pas qu'Atlas peut s'intégrer directement à n'importe quel POS du marché. Le modèle mental supporté est **Atlas -> Byte Commerce -> Byte POS**, ou **Atlas -> Byte Commerce -> Byte Connect -> POS** pour les marchés autres que ceux de Byte POS.
:::

### Portail d'octets — Plan de contrôle administratif
Byte Portal est l'endroit où vit chaque configuration au niveau du marché, à côté de la couche Commerce qu'il prend en charge. Les marchés configurent leurs magasins (heures, état, carte POS), les menus (attribution des versions de menu publiées, application des correctifs et des dépassements de prix), les promotions (règles d'admissibilité, codes, budgets, cadrage), les profils fiscaux, les règles d'acheminement des paiements, les rôles des utilisateurs et des accès, et les paramètres opérationnels. **Sans configuration correcte du portail, les marchés ne peuvent pas aller en direct.**

### Byte Connect
Byte Connect n'est pas le produit orienté vers le client et pas la surface administrative primaire, mais il fait toujours partie de la pile Byte dans Atlas chaque fois qu'un POS du marché n'est pas Byte POS. Il s'occupe du pont d'intégration entre Byte Commerce et l'environnement POS du marché, et il fait partie de la préparation au lancement, de l'acheminement des commandes, des limites de support et du dépannage pour ces marchés.

### Menu Service / Menu Byte
La création de menus — création d'éléments, configuration de descriptions et d'images, gestion des prix et des options — se produit dans **Byte Menu**, un outil séparé en dehors de la plate-forme Atlas. Byte Portal attribue des versions de menu déjà publiées aux marchés et aux canaux. Byte Portal peut appliquer des correctifs et des surcharges sur un menu publié, mais il ne peut pas créer de contenu de menu à partir de zéro.

### Services externes
La plate-forme dépend d'un ensemble de services externes intégrés par marché : Identity/SSO pour l'authentification des clients, un PSP pour le traitement des paiements, un moteur de fidélité & Promo pour l'évaluation des offres, un service de suivi des commandes pour l'état de livraison, un CMS pour la marque et le contenu légal, et un service de localisation Geo/Store. Chacun de ces éléments doit être configuré et testé par marché avant le lancement.

---

:::tip Voir dans le wiki
- Configuration des magasins et des menus dans le portail Byte →[Guide du portail Admin: Magasins](/docs/admin-portal-guide/stores/)et[Menus](/docs/admin-portal-guide/menus/)
- Configuration des promotions →[Guide du Portail Admin : Promotions](/docs/admin-portal-guide/promotions/)
:::

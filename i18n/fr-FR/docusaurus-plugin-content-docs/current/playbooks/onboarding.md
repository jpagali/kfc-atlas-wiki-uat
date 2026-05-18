---
title: Créer des promotions
sidebar_position: 1
---

# Créer des promotions

Ce playbook montre comment les équipes de la KFC devraient créer et lancer une promotion dans Atlas, depuis le mémoire de campagne initial jusqu'à l'attribution de groupes de magasins et les vérifications préalables au lancement.

**Estimated time:** 30-60 minutes pour l'installation, plus l'approbation et le temps d'AQ
**Who does this:** Administration régionale / BMU, opérations de marketing, ou propriétaires de campagne avec accès au portail Admin Byte

---

## Ce que ce Playbook couvre

Utilisez ce playbook lorsque KFC doit :

- lancer une nouvelle offre numérique dans Atlas
- configurer la logique d'admissibilité et de rabais
- attribuer la promotion aux bons magasins ou groupes de magasins
- compléter une carte d'assurance qualité de base avant la campagne

Si vous créez spécifiquement une offre Buy 1 Get 1 , utilisez la page de recette dédiée:[Recette 1 - Acheter 1 Obtenez 1 Gratuit (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/).

## Préalables

- mémoire de campagne approuvé KFC avec détails de l'offre, dates et marché cible
- copie de promotion confirmée avec l'équipe de marketing locale
- zone de stockage ou de groupe de stockage confirmée
- Accès au portail Admin Byte aux promotions et aux groupes de magasins

## Étape 1: Confirmer la structure de promotion

Avant de construire quelque chose dans Atlas, confirmez :

- le type de rabais
- Produits ou ensembles éligibles
- date/heure de début et de fin
- si la promotion est automatique ou basée sur le code
- si la campagne s'applique à tous les magasins ou groupes de magasins sélectionnés

:::tip
Pour les campagnes KFC, confirmez toujours si l'offre doit apparaître dans l'application, le web, les flux liés à l'agrégateur ou un ensemble limité de canaux de commande avant le démarrage de la configuration.
:::

## Étape 2: Créer le shell promotionnel

Utilisez la page de guide du Portail Byte[Créer une promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)créer le dossier de promotion.

À ce stade:

- choisir le bon flux de promotion
- ajouter le nom de la promotion interne
- ajouter le nom de l'affichage vers le client
- ajouter une description claire pour les opérateurs de la KFC et les équipes de soutien

## Étape 3: Ajouter des règles et des effets

Définir :

- les conditions qui rendent un client admissible
- l'effet qui devrait s'appliquer une fois la condition remplie
- toutes les limites, exclusions ou fenêtres de campagne

Exemples:

- Pourcentage de réduction sur un paquet de repas
- réduction de valeur fixe pour une dépense seuil
- article gratuit ou prime de vente après un achat admissible

## Étape 4: Assigner la promotion aux magasins

Si l'offre ne s'applique pas à chaque magasin, assignez-le par l'intermédiaire des groupes de magasins :

- Utilisation[Créer un groupe de magasins](/docs/admin-portal-guide/promotions/create-a-store-group/)si un nouveau groupe de campagne est nécessaire
- Utilisation[Affecter des promotions aux groupes de magasins](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)pour lier la promotion
- vérifier que seuls les restaurants KFC prévus sont inclus

## Étape 5 : AQ avant le lancement

Avant le lancement:

- vérifier les dates et heures
- tester la promotion par rapport aux produits cibles
- confirmer les affichages de réduction correctement dans le voyage client KFC
- confirmer que les éléments non admissibles ne déclenchent pas la récompense
- s'assurer que les équipes de support connaissent la date en direct et le comportement attendu du client

## Étape 6: Surveiller après le lancement

Une fois en direct, surveiller:

- comportement de rachat
- empilement inattendu avec d'autres promos
- couverture du groupe de magasins
- tout billet d'assistance des opérateurs ou des clients

Si des changements sont nécessaires, mettez à jour la promotion immédiatement dans Atlas et avisez le propriétaire de la campagne.

## Guides des portails administratifs connexes

- [Créer une promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Modifier une promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Affecter des promotions aux groupes de magasins](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Créer un groupe de magasins](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [Voir les promotions pour un groupe Store](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)

## Notes concernant la KFC

- utiliser des noms de campagne qui identifient clairement le marché, le mécanicien et la plage de dates
- aligner la copie d'affichage promotionnel avec l'approbation locale de commercialisation de KFC avant le lancement
- pour les campagnes à fort trafic, compléter l'AQ sur l'application et le web avant de passer à la vie

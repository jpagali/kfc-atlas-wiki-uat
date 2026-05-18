---
title: Réservation de l'élément de menu
sidebar_position: 7
---

# Réservation de l'élément de menu

## Ce qu'il fait

Menu Item Reservation permet aux clients de ** pré-commander et garantir des éléments de menu spécifiques** avant qu'ils ne soient disponibles pour la commande standard. Au lieu d'espérer qu'un produit est en stock lorsqu'il arrive, les clients le réservent à l'avance: choisir une date de ramassage, un créneau horaire et effectuer le paiement à l'avance.

Cette fonction est conçue pour les situations où la demande est prévisible mais où l'offre est limitée : campagnes saisonnières, lancements exclusifs de produits, événements à fort trafic ou moments culturels où un repas spécifique a une importance élevée.

## Pourquoi il existe

Certains éléments de menu, particulièrement les produits à édition limitée ou les ensembles de repas culturellement importants, génèrent une demande qui dépasse de loin la capacité d'accomplissement en temps réel d'un restaurant. Sans système de réservation:

- Les clients arrivent pour trouver des articles épuisés
- Les restaurants sont accablés par une demande imprévisible
- Les campagnes de marketing conduisent l'intention que le système de commande ne peut pas capturer

Menu Article Réservation convertit la demande en commandes confirmées et programmées, donnant aux clients une garantie et donnant aux restaurants la visibilité nécessaire pour se préparer avec précision.

## Comment ça marche

Le flux de réservation comporte quatre étapes:

```
1. Browse        → Customer discovers a reservable item (product page, homepage banner, promo)
2. Reserve       → Customer selects pickup date and time slot, confirms quantity
3. Pay           → Full or partial payment is taken upfront to hold the reservation
4. Collect       → Customer arrives at the restaurant, presents reservation confirmation
```

### Fenêtre de réservation
Chaque élément réservable a une fenêtre de réservation ** configurée**, la période pendant laquelle les précommandes sont ouvertes. En dehors de cette fenêtre, l'article apparaît comme un produit de menu standard (si disponible) ou est entièrement caché.

### Feux de temps
Les restaurants sont configurés avec des **pickup time slots** par jour. Chaque emplacement a une limite de capacité, empêchant la surréservation. Une fois qu'une fente est pleine, les clients sont offerts le prochain temps disponible.

### Paiement
Le prépaiement est nécessaire pour confirmer une réservation. Cela réduit les non-présentations et garantit que le restaurant prépare seulement les commandes confirmées. Les politiques d'annulation et de remboursement sont configurées par marché.

## Configuration

Menu Item Reservation est activé au niveau du produit via **Contenu** (pour le web) et la couche de configuration du marché. Les opérateurs peuvent configurer :

| Réglage | Désignation des marchandises |
|---|---|
| **Fenêtre de réservation** | Date d'ouverture et date de fermeture pour les pré-commandes |
| **Dates d'achat** | Dates auxquelles les réservations sont acceptées |
| **Slots horaires** | Fenêtres de ramassage disponibles et capacité par emplacement |
| **Dépôt / paiement intégral** | Que le paiement intégral ou un acompte soit facturé sur réservation |
| **Politique d'annulation** | Indique si les clients peuvent annuler et dans quelles conditions |
| **Max quantité par commande** | Limiter le nombre de réservations d'un seul client |

## Plateformes

| Plateforme | Appui |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Site Web | ✅ |

:::info
Menu Item Réservation est une fonctionnalité activée par le marché. Contact **KFC Global Enablement and Market Success** pour l'activer pour votre marché et configurer les paramètres de réservation.
:::

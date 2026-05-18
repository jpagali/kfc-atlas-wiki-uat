---
title: Acheter 1 Obtenez 1 Gratuit (BOGO)
sidebar_label: Acheter 1 Obtenez 1 Gratuit (BOGO)
---

# Acheter 1 Obtenez 1 Gratuit (BOGO)

## Objectif

Le client achète un Zinger Burger et obtient un deuxième gratuitement.

## Exigences

| Domaine | Champ | Valeur |
|---|---|---|
| **Présence de l'article** | ** Quantité minimale** | `2` |
| **Présence de l'article** | **Qualification** | `Zinger Burger (Product)` |

## Effets

| Domaine | Champ | Valeur |
|---|---|---|
| **Niveau | **Type d'effet de prix** | `Fixed Price` |
| **Niveau | **Prix fixe** | `$0.00` |
| **Niveau | **Prix cible de l'article** | `Lowest` |
| **Niveau | **Qualification** | `Zinger Burger` |

:::tip
Définition **Prix cible de l'article** à`Lowest`assure le moins cher des deux hamburgers est celui`$0.00`, qui est le comportement BOGO standard.
:::

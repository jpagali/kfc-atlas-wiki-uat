---
title: Déjeuner spécial (heure limite)
sidebar_label: Déjeuner spécial (heure limite)
---

# Déjeuner spécial (heure limite)

## Objectif

2$ de rabais sur toute commande passée entre 11h et 14h, du lundi au vendredi.

## Exigences

| Domaine | Champ | Valeur |
|---|---|---|
| **Cadre horaire** | **Day Range** | `Mo Tu We Th Fr` |
| **Cadre horaire** | **Heure de départ intermédiaire** | `11:00:00` |
| **Cadre horaire** | **Heure de fin d'intervalle** | `14:00:00` |
| **Cadre horaire** | **Validation par rapport à l'heure actuelle** | `Yes` |

## Effets

| Domaine | Champ | Valeur |
|---|---|---|
| **Niveau de commande** | **Type d'effet de prix** | `Amount Off` |
| **Niveau de commande** | ** Montant annulé** | `$2.00` |

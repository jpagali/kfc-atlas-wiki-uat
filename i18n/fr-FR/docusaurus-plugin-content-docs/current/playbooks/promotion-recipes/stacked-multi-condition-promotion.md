---
title: Promotion multi-conditions empilées
sidebar_label: Promotion multi-conditions empilées
---

# Promotion multi-conditions empilées

## Objectif

App-seulement, les utilisateurs inscrits obtiennent 10% de réduction de commandes de plus de 25 $ le week-end.

## Exigences

Toutes les conditions ci-dessous doivent être remplies.

| Domaine | Champ | Valeur |
|---|---|---|
| **Channel** | **Choisir les canaux** | `Mobile`, `iOS`, `Android` |
| **État de l'utilisateur** | **Est-ce que le client inscrit?** | `Yes` |
| **Sous-total** | ** Total partiel** | `$25.00` |
| **Cadre horaire** | **Day Range** | `Sa Su` |
| **Cadre horaire** | **Heure de départ intermédiaire** | `00:00:00` |
| **Cadre horaire** | **Heure de fin d'intervalle** | `23:59:59` |

## Effets

| Domaine | Champ | Valeur |
|---|---|---|
| **Niveau de commande** | **Type d'effet de prix** | `Percent Off` |
| **Niveau de commande** | **En pourcentage** | `10` |

---
title: Réduction du code de coupon
sidebar_label: Réduction du code de coupon
---

# Réduction du code de coupon

## Objectif

10 $ de rabais pour les clients qui entrent le code`SAVE10`.

## Informations de base

| Champ | Valeur |
|---|---|
| **Automatique** | `No` |
| **Ajouter un code de révocation** | `SAVE10` |

## Exigences

| Domaine | Champ | Valeur |
|---|---|---|
| **Facultatif** | **Max Utilisations totales par client** | `1`limiter à une utilisation par client |
| **Facultatif** | **Nombre maximum de fois où une promotion peut être utilisée** | Plafond total des remboursements |

## Effets

| Domaine | Champ | Valeur |
|---|---|---|
| **Niveau de commande** | **Type d'effet de prix** | `Amount Off` |
| **Niveau de commande** | ** Montant annulé** | `$10.00` |

---
title: Configurations du marché
sidebar_position: 4
---

# Configurations du marché

La plateforme Atlas utilise une architecture de drapeau **de caractéristiques** – une base de code partagée unique où les différences au niveau du marché sont contrôlées par configuration, et non par déploiements séparés. Les équipes régionales peuvent activer ou désactiver les fonctionnalités de manière indépendante sans attendre la sortie du produit.

## Que peut-on configurer par marché

| Domaine d'activité | Configurable ? | où |
|---|---|---|
| Type de programme de fidélité | ✅ | Paramètres du marché → Fidélité |
| Taux de gain de fidélité | ✅ | Paramètres du marché → Règles de fidélité |
| Comportement au code promotionnel | ✅ | Paramètres du marché → Promotions |
| Étapes de voyage (montrer/cacher) | ✅ | Paramètres du marché → Voyage client |
| Commander la disponibilité du canal | ✅ | Restaurant → Paramètres de la chaîne |
| Rayon de livraison | ✅ | Restaurant → Paramètres de la chaîne → Livraison |
| Livraison minimale | ✅ | Restaurant → Paramètres de la chaîne → Livraison |
| Modalités de paiement | ✅ | Paramètres du marché → Paiements |
| Passage des clients | ✅ | Paramètres du marché → Voyage client |
| Ordres futurs prévus | ✅ | Paramètres du marché → Voyage client |

## Australie — Configuration actuelle

| Réglage | Valeur |
|---|---|
| Type de fidélité | Voucher-basé (KFC App Deals) |
| Taux de rémunération | N/A — modèle de bon |
| Codes promotionnels | Activé |
| Ordres prévus | Handicapé |
| Passage des clients | Activé |
| Intégration de l'agrégateur | Uber mange, porte deash |

## Demande de modification de configuration

Les modifications de configuration pour les fonctions existantes sont auto-servies par le portail Byte. Si une fonctionnalité est **grissed out**, soit:
1. N'a pas encore été construit pour votre marché — posez une demande via le JIRA Service Desk
2. Nécessite un accès administratif régional — contactez votre BMU

:::info
Tous les changements de configuration prennent effet **immédiatement** — aucun déploiement n'est nécessaire et aucun autre marché n'est affecté.
:::

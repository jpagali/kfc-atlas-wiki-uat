---
title: Aperçu de l'avant-plan
sidebar_position: 1
---

# Aperçu de l'avant-plan

**KFC Atlas** est le front-end mondial de KFC pour la commande numérique – ce que vos clients interagissent avec lorsqu'ils commandent en ligne, à travers l'application KFC, ou via un agrégateur tiers.

Atlas est construit sur **Byte Helium**, le système de conception d'entreprise de Yum! et la fondation front-end. Dans l'image plus large de la plateforme Atlas, Atlas travaille avec **Byte Commerce + Byte Portal**, et avec **Byte Connect** chaque fois qu'un POS du marché n'est pas Byte POS.

Ce guide s'adresse aux équipes **restaurant et aux BMU** qui doivent comprendre ce que la plateforme fournit aux clients, comment elle se comporte dans chaque marché et ce qui est configurable sans nécessiter un déploiement de produit.

## Ce que couvre le front-end

Le front-end Atlas couvre quatre domaines :

- **Customer Journey** — le flux de bout en bout de la découverte à la confirmation de commande
- ** Chaînes de commande** — comment les dîners, la livraison et le takeaway sont présentés et gérés par restaurant
- ** Sondages sur l'engagement des clients** — Comment les programmes de rétroaction de style KFC écoutent-ils recueillent le sentiment post-commande
- ** Configurations de marché** — ce qui peut être activé ou désactivé par marché (loyauté, promo, programmation)

## Système de conception

Le front-end Atlas KFC est construit sur **Byte Helium**, le système de conception d'entreprise de Yum! et la fondation de front-end. L'hélium fournit les jetons de conception partagés, les composantes de l'assurance-chômage et les modèles structurels; Atlas applique la marque KFC en plus de cette fondation pour que l'expérience se sente KFC-native tout en utilisant le système Yum! partagé en dessous.

### Philosophie du design

Atlas est intentionnellement conçu autour d'un flux d'achat ** focalisé**, pas simplement les moindres clics possibles. Certains voyages peuvent utiliser plus d'étapes quand cela donne aux clients des choix plus clairs, rend le produit plus facile à comprendre et présente des options d'échange pertinentes au moment où ils décident quoi acheter.

Cela signifie que l'avant-plan doit être jugé en fonction de la clarté, de la confiance et de l'utilité commerciale du voyage, et non seulement en fonction de sa courte durée. Un flux de repas, par exemple, peut exposer des améliorations de taille, des add-ons, ou des choix de personnalisation étape par étape parce que ces décisions sont plus faciles à comprendre en contexte que si chaque option est effondrée dans un écran dense.

Voir[Système de conception](/docs/frontend/design-system)pour une explication complète de la façon dont l'identité visuelle s'écoule de Figma jusqu'à l'écran.

## Marchés de portée

| Marché | Plateforme App |
|---|---|
| Australie | KFC App Australie + Web |

## Qui devrait lire ceci

| Rôle | Pourquoi c'est pertinent |
|---|---|
| Opérateur de restaurant / Équipe de marché | Comprendre ce que vos clients vivent et ce que vous pouvez configurer |
| BMU / Bureau régional | Comprendre les options de configuration au niveau du marché et comment activer les fonctionnalités |
| Pré-vente / Nouveau marché à bord | Comprendre les capacités de base de la plate-forme avant de partir |

:::info
Le front-end est construit sur une base de code partagée sur tous les marchés. Les différences de marché sont contrôlées par configuration — pas par constructions séparées.
:::

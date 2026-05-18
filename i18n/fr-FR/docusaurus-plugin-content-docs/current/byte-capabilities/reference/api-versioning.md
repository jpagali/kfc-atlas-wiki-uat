---
title: Version de l'API & Déprécation
description: Comment les API de la plate-forme Atlas sont versionnées et combien les marchés de préavis obtiennent avant de casser les changements.
sidebar_label: Version de l'API
---

# Référence de version et de déprécation de l'API

> Toutes les API de plate-forme utilisent la version sémantique. Les changements de rupture nécessitent des bosses de version majeures. Les marchés sont notifiés avant les fenêtres de déprécation.

Comprendre les fenêtres de déprécation est important pour la planification du lancement du marché — les intégrations construites avant la fin d'une fenêtre de déprécation sont sûres. Après la fenêtre, les changements de rupture peuvent s'appliquer.

---

## Déprécation de Windows par domaine API

| Domaine API | Politique de compatibilité | Avis d'annulation |
|---|---|---|
| Identité | Mineur compatible avec l'arrière | 90 jours |
| Contexte / Localisation | Mineur compatible avec l'arrière | 90 jours |
| Menu | Mineur compatible avec l'arrière | 120 jours (les marchés ont besoin d'une phase de déploiement) |
| Panier | Changements additifs seulement | 90 jours |
| Commander Orchestrator | Changements additifs seulement | 120 jours |
| Paiements / PSP | Changements additifs seulement | 180 jours (les mandats du programme s'appliquent — la plus longue fenêtre de la plateforme) |
| Promo / fidélité | Changements additifs seulement | 120 jours |
| Dons / Conseils | Changements additifs seulement | 90 jours |
| Commandes / Suivi | Changements additifs seulement | 120 jours |
| CMS / CMS juridique | Additif; locale/version-aware | 180 jours |
| Plateforme d'engagement | Changements additifs seulement | 120 jours |

---

## Annexe

**Paiements (180 jours) La plus longue fenêtre de déprécation de la plateforme. Les changements de schéma de paiement affectent les intégrations PSP, les jetons voûtés et les exigences de conformité, qui nécessitent tous une coordination élargie du marché.

**CMS / Legal (180 jours)** — Les documents juridiques sont mis en version par lieu. Les modifications apportées à l'API CMS juridique exigent des cycles d'examen juridique correspondants avant que les marchés puissent adopter de nouvelles versions.

**Menu (120 jours)** – Les marchés ont souvent besoin de déploiements en pleine étape (dev → mise en scène → prod) avant d'adopter des modifications de menu API, de sorte que la fenêtre est plus longue que le Panier ou l'Identity.

**Modifications supplémentaires seulement** — signifie que de nouveaux champs ou des paramètres peuvent être ajoutés sans une bosse de version. Les champs et comportements existants ne sont pas modifiés ou supprimés pendant la fenêtre de déprécation.

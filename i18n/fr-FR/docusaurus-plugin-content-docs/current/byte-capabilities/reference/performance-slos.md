---
title: SLO de performance
description: Référence rapide pour les objectifs de niveau de service et les objectifs de performance à travers la plateforme Atlas / Byte Helium.
sidebar_label: SLO de performance
---

# LTA de performance

> Référence rapide pour les ALS et les objectifs de performance dans toute la plateforme. Ce sont les points de repère auxquels chaque service est tenu — utilisez-les pour établir les attentes pendant le triage de lancement et d'escalade.

---

## Objectifs de performance de la plate-forme

| Domaine / Service | métrique | Objectif |
|---|---|---|
| Identité — Critères d'évaluation | Disponibilité | 99,95 % par mois |
| Localisation — Contexte chercher | Latence p95 | ≤ 150 ms |
| Menu — Page de listage de produits (PLP) | Latence p95 | ≤ 200 ms |
| Affichage du contenu CMS | Latence p95 | ≤ 150 ms (chiffre CDN) |
| Offre un flux | Latence p95 | ≤ 200 ms |
| Liste des commandes | Latence p95 | ≤ 200 ms |
| Vérification soumise | Succès p99 | ≥99.5% |
| Paiement auth capture | Taux de réussite | ≥99.5% |
| Rédemption de récompense de fidélité | Succès p99 | ≥99.8% |
| Suivi des commandes | Disponibilité | 99.9% |
| Fraîcheur de flux de message dans l'application | Staleness max | ≤ 60 secondes |
| Questions utilisateur/rôle du portail Byte | Latence p95 | ≤ 500 ms |

---

## Annexe

**Checkout submit (≥99.5% p99 success)** — Les clés d'Idempotency garantissent que les soumissions retriées ne créent pas de commandes en double. Un 409 sur la nouvelle présentation renvoie la commande originaleRef.

** Rédemption de récompense de fidélité (≥99,8% p99 succès)** — C'est le succès le plus serré de l'OLS dans la plate-forme, reflétant la sensibilité de revenu et de confiance des rachats de récompense échoués.

**La fraîcheur du message de l'application (=60s)** — Le flux est considéré comme inexistant après 60 secondes. Une traction à la réfrigération est déclenchée à l'expiration du TTL.

**Mesure de rendu (=150ms CDN)** — Sur CDN cache miss, le retour est la version mise en cache plutôt qu'un échec de récupération en direct.

---

:::tip Autres
- [Version de l'API & Déprécation](/docs/byte-capabilities/reference/api-versioning)— fenêtres de déprécation qui affectent la planification
:::

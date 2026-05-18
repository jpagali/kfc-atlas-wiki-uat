---
title: Panier
description: Comment la plateforme Atlas gère ce que les clients ont sélectionné — articles, quantités, récompenses et promos — avant la commande.
sidebar_label: Panier
---

# Panier

**What it does:** Gère ce que le client a sélectionné — articles, quantités, récompenses et promos — avant de passer à la commande.

**Why it matters:** L'intégrité du chariot est essentielle aux revenus. Erreurs de tarification dans le panier, état du chariot perdu, ou applications promo échouées directement causer des commandes abandonnées.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Ajouter un élément au panier** | Le client veut commencer une commande | Ajoute un élément de menu (avec les modificateurs choisis) au panier | Byte Helium envoie une demande add-line à Cart Service; le prix est calculé par backend au moment de l'ajout | Service de carte, service de menu | Réglage de la localisation et du mode de commande | Panier lié à la session; paniers invités perdus si la session expire | Taux d'ajout à la caisse |
| **Mise à jour / Supprimer la ligne de panier** | Le client change d'avis | Mettre à jour la quantité ou retire un article du panier | Cart Service update/supprimer l'appel en ligne; total recalculé | Service du chariot | L'article doit être dans le panier | Le recoupement en temps réel peut changer les prix de surface | Taux de modification du chariot |
| **Appliquer le code promo** | Le client a un code promo | Valide et attache un code promo au panier pour une remise | Byte Helium envoie du code promo au service Cart/Promo; éligibilité validée côté serveur; chariot repris | Service de chariot, moteur Promo | Panier doit avoir des articles; promo doit être valide pour le marché | Erreur de retour de code non valide (400) mais garde le panier intact; un code promo à la fois (configuration du marché) | Taux de remboursement promo, taux d'actualisation |
| **Ajouter une récompense au panier** | Un membre de fidélité veut utiliser une récompense | Attribue une récompense de fidélité au panier (p. ex., article gratuit) | Récompense validée avec service de fidélité; jeton de récompense attaché au panier | Service de fidélité, service Cart | Le client doit être connecté et inscrit à Fidélité | La récompense ne doit pas être expirée; un seul type de récompense par chariot (config. du marché) | Taux de fixation de la prime |
| **Supprimer la récompense du panier** | Le client change d'avis sur une récompense | Détache la récompense du chariot | Récompense de service de fidélité supprimée; total du chariot mis à jour | Service de fidélité, service Cart | La récompense doit être dans le panier | Rendement de la rémunération au solde disponible | Taux de modification du chariot |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Add Item to Cart / Apply Promo</summary>

- **FRD References:** [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048)
- **TRD Domain:** Cart
- **Key Interfaces / APIs:** Add/Update/Remove Line (App → Cart), Apply/Remove Promo (App → Cart)
- **Data Contracts:** Cart (id, lines[], totals, benefits[]) — idempotent ops
- **Source Summary:**
  - All cart operations are idempotent (safe to retry)
  - Pricing correctness: 100% accuracy required (enforced via golden tests in backend)
  - Invalid promo (400): error shown, cart state preserved
  - Cart API: additive changes only, 90-day deprecation window
  - Promo eligibility is always server-side — never computed in Byte Helium

</details>

---

:::tip See it in the wiki
- How customers experience the cart front-end → [Order and Get: Cart](/docs/frontend/customer-journey/order-and-get/cart)
- How to create and manage promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Promotion Recipes](/docs/playbooks/promotions-setup-guide)
:::

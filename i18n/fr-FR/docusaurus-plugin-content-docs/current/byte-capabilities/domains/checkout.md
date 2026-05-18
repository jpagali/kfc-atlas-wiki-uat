---
title: Départ
description: Comment la plate-forme Atlas guide les clients du chariot à la commande passée — collecte des détails de livraison, validation de tout, et soumission de l'intention de la commande.
sidebar_label: Départ
---

# Départ

**What it does:** Guide le client du panier à la commande passée — recueillir les détails de livraison, valider tout, et soumettre l'intention de la commande.

**Why it matters:** Checkout est l'étape la plus importante. Tout échec ici signifie une vente perdue. La vérification doit traiter les utilisateurs invités, les différences de livraison et de collecte, et être résistante aux erreurs de soumission.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Voyage de départ** | Tous les clients ne veulent pas créer un compte | Permet aux clients de passer une commande sans se connecter | Paiement par session: email OTP ou session anonyme utilisée; panier lié à la session | Commander Orchestrator, Service d'adresse | Panier valide avec articles | Pas d'historique de commande ou de fidélité pour les sessions des invités; adresses non sauvegardées | Taux de conversion du départ des clients |
| **Départ — Livraison** | Le client veut de la nourriture livrée à son adresse | Collecte l'adresse de livraison, affiche les frais, soumet la commande | Adresse validée → frais de livraison cités → commande soumise avec l'information de livraison jointe | Commander Orchestrator, Service d'adresse, Service géo | Set mode de livraison; stocker avec la couverture de livraison active | L'adresse doit se trouver dans la zone de couverture; les frais sont calculés en fonction de l'arrière-plan (et non de l'hélium Byte) | Taux de livraison |
| **Départ — Recouvrement** | Client ramassant en magasin | Paiement simplifié avec sélection du magasin et temps de ramassage | Store confirmé → aucune adresse nécessaire → commande soumise | Commander Orchestrator | Mode de collecte; stockage ouvert | La conservation doit être en état d'ouverture; les politiques de restriction peuvent limiter les commandes | Taux de paiement |
| **Variants de livraison** | Différents marchés/scénarios ont des flux de caisse différents | Prise en charge des configurations d'étapes de départ spécifiques au marché | Orchestrator gère des sessions de paiement de différentes versions; les étapes varient selon le contexte | Commander Orchestrator | Variante de marché configurée | Les variantes doivent être configurées par l'équipe du marché, et non par Byte Helium. | Taux d'achèvement des départs par variante |
| **Commander à nouveau** | Le client veut répéter une commande précédente | Repopule chariot avec des articles d'un ordre passé | Précédent détail de commande récupéré → articles ajoutés retour au panier → reprise de la commande | Service des commandes, service du chariot | Le client doit être signé; les commandes antérieures doivent exister | Les éléments non disponibles dans le menu actuel seront exclus avec un avertissement | Taux de réorganisation |

---

## Sources techniques

<details>
<summary>📎 Technical Source: Guest Checkout / Delivery Checkout</summary>

- **FRD References:** [FRD-HEL-012](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-012), [FRD-HEL-013](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-013), [FRD-HEL-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-014), [FRD-HEL-015](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-015)
- **TRD Domain:** Checkout (Core)
- **Key Interfaces / APIs:** Start/Resume Checkout, Address Create/Validate, Fees & Taxes Quote, Submit Order
- **Data Contracts:** CheckoutSession (id, cartRef, mode, steps); OrderIntent (totals, tenders, deliveryInfo — with idempotency keys)
- **Source Summary:**
  - Checkout submission p99: ≥99.5% success
  - Idempotency keys prevent duplicate orders on resubmit (409 replay returns original orderRef)
  - Fees and taxes calculated by backend — Byte Helium displays only
  - Orchestrator APIs: additive changes only, 120-day deprecation
  - Correlation IDs tracked for all submission events

</details>

---

:::tip See it in the wiki
- How customers experience checkout in the front-end → [Order and Get: Checkout](/docs/frontend/customer-journey/order-and-get/checkout)
:::

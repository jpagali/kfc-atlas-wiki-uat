---
title: Limites des capacités
description: Qui possède ce que sur la plate-forme Atlas - la référence sans ambiguïté pour ce que Byte Helium fait et ne fait pas.
sidebar_label: Limites des capacités
---

# Limites des capacités

> Utilisez ce tableau pour répondre: *"Peut Byte Helium faire X?"* et *"Qui possède réellement ceci?"*

Cela rend la propriété sans ambiguïté. Les erreurs les plus courantes dans la planification et la cadrage viennent de supposer que Byte Helium possède quelque chose qu'il ne possède pas. En cas de doute, vérifiez d'abord ce tableau.

---

## Tableau de la propriété

| Capacité | Détenu par | NON possédés par | Annexe |
|---|---|---|---|
| Calcul de la tarification | Aide au commerce | hélium octet | Byte Helium affiche les prix qu'il reçoit |
| Création du contenu du menu | Menu Byte (outil externe) | Portail d'octets, Byte Helium | Attributions de portail d'octets; rendu d'hélium d'octets |
| Logique d'éligibilité de la promo | Moteur Promo (côté serveur) | hélium octet | Byte Helium ne calcule jamais l'éligibilité |
| Calcul des points de fidélité | Service de fidélité | hélium octet | Byte Helium affiche seulement l'équilibre |
| Traitement / saisie des paiements | PSP (via Vault) | hélium octet | Byte Helium envoie des jetons; PSP fait le reste |
| Traitement des données des cartes (PAN) | SDK PSP | hélium octet | Captures SDK; pas de PAN dans Byte Helium |
| Calcul de la taxe | Moteur fiscal / moteur de commerce | hélium octet | Taux d'imposition fixés dans Byte Portal; calculés à la caisse |
| Validation de l'adresse | Service d'adresse | hélium octet | Byte Helium appels Service d'adresse |
| État de conservation (ouvert/fermé) | Portail d'octets + POS | hélium octet | Byte Helium lit l'état depuis le service Store |
| Heures de négociation | Portail d'octets (module Stores) | hélium octet | Configuration dans le portail Byte; rendu par Byte Helium |
| Zones de couverture | Portail Byte / Service géo | hélium octet | Couverture validée lors de la sélection du mode de livraison |
| Envoi de notifications de poussée | Fournisseur de push (extérieur) | hélium octet | Byte Helium gère les préférences; le fournisseur envoie |
| Création de contenu CMS | CMS (via le portail Byte) | hélium octet | Byte Portal publie; Byte Helium rend |
| Document juridique auteur | Équipe juridique via Legal CMS | hélium octet | Byte Helium rend ce que Legal CMS fournit |
| Catégories de cookies | CMP (configuré par marché) | hélium octet | Byte Helium rend le widget CMP |
| Acquisition / règlement | PSP | Byte Helium, moteur du commerce | Hors de portée pour Atlas |
| Intégration POS/KDS | Commerce Backend + Portail | hélium octet | Byte Helium n'a pas de connexion directe aux points de vente; les marchés autres que les points de vente exigent Byte Connect entre Byte Commerce et les points de vente |
| ingestion par ordre d'agrégateur | Raccord d'octet (raccords commerciaux) | hélium octet | Les commandes agrégées entrent via la passerelle Commerce Backend |
| Création d'un registre d'audit | Byte Portal + tous les services | Les marchés peuvent configurer | La vérification est générée par le système; immuable |
| Ciblage des drapeaux | Portail d'octets (module de réglages) | hélium octet | Byte Helium respecte les drapeaux; Portal les cible |
| Garantie de livraison Webhook | Plateforme d'intégration | Marchés | Au moins une fois; les abonnés traitent idempotency |

---

## Le principe de base

Byte Helium est une couche d'orchestration**. Il demande les données des services de backend, les rend au client et capture les entrées du client à renvoyer au backend. Il ne possède pas d'état, n'effectue pas de calculs et ne détient pas de secrets.

Tout ce qui ressemble à un « comportement d'application » pour un client est en fait une décision de backend que Byte Helium présente. C'est par la conception — cela signifie que le comportement peut être modifié par configuration sans redéployer le front-end.

:::note Octet POS Cavat
Commerce Backend est branché pour parler directement à **Byte POS**. Si un marché n'utilise pas Byte POS, **Byte Connect** doit être embarqué comme pont entre Byte Commerce et le POS de ce marché.
:::

---

:::tip Autres
- [Vérification de la réalité](/docs/byte-capabilities/enablement/reality-check)— les idées fausses les plus répandues sur les déploiements
- [Couches de plate-forme](/docs/byte-capabilities/platform-layers)— ventilation en anglais simple de ce que chaque couche fait
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)— quand et pourquoi Byte Connect est nécessaire
:::

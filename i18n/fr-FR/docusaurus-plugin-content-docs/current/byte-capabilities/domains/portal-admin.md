---
title: Portail Byte — Administrateur & Configuration
description: Ce que fait Byte Portal — le plan de contrôle complet pour les équipes du marché et des opérations couvrant les magasins, les menus, les promotions, les taxes, les paiements, etc.
sidebar_label: Portail d'octets — Administrateur & Config
---

# Portail Byte — Administrateur & Configuration

**What it does:** Byte Portal est le plan de contrôle de tous les marchés et équipes d'opérations. C'est là que tout ce qui concerne la plateforme est configuré, des heures de magasin et des menus aux promotions, aux taxes, aux paiements et aux remboursements.

**Why it matters:** Sans Byte Portal, les marchés ne peuvent pas vivre. Chaque fonctionnalité dans Byte Helium dépend de quelque chose qui est configuré correctement dans Byte Portal. La mauvaise configuration dans le portail Byte a un impact client direct.

:::danger Byte Portal ne fait pas de menus auteurs
L'auteur du menu (créant des éléments, des descriptions, des prix, des options) se trouve dans **Byte Menu** — un outil séparé en dehors de la plateforme Atlas. Byte Portal attribue des versions de menu déjà publiées aux marchés et aux canaux. Il peut appliquer des correctifs et des surcharges de prix, mais ne peut pas créer de contenu de menu à partir de zéro.
:::

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| **Utilisateurs et rôles (RBAC)** | Les équipes de marché ont besoin d'un accès étendu | Invite les utilisateurs, attribue les rôles, applique l'accès fondé sur la portée (marché/groupe/magasin) | SSO + MFA pour la connexion; RBAC avec moteur de politique; les blocs de protection hors champ d'accès | Fournisseur d'identité, service RBAC, magasin d'audit | IdP configuré par marché | Les rôles personnalisés utilisent la liste blanche d'action approuvée seulement; toutes les actions vérifiées | Taux de violation d'accès, temps d'embarquement de l'utilisateur |
| **Configuration du & groupe** | Les marchés doivent configurer leurs restaurants | Gère les données administratives de stockage, les hiérarchies de groupe, les heures de trading, l'état en temps réel et les politiques de throttling | Les magasins liés à des POS; les groupes définissent l'héritage; les heures de trading timezone-aware; l'état (ouvert/pausé/fermé) affecte les canaux | Intégration POS, Catalogues partagés | Stocker les données ensemencées | Pas de cycles dans la hiérarchie de groupe; l'état est une source de vérité en temps réel pour tous les canaux | Précision des données, temps d'arrêt |
| **Assignation et Patching de menu** | Les marchés doivent contrôler quel menu est affiché où | Assigne les versions de menu publiées au marché/au magasin/au canal; applique les correctifs, les parties de jour et les surcharges | Byte Portal consomme les versions publiées de Byte Menu; les affectations avec fenêtres de validité; les modèles de patch pour les règles de prix/disponibilité; les parties de jour pour la disponibilité et les prix en fonction du temps | Menu d'octets, moteur d'assignation de menus | Version du menu publiée dans le menu Byte | Byte Portal ne fait PAS de menus d'auteur — c'est le menu Byte. Les patchs contradictoires sont bloqués. Le comportement Daypart dépend toujours de la structure de menu publiée qui supporte les entités cibles. | Menu publier le taux de succès |
| **Promotions Configuration** | Les équipes marketing doivent créer et gérer des offres | Créer des promotions avec admissibilité, avantages sociaux, horaires, codes et budgets | Définition promotionnelle → évaluation par Commerce Backend à la caisse | Commerce Backend, Moteur Promo | Configuration de promotion terminée | Affronter les conflits résolus par la politique; les budgets expirés bloquent automatiquement de nouveaux rachats | Taux de remboursement promotionnel, taux de réduction du budget |
| ** Configuration fiscale** | Les équipes financières doivent fixer des taux d'imposition corrects | Définit les profils fiscaux, les catégories, les taux, les règles et les arrondis par marché | Profils fiscaux attribués aux marchés; le moteur de tarification s'applique à la caisse | Moteur fiscal, service de tarification | Profil fiscal créé et attribué | Taux de chevauchement bloqués; doit s'aligner sur le droit local | Précision fiscale, taux de réussite de la vérification de la conformité |
| ** Configuration des paiements** | Les marchés doivent mettre en place leurs méthodes de paiement | Configurer les profils PSP, les méthodes de paiement, les règles d'acheminement, les politiques de supplément et les règles de risque | Identifications PSP stockées dans le coffre-fort (pas dans le portail Byte); moteur de routage utilise les règles de canal/marché | PSP, Vault, Moteur d'acheminement | Contrat PSP en place; références dans le coffre-fort | Secrets jamais exposés dans le portail Byte; les changements de routage ne doivent pas interrompre les flux de paiement | Mode de paiement disponibilité, taux d'erreur de routage |
| **Ordres et remboursements (Op)** | Les équipes opérationnelles doivent gérer les problèmes des clients | Commandes de recherche (remboursement de l'IPI), remboursements de processus, gestion des ajustements non monétaires | Recherche de commande avec accès PII basé sur le rôle; remboursement validé en fonction de la politique; approbation facultative en plusieurs étapes | Service des commandes, PSP, Magasin d'audit | Configuration de la politique de remboursement | Plafonds de remboursement, délais et règles d'approbation fixés dans la politique; suppression permanente interdite | Délai de traitement des remboursements, taux de rejet des remboursements |
| **Localisation et gestion du contenu** | Les marchés ont besoin de contenus localisés | Gère les locaux, les clés de traduction, les blocs de contenu, les annonces et les mentions légales | Entrées de traduction par localité; blocs de contenu prévus par champ d'application; avis juridiques en version | CMS, CMS juridique, CMP | Locale autorisée pour le marché | Les traductions manquantes reviennent à la locale par défaut | Couverture de la traduction, taux d'activation local |
| **Drapeaux et paramètres de caractéristiques** | Ingénierie et produits ont besoin de déploiements contrôlés | Crée des drapeaux avec des règles de ciblage; gère la hiérarchie des paramètres système | Drapeaux évalués au moment de l'exécution par marché/canal/segment; les paramètres héritent de l'environnement mondial → marché → | Service de configuration, moteur du drapeau | Flag créé et ciblé | Mauvais retour de configuration via l'historique de la version ou le commutateur de kill-switch | Taux d'adoption du drapeau, taux d'erreur de configuration |
| ** Déclaration et exportations** | Les équipes ont besoin de données de la plateforme | Définit les rapports, enregistre les vues, exporte les données dans le fichier ou la livraison programmée | Déclarer l'entrepôt de données des moteurs de requêtes; les exportations se sont matérialisées asynchronement; livrées à S3/FTP/Email/Webhook | entrepôt de données, moteur d'exportation | Rapport défini et accès accordé | Grandes exportations avec suivi des progrès; RBAC contrôle ce que chaque rôle peut exporter | Utilisation des rapports, taux de réussite des exportations |
| **Hooks Web & Intégrations** | Les systèmes tiers ont besoin d'événements de plateforme | Gère les abonnements webhook pour les événements de plateforme; surveille la livraison et DLQ | Livraison au moins dès que possible; signature avec l'AMAC/OAuth; DLQ pour les événements échoués | Plateforme intégration/événement | Type d'événement souscrit; paramètre configuré | Au moins une fois (pas exactement une fois); les abonnés doivent gérer idempotency | Taux de succès de livraison Webhook, taille DLQ |
| **Audit et observabilité** | La conformité et les opérations nécessitent une visibilité | Enregistre toutes les actions administratives avec qui/quoi/quand; surveille les contrôles de santé et les ALS | Événements de vérification structurés; registres d'accès; contrôles de santé et règles d'alerte; suivi de l'ALS avec budget d'erreur | Magasin d'audit, plateforme d'observation | Observabilité configurée | Registres d'audit résistants aux manipulations; modifications non autorisées | Conformité des OLS, exhaustivité de la vérification |

---

:::tip Voir dans le wiki
Byte Portal se trouve au-dessus de la carte directement vers le Guide du Portail Admin :

- [Magasins](/docs/admin-portal-guide/stores/)— Configuration du stockage et du groupe
- [Menus](/docs/admin-portal-guide/menus/)et[Produits](/docs/admin-portal-guide/products/)— Affectation de menus & Patching
- [Promotions](/docs/admin-portal-guide/promotions/)et[Groupes de stockage](/docs/admin-portal-guide/store-groups/)— Configuration des promotions
- [Ensembles](/docs/admin-portal-guide/bundles/)— Gestion des forfaits et des choix
- [Agents](/docs/admin-portal-guide/agents/)— Agents d'automatisation
- [Soutien à la clientèle](/docs/admin-portal-guide/customer-support/)— Ordonnances et remboursements
- [Dispositifs en magasin](/docs/admin-portal-guide/in-store-devices/)— Gestion des périphériques POS
:::

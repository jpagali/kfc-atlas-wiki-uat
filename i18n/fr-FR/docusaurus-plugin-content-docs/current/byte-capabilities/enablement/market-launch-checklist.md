---
title: Liste de vérification du lancement du marché
description: Une liste de contrôle go/no-go pour les équipes de marché qui lancent sur la plateforme Atlas / Byte Helium. Construits à partir de la couche de réalité — ce sont les choses qui échouent en réalité si elles sont ignorées.
sidebar_label: Liste de vérification du lancement du marché
---

# Liste de vérification du lancement du marché

> Cette liste de contrôle est construite à partir du[Vérification de la réalité](/docs/byte-capabilities/enablement/reality-check)— les écarts de dépendance et les modèles d'échec qui apparaissent dans chaque déploiement. Travaillez dans l'ordre. Ne démarrez pas avant que la phase 1 ne soit terminée.

---

## Comment utiliser cette liste de contrôle

Chaque article a un niveau de risque **** et un seuil de risque ** aller/aller/aller**. Les éléments marqués -- sont des bloqueurs durs — le lancement ne peut pas se faire en toute sécurité sans eux. Les éléments marqués -- doivent être confirmés avant le début de l'UTA. Les items marqués -- sont des items polis qui devraient être faits avant le jour du lancement.

---

## Phase 1 — Fondation (doit être terminée avant tout essai)

### 1.1 Accès au portail Byte et utilisateurs

:::danger Aller / Porte sans aller
Les tests ne peuvent commencer tant que l'équipe n'a pas accès au portail Byte.
:::

- [ ] L'environnement du portail Byte est prévu pour le marché
- [ ] Les utilisateurs de l'administration du marché ont invité et assigné des rôles corrects (RBAC)
- [ ] Scope Guard vérifié — les utilisateurs ne peuvent pas accéder aux données hors du marché
- [ ] MFA activé pour tous les utilisateurs du portail Byte

---

### 1.2 Configuration du stockage

:::danger Aller / Porte sans aller
Les clients ne peuvent pas commander si les magasins sont manquants ou mal configurés.
:::

- [ ] Tous les magasins de lancement créés dans Byte Portal avec des données de stockage correctes
- [ ] Heures de négociation entrées dans le fuseau horaire ** correct** (point de défaillance commun)
- [ ] Stocker l'état en temps réel intégré avec POS (open/paused/fermé reflète l'état en direct)
- [ ] Stocker les groupes configurés avec une hiérarchie correcte — aucun cycle
- [ ] Réglage des politiques (limites d'ordre par fenêtre de temps) le cas échéant

---

### 1.3 Menu

:::danger Aller / Porte sans aller
Les clients ne voient pas de menu si le pipeline de publication n'est pas terminé.
:::

- [ ] Le contenu du menu est entièrement écrit dans **Byte Menu** (pas le portail)
- [ ] Version du menu publiée dans le menu Byte pour tous les canaux de lancement
- [ ] Version de menu assignée au marché du Portail Byte
- [ ] Menu testé : les articles corrects, les prix et les modificateurs montrent par magasin/canal
- [ ] Produits livrés uniquement et collectionnés correctement par canal
- [ ] Données nutritionnelles et allergènes publiées dans le menu Byte (si requis par le marché)

---

### 1.4 Configuration fiscale

:::danger Aller / Porte sans aller
Une taxe incorrecte entraîne une mauvaise tarification à la caisse, un risque financier et de conformité.
:::

- [ ] Profil fiscal créé pour le marché avec des taux et des catégories corrects
- [ ] Règles fiscales vérifiées en conformité avec la législation fiscale locale avec l'approbation des Finances
- [ ] Profil fiscal attribué au marché du portail Byte
- [ ] Le test de caisse de bout en bout montre une ventilation correcte de la taxe

---

### 1.5 Paiements / PSP

:::danger Aller / Porte sans aller
Les paiements ne peuvent pas être traités si le PSP n'est pas configuré de bout en bout.
:::

- [ ] Contrat PSP en place pour le marché
- [ ] Identifications PSP stockées dans la Vault (NOT dans le portail Byte directement)
- [ ] Profil PSP créé dans le portail Byte avec des méthodes de paiement correctes activées
- [ ] Règles de routage configurées ( routage par canal/marché)
- [ ] Politiques de surtaxe et de frais configurés (le cas échéant)
- [ ] Paiement de la carte de bout en bout testé avec succès dans la mise en scène

---

## Phase 2 — Canaux et expériences (doivent être achevés avant la TAU)

### 2.1 Localisation

:::warning Portail pré-UAT
Une mauvaise localisation signifie que les clients voient des menus, des prix ou des textes incorrects.
:::

- [ ] Marché configuré en Byte Portal / Service Config avec une localisation correcte
- [ ] Test de détection de langue/locale (géo-IP et sélection explicite)
- [ ] Clés de traduction complètes pour toutes les chaînes d'interface utilisateur — rapport de couverture d'exécution
- [ ] Traductions manquantes confirmées pour revenir à l'anglais correctement (pas aux champs vides)

---

### 2.2 Modes de commande

:::warning Portail pré-UAT
Le mode de commande est le point d'entrée — si cela échoue, aucune commande ne peut être passée.
:::

- [ ] Mode collection testé de bout en bout: sélection du magasin → menu → commande → commande passée
- [ ] Mode de livraison testé de bout en bout: entrée d'adresse → contrôle de couverture → menu → commande → commande passée
- [ ] Zones de couverture de livraison configurées dans le portail Byte / Service géo (si la livraison est activée)
- [ ] Mode de livraison désactivé pour les marchés ne supportant pas la livraison
- [ ] L'état de stockage (ouvert/fermé) bloque correctement la commande des magasins fermés

---

### 2.3 Identité et comptes

- [ ] Connexion par courriel OTP testée (enregistrement et connexion)
- [ ] Google OAuth testé (si activé pour le marché)
- [ ] Apple Sign-In testé (si activé pour le marché)
- [ ] Fonctionnement de l'édition du profil, des préférences de communication et de la suppression de compte
- [ ] Chemin de départ de l'invité testé (pas de compte requis)

---

### 2.4 Promotions

:::warning Portail pré-UAT
Les promos mal ciblées peuvent être rachetées par le mauvais marché ou canal.
:::

- [ ] Toutes les promotions de lancement configurées dans Byte Portal avec raison :
  - Étendue du marché (non mondiale sauf si elle est prévue)
  - Couverture des canaux (livraison par rapport à la collecte, le cas échéant)
  - Plage de dates (dates de début et de fin définies)
  - Limites budgétaires (configuration des plafonds de remboursement)
- [ ] Code promo testé: s'applique correctement, code invalide retourne erreur mais garde le panier
- [ ] La promotion ne s'empile pas avec d'autres promos sauf si le gerbage est prévu

---

### 2.5 Fidélité (si le marché est lancé avec Fidélité)

- [ ] Programme de fidélité autorisé pour le marché avec l'équipe Global Loyalty
- [ ] Flux de fidélité à bord testé pour les nouvelles inscriptions
- [ ] La balance des points indique correctement après la commande
- [ ] Le catalogue des récompenses montre des récompenses correctes pour le marché
- [ ] Rédemption de récompense testée de bout en bout
- [ ] Défis configurés (le cas échéant)
- [ ] Déclencheurs de récompense d'anniversaire / inscription configurés

---

### 2.6 Suivi de la livraison (si le marché a un suivi en temps réel)

- [ ] Intégration logistique 3P confirmée et testée
- [ ] ETA en temps réel affiché correctement sur l'écran de suivi des commandes
- [ ] Comportement de repli confirmé si les événements de suivi sont retardés

---

## Phase 3 — Contenu et juridique (doit être terminé avant la date de lancement)

### 3.1 Contenu du CMS

:::warning Ceux-ci seront visibles pour les clients le premier jour.
:::

- [ ] Page d'accueil du contenu rédigé et publié dans CMS
- [ ] À propos / Notre page Histoire publiée
- [ ] Contenu de la FAQ rédigé et publié
- [ ] Carrières / Conseil d'emploi configuré (le cas échéant)

---

### 3.2 Droit et conformité

- [ ] Conditions générales publiées dans le CMS juridique pour le marché local et date d'entrée en vigueur
- [ ] Politique de confidentialité publiée pour le marché local
- [ ] Catégories de cookies configurées en CMP par loi locale sur les cookies
- [ ] Bannière de consentement aux cookies testée — préférences correctement stockées

---

## Phase 4 — Opérations (avant la mise en service)

### 4.1 Options

- [ ] Tous les drapeaux spécifiques au marché examinés et définis correctement dans le portail Byte
- [ ] Drapeaux de basculement identifiés pour les caractéristiques critiques
- [ ] Configuration du drapeau testée en mise en scène — aucune fonctionnalité inattendue activée ou désactivée

---

### 4.2 Webhooks & Intégrations (le cas échéant)

- [ ] Les abonnements Webhook configurés pour les systèmes tiers
- [ ] Paramètres de l'abonné confirmés comme idémpotent (manipulation des événements en double en toute sécurité)
- [ ] Surveillance et alertes de DLQ (queue de lettre morte) configurées

---

### 4.3 Remboursements et opérations

- [ ] Politique de remboursement configurée dans le portail Byte (caps, délais, règles d'approbation)
- [ ] L'équipe Ops a accès au portail Byte aux remboursements de traitement
- [ ] Commandez la recherche testée avec un accès PII basé sur le rôle correct

---

### 4.4 Observabilité

- [ ] Contrôles de santé et tableaux de bord SLO configurés pour le marché
- [ ] Règles d'alerte actives pour les services de caisse, de paiement et de suivi
- [ ] Accès au registre de vérification confirmé pour l'équipe de conformité

---

## Signature finale

| Domaine | Propriétaire | Signé |
|---|---|---|
| Configuration du & menu de stockage | Gestion du portail d'octets de marché | ☐ |
| Configuration fiscale | Financement | ☐ |
| PSP / Paiements | Équipe de paiement | ☐ |
| Promotions cadrage | Marketing / Byte Portal Admin | ☐ |
| Contenu juridique et de conformité | Équipe juridique | ☐ |
| exhaustivité de la traduction | Équipe de localisation | ☐ |
| Options | Équipe produit | ☐ |
| Passé de bout en bout | QA / Équipe de lancement | ☐ |

---

:::tip Lecture connexe
- [Vérification de la réalité](/docs/byte-capabilities/enablement/reality-check)— les modèles d'échec que cette liste de contrôle vise à prévenir
- [Limites des capacités](/docs/byte-capabilities/enablement/capability-boundaries)— qui possède quoi avant de lever le mauvais ticket
:::

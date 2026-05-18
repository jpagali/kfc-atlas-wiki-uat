---
title: Glossaire
description: Définitions de tous les termes techniques et de plate-forme utilisés dans le centre de connaissances Atlas / Byte Helium.
sidebar_label: Glossaire
---

# Glossaire de la plate-forme

> Définitions de tous les termes utilisés dans la documentation sur les capacités d'octets. Quand vous doutez de ce qu'un terme signifie, commencez ici.

---

| Durée | Définition |
|---|---|
| **Byte Helium** | Le système de conception d'entreprise de Yum! et la fondation d'avant-garde. KFC Atlas est construit sur Helium et dépouillé pour refléter la marque KFC |
| ** Commerce par correspondance** | Le moteur commercial derrière Atlas. Il traite les commandes, les prix, les paiements et l'injection de POS; si un marché n'est pas sur Byte POS, Byte Connect est nécessaire comme pont vers le POS du marché |
| **Début du commerce** | L'élément moteur de Byte Commerce — voir Byte Commerce |
| ** Portail Byte** | L'interface admin jumelée avec Byte Commerce pour les équipes de marché et d'ops pour configurer et exploiter la plateforme |
| ** Menu Byte** | L'outil de création du menu – externe à Atlas ; Byte Portal assigne les menus publiés |
| **Byte Connect** | La couche intermédiaire utilisée lorsque Atlas / Byte Commerce doit atteindre un environnement de POS non-octet; il supporte également les flux d'ordre d'agrégateur dans Byte Commerce |
| **PSP** | Fournisseur de services de paiement — gère la tokenisation et la capture des cartes |
| **Vault** | Stockage sécurisé pour les jetons de carte et les identifiants PSP |
| **PLP** | Page de la liste des produits — la vue de navigation du menu |
| **PDP** | Page de détail du produit — vue d'un seul article avec options |
| **OTP** | PIN unique — utilisé pour l'inscription sans mot de passe |
| **SSO** | Signature unique — service centralisé d'authentification |
| **CMP** | Plateforme de gestion du consentement — gère les cookies et le consentement au marketing |
| **CRM** | Gestion de la relation client — gère les profils des clients et les communications préfs |
| **KDS** | Système d'affichage de cuisine — l'écran en magasin montrant les commandes entrantes |
| **POS** | Point de vente — le système de gestion des commandes en magasin; Atlas atteint Byte POS par l'intermédiaire de Byte Commerce, et atteint les marchés non-Byte POS par l'intermédiaire de Byte Commerce plus Byte Connect |
| **DCI** | Contrats et interfaces de données — le registre versionné de tous les schémas API/événement |
| **RBAC** | Contrôle d'accès basé sur le rôle — comment les autorisations des utilisateurs du portail sont gérées |
| ** Garde de portée** | Mécanisme de sécurité Byte Portal qui bloque l'accès hors champ au niveau de l'interface utilisateur et de l'API |
| **Ajouter un message** | Le programme mondial de dons de bienfaisance de la KFC intégré à la caisse |
| **Offre partagée** | Paiement par deux méthodes de paiement — par exemple, bon + carte |
| **Clavier d ' urgence** | Un ID unique qui empêche les ordres ou les paiements en double si une demande est rejugée |
| **TRD** | Document sur les prescriptions techniques |
| **FRD** | Document sur les exigences fonctionnelles |
| **SLO** | Niveau de service Objectif — l'objectif de performance d'un système |
| **DLQ** | Dead Letter Queue — où les événements de webhook échoués sont tenus pour examen |
| **3DS** | 3D Secure — protocole d'authentification des cartes pour la prévention de la fraude |
| **Byte** | Nom du programme pour l'initiative globale de la KFC sur le commerce électronique |
| **Atlas** | Front-end mondial de KFC pour la commande numérique, construit sur Byte Helium et propulsé par Byte Commerce + Byte Portal, avec Byte Connect inclus partout où un marché POS n'est pas Byte POS |
| **Contexte** | La plateforme enregistre le marché, la langue, le mode de commande et le magasin d'un client |
| **BCOM** | Courte forme de moteur de commerce — voir moteur de commerce |
| **Traitement** | Une surcharge de menu appliquée en haut d'une version de menu publiée — utilisée pour les changements de prix ou de disponibilité au niveau du magasin ou du groupe |
| **Groupe de travail** | Un regroupement logique de magasins dans le portail Byte utilisé pour l'attribution de menus, les promotions de cadrage et l'héritage des règles fiscales |
| ** Zone de couverture** | Une limite géographique de livraison configurée en Byte Portal / Geo service qui détermine quelles adresses peuvent recevoir des commandes de livraison |
| **Drapeau de caractéristique** | Un basculement d'exécution dans Byte Portal qui permet ou désactive une fonctionnalité pour un segment spécifique de marché, de canal ou de client sans redéploiement |
| **Agrégat** | Une plate-forme de livraison tierce (p. ex. Uber Eats, DoorDash) dont les commandes sont ingérées via Byte Connect in Byte Commerce |

---
title: Braze Bienvenue toile de récompense
sidebar_position: 3
---

# Braze Bienvenue toile de récompense

Ce playbook explique comment les équipes KFC peuvent mettre en place une toile de récompense bienvenue à Braze pour les nouveaux clients. Les hypothèses de contenu sont traitées comme vérifiées pour le moment, de sorte que l'accent est mis sur la structure, le calendrier et le flux d'exécution.

---

## Objectif

Utilisez ce playbook lorsque KFC veut accueillir un client nouvellement identifié ou nouvellement enregistré avec un voyage de récompense automatisé.

Exemples typiques:

- première récompense d'inscription app
- première récompense d'enregistrement de fidélité
- prime d'achat après création de compte

## Préalables

- contenu de récompense vérifié et la logique d'offre
- copie de message KFC approuvée pour le message push, email ou in-app
- Définition convenue du public
- Braze accès pour créer ou modifier la toile
- suivi ou destination de liaison profonde confirmée

## Étape 1: Définir le public d'entrée

La KFC commune accueille favorablement les options d'audience:

- clients qui complètent l'enregistrement de l'application
- clients qui rejoignent la fidélité
- clients qui optent pour le marketing pendant la configuration du compte

Assurez-vous que le public ne comprend que de nouveaux clients, et non des utilisateurs existants qui rentrent dans le parcours.

## Étape 2: Définir le déclencheur et le délai

Choisissez :

- l'événement déclencheur qui démarre la toile
- tout retard avant l'envoi du message de récompense
- si le client doit recevoir la récompense immédiatement ou après une période d'attente

Pour KFC, un court délai est souvent utile si vous voulez que le message se sente orienté vers l'accueil plutôt que vers la transaction.

## Étape 3: Définir la séquence du message

Flux de toile recommandé:

1. Message de bienvenue
2. explication de récompense
3. CTA dans l'application KFC ou le flux de commande
4. rappel facultatif si la récompense n'est pas rachetée dans la fenêtre active

Gardez le premier message simple et marqué. Les détails de la récompense devraient être faciles à comprendre pour les clients en un coup d'oeil.

## Étape 4: Joindre la logique de récompense

Confirmer :

- quelle récompense le client reçoit
- combien de temps il reste valide
- s'il doit avoir un lien profond avec un élément de menu, une catégorie ou une page d'atterrissage spécifique
- si des exclusions de marché s'appliquent

Si la récompense dépend d'une promotion Atlas en direct, confirmez que la promotion est déjà configurée et assignée aux bons magasins avant le lancement de la toile Braze.

## Étape 5: QA le parcours client

Avant le lancement:

1. entrée du public d'essai
2. vérifier l'heure du message
3. valider la copie, la marque et les liens
4. vérifier si la récompense n'est pas disponible
5. confirmer les terres de l'OTC dans l'expérience prévue de la KFC

## Étape 6 : Lancement et suivi

Une fois en direct, surveiller:

- volume d'entrée
- taux de livraison
- click-through à l'application ou destination de commande
- Rédemption récompense
- les tickets d'assistance ou la confusion du client

## Notes concernant la KFC

- match ton et copie aux campagnes actuelles de la marque KFC
- garder les récompenses bienvenues facile à racheter; éviter les explications lourdes dans le premier contact
- si la récompense est spécifique au marché, confirmez que les règles d'audience de Braze et la couverture de promotion Atlas correspondent exactement

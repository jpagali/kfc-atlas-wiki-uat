---
title: Manuel de déploiement
---

# Manuel de déploiement

Cette repo devrait suivre`staging`d'abord,`main`deuxième modèle de promotion.

## Règle par défaut

- `staging`est la première zone d'atterrissage pour les changements orientés vers l'utilisateur.
- `main`ne devraient recevoir que les modifications qui ont déjà été vérifiées sur`staging`.
- Si un changement n'est pas encore stable dans la mise en scène ou la validation du cloud est toujours en attente, ne le faites pas promouvoir`main`.

## Flux de travail standard

1. Faites le changement sur`staging`C'est le premier.
2. Poussez`staging`.
3. Vérifier l'état de l'étape :
   - lancer`npm run build`
   - prévisualiser localement lorsque le changement affecte le routage, la localisation ou l'état de l'interface utilisateur
   - confirmer que tout contrôle du nuage ou de l'environnement est vert
4. Après la mise en scène est stable, promouvoir le même engagement à`main`
5. Mettre à jour les notes de publication pendant le`main`étape de promotion à moins que la note ne soit explicitement destinée à une visibilité de mise en scène seulement
6. Poussez`main`

## Règles de promotion

- Préférez promouvoir le commit exact vérifié de`staging`dans`main`
- Évitez de faire une nouvelle correction ad hoc directement sur`main`si la modification initiale n'a pas été prouvée`staging`
- Si`main`accidentellement obtient un commit local en premier, réinitialiser local`main`retour à`origin/main`et promouvoir`staging`à la place

## Notes de sortie

- Les notes de publication visibles par l'utilisateur appartiennent à la`main`promotion par défaut
- Si la mise en scène a besoin de sa propre chapelure interne, soyez bref et ne la présentez pas comme un lancement de production
- Lorsqu'un changement touche plusieurs lieux, mettre à jour ou retirer ces lieux ensemble avant la promotion

## Liste de contrôle rapide

- Le changement est en cours`staging`
- `staging`construction passée
- Le comportement de localisation a été vérifié au besoin.
- Les notes de sortie sont prêtes
- Objectif de promotion`main`
- Ce n'est qu'après que la production sera déclenchée

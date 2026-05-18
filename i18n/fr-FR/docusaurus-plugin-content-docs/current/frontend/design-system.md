---
title: "Système de conception"
sidebar_label: "Système de conception"
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Système de conception Atlas KFC
### Comment notre plateforme est construite — de l'identité visuelle à votre écran

---

## Qu'est-ce qu'un système de conception?

Pensez à un système de conception comme la seule source de vérité** pour la façon dont KFC ressemble et fonctionne numériquement — partout. C'est l'ensemble de règles, de pièces réutilisables et d'outils partagés qui assurent un bouton dans l'application KFC Australia regarde et se comporte de façon cohérente sur le web et les expériences natives. Sans elle, chaque marché reconstruirait la même chose à partir de zéro, de manière légèrement différente. Avec elle, chaque équipe travaille à partir de la même fondation.

La plateforme Atlas KFC est alimentée par **Byte Helium**, le système de conception d'entreprise de Yum!. Voilà comment tout va ensemble.

---

## Les trois couches

### Calque 1 — Conception (à quoi ça ressemble)

Tout commence par **Figma**, l'outil de conception utilisé par l'équipe Atlas UI/UX. Inside Figma, un plugin appelé **Tokens Studio** gère *design tokens* — les valeurs brutes qui définissent l'identité visuelle de KFC: couleurs de marque, tailles de police, unités d'espacement, rayons d'angle, et plus encore.

À partir de ces jetons, l'équipe assemble un **UI Kit** — une bibliothèque de composants prêts à l'emploi (boutons, cartes, barres de navigation, champs d'entrée) que les concepteurs peuvent glisser et déposer pour construire de nouveaux écrans. Chaque composant de la trousse d'interface utilisateur est relié aux jetons, de sorte qu'une seule couleur change les cascades partout automatiquement.

> **En termes clairs:** Tokens Studio est la règle de la marque. Le kit UI est la boîte de pièces Lego de marque. Les concepteurs construisent des écrans en assemblant ces pièces.

---

### Couche 2 — Code (comment il se construit)

Une fois qu'une conception est approuvée, les ingénieurs la traduisent en code de travail en utilisant les mêmes jetons de conception — maintenant exportés pour utilisation dans le logiciel.

Un processus **style build** prend ces jetons et génère deux ensembles de sorties :

- ** styles autochtones** — pour les applications iOS et Android (l'application mobile KFC sur votre téléphone)
- ** styles Web** — pour les expériences basées sur le navigateur (le site Web de la KFC et le flux de commande Web)

Ces styles alimentent **Conception System Components (DSC)** — les équivalents codés de la conception UI Kit. Ces composants sont les éléments de construction utilisés par les ingénieurs lors de l'écriture de nouvelles fonctionnalités pour Atlas. Ils assurent la cohérence afin qu'aucune équipe de marché ne puisse accidentellement introduire une police mal assortie ou une couleur hors marque.

> **En termes clairs:** Les jetons de conception sont "compilés" en code. Le résultat est une bibliothèque de composants prêts à l'emploi, sur la marque que les ingénieurs de tous les marchés tirent.

---

### Couche 3 — Applications du marché (ce qui va vivre)

Au bas de la pile se trouvent les applications réelles que les clients utilisent:

| Demande | Ce que c'est |
|---|---|
| ** Application Web KFC** | La principale expérience de commande web pour les marchés de la KFC à l'échelle mondiale, fondée sur Atlas |
| **Une application Web de base** | La fondation web partagée que KFC Web App (et d'autres) sont construits sur le dessus de |
| **Une application autochtone de base** | La base mobile partagée pour les expériences iOS/Android natives |

Le front-end de chaque marché est assemblé à partir des applications Core et des composants DSC ci-dessus - ce qui signifie que les marchés obtiennent la cohérence gratuitement, et la personnalisation est gérée de manière contrôlée et structurée.

---

## Pourquoi cela importe pour les marchés Atlas

Pour des marchés comme **Australie, Royaume-Uni, Allemagne et Singapour**, cette architecture signifie:

- ** Vitesse** — Pas de reconstruction d'éléments communs à partir de zéro. De nouvelles fonctionnalités construites sur le système de conception expédient plus rapidement.
- **Consistance** — La marque KFC apparaît sur chaque écran, sur chaque marché, sur chaque appareil.
- **Scalabilité** — Quand Yum! met à jour un jeton de marque (par exemple, un nouveau rouge), il passe automatiquement par l'application de chaque marché.
- **Qualité** — Les composants sont testés une fois au niveau de la plateforme et hérités de tous les marchés.

KFC Global Enablement and Market Success aide chaque marché à tirer pleinement parti de ce système, transformant les capacités de la plate-forme en fonctionnalités prêtes au marché, et renvoyant les besoins du marché à l'équipe d'ingénierie de manière structurée.

---

## Diagramme d'architecture de la plateforme

Le diagramme ci-dessous illustre comment le système de conception de l'hélium Byte passe des jetons de conception dans Figma — à travers le processus de construction de style — en composants de plate-forme, et enfin dans les applications du marché KFC les clients utilisent.

<iframe
  src={useBaseUrl('/kfc-atlas-design-system-diagram.html')}
  width="100%"
  height="900px"
  style={{border: 'none', borderRadius: '12px'}}
/>
---

*Document préparé par KFC Global Enablement and Market Success — KFC Global*

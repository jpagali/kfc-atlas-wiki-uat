---
title: Modèle mental de la plateforme
description: La hiérarchie, la structure et l'architecture de la plateforme Byte Stack en anglais clair.
sidebar_label: Modèle mental
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# Modèle mental de la plate-forme

Comprendre la plate-forme commence par comprendre l'image de la plate-forme Atlas — ce que chaque partie est responsable, et comment ils se recoupent.

:::note Portée dans le système Atlas
Pour Atlas Wiki, la lentille **Byte Capabilities** est centrée sur l'image Atlas **Commerce + Portail**. Atlas est le front-end mondial de KFC, construit sur **Byte Helium** comme la fondation de l'entreprise Yum!. Derrière lui, **Byte Commerce + Byte Portal** gestion des transactions d'alimentation et configuration opérationnelle, tandis que **Byte Connect** se trouve au milieu chaque fois qu'un marché POS n'est pas Byte POS.
:::

---

## L'image de la plateforme Atlas

Dans le contexte Atlas, le **Byte Stack** est mieux compris comme quatre parties connectées :

- **Atlas sur Byte Helium** — Atlas est le front-end mondial de KFC, et il est construit sur **Byte Helium**, le système de conception d'entreprise de Yum! et la fondation de front-end. L'hélium donne à Atlas le système d'interface utilisateur partagé; Atlas skins qui fonde la marque KFC et le parcours client.
- ** Commerce international** — Le moteur derrière chaque ordre. Poignées état de chariot, prix, calcul de la taxe, traitement des paiements, et injection POS. Invisible pour les clients, critique pour tout.
- ** Portail Byte** — L'avion de contrôle administratif a été jumelé au commerce. Les équipes de marché et d'ops l'utilisent pour configurer des magasins, des menus, des promotions, des taxes, des paiements, des utilisateurs et du contenu.
- **Byte Connect** — La couche intermédiaire d'intégration lorsqu'un POS du marché n'est pas Byte POS. Elle relie Byte Commerce au marché de l'environnement POS et les questions n'importe où non-Byte POS à bord ou l'acheminement des commandes est dans la portée.

Ces pièces se connectent également à un ensemble de **services externes**: Menu, Identité/OSP, PSP (paiements), Moteur de fidélité/Promos, Suivi des commandes, CMS et Analytics.

:::note Octet POS Cavat
Les lecteurs supposent souvent qu'Atlas ou Byte Commerce peuvent parler directement à n'importe quel point de vente. Le modèle prévu est plus étroit : **Atlas -> Byte Commerce -> Byte POS** par défaut, ou **Atlas -> Byte Commerce -> Byte Connect -> POS** lorsque le marché n'est pas sur Byte POS.
:::

---

## Hiérarchie des plates-formes

Cet explorateur combine la hiérarchie et l'architecture en un seul endroit. Utilisez les onglets pour basculer entre une comparaison côte à côte, un mode hiérarchique ou un mode architecture seulement.

<ThemeSyncedIframe
  src="/byte-stack-platform-explorer.html"
  title="Byte Stack Platform Explorer"
  height={1480}
  messageType="byte-stack-platform-explorer-theme"
  heightMessageType="byte-stack-platform-explorer-height"
/>

---

## Diagramme d'architecture système

La vue sur l'architecture est disponible dans le même explorateur. Ouvrir la`Architecture only`onglet si vous voulez vous concentrer sur les relations d'exécution et les explications de niveau de boîte.

---

:::tip Lire la suite
Voir[Couches de plate-forme](/docs/byte-capabilities/platform-layers)pour une ventilation en anglais clair de ce que chaque couche fait et ce que les marchés peuvent configurer. Besoin de la mise en garde sur l'intégration des POS? Lire[Byte Connect](/docs/byte-capabilities/enablement/byte-connect).
:::

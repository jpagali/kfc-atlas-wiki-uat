---
title: Définition des parties de jour
sidebar_label: Définition des parties de jour
---

# Définition des parties de jour

## Résumé

Dayparts sont configurés au niveau supérieur d'une organisation, au même niveau que les menus, produits et paquets. Une fois définies, ces pièces de jour sont immédiatement disponibles dans tous les magasins d'une organisation.

Chaque partie de jour se compose d'un nom, d'un code de partie de jour unique, et d'une liste d'occasions supportées, chacune avec sa propre liste de délais. Pour plus de commodité lors de la création initiale d'une partie de jour, un ensemble unique de délais peut être appliqué à toutes les occasions supportées. Une fois la journée créée, les délais d'occasion peuvent être personnalisés individuellement.

**Screenshot placeholder:** Mettez la capture d'écran montrant le diagramme de hiérarchie des parties de jour avec l'organisation, les parties de jour, les occasions et les délais ici.

## Définition des parties de jour dans le portail Byte

**Step 1:** Naviguez dans la section **Menus** en utilisant le menu de navigation de gauche.

**Step 2:** Cliquez sur l'onglet **Dayparts** pour afficher toutes les parties de jour existantes.

**Screenshot placeholder:** Mettez la capture d'écran montrant la page Menus avec l'onglet Dayparts sélectionné et le bouton Créer une nouvelle partie de jour visible ici.

**Step 3:** Cliquez sur **Créer une nouvelle partie du jour**.

**Step 4:** Fournir un **nom** et un code de partie de jour unique**.

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Nom** | Une étiquette lisible par l'homme pour la partie de jour qui est visible tant pour les gestionnaires de données que pour les utilisateurs finaux | Par exemple,`Breakfast`. |
| **Code du jour** | Un identifiant unique fourni par la marque destiné aux systèmes externes à consommer | Ce code sera fourni dans le menu publié. |

**Screenshot placeholder:** Mettez la capture d'écran montrant les champs Créer un nouveau tiroir Daypart avec le nom Daypart et le code Daypart ici.

**Step 5:** Cliquez sur **Ajouter un délai**.

**Step 6:** Sélectionnez les **occasions** que cette journée devrait supporter. Si la partie day doit supporter toutes les occasions, cliquez sur **Sélectionner tout** dans la liste déroulante.

**Step 7:** Ajouter les détails suivants : **jours de la semaine** (requis), **heure de début** et **heure de fin** (requis), **date de début** et **date de fin** (facultatif).

**Screenshot placeholder:** Mettez la capture d'écran montrant le tiroir Ajouter une image de temps avec les occasions, les jours de la semaine, l'heure de début, l'heure de fin, la date de début et les champs de date de fin ici.

**Step 8:** Cliquez sur **Créer un délai**.

**Step 9:** Toutes les occasions sélectionnées auront les mêmes délais par défaut. Les délais peuvent être modifiés pour des occasions individuelles en cliquant sur le nom de l'occasion.

**Screenshot placeholder:** Mettez la capture d'écran montrant les délais créés regroupés par occasion dans l'éditeur de jour ici.

**Step 10:** Cliquez sur **Enregistrer**.

La partie de jour nouvellement créée apparaîtra maintenant dans la table dans l'onglet **Dayparts**.

**Screenshot placeholder:** Mettez la capture d'écran montrant la table Dayparts avec la ligne de jour nouvellement créée visible ici.

## Édition des parties de jour

**Step 1:** À partir du tableau de bord, cliquez sur **Menus** dans la barre latérale.

**Step 2:** Cliquez sur l'onglet **Dayparts**.

**Step 3:** Le jour qui doit être modifié, cliquez sur l'icône **kebab** dans la cellule la plus à droite de la ligne de table et cliquez sur **Edit**.

**Screenshot placeholder:** Mettez la capture d'écran montrant le menu d'action de la ligne de table Dayparts avec l'option Édition sélectionnée ici.

## Suppression des parties de jour

**Step 1:** À partir du tableau de bord, cliquez sur **Menus** dans la barre latérale.

**Step 2:** Cliquez sur l'onglet **Dayparts**.

**Step 3:** Le jour qui doit être modifié, cliquez sur l'icône **kebab** dans la cellule la plus à droite de la ligne de table et cliquez sur **Supprimer**.

**Screenshot placeholder:** Mettez la capture d'écran montrant le menu d'action de la ligne de table Dayparts avec l'option Supprimer sélectionnée ici.

Toutes les configurations associées à cette partie de jour, y compris les prix et les paramètres de disponibilité, seront supprimées.

:::tip
Lorsque vous créez d'abord une partie de jour, appliquez un délai partagé à toutes les occasions supportées si elles se comportent de la même façon. Vous pouvez toujours affiner les délais spécifiques à l'occasion plus tard.
:::

:::note :
Les Dayparts sont créées au niveau **org**, mais leurs heures et les occasions prises en charge peuvent être personnalisées au niveau **store**.
:::

## Guides connexes

- [Aperçu des journées](/docs/admin-portal-guide/dayparts/)— Découvrez comment les pièces de jour sont utilisées dans Byte
- [Personnalisation des Dayparts au niveau du magasin](/docs/admin-portal-guide/dayparts/customizing-dayparts-at-the-store-level/)— Ajuster les parties de jour de niveau org pour un magasin
- [Réglage Daypart Prix et disponibilité](/docs/admin-portal-guide/dayparts/setting-daypart-prices-and-availability/)— Appliquer les règles de prix et de disponibilité aux entités

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Jours*

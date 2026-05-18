---
title: Ajouter des Metafields à une catégorie
sidebar_label: Ajouter des Metafields à une catégorie
---

# Ajouter des Metafields à une catégorie

## Ce que ce guide couvre

Joindre des données personnalisées à une catégorie pour l'intégration avec des systèmes externes ou des exigences spécifiques au marché. Ajouter des métachamps seulement si votre équipe technique a spécifié les clés et les valeurs exactes nécessaires.

## Étapes

**Step 1:** Naviguez dans la section **Menus** en utilisant le menu de navigation de gauche.

**Step 2:** Cliquez sur le dossier **Catégories** pour afficher toutes les catégories.

![Étape 2](./img/step-2.png)

**Step 3:** Trouvez la catégorie à laquelle vous voulez ajouter des métachamps, cliquez sur le menu **action** (trois points) dans la même ligne et sélectionnez **Meta**.

![Étape 3](./img/step-3.png)

**Step 4:** Cliquez sur le bouton **Ajouter Metafield** pour ouvrir le formulaire de saisie.

![Étape 4](./img/step-4.png)

**Step 5:** Remplissez les détails du métachamp :

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| * Clé * | Le nom du champ requis par votre intégration | Par exemple,`display_order`, `region`, `supplier_id`. Demandez à votre équipe technique des noms exacts. |
| **Valeur** * | La valeur des données pour cette clé | Par exemple,`1`, `APAC`, `SUP-12345`. Doit correspondre au format attendu par votre intégration. |
| **Type** | Public ou privé | **Public**: Visible aux intégrations externes. **Privé**: Visible uniquement pour votre équipe. |

Cliquez sur **Ajouter Metafield** pour enregistrer cette entrée.

**Step 6:** Pour ajouter plus de métachamps, répéter **Étape 4-5** pour chaque paire de valeurs clés nécessaire.

**Step 7:** Une fois que vous avez ajouté tous les métachamps requis, cliquez sur **Enregistrer** ou **Fermer** pour confirmer et appliquer les modifications à la catégorie.

![Étape 5](./img/step-5.png)

:::caution
Ajouter des métachamps seulement si votre équipe technique a spécifié les clés et les valeurs exactes à utiliser. Les métachamps incorrects peuvent briser des intégrations ou provoquer un comportement inattendu.
:::

## Guides connexes

- [Modifier une catégorie](/docs/admin-portal-guide/menus/edit-a-category/)— Modifier d'autres détails de catégorie
- [Créer une catégorie](/docs/admin-portal-guide/menus/create-a-category/)— Créer une nouvelle catégorie

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Menus*
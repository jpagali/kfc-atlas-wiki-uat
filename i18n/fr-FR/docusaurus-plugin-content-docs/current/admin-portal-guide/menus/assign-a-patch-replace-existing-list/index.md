---
title: Attribuer un lot (remplacer la liste existante)
sidebar_label: Attribuer un lot (remplacer la liste existante)
---

# Attribuer un lot (remplacer la liste existante)

## Ce que ce guide couvre

Remplace la liste complète des patchs d'un magasin par un nouveau patch unique, en supprimant les patchs précédemment assignés. Utilisez ceci lorsque vous avez besoin d'une réinitialisation complète des correctifs pour un magasin ou un canal.

## Étapes

**Step 1:** Naviguez dans la section **Menus** en utilisant le menu de navigation de gauche.

**Step 2:** Cliquez sur l'onglet **Patches** pour voir tous les correctifs.

![Étape 2](./img/step-2.png)

**Step 3:** Cliquez sur le bouton **Créer Nouveau** pour commencer une nouvelle affectation de patch.

![Étape 3](./img/step-3.png)

**Step 4:** Sélectionnez **Remplacez la liste existante** pour remplacer entièrement la liste des patchs du magasin.

![Étape 4](./img/step-4.png)

**Step 5:** Sélectionnez le **Patch** que vous voulez attribuer dans la liste déroulante. Ce patch remplacera tous les patchs actuellement assignés.

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| ** Lot** * | Sélectionnez dans la liste des correctifs disponibles | Choisissez le patch qui sera le seul patch sur les magasins sélectionnés. Tous les correctifs précédents seront supprimés. |

![Étape 5](./img/step-5.png)

**Step 6:** Sélectionnez le **Stores** qui recevra cette nouvelle liste de patchs. Vous pouvez rechercher par nom de magasin ou sélectionner par groupe de magasin en utilisant le filtre déroulant.

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Tâches** * | Sélectionnez un ou plusieurs magasins | Utilisez la recherche pour trouver des magasins, ou cliquez sur le menu déroulant pour sélectionner des groupes de magasins entiers. Seuls les magasins sélectionnés auront leur liste de patchs remplacée. |

![Étape 6](./img/step-6.png)

**Step 7:** Sélectionnez le **Channel** où ce remplacement de patch s'applique.

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Channel** * | Sélectionnez le canal de commande | Par exemple, "Web", "Mobile", "Plateforme de livraison". Le patch ne sera attribué que sur le canal sélectionné. |

![Étape 7](./img/step-7.png)

**Step 8:** Consultez vos sélections sur la page **Résumé** pour confirmer les magasins et patchs, puis cliquez sur **Enregistrer** pour remplacer les listes de patchs.

![Étape 8](./img/step-8.png)

:::caution
Le remplacement d'une liste de patchs supprimera tous les patchs précédemment attribués dans les magasins sélectionnés sur ce canal. Toute dérogation des anciens patchs ne s'appliquera plus. Cette action ne peut pas être annulée — si vous avez besoin des anciens patchs, vous devez les réaffecter manuellement.
:::

## Guides connexes

- [Attribuer un lot (Ajouter à la liste des lots)](/docs/admin-portal-guide/menus/assign-a-patch-add-to-patch-list/)— Ajouter un correctif sans supprimer les correctifs existants
- [Modifier un lot](/docs/admin-portal-guide/menus/edit-a-patch/)— Mettre à jour un patch avant de l'assigner
- [Créer un patch](/docs/admin-portal-guide/menus/create-a-patch/)— Créer un nouveau correctif à attribuer

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Menus*
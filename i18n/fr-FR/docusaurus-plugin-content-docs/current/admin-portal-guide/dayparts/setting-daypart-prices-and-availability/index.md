---
title: Réglage Daypart Prix et disponibilité
sidebar_label: Réglage Daypart Prix et disponibilité
---

# Réglage Daypart Prix et disponibilité

## Résumé

Dayparts sont disponibles dans le monde entier dans le portail Byte et peuvent être utilisés pour définir les prix de la partie de jour et la disponibilité de la partie de jour.

**Screenshot placeholder:** Mettez une capture d'écran montrant le schéma de concept de prix et de disponibilité de la partie de jour reliant les parties de jour de l'organisation aux produits, variantes et paquets ici.

## Prix

Dans les variantes et les paquets, un prix par défaut d'une journée peut être fixé ainsi que des prix pour chaque journée. Si un article est commandé dans un délai en dehors des parties de jour configurées, le prix par défaut sera facturé. Par exemple, laissez-nous dire que vous avez un élément avec la configuration suivante:

** Point A**

- Prix par défaut & #160;:`$10`
- Prix du jour:
  - Heureuse heure:`$8`
  - Dernière nuit :`$12`

Le point A sera`$8`pendant la journée **Heure heureuse**,`$12`pendant la partie de jour ** Late Night**, et`$10`dans tous les délais non couverts par **Heure heureuse** et **Nuitée tardive**.

**Screenshot placeholder:** Mettez screenshot montrant un exemple de matrice de prix avec le prix par défaut et les prix spécifiques à la partie de jour pour un seul article ici.

## Disponibilité

Dans les produits, les variantes et les paquets, les dayparts peuvent être utilisés pour configurer la disponibilité. Par défaut, les articles sont disponibles toute la journée. Si des parties de jour spécifiques sont sélectionnées, l'article ne sera disponible que pendant les parties de jour sélectionnées. Par exemple, un article qui n'a que la partie **Breakfast** de jour sélectionnée ne sera disponible que pendant la partie **Breakfast** de jour. Cet article ne peut être commandé en dehors des délais spécifiés dans la partie de jour **Breakfast**.

**Screenshot placeholder:** Mettez une capture d'écran montrant une configuration de disponibilité où seule la partie Petit déjeuner est sélectionnée ici.

## Fixation des prix de la journée sur les variantes

**Step 1:** À partir du tableau de bord, cliquez sur **Produits** dans la barre latérale.

**Step 2:** Sélectionnez un produit spécifique.

**Step 3:** Cliquez sur l'étape 3 de l'assistant - **Variants et prix**.

**Step 4:** Sur la variante souhaitée, cliquez sur la cellule dans la colonne **Pricing**.

**Screenshot placeholder:** Mettez la capture d'écran montrant l'assistant de produit sur Variantes & Tarifs avec une cellule de tarification variante sélectionnée ici.

**Step 5:** Si cette variante doit avoir le même prix toute la journée, cliquez sur **Prix fixes** et fournir un prix.

**Step 6:** Si cette variante doit avoir des prix différents pendant des journées spécifiques, cliquez sur **Prix de la journée**.

**Step 7:** Fournir un prix **par défaut**.

**Step 8:** Sélectionnez une partie de jour dans le menu déroulant et fournir un prix. Comme tous les autres champs de prix, cela peut être soit une valeur statique, soit une variable de prix nommée.

**Screenshot placeholder:** Mettez une capture d'écran montrant la variante du tiroir de prix avec Daypart Tarifs sélectionnés, un prix par défaut, et un ou plusieurs prix spécifiques à la partie du jour ici.

Vous pouvez fournir un prix unique pour autant de jours que vous le souhaitez. Il n'est pas nécessaire d'avoir un prix explicite pour chaque journée. Les articles seront facturés au prix par défaut à moins qu'ils ne soient commandés dans l'une des parties de jour spécifiées.

**Step 9:** Cliquez sur **Enregistrer**.

Variantes qui utilisent **Daypart Price** aura un symbole **heure** dans la cellule de tarification. Seul le prix par défaut est affiché dans la cellule. Pour voir la liste complète des prix de la journée, cliquez sur la cellule.

## Fixation des prix de la journée sur les paquets

**Step 1:** À partir du tableau de bord, cliquez sur **Bundles** dans la barre latérale.

**Step 2:** Sélectionnez un paquet spécifique.

**Step 3:** Cliquez sur l'étape 2 de l'assistant - **Mode de prix**.

**Step 4:** Dans la liste déroulante **Mode de prix**, sélectionnez **Prix du jour**.

**Screenshot placeholder:** Mettez la capture d'écran montrant l'étape du mode de tarification de l'assistant de paquet avec Daypart Prix sélectionné ici.

**Step 5:** Fournir un prix **par défaut**.

**Step 6:** Sélectionnez une partie de jour dans le menu déroulant et fournir un prix. Comme tous les autres champs de prix, cela peut être soit une valeur statique, soit une variable de prix nommée.

**Screenshot placeholder:** Mettez la capture d'écran montrant le formulaire de tarification de la partie de jour avec le prix par défaut et les entrées de prix spécifiques de la partie de jour ici.

Vous pouvez fournir un prix unique pour autant de jours que vous le souhaitez. Il n'est pas nécessaire d'avoir un prix explicite pour chaque journée. Les articles seront facturés au prix par défaut à moins qu'ils ne soient commandés dans l'une des parties de jour spécifiées.

**Step 7:** Cliquez sur **Enregistrer**.

## Fixation de la disponibilité de la journée sur les produits

**Step 1:** À partir du tableau de bord, cliquez sur **Produits** dans la barre latérale.

**Step 2:** Sélectionnez un produit spécifique.

**Step 3:** Cliquez sur l'étape 2 de l'assistant - **Nom et description**.

**Step 4:** Faites défiler jusqu'à la section **Disponibilité de l'article**.

**Step 5:** Cliquez sur **Ajouter Daypart**.

**Screenshot placeholder:** Mettez la capture d'écran montrant le produit Nom & Description étape avec la section Disponibilité de l'article et Ajouter l'action Daypart ici.

**Step 6:** Sélectionnez les parties de jour pendant lesquelles vous souhaitez que ce produit soit disponible. Plusieurs parties de jour peuvent être sélectionnées. Notez que si aucune partie de jour n'est sélectionnée, le produit sera disponible tout au long de la journée.

**Screenshot placeholder:** Mettez la capture d'écran montrant le tiroir de disponibilité du produit avec plusieurs parties de jour sélectionnées ici.

**Step 7:** Cliquez sur **Enregistrer** dans le tiroir.

**Step 8:** Cliquez sur **Enregistrer** en haut à droite de l'assistant.

## Configuration de la disponibilité de la journée sur les variantes

**Step 1:** À partir du tableau de bord, cliquez sur **Produits** dans la barre latérale.

**Step 2:** Sélectionnez un produit spécifique.

**Step 3:** Cliquez sur l'étape 3 de l'assistant - **Variants et prix**.

**Step 4:** Sur la variante souhaitée, cliquez sur le lien dans la colonne **Disponibilité**. Vous pouvez avoir besoin de faire défiler la table à droite pour mettre la colonne **Disponibilité** en vue. Le lien sera étiqueté **Add** ou **View / Edit** selon que la disponibilité a déjà été configurée pour cette variante.

**Screenshot placeholder:** Mettez la capture d'écran montrant la ligne de la variante avec le lien de la colonne de disponibilité étiqueté Ajouter ou Afficher / Modifier ici.

**Step 5:** Faites défiler jusqu'à la section **Disponibilité de l'article**.

**Step 6:** Sélectionnez les parties de jour pendant lesquelles vous souhaitez que cette variante soit disponible. Plusieurs parties de jour peuvent être sélectionnées. Notez que si aucune partie de jour n'est sélectionnée, la variante sera disponible tout au long du jour ouvrable.

**Screenshot placeholder:** Mettez la capture d'écran montrant l'éditeur de disponibilité de la variante avec les parties de jour sélectionnées ici.

**Step 7:** Cliquez sur **Enregistrer** dans le tiroir.

**Step 8:** Cliquez sur **Enregistrer** en haut à droite de l'assistant.

## Définition de la disponibilité de la journée sur les paquets

**Step 1:** À partir du tableau de bord, cliquez sur **Bundles** dans la barre latérale.

**Step 2:** Sélectionnez un paquet spécifique.

**Step 3:** Cliquez sur l'étape 2 de l'assistant - **Nom et description**.

**Step 4:** Faites défiler jusqu'à la section **Disponibilité de l'article**.

**Step 5:** Cliquez sur **Ajouter Daypart**.

**Screenshot placeholder:** Placez la capture d'écran montrant l'étape Nom et description du paquet avec la section Disponibilité de l'article et l'action Ajouter Daypart ici.

**Step 6:** Sélectionnez les parties de jour pendant lesquelles vous souhaitez que ce paquet soit disponible. Plusieurs parties de jour peuvent être sélectionnées. Notez que si aucune partie de jour n'est sélectionnée, le forfait sera disponible tout au long de la journée.

**Screenshot placeholder:** Mettez la capture d'écran montrant le tiroir de disponibilité du paquet avec des parties de jour sélectionnées ici.

**Step 7:** Cliquez sur **Enregistrer** dans le tiroir.

**Step 8:** Cliquez sur **Enregistrer** en haut à droite de l'assistant.

:::tip
Il n'est pas nécessaire d'avoir un prix explicite pour chaque journée. Le prix par défaut sera utilisé chaque fois qu'une commande tombe en dehors des prix de la partie de jour configurée.
:::

:::note :
Si aucune partie de jour n'est sélectionnée pour la disponibilité, le produit, la variante ou le paquet restera disponible tout au long de la journée.
:::

## Guides connexes

- [Définition des parties de jour](/docs/admin-portal-guide/dayparts/define-dayparts/)— Créer la partie de jour avant de lui assigner le comportement du menu
- [Créer un patch](/docs/admin-portal-guide/menus/create-a-patch/)— Appliquer les dépassements ciblés à l'échelle

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Jours*

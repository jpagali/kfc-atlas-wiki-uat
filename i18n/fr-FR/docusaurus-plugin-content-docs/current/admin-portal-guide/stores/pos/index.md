---
title: POS
sidebar_label: POS
---

# POS

## Ce que ce guide couvre

Affiche les périphériques connectés au point de vente d'un magasin, leur état, et permet aux opérateurs de mettre à jour les paramètres du périphérique ou de générer des mots de passe uniques pour l'authentification du périphérique.

:::note Octet POS Cavat
Cette page décrit le flux du portail Admin pour la gestion des périphériques **Byte POS.

Si le marché n'utilise pas Byte POS, Byte Commerce ne **pas** parler directement à ce marché POS. **Byte Connect** doit être embarqué à bord du pont, et le débit opérationnel exact peut différer des étapes indiquées ici.
:::

## Étapes

**Step 1:** Naviguez dans la section **Stores** en utilisant le menu de navigation de gauche.

**Step 2:** Recherchez le magasin par **Nom**, **Numéro de magasin** ou **Code de franchise** à l'aide de la boîte de recherche.

![Étape 2](./img/step-2.png)

**Step 3:** Une fois que vous trouvez le magasin, cliquez sur le menu ** à trois points** (••) pour ouvrir le menu des options.

**Step 4:** Cliquez sur **POS** dans le menu déroulant. Ceci affiche tous les appareils au point de vente liés au magasin sélectionné.

![Étape 3](./img/step-3.png)

**Step 5:** Consultez le tableau des dispositifs POS, qui montre :

| Colonne | Ce que ça veut dire |
|--------|--------------|
| **Nom du dispositif** | Afficher le nom du périphérique POS |
| **Type de station** | Type de station POS (par exemple, registre, cuisine, comptoir) |
| ** État des dispositifs** | État actuel (en ligne, hors ligne, inactif, etc.) |
| **Menu publié** | Date de la dernière publication du menu sur cet appareil |
| ** Dernier enregistrement** | Date et heure de la dernière communication de l'appareil avec Atlas |

**Step 6:** Utilisez les boutons d'action pour gérer les appareils :
- Cliquez sur **Update Store Device Settings** pour modifier la configuration de l'appareil (nom, paramètres, etc.)
- Cliquez sur **Générer un mot de passe unique** pour créer un mot de passe temporaire pour l'authentification des appareils

:::tip
Utilisez **Dernier enregistrement** pour vérifier que les périphériques POS communiquent activement avec Atlas. Si un appareil n'a pas été enregistré récemment, il peut être hors ligne ou déconnecté.
:::

:::note :
Les appareils qui sont hors ligne ou qui ne sont pas enregistrés devraient être examinés afin de s'assurer que les mises à jour du menu sont correctement fournies.
:::

## Guides connexes

- [Modifier les détails du magasin](/docs/admin-portal-guide/stores/edit-store-details/)— Voir les autres informations du magasin
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)— Comprendre quand les marchés de POS non-octets nécessitent Byte Connect

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section: Magasins*

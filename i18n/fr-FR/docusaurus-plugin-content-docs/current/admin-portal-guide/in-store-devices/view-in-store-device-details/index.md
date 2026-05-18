---
title: Voir les détails du périphérique en magasin
sidebar_label: Voir les détails du périphérique en magasin
---

# Voir les détails du périphérique en magasin

## Ce que ce guide couvre

Affiche les informations complètes d'un terminal ou d'un kiosque POS, y compris le nom, le type, l'état et l'historique de publication du menu – utilisé pour l'audit et le dépannage des appareils.

:::note Octet POS Cavat
Cette vue de détail de l'appareil est écrite pour **Byte POS** gestion de l'appareil dans le portail Admin.

Si le marché n'est pas sur Byte POS, **Byte Connect** est le pont entre Byte Commerce et le marché POS, et la visibilité de l'appareil ou le flux de travail de support peut différer de ce qui est montré ici.
:::

## Étapes

**Step 1:** Naviguez dans la section des appareils **In-Store** en utilisant le menu de navigation de gauche.

**Step 2:** Trouvez l'appareil que vous voulez voir. Vous pouvez rechercher ou filtrer par type de station, numéro de magasin ou état de l'appareil.

**Step 3:** Cliquez sur le bouton **.** (menu à trois points) dans la même ligne que l'appareil, puis sélectionnez **View**.

![Étape 2](./img/step-2.png)

**Step 4:** Le panneau de détails de l'appareil s'ouvre, affichant les informations suivantes:

| Champ | Ce qu'il montre |
|-------|--------------|
| **Nom du dispositif** | Nom/identificateur du dispositif |
| **Type de station** | Type de dispositif (p. ex. terminal POS, kiosque) |
| ** État des dispositifs** | Actifs ou inactifs |
| **Menu Date de publication** | Lorsque la dernière mise à jour du menu a été envoyée à ce périphérique |
| ** Dernier enregistrement du périphérique** | Lorsque l'appareil a communiqué avec Atlas pour la dernière fois |

![Étape 3](./img/step-3.png)

**Step 5:** Examiner les détails de l'appareil. Utilisez ces informations pour vérifier que l'appareil est actif et recevoir correctement les mises à jour du menu. Si **Last Device Check-In** est ancien (plus d'un jour ou deux), l'appareil peut avoir des problèmes de connectivité.

:::tip
Vérifiez l'état **de l'appareil** pour confirmer que l'appareil est actif. Un appareil inactif ne recevra pas de mises à jour de menu ni de commandes de traitement.
:::

## Guides connexes

- [Générer un mot de passe unique](/docs/admin-portal-guide/in-store-devices/generate-one-time-password/)
- [Désactivation en cours de fabrication](/docs/admin-portal-guide/in-store-devices/deactivate-in-store/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Dispositifs internes*

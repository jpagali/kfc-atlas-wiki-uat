---
title: Générer un mot de passe unique
sidebar_label: Générer un mot de passe unique
---

# Générer un mot de passe unique

## Ce que ce guide couvre

Crée un code d'authentification temporaire pour un terminal ou un kiosque POS, utilisé lors de la configuration initiale de l'appareil ou lors de la réauthentification d'un appareil existant.

:::note Octet POS Cavat
Ce workflow suppose que l'appareil fait partie d'une configuration **Byte POS** gérée par le portail Admin.

Si le marché n'utilise pas Byte POS, Byte Commerce s'appuie sur **Byte Connect** comme pont vers le marché POS, de sorte que le flux d'authentification/setup peut ne pas correspondre aux étapes de cette page.
:::

## Étapes

**Step 1:** Naviguez dans la section des appareils **In-Store** en utilisant le menu de navigation de gauche.

**Step 2:** Cliquez sur le bouton **Générer un mot de passe**.

![Étape 2](./img/step-2.png)

**Step 3:** Un champ de recherche apparaît. Saisissez le numéro **store** ou **store name** pour trouver l'emplacement pour lequel vous souhaitez générer un mot de passe.

![Étape 3](./img/step-3.png)

**Step 4:** Sélectionnez le magasin dans les résultats déroulants. Le mot de passe unique est automatiquement généré et affiché à l'écran.

![Étape 4](./img/step-4.png)

**Step 5:** Copier le mot de passe unique (OTP) affiché. Fournissez ce code à la personne qui a mis en place ou réactualise l'appareil POS. Ils saisiront ce code sur l'écran de l'appareil pour compléter l'authentification.

:::caution
Le mot de passe unique est temporaire et expire après une période déterminée (habituellement de 15 à 30 minutes). Si le périphérique n'accepte pas le code, en générer un nouveau.
:::

:::tip
Vous pouvez rechercher et filtrer les appareils par type de station, numéro de magasin et état de l'appareil pour trouver le bon emplacement rapidement.
:::

## Guides connexes

- [Voir les détails du périphérique en magasin](/docs/admin-portal-guide/in-store-devices/view-in-store-device-details/)
- [Désactivation en cours de fabrication](/docs/admin-portal-guide/in-store-devices/deactivate-in-store/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Dispositifs internes*

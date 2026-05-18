---
title: Connexion sociale
sidebar_position: 6
---

# Connexion sociale

## Ce qu'il fait

Signe social En permet aux clients de créer un compte et de se connecter à KFC en utilisant leurs identifiants existants Google, Facebook ou Apple — au lieu de créer un mot de passe spécifique à KFC.

Pour les clients, il supprime les frictions lors de l'enregistrement et de la connexion. Pour les marchés, il augmente les taux de création des comptes et réduit les problèmes de soutien liés aux mots de passe.

## Fournisseurs soutenus

| Fournisseur | Site Web | iOS | Android |
|---|---|---|---|
| Google | ✅ | ✅ | ✅ |
| Facebook | ✅ | ✅ | ✅ |
| Apple (S'identifier avec Apple) | ✅ | ✅ | Apple ne prend en charge que cela sur iOS |

## Comment ça marche

Lorsqu'un client touche un bouton de connexion sociale :

1. Ils sont redirigés vers l'écran d'authentification du fournisseur (Google, Facebook ou Apple)
2. Le fournisseur confirme l'identité du client et retourne un jeton
3. Atlas utilise ce jeton pour créer ou récupérer le compte KFC du client
4. Le client est connecté

Si un client a déjà un compte KFC avec la même adresse e-mail, le login social est lié à son compte existant.

## Mise en place du marché

Signe social In est configuré par marché et par fournisseur. Chaque fournisseur est activé indépendamment, donc un marché peut avoir Google Sign En activité sans Facebook, par exemple.

Le flux d'authentification est défini dans la configuration du marché:

```js
authenticationOptions: {
  enabledFlows: {
    MagiclinkEmail: true,   // passwordless email login (always recommended)
    Google: true,
    Facebook: false,
    Apple: true,
  },
  primaryIdentifier: 'email',
}
```

## Plateformes

| Plateforme | Appui |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Site Web | ✅ |

:::note :
Google One Tap Login est disponible sur le web comme couche de commodité supplémentaire. Il affiche une superposition de connexion automatiquement. Il est facultatif et doit toujours être jumelé avec les boutons OAuth standard, car il peut être supprimé par les paramètres du navigateur.
:::

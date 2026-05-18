---
title: "Guide: Traductions de contenu"
sidebar_position: 10
---

# Guide: Traductions de contenu

Tous les textes du site web de KFC ne sont pas liés à un type de contenu spécifique comme un produit ou une bannière de page d'accueil. Certaines chaînes d'interface utilisateur — étiquettes de widget, copie de bouton, texte d'aide, messages d'erreur — existent indépendamment. Le système de traduction dans Contentful vous permet de gérer ces chaînes et de les localiser par langue, en utilisant **Traducteur Mode** pour identifier exactement quelle chaîne vous devez éditer.

---

## Où vous le voyez au front

Les traductions affectent le texte qui apparaît dans tout le site — partout où une étiquette, une vedette ou une chaîne d'interface utilisateur est affichée. Voici quelques exemples :

- L'invite de widget d'emplacement : *"Entrez votre adresse pour voir le menu local et les offres"*
- Etiquettes étape de départ : *"Votre commande", "Détails de livraison"*
- Texte du bouton : *"Ajouter au panier", "Continuer"*
- Messages d'erreur et copie d'état vide

Si une chaîne vit à l'intérieur d'un type de contenu connu (comme un titre de produit ou un en-tête de page d'accueil), elle affichera un indicateur de flèche (→) en mode Traducteur vous pointant vers cette entrée de type de contenu. S'il n'y a pas de flèche, la chaîne est gérée directement via le type de contenu de traduction.

---

## Que configurer dans Contentful

### Activer le mode traducteur

Traducteur Mode est un outil de prévisualisation qui superpose chaque contenu du site web de la KFC avec son ID de traduction, vous permettant d'identifier quelle entrée Contentful contrôle ce texte.

1. Ouvrir une fenêtre de navigateur **incognito**
2. Naviguez sur l'URL de votre marché KFC avec le paramètre suivant ajouté :
   ```
   https://{your_kfc_domain}/?previewContent=true
   ```
3. Toggle **Traducteur Mode ON** en utilisant le toggle qui apparaît sur la page
4. Plongez sur n'importe quel morceau de texte — son **.`locationWidget.Heading`)

Pour désactiver le mode Traducteur :
```
https://{your_kfc_domain}/?previewContent=false
```

### Mise à jour d'une traduction

Une fois que vous avez l'ID de traduction:

1. Dans Contentful, accédez à **Contenu** → **Traduction** Type de contenu
2. Cliquez sur **Ajouter une entrée**
3. Coller le **.`locationWidget.Heading`) dans le champ ID
4. Remplissez la copie de traduction pour **toutes les langues/locales** votre support du marché
5. Cliquez sur **Publier** — le texte mis à jour apparaîtra sur le site en direct

:::tip
Si un morceau de texte affiche un indicateur de flèche (→) en mode Traducteur, cela signifie qu'il vit dans un type de contenu structuré (par exemple, page d'accueil, catégorie). Naviguez plutôt vers cette entrée de type de contenu pour modifier le texte.
:::

---

## Cas d'utilisation

**Localisation d'une étiquette de widget** — Si l'invite de recherche d'emplacement doit dire quelque chose de différent en français par rapport à l'anglais, utilisez le mode Traducteur pour trouver l'ID et définir les traductions pour les deux localités.

**Fixer une chaîne d'interface utilisateur** — Si un bouton ou une étiquette a une copie incorrecte, utilisez le mode Traducteur pour le localiser, puis mettez à jour l'entrée Traduction dans Contentful — aucun déploiement nécessaire.

**Créer une nouvelle langue** — Lors de l'embarquement d'une nouvelle localité pour un marché, utilisez le type de contenu Traduction pour s'assurer que toutes les chaînes génériques d'interface utilisateur sont peuplées dans la nouvelle langue.

**Phrases spécifiques au marché** — Même dans la même langue, différents marchés peuvent avoir besoin d'une copie différente (p. ex. « Basket » vs « Cart », « Livraison » vs « À emporter »). Les traductions permettent à chaque marché de fixer ses propres valeurs par région.

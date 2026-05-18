---
title: "Guide: Contenu du pied de page"
sidebar_position: 8
---

# Guide: Contenu du pied de page

Le **Global Footer** apparaît au bas de chaque page du site Web de la KFC. Contentful permet aux marchés de configurer les sections de navigation du pied de page, les liens et les actifs liés (y compris les PDF) sans nécessiter de soutien technique.

---

## Où vous le voyez au front

Le pied de page est divisé en **sections de navigation**, chacune contenant un groupe de liens. Les sections communes à tous les marchés comprennent:

| Chapitre | Contenu typique |
|---------|-----------------|
| **Menu** | Liens vers les pages de la catégorie de menu (p. ex. poulet, côtés, boissons) |
| **Politiques / Politique** | Politique de confidentialité, Conditions d'utilisation |
| **Politiques d'exécution** | Conditions de livraison, FAQ |
| **FAQ** | Foire aux questions |
| **Contenu nutritionnel** | Pages d'information nutritionnelle ou PDF téléchargeables |
| **Aide et service / Ayuda y Servicio** | Liens de contact avec le service clientèle |

Chaque lien dans une section peut indiquer un chemin de page interne (dans le site KFC) ou une URL externe.

---

## Aperçu des types de contenu

Avant de modifier, il aide à comprendre les trois types de contenu Contentful impliqués:

| Type de contenu | Ce que c'est | Où il vit |
|---|---|---|
| ** Pied de page mondial** | Le conteneur de niveau supérieur — contient toutes les sections | Contentful → Contenu → Global Footer |
| **Section de la navigation des bateaux** | Un groupe nommé de liens (p. ex., « Politiques ») | Créé dans le Global Footer |
| **Footer Link** | Un seul lien cliquable avec le texte et la destination | Créé dans une section de navigation Footer |

---

## Ajouter une nouvelle section au pied de page

**Step 1:** Dans Contentful, accédez à **Content** et recherchez **Global Footer**. Ouvrez l'entrée.

**Step 2:** Dans l'entrée Global Footer, cliquez sur **Ajouter du contenu** pour ajouter une nouvelle section.

**Step 3:** Sélectionnez **Footer Navigation Section** dans les options de contenu.

**Step 4:** Remplissez les détails de la section:

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Nom de la section (anglais)** | L'étiquette de ce groupe de liens | Par exemple, "Politiques", "FAQ", "Aide" |
| **Nom de la section (espagnol)** | Étiquette localisée, si votre marché utilise l'espagnol | Par exemple, "Políticas". Laisser en blanc si non applicable. |

**Step 5:** Une fois la section sauvegardée, vous pouvez commencer à ajouter Footer Links à l'intérieur (voir[Création d'un lien Footer](#creating-a-footer-link)ci-dessous).

:::note :
L'ordre des sections dans le pied de page correspond à l'ordre des sections dans l'entrée Global Footer. Faites glisser les sections vers le haut ou vers le bas pour les réorganiser.
:::

---

## Création d'un lien Footer {#creating-a-footer-link}

**Step 1:** À l'intérieur d'une section de navigation **Footer**, cliquez sur **Ajouter du contenu** → **Nouveau contenu** → **Footer Link**.

**Step 2:** Remplissez les champs Footer Link :

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Lien texte** | L'étiquette visible affichée dans le pied de page | Par exemple, "Politique de confidentialité", "Information sur les allergies" |
| **Lien** | Où aller en cliquant - voir les champs **Lien** ci-dessous | Requis |
| **Image** | Une icône ou un logo en option pour accompagner le lien | Consultez votre développeur avant d'utiliser — toutes les mises en page ne supportent pas les images. |

**Step 3:** Dans l'entrée **Link**, remplissez :

| Champ | Quoi entrer | Annexe |
|-------|--------------|-------|
| **Identificateur** | Un nom de référence interne (non indiqué aux clients) | Par exemple,`footer-privacy-link`. Aide les éditeurs à trouver l'entrée plus tard. |
| **Lien texte** | L'étiquette texte pour ce lien | Doit correspondre au champ de lien **Lien Texte** |
| ** Chemin intérieur** | Chemin vers une page du site Web de la KFC | Par exemple,`/privacy`, `/faq`. Utilisez ceci pour les pages hébergées sur le site KFC. |
| **URL** | URL externe complète | Par exemple,`https://partner.com/delivery-terms`. Utilisez ceci pour les pages tierces. |

:::caution
Utiliser soit **Parcours intérieur** ou **URL** — pas les deux. Si les deux sont remplis, consultez votre développeur pour confirmer ce qui prend la priorité dans l'implémentation de votre marché.
:::

**Step 4:** Publier dans cet ordre pour s'assurer que les changements se déroulent correctement :

1. Publier l'entrée **Link**
2. Publier l'entrée **Footer Link**
3. Publier la section de navigation **
4. **Republication du Global Footer** — cette dernière étape est nécessaire pour que les changements apparaissent sur le site en direct.

:::caution
Oublier de republier le **Global Footer** est la raison la plus courante pour laquelle les changements de pied de page n'apparaissent pas sur le site en direct. Toujours terminer les quatre étapes de publication.
:::

---

## Ajout d'un PDF lié au pied de page

Utilisez ceci lorsque vous avez besoin de lien vers un document téléchargeable (p. ex., des informations nutritionnelles, des tableaux allergènes ou des termes PDF) à partir du pied de page.

**Step 1:** Dans Contentful, allez à **Media** et cliquez sur **Ajouter un nouvel actif** → **Single Asset**.

**Step 2:** Donnez à l'actif un titre descriptif (p. ex. « Information nutritionnelle PDF – AU 2024 ») et téléchargez le fichier PDF.

**Step 3:** Une fois téléchargé, cliquez sur l'icône **Télécharger** à côté de l'actif pour copier l'URL directe vers le fichier.

**Step 4:** Utilisez cette URL comme champ **URL** dans une entrée Footer Link (voir[Création d'un lien Footer](#creating-a-footer-link)ci-dessus).

:::tip
Nommez clairement vos actifs PDF et incluez le marché et la date dans le titre, ce qui rend beaucoup plus facile de les trouver et de les remplacer lorsqu'ils sont mis à jour.
:::

---

## Cas d'utilisation

**Nouvelle page de politique** — Une nouvelle page de politique de confidentialité ou de conditions de service a été publiée sur le site de KFC. Ajoutez-le comme lien de pied de page dans la section Politiques en utilisant son chemin interne (p. ex.,`/privacy-policy`), donc les clients peuvent toujours trouver la dernière version.

**Nutritional PDF** — Téléchargez une mise à jour de l'information nutritionnelle PDF vers Contentful Media, copiez son URL direct et liez-la à partir de la section Contenu nutritionnel. Aucun travail d'ingénierie nécessaire.

**Structure régionale de pied de page** — Les marchés peuvent configurer différents noms de section et ensembles de liens pour répondre aux exigences légales locales, aux préférences linguistiques et aux besoins de navigation. Chaque marché gère sa propre entrée Global Footer indépendamment.

**Page d'atterrissage externe** — Ajoutez temporairement un lien de pied de page pointant vers un microsite de campagne ou une page d'atterrissage externe pendant une période de promotion. Supprimer ou mettre à jour le lien lorsque la campagne se termine.

---

## Guides connexes

- [Guide: SEO](/docs/frontend/contentful/guide-seo)— Gérer les titres des pages et les méta descriptions
- [Aperçu général](/docs/frontend/contentful/)— Comment le contenu fonctionne à travers la plateforme
- [Aperçu de l'avant-plan](/docs/frontend/overview)— Le contexte plus large de la plateforme front-end

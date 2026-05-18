---
title: Guide de configuration des promotions
sidebar_label: Guide de configuration des promotions
---

# Guide de configuration des promotions

Une référence pratique par domaine pour les promotions de construction dans le portail Byte Commerce Byte. Ce guide vous guide à travers chaque étape de l'assistant, explique chaque option, et se termine avec une feuille de recette des types de promotion les plus courants que vous pouvez construire avec la plateforme aujourd'hui.

:::note :
Les promotions sont toujours attribuées à un groupe **Store**, jamais à un seul magasin. Assurez-vous que vos magasins cibles sont déjà groupés avant de créer une promotion.
:::

:::note :
Les captures d'écran de ce guide sont rafraîchies. Les instructions écrites ci-dessous demeurent la source de vérité pour les définitions de flux et de champ.
:::

---

## Ce que vous pouvez construire

Le moteur de promotion Byte Commerce prend en charge les types de promotion suivants hors de la boîte:

| Type de promotion | Comment ça marche |
|---|---|
| **Déduction en pourcentage** | Retirez X% d'un élément, d'un groupe d'éléments ou de l'ensemble de la commande |
| **Montant fixe hors taxes** | Réduire le prix du chariot ou de l'article d'un montant fixe dollar/monnaie |
| **Prix fixe** | Fixer un prix spécifique pour un article admissible (p. ex., burgers de 5 $) |
| **Acheter un en obtenir un (BOGO)** | Exiger la présence de l'article + appliquer un rabais de 100% ou un prix fixe à un deuxième article |
| **Réduction sur les dépenses minimales** | Déclencher une réduction seulement lorsque le chariot atteint un seuil sous-total |
| **Channel-Exclusive Deal** | Limiter une promotion à des plates-formes de commande spécifiques (p. ex., app seulement, livraison seulement) |
| ** Promotion limitée dans le temps** | N'exécuter un marché que pendant des dates, des jours ou des heures spécifiques |
| **Occasion-Specific Deal** | Limiter une promotion à un type de commande spécifique (p. ex., Drive Thru seulement, Livraison seulement) |
| **Livraison gratuite / Renonciation aux droits** | Rabais ou frais de livraison, de service ou de réglementation nuls |
| **Réduction pour les membres fidèles** | Limiter une promotion aux clients inscrits seulement |
| ** Promotion du code du coupon** | Exiger un code de rachat pour que le client débloque l'offre |
| **Réduction pour dépassement de gestionnaire** | Exiger un NIP gestionnaire ou une signature à POS pour appliquer la réduction |
| **Codes uniques/sérialisés** | Générer des codes de rachat individuels à usage unique par client |

## Recettes Pages

Utilisez ces pages de recettes dédiées lorsque vous voulez un point de départ plus rapide pour les modèles de promotion KFC les plus courants:

- [Recette 1 - Acheter 1 Obtenez 1 Gratuit (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/)
- [Réduction minimale sur les dépenses](/docs/playbooks/promotion-recipes/minimum-spend-discount/)
- [Recette 3 - Offre App-Exclusive](/docs/playbooks/promotion-recipes/app-exclusive-deal/)
- [Recette 4 - Déjeuner spécial (Limité dans le temps)](/docs/playbooks/promotion-recipes/lunch-special-time-limited/)
- [Recette 5 - Livraison gratuite sur commandes importantes](/docs/playbooks/promotion-recipes/free-delivery-on-large-orders/)
- [Recette 6 - Exclusivité client enregistré](/docs/playbooks/promotion-recipes/registered-customer-exclusive/)
- [Recette 7 - Remise sur code de coupon](/docs/playbooks/promotion-recipes/coupon-code-discount/)
- [Recette 8 - Offre Drive-Thru seulement](/docs/playbooks/promotion-recipes/drive-thru-only-deal/)
- [Recette 9 - Offre quotidienne (une fois par client par jour)](/docs/playbooks/promotion-recipes/daily-deal-once-per-customer-per-day/)
- [Recette 10 - Promotion multi-conditions empilées](/docs/playbooks/promotion-recipes/stacked-multi-condition-promotion/)

---

## L'assistant 4-Step

Chaque promotion est créée par un assistant en 4 étapes : **Informations de base → Exigences → Effets → Revue**. Vous pouvez naviguer entre les étapes en utilisant le panneau d'étape de gauche, et revenir à toute étape terminée de l'écran d'examen.

---

## Étape 1 — Renseignements de base

Cette étape définit l'identité de la promotion, comment elle est déclenchée et combien de fois elle peut être utilisée.

### Champs requis

| Champ | Quoi entrer |
|---|---|
| ** Nom de la promotion** * | Nom interne des opérateurs — non indiqué aux clients. Être descriptif:`BOGO Zinger – May 2024` |
| **Combinable avec d'autres promotions** * | `No`— la promotion ne peut pas empiler avec d'autres dans le même panier.`Yes`— elle peut. Par défaut à`No`. |

### Champs standard

| Champ | Quoi entrer |
|---|---|
| **Afficher le nom** | Le nom du client affiché sur les canaux de commande. Soyez bref et convaincant : par exemple,`Buy 1 Get 1 Free Zinger` |
| **Description** | Explique la promotion aux clients sur l'interface de commande |
| **Max Promo utilise par panier** | Combien de fois cette promotion peut s'appliquer dans un seul ordre. Par défaut à`1`. Définir plus haut pour les promotions qui peuvent s'appliquer à plusieurs articles dans le même panier |
| **Max Montant total des promotions** | Capte la valeur d'escompte totale qui peut être appliquée de cette promotion dans un seul panier. Laisser en blanc sans bouchon |

### Code automatique vs Code de révocation

| Réglage | Quand utiliser |
|---|---|
| **Automatique: No** (par défaut) | Un client doit saisir un code de rachat pour déclencher la promotion |
| **Automatique : Oui** | La promotion des incendies automatiquement lorsque les exigences sont satisfaites — aucun code nécessaire |

:::caution
Commutateur **Automatique** depuis`No`à`Yes`supprimera ** de façon permanente** tous les codes de rachat que vous avez déjà ajoutés. Faites ceci avant d'ajouter des codes, pas après.
:::

Cliquez sur ** CODE DE REDEMPTION AJOUTER** pour joindre un ou plusieurs codes lorsque Automatic est configuré à`No`.

### Options supplémentaires

Cliquez sur **SHOW ADDITIONAL OPTIONS** pour révéler ces champs :

| Champ | Quoi entrer |
|---|---|
| **Texte juridique** | Toute clause de non-responsabilité légale figurant à côté de la promotion (p. ex. conditions générales) |
| **Code de déclaration** | Code interne utilisé pour le suivi et l'analyse dans les systèmes de rapports externes |
| **Étiquettes de catalogue** | Tags utilisés pour catégoriser cette promotion dans les intégrations de catalogue |
| **Afficher le bouton POS** | Basculer`Yes`pour que cette promotion apparaisse comme un raccourci dans le Yum ! Interface POS |
| **Public** | Basculer`Yes`pour permettre à cette promotion de faire surface sur les canaux web et mobiles |

---

## Étape 2 — Exigences

Les exigences définissent les conditions **** qu'un client doit respecter avant que la promotion ne s'active. Vous pouvez ajouter plusieurs exigences à une seule promotion — tous doivent être satisfaits pour la promotion au feu. Cliquez sur **AJOUTER LA DEMANDE** pour empiler des conditions supplémentaires.

---

### Chaîne

Limite la promotion à une ou plusieurs plateformes de commande spécifiques. Sélectionnez tous les canaux où cette promotion devrait être active.

| Champ | Options |
|---|---|
| ** Sélectionner les canaux** * | Web, Mobile, iOS, Android, POS, Kiosque, DoorDash, Uber mange, Grubhub, Deliveroo, Juste manger, Centre d'appels |

**When to use:** Offres exclusives App, promotions de l'agrégateur de livraison, ou offres uniquement POS/kiosk.

---

### Exclusion

Empêche que certains articles soient admissibles à la promotion. Les éléments énumérés ici sont explicitement exclus de toutes les cibles de promotion.

| Champ | Options |
|---|---|
| **Type d'article** * | Produit, Variante, Bundle, Promo Tag |
| **Choisir le code** * | Rechercher et sélectionner l'élément spécifique à exclure |

**When to use:** Un rabais à l'échelle du site qui ne devrait pas s'appliquer aux articles premium ou déjà radiés.

---

### Item Présence

Le chariot doit contenir au moins une quantité minimale d'un ou plusieurs articles spécifiés. Utilisez ceci pour exiger qu'un client ait effectivement le produit admissible dans son panier.

| Champ | Quoi entrer |
|---|---|
| ** Quantité minimale** * | La quantité combinée minimale des éléments éligibles qui doivent être dans le panier |
| **Valeur égale ou inférieure** | Un comparateur pour le contrôle des prix — les éléments de valeur égale ou inférieure sont éligibles |
| ** Éléments admissibles — Type d'élément** * | Produit, variante, lot ou étiquette promo |
| **Qualification des éléments — Sélectionner le code** * | Rechercher et sélectionner l'élément de qualification spécifique |
| ** VALEUR DE VALEUR D'OPTION | Autres filtres par des valeurs d'option (par exemple, seulement une taille ou une saveur spécifique) |

Cliquez sur **ADD ITEM TYPE** pour ajouter plusieurs éléments éligibles — le client a besoin d'au moins un d'entre eux dans son panier.

**When to use:** Configurations BOGO, exigences de l'offre de repas, ou "acheter le produit X pour obtenir une réduction sur Y."

---

### Article Quantité

Le panier doit contenir au minimum un nombre total d'articles sur toute la commande — aucun produit spécifique n'est requis.

| Champ | Quoi entrer |
|---|---|
| **Nombre minimal d'articles** * | Le nombre minimum d'articles individuels que le panier doit contenir |

**When to use:** "Commander 3 articles ou plus et obtenir un rabais" type promotions.

---

### Approbation par le gestionnaire

Exige qu'un gestionnaire autorise la promotion au point de vente avant qu'elle ne soit appliquée. Cas d'utilisation de POS seulement.

| Champ | Options |
|---|---|
| **Activités** | `PIN`— le gestionnaire entre son NIP sur l'appareil POS.`SIGNATURE`— le gestionnaire signe physiquement pour approuver |

**When to use:** Réductions discrétionnaires, résolutions de plainte, ou toute promotion qui ne devrait pas être auto-servie par le client.

---

### Nombre max de fois qu'une promotion peut être utilisée

Définit un plafond global sur les rachats totaux pour tous les clients et tout le temps. Une fois la limite atteinte, la promotion cesse de fonctionner pour tout le monde.

| Champ | Quoi entrer |
|---|---|
| **Nombre maximal de fois où une promotion peut être utilisée** * | Saisissez un nombre entier — par exemple,`1000`en vue d ' une promotion |

**When to use:** Ventes flash, promotions à gestion limitée, ou toute offre avec un inventaire fixe de réductions.

---

### Max Utilisations totales par client

Limite le nombre de fois qu'un seul compte client peut échanger cette promotion tout au long de sa vie (pas de réinitialisation quotidienne).

| Champ | Quoi entrer |
|---|---|
| **Max Utilisations totales par client** * | Saisissez un nombre entier — par exemple,`1`pour une promotion unique par client |

**When to use:** Offres de bienvenue, promotions uniques d'anniversaire, ou offres « première commande seulement ».

---

### Max Utilisations totales par client par jour

Comme ci-dessus, mais le compteur se réinitialise tous les jours à minuit.

| Champ | Quoi entrer |
|---|---|
| **Max Utilisations totales par client par jour** * | Saisissez un nombre entier — par exemple,`1`pour une offre une fois par jour |

**When to use:** Offres quotidiennes, récompenses de fidélité récurrentes, ou "un article gratuit par jour" promotions.

---

### Max Utilisations totales par code de remboursement

Capte combien de fois un code de rachat spécifique peut être utilisé, quel que soit le client qui l'utilise.

| Champ | Quoi entrer |
|---|---|
| **Max Utilisations totales par code de révocation** * | Saisissez un nombre entier — par exemple,`1`pour un code à usage unique, ou`50`pour un code partagé avec des utilisations limitées |

**When to use:** Codes de coupons par lots, codes promo influenceurs avec plafond d'utilisation ou codes sérialisés émis à un certain nombre de clients.

---

### Occasion

Limite la promotion à un type spécifique d'exécution de commande. Différent de Channel — il s'agit de *comment* le client récupère sa commande, pas où il l'a placée.

| Champ | Options |
|---|---|
| **Activités** | Dégustation, restauration, livraison, dîner, entraînement |

**When to use:** Offres Drive-Thru-only, promotions de livraison, ou Dine-In spéciaux.

---

### Total partiel

Le panier doit atteindre une valeur totale minimale avant les déclencheurs de promotion.

| Champ | Quoi entrer |
|---|---|
| Total partiel** | La valeur seuil du chariot, par exemple,`$20.00`. Par défaut`$0.00` |
| **Mode de calculation** | **Réel Sous-total** — vérifie la valeur du panier *avant* tout autre rabais est appliqué (par défaut). **Réduction du sous-total** — contrôle la valeur *après* affacturage dans toutes les autres promotions actives |
| ** Postes exclus** | Déterminez les éléments qui ne devraient pas être inclus dans le seuil de sous-total. Ensemble **Type d'article**, **Code de sélection** et **Quantité à exclure** pour chaque |

**When to use:** "Dépenser 30 $ et obtenir 5 $ de rabais" ou "Livraison gratuite sur les commandes de plus de 25 $.

---

### Calendrier

Limite la promotion à des intervalles précis de dates, des jours de la semaine et des heures de la journée. Plusieurs périodes de temps peuvent être ajoutées pour couvrir différentes fenêtres (p. ex., heures du déjeuner Lun-Fri et toute la journée samedi).

| Champ | Quoi entrer |
|---|---|
| **Validation par rapport à l'heure actuelle** | Vérifiez ceci pour valider lorsque la commande est *placée* |
| **Validation par rapport à l'heure d'exécution demandée** | Vérifiez ceci pour valider lorsque la commande est *prévue pour être remplie*. Au moins un doit être sélectionné |
| **Date de début** | La première date de la promotion est active. Laisser en blanc pour aucune restriction de date de début |
| **Date de clôture** | La dernière date de la promotion est active. Laisser en blanc pour aucune restriction de date de fin |
| **Day Range** * | Choisir des jours individuels (Su Mo Tu We Th Fr Sa) ou vérifier ** Toute la semaine** |
| **Heure de départ intermédiaire** * | Le moment où la promotion devient active chaque jour — format`HH:MM:SS`(par exemple,`11:00:00`) |
| **Heure de fin d'intervalle** * | Le temps que la promotion cesse chaque jour — format`HH:MM:SS`(par exemple,`14:00:00`) |
| **Poids** * | Une valeur prioritaire utilisée lorsque plusieurs délais se chevauchent — un poids plus élevé a priorité |
| **Est-ce que le délai de blackout?** | Basculer`Yes`à *inverser* cette fenêtre — la promotion est valide *en dehors* cette période au lieu de l'intérieur |
| **Utilisez UTC** | Cochez cette case pour entrer toutes les heures en UTC au lieu du fuseau horaire local du magasin |

Cliquez sur **AJOUTER UN CADRE DE TEMPS** pour définir des fenêtres supplémentaires dans la même exigence.

**When to use:** Déjeuner (11h à 14h en semaine), week-ends spéciaux, campagnes à temps limité avec une date de début et de fin définie.

---

### État de l' utilisateur

Limite la promotion selon que le client a un compte enregistré.

| Champ | Options |
|---|---|
| **Est-ce que le client inscrit?** | `Yes`— la promotion n'est disponible que pour les titulaires de compte connectés.`No`— la promotion n'est offerte qu'aux clients invités |

**When to use:** Exclusivités des membres de fidélité, offres de bienvenue pour les nouveaux utilisateurs (invité seulement), ou programmes de récompense basés sur un compte.

---

## Étape 3 — Effets

Les effets définissent ** quelle remise ou récompense le client reçoit** lorsque toutes les exigences sont satisfaites. Vous pouvez ajouter plusieurs effets en utilisant le bouton **ADD EFFECT** en haut à droite. Chaque effet a une icône de la corbeille pour la supprimer.

:::caution
La bannière d'avertissement — *"Il y a des problèmes avec les effets suivants qui doivent être résolus avant que la promotion puisse être sauvegardée"* — apparaît lorsqu'un champ requis dans un effet est incomplet. Tous les effets doivent être entièrement configurés avant de pouvoir passer à l'examen.
:::

Il existe trois types d'effets :

---

### Type d'effet: Niveau de commande

S'applique au sous-total **toute commande**, et non aux articles individuels.

| Champ | Quoi entrer |
|---|---|
| **Type d'effet de pricing** * | Voir tableau ci-dessous — Le niveau de commande supporte 4 types |
| ** Valeur de retrait** * | Pourcentage ou montant selon le type d'effet de tarification sélectionné |
| **Répartition des rabais** | **Sous-total Prix** — applique l'escompte en une seule réduction au sous-total (par défaut). **Distribuer sur tous les articles du panier** — répartit la réduction proportionnellement sur tous les articles du panier |
| ** Postes exclus** * | Les articles listés ici ne compteront ni ne recevront la remise de niveau de commande. Définir le type d'article + le code pour chacun. Cliquez sur **AJOUTER UN TYPE DE POINTS** pour exclure plusieurs éléments |
| ** Points inclus** | Limite l'effet aux seuls éléments spécifiés. **Note :** Les éléments inclus sont désactivés tant que tous les éléments exclus sont présents — supprimer tous les éléments exclus d'abord pour activer cette section |

**Types d'effets de prix disponibles pour le niveau de commande:**

| Type | Ce qu'il fait |
|---|---|
| **En pourcentage** | Réduit le sous-total de la commande d'un pourcentage fixe — par exemple, 10% de réduction |
| ** Montant annulé** | Réduit le sous-total des commandes d'un montant fixe en devises, p. ex. 5 $ de rabais |
| **Pourcentage variable dés** | Réduction en pourcentage qui varie — généralement utilisée avec des codes sérialisés ou dynamiques |
| ** Montant variable désactivé** | Réduction forfaitaire qui varie selon le code ou la condition |

---

### Type d'effet: Niveau d'élément

S'applique à la réduction sur **articles éligibles spécifiques seulement**, pas à l'ensemble de la commande. Offre le contrôle le plus granulaire sur ce qui est réduit et par combien.

| Champ | Quoi entrer |
|---|---|
| **Type d'effet de pricing** * | Voir tableau ci-dessous — Niveau d'article prend en charge 6 types |
| ** Valeur de retrait** * | Le pourcentage, le montant ou le prix fixe selon le type sélectionné |
| **Prix cible de l'article** | **Lowest** — le rabais cible l'élément le moins cher de qualification dans le panier (par défaut). **Le plus élevé** — le rabais cible l'élément le plus cher |
| **Cibler tous les éléments** | **Non** — l'effet ne s'applique qu'à une seule instance du premier élément correspondant (par défaut). **Oui** — l'effet s'applique à chaque article correspondant dans le panier |
| **Qualifications** * | Les éléments auxquels cette réduction s'applique. Cliquez sur **+ AJOUTER ET EFFETS DÉFINS** pour ouvrir le tiroir de sélection de l'article |

** Tiroir des éléments admissibles — Sélectionnez les éléments admissibles et définissez les effets cibles :**

| Chapitre | Champ | Quoi entrer |
|---|---|---|
| ** Sélectionner des éléments** | Type d'élément | Produit, variante, lot |
| ** Sélectionner des éléments** | Sélectionner le produit / Variante / Bundle | Recherchez et sélectionnez l'élément de qualification. Les éléments sélectionnés apparaissent dans un tableau indiquant le nom et le code du produit |
| **Définir les effets cibles** | Prix de base | La réduction s'applique uniquement au prix de base de l'article (modificateurs exclus) |
| **Définir les effets cibles** | Prix de base avec modificateurs | La réduction s'applique au prix de base plus les modificateurs sélectionnés (par défaut) |
| **Définir les effets cibles** | Modificateurs de cible à rabais | Basculer`Yes`inclure le coût des modificateurs dans le montant actualisé |

Cliquez sur **ADD PRODUITS ET EFFETS** pour confirmer.

** Types d'effets de pricing disponibles pour le niveau d'article :**

| Type | Ce qu'il fait |
|---|---|
| **En pourcentage** | Réduit le prix de l'article éligible d'un pourcentage fixe |
| ** Montant annulé** | Réduit le prix de l'élément admissible d'un montant en monnaie fixe |
| **Prix fixe** | Définit l'article admissible à un prix précis — p. ex., 5 $ à plat |
| **Pourcentage variable dés** | Pourcentage de réduction qui varie selon le code ou l'état |
| ** Montant variable désactivé** | Remise sur le montant qui varie selon le code ou l'état |
| ** Prix fixe variable** | Prix fixe qui varie selon le code ou la condition |

---

### Type d'effet: Frais de livraison, de service et de réglementation

Applique le rabais à **fees** plutôt qu'aux articles du panier eux-mêmes. Utilisez ceci pour offrir la livraison gratuite ou renoncer à d'autres frais.

| Champ | Quoi entrer |
|---|---|
| ** Frais de livraison, de service et de réglementation Type** * | ** Frais de livraison** — rabais les frais de livraison. **Frais de service** — rabais les frais de service de la plateforme. **Tarifs réglementaires** — rabais sur tout supplément réglementaire |
| **Type d'effet de pricing** * | Pourcentage de rabais, montant de rabais ou prix fixe |
| ** Valeur de retrait** * | Le pourcentage, le montant ou le montant des frais fixes selon le type sélectionné |

** Types d'effet de tarification disponibles pour les frais :**

| Type | Ce qu'il fait |
|---|---|
| **En pourcentage** | Réduit les frais d'un pourcentage — par exemple, 100 % de rabais = livraison gratuite |
| ** Montant annulé** | Réduit la taxe d'un montant fixe |
| **Prix fixe** | Établit les frais à une valeur précise, p.ex. 0,00 $ pour la livraison gratuite |

---

### Types d'effets de tarification — Comparaison complète

| Type d'effet de tarification | Niveau de commande | Niveau | Honoraires |
|---|:---:|:---:|:---:|
| Pourcentage | ✅ | ✅ | ✅ |
| Montant annulé | ✅ | ✅ | ✅ |
| Prix fixe | — | ✅ | ✅ |
| Pourcentage variable hors | ✅ | ✅ | — |
| Montant variable | ✅ | ✅ | — |
| Prix fixe variable | — | ✅ | — |

---

## Étape 4 — Révision

Un résumé en lecture seule de tout ce que vous avez configuré. Chaque section affiche ses valeurs actuelles et a un lien **EDIT** sur la droite pour sauter directement en arrière et faire des changements sans perdre aucun autre progrès.

L'écran d'examen montre :

- **Informations de base** — Combinable avec d'autres promotions, Max Promo utilise par panier, Automatique, Codes de révocation, Affichage bouton POS, Public
- **Exigences** — chaque type d'exigence et ses valeurs configurées
- **Effets** — Type d'effet, distribution de rabais, articles exclus

Lorsque tout semble correct, cliquez sur **CRÉATE** (en haut à droite) pour enregistrer et publier la promotion.

:::caution
Le bouton **CRÉATE** reste grisé si un effet a des erreurs de validation non résolues. Vérifiez la bannière d'avertissement de l'étape 3 et résolvez tous les effets marqués avant de procéder.
:::

---

## Recettes de promotion communes

Les pages de recettes détaillées vivent maintenant dans la section de recettes dédiées ci-dessus afin que les marchés puissent continuer à ajouter de nouveaux modèles sans rendre ce guide de configuration trop long.

---

## Guides connexes

- [Créer une promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Modifier une promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Affecter des promotions aux groupes de magasins](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Créer des codes sérialisés](/docs/admin-portal-guide/promotions/create-serialized-code/)
- [Recherche avancée de promotions](/docs/admin-portal-guide/promotions/advanced-promotions-search/)

---

* Une partie des[Guide du portail administratif](/docs/admin-portal-guide)· Section : Promotions*

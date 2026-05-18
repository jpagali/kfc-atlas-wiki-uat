---
title: Vérification de la réalité
description: Les problèmes de déploiement les plus coûteux proviennent de malentendus, et non de fonctionnalités manquantes. Lisez ça avant d'aller vivre.
sidebar_label: Vérification de la réalité
---

# Vérification de la réalité — Ce que les marchés doivent savoir

> Les problèmes de déploiement les plus coûteux proviennent de malentendus, et non de fonctionnalités manquantes. Lisez ça avant d'aller vivre.

---

## Les grandes idées fausses

Ce sont les équipes d'hypothèses les plus souvent mises en place — et la réalité derrière chacune.

---

### "Byte Helium possède la tarification"

**Reality:** Byte Helium affiche les prix — il ne les possède pas, ne les calcule pas ou ne les contrôle pas. La tarification est entièrement détenue par le service de menu et de sauvegarde du commerce. Si les prix sont erronés dans l'application, la correction est dans la configuration du moteur ou du menu — pas dans Byte Helium.

---

### "Nous pouvons configurer le flux de caisse dans Byte Helium"

**Reality:** Les flux de départ (variantes, étapes, frais) sont orchestrés par l'Orchestre de départ du Commerce Backend. Les marchés définissent la variante à utiliser via la configuration Byte Portal. Byte Helium rend ce que le moteur lui dit.

---

### "Byte Portal nous permet d'écrire notre menu"

**Reality:** Byte Portal assigne et corrige les menus déjà publiés. L'auteur du menu (créant des éléments, des descriptions, des prix) se trouve dans **Byte Menu** — un outil séparé en dehors de la plateforme Atlas. Byte Portal ne peut pas créer de contenu de menu à partir de zéro.

---

### "Promotions sont configurées dans Byte Helium"

**Reality:** Les règles de promotion, l'admissibilité, les codes et les budgets sont tous configurés dans le portail **Byte**. Byte Helium ne rend que ce que le moteur Promo revient. L'admissibilité est toujours calculée côté serveur.

---

### "Le suivi de la livraison en temps réel est toujours disponible"

**Reality:** Le suivi de la livraison est **optionnel par marché**. Elle nécessite une intégration avec un fournisseur de logistique tiers. Sans cela, les clients ne voient que l'état de la commande POS (accepté/prêt/achevé), pas le suivi en direct GPS.

---

### "Loyalty fonctionne automatiquement quand un marché va vivre"

**Reality:** La fidélité exige trois choses : (1) le programme de fidélité configuré pour le marché, (2) le client à signer et (3) le client à avoir inscrit. Les utilisateurs invités n'obtiennent aucun avantage de fidélité.

---

## Dépendances cachées

Ce sont des caractéristiques qui dépendent silencieusement d'autres choses étant en place en premier. Si la dépendance est manquante, la fonctionnalité échoue à l'exécution ou n'apparaît pas du tout.

| Fonctionnalité | Sur quoi ça dépend silencieusement | Impact en cas de manque |
|---|---|---|
| Admissibilité aux promotions | Moteur Promo côté serveur par marché | Promos peut apparaître mais échouer à la rédemption |
| Suivi de la livraison | Intégration logistique 3P par marché | Le suivi est indisponible |
| Adresses enregistrées | Client en cours de signature | Les utilisateurs invités perdent leurs adresses chaque session |
| Historique des commandes | Compte client existant et lié | Ordres non visibles dans l'histoire |
| Défis & gamification | Programme de fidélisation par marché | L'onglet Défis n'apparaît pas |
| Consentement aux cookies | CMP configuré par marché | La bannière de consentement ne peut pas se conformer au droit local |
| abonnés au Webhook | Manipulation de l'idémpotent à leur extrémité | Les événements peuvent être traités deux fois (au moins une fois) |
| Traitement des restitutions | Politique de remboursement configurée dans le portail Byte | Les demandes de remboursement échoueront la validation |
| Fonction de pointe | Mode de livraison actif; PSP configuré pour une capture séparée | Astuce non disponible pour tous les marchés |
| Précision fiscale | Profil fiscal attribué au marché du portail Byte | Les commandes peuvent afficher une taxe incorrecte ou échouer à la caisse |

---

## Points communs de défaillance pendant le déploiement

### Problèmes de configuration du stockage
Les heures de trading sont mal réglées. État du magasin en temps réel non intégré avec POS. Résultat: les clients essaient de commander à partir de magasins fermés.

### Menu non publié
Version du menu créée dans le menu Byte mais non attribuée/publiée sur le marché du portail Byte. Résultat: les clients ne voient pas de menu.

### Codes promotionnels mal définis
Promos créés sans scoping correct marché/canal/date. Résultat : promos visibles à l'échelle mondiale lorsqu'elles sont destinées à être locales.

### Identification PSP non dans le coffre-fort
Byte Portal configuré mais les secrets PSP ne sont pas placés dans la voûte des secrets. Résultat: les paiements par carte échouent silencieusement.

### Locale/traduction incomplète
Marché lancé avec des clés de traduction incomplètes. Résultat: les clients voient le texte français ou les champs vides.

### Zone de couverture de livraison non configurée
Mode de livraison activé mais pas de zones de couverture définies pour le marché. Résultat: toutes les adresses de livraison rejetées.

### Fidélité non autorisée pour le marché
Loyalty UI visible en Byte Helium mais programme non activé pour le marché du service de fidélité. Résultat : l'inscription échoue.

---

## Où les marchés vont lutter le plus

| Domaine | Niveau de risque | Que faire |
|---|---|---|
| Configuration fiscale | Haut | Travailler avec Finance + Portail fiscal spécialisé avant d'aller-vivre |
| Déroulement de la publication du menu | Haut | Assurez-vous que les équipes du Menu et du Portail Byte sont alignées sur publier → assigner → prévisualiser → publier vers le pipeline de canaux |
| PSP / Configuration du paiement | Haut | Le contrat PSP, les secrets de voûte, les règles de routage et le supplément doivent tous être en place avant les tests de caisse |
| Suivi de la livraison | Moyenne | Décider tôt si le marché aura un suivi en temps réel; affecte l'établissement des attentes des clients |
| Fidélité | Moyenne | La loyauté est une option du marché; doit être coordonnée avec l'équipe Global Loyalty |
| Préparation au contenu de la CMS | Moyenne | A propos des pages, FAQs, documents juridiques doivent être rédigés avant le lancement |
| Configuration du drapeau des caractéristiques | Moyenne | Caractéristiques barrées par des drapeaux; confirmer quels drapeaux sont mis sur le marché et les tester |
| exhaustivité de la traduction | Faible (mais visible) | Exécutez le rapport de couverture de traduction avant UAT; les clés manquantes reviennent à l'anglais |

---

:::tip Utiliser la liste de contrôle
Les[Liste de vérification du lancement du marché](/docs/byte-capabilities/enablement/market-launch-checklist)transforme tout sur cette page en portails en béton go/no-go pour votre lancement.
:::

---
title: Dépannage et escalade
sidebar_position: 2
---

# Dépannage et escalade

Ce jeu couvre les questions les plus courantes que les restaurants et les équipes régionales rencontrent sur la plateforme Atlas, et le chemin d'escalade correct lorsque le libre-service ne résout pas le problème.

---

## Questions et solutions communes

### Restaurant ne figurant pas dans l'application client

| Vérifier | Comment |
|---|---|
| Le restaurant est-il prêt à vivre ? | Portail Byte → Profil → Statut |
| Toutes les chaînes sont-elles désactivées ? | Paramètres du canal — au moins un doit être actif |
| Les coordonnées GPS ont-elles été correctement définies ? | Profil → Emplacement — confirmer le placement de la broche |

Si tous les chèques passent et que le restaurant n'est toujours pas visible après 30 minutes, augmentez votre BMU.

---

### Le client ne peut pas terminer la commande

**Les causes les plus fréquentes:**
1. L'article sélectionné a été désactivé depuis que le client l'a ajouté au panier
2. Un code promo a expiré ou atteint sa limite d'utilisation
3. L'adresse de livraison est à l'extérieur du rayon de livraison du restaurant

**Franchisee action:** Cochez le menu → Éléments pour tout élément récemment désactivé. Cochez Paramètres du canal → Rayon de livraison si les commandes échouent.

---

### Élément de menu indiquant un prix incorrect

1. Vérifier **Menu → Items → [Item] → Prix** pour confirmer le prix en Portail Byte
2. Si le prix du portail Byte est correct mais que l'application apparaît différemment, attendez 15 minutes pour le rafraîchissement du cache
3. Si le problème persiste après 15 minutes, soulevez un billet via le service JIRA

---

### Franchisee verrouillé hors du portail Byte

1. Aller à la page de connexion et utiliser **Mot de passe oublié** — ceci envoie un lien de réinitialisation à leur email enregistré
2. Si le courriel n'est pas reçu dans les 5 minutes, vérifiez les dossiers de spam
3. Si le compte a été désactivé, un administrateur régional doit le rétablir sous Paramètres → Utilisateurs

---

### Commandes non livrées

1. Confirmer que le canal de livraison est **activé** dans les paramètres du canal
2. Vérifiez que les heures d'exploitation comprennent l'heure actuelle du canal de livraison
3. Confirmer que la bascule temporairement fermée est **off**
4. S'il est intégré avec un agrégateur (Uber Eats / DoorDash), vérifiez directement la plate-forme de l'agrégateur — le problème peut être de leur côté

---

## Voie d'escalade

Utilisez ce chemin lorsque le libre-service ne résout pas le problème :

```
Franchisee
    ↓  (cannot resolve in 15 mins)
Regional / BMU Admin
    ↓  (cannot resolve in 30 mins)
Atlas Platform Support (JIRA Service Desk)
    ↓  (P1 / production down)
Yum! Brands Tech — Emergency Line
```

### Niveaux de gravité

| Niveau | Définition | Réponse cible |
|---|---|---|
| **P1** | Restaurant totalement incapable de prendre des commandes | 30 minutes |
| **P2** | Un canal en bas, d'autres travaillant | 2 heures |
| **P3** | Numéro de caractéristique unique, solution de rechange disponible | Jour ouvrable suivant |
| **P4** | Question ou requête de configuration | 3 jours ouvrables |

### JIRA Service Desk

Élever les billets à :`support.atlas.yum.com`

Inclure dans chaque billet :
- Identification du restaurant
- Marché
- Description de l'émission
- Mesures déjà prises
- Capture d'écran ou enregistrement d'écran si possible

:::tip
Les questions P1 peuvent également être soulevées via le canal **Slack d'urgence** —`#atlas-p1-support`Marque`@atlas-oncall`pour pager directement l'ingénieur de garde.
:::

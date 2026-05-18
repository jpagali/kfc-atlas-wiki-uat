---
title: Qualité
sidebar_position: 5
---

# Qualité

**Feature area:** [Enquêtes auprès des clients](./)

Qualtrics est utilisé comme plate-forme d'enquête pour **KFC Écoutes** sondages d'engagement client style. Il s'occupe de la livraison des sondages, de la logique de branchement, de la saisie des réponses et de l'établissement de rapports utilisés par les équipes d'expérience client et d'opérations sur le marché.

## Ce que la qualité gère

Au sein de l'écosystème Atlas, Qualtrics soutient généralement :

- Formulaires d'enquête présentés au moyen de liens Web ou de codes QR
- Questions d'enquête conditionnelles basées sur le canal, le marché ou le type de réponse
- Mesures de satisfaction telles que CSAT, NPS et codes de raison
- Exportations de réponses et tableaux de bord pour les rapports CX
- Alertes pour les réponses faibles qui pourraient nécessiter un suivi

## Typique KFC écoute le flux

```text
1. Customer completes an order or visit
2. KFC shares a survey invitation (receipt, email, push, or QR code)
3. Customer opens the Qualtrics survey
4. Qualtrics collects ratings, comments, and store experience details
5. Market teams review dashboards and act on service-recovery cases
```

## Données communes saisies

| Point de données | Exemple |
|---|---|
| Référence de visite ou de commande | Numéro de commande, identification du magasin, date de visite |
| Chaîne | Dîner, Takeaway, Livraison, App, Web |
| Satisfaction | Classement général de la visite ou de la commande |
| Catégorie | Qualité alimentaire, articles manquants, vitesse, service au personnel |
| Retour d'information en texte libre | Commentaires des clients dans leurs propres mots |

## Considérations opérationnelles

### Déclenchement de l'enquête
Les marchés choisissent quand inviter les clients. Les modèles courants comprennent immédiatement après la caisse, après l'exécution, ou à partir de liens de réception imprimés utilisés en magasin.

### Mesures incitatives
Certains programmes comportent une incitation, par exemple un code de validation ou une offre après la fin de l'enquête. Les règles d'incitation sont gérées au niveau du marché et peuvent nécessiter une coordination avec les promotions ou les équipes CRM.

### Escalades
Les réponses à faible indice peuvent être acheminées vers le support client ou les workflows de révision CX. Les marchés devraient définir:

- Quel seuil de score crée une alerte
- Quelle équipe possède le suivi
- La rapidité avec laquelle les clients doivent être contactés

## Notes d'intégration

La qualité est adjacente à Atlas plutôt qu'à une dépendance de flux de commande centrale. L'expérience de l'enquête peut faire référence aux données de commande d'Atlas, mais la plateforme d'enquête elle-même est gérée séparément de l'application principale de commande du client.

:::tip
Lorsque vous lancez ou modifiez un programme KFC Listens, alignez le libellé de l'enquête, le calendrier de déclenchement et l'ALS de récupération de service avant de partir en direct. Une enquête bien planifiée, dont la propriété n'est pas claire, crée généralement un bruit opérationnel plutôt qu'un éclairage utile.
:::

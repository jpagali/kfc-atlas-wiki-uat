---
title: MarTech
sidebar_position: 4
---

# MarTech

## Ce qu'il fait

La fonction MarTech est la pile technologique de marketing de la plateforme Atlas, l'ensemble d'intégrations qui collectent, orientent et agissent sur les données de comportement des clients sur tous les points de contact de l'expérience KFC.

Il relie trois systèmes :

- **Tracking des événements** — capture ce que les clients font dans l'application et sur le web
- **mParticle** — agit comme plate-forme de données client (CDP), reçoit tous les événements et les achemine vers les outils en aval
- **Braze** — la plateforme d'engagement client, utilisée pour les notifications push, les messages en application et l'automatisation du marketing

Ensemble, ils permettent aux marchés de la KFC de mener des campagnes personnalisées, axées sur les données, sans participation technique pour chacun.

## Comment les données circulent

```
Customer Action (app / web)
        ↓
  Event Tracking Layer
  (structured event fired)
        ↓
     mParticle
  (data collected + routed)
        ↓
      Braze
  (campaigns, push, in-app)
```

## Composantes

### Suivi des événements
Chaque action client significative dans Atlas – visionner un produit, ajouter au panier, compléter une commande, taper une promo – déclenche un événement structuré. Ces événements suivent un schéma cohérent pour que les données soient comparables entre les marchés.

### mParticule
mParticle est le centre central. Il reçoit tous les événements d'Atlas, les normalise et les enrichit, et transmet les données pertinentes à des outils comme Braze, plateformes analytiques et toute autre destination configurée.

### Braze
Braze reçoit des profils clients et des données d'événements de mParticle et les utilise pour alimenter:

- Notifications push (mises à jour des commandes, promotions, réengagement)
- Messages dans l'application (bandes personnalisées, invites à bord)
- Automatisation du marketing (campagnes déclenchées basées sur le comportement des clients)

## Plateformes

| Plateforme | Appui |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Site Web | ✅ |

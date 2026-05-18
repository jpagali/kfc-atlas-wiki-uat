---
title: Engagement & Messagerie
description: Comment la plate-forme Atlas livre des messages in-app et gère les préférences de notification push.
sidebar_label: Engagement & Messagerie
---

# Engagement & Messagerie

**What it does:** Fournit des messages dans l'application et gère les préférences de notification push, reliant les campagnes CRM à l'expérience du client dans l'application.

**Why it matters:** Les messages dans l'application et les notifications push sont le principal canal de rétention entre les commandes. La mauvaise gestion des préférences érode la confiance et provoque des refus.

---

## Tableau des caractéristiques

| Fonctionnalité | Problème | Ce qu'il fait | Comment ça marche | Dépendances | Préalables | Limitations | Statistiques impactées |
|---|---|---|---|---|---|---|---|
| ** Boîte de réception des messages dans l'application** | Brand veut communiquer avec les clients dans l'application | Affiche des messages personnalisés, des promotions et des mises à jour dans un flux | Plateforme d'engagement fournit un flux de messages paginés; les messages peuvent être en lien profond avec les sections d'application | Plateforme d'engagement, CRM | Signé pour personnalisé; anonyme pour mondial | fraicheur des aliments ≤60s; des cibles de liaison profonde doivent exister et être actives | Boîte de réception taux ouvert, taux de clic de message, conversion de lien profond |
| **Préférences pour la notification de poussée** | Contrôle des notifications reçues par le client | Permet au client de basculer les notifications push sur ou hors du canal | Push prefs read/write to CRM; jeton de périphérique synchronisé sur le changement | CRM / Fournisseur de Push, Jeton de périphérique Push | Signé; permission de pousser accordée | Portée au niveau de l'appareil et de l'utilisateur; les changements nécessitent une synchronisation CRM | Push opt-in taux, opt-out taux |
| **Préférences de marketing par courriel** | Contrôles clients email marketing | S'abonner ou se désabonner du marketing par courriel | API CRM Prefs mise à jour; piste de vérification enregistrée | CRM | Signé | piste de vérification obligatoire; synchronisation du CMP si le consentement est lié | Email opt-in taux |

---

## Sources techniques

<details>
<summary>📎 Technical Source: In-App Inbox / Push Preferences</summary>

- **FRD References:** [FRD-HEL-051](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-051), [FRD-HEL-065](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-065), [FRD-HEL-066](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-066)
- **TRD Domain:** Engagement & Messaging
- **Key Interfaces / APIs:** In-App Feed (paginated), Message Acknowledge, Push Prefs Get/Update
- **Data Contracts:** InAppMessage (id, title, body, deeplink, expiry); PushPrefs (enabled, ts, source)
- **Source Summary:**
  - In-app feed freshness target: ≤60s (real-time or near-real-time)
  - Preference audit trail required (CRM compliance)
  - Stale feed (TTL exceeded): pull-to-refresh triggered
  - Push token synced on preference update
  - Engagement APIs: additive changes, 120-day deprecation

</details>

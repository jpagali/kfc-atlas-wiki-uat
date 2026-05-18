---
title: Engagement und Messaging
description: Wie die Atlas-Plattform In-App-Nachrichten liefert und Push-Benachrichtigungseinstellungen verwaltet.
sidebar_label: Engagement und Messaging
---

# Engagement und Messaging

**What it does:** Liefert In-App-Nachrichten und verwaltet Push-Benachrichtigungseinstellungen, verbindet CRM-Kampagnen mit dem In-App-Erlebnis des Kunden.

**Why it matters:** In-App-Messaging und Push-Benachrichtigungen sind der primäre Retentionskanal zwischen Bestellungen. Schlechte Präferenzmanagement erodiert Vertrauen und verursacht Opt-outs.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **In-App Nachrichteneingang** | Brand will mit Kunden innerhalb der App kommunizieren | Zeigt personalisierte Nachrichten, Promotionen und Updates in einem Feed | Engagement-Plattform bietet paginierten Nachrichtenfeed; Nachrichten können Deep-Link zu App-Abschnitten | Engagement-Plattform, CRM | Eingeschrieben für personalisiert; anonym für global | Fütterung ≤ 60s; Tiefpunktziele müssen vorhanden sein und aktiv sein | Posteingang offene Rate, Nachricht Klickrate, tiefe Link Umwandlung |
| **Push Notification Preferences* | Kunden kontrollieren, welche Benachrichtigungen sie erhalten | Lassen Sie Kunden Push-Benachrichtigungen auf oder ab per Kanal | Push prefs gelesen / geschrieben zu CRM; Gerät Token synchronisiert auf Änderung | CRM / Push-Provider, Push-Gerät Token | Eingeschrieben; Push-Berechtigung erteilt | Geräteebene und Benutzerebene; Änderungen erfordern CRM-Sync | Push Opt-in-Rate, Opt-out-Rate |
| **Email Marketingeinstellungen* | Kunden steuern E-Mail Marketing | Abonnieren oder Abonnieren von E-Mail Marketing | CRM Prefs API aktualisiert; Audit Trail aufgezeichnet | CRM | Eingetragen in | Prüfungspfad obligatorisch; CMP-Sync, wenn einwilligungsgebunden | E-Mail Opt-in-Rate |

---

## Technische Quellen

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

---
title: Promotionen & Loyalität
description: Wie die Atlas-Plattform personalisierte Angebote bietet, Belohnungen verwaltet, Herausforderungen verfolgt und Kundenbindungskonten mit Aufträgen verbindet.
sidebar_label: Promotionen & Loyalität
---

# Promotionen & Loyalität

**What it does:** Oberflächen personalisierte Angebote, verwaltet Belohnungen, verfolgt Herausforderungen und verbindet das Treuekonto des Kunden mit seinen Bestellungen.

**Why it matters:** Loyalität und Promos sind wichtige Umsatz- und Rückhaltehebel. Jedes falsche Angebot oder gescheiterte Erlösung erodiert Vertrauen. Diese Domain erstreckt sich über die volle Customer Journey – von der Entdeckung bis zur Fertigstellung der Bestellung.

:::caution Förderfähigkeit ist immer serverseitig
Byte Helium berechnet niemals Promo- oder Belohnungsförderung vor Ort. Alle Förderfähigkeitsbewertungen erfolgen in der Promo Engine auf dem Server. Wenn ein Angebot erscheint, aber bei der Erlösung scheitert, ist der Fix in der Promo-Konfiguration in Byte Portal - nicht in Byte Helium.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| ** Lokale Angebote anzeigen** | Kunden müssen herausfinden, welche Angebote verfügbar sind | Zeigt personalisierte Angebote für den Markt und das Konto des Kunden | Byte Helium fetches bieten Feed von Promo Engine mit Markt + Benutzerkontext; personalisiert, wenn in | Promo Motor, Loyalität Service | Lokalisierung komplett | Unauthenticated Users sehen nicht personalisierte Angebote; bietet Futtermittel p95 ≤200m | Angebote Seite Besuche, Angebot Klickrate |
| **Verbrauch an Bord* | Neue Kunden wissen nicht über das Belohnungsprogramm | Einführung des Treueprogramms und der Aufforderung zur Einschreibung | In-App-Flow führt Kunden zur Teilnahme; verbunden mit Kontoerstellung oder Post-Bestellung | Loyalitätsservice | Kunden unterzeichnet in | Das Loyalitätsprogramm muss für den Markt aktiviert werden | Einschreibungsquote |
| **Sign Up for Loyalty & Rewards** | Der Kunde will sich dem Belohnungsprogramm anschließen | Registriert Kunden im Treueprogramm des Marktes | Einschreibung Anruf bei Loyalität Service; Punkte Balance initialisiert | Loyalitätsservice | Kunden unterzeichnet in | Nicht ohne Konto beitreten; Programmregeln variieren nach Markt | Loyalität Mitgliedsquote |
| **Ansichtspunkte Balance** | Loyalty-Mitglied will wissen, wie viele Punkte sie haben | Zeigt die aktuelle Punktebilanz des Kunden an | Loyalität Service liefert Punkte Balance mit Ablaufterminen | Loyalitätsservice | Kunden angemeldet und eingeschrieben | Punktegenauigkeit hängt von Loyalty Service sync ab | Punkte Engagementrate |
| ** Alle Rewards anzeigen** | Loyalty-Mitglied will verfügbare Belohnungen durchsuchen | listet alle Belohnungen im Katalog mit erforderlichen Punkten Kosten | Rewards-Feed von Loyalty Service | Loyalitätsservice | In Loyalität eingeschrieben | Wiederverfügbarkeit marktspezifisch; Kosten in Punkten variiert | Startseite Ansichten |
| **Redeem a Reward** | Kunde möchte verdiente Punkte nutzen | Konvertiert Punkte in eine Belohnung, die in den Warenkorb angewendet wird | Rücknahmeruf (idempotent); Token angewendet in den Warenkorb | Loyalität Service, Cart Service | Punkte ausreichend; Warenkorb aktiv | Doppelrücknahme verhindert (409); Belohnung kann ablaufen | Rückzahlungsquote |
| **Ansicht und vollständige Herausforderungen** | Gamification Laufwerke wiederholen Besuche | Zeigt Herausforderungen, die Kunden für Bonuspunkte/Rewards komplettieren können | Challenge-Feed von Loyalty/Gamification Service; Fertigstellung verfolgt | Loyalität/Gaming Service | In Loyalität eingeschrieben | Markt muss Herausforderungen konfiguriert haben | Teilnahmequote |
| **Receive Rewards on Birthday / Sign-Up** | Ausgelöste Treueereignisse treiben Engagement | Belohnung automatisch zu Sonderterminen | Loyalitätsservice löst Zuschussereignisse aus; Kunde notifiziert | Loyalität Service, Engagement-Plattform | Eingeschrieben; DOB erfasst (zum Geburtstag) | Erfordert korrekte Profildaten; Markt-Konfiig-Kontrollen, die Trigger aktiv sind | Reward Grant Rate, Post-Grant Auftragssatz |
| **Ansicht und Verwaltung von Kommunikationseinstellungen** | Kunden kontrollieren ihre Marketingpräferenzen | Lassen Sie Kunden sich in / aus E-Mail, Push, SMS Marketing | CRM Prefs API lesen/schreiben; Audit Trail gepflegt; synchron zu CMP | CRM, CMP, Push Provider | Eingetragen in | Marktspezifische Kanäle; Prüfpfad für die Einhaltung erforderlich | Opt-in-Rate pro Kanal |
| **In-App Nachrichten (Inbox)* | Marke muss Kunden in-app erreichen | Zeigt einen Feed von personalisierten In-App-Nachrichten von CRM-Kampagnen | Engagement-Plattform bietet Nachrichten-Feed; Nachrichten paginiert; tiefe Links unterstützt | Einsatzplattform | Unterzeichnet in (persönlich) oder anonym (global) | Meldungsneuheit ≤60s; tiefe Verbindungsziele müssen aktiv sein | Posteingang Öffnungsrate, Nachricht Klickrate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Offers Feed / Reward Redemption</summary>

- **FRD References:** [FRD-HEL-019](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-019), [FRD-HEL-020](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-020), [FRD-HEL-021](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-021), [FRD-HEL-026](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-026), [FRD-HEL-031](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-031), [FRD-HEL-032](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-032), [FRD-HEL-033](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-033), [FRD-HEL-034](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-034), [FRD-HEL-035](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-035), [FRD-HEL-036](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-036), [FRD-HEL-037](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-037), [FRD-HEL-038](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-038), [FRD-HEL-039](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-039), [FRD-HEL-040](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-040), [FRD-HEL-041](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-041), [FRD-HEL-042](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-042), [FRD-HEL-043](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-043), [FRD-HEL-044](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-044)
- **TRD Domain:** Promotions & Loyalty
- **Key Interfaces / APIs:** Offers Feed (personalised), Validate/Apply Promo, Rewards Feed/Detail, Redeem Reward, Challenges Feed/Complete, Comms Prefs Get/Update
- **Data Contracts:** Offer (id, title, eligibility, value); Reward (id, cost, expiry); Prefs (channel, status, timestamp)
- **Source Summary:**
  - Eligibility always server-side — Byte Helium never computes eligibility locally
  - Offers feed p95: ≤200ms; reward redemption p99: ≥99.8%
  - Idempotency on redemption (409 returns original token — no double-spend)
  - Expired offer (410): hidden and user notified
  - Promo/Loyalty APIs: additive changes only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers find deals and rewards in the front-end → [Find Deals and Rewards](/docs/frontend/customer-journey/find-deals-and-rewards/)
- Creating and managing promotions in Byte Portal → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Store Groups](/docs/admin-portal-guide/store-groups/)
- Step-by-step promotion guides → [Playbooks: Promotions Setup Guide](/docs/playbooks/promotions-setup-guide) and [Promotion Recipes](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo)
:::

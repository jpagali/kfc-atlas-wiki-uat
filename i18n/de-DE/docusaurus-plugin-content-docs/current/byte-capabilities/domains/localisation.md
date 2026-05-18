---
title: Lokalisierung und Bestellmodus
description: Wie die Plattform den Markt des Kunden erkennt, ihre Sprache festlegt und sie die Lieferung oder Sammlung wählen lässt.
sidebar_label: Lokalisierung und Bestellmodus
---

# Lokalisierung und Bestellmodus

**What it does:** Erkennt den Markt und die Sprache des Kunden, lässt sie wählen, wie sie bestellen möchten (Lieferung oder Sammlung), und wählt ihre Speicher- oder Lieferadresse aus.

**Why it matters:** Jede spätere Erfahrung — Menü, Preisgestaltung, Werbeaktionen, Checkout — hängt davon ab, ob der Marktkontext erst richtig etabliert ist. Das Unrecht bedeutet, dass Kunden das falsche Menü, falsche Preise sehen oder gar nicht auschecken können.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Startlokalisierung** | Kunden müssen auf den richtigen Markt abgestimmt werden | Erkennt den Markt des Kunden über Geo-IP oder explizite Auswahl; setzt Locale | App ruft Config service → erhält verfügbare Märkte; Geo-Service löst Standort → Markt bestätigt | Geoservice, Config Service, Kontextservice | Markt muss in Byte Portal konfiguriert werden | Kontext-Fetch muss ≤150m p95 sein; Markt-Erkennung kann scheitern, wenn Geo blockiert | Lokalisierungserfolgsrate, Abwärtsrate |
| ** Bestellmodus für Bestellungen** | Der Kunde möchte von einem Geschäft abholen | Lassen Sie Kunden suchen und wählen Sie einen KFC-Shop für die Sammlung | Kunden wählt speichern → speichern ID im Sitzungskontext gespeichert | Speicherortung, Kontextservice | Store muss aktiv und offen sein | Kann nicht von geschlossenen oder begrenzten Geschäften sammeln | Auftragssatz |
| ** Bestellmodus einstellen** | Kunden wollen Lebensmittel geliefert | Lassen Sie den Kunden eine Lieferadresse eingeben und die Berichterstattung validieren | Kunden geben Adresse → Deckungscheck → Lieferzone bestätigt | Geoservice, Coverage Service, Kontextservice | Store mit Lieferabdeckung muss verfügbar sein | Kein Rückfall, wenn keine Geschäfte Adresse abdecken; Deckung variiert nach Markt | Lieferauftragsrate, Deckungssatz |
| ** Einen KFC (Store Locator)* | Kunden wollen ihr nächstes Restaurant finden | Zeigt eine Karte/Liste der KFC-Shops mit Stunden, Entfernung und Features | Calls Store Locator mit Kundenstandort; gibt Speicherliste mit Status und Stunden zurück | Store Locator, Kartenanbieter, Speicherdaten | GPS/Standortberechtigung oder manueller Adresseintrag | Handelszeiten im Byte Portal verwaltet; Echtzeit-Zustand (offen/geschlossen) muss genau sein | Speicherortung |
| **Ansicht & Bearbeiten gespeicherte Adressen** | Registrierte Kunden möchten Lieferadressen wiederverwenden | Zeigt gespeicherte Adressen an und lässt Kunden sie bearbeiten oder löschen | Fetches Adressenliste vom Adressservice; Updates zurück geschrieben | Anschrift | Kunden müssen in | Nicht verfügbar für Gastnutzer | Adresse Sparrate, Checkout Geschwindigkeit |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Start Localisation</summary>

- **FRD References:** [FRD-HEL-005](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-005), [FRD-HEL-082](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-082)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Locale Config, Geo Resolve Market, Set Fulfilment Mode
- **Data Contracts:** Context (market, language, mode, storeId — signed context IDs)
- **Source Summary:**
  - Context persisted per user/device; signed for integrity
  - p95 fetch target: ≤150ms
  - Fallback: if coverage unavailable (5xx), offer collection mode with error telemetry
  - Context API: backward compatible minor, 90-day deprecation
  - Market config owned by Byte Portal / Shared Catalogues

</details>

<details>
<summary>📎 Technical Source: Set Order Mode — Delivery</summary>

- **FRD References:** [FRD-HEL-007](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-007)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Set Fulfilment Mode, Coverage Check, Address Validate
- **Data Contracts:** Context (mode=delivery, storeId, coverageZoneId)
- **Source Summary:**
  - Coverage check runs before mode is confirmed
  - Failure (no coverage): user offered collection mode instead
  - Context signed and persisted across session
  - Delivery tracking availability is market-dependent (optional)
  - Trading hours from Byte Portal Stores module must be accurate

</details>

---

:::tip See it in the wiki
- Customer-facing store locator and order mode flows → [Find a Store](/docs/frontend/customer-journey/find-a-store/) and [Setup Order](/docs/frontend/customer-journey/setup-order/)
- Configuring store hours and coverage in Byte Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
:::

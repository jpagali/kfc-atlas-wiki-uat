---
title: Spenden & Tipps
description: Wie die Atlas-Plattform Kunden während des Checkouts eine Spendenspende oder eine Liefertreiberspitze hinzufügen lässt.
sidebar_label: Spenden & Tipps
---

# Spenden & Tipps

**What it does:** Ermöglicht Kunden, während des Checkouts eine Spendenspende (Add Hope) oder einen Tipp für ihren Liefertreiber hinzuzufügen.

**Why it matters:** Add Hope ist ein weltweit bedeutendes KFC CSR-Programm. Tipps verbessern Fahrerzufriedenheit und Lieferqualität Wahrnehmung. Beide erfordern eine sorgfältige Zahlungsabwicklung und per Markteinführung.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Add-Hope Spenden** | Kunden wollen eine Sache beim Checkout spenden | Lassen Sie Kunden eine Spende zu ihrer Bestellung insgesamt hinzufügen | Spendendienst bietet Optionen zur Ursache; Kunde wählt Betrag oder Rundung aus; Spendelinie zur Bestellung hinzugefügt | Spendenservice, PSP | Aktiver Checkout; Add-Hope aktiviert für den Markt | Markt muss Add-Hope aktivieren; wenn Spendeservice ausfällt (5xx), Spende übersprungen und Auftrag markiert | Spendenaufsatz, durchschnittliche Spendewert |
| **Add Delivery Driver Tip** | Kunden wollen ihren Fahrer tippen | Lassen Sie Kunden einen Tippbetrag zu ihrem Lieferauftrag hinzufügen | Tip-Service legt Spitze auf Bestellung an; kann separate PSP-Erfassung sein | Tip Service, PSP | Liefermodus aktiv; Checkout im Fortschritt | Tipps nur für Lieferaufträge verfügbar; Tipp kann eine separate Zahlungserfassung sein | Tip-Ansatzrate, mittlerer Spitzenwert |
| **Übersicht über Hoffnung hinzufügen* | Der Kunde will wissen, was sie spenden | Renders the Add-Hope information page | CMS-Seite abgeholt und gesendert | CMS-Service, Donation config | Keine | Inhalt in CMS verwaltet — nicht Byte Helium | Seitenverlobung, Spendenkonversion |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Add-Hope Donation / Driver Tip</summary>

- **FRD References:** [FRD-HEL-022](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-022), [FRD-HEL-023](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-023), [FRD-HEL-073](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-073)
- **TRD Domain:** Donations & Tips
- **Key Interfaces / APIs:** Donation Config/Collect, Add Tip (Bearer auth)
- **Data Contracts:** DonationLine (amount, causeId); TipTender (amount, method)
- **Source Summary:**
  - Add-Hope market-enabled via Byte Portal configuration
  - Donation service failure (5xx): donation skipped, order tagged for reporting
  - Tip may be a separate PSP capture (market and PSP dependent)
  - Reporting fields required for compliance (donation amounts tracked)
  - APIs: additive changes only, 90-day deprecation

</details>

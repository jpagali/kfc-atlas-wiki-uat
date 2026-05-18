---
title: Zahlungen & Angebote
description: Wie die Atlas-Plattform Kartenzahlungen, Gutscheine, Split-Tender und Geschenkkarten auf PCI-konforme Weise behandelt.
sidebar_label: Zahlungen & Angebote
---

# Zahlungen & Angebote

**What it does:** Zeigt, wie Kunden zahlen — Karten, Gutscheine, geteilte Angebote und Geschenkkarten — auf PCI-konforme und betrügerische Weise.

**Why it matters:** Die Zahlung ist die endgültige Barriere für Einnahmen. Versäumte Zahlungen oder schlechte Zahlung UX direkt reduzieren Bestellung Fertigstellung. Diese Domain ist auch die höchste Sicherheitsempfindlichkeit der Plattform.

:::caution Byte Helium übernimmt keine Kartendaten
Das PSP SDK erfasst Kartendetails direkt – keine PAN (Kartennummer) durchläuft jemals Byte Helium oder wird in Atlas gespeichert. Byte Helium behandelt nur Token. Jede Zahlungskonfiguration (PSP-Anmeldeinformationen, Routing-Regeln, Zuschlagsrichtlinien) lebt in Byte Portal und dem PSP-Standard.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Pay mit Karte** | Der Kunde will eine Debit- oder Kreditkarte verwenden | Tokenises die Karte und verarbeitet die Zahlung über den PSP | PSP SDK behandelt Kartenerfassung (keine PAN in Byte Helium); Token an Checkout Orchestrator gesendet; 3DS-Authentifizierung bei Bedarf | PSP / Vault, Checkout Orchestrator | Gültige Check-Sitzung | 3DS kann Reibung hinzufügen; Ausfall → Wiederholen oder Schalter Ausschreibung | Zahlungserfolgsrate |
| **Pay mit gespeicherter Karte** | Der Kunde will eine gespeicherte Karte wiederverwenden | Listen gespeicherte Karten; Kunde wählt eine für die Zahlung | Gespeicherte Kartentoken von PSP Vault abgerufen; ausgewählte Token, die in Zahlungsabsicht verwendet werden | PSP / Vault | Kunden angemeldet; Karte zuvor gespeichert | Karte darf nicht abgelaufen sein; Tresor von PSP verwaltet (nicht Byte Helium) | Gespeicherte Kartennutzungsrate |
| **Reservierte Karte** | Der Kunde will eine gespeicherte Karte entfernen | Entfernt die Karte von den gespeicherten Zahlungsmethoden des Kunden | Anruf löschen bei PSP Vault via Byte Helium | PSP / Vault | Kunden unterzeichnet in | Cannot undo Löschung | Vault Management Aktivität |
| **Pay mit Gutschein** | Kunden haben einen digitalen Gutschein | Gibt einen Gutscheincode als Voll- oder Teilzahlung an | Gutschein mit Voucher-Service validiert; Wert als Ausschreibung beigefügt | Gutscheinservice, Checkout Orchestrator | gültiger Gutscheincode; nicht abgelaufen oder eingelöst | Gutscheinregeln variieren nach Markt; serverseitige Validierung; doppelseitig verhindert (409) | Erstattungssatz für Gutscheine |
| **Split Ausschreibung (Karte + Gutschein)** | Gutschein deckt einen Teil der Rechnung ab | Der Kunde zahlt den Rest mit einer Karte nach dem Auftragen eines Gutscheins | Gutschein beantragt zuerst; Restbetrag über Kartenzahlung Absicht | Gutscheinservice, PSP, Checkout Orchestrator | Gültig Gutschein; aktive Check-out-Sitzung | Ausschreibung von Orchestrator | Zinssatz |
| **Buy a Voucher** | Kunde möchte einen digitalen Gutschein (Geschenk) kaufen | Der Kunde kauft einen Gutschein per Karte | Zahlung per PSP; Gutschein generiert und per E-Mail/SMS geliefert | Gutscheinservice, PSP | Aktive Zahlungsmethode | Gutschein-Kaufstrom ist marktfähig; getrennt von der Bestell-Checkout | Voucher Verkaufsvolumen |
| **Resend Geschenkkarte Details* | Kunden verloren ihre Geschenkkarte E-Mail | Re-sends Geschenkkarte Lieferung an Kunden registrierten Kontakt | Befristete Resend-Anrufe an Gift Card Service; über konfigurierten Kanal geliefert | Geschenkkartenservice, Messaging | Kunden unterzeichnet in; Geschenkkarte gekauft | Begrenzt pro Karte ID, um Missbrauch zu verhindern | Änderungssatz |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Pay with Card / Split Tender</summary>

- **FRD References:** [FRD-HEL-016](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-016), [FRD-HEL-017](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-017), [FRD-HEL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-018)
- **TRD Domain:** Payments & Tenders
- **Key Interfaces / APIs:** Card Tokenise/Pay (PSP SDK), Voucher Apply/Redeem, Submit Payment Intent (Orchestrator)
- **Data Contracts:** PaymentIntent (amount, currency, tenders[]); TenderCard (token, scheme, 3dsStatus — no PAN in logs)
- **Source Summary:**
  - PCI-DSS compliant: SDK handles card capture; no PAN stored in Byte Helium or logs
  - 3DS supported; 3DS outcome tracked via telemetry
  - Auth capture success target: ≥99.5%
  - Voucher double-spend prevented via idempotency (409 returns original token)
  - Payment APIs: additive only, 180-day deprecation window (longest in platform — schema mandates apply)

</details>

---
title: Check-out
description: Wie die Atlas-Plattform Kunden vom Warenkorb bis zur Bestellung leitet – Sammeln von Lieferdaten, Validierung alles und Einreichung der Bestellabsicht.
sidebar_label: Check-out
---

# Check-out

**What it does:** Führen Sie den Kunden vom Warenkorb bis zur Bestellung – Sammeln von Lieferdaten, Validierung alles und Einreichung der Bestellabsicht.

**Why it matters:** Checkout ist der höchste Schritt. Jeder Fehler hier bedeutet einen verlorenen Verkauf. Checkout muss die Gästebenutzer, die Lieferung vs. Sammlungsunterschiede behandeln, und sind widerstandsfähig gegen Vorlage Fehler.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Guest Checkout** | Nicht jeder Kunde will ein Konto erstellen | Kunden können eine Bestellung ohne Anmeldung angeben | Sitzungsbasierter Checkout: OTP E-Mail oder anonyme Sitzung verwendet; Warenkorb an Sitzung gebunden | Checkout Orchestrator, Adressservice | Gültig Warenkorb mit Artikeln | Keine Bestellhistorie oder Loyalität für Gästesitzungen; Adressen nicht gespeichert | Umrechnungskurs der Gäste |
| **Checkout — Lieferung** | Kunden wollen Lebensmittel an ihre Adresse geliefert | Sammelt Lieferadresse, zeigt Gebühren, reicht Bestellung | Adresse validiert → Liefergebühren angegeben → Bestellung mit Lieferinformationen eingereicht | Checkout Orchestrator, Adressservice, Geoservice | Liefermodus Set; Speicher mit Lieferabdeckung aktiv | Adresse muss innerhalb der Deckungszone liegen; Gebühren sind rückendkalkuliert (nicht Byte Helium-Besitz) | Lieferschein |
| **Checkout — Sammlung* | Kundenabholung im Geschäft | Vereinfachte Kasse mit Speicherauswahl und Abholzeit | Store bestätigt → keine Adresse erforderlich → Bestellung eingereicht | Check-out Orchestrator | Sammlungsmodus eingestellt; Store offen | Der Store muss in offenem Zustand sein; die Drosselpolitik kann Aufträge begrenzen | Erhebungsüberprüfung |
| ** Liefervarianten** | Verschiedene Märkte/Szenarien haben unterschiedliche Kassenströme | Unterstützt marktspezifische Checkout Schrittkonfigurationen | Orchestrator verwaltet verschiedene Checkout-Sitzungen; Schritte variieren je nach Kontext | Check-out Orchestrator | Marktvariante konfiguriert | Varianten müssen vom Marktteam konfiguriert werden — nicht Selbstbedienung von Byte Helium | Checkout Fertigstellungsrate nach Variante |
| **Bestellung wieder** | Kunde möchte eine vorherige Bestellung wiederholen | Repopuliert den Warenkorb mit Gegenständen aus der Vergangenheit | Vorheriger Bestell-Detail fetched → Artikel zurück in den Warenkorb → Kasse wieder aufgenommen | Bestellungen Service, Cart Service | Der Kunde muss unterschrieben werden; vorherige Bestellungen müssen vorhanden sein | Artikel, die im aktuellen Menü nicht verfügbar sind, werden mit einer Warnung ausgeschlossen | Reordrate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Guest Checkout / Delivery Checkout</summary>

- **FRD References:** [FRD-HEL-012](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-012), [FRD-HEL-013](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-013), [FRD-HEL-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-014), [FRD-HEL-015](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-015)
- **TRD Domain:** Checkout (Core)
- **Key Interfaces / APIs:** Start/Resume Checkout, Address Create/Validate, Fees & Taxes Quote, Submit Order
- **Data Contracts:** CheckoutSession (id, cartRef, mode, steps); OrderIntent (totals, tenders, deliveryInfo — with idempotency keys)
- **Source Summary:**
  - Checkout submission p99: ≥99.5% success
  - Idempotency keys prevent duplicate orders on resubmit (409 replay returns original orderRef)
  - Fees and taxes calculated by backend — Byte Helium displays only
  - Orchestrator APIs: additive changes only, 120-day deprecation
  - Correlation IDs tracked for all submission events

</details>

---

:::tip See it in the wiki
- How customers experience checkout in the front-end → [Order and Get: Checkout](/docs/frontend/customer-journey/order-and-get/checkout)
:::

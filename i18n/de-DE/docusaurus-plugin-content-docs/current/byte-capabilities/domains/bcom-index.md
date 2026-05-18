---
title: Byte Commerce Backend Fähigkeiten
description: Alle Funktionen im Besitz des Byte Commerce Backend — der Auftragsverarbeitungsmaschine der KFC Atlas-Plattform.
sidebar_label: Überblick
---

# Byte Commerce Backend Fähigkeiten

**Byte Commerce Backend** ist der Motor hinter jeder Transaktion auf der Atlas-Plattform. Es ist für Kunden unsichtbar, aber orchestriert alles zwischen dem Frontend- und In-store-Systeme — Cart Management, Preisgestaltung, Steuerberechnung, Zahlungsabwicklung, Bestellzustand, POS-Injektion und Aggregatorauftrag Ingestion.

:::note Byte POS Caveat
Byte Commerce spricht direkt mit **Byte POS**. Wenn ein Markt nicht mit Byte POS verwendet wird, muss **Byte Connect** im Byte Commerce Onboarding Bündel enthalten sein, damit Byte Commerce den Markt POS über den Pfad erreichen kann **Byte Commerce -> Byte Connect -> POS***.
:::

Jede Bestellung durch Byte Helium platziert wird von Commerce Backend verarbeitet. Jeder Preis, den der Kunde sieht, wurde von Commerce Backend berechnet. Jede Zahlung wurde von Commerce Backends Zahlungsorchester genehmigt.

---

## Was Commerce Backend Eigentümer

| Gebiet | Was es tut |
|---|---|
| **Order & Cart Lifecycle** | Cart Kreation, Wartung, Preisgestaltung, Auftragszustand Maschine |
| **Menu Verbrauch, Preise und Steuern** | Menüverfügbarkeit, dynamische Preisgestaltung, Steuerberechnung, Promo-Anwendung |
| **Zahlungen und Erstattungen** | Zahlung Auth, Erfassung, Rückerstattung Verarbeitung, PSP Integration |
| **Customer Accounts & Auth* | Identität über OIDC/OAuth2; Kundenprofil |
| **Präferenzen & Loyalitätsverknüpfung** | Favoriten, Loyalitäts-Account Linking, Zustimmung Tracking |
| **POS / KDS Integration* | Bestellen Sie die Injektion in Instore-Systeme; Statussynchronisation, mit Byte Connect, wenn der Markt POS ist nicht Byte POS |
| **Aggregator Integration (Byte Connect)* | Normalisierte Aufnahme von Uber Eats, DoorDash und anderen Aggregatoren |
| **Datenmigration** | Abwandern von alten Kunden und Bestellhistorie |
| ** Reservierung** | Protokollierung, Verfolgung, Gesundheitsüberwachung, Metriken |

---

## Schlüsseldatenverträge

Dies sind die versionierten API/Event-Schemas, die bestimmen, wie Commerce Backend mit Byte Helium, Byte Portal, POS-Systemen und Aggregatoren kommuniziert.

| Projektausweis | Was es schreibt |
|---|---|
| DCI#BCOM-Cart-API-v1 | Wagenstruktur: Linien, Summen, Vorteile |
| DCI#BCOM-Order-API-v1 | Bestellrekord: Artikel, Status, Summen, idempotency key |
| DCI#BCOM-Menu-Projektion-v1 | Menüdaten projiziert für Speicher/Kanal |
| DCI#BCOM-Pricing-API-v1 | Preisanfrage/Beantwortung mit Steueraufschlüsselung |
| DCI#BCOM-POS-Order-API-v1 | Bestell-Payload an POS-Systeme gesendet |
| DCI#BCOM-KDS-Order-Ereignis-v1 | KDS-Ticket-Event mit Punkt / Stationsaufschlüsselung |
| DCI#BCOM-Order-Status-Event-v1 | Fulfilling Status-Updates von POS/KDS |
| DCI#BCOM-Aggregator-Order-API-v1 | Normales Aggregatorauftragsformat |
| DCI#BCOM-Aggregator-Status-Event-v1 | Statusaktualisierungen zurück zu Aggregatoren |

---

:::tip Verwandte Artikel
- Vollständige technische Referenz →[Commerce Backend Referenz](/docs/byte-capabilities/reference/commerce-backend)
- Brauchen Sie die Bordhöhle? Beginnen Sie mit[Byte Connect](/docs/byte-capabilities/enablement/byte-connect)
:::

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Byte Commerce Backend Capability Overview</summary>

- **FRD References:** [FRD-BCOM-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144136503), [FRD-BCOM-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144464036), FRD-BCOM-033, FRD-BCOM-057
- **TRD Domains:** Cart, Pricing, Payments, Order Management, POS Integration, Aggregator Integration
- **Key Interfaces / APIs:** Cart API, Pricing API, Order API, POS Order API, Aggregator Order API, Status Events
- **Data Contracts:** Cart, order, pricing response, payment transaction, POS payload, order status event
- **Source Summary:**
  - Byte Commerce Backend is the transactional source of truth behind the customer journey rendered by Byte Helium
  - It owns pricing, taxes, payment orchestration, order lifecycle, and downstream handoff into POS and aggregator channels
  - Lower-level contract detail is maintained in the dedicated [Commerce Backend Reference](/docs/byte-capabilities/reference/commerce-backend)

</details>

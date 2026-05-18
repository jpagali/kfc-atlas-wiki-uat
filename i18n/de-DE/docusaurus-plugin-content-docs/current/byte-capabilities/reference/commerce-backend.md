---
title: Commerce Backend Referenz
description: Was der Atlas Commerce Backend tut, seine Domänenaufschlüsselung und Schlüsseldatenverträge.
sidebar_label: Commerce Backend
---

# 🗂 Commerce Backend — Feature Referenz

> Der Commerce Backend ist für Kunden unsichtbar, orchestriert aber alles, was zwischen Frontend- und Instore-Systemen geschieht.

---

## Was es tut

Der Commerce Backend ist der Motor, der jede digitale Bestellung auf der Atlas-Plattform verarbeitet. Es behandelt Cart Kreation und Wartung, Preis- und Steuerberechnung, Zahlungsbewilligung und Erfassung, Auftragsstaatsverwaltung, POS/KDS-Injektion, Aggregator-Ordnung und Kundenkonto-Linking.

Byte Helium orchestriert nie direkt Aufträge – es sendet Anfragen an Commerce Backend, und Commerce Backend verwaltet das Ergebnis.

:::note Byte POS Caveat
Byte Commerce ist verkabelt, um direkt mit **Byte POS* zu sprechen. Wenn ein Markt nicht Byte POS verwendet wird, ist **Byte Connect** als Brücke zwischen Byte Commerce und dem Markt POS erforderlich und sollte als Teil von Byte Commerce onboarding behandelt werden.
:::

---

## Commerce Backend Domain Übersicht

| TRD Domain | Was es tut | Von |
|---|---|---|
| Bestellung & Cart Lifecycle | Cart Kreation, Wartung, Preisgestaltung, Auftragszustand Maschine | Produkte &amp; Engineering |
| Menü Verbrauch, Preise & Steuern | Menüverfügbarkeit, dynamische Preisgestaltung, Steuerberechnung, Promo-Anwendung | Byte Menu &amp; Preise |
| Zahlungen & Erstattungen | Zahlung Auth, Erfassung, Rückerstattung Verarbeitung, PSP Integration | Commerce Backend Zahlungen |
| Kundenkonten & Auth | Identität über OIDC/OAuth2; Kundenprofil | Byte Kundenplattform |
| Einstellungen & Loyalität Linking | Favoriten, Loyalitäts-Account Linking, Zustimmung Tracking | Kundenplattform / Loyalität |
| POS / KDS Integration | Bestellen Sie die Injektion in Instore-Systeme; Statussynchronisation; nicht-Byte POS-Märkte Route durch Byte Connect | Commerce Backend + Ops |
| Gesamtintegration | Normalisierte Aufnahme von Uber Eats, DoorDash, etc. | Commerce Backend + Byte Connect |
| Datenmigration | Abwandern von alten Kunden und Bestellhistorie | Migrationswerkzeug / Kundenplattform |
| Beobachtung | Logging, Tracing, Gesundheit, Metriken | Plattform / SRE |

---

## Commerce Backend Schlüsseldatenverträge

Dies sind die versionierten Datenverträge (DCI – Data Contracts & Interfaces), die die Kommunikation von Diensten über die Plattform steuern.

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

*Quelle: Commerce Backend FRD/TRD Master Index, Commerce Backend Funktionsanforderungen, Commerce Backend Technische Anforderungen, Commerce Backend TRD Domain Katalog.*

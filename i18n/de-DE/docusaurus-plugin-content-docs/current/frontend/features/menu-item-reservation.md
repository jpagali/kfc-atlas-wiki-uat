---
title: Menüpunkt Reservierung
sidebar_position: 7
---

# Menüpunkt Reservierung

## Was es tut

Menü Item Reservation ermöglicht es Kunden, ** vorbestellen und bestimmte Menüpunkte** zu garantieren, bevor sie für die Standardbestellung verfügbar sind. Anstatt zu hoffen, dass ein Produkt vorrätig ist, wenn sie ankommen, behalten sich Kunden es im Voraus vor – wählen Sie ein Abholdatum, Zeitschlitz und die Zahlung vorn.

Diese Funktion ist für Situationen konzipiert, in denen die Nachfrage vorhersehbar ist, aber das Angebot begrenzt ist: saisonale Kampagnen, exklusive Produkteinführungen, hochraffic Events oder kulturelle Momente, in denen eine bestimmte Mahlzeit eine erhöhte Bedeutung hat.

## Warum es Existiert

Einige Menüpunkte – besonders eingeschränkte Produkte oder kulturell bedeutsame Mahlzeiten – erzeugen die Nachfrage, die weit über die reale Erfüllungsfähigkeit eines Restaurants hinausgeht. Ohne Reservierungssystem:

- Kunden kommen, um Produkte zu finden, die ausverkauft sind
- Restaurants sind von unvorhersehbarer begehbarer Nachfrage überfordert
- Marketing-Kampagnen setzen voraus, dass das Bestellsystem nicht erfassen kann

Menu Item Reservation konvertiert, dass die Nachfrage in bestätigte, geplante Aufträge – geben Kunden eine Garantie und geben den Restaurants die Sicht, um genau vorzubereiten.

## Wie es funktioniert

Der Reservierungsfluss hat vier Schritte:

```
1. Browse        → Customer discovers a reservable item (product page, homepage banner, promo)
2. Reserve       → Customer selects pickup date and time slot, confirms quantity
3. Pay           → Full or partial payment is taken upfront to hold the reservation
4. Collect       → Customer arrives at the restaurant, presents reservation confirmation
```

### Reservationsfenster
Jedes reservierbare Element verfügt über ein konfiguriertes **-Reservierungsfenster* - die Dauer, in der Vorbestellungen geöffnet sind. Außerhalb dieses Fensters erscheint der Artikel als Standard-Menü-Produkt (falls vorhanden) oder wird vollständig versteckt.

### Zeitschlitze
Restaurants sind mit verfügbaren **pickup Zeitschlitzen** pro Tag konfiguriert. Jeder Slot hat eine Kapazitätsgrenze, verhindert Überbuchung. Sobald ein Slot voll ist, werden Kunden das nächste verfügbare Mal angeboten.

### Zahlung
Die Vorauszahlung ist erforderlich, um eine Reservierung zu bestätigen. Dies reduziert No-Shows und sorgt dafür, dass das Restaurant nur bestätigte Bestellungen vorbereitet. Stornierungs- und Rückerstattungsrichtlinien werden pro Markt konfiguriert.

## Konfiguration

Menu Item Reservation wird auf der Produktebene über **Contentful** (für Web) und die Marktkonfigurationsschicht aktiviert. Operatoren können konfigurieren:

| Einstellung | Warenbezeichnung |
|---|---|
| ** Reservierungsfenster* | Offenes Datum und Datum für Vorbestellungen |
| ** Datumsangaben** | Welche Termine Reservierungen akzeptiert werden |
| **Zeitschlitze** | Verfügbare Abholfenster und Perslotkapazität |
| ** Anzahlung / Vollzahl** | Ob Vollzahlung oder Anzahlung bei Reservierung berechnet wird |
| ** Politik der Kanzler** | Ob Kunden absagen können und unter welchen Bedingungen |
| ** Maximale Menge pro Bestellung** | Beschränken Sie, wie viele ein Kunde reservieren kann |

## Plattformen

| Plattform | Unterstützung |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

:::tip
Menu Item Reservation ist eine marktaktivierte Funktion. Kontakt **KFC Global Enablement and Market Success**, um es für Ihren Markt zu ermöglichen und die Reservierungsparameter zu konfigurieren.
:::

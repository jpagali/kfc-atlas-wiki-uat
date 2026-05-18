---
title: Stacked Multi-Condition Promotion
sidebar_label: Stacked Multi-Condition Promotion
---

# Stacked Multi-Condition Promotion

## Ziel

Nur registrierte Benutzer erhalten 10% Rabatt auf Bestellungen über $25 an Wochenenden.

## Anforderungen

Alle nachstehenden Bedingungen müssen erfüllt werden.

| Gebiet | Feld | Wert |
|---|---|---|
| **Channel** | **Selectkanäle** | `Mobile`, `iOS`, `Android` |
| **Benutzerstatus** | **Ist registrierter Kunde?* | `Yes` |
| **Unterstützung** | **Minimum Subtotal** | `$25.00` |
| **Zeitrahmen** | **Day Range** | `Sa Su` |
| **Zeitrahmen** | ** Interval Start Time** | `00:00:00` |
| **Zeitrahmen** | **Interval End Time** | `23:59:59` |

## Auswirkungen

| Gebiet | Feld | Wert |
|---|---|---|
| **Orderstufe** | ** Druckeffekttyp** | `Percent Off` |
| **Orderstufe** | **Prozent** | `10` |

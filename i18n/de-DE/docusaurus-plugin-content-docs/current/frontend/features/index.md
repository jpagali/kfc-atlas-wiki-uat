---
title: Eigenschaften im Überblick
sidebar_position: 1
---

# Eigenschaften

Dieser Abschnitt dokumentiert jede in die KFC Atlas-Plattform eingebaute Fähigkeit. Jedes Feature hat eine eigene dedizierte Seite über das, was es tut, wie es sich über Plattformen verhält, und alle marktspezifischen Überlegungen.

## Was zählt als Feature?

Ein Feature in Atlas ist eine deutliche, benutzerorientierte oder bedienerorientierte Fähigkeit, die:

- Liefert einen bestimmten Produkt- oder Betriebswert
- Hat das Verhalten über iOS, Android und Web definiert
- Kann pro Markt aktiviert, konfiguriert oder erweitert werden

## Aktuelle Funktionen

| Merkmal | Warenbezeichnung | Plattformen |
|---|---|---|
| [KFC Deeplink \ | Universal Link](./KFC-deeplink-universal-link) | Spezielle KFC-Inhalte direkt in der App über jede KFC URL öffnen | iOS, Android, Web |
| [Branch Deeplink](./branch-deeplink) | Attribution-aware tiefe Verknüpfung und abgeleitete Routing über Branch.io | iOS, Android |
| [MarTech](./martech) | Event-Tracking, Kundendaten und Marketing Automation Integrationen | iOS, Android, Web |
| [Soziales Zeichen](./social-sign-in) | Google, Facebook und Apple Anmeldung über Web und native App | iOS, Android, Web |
| [Menüpunkt Reservierung](./menu-item-reservation) | Lassen Sie Kunden bestimmte Menüpunkte im Voraus vorbestellen und reservieren | iOS, Android, Web |

:::tip
Funktionen werden pro Markt über Konfiguration aktiviert – nicht separate Code-Einstellungen. Siehe[Marktkonfigurationen](/docs/frontend/market-configurations)für Details.
:::

## Besonderheiten

Jedes Feature in Atlas ist auf den Märkten wiederverwendbar. Das heißt, einige Funktionen können Abhängigkeiten von Drittsystemen tragen — wie z.B. dem Point of Sale (POS) oder dem Delivery Management System (DMS) des Marktes — und erfordern eine Integrationsbewertung, bevor sie leben können.

Menu Item Reservation ist ein Beispiel: jeder marktspezifische Reservierungsfluss hängt von der Bestands- und Zeitschlitz-API des betreffenden POS- oder Inventarsystems ab. Märkte ohne entsprechende API-Unterstützung von ihrem POS müssten diese Integration beenden, bevor das Feature aktiviert werden konnte.

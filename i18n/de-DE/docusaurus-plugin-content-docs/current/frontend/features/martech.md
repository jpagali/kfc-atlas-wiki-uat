---
title: MarTech
sidebar_position: 4
---

# MarTech

## Was es tut

Die MarTech-Funktion ist der Atlas-Plattform-Marketing-Technologie-Stack – die Reihe von Integrationen, die sammeln, Routen und handeln auf Kundenverhaltensdaten über jeden Touchpoint in der KFC-Erfahrung.

Es verbindet drei Systeme:

- **Event Tracking** — erfasst, was Kunden in der App und im Web tun
- **mParticle** — fungiert als Kundendatenplattform (CDP), alle Veranstaltungen empfangen und an nachgeschaltete Werkzeuge weiterleiten
- **Braze*** — die Kundenbindungsplattform, die für Push-Benachrichtigungen, In-App-Nachrichten und Marketingautomatisierung verwendet wird

Gemeinsam ermöglichen sie es KFC-Märkten, personalisierte, datengesteuerte Kampagnen ohne Engineering-Einbindung für jeden zu betreiben.

## Wie die Datenströme fließen

```
Customer Action (app / web)
        ↓
  Event Tracking Layer
  (structured event fired)
        ↓
     mParticle
  (data collected + routed)
        ↓
      Braze
  (campaigns, push, in-app)
```

## Komponenten

### Event Tracking
Jede sinnvolle Kundenaktion in Atlas — das Betrachten eines Produkts, das Hinzufügen in den Warenkorb, das Ausfüllen eines Auftrages, das Abhören eines Promos — feuert ein strukturiertes Ereignis. Diese Ereignisse folgen einem konsequenten Schema, so dass Daten über die Märkte vergleichbar sind.

### mTeilchen
mParticle ist die zentrale Nabe. Es empfängt alle Ereignisse von Atlas, normalisiert und bereichert sie und leitet die relevanten Daten an Werkzeuge wie Braze, Analyseplattformen und jedes andere konfigurierte Ziel weiter.

### Bravo
Braze erhält Kundenprofile und Eventdaten von mParticle und nutzt diese an Leistung:

- Push-Benachrichtigungen (Bestellung von Updates, Promotionen, Neueinstellung)
- In-App-Nachrichten (personalisierte Banner, Onboarding-Anforderungen)
- Marketingautomatisierung (ausgesprochene Kampagnen basierend auf Kundenverhalten)

## Plattformen

| Plattform | Unterstützung |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

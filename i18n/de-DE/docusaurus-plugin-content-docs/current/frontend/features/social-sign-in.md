---
title: Soziales Zeichen
sidebar_position: 6
---

# Soziales Zeichen

## Was es tut

Soziales Zeichen Damit können Kunden ein Konto erstellen und sich mit ihren vorhandenen Google-, Facebook- oder Apple-Anmeldeinformationen bei KFC anmelden – anstatt ein separates KFC-spezifisches Passwort zu erstellen.

Für Kunden entfernt es Reibung bei der Registrierung und Anmeldung. Für Märkte erhöht es die Kontoerstellungsraten und reduziert passwortbezogene Support-Probleme.

## Unterstützte Provider

| Anbieter | Web | iOS | Android |
|---|---|---|---|
| Google | ✅ | ✅ | ✅ |
| Facebook | ✅ | ✅ | ✅ |
| Apple (Sign in mit Apple) | ✅ | ✅ | ❌ Apple unterstützt dies nur auf iOS |

## Wie es funktioniert

Wenn ein Kunde eine Social-Login-Taste tippt:

1. Sie werden auf den Authentifizierungsbildschirm des Anbieters umgeleitet (Google, Facebook oder Apple)
2. Der Anbieter bestätigt die Identität des Kunden und gibt ein Token zurück
3. Atlas verwendet dieses Token, um das KFC-Konto des Kunden zu erstellen oder abzurufen
4. Der Kunde ist angemeldet

Hat ein Kunde bereits ein KFC-Konto mit derselben E-Mail-Adresse, so ist der Social Login mit seinem vorhandenen Konto verknüpft.

## Marktermöglichung

Soziales Zeichen In ist pro Markt und pro Anbieter konfiguriert. Jeder Anbieter ist unabhängig aktiviert, so dass ein Markt Google Sign haben kann Bei aktiv ohne Facebook zum Beispiel.

Der Authentifizierungsfluss wird in der Marktkonfiguration eingestellt:

```js
authenticationOptions: {
  enabledFlows: {
    MagiclinkEmail: true,   // passwordless email login (always recommended)
    Google: true,
    Facebook: false,
    Apple: true,
  },
  primaryIdentifier: 'email',
}
```

## Plattformen

| Plattform | Unterstützung |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

:::tip
Google One Tap Login ist im Web als zusätzliche Bequemlichkeitsschicht verfügbar. Es zeigt automatisch eine Sign-In-Überlagerung. Es ist optional und sollte immer mit Standard-OAuth-Tasten gekoppelt werden, wie es durch Browser-Einstellungen unterdrückt werden kann.
:::

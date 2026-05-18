---
title: Identität und Zeichen In
description: Wie Kunden Konten erstellen, anmelden, ihr Profil verwalten und Datenschutzeinstellungen auf der Atlas-Plattform steuern.
sidebar_label: Identität und Zeichen In
---

# Identität und Zeichen In

**What it does:** Verwaltet, wie Kunden Konten erstellen, anmelden, ihr Profil verwalten und Datenschutzeinstellungen steuern.

**Why it matters:** Jede Treue-Interaktion, Bestellhistorie, gespeicherte Adresse und personalisiertes Angebot hängt davon ab, dass ein Kunde authentifiziert wird. Ohne Anmeldung können Kunden nur Gäste-Checkout nutzen – sie haben keinen Zugang zu Belohnungen, Bestellhistorie oder gespeicherten Präferenzen.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| ** Konto erstellen mit E-Mail** | Neue Kunden müssen sich anmelden | Kunden können sich mit einer E-Mail-Adresse und einer einmaligen PIN anmelden | Kunde eingegeben E-Mail → erhält OTP → verifiziert → Konto erstellt; Sitzungstoken ausgegeben | Identität/SSO-Service, E-Mail-Versand | E-Mail-Service aktiv für den Markt | OTP Rate begrenzt pro Gerät (verhindert Missbrauch) | Umrechnungskurs für Unterzeichnete |
| **Sign In E-Mail + OTP* | Kunden zurückgeben müssen auf ihr Konto zugreifen | Passwortlose Anmeldung per E-Mail OTP | Kunde eingegeben E-Mail → erhält OTP → bestätigt → Sitzung wieder aufgenommen | Identität/SSO-Service, E-Mail-Versand | Konto muss vorhanden sein | OTP-Testlimit mit Rückmeldung | Login Erfolgsrate, Sitzungsdauer |
| **Sign In / Registrieren bei Google** | Kunden bevorzugen Social Login per E-Mail | Ein-Tap Google-Konto-Link für Anmeldung oder Registrierung | Google OAuth2 Flow → Identität Service Austausch Token → Konto erstellt oder verknüpft | Google OAuth, Identität/SSO | Google OAuth auf dem Markt möglich | Erfordert Google-Konto; Markterleichterung Entscheidung | Social Login Adoptionsrate |
| **Sign In / Registrieren mit Apple ID** | iOS-Benutzer erwarten natives Apple-Zeichen | Anmelden mit Apple für iOS/macOS Kunden | Apple OAuth Flow → token ausgetauscht → Konto erstellt oder verknüpft | Apple Sign-In, Identität/SSO | Apple-Entwickler config per Markt | Apple nur; erfordert Apple-Konto | iOS Anmelderate |
| ** Profil bearbeiten** | Kunden müssen ihre Details aktualisieren | Lassen Sie angemeldete Kunden ihren Namen DOB aktualisieren und Kontaktinformationen | Profil-Update-Aufruf zu Identitätsdienst; Änderungen in CRM | Identität/SSO, CRM | Kunden müssen in | Felder variieren nach Marktkonfiguration | Profil-Vervollständigungsrate |
| **Ansicht und Änderung der Kommunikationseinstellungen** | Kunden müssen kontrollieren, wie sie kontaktiert werden | Zeigt und aktualisiert E-Mail/Push/SMS Opt-in-Status pro Kanal | Lesungen von CRM; Kundenaktualisierungen Trigger CMP Sync und Audit Trail | CRM, CMP, Push Provider | Eingetragen; Einverständnisrahmen für den Markt | Audit Trail obligatorisch; Änderungen angemeldet | E-Mail/Push Opt-in Rate |
| ** Konto löschen** | Kunden haben ein Recht auf Löschung (DSGVO) | Initiiert Kontoauslöschungsanfrage über alle angeschlossenen Systeme | Senden Löschung Anfrage an Identität; Kaskaden an CRM, Loyalität | Identität/SSO, CRM, Loyalität | Der Kunde muss unterschrieben werden; keine ausstehenden Bestellungen | Löschung kann Zeit zur Propagierung nehmen; Loyalitätsdaten gelöscht | Abrechnungspreis |
| ** Aussteigen** | Kunden müssen ihre Sitzung sicher beenden | Endet die Sitzung, löscht Token, registriert Push | Sitzung ungültig in Identität; Push-Token nicht registriert | Identität/SSO, Push Provider | Aktive Sitzung | Keine | N/A |
| **Details / Datenschutz** | Kunden müssen sehen können, was sie vereinbart haben, | Rendert die neuesten Rechtsdokumente für die lokalen Märkte | Fetches versioniertes Dokument von Legal CMS; CDN-cached | Legal CMS, CMP | Keine (für Gäste verfügbar) | Inhalt verwaltet von Legal team, nicht Byte Helium | Rechtliche Einhaltung |
| **Cookie Consent Einstellungen** | Regulatorische Anforderung in vielen Märkten | Zeigt Cookie-Kategorien; lässt Kunden akzeptieren / abwerfen | CMP gibt Zustimmung Widget; Vorlieben mit Zeitstempel gespeichert | CMP | Keine (für Gäste verfügbar) | Markt muss CMP-Kategorien konfigurieren | Zustimmung Akzeptanzrate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Create Account with Email</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** Auth Email, OTP Verify, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OTP verified via Identity service; rate-limited per device (429 backoff)
  - Session token stored in device secure keystore (iOS/Android)
  - Auth endpoints SLO: 99.95% monthly availability
  - Backward compatible SemVer; 90-day deprecation window
  - PII masking applied in all logs

</details>

<details>
<summary>📎 Technical Source: Sign In with Google / Apple</summary>

- **FRD References:** [FRD-HEL-003](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-003), [FRD-HEL-004](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-004), [FRD-HEL-027](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-027), [FRD-HEL-028](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-028), [FRD-HEL-029](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-029), [FRD-HEL-030](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-030)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** OAuth Google Callback, OAuth Apple Callback, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OAuth2 flow: IdP → Identity service → session token
  - Existing account: linked; new account: created in same flow
  - No PAN or sensitive data in OAuth payload
  - Market enablement: both providers configurable per market
  - 90-day API deprecation window

</details>

<details>
<summary>📎 Technical Source: Delete Account</summary>

- **FRD References:** [FRD-HEL-067](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-067)
- **TRD Domain:** Identity & Sign-In + CRM + Loyalty
- **Key Interfaces / APIs:** Account Delete Request/Status
- **Data Contracts:** Account erasure request (userId, timestamp, status)
- **Source Summary:**
  - GDPR-compliant erasure flow; cascades to CRM and Loyalty
  - Deletion is asynchronous; status available via polling
  - Loyalty balance and history permanently deleted
  - Audit log retained for compliance (anonymised)
  - Blocks re-use of same email for configurable period

</details>

---

:::tip See it in the wiki
The Identity domain maps to the customer-facing sign-in and account flows documented in the Front-end Guide: [Access Account & Manage Profile](/docs/frontend/customer-journey/access-account-and-manage-profile/)
:::

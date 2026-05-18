---
title: Markteinführung Checkliste
description: Eine Go/No-go Checkliste für Marktteams, die auf der Atlas / Byte Helium Plattform starten. Erbaut aus der Realitätsschicht — das sind die Dinge, die tatsächlich scheitern, wenn übersprungen.
sidebar_label: Markteinführung Checkliste
---

# ✅ Market Launch Checklist

> Diese Checkliste wird von der[Reality Check](/docs/byte-capabilities/enablement/reality-check)— die Abhängigkeitslücken und Ausfallmuster, die in jedem Rollout auftreten. Arbeiten Sie durch sie in Ordnung. Starten Sie UAT nicht, bis Phase 1 abgeschlossen ist.

---

## Wie Sie diese Checkliste verwenden

Jeder Artikel hat ein **Risikoniveau** und ein **go/no-go-Gate**. Gegenstände, die 🔴 gekennzeichnet sind, sind harte Blocker — Start kann nicht sicher ohne sie fortfahren. Artikel mit 🟡 sollten vor Beginn der UAT bestätigt werden. Artikel mit 🟢 sind Polierartikel, die vor dem Starttag gemacht werden sollten.

---

## Phase 1 — Stiftung (muss vor jeder Prüfung abgeschlossen sein)

### 1.1 Byte Portal Zugriff & Benutzer

:::danger Go / No-Go Gate
Die Prüfung kann erst beginnen, wenn das Team Byte Portal Zugriff hat.
:::

- [ ] Byte Portal Umwelt ist für den Markt vorgesehen
- [ ] Market admin-Nutzer eingeladen und zugewiesen korrekte Rollen (RBAC)
- [ ] Scope Guard geprüft — Benutzer können nicht auf außermarktliche Daten zugreifen
- [ ] MFA aktiviert für alle Byte Portal-Benutzer

---

### 1.2 Speicherkonfiguration

:::danger Go / No-Go Gate
Kunden können nicht bestellen, wenn Geschäfte fehlen oder falsch konfiguriert sind.
:::

- [ ] Alle in Byte Portal erstellten Launch-Stores mit korrekten Speicherdaten
- [
- [ ] Speichern Sie Echtzeit-Zustand integriert mit POS (offen/paused/geschlossen reflektiert Live-Zustand)
- [ ] Speichergruppen mit korrekter Hierarchie konfiguriert — keine Zyklen
- [ ] Satz der Drosselung (Bestellgrenzen pro Zeitfenster) gegebenenfalls

---

### 1.3 Menu

:::danger Go / No-Go Gate
Kunden sehen kein Menü, wenn die Publikation Pipeline nicht vollständig ist.
:::

- [ ] Menüinhalte vollständig in **Byte Menu** (nicht Portal)
- [ ] Menu-Version veröffentlicht in Byte Menu für alle Startkanäle
- [ ] Menu-Version, die dem Markt in Byte Portal zugeordnet ist
- [ ] Menu getestet: korrekte Artikel, Preise und Modifikatoren zeigen pro Speicher/Kanal
- [
- [ ] Nährwert- und Allergendaten, die in Byte Menu (falls auf dem Markt erforderlich)

---

### 1.4 Steuerkonfiguration

:::danger Go / No-Go Gate
Unrichtige Steuer verursacht falsche Preise beim Checkout — ein Finanz- und Compliance-Risiko.
:::

- [ ] Steuerprofil erstellt für Markt mit korrekten Preisen und Kategorien
- [ ] Steuervorschriften gegen lokales Steuerrecht mit Finanzzeichen
- [ ] Steuerprofil, das dem Markt in Byte Portal zugeordnet ist
- [ ] End-to-End-Checkout-Test zeigt korrekte Steueraufschlüsselung

---

### 1.5 Zahlungen / PSP

:::danger Go / No-Go Gate
Zahlungen können nicht verarbeiten, wenn der PSP nicht end-to-end konfiguriert ist.
:::

- [ ] PSP Vertrag im Markt
- [ ] PSP-Anmeldeinformationen im Tresor (NOT im Byte Portal direkt)
- [ ] PSP-Profil erstellt in Byte Portal mit korrekten Zahlungsmethoden aktiviert
- [ ] Routing-Regeln konfiguriert (channel/market-spezifische Routing)
- [ ] Gebühren- und Gebührenpolitik (falls zutreffend)
- [ ] End-to-End-Kartenzahlung erfolgreich in der Inszenierung getestet

---

## Phase 2 — Kanäle & Erfahrungen (Muss vor UAT abgeschlossen sein)

### 2.1 Lokalisierung

:::warning Vor-UAT-Tor
Falsche Lokalisierung bedeutet, dass Kunden falsche Menüs, Preise oder Text sehen.
:::

- [ ] Markt konfiguriert in Byte Portal / Config Service mit korrekter Locale
- [ ] Sprach-/Lokalerkennung getestet (geo-IP und explizite Auswahl)
- [ ] Übersetzungsschlüssel komplett für alle UI-Strings — Ausführung Deckungsbericht
- [ ] Fehlende Übersetzungen bestätigen, dass sie korrekt auf Englisch zurückfallen (nicht auf leere Felder)

---

### 2.2 Bestellmodi

:::warning Vor-UAT-Tor
Der Bestellmodus ist der Eingabepunkt – wenn dies ausfällt, kann keine Bestellung platziert werden.
:::

- [ ] Sammlungsmodus getestet End-to-End: Speicherauswahl → Menü → Checkout → Bestellung platziert
- [ ] Liefermodus getestet End-to-End: Adresseneingabe → Deckungscheck → Menü → Checkout → Bestellung
- [ ] Liefer-Abdeckungszonen konfiguriert in Byte Portal / Geo Service (wenn Lieferung aktiviert)
- [ ] Liefermodus deaktiviert für Märkte, die keine Lieferung unterstützen
- [ ] Speicherzustand (geöffnet/geschlossen) korrekt Blöcke Bestellung aus geschlossenen Geschäften

---

### 2.3 Identität und Konten

- [ ] OTP email sign-in getestet (Registrierung und Anmeldung)
- [ ] Google OAuth getestet (wenn für den Markt aktiviert)
- [ ] Apple Sign-In getestet (wenn für den Markt aktiviert)
- [ ] Profilbearbeitung, Kommunikationspräferenzen und Kontoauslöschung arbeiten
- [ ] Gast-Checkout-Pfade getestet (kein Konto erforderlich)

---

### 2.4 Promotionen

:::warning Vor-UAT-Tor
Mis-scoped promos kann durch den falschen Markt oder Kanal eingelöst werden.
:::

- [ ] Alle in Byte Portal konfigurierten Startaktionen mit korrekter:
  - Marktbedeckung (nicht global, sofern nicht beabsichtigt)
  - Kanalbedeckung (Lieferung vs. Sammlung gegebenenfalls)
  - Datumsbereich (Start- und Enddatensatz)
  - Budgetlimits (Redemption Caps konfiguriert)
- [ ] Promo-Code getestet: gilt richtig, ungültiger Code gibt Fehler zurück, hält aber Warenkorb
- [ ] Die Förderung stapelt nicht mit anderen Promos, es sei denn, das Stapeln ist beabsichtigt

---

### 2.5 Loyalität (Wenn der Markt mit Loyalität startet)

- [ ] Loyalität Programm ermöglicht für den Markt mit Global Loyalty Team
- [
- [ ] Punktebilanz zeigt korrekt post-order
- [ ] Rewards-Katalog zeigt richtige Belohnungen für den Markt
- [
- [ ] Herausforderungen konfiguriert (falls zutreffend)
- [ ] Geburtstag / Anmeldung Belohnung Trigger konfiguriert

---

### 2.6 Lieferverfolgung (Wenn der Markt Echtzeit-Tracking hat)

- [ ] 3P Logistikintegration bestätigt und getestet
- [ ] Echtzeit-ETA korrekt auf dem Bestell-Tracking-Bildschirm angezeigt
- [ ] Fallback-Verhalten bestätigt, wenn Tracking-Veranstaltungen verzögert werden

---

## Phase 3 — Content & Legal (Muss vor Starttag abgeschlossen sein)

### 3.1 CMS Inhalt

:::warning Diese werden für Kunden am ersten Tag sichtbar sein.
:::

- [
- [ ] Über uns / Unsere Geschichte Seite veröffentlicht
- [ ] FAQ-Inhalte autorisiert und veröffentlicht
- [ ] Karriere / Jobboard konfiguriert (falls zutreffend)

---

### 3.2 Rechtliche und Compliance

- [
- [ ] Datenschutzrichtlinie veröffentlicht für Marktlokale
- [ ] Cookie-Kategorien, die in CMP für lokale Cookie-Gesetze konfiguriert sind
- [ ] Cookie-Einwilligungsbanner getestet — Präferenzen korrekt gespeichert

---

## Phase 4 — Operationen (Bevor go-live sign-off)

### 4.1 Feature Flaggen

- [ ] Alle marktspezifischen Feature-Flags überprüft und korrekt in Byte Portal gesetzt
- [ ] Kill-Switch-Flags identifiziert für kritische Funktionen
- [ ] Fahne-Konfiguration getestet in staging – keine unerwarteten Funktionen aktiviert oder deaktiviert

---

### 4.2 Webhooks & Integrations (falls zutreffend)

- [ ] Webhook-Abonnements für Drittsysteme konfiguriert
- [ ] Abonnent Endpunkte als idempotent bestätigt (handle doppelte Ereignisse sicher)
- [ ] DLQ (Dead Letter Queue) überwacht und Warnungen konfiguriert

---

### 4.3 Rückerstattungen & Ops

- [ ] Rückerstattungsrichtlinie in Byte Portal (Kaps, Fristen, Genehmigungsregeln)
- [ ] Ops-Team hat Byte Portal Zugang zu Prozesserstattungen
- [ ] Auftragssuche getestet mit korrektem rollenbasiertem PII-Zugriff

---

### 4.4 Beobachtung

- [ ] Gesundheitskontrollen und SLO Dashboards für den Markt konfiguriert
- [
- [ ] Audit-Log-Zugriff für Compliance-Team bestätigt

---

## Schlussabstimmung

| Gebiet | Eigentümer | Abgezeichnet |
|---|---|---|
| Speichern & Menü Konfiguration | Markt Byte Portal Admin | ☐ |
| Steuerkonfiguration | Finanzen | ☐ |
| PSP / Zahlungen | Zahlungsteam | ☐ |
| Promotionen scoping | Marketing / Byte Portal Admin | ☐ |
| Rechtlicher Inhalt | Rechtliches Team | ☐ |
| Übersetzungsvollständigkeit | Lokalisierungsteam | ☐ |
| Feature-Flags | Produktteam | ☐ |
| End-to-end UAT bestanden | QA / Startteam | ☐ |

---

:::tip In den Warenkorb
- [Reality Check](/docs/byte-capabilities/enablement/reality-check)— die Fehlermuster, die diese Checkliste vorbeugen soll
- [Kapazitätsauslastung](/docs/byte-capabilities/enablement/capability-boundaries)— wer besitzt, was, bevor Sie das falsche Ticket erhöhen
:::

---
title: Reality Check
description: Die teuersten Rollout-Probleme kommen aus Missverständnissen, nicht fehlende Features. Lesen Sie das, bevor Sie leben.
sidebar_label: Reality Check
---

# ◆️ Reality Check — Welche Märkte wissen müssen

> Die teuersten Rollout-Probleme kommen aus Missverständnissen, nicht fehlende Features. Lesen Sie das, bevor Sie leben.

---

## Die großen Missverständnisse

Dies sind die Annahmen Teams am häufigsten in Rollout bringen — und die Realität hinter jedem.

---

### ❌ "Byte Helium besitzt Preise"

**Reality:** Byte Helium zeigt die Preise — es besitzt nicht, berechnet oder kontrolliert sie. Die Preise sind vollständig im Besitz des Commerce Backend und Menu Service. Wenn die Preise in der App falsch sind, ist der Fix im Backend oder Menü Konfiguration - nicht in Byte Helium.

---

### ❌ "Wir können den Checkout-Flow in Byte Helium konfigurieren"

**Reality:** Checkout-Ströme (Varianten, Stufen, Gebühren) werden vom Commerce Backend's Checkout Orchestrator orchestriert. Märkte definieren, welche Variante über die Byte Portal-Konfiguration genutzt werden soll. Byte Helium macht, was das Backend sagt.

---

### ❌ "Byte Portal lässt uns unser Menü schreiben"

**Reality:** Byte Portal ordnet bereits veröffentlichte Menüs und Patches zu. Menü-Autorisierung (Erstellung von Artikeln, Beschreibungen, Preise) geschieht in **Byte Menu** — ein separates Werkzeug außerhalb der Atlas-Plattform. Byte Portal kann keine Menüinhalte von Grund auf erstellen.

---

### ❌ "Promotionen sind in Byte Helium konfiguriert"

**Reality:** Promotionsregeln, Förderfähigkeit, Codes und Budgets sind alle im **Byte Portal* konfiguriert. Byte Helium macht nur, was die Promo Engine zurückgibt. Die Förderfähigkeit wird immer serverseitig berechnet.

---

### ❌ "Realtime Delivery Tracking ist immer verfügbar"

**Reality:** Versandverfolgung ist **optional pro Markt*. Es erfordert die Integration mit einem Logistikanbieter von Drittanbietern. Ohne diese, Kunden sehen POS-Bestellstatus nur (akzeptiert/ready/kompleted), nicht Live GPS-Tracking.

---

### ❌ "Loyalty funktioniert automatisch, wenn ein Markt live geht"

**Reality:** Loyalität erfordert drei Dinge: (1) das für den Markt konfigurierte Treueprogramm, (2) der Kunde zu unterzeichnen, und (3) der Kunde zu haben. Gastnutzer erhalten keine Treuevorteile.

---

## Versteckte Abhängigkeiten

Dies sind Merkmale, die still davon abhängen, dass andere Dinge zuerst vorhanden sind. Wenn die Abhängigkeit fehlt, scheitert die Funktion entweder zu Laufzeit oder erscheint überhaupt nicht.

| Merkmal | Was es still hängt | Auswirkungen bei Fehlen |
|---|---|---|
| Förderfähigkeit | Serverseitige Promo Engine pro Markt | Promos können erscheinen, aber scheitern bei der Erlösung |
| Versandverfolgung | 3P Logistikintegration pro Markt | Tracking-Shows als nicht verfügbar |
| Gespeicherte Adressen | Kunden, die in | Besucher verlieren ihre Adressen pro Sitzung |
| Geschichte der Bestellung | Kundenkonto vorhanden und verknüpft | Bestellungen in der Geschichte nicht sichtbar |
| Herausforderungen & gamification | Loyalitätsprogramm aktiviert pro Markt | Challenges Tab erscheint nicht |
| Cookie-Einwilligung | CMP konfiguriert pro Markt | Consent-Banner darf nicht dem lokalen Gesetz entsprechen |
| Webhook Abonnenten | Idempotent Handling am Ende | Veranstaltungen können zweimal verarbeitet werden (zumindest Lieferung) |
| Rückerstattungsabwicklung | Rückerstattungsrichtlinie in Byte Portal konfiguriert | Rückerstattungsanträge werden nicht validiert |
| Tipp-Funktion | Liefermodus aktiv; PSP konfiguriert für separate Erfassung | Tipp nicht verfügbar für alle Märkte |
| Steuergenauigkeit | Steuerprofil für den Markt in Byte Portal | Bestellungen können bei der Kasse falsche Steuern oder Versagen zeigen |

---

## Gemeinsame Ausfallpunkte während des Rollouts

### Konfigurationsprobleme speichern
Handelszeiten in falscher Zeitzone. Echtzeit-Speicherzustand nicht mit POS integriert. Ergebnis: Kunden versuchen, aus geschlossenen Geschäften zu bestellen.

### nicht veröffentlicht
Menü-Version in Byte Menu geschrieben, aber nicht dem Markt in Byte Portal zugeordnet / veröffentlicht. Ergebnis: Kunden sehen kein Menü.

### Promo-Codes nicht korrekt ausgelegt
Promos erstellt ohne korrekte Markt/Kanal/Datum-Bewertung. Ergebnis: Promos weltweit sichtbar, wenn sie lokal sein sollen.

### PSP-Anmeldeinformationen nicht im Tresor
Byte Portal konfiguriert, aber PSP-Geheimnisse nicht in den geheimen Tresor platziert. Ergebnis: Kartenzahlungen scheitern still.

### Lokale/Übersetzung unvollständig
Markt mit unvollständigen Übersetzungsschlüsseln gestartet. Ergebnis: Kunden sehen englischen Fallback Text oder leere Felder.

### Liefergebiet nicht konfiguriert
Liefermodus aktiviert, aber keine Deckungszonen für den Markt definiert. Ergebnis: Alle Lieferadressen werden abgelehnt.

### Loyalität nicht auf dem Markt möglich
Loyalität UI sichtbar in Byte Helium, aber Programm nicht für den Markt in Loyalty-Service ermöglicht. Ergebnis: Einschreibung scheitert.

---

## Wo die Märkte am meisten kämpfen

| Gebiet | Risiko | Was zu tun |
|---|---|---|
| Steuerkonfiguration | 🔴 High | Arbeit mit Finanzen + Portal Steuerfachmann vor go-live |
| Menü Veröffentlichung Workflow | 🔴 High | Stellen Sie sicher, dass Byte Menu- und Portal-Teams auf veröffentlichen ausgerichtet sind → assign → Vorschau → veröffentlichen Sie die Kanäle Pipeline |
| PSP / Zahlungseinstellung | 🔴 High | PSP-Vertrag, Tresorgeheimnisse, Routing-Regeln und Zuschlag alle müssen vor der Check-out-Prüfung vorhanden sein |
| Versandverfolgung | 🟡 Medium | Entscheiden Sie sich früh, wenn der Markt Echtzeit-Tracking hat; beeinflusst die Kundenerwartung Einstellung |
| Loyalitätsermächtigung | 🟡 Medium | Loyalty ist marktoptin; braucht Koordination mit Global Loyalty Team |
| CMS-Inhaltsbereitschaft | 🟡 Medium | Über Seiten, FAQs, Rechtspunkte müssen vor dem Start geschrieben werden |
| Konfiguration der Flaggen | 🟡 Medium | Merkmale, die von Flaggen verziert werden; bestätigen Sie, welche Flaggen auf dem Markt sind und testen sie |
| Übersetzungsvollständigkeit | 🟢 Niedrig (aber sichtbar) | Führen Sie Übersetzung Deckungsbericht vor UAT; fehlende Schlüssel fallen zurück auf Englisch |

---

:::tip Verwenden Sie die Checkliste
Die[Markteinführung Checkliste](/docs/byte-capabilities/enablement/market-launch-checklist)verwandelt alles auf dieser Seite in konkrete Go/No-Go-Gate für Ihren Start.
:::

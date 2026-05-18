---
title: Braze Willkommen Reward Canvas
sidebar_position: 3
---

# Braze Willkommen Reward Canvas

Dieses Playbook erklärt, wie KFC-Teams in Braze eine Willkommens-Belohnungs-Kanäle für neue Kunden einrichten können. Inhaltsannahmen werden wie bisher überprüft behandelt, so dass der Fokus auf Struktur, Zeit und Ausführungsfluss liegt.

---

## Ziel

Nutzen Sie dieses Spielbuch, wenn KFC einen neu identifizierten oder neu registrierten Kunden mit einer automatisierten Belohnungsreise begrüßen möchte.

Typische Beispiele:

- erste App Anmeldung Belohnung
- erste Treue Registrierung Belohnung
- Erster Kaufanreiz nach Kontoerstellung

## Voraussetzungen

- verifizierte Belohnungsinhalte und bieten Logik
- genehmigte KFC-Nachrichtkopie für Push, E-Mail oder In-App-Nachricht
- vereinbarte Publikumsdefinition
- Braze Zugriff auf die Leinwand erstellen oder bearbeiten
- Tracking oder Deeplink Ziel bestätigt

## Schritt 1: Definieren Sie das Einstiegspublikum

Gemeinsame KFC begrüßen Publikumsoptionen:

- Kunden, die App-Registrierung abschließen
- Kunden mit Treue
- Kunden, die sich während des Kontoaufbaus für Marketing entscheiden

Stellen Sie sicher, dass das Publikum nur echte neue Kunden umfasst, nicht bestehende Nutzer, die die Reise neu eingeben.

## Schritt 2: Definieren Sie den Auslöser und Verzögerung

Wählen Sie:

- das Auslöseereignis, das die Leinwand startet
- jede Verzögerung, bevor die Belohnungsnachricht sendet
- ob der Kunde die Belohnung sofort oder nach einer Wartezeit erhalten sollte

Für KFC ist eine kurze Verzögerung oft nützlich, wenn Sie die Nachricht begrüßensorientiert fühlen wollen, anstatt Transaktion.

## Schritt 3: Setzen Sie die Nachrichtenfolge

Empfohlene Leinwandströmung:

1. Willkommensnachricht
2. Belohnungserklärung
3. CTA in die KFC-App oder Bestellfluss
4. optionale Erinnerung, wenn die Belohnung nicht innerhalb des aktiven Fensters erlöst wird

Halten Sie die erste Nachricht einfach und branded. Die Belohnungsdetails sollten für Kunden leicht sein, auf einen Blick zu verstehen.

## Schritt 4: Befestigen Sie die Belohnungslogik

Bestätigt:

- welche Belohnung der Kunde erhält
- wie lange es bleibt gültig
- ob es tiefe Links zu einem bestimmten Menüpunkt, Kategorie oder Landingpage geben sollte
- ob Marktausschlüsse gelten

Wenn die Belohnung von einer Live-Atlas-Werbung abhängt, bestätigen Sie, dass die Promotion bereits konfiguriert und den richtigen Geschäften zugeordnet ist, bevor die Braze-Kanälze startet.

## Schritt 5: QA die Customer Journey

Vor dem Start:

1. Test Publikumseintrag
2. Prüfen Sie das Timing der Nachricht
3. Kopie, Branding und Links validieren
4. überprüfen Fallback-Handling, wenn die Belohnung nicht verfügbar ist
5. bestätigen Sie die CTA-Lande in der erwarteten KFC-Erfahrung

## Schritt 6: Start und Monitor

Einmal live, Monitor:

- Eingangsvolumen
- Versandkosten
- Durchklicken zur App oder Bestellung Ziel
- Belohnung Erlösung
- Support Tickets oder Kundenverwechslung

## KFC-Anmerkungen

- Match Ton und Kopie an aktuelle KFC-Markenkampagnen
- Willkommen Belohnungen leicht zu erlösen; vermeiden Sie schwere Erklärung in der ersten Berührung
- wenn die Belohnung marktspezifisch ist, bestätigen Sie, dass Braze Publikumsregeln und Atlas Promotion Deckung genau übereinstimmen

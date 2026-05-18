---
title: Bestellscheine
sidebar_position: 3
---

# Bestellscheine

:::tip
Alle unten aufgeführten Inhalte sollten als Placeholder-Produktrahmung auf Basis dessen behandelt werden, was derzeit im Admin Portal Guide unterstützt wird. Validieren Sie marktspezifische Bereitstellungsdetails, bevor Sie diese Seite als letzte Quelle der Wahrheit verwenden.
:::

Atlas unterstützt ein **Multi-Channel Bestellmodell pro Store**, das es Teams ermöglicht, Menüs, Verfügbarkeit und Bestellerfahrungen über Kunden-Touchpunkte zu gestalten.

Anstatt Auftragskanäle als feste globales Trio wie zu behandeln`Dine-in / Delivery / Takeaway`, Atlas wird besser als **kanalbasierte Vertriebsplattform** verstanden. Stores können verschiedene Menüs an verschiedene Reiseziele wie **Digital*, **Kiosk* und **In-Store* veröffentlichen, während sich das Frontend-Erlebnis entsprechend anpasst.

Für das Frontend schafft dies zwei Schichten des Erfahrungsdesigns:

- der ** Bestellkanal** der Speicher ist konfiguriert, um zu dienen
- der **Bestellungsmodus** der Kunde wählt innerhalb dieser Erfahrung aus, wie Lieferung, Abholung oder Einblendung

## Produktansicht

### Digital ist die Kernkundenauftragsfläche
Der digitale Kanal ist die Grundlage für App und Web-Bestellung. Dort wird die Menüverfügbarkeit kundenseitig sichtbar, wo die Online-Bestellung betriebsmäßig kontrolliert wird und wo die Storefront-Erfahrung aktiv wird.

Aus Produktperspektive gibt dies Teams ein klares Betriebssystem:

- Kunden sehen nur Live-Menüs, die dem digitalen Kanal dieses Speichers zugeordnet und veröffentlicht wurden
- **Akzeptieren von Online-Bestellungen* unterdrückt die Bestellung ohne größere Menüänderungen
- Speicherfrontverfügbarkeit kann auf der Speicherebene verwaltet werden, ohne die gesamte Produkterfahrung zu ändern

Dies macht Atlas betriebsbereit und hält die Customer Journey einfach.

### Bestellmodi live im Kanalerlebnis
Die Frontend-Reise behandelt bereits **delivery*, **pickup**, **dine-in**, ** Catering** und **scheduled ordering*** als Kundenauswahl. Der Admin Portal Guide beschreibt jedoch Kanaletiketten wie **Digital*, **Kiosk* und **In-Store**.

Die sauberste Produktinterpretation ist:

- **Digital** ist der Betriebskanal
- **delivery** und **pickup** sitzen in diesem digitalen Kanal als Kundenbestellmodi
- **Kiosk** und **In-Store** können eigene Menüstrategien und Erfahrungsregeln tragen

Diese Unterscheidung ist wichtig, weil sie es der Plattform ermöglicht, **Betriebsverteilung** von **Kunden Erfüllungsentscheidung** zu trennen.

### Channel-basierte Menüstrategie ist eine Stärke
Der Admin Portal Guide bestätigt, dass Läden verschiedene Menüs verschiedenen Kanälen zuordnen und unabhängig veröffentlichen können.

Das schafft einen starken Produktwert am Frontend:

- Produktverfügbarkeit kann zwischen app/web, kiosk und in-store bestellen
- Preisgestaltung, Bündel oder Kategoriestruktur kann durch Kanal unterschiedlich sein
- ein Menüwechsel kann auf einer Oberfläche erscheinen, bevor es auf einer anderen erscheint, wenn das Veröffentlichen von Kanal durch Kanal erfolgt

Dies ist besonders nützlich, wenn das Unternehmen die Erfahrung per Touchpoint anpassen will, anstatt ein Menü zu zwingen, jeden Anwendungsfall zu bedienen.

### Geplante Bestellungen werden kontrolliert, nicht angenommen
Der Admin Portal Guide dokumentiert eine **Allows Future Orders** toggle und stellt fest, dass es von einem unterstützten Bestellkanal abhängt.

Für die Frontend, diese Positionen geplant Bestellung als verwaltete Erfahrung:

- planmäßige Bestellung existiert als konfigurierbare Fähigkeit
- es erscheint nur, wo der Speicher und Kanal-Setup es unterstützen
- es kann selektiv eingeführt werden, ohne die gesamte Reise neu zu definieren

Das gibt den Märkten Raum, die Funktion absichtlich zu starten, anstatt es überall obligatorisch zu machen.

### Store-Operationen prägen das Kundenerlebnis direkt
Das Byte Portal stellt Speichersteuerungen wie **Accepting Online Orders* und speicherspezifische Menüveröffentlichung vor.

Das bedeutet, dass das Frontend speicherempfindlich ist durch Design:

- ein Speicher kann bestellt werden, während ein anderer vorübergehend nicht verfügbar ist
- ein Speicher kann ein digitales Menü anzeigen, während ein anderer kein digitales Live-Menü veröffentlicht hat
- temporäre Schließungen oder Betriebspausen können durch Speichereinstellungen anstelle eines Plattformausfalls erklärt werden

Dies ist ein wertvolles Produktmerkmal, weil es Betriebsteams ermöglicht, schnell zu reagieren und gleichzeitig ein einheitliches Plattformmuster zu erhalten.

## Empfohlene Positionierung

Der stärkste Weg, um Atlas heute zu positionieren ist:

- Atlas unterstützt mehrere Bestellkanäle pro Speicher
- Kanalnamen sind implementierungsspezifisch, mit Beispielen **Digital*, **Kiosk** und **In-Store**
- die digitale Customer Journey sitzt auf der digitalen Kanalkonfiguration eines Speichers
- Kundenorientierte Bestellmodi wie **delivery* und **pickup*** sind Erfahrungen innerhalb dieser digitalen Ebene, nicht dasselbe wie Admin Publishing Kanäle
- Menüsicht und Bestellverfügbarkeit werden durch per-store-Kanal-Beauftragung, veröffentlichen Zustand und Betriebshandschuhe geformt

:::tip
Wenn Sie marktspezifisches Frontend-Verhalten dokumentieren müssen, überprüfen Sie zuerst die aktuellen Channel-Etiketten und Menüzuweisungen in der **Menus*-Ansicht des Stores, dann beschreiben Sie die Customer Journey oben auf diesem operativen Setup.
:::

## Was wir vermeiden sollten Overstating

- dass alle Märkte dieselben drei Kundenkanäle nutzen
- dass jeder Kanal die gleichen Fähigkeiten unterstützt
- dass Aggregatorverhalten allein aus dem aktuellen Admin Portal Guide abgeleitet werden kann
- dass jeder bestimmte Markt in jedem Geschäft in der gleichen Weise eingesetzt wird,

## Byte Portal Quellen Hinter diesen Vermutungen

- [Menü eines Stores anzeigen](/docs/admin-portal-guide/stores/view-a-stores-menu/)
- [Neues Menü zuordnen](/docs/admin-portal-guide/stores/assign-new-menu/)
- [Menü veröffentlichen](/docs/admin-portal-guide/stores/publish-a-menu/)
- [Details zum Shop bearbeiten](/docs/admin-portal-guide/stores/edit-store-details/)
- [Akzeptieren Sie Online-Bestellungen (Turn On oder Off)](/docs/admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off/)
- [Zukünftige Bestellungen zulassen (Ein- oder Ausschalten)](/docs/admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off/)

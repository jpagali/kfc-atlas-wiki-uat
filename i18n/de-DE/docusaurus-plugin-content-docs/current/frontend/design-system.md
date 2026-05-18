---
title: "Design System"
sidebar_label: "Design System"
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# KFC Atlas Design System
### Wie unsere Plattform aufgebaut ist — Von der visuellen Identität zu Ihrem Bildschirm

---

## Was ist ein Design-System?

Denken Sie an ein Designsystem als **single Quelle der Wahrheit**, wie KFC digital aussieht und arbeitet – überall. Es ist das Set von Regeln, wiederverwendbaren Teilen und geteilten Tools, die sicherstellen, dass eine Schaltfläche in der KFC Australia App aussieht und sich konsequent über Web- und native Erfahrungen verhält. Ohne sie würde jeder Markt das gleiche von Kratzern wieder aufbauen, auf etwas andere Weise. Damit arbeitet jedes Team von derselben Stiftung.

Die KFC Atlas-Plattform wird von **Byte Helium**, Yum!s Enterprise Design System betrieben. So passt alles zusammen.

---

## Die drei Ebenen

### Ebene 1 — Design (wie es aussieht)

Alles beginnt in **Abbma**, dem Designwerkzeug des Atlas UI/UX Teams. Innerhalb von Figma verwaltet ein Plugin namens **Tokens Studio* *design tokens* — die Rohwerte, die die visuelle Identität von KFC definieren: Markenfarben, Schriftgrößen, Distanzeinheiten, Eckradien und mehr.

Von diesen Token baut das Team einen **UI Kit** – eine Bibliothek von fertigen Komponenten (Buttons, Karten, Navigationsbars, Eingabefelder), die Designer ziehen und fallen können, um neue Bildschirme zu erstellen. Jede Komponente im UI-Kit wird wieder zu den Token verdrahtet, so dass eine einzelne Farbe sich überall automatisch ändert.

> **In einfachen Worten:** Tokens Studio ist das Marken-Regelbuch. Das UI Kit ist die Box der Marken Lego-Stücke. Designer bauen Bildschirme durch die Montage dieser Stücke.

---

### Ebene 2 — Code (wie es gebaut wird)

Sobald ein Design genehmigt ist, übersetzen Ingenieure es in Arbeitscode mit den gleichen Design-Tokens - jetzt für die Verwendung in Software exportiert.

Ein **style Build-Prozess* nimmt diese Token und erzeugt zwei Sätze von Output:

- **Native Styles* — für iOS- und Android-Apps (die KFC mobile App auf Ihrem Handy)
- **Web-Styles* — für Browser-basierte Erfahrungen (die KFC-Website und Web-Bestellflussung)

Diese Stile ernähren sich in **Design System Components (DSC)** – die codierten Äquivalente des Designs UI Kit. Diese Komponenten sind die eigentlichen Bausteine Ingenieure verwenden, wenn sie neue Features für Atlas schreiben. Sie erzwingen Konsistenz, damit kein einzelnes Marktteam versehentlich eine falsch abgestimmte Schriftart oder eine Off-Marke-Farbe einführen kann.

> **In einfachen Worten:** Die Design-Token werden "kompiliert" in Code. Das Ergebnis ist eine Bibliothek von gebrauchsfertigen, on-brand Komponenten, die Ingenieure auf allen Märkten ziehen.

---

### Ebene 3 — Marktanwendungen (Was geht Live)

Am unteren Ende des Stapels sitzen die eigentlichen Anwendungen, die Kunden verwenden:

| Anwendungsbereich | Was es ist |
|---|---|
| **KFC Web App** | Die primäre Webauftragserfahrung für KFC-Märkte weltweit, gebaut auf Atlas |
| **Core Web App** | Die gemeinsame Web-Stiftung, die KFC Web App (und andere) wird auf der Oberseite gebaut |
| **Core Native App** | Die gemeinsame mobile Basis für native iOS/Android-Erfahrungen |

Jedes Marktfrontend wird aus den Core Apps und DSC Components oben zusammengesetzt – d.h. Märkte erhalten Konsistenz frei, und die Anpassung wird kontrolliert strukturiert verwaltet.

---

## Warum diese Materie für Atlas Markets

Für Märkte wie **Australien, UK, Deutschland und Singapur* bedeutet diese Architektur:

- **Geschwindigkeit* Keine gemeinsamen Elemente von Grund auf neu zu bauen. Neue Features auf dem Design-System Schiff gebaut schneller.
- **Consistency** — Die Marke KFC sieht auf jedem Bildschirm, in jedem Markt, auf jedem Gerät aus.
- **Skalierbarkeit** — Wenn Yum! einen Marken-Token aktualisiert (z.B. ein neues Rot), fließt er automatisch durch jede Markt-App.
- **Qualität** — Komponenten werden einmal auf Plattformebene getestet und von allen Märkten geerbt.

KFC Global Enablement and Market Success hilft jedem Markt den vollen Nutzen dieses Systems zu ziehen – das Übersetzen von Plattformfähigkeiten in marktreife Funktionen und der Surfacing-Markt braucht auf strukturierte Weise zurück zum Engineering-Team.

---

## Plattform Architekturdiagramm

Das folgende Diagramm zeigt, wie das Byte Helium Design System von Design-Token in Figma fließt – durch den Style Build Prozess – in Plattformkomponenten und schließlich in die KFC-Marktanwendungen Kunden verwenden.

<iframe
  src={useBaseUrl('/kfc-atlas-design-system-diagram.html')}
  width="100%"
  height="900px"
  style={{border: 'none', borderRadius: '12px'}}
/>
---

*Dokument vorbereitet von KFC Global Enablement and Market Success — KFC Global*

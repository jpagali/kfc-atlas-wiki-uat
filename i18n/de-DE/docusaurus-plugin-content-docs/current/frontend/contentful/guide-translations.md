---
title: "Leitfaden: Inhalt Übersetzungen"
sidebar_position: 10
---

# Leitfaden: Inhalt Übersetzungen

Nicht jedes Textstück auf der KFC-Website ist an einen bestimmten Inhaltstyp gebunden wie ein Produkt oder ein Homepage-Banner. Einige UI-Strings — Widget-Etiketten, Knopfkopie, Hilfetext, Fehlermeldungen — existieren unabhängig. Mit dem Übersetzungssystem in Contentful können Sie diese Strings verwalten und pro Sprache lokalisieren, indem Sie **Translator Mode** verwenden, um genau zu identifizieren, welche String Sie bearbeiten müssen.

---

## Wo Sie es im Frontend sehen

Übersetzungen beeinflussen Text, der auf der ganzen Seite erscheint – überall wird ein Etikett, eine Überschrift oder eine UI-String angezeigt. Beispiele sind:

- Die Location Widget-Prompt: *"Eingeben Sie Ihre Adresse, um lokale Menü & Angebote zu sehen"*
- Checkout-Schrittetiketten: *"Ihre Bestellung", "Delivery Details"*
- Buttontext: *"Add to Cart", "Weiter"*
- Fehlermeldungen und leere Zustandskopie

Wenn ein String innerhalb eines bekannten Content-Typs (wie ein Produkttitel oder eine Homepage-Überschrift) lebt, wird es eine Pfeilanzeige (→) im Translator-Modus zeigen, die Sie auf diesen Inhaltstyp-Eintrag verweist. Wenn kein Pfeil vorhanden ist, wird der String über den Inhaltstyp Übersetzung direkt verwaltet.

---

## Inhaltlich konfigurieren

### Sendemodus aktivieren

Translator-Modus ist ein Vorschau-Tool, das jedes Stück von Inhalten auf der KFC-Website mit seiner Übersetzungs-ID überlagert - lassen Sie erkennen, welche Contentful-Eintrag diesen Text steuert.

1. Öffnen Sie ein **incognito Browser-Fenster*
2. Navigieren Sie zur URL Ihres KFC-Marktes mit dem folgenden Parameter:
   ```
   https://{your_kfc_domain}/?previewContent=true
   ```
3. Toggle **Translator Modus ON** mit dem auf der Seite erscheinenden Knebel
4. Hover über jedes Textstück — seine **Translation ID** wird angezeigt (z.`locationWidget.Heading`)

Um den Translator Modus zu deaktivieren:
```
https://{your_kfc_domain}/?previewContent=false
```

### Aktualisierung einer Übersetzung

Sobald Sie den Übersetzungsausweis haben:

1. In Contentful, navigieren Sie zu **Content** → **Übersetzung** Inhaltstyp
2. **Eintrag hinzufügen**
3. Den **Translations-ID** einfügen (z.`locationWidget.Heading`) in das ID-Feld
4. Füllen Sie die Übersetzungskopie für ** alle Sprachen / Lokale** Ihr Markt unterstützt
5. Klicken Sie auf **Publish** — der aktualisierte Text erscheint auf der Live-Seite

:::tip
Wenn ein Text eine Pfeilanzeige (→) im Translator-Modus zeigt, bedeutet das, dass es in einem strukturierten Content-Typ (z.B. Homepage, Kategorie) lebt. Navigieren Sie stattdessen zu diesem Inhaltstyp-Eintrag, um den Text zu bearbeiten.
:::

---

## Anwendungsfälle

**Lieferung eines Widget-Labels* Wenn die Ortssuche auf Französisch und Englisch etwas anderes sagen muss, verwenden Sie Translator-Modus, um die ID zu finden und Übersetzungen für beide Einheimischen festzulegen.

**Fixing a UI string* — Wenn eine Schaltfläche oder ein Etikett eine falsche Kopie hat, verwenden Sie Translator-Modus, um sie zu lokalisieren, dann aktualisieren Sie den Translation-Eintrag in Contentful - keine Bereitstellung erforderlich.

**Einrichten einer neuen Sprache* Wenn Sie ein neues Lokal für einen Markt an Bord haben, verwenden Sie den Translation Content-Typ, um sicherzustellen, dass alle generischen UI-Strings in der neuen Sprache bevölkert werden.

**Market-spezifische Phrasing* — Auch innerhalb derselben Sprache können verschiedene Märkte unterschiedliche Kopien benötigen (z.B. "Basket" vs "Cart", "Delivery" vs "Takeaway"). Übersetzungen lassen jeden Markt seine eigenen Werte pro Lokale festlegen.

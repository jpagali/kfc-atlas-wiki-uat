---
title: "Leitfaden: Produktinhalt"
sidebar_position: 4
---

# Leitfaden: Produktinhalt

Produktinhalt ist, wo Sie einzelne Menüpunkte zum Leben bringen – die Zuordnung von Bildern, Titeln und die Anzeige von Details zu Produkten, die bereits im Byte Admin Portal erstellt wurden.

:::tip
Produkte **must existiert in Byte Admin Portal zuerst**, bevor sie in Contentful konfiguriert werden können. Produkte ohne Inhalt sind **verhitzt aus dem Menü*.
:::

---

## Wo Sie es im Frontend sehen

**Menu Produktkarten** — Jeder Artikel, der in einem Kategorie-Gitter (Name, Bild und Preis-Fliese) angezeigt wird, wird durch Contentful Produktcontent betrieben.

**Produktdetailseite* Wenn ein Kunde auf ein Produkt tippt oder klickt, zeigt die Detailansicht das Produktbild, den Titel und die Beschreibung aus Contentful.

**Variante Auswahl** (für Pizza-Märkte) — Pizza-Kruste, Größe und Topping-Optionen haben jeweils eigene Content-Einträge in Contentful, die die Modifier-Auswahl UI antreiben.

---

## Inhaltlich konfigurieren

### Veröffentlichen eines Produkts mit Inhalt

1. Klicken Sie auf **Eingabe** (die blaue Taste auf der rechten Seite des Bildschirms)
2. Wählen Sie aus der Dropdown-Liste der Inhaltstypen **Produkt***
3. Klicken Sie auf ** Wählen Sie aus Yum* ein bereits erstelltes Produkt
   - Produkte zeigen einen Statusabzeichen: **PUBLISHED** (grün), **DRAFT*** (gelb) oder **NEW** (violett)
   - Die Auswahl eines ÖFFENTLICHEN Produkts wird Sie veranlassen, vor dem Überschreiben bestehender Inhalte zu bestätigen
4. **Titel*** und **Zeichenauftrag***
5. Klicken Sie auf **+ Fügen Sie Medien** hinzu, um Bilder zuzuordnen — verwenden Sie ** Vorhandene Medien** für zuvor hochgeladene Assets oder ** Neue Medien** zum Hochladen neuer Bilder
6. Klicken Sie auf die grüne **Publish** Schaltfläche – oder verwenden Sie den Dropdown-Pfeil, um die Publikation zu einem späteren Zeitpunkt zu planen

### Pizza Crust Content veröffentlichen

1. Eintrag hinzufügen → auswählen **Pizza Crust**
2. Klicken Sie auf das Feld **Option Wert Code**, um die Krustenvariante auszuwählen
3. Über **+ Medien hinzufügen**
4. Veröffentlichen

### Pizza Größe Inhalt

1. Eintrag hinzufügen → wählen **Pizza Größe**
2. Klicken Sie auf das Feld **Option Wert Code**, um die Größe auszuwählen
3. Populiere den Titel und teile Bilder
4. Veröffentlichen

### Pizza Topping Inhalt

1. Eintrag hinzufügen → auswählen **Topping**
2. Klicken Sie auf das **Modifier Interner Name** Feld, um das Topping auszuwählen
3. Populiere den Titel und teile Bilder
4. Veröffentlichen

:::tip
Contentful ermöglicht es Ihnen nicht, einen doppelten Eintrag für ein Produkt, Kruste, Größe oder Topping zu erstellen, das bereits Inhalte veröffentlicht hat. Bearbeiten Sie stattdessen den vorhandenen Eintrag.
:::

---

## Anwendungsfälle

**Neue Menüpunkte starten* — Wenn ein Produkt in Byte Admin Portal erstellt wird, erstellen Sie seinen Contentful-Eintrag, um es live im Menü mit Bildsprache und einem Anzeigenamen zu bringen.

**Nach oben Produktfotografie** — Erfrischen Sie Bilder auf bestehende Produkte während Markenerfrischungen oder Saisonkampagnen, ohne Daten in Byte Admin Portal zu berühren.

** Produktbezeichnungen** — Marktspezifische Titel pro Lokal (z.B. "Zinger Burger" vs "Zinger Sandwich" je nach Markt).

**Scheduling ein Produkt enthüllen** — Verwenden Sie die geplante Veröffentlichung Dropdown, um ein neues Produkt zu einem bestimmten Zeitpunkt und zu einem bestimmten Zeitpunkt zu starten, ausgerichtet auf eine Kampagne starten.

**Pizzeria-Varianten verwalten** — Für Pizzamärkte konfigurieren Sie jede Kruste und Größe Option mit eigenem Bild, so dass Kunden ein genaues Bild bei der Anpassung ihrer Bestellung sehen.

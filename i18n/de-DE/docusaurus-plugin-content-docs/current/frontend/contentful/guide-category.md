---
title: "Leitfaden: Kategorie Inhalt"
sidebar_position: 3
---

# Leitfaden: Kategorie Inhalt

Kategorien sind, wie das KFC-Menü organisiert wird – Gruppierung von Produkten in Sektionen wie Chicken, Sides, Drinks oder Desserts. Inhaltlich können Sie die **-Sequenz** von Produkten innerhalb einer Kategorie steuern und **Unterkategorien** für mehr körnige Menüstruktur verwalten.

:::tip
Kategorien selbst werden in **Byte Admin Portal* erstellt und verwaltet. Inhaltlich ist, wo Sie Sequenzierung und Unterkategorie Struktur steuern. Produkte, die nicht in Contentful konfiguriert wurden, sind **verhitzt aus dem Menü*.
:::

---

## Wo Sie es im Frontend sehen

**Menu-Navigation** — Kategorien erscheinen als Top-Level-Navigation im Menü (z.B. "Burgers", "Sides", "Drinks"). Klicken Sie auf eine Kategorie nimmt den Kunden in ein Produktgitter.

**Unterkategorien** — Innerhalb einer Kategorie-Seite fungieren Unterkategorien als Registerkarten oder Filtergruppen (z.B. im "Hühner") als "Original Recipe", "Zinger", "Wraps"). Produkte werden innerhalb jeder Unterkategorie verschachtelt.

**Produktsequenz** Die Reihenfolge, in der Produkte innerhalb einer Kategorie oder Unterkategorie erscheinen, wird inhaltlich gesteuert. Wenn keine Sequenz in Contentful gesetzt wird, fällt die Reihenfolge auf das zurück, was in Byte Admin Portal definiert ist.

---

## Inhaltlich konfigurieren

### Sequenzierungsprodukte in einer Kategorie

1. Sobald die Kategorie in Byte Admin Portal mit zugewiesenen Produkten erstellt wurde, navigieren Sie den **Kategorie*** Eintrag in Contentful
2. Scrollen Sie bis zum Abschnitt **Menu Items**
3. Klicken Sie auf **Integrieren Sie die vorhandenen Inhalte** und wählen Sie die Produkte oder Bündel aus, die Sie enthalten möchten — klicken Sie auf **Select Einträge*, um zu bestätigen
4. Ziehen Sie den rechten Griff jedes Eintrags, um sie neu zu bestellen
5. Klicken Sie auf **Veröffentlichen Sie Änderungen*

### Erstellen einer Unterkategorie

1. Klicken Sie auf **Eingabe** (die blaue Schaltfläche rechts)
2. Suche und Auswahl **Unterkategorie**
3. Füllen Sie alle erforderlichen Felder (Name, Display-Etiketten, etc.)
4. Klicken Sie auf **Publish**

### Hinzufügen einer Unterkategorie zu einer Kategorie

1. Navigieren Sie zum entsprechenden Kategorieeintrag
2. Klicken Sie auf **Content**, dann ** Eintrag hinzufügen** und suchen Sie nach **Kategorie***
3. Wählen Sie den gewünschten Kategoriecode aus, füllen Sie die gewünschten Felder aus und fügen Sie die bestehende Unterkategorie als verknüpfter Eintrag hinzu
4. Klicken Sie auf **Publish**

### Sequencing Subkategorien

1. Navigieren Sie zum gewünschten Kategorieeintrag
2. Klicken Sie auf den Dreipunktgriff auf der rechten Seite jedes Unterkategorieneintrags
3. Ziehen und fallen in die gewünschte Position
4. Klicken Sie auf **Veröffentlichen Sie Änderungen*

### Sequenzierungsprodukte innerhalb einer Unterkategorie

1. Navigieren Sie zur Kategorie, die die Unterkategorie enthält
2. Klicken Sie auf die gewünschte Unterkategorie
3. Verwenden Sie den Dreipunktgriff, um Produkte in Auftrag zu ziehen und zu fallen
4. Klicken Sie auf **Publish**

---

## Anwendungsfälle

** Neuer Produktstart** Wenn ein neuer Artikel in Byte Admin Portal hinzugefügt wird, fügen Sie ihn hinzu und positionieren Sie ihn in der richtigen Kategorie Inhaltlich, so dass es sofort an der richtigen Stelle im Menü erscheint.

**Selbstmenü-Umstrukturierung** — Reorder-Produkte oder fördern eine Unterkategorie (z.B. "Holiday Specials" nach oben im Menü) für eine Werbezeit ohne Code-Eingabe.

**Marketspezifische Sequenzierung** — Verschiedene Märkte können unterschiedliche Bestellungen für dieselbe Kategorie wünschen. Jeder Marktinhalt kann unabhängig konfiguriert werden.

**Unterkategorie Einführung** — Fügen Sie eine neue Produktgruppe (z.B. "Plant-Based" oder "Shareboxes") als Unterkategorie unter einer bestehenden Kategorie ohne technische Unterstützung hinzu.

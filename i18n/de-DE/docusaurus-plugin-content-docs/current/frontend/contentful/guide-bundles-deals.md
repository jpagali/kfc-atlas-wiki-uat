---
title: "Leitfaden: Bundles & Deals"
sidebar_position: 5
---

# Leitfaden: Bundles & Deals

Bundles sind Kammgerichte — ein fester Satz von Produkten, die zusammen verkauft werden. Angebote sind Werbe-Gruppierungen, die Produkte oder Bündel zu einem besonderen Preis kombinieren, oft mit einem Ziel-Link für tiefere Navigation. Beide benötigen Content-Konfiguration in Contentful, nachdem sie im Byte Admin Portal eingerichtet wurden.

:::tip
Bundles and Deals ** muss in Byte Admin Portal zuerst** erstellt werden, bevor sie in Contentful konfiguriert werden können. Artikel ohne Inhalt sind **verhitzt aus dem Menü*.
:::

---

## Wo Sie es im Frontend sehen

**Bundle Karten** — Im Menü neben einzelnen Produkten erscheinen, ein Combobild, Titel und Preis zeigen. Kunden wählen ein Paket aus und passen die enthaltenen Artikel an.

**Deal-Karten** — Oberfläche im Menü oder auf einer dedizierten Deals-Seite. Ein Deal bündelt typischerweise ein oder mehrere Produkte oder Bundles unter Werbe-Framing und kann über eine Ziel-URI tief in eine bestimmte Seite oder Menü-Sektion verlinken.

Beide Inhaltstypen können auf der **Homepage* als Werbeartikel bei der Konfiguration angezeigt werden.

---

## Inhaltlich konfigurieren

### Veröffentlichen eines Bundle mit Inhalt

1. Klicken Sie auf **Eintrag hinzufügen** → wählen Sie **Bundle***
2. Klicken Sie ** Wählen Sie aus Yum** unter dem Feld Bundle Code ein bereits erstelltes Bündel aus
   - Contentful erlaubt keinen zweiten Eintrag für ein Paket, das bereits Inhalt hat — bearbeiten Sie den vorhandenen Eintrag stattdessen
3. **+ Fügen Sie Media** hinzu, um Bündelbilder hinzuzufügen
4. Klicken Sie auf die grüne **Publish** Taste – oder verwenden Sie den Dropdown-Pfeil, um ein zukünftiges Datum zu planen

### Einen Deal mit Inhalten veröffentlichen

1. Klicken Sie auf **Eingabe** → wählen Sie **Deal***
2. Bevölkern Sie die erforderlichen Felder:
   - **Titel auf Englisch* und **Titel auf Spanisch** (oder relevante zweite Lokale)
   - **Item(s)* — Hinzufügen bestehender Produkte oder Bundles über **Verfügbare Inhalte**
   - **Target URI** — der Pfad, den die Deal-Karte angibt, wenn er tippt
3. **+ Media*** hinzufügen, um Deal-Bilder zuzuordnen
4. Sie können auf jedes verlinkte Produkt oder Bundle innerhalb des Deal-Eintrags klicken, um Edits zu machen
5. Klicken Sie auf **Publish** – oder über den Dropdown

---

## Anwendungsfälle

** Neue Kammmehl** Wenn ein Paket in Byte Admin Portal erstellt wird, erstellen Sie seinen Contentful-Eintrag mit Bildsprache und einem Displaytitel, so dass es auf dem Menü mit der richtigen visuellen Behandlung erscheint.

**Promotionale Deal-Seite** — Erstellen Sie einen Deal-Eintrag, der mehrere Produkte unter einem Kampagnennamen (z.B. "Familienfest") und Links zu einer dedizierten Deal-Landing-Seite enthält.

**Scheduling ein befristetes Angebot** Verwenden Sie die geplante Veröffentlichung, um ein Paket oder Deal zu starten, um live zu gehen, und eine andere Veröffentlichung, um es am Ende zu entfernen.

**Cross-market deals** — Verschiedene Märkte können separate Deal-Einträge mit lokalisierten Titeln und Bildern für das gleiche zugrunde liegende Produktangebot konfigurieren.

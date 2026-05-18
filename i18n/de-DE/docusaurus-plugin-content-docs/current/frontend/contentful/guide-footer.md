---
title: "Leitfaden: Footer Content"
sidebar_position: 8
---

# Leitfaden: Footer Content

Die **Global Footer** erscheint unten auf jeder Seite auf der KFC-Website. Inhaltlich können die Märkte die Navigationsabschnitte, Links und verknüpfte Vermögenswerte (einschließlich PDFs) des Fußers konfigurieren, ohne dass technische Unterstützung erforderlich ist.

---

## Wo Sie es im Frontend sehen

Die Fußzeile ist in **Navigationsabschnitte* unterteilt, die jeweils eine Gruppe von Links enthalten. Gemeinsame Abschnitte auf den Märkten umfassen:

| Abschnitt | Typische Inhalte |
|---------|-----------------|
| **Menu** | Links zu Menükategorien (z.B. Huhn, Seiten, Getränke) |
| **Policies / Políticas** | Datenschutz, Nutzungsbedingungen |
| **Verbrauchspolitik** | Lieferbedingungen, FAQs |
| **FAQ** | Häufig gestellte Fragen |
| **Verschiedene Inhalte* | Nährwertinformationsseiten oder herunterladbare PDFs |
| **Help und Service / Ayuda y Servicio** | Kontaktlinks zum Kundendienst |

Jeder Link in einem Abschnitt kann auf einen internen Seitenpfad (innerhalb der KFC-Website) oder eine externe URL hinweisen.

---

## Inhaltstypen Übersicht

Vor der Bearbeitung hilft es, die drei Contentful Content-Typen zu verstehen:

| Inhaltsart | Was es ist | Wo sie lebt |
|---|---|---|
| ** Global Footer** | Der obere Container — hält alle Abschnitte | Inhalt → Global Footer |
| **Footer Navigationsbereich** | Eine benannte Gruppe von Links (z.B. "Policies") | Erstellt im Global Footer |
| **Footer Link** | Ein einziger Klicklink mit Text und Ziel | Erstellt innerhalb einer Footer Navigation Sektion |

---

## Hinzufügen einer neuen Sektion zum Footer

**Step 1:** In Contentful, navigieren Sie zu **Content** und suchen Sie nach **Global Footer**. Öffnen Sie den Eintrag.

**Step 2:** Klicken Sie innerhalb des Global Footer-Eintrags auf ** Inhalt hinzufügen*, um einen neuen Abschnitt hinzuzufügen.

**Step 3:** Wählen Sie **Footer Navigation Sektion** aus den Inhaltsoptionen.

**Step 4:** Füllen Sie die Abschnittsdetails:

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Section Name (Englisch)* | Das Label für diese Gruppe von Links | z.B. "Policies", "FAQ", "Help" |
| **Section Name (Spanisch)** | Lokalisiertes Etikett, wenn Ihr Markt Spanisch verwendet | z.B. "Políticas". Nichtzutreffendes streichen. |

**Step 5:** Sobald der Abschnitt gespeichert ist, können Sie beginnen, Footer Links darin hinzuzufügen (siehe[Einen Footer Link erstellen](#creating-a-footer-link)unten).

:::tip
Abschnittsauftrag im Footer entspricht der Reihenfolge der Abschnitte im Global Footer Eintrag. Ziehen Sie Abschnitte nach oben oder unten, um sie neu zu bestellen.
:::

---

## Einen Footer Link erstellen {#creating-a-footer-link}

**Step 1:** Innerhalb einer **Footer Navigation Sektion** klicken Sie auf **Inhalt** → **Neue Inhalte** → **Footer Link**.

**Step 2:** Füllen Sie die Felder Footer Link:

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Link Text** | Das sichtbare Etikett in der Fußzeile | z.B. "Privacy Policy", "Allergen Information" |
| **Link** | Wenn Sie anklicken, sehen Sie die **Link Eintrag* Felder unten | Erforderlich |
| **Image** | Ein optionales Symbol oder Logo, um den Link zu begleiten | Konsultieren Sie Ihren Entwickler vor der Nutzung – nicht alle Footer Layouts unterstützen Bilder. |

**Step 3:** Füllen Sie im **Link*-Eintrag aus:

| Feld | Eingeben | Anmerkungen |
|-------|--------------|-------|
| **Identifier** | Ein interner Referenzname (nicht dargestellt) | z.B.,`footer-privacy-link`. Hilft Editoren, den Eintrag später zu finden. |
| **Link Text** | Das Textlabel für diesen Link | Sollte das Feld Footer Link's **Link Text** entsprechen |
| ** Internal Path** | Pfad zu einer Seite innerhalb der KFC-Website | z.B.,`/privacy`, `/faq`. Verwenden Sie dies für auf der KFC Website gehostete Seiten. |
| ** | Vollständige externe URL | z.B.,`https://partner.com/delivery-terms`. Verwenden Sie dies für Drittseiten. |

:::caution
Verwenden Sie entweder **Internal Path* oder **URL** — nicht beides. Wenn beide eingefüllt sind, konsultieren Sie Ihren Entwickler, um zu bestätigen, welche Priorität in der Umsetzung Ihres Marktes hat.
:::

**Step 4:** Veröffentlichen Sie in dieser Reihenfolge, um sicherzustellen, dass Änderungen richtig laufen:

1. Veröffentlichen Sie den Eintrag **Link**
2. **Footer Link** Eintrag veröffentlichen
3. Veröffentlichen Sie die **Footer Navigation Sektion**
4. **Re-publish the Global Footer** — dieser letzte Schritt ist erforderlich, um Änderungen auf der Live-Seite anzuzeigen.

:::caution
Vergessen Sie, die **Global Footer** neu zu veröffentlichen, ist der häufigste Grund, warum Footer-Änderungen nicht auf der Live-Seite erscheinen. Vervollständigen Sie alle vier veröffentlichen Schritte.
:::

---

## Hinzufügen eines Linked PDF zum Footer

Verwenden Sie dies, wenn Sie auf ein herunterladbares Dokument (z.B. Ernährungsinformationen, Allergentabellen oder Begriffe PDFs) vom Footer verlinken müssen.

**Step 1:** In Contentful, gehen Sie zu **Media** und klicken Sie auf ** Neues Asset hinzufügen** → **Einzelvermögen***.

**Step 2:** Geben Sie dem Asset einen beschreibenden Titel (z.B. "Nutritional Information PDF – AU 2024") und laden Sie die PDF-Datei hoch.

**Step 3:** Klicken Sie einmal hochgeladen auf das **Download-Symbol* neben dem Asset, um die direkte URL in die Datei zu kopieren.

**Step 4:** Verwenden Sie diese URL als **URL** Feld in einem Footer Link Eintrag (siehe[Einen Footer Link erstellen](#creating-a-footer-link)oben).

:::tip
Nennen Sie Ihre PDF-Assets eindeutig und beinhalten Sie den Markt und das Datum im Titel – das macht es einfacher, sie zu finden und zu ersetzen, wenn sie aktualisiert werden.
:::

---

## Anwendungsfälle

**Neue Richtlinienseite** — Eine neue Datenschutz- oder Serviceseite wurde auf der KFC-Website veröffentlicht. Fügen Sie es als Footer Link in den Richtlinien Abschnitt mit seinem internen Pfad (z.B.`/privacy-policy`), so können Kunden immer die neueste Version finden.

**Nutritional PDF** — Laden Sie eine aktualisierte Nährwertinformation PDF auf Contentful Media hoch, kopieren Sie die direkte URL und verlinken Sie sie aus dem Abschnitt "Nahrungsinhalte". Keine Ingenieurarbeiten erforderlich.

**Regionale Fußstruktur** — Märkte können verschiedene Sektionsnamen und Link-Sets konfigurieren, um den lokalen gesetzlichen Anforderungen, Spracheinstellungen und Navigationsanforderungen gerecht zu werden. Jeder Markt verwaltet seinen eigenen Global Footer Eintrag unabhängig.

**Externe Kampagne Landing Page** — Fügen Sie vorübergehend einen Link hinzu, der auf eine Kampagne Microsite oder eine externe Landingpage während einer Werbezeit zeigt. Entfernen oder aktualisieren Sie den Link, wenn die Kampagne endet.

---

## Ähnliche Anleitungen

- [Anleitung: SEO](/docs/frontend/contentful/guide-seo)— Titel und Meta-Beschreibungen verwalten
- [Inhaltliche Übersicht](/docs/frontend/contentful/)— Wie Contentful über die Plattform arbeitet
- [Frontend Übersicht](/docs/frontend/overview)— Der breitere Kontext der Frontend-Plattform

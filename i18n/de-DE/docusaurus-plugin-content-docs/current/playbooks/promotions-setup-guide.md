---
title: Angebote Setup Guide
sidebar_label: Angebote Setup Guide
---

# Angebote Setup Guide

Eine praktische, feldweise Referenz für Bauaktionen im Byte Commerce Byte Portal. Dieser Leitfaden führt Sie durch jeden Schritt des Assistenten, erklärt jede Option, und endet mit einem Rezeptblatt der häufigsten Werbetypen, die Sie mit der Plattform heute bauen können.

:::tip
Promotionen werden immer einer **Store Group* zugeordnet, nie in einem einzigen Store. Stellen Sie sicher, dass Ihre Ziel-Shops bereits gruppiert sind, bevor Sie eine Promotion erstellen.
:::

:::tip
Screenshots für diesen Leitfaden werden erfrischt. Die nachfolgende schriftliche Setupführung bleibt die Quelle der Wahrheit für die Fluss- und Felddefinitionen.
:::

---

## Was Sie bauen können

Die Byte Commerce Promotions-Engine unterstützt die folgenden Promotion-Typen aus dem Kasten:

| Aktionsart | Wie es funktioniert |
|---|---|
| **Prozentsatz** | Nehmen Sie X% von einem Artikel, einer Gruppe von Gegenständen oder der gesamten Bestellung |
| **Ausgewählte Beträge** | Reduzieren Sie den Warenkorb oder Artikelpreis durch einen festgelegten Dollar/Währungsbetrag |
| **Fixed Price* | Richten Sie einen bestimmten Preis für ein Qualifying (z.B. $5 Burger) |
| **Buy One Get One (BOGO)* | Erfordern Sie Artikel Anwesenheit + gelten einen 100% Rabatt oder festen Preis auf einen zweiten Artikel |
| **Minimum Rabatt** | Auslösen Sie einen Rabatt nur, wenn der Wagen eine Untergrenze erreicht |
| **Channel-Exclusive Deal* | Einschränkung einer Promotion auf bestimmte Bestellplattformen (z.B. nur app-only, lieferung-only) |
| ** Time-Limited Promotion* | Führen Sie einen Deal nur während bestimmter Termine, Tage oder Stunden |
| **Ccasion-Specific Deal* | Beschränken Sie eine Promotion auf einen bestimmten Bestelltyp (z.B. nur Laufwerk Thru, Lieferung) |
| **Kostenlose Lieferung** | Rabatt oder Null Lieferung, Service oder regulatorische Gebühren |
| **Loyal Member Discount** | Einschränkung der Werbung nur für registrierte Kunden |
| **Coupon Code Promotion** | Erfordern Sie einen Erlösungscode für den Kunden, um den Deal zu entsperren |
| **Manager Override Rabatt* | Erfordern Sie einen Manager PIN oder eine Unterschrift bei POS, um den Rabatt anzuwenden |
| **Serialisierte / einzigartige Codes* | Generieren Sie individuelle Einmalauslösungscodes pro Kunde |

## Recipe Pages

Verwenden Sie diese dedizierten Rezeptseiten, wenn Sie einen schnelleren Ausgangspunkt für die häufigsten KFC-Werbungsmuster wünschen:

- [Rezept 1 - Kaufen 1 Erhalten 1 Kostenlos (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/)
- [Mindestpreis](/docs/playbooks/promotion-recipes/minimum-spend-discount/)
- [Rezept 3 - App-Exclusive Deal](/docs/playbooks/promotion-recipes/app-exclusive-deal/)
- [Rezept 4 - Mittagessen Special (Time-Limited)](/docs/playbooks/promotion-recipes/lunch-special-time-limited/)
- [Rezept 5 - Kostenlose Lieferung auf großen Bestellungen](/docs/playbooks/promotion-recipes/free-delivery-on-large-orders/)
- [Rezept 6 - Registrierter Kunde Exklusiv](/docs/playbooks/promotion-recipes/registered-customer-exclusive/)
- [Rezept 7 - Gutscheincode Rabatt](/docs/playbooks/promotion-recipes/coupon-code-discount/)
- [Rezept 8 - Drive-Thru Nur Deal](/docs/playbooks/promotion-recipes/drive-thru-only-deal/)
- [Rezept 9 - Tagesausflug (seit Kunden pro Tag)](/docs/playbooks/promotion-recipes/daily-deal-once-per-customer-per-day/)
- [Rezept 10 - Stacked Multi-Condition Promotion](/docs/playbooks/promotion-recipes/stacked-multi-condition-promotion/)

---

## Der 4-Step Wizard

Jede Promotion wird durch einen 4-stufigen Assistent erstellt: **Basic Information → Anforderungen → Effekte → Review*. Sie können zwischen Schritten mit dem linken Schritt-Panel navigieren und auf jeden abgeschlossenen Schritt aus dem Review-Bildschirm zurückspringen.

---

## Schritt 1 — Grundinformationen

Dieser Schritt definiert die Identität der Promotion, wie sie ausgelöst wird und wie oft sie verwendet werden kann.

### Erforderliche Felder

| Feld | Eingeben |
|---|---|
| **Promotion Name*** | Interner Name für Betreiber — nicht den Kunden angezeigt. Deskriptiv sein: z.`BOGO Zinger – May 2024` |
| ** Kombinierbar mit anderen Promotions** | `No`— die Beförderung kann nicht mit anderen in demselben Wagen stapeln.`Yes`— kann es. Fehler`No`. |

### Standardfelder

| Feld | Eingeben |
|---|---|
| ** Name anzeigen** | Der auf Bestellkanälen angezeigte Kundenname. Halten Sie es kurz und überzeugend: z.B.,`Buy 1 Get 1 Free Zinger` |
| **Beschreibung** | Erklärt die Förderung an Kunden auf der Bestellschnittstelle |
| **Max Promo verwendet Pro Cart** | Wie oft kann diese Promotion innerhalb einer einzigen Bestellung gelten. Fehler`1`. Setzen Sie höher für Werbeaktionen, die für mehrere Artikel im gleichen Warenkorb gelten können |
| **Max Gesamtförderungsbetrag** | Erfasst den gesamten Rabattwert, der von dieser Promotion in einem einzigen Warenkorb angewendet werden kann. Blätter leer für keine Kappe |

### Automatische vs. Ablösung Code

| Einstellung | Wann zu verwenden |
|---|---|
| **Automatisch: Nein** (Standard) | Ein Kunde muss einen Erlösungscode eingeben, um die Förderung auszulösen |
| **Automatik: Ja** | Die Aktion feuert automatisch, wenn Anforderungen erfüllt werden — kein Code erforderlich |

:::caution
Schalter **Automatisch** von`No`bis`Yes`**permanently entfernen** alle Rücknahmecodes, die Sie bereits hinzugefügt haben. Tun Sie dies, bevor Sie Codes hinzufügen, nicht danach.
:::

Klicken Sie auf **ADD REDEMPTION CODE**, um einen oder mehrere Codes zu befestigen, wenn Automatischer`No`.

### Zusätzliche Optionen

Klicken Sie auf **HINWEIS ADDITIONAL OPTIONEN**, um diese Felder zu zeigen:

| Feld | Eingeben |
|---|---|
| **Legal Text** | Jeglicher rechtlicher Haftungsausschluss neben der Promotion (z.B. Geschäftsbedingungen) |
| **Reporting Code** | Ein interner Code für Tracking und Analytik in externen Meldesystemen |
| **Katalog Tags** | Tags verwendet, um diese Promotion in Katalogintegration zu kategorisieren |
| **Zur Anzeige des POS Buttons** | Toggle`Yes`um diese Aktion als Shortcut-Taste im Yum erscheinen zu lassen! POS Schnittstelle |
| **Public** | Toggle`Yes`diese Förderung auf Web- und Mobile-Kanälen zu ermöglichen |

---

## Schritt 2 — Anforderungen

Anforderungen definieren die **Bedingungen* ein Kunde muss sich erfüllen, bevor die Promotion aktiviert. Sie können mehrere Anforderungen an eine einzelne Aktion hinzufügen — alle müssen für die Förderung zum Feuer zufrieden sein. Klicken Sie auf **ADD REQUIREMENT**, um zusätzliche Bedingungen zu stapeln.

---

### Kanal

Beschränkt die Förderung auf eine oder mehrere bestimmte Bestellplattformen. Wählen Sie alle Kanäle aus, in denen diese Aktion aktiv sein sollte.

| Feld | Optionen |
|---|---|
| **Select Channels*** | Web, Mobile, iOS, Android, POS, Kiosk, DoorDash, Uber Eats, Grubhub, Deliveroo, Just Eat, Call Center |

**When to use:** App-exklusive Angebote, Lieferung Aggregator Promotionen, oder POS/kiosk-only Angebote.

---

### Artikel Ausschluss

Verhindert, dass bestimmte Gegenstände für die Förderung in Betracht kommen. Die hier aufgeführten Punkte werden ausdrücklich von den Aktionszielen ausgeschlossen.

| Feld | Optionen |
|---|---|
| **Ihr Typ*** | Produkt, Variante, Bundle, Promo Tag |
| **Select Code** | Suchen und wählen Sie den spezifischen Artikel aus |

**When to use:** Ein standortübergreifender Rabatt, der nicht auf Prämien oder bereits ausgewiesene Gegenstände gelten sollte.

---

### Artikel Präsenz

Der Warenkorb muss mindestens eine Mindestmenge eines oder mehrerer spezifizierter Gegenstände enthalten. Verwenden Sie dies, um zu verlangen, dass ein Kunde tatsächlich das qualifizierte Produkt in ihrem Warenkorb hat.

| Feld | Eingeben |
|---|---|
| **Minimum Menge*** | Die minimale kombinierte Menge der Qualifikationsgegenstände, die in den Warenkorb gelegt werden müssen |
| **Equal oder weniger Wert** | Vergleicher für die Preisüberprüfung — gleich- oder kleinerwertig |
| **Qualifying Items — Item Type** * | Produkt, Variante, Bundle oder Promo Tag |
| **Qualifying Items — Wählen Sie Code** * | Suchen und wählen Sie den speziellen Qualifying-Artikel |
| ** VALUE FILTER* | Weitere Filter nach Optionswerten (z.B. nur eine bestimmte Größe oder Geschmack) |

Klicken Sie auf **ADD ITEM TYPE**, um mehrere Qualifying-Elemente hinzuzufügen – der Kunde braucht mindestens eines davon in seinem Warenkorb.

**When to use:** BOGO Setups, Essensbedarf oder "Produkt X kaufen, um Rabatt auf Y zu erhalten."

---

### Artikel Menge

Der Warenkorb muss eine minimale Gesamtzahl von Gegenständen über die gesamte Bestellung enthalten — kein bestimmtes Produkt erforderlich.

| Feld | Eingeben |
|---|---|
| **Minimum Gesamtartikel*** | Die Mindestanzahl der Einzelteile muss der Warenkorb enthalten |

**When to use:** "Order 3 oder mehr Artikel und erhalten einen Rabatt"-Typ Promotionen.

---

### Manager Zulassung

Erfordert einen Manager, die Promotion am Point of Sale zu autorisieren, bevor es angewendet wird. POS-only verwenden Fall.

| Feld | Optionen |
|---|---|
| * | `PIN`— Manager tritt ihre PIN auf dem POS-Gerät ein.`SIGNATURE`— Sachbearbeiter |

**When to use:** Diskretionäre Rabatte, Beschwerdebeschlüsse oder jede Promotion, die vom Kunden nicht selbstverdient werden sollte.

---

### Max Anzahl der Zeiten eine Förderung kann verwendet werden

Setzt eine globale Hard-Cap auf totale Relemptionen über alle Kunden und die ganze Zeit. Sobald die Grenze erreicht ist, hört die Förderung auf, für jeden zu arbeiten.

| Feld | Eingeben |
|---|---|
| **Max Anzahl der Zeiten, die eine Promotion verwendet werden kann** * | Geben Sie eine ganze Zahl ein — z.`1000`für eine First-come-first-served Promotion |

**When to use:** Flash-Verkäufe, limitierte Werbeaktionen oder jedes Angebot mit einem festen Bestand an Rabatten.

---

### Max Gesamtverwendung pro Kunde

Limitiert, wie oft ein einziges Kundenkonto diese Promotion über ihr Leben einlösen kann (kein tägliches Rücksetzen).

| Feld | Eingeben |
|---|---|
| **Max Gesamteinsatz pro Kunde** * | Geben Sie eine ganze Zahl ein — z.`1`für eine einmalige Nutzungs-pro-Kundenförderung |

**When to use:** Willkommensangebote, einmalige Geburtstagsaktionen oder "nur erste Bestellung" Angebote.

---

### Maximale Gesamtnutzung pro Kunde pro Tag

Wie oben, aber der Zähler setzt jeden Tag um Mitternacht zurück.

| Feld | Eingeben |
|---|---|
| **Max Gesamtbenutzer pro Tag** * | Geben Sie eine ganze Zahl ein — z.`1`für ein einmaliges Angebot |

**When to use:** Tägliche Angebote, wiederkehrende Treuebelohnungen oder "ein kostenloses Element pro Tag" Promotionen.

---

### Max Gesamtbenutzer pro Erlösungscode

Erfasst, wie oft ein bestimmter Erlösungscode verwendet werden kann, unabhängig davon, welche Kunden es verwenden.

| Feld | Eingeben |
|---|---|
| **Max Gesamtbenutzer pro Erlösungscode** * | Geben Sie eine ganze Zahl ein — z.`1`für einen Einwegcode oder`50`für einen gemeinsamen Code mit begrenzten Verwendungen |

**When to use:** Batch-Coupon-Codes, Influencer-Promo-Codes mit einer Verwendungskappe oder serialisierte Codes, die an eine bestimmte Anzahl von Kunden ausgegeben werden.

---

### Gelegenheit

Beschränkt die Beförderung auf einen bestimmten Auftragserfüllungstyp. Anders als Channel — das ist etwa *wie* der Kunde nimmt seine Bestellung auf, nicht wo sie es platziert.

| Feld | Optionen |
|---|---|
| * | Carryout, Catering, Lieferung, Eintauchen, Fahren Sie Thru |

**When to use:** Drive-Thru-only Angebote, Lieferung Promotionen oder Dine-In Specials.

---

### Teilsumme

Der Warenkorb muss einen minimalen Gesamtwert vor der Aktion erreichen.

| Feld | Eingeben |
|---|---|
| **Minimum Subtotal** | Der Schwellenwert, z.`$20.00`. Fehler`$0.00` |
| ** Berechnungsmodus** | **Aktueller Subtotal** — prüft den Warenkorbwert * bevor* weitere Rabatte angewendet werden (Standard). ** Gezählte Subtotal** — Prüft den Wert *nach* Factoring in allen anderen aktiven Aktionen |
| ** Ohne Artikel** (Zug) | Geben Sie Elemente an, die *not* auf die Subtotalschwelle zählen sollten. Set **Item Type**, **Select Code*** und **Quantity to be out** für jeden |

**When to use:** "Spend $30 und erhalten $5 off" oder "freie Lieferung auf Bestellungen über $25."

---

### Zeitrahmen

Beschränkt die Förderung auf bestimmte Datumsbereiche, Tage der Woche und Stunden des Tages. Mehrere Zeitrahmen können hinzugefügt werden, um verschiedene Fenster (z.B. Mittagsstunden Mon–Fri und den ganzen Tag Samstag).

| Feld | Eingeben |
|---|---|
| **Validate gegen aktuelle Zeit** | Überprüfen Sie dies, um zu validieren, wenn die Bestellung *placed* |
| **Validate gegen beantragte Erfüllungszeit* | Überprüfen Sie dies, um zu validieren, wenn die Bestellung *geplant ist, um erfüllt zu werden*. Mindestens eine muss ausgewählt werden |
| **Startdatum* | Das erste Datum der Aktion ist aktiv. Lassen Sie leer für keine Startdatum Einschränkung |
| ** Enddatum** | Das letzte Datum der Aktion ist aktiv. Lassen Sie leer für keine Enddatum Einschränkung |
| **Day Range*** | Wählen Sie einzelne Tage (Su Mo Tu We Th Fr Sa) oder überprüfen Sie **All Week** |
| ** Interval Start Time*** | Die Aktion wird täglich aktiv — Format`HH:MM:SS`(z.`11:00:00`) |
| **Intervalle Endzeit*** | Die Zeit, in der die Aktion jeden Tag aufhört — Format`HH:MM:SS`(z.`14:00:00`) |
| **Weight**** | Ein Prioritätswert, der verwendet wird, wenn sich mehrere Zeitrahmen überlappen — höheres Gewicht nimmt Vorrang |
| **Ist Blackout Timeframe?* | Toggle`Yes`*invert* dieses Fenster — die Förderung ist gültig *outside* diese Periode statt innerhalb davon |
| ** UTC verwenden* | Überprüfen Sie dieses Feld, um alle Zeiten in UTC anstelle der lokalen Zeitzone des Speichers einzutragen |

Klicken Sie auf **ADD ANOTHER TIME FRAME**, um zusätzliche Fenster innerhalb der gleichen Anforderung zu definieren.

**When to use:** Mittagsangebote (11 bis 22 Uhr), Wochenend-Spezialitäten, befristete Kampagnen mit definiertem Start- und Enddatum.

---

### Benutzerstatus

Beschränkt die Aktion auf der Grundlage, ob der Kunde ein registriertes Konto hat.

| Feld | Optionen |
|---|---|
| **Ist registrierter Kunde?* | `Yes`— Förderung ist nur für eingeloggte Kontoinhaber verfügbar.`No`— Förderung nur für Gastkunden verfügbar |

**When to use:** Loyalty Mitglied exklusive, New-user Welcome-Angebote (nur für Sie), oder kontobasierte Belohnungsprogramme.

---

## Schritt 3 — Auswirkungen

Effekte definieren **, welchen Rabatt oder Belohnung der Kunde erhält**, wenn alle Anforderungen erfüllt sind. Sie können mehrere Effekte mit der **ADD EFFECT* Knopf oben rechts hinzufügen. Jeder Effekt hat ein Müll-Symbol, um es zu löschen.

:::caution
Das Warnbanner — *"Es gibt Probleme mit folgenden Effekten, die behoben werden müssen, bevor die Förderung gespeichert werden kann"* — erscheint, wenn ein benötigtes Feld in einem Effekt unvollständig ist. Alle Effekte müssen vollständig konfiguriert werden, bevor Sie zur Überprüfung fortfahren können.
:::

Es gibt drei Effektarten:

---

### Wirkungsart: Bestellebene

Gilt für den Rabatt auf das Subtotal*****, nicht auf einzelne Artikel.

| Feld | Eingeben |
|---|---|
| **Preiseffekt Typ** * | Siehe Tabelle unten — Order Level unterstützt 4 Typen |
| ** Zählwert** * | Der Prozentsatz oder der Betrag je nach gewähltem Pricing-Effekt-Typ |
| **Discount Distribution** | **Subtotal Price** — gilt als einzige Ermäßigung auf das Subtotal (Standard). **Distribute über alle Artikel im Warenkorb* — verteilt den Rabatt proportional auf alle Warenkorb Artikel |
| ** Ohne Artikel** * | Artikel, die hier aufgelistet sind, zählen nicht zu oder erhalten den Rabatt auf Bestellebene. Produkttyp + Code für jeden. Klicken Sie auf **ADD ANOTHER ITEM TYPE**, um mehrere Elemente auszuschließen |
| **Inklusive Artikel** | Begrenzt den Effekt nur auf die angegebenen Punkte. **Anmerkung:** Included Items ist deaktiviert, solange keine Ausgeschlossenen Gegenstände vorhanden sind — entfernen Sie alle ausgeschlossenen Gegenstände zuerst, um diesen Abschnitt zu ermöglichen |

**Pricing Effect Types verfügbar für Bestellebene:**

| Typ | Was es tut |
|---|---|
| **Prozent** | Verringert die Auftragssumme um einen festen Prozentsatz — z.B. 10% off |
| ** Betrag ab** | Reduziert den subtotalen Auftrag um einen festen Währungsbetrag — z.B. $5 off |
| **Variabler Prozentsatz** | Prozentsatz-Rabatt, der variiert — typischerweise mit serialisierten oder dynamischen Codes verwendet |
| **Variabler Betrag ab* | Festbetrag Rabatt, der je nach Code oder Zustand variiert |

---

### Wirkungsart: Artikelebene

Gilt nur für den Rabatt auf **spezifische Qualifying-Elemente*, nicht für den gesamten Auftrag. Bietet die meisten körnigen Kontrolle über das, was reduziert wird und wie viel.

| Feld | Eingeben |
|---|---|
| **Preiseffekt Typ** * | Siehe Tabelle unten — Artikel Level unterstützt 6 Typen |
| ** Zählwert** * | Prozentsatz, Betrag oder Festpreis je nach gewähltem Typ |
| ** Zielpreis** | **Lowest** — der Rabatt richtet sich an die günstigste Qualifizierung im Warenkorb (Standard). **Highest** — der Rabatt zielt auf den teuersten Qualifying-Artikel |
| **Target Alle Artikel** | **No** — der Effekt gilt nur für eine Instanz des ersten Matching-Elements (Standard). **Ja** — der Effekt gilt für jeden passenden Artikel im Warenkorb |
| **Qualifying Items** * | Die Artikel, die dieser Rabatt gilt. Klicken Sie auf **+ ADD ITEMS UND DEFINE EFFECTS**, um die Artikelauswahlschublade zu öffnen |

**Qualifying Items Schublade — Qualifying Items und Define Target Effects auswählen:**

| Abschnitt | Feld | Eingeben |
|---|---|---|
| **Select Items* | Art der Ware | Produkt, Variante, Bundle |
| **Select Items* | Produkt auswählen / Variante / Bundle | Suchen und wählen Sie das Qualifying-Element aus. Ausgewählte Artikel erscheinen in einer Tabelle mit Produktname und Produktcode |
| ** Zieleffekte definieren* | Basispreis | Der Rabatt gilt nur für den Basispreis des Produkts (ausgenommen Modifikatoren) |
| ** Zieleffekte definieren* | Basispreis mit Modifiern | Der Rabatt gilt für den Basispreis plus ausgewählte Modifier (Standard) |
| ** Zieleffekte definieren* | Target Modifiers zum Rabatt | Toggle`Yes`die Kosten der Modifizierungsmittel in den ermäßigten Betrag einzubeziehen |

Klicken Sie auf **ADD PRODUKTE UND EFFEKTE**, um zu bestätigen.

**Pricing Effekt Typen verfügbar für Item Level:**

| Typ | Was es tut |
|---|---|
| **Prozent** | Verringert den Preis des qualifizierten Gegenstands um einen festen Prozentsatz |
| ** Betrag ab** | Verringert den Preis des Qualifying Items um einen festen Währungsbetrag |
| **Fixed Price* | Setzt das Qualifying-Element auf einen bestimmten Preis – z.B. $5 flach |
| **Variabler Prozentsatz** | Prozentsatz-Rabatt, der nach Code oder Zustand variiert |
| **Variabler Betrag ab* | Betragsrabatt, der je nach Code oder Zustand variiert |
| **Variabler Fixpreis* | Fester Preis, der je nach Code oder Zustand variiert |

---

### Wirkungsart: Lieferung, Service und Regulatorische Gebühren

Gilt der Rabatt auf **fees** anstatt die Warenkorb Artikel selbst. Nutzen Sie dies, um kostenlose Lieferung oder andere Gebühren zu bieten.

| Feld | Eingeben |
|---|---|
| **Lieferung, Service und Regulatorische Gebühren Typ** * | **Liefergebühr** — ermäßigt die Versandkosten. **Service Fee** — ermäßigt die Plattform Servicegebühr. **Regulatory Fee** — Rabatte auf den regulären Zuschlag |
| **Preiseffekt Typ** * | Prozentsatz ab, Betrag ab oder Festpreis |
| ** Zählwert** * | Der Prozentsatz, der Betrag oder der feste Gebührenbetrag je nach gewähltem Typ |

**Preiseffekte verfügbar für Gebühren:**

| Typ | Was es tut |
|---|---|
| **Prozent** | Reduziert die Gebühr um einen Prozentsatz — z.B. 100% off = freie Lieferung |
| ** Betrag ab** | Verringert die Gebühr um einen festen Betrag |
| **Fixed Price* | Setzt die Gebühr auf einen bestimmten Wert – z.B. $0.00 für kostenlose Lieferung |

---

### Pricing Effect Types — Voller Vergleich

| Pricing Effect Type | Bestellnummer | Artikel Ebene | Gebühren |
|---|:---:|:---:|:---:|
| Prozentsatz ab | ✅ | ✅ | ✅ |
| Betrag ab | ✅ | ✅ | ✅ |
| Festpreis | — | ✅ | ✅ |
| Abweichend von | ✅ | ✅ | — |
| Variabler Betrag ab | ✅ | ✅ | — |
| Variabler fester Preis | — | ✅ | — |

---

## Schritt 4 — Überprüfung

Eine schreibgeschützte Zusammenfassung von allem, was Sie konfiguriert haben. Jeder Abschnitt zeigt seine aktuellen Werte und hat einen **EDIT** Link auf der rechten Seite, um direkt zurück zu springen und Änderungen vorzunehmen, ohne andere Fortschritte zu verlieren.

Der Review-Bildschirm zeigt:

- **Basic Information** — Kombinierbar mit anderen Promotions, Max Promo verwendet pro Cart, automatisch, Erlösung Codes, Display POS Button, Public
- **Anforderungen** — jeder Anforderungstyp und seine konfigurierten Werte
- **Effekte** — Effekttyp, Rabattverteilung, Ausgeschlossene Gegenstände

Wenn alles richtig aussieht, klicken Sie auf **KREATE** (rechts oben), um die Promotion zu speichern und zu veröffentlichen.

:::caution
Die **CREATE** Taste bleibt ausgegraut, wenn irgendein Effekt ungelöste Validierungsfehler hat. Überprüfen Sie das Warnbanner auf Schritt 3 und lösen Sie alle markierten Effekte, bevor Sie fortfahren.
:::

---

## Gemeinsame Promotion Rezepte

Die detaillierten Rezeptseiten leben jetzt in der dedizierten Rezept-Bereich oben, so dass die Märkte können neue Muster hinzufügen, ohne diese Setup-Führung zu lang zu machen.

---

## Ähnliche Anleitungen

- [Eine Promotion erstellen](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Promotion bearbeiten](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Promotions zu Store Groups zuweisen](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Serialisierte Codes erstellen](/docs/admin-portal-guide/promotions/create-serialized-code/)
- [Erweiterte Promotionen Suche](/docs/admin-portal-guide/promotions/advanced-promotions-search/)

---

* Teil der[Admin Portal Guide](/docs/admin-portal-guide)· Sektion: Promotionen*

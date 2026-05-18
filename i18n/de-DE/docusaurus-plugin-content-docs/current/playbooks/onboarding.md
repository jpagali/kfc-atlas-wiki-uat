---
title: Promotionen erstellen
sidebar_position: 1
---

# Promotionen erstellen

Dieses Playbook zeigt, wie KFC-Teams eine Promotion in Atlas erstellen und starten sollten, von der ersten Kampagnen-Kurs über die Abtretung von Store-Gruppen und Vor-Launch-Checks.

**Estimated time:** 30-60 Minuten für Setup, plus Genehmigung und QA Zeit
**Who does this:** Regional / BMU Admin, Marketing-Operationen oder Kampagnenbesitzer mit Admin Byte Portal Zugriff

---

## Was diese Playbook Covers

Verwenden Sie dieses Playbook, wenn KFC braucht:

- Einführung eines neuen digitalen Angebots in Atlas
- Konfigurieren von Förderfähigkeit und Rabattlogik
- die Promotion den richtigen Geschäften oder Speichergruppen zuweisen
- komplettieren Sie einen grundlegenden QA-Pass, bevor die Kampagne live geht

Wenn Sie speziell ein Buy 1 Get 1 Angebot erstellen, verwenden Sie die dedizierte Rezeptseite:[Rezept 1 - Kaufen 1 Erhalten 1 Kostenlos (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/).

## Voraussetzungen

- genehmigte KFC-Kampagne kurz mit Angebotsdetails, Termine und Zielmarkt
- Werbekopie bestätigt mit dem lokalen Marketing-Team
- Store- oder Store-Gruppenbereich bestätigt
- Admin Byte Portal Zugang zu Promotions- und Store-Gruppen

## Schritt 1: Bestätigen Sie die Aktionsstruktur

Bevor Sie etwas in Atlas bauen, bestätigen Sie:

- der Rabatttyp
- qualifizierende Produkte oder Bündel
- Start- und Endtermin/Zeit
- ob die Förderung automatisch oder codebasiert ist
- ob die Kampagne für alle Filialen oder ausgewählten Filialgruppen gilt

:::tip
Für KFC-Kampagnen bestätigen Sie immer, ob das Angebot in App, Web, aggregierten Strömen oder einem begrenzten Satz von Bestellkanälen vor dem Setup erscheint.
:::

## Schritt 2: Erstellen Sie die Promotion Shell

Verwenden Sie die Byte Portal-Führungsseite[Eine Promotion erstellen](/docs/admin-portal-guide/promotions/create-a-promotion/)um den Werberekord zu erstellen.

In dieser Phase:

- wählen Sie den richtigen Förderstrom
- den internen Werbenamen hinzufügen
- den Namen des Kunden anzeigen
- eine klare Beschreibung für KFC-Operatoren und Support-Teams hinzufügen

## Schritt 3: Regeln und Effekte hinzufügen

Define:

- die Bedingungen, die einen Kunden in Anspruch nehmen
- die Wirkung, die gelten sollte, wenn die Bedingung erfüllt ist
- Einschränkungen, Ausschlüsse oder Kampagnenfenster

Beispiele:

- prozentualer Rabatt auf ein Paket
- Pauschaler Rabatt für einen Schwellenwert
- freier Artikel oder Upsell Belohnung nach einem qualifizierten Kauf

## Schritt 4: Senden Sie die Promotion zu den Geschäften

Wenn das Angebot nicht für jeden Laden gilt, ordnen Sie es über Speichergruppen zu:

- Verwendung[Erstellen einer Store-Gruppe](/docs/admin-portal-guide/promotions/create-a-store-group/)wenn eine neue Kampagnengruppe benötigt wird
- Verwendung[Promotions zu Store Groups zuweisen](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)die Förderung verbinden
- Doppelprüfung, dass nur die beabsichtigten KFC-Restaurants enthalten sind

## Schritt 5: QA vor dem Start

Vor dem Start:

- Überprüfen Sie die Daten und Zeiten
- testen Sie die Förderung gegen die Zielprodukte
- bestätigen Sie die Rabattanzeigen korrekt in der KFC-Kundenreise
- bestätigen unzulängliche Elemente nicht auslösen
- stellen Sie sicher, dass Support-Teams das Live-Datum und das erwartete Kundenverhalten kennen

## Schritt 6: Monitor nach dem Start

Einmal live, Monitor:

- Rücknahmeverhalten
- unerwartete Stapelung mit anderen Promos
- Speichergruppenabdeckung
- alle Support-Tickets von Betreibern oder Kunden

Wenn Änderungen erforderlich sind, aktualisieren Sie die Promotion sofort in Atlas und informieren Sie den Kampagneninhaber.

## Verwandte Admin Portal Guides

- [Eine Promotion erstellen](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Promotion bearbeiten](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Promotions zu Store Groups zuweisen](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Erstellen einer Store-Gruppe](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [Promotionen für eine Store-Gruppe anzeigen](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)

## KFC-Anmerkungen

- Verwendung von Kampagnennamen, die Markt, Mechanik und Datumsbereich eindeutig identifizieren
- Richten Sie die Werbeanzeige Kopie mit lokaler KFC-Marketing-Zulassung vor dem Start aus
- für High-Traffic-Kampagnen, komplett QA auf App und Web vor go-live

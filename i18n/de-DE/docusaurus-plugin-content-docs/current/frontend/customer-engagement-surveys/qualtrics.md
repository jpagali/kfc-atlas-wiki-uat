---
title: Qualifikationen
sidebar_position: 5
---

# Qualifikationen

**Feature area:** [Kundenbindungserhebungen](./)

Qualtrics wird als Umfrageplattform für **KFC Listen** Stil Kundenengagement Umfragen verwendet. Es behandelt Umfrage-Lieferung, Verzweigungslogik, Antworterfassung und Reporting-Workflows, die von Kundenerfahrung und Marktbetriebsteams genutzt werden.

## Was Qualtrics Handles

Im Atlas-Ökosystem unterstützt Qualtrics typischerweise:

- Umfrageformulare, die über Web-Links oder QR-Codes dargestellt werden
- Bedingte Umfragefragen basierend auf Kanal, Markt oder Antworttyp
- Zufriedenheitsmetriken wie CSAT, NPS und Grundcodes
- Response Exporte und Dashboards für CX Reporting
- Alarme für Low-Score-Antworten, die möglicherweise Nachfolge erfordern

## Typische KFC Listen Flow

```text
1. Customer completes an order or visit
2. KFC shares a survey invitation (receipt, email, push, or QR code)
3. Customer opens the Qualtrics survey
4. Qualtrics collects ratings, comments, and store experience details
5. Market teams review dashboards and act on service-recovery cases
```

## Gemeinsame Daten erfasst

| Datenpunkt | Beispiel |
|---|---|
| Besuchen oder bestellen Referenz | Bestellnummer, Speicher ID, Besuchsdatum |
| Kanal | Dine-in, Takeaway, Delivery, App, Web |
| Zufriedenheitsbewertung | Gesamtbesuch oder Auftragsbewertung |
| Warenbezeichnung | Lebensmittelqualität, fehlende Artikel, Geschwindigkeit, Personalservice |
| Freitext-Feedback | Kundenkommentare in eigenen Worten |

## Operationelle Überlegungen

### Umfrageauslösung
Märkte wählen, wann sie Kunden einladen. Gemeinsame Muster umfassen unmittelbar nach dem Check-out, nach der Erfüllung oder aus gedruckten Eingangslinks im Laden.

### Anreize
Einige Programme umfassen einen Anreiz, wie einen Validierungscode oder Angebot nach Abschluss der Umfrage. Incentive-Regeln werden auf Marktebene verwaltet und können eine Koordinierung mit Promotions- oder CRM-Teams erfordern.

### Eskalationen
Geringfügige Antworten können in Kundenbetreuung oder CX-Review-Workflows geleitet werden. Märkte sollten definieren:

- Welche Score-Schwelle erzeugt einen Alarm
- Welches Team gehört Follow-up
- Wie schnell Kunden kontaktiert werden sollten

## Integrationshinweise

Qualtrics grenzt an Atlas und nicht an eine Kernanweisung. Die Umfrage-Erfahrung kann Referenz Atlas-Bestelldaten, aber die Umfrage-Plattform selbst wird getrennt von der Hauptkundenbestellung Anwendung verwaltet.

:::tip
Wenn Sie ein KFC Listen Programm starten oder ändern, richten Sie die Umfrage Formulierung, Trigger Timing und Service-Recovery SLA, bevor Sie live gehen. Eine gut geführte Umfrage mit unklarem Follow-up-Besitz schafft normalerweise Betriebsgeräusche statt nützlicher Erkenntnisse.
:::

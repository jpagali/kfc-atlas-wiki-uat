---
title: Kapazitätsauslastung
description: Wer besitzt was auf der Atlas-Plattform – die eindeutige Referenz für das, was Byte Helium tut und nicht.
sidebar_label: Kapazitätsauslastung
---

# 🚫 Capability Boundaries

> Verwenden Sie diese Tabelle zu beantworten: *"Kann Byte Helium tun X?"* und *"Wer besitzt das eigentlich?"*

Das macht das Eigentum eindeutig. Die häufigsten Fehler bei der Planung und Bewachung kommen von der Annahme, Byte Helium besitzt etwas, was es nicht tut. Wenn im Zweifel — überprüfen Sie diese Tabelle zuerst.

---

## Eigentümertabelle

| Kapazität | Von | HINWEIS | Anmerkungen |
|---|---|---|---|
| Berechnung der Preise | Commerce Backend | Byte Helium | Byte Helium zeigt Preise an |
| Menüinhalt Autorisierung | Byte Menu (externes Werkzeug) | Byte Portal, Byte Helium | Byte Portal assigns; Byte Helium renders |
| Förderfähigkeitslogik | Promo Engine (serverseitig) | Byte Helium | Byte Helium berechnet niemals Förderfähigkeit |
| Berechnung der Loyalitätspunkte | Loyalitätsservice | Byte Helium | Byte Helium zeigt Balance nur an |
| Zahlungsabwicklung / Erfassung | PSP (via Vault) | Byte Helium | Byte Helium sendet Token; PSP macht den Rest |
| Kartendatenverarbeitung (PAN) | PSP SDK | Byte Helium | SDK erfasst; kein PAN in Byte Helium |
| Steuerberechnung | Steuermotor / Commerce Backend | Byte Helium | Steuersätze im Byte Portal; berechnet beim Checkout |
| Anschrift Validierung | Anschrift | Byte Helium | Byte Helium ruft Adresse Service |
| Speicherzustand (offen/geschlossen) | Byte Portal + POS | Byte Helium | Byte Helium liest Zustand aus Store Service |
| Handelszeiten | Byte Portal (Stores Modul) | Byte Helium | Konfiguriert in Byte Portal; Byte Helium Renders |
| Liefergebiet | Byte Portal / Geo Service | Byte Helium | Coverage validiert bei der Auswahl des Liefermodus |
| Push-Benachrichtigung Lieferung | Push-Anbieter (extern) | Byte Helium | Byte Helium verwaltet Präferenzen; Anbieter sendet |
| CMS Content Kreation | CMS (via Byte Portal) | Byte Helium | Byte Portal veröffentlicht; Byte Helium Renders |
| Rechtliche Urheber | Rechtsteam über Legal CMS | Byte Helium | Byte Helium macht, was Legal CMS bietet |
| Cookie-Kategorien | CMP (konfiguriert pro Markt) | Byte Helium | Byte Helium macht CMP Widget |
| Wohnung / Siedlung | PSP | Byte Helium, Commerce Backend | Aus dem Anwendungsbereich von Atlas |
| POS/KDS Integration | Commerce Backend + Portal | Byte Helium | Byte Helium hat keine direkte POS-Verbindung; nicht-Byte POS-Märkte erfordern Byte Connect zwischen Byte Commerce und dem Markt POS |
| Aggregator-Aufnahme | Byte Connect (Commerce Backend) | Byte Helium | Aggregator-Bestellungen geben über Commerce Backend Gateway ein |
| Erstellung von Protokollen | Byte Portal + alle Dienstleistungen | Märkte können konfigurieren | Audit ist systemgeneriert; unveränderlich |
| Feature Flag Targeting | Byte Portal (Einstellungen Modul) | Byte Helium | Byte Helium respektiert Flaggen; Portal richtet sie an |
| Liefergarantie für Webhook | Integrationsplattform | Märkte | At-least-once; Abonnenten behandeln idempotency |

---

## Das Kernprinzip

Byte Helium ist eine **Rendering- und Orchestrationsschicht**. Es fordert Daten von Backend-Diensten, macht es an den Kunden und erfasst Kundeneingänge, um an den Backend zurück zu senden. Es hat keinen eigenen Zustand, führt keine Berechnungen durch und hält keine Geheimnisse.

Alles, was einem Kunden wie "App-Verhalten" aussieht, ist eigentlich eine Backend-Entscheidung, die Byte Helium präsentiert. Dies ist durch Design – es bedeutet, dass das Verhalten durch Konfiguration geändert werden kann, ohne dass das Frontend neu eingesetzt wird.

:::note Byte POS Caveat
Commerce Backend ist verkabelt, um direkt mit **Byte POS* zu sprechen. Wenn ein Markt Byte POS nicht nutzt, muss **Byte Connect** als Brücke zwischen Byte Commerce und dem POS des Marktes an Bord sein.
:::

---

:::tip Verwandte Artikel
- [Reality Check](/docs/byte-capabilities/enablement/reality-check)— die häufigsten Missverständnisse, die Rollouts auslösen
- [Plattformebenen](/docs/byte-capabilities/platform-layers)— einfache englische Aufschlüsselung dessen, was jede Schicht tut
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)— wann und warum Byte Connect benötigt wird
:::

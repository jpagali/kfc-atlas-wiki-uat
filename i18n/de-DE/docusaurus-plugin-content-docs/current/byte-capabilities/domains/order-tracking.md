---
title: Tracking und Geschichte bestellen
description: Wie die Atlas-Plattform den Kunden den Lieferstatus, die Bestellungen, die Bestellungen und die Zugriffsberechtigungen sieht.
sidebar_label: Tracking und Geschichte bestellen
---

# Tracking und Geschichte bestellen

**What it does:** Lassen Sie Kunden sehen, wo ihre Lieferung ist, sehen Sie vergangene Bestellungen, Reorder und Zugriffsberechtigungen.

**Why it matters:** Erfahrung nach der Bestellung Formen NPS und wiederholen Sie die Kaufrate. Echtzeit-Tracking reduziert Kundendienstkontakte. Ordensgeschichte treibt Reorderverhalten an.

:::warning Echtzeit-Tracking ist marktoptional
Live GPS-Lieferung Tracking ist **nicht automatisch verfügbar* für jeden Markt. Es erfordert die Integration mit einem Logistikanbieter von Drittanbietern. Ohne diese Integration sehen Kunden nur den POS-Bestellstatus (angenommen/bereit/vollständig). Dies muss vor go-live entschieden und konfiguriert werden.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Lieferung** | Der Kunde will wissen, wann Essen ankommt | Zeigt Echtzeit-Lieferstatus und geschätzte Ankunftszeit | Tracking Gateway bietet Lieferereignisse und ETA; je nach Markt abgefragt oder geschoben | Bestellen Tracking Service, 3P Logistik (optional) | Lieferauftrag | Echtzeit-Tracking ist optional pro Markt; Fallback ist POS-Bestellstatus | Tracking-Eingriffsrate, CS-Kontakte vermieden |
| **Receive Delivery Order** | Kundenanforderungen Bestätigungsauftrag erhalten | Zeigt den bestätigten Bildschirm mit nächsten Schritten | Lieferung Bestätigung der Veranstaltung von Tracking; Bestätigung gesendert | Tracking Service bestellen | Bestellung | N/A | Auftragsbestätigung |
| **Ansicht Bestellverlauf** | Registrierter Kunde möchte frühere Bestellungen sehen | Listet alle vorherigen Bestellungen mit Daten, Artikeln und Summen | Bestellungen Service liefert paginierte Liste der Bestellungen des Benutzers | Bestellungen Service | Kunden unterzeichnet in | Gastaufträge nicht über Geschichte zugänglich | Bestellen Sie Geschichte Engagement Rate |
| ** Details zum Bestellen / Receipt** | Kunden wollen sehen, was sie bestellt und bezahlt haben | Zeigt vollständige Auftragsaufschlüsselung mit punktierter Quittung | Bestellen Sie Details abgeholt; Empfang von Receipt Service; CDN Link verfügbar | Bestellungen Service, Receipt Service | Unterzeichnet; abgeschlossene Bestellung | Gastaufträge können nur per E-Mail-Empfang gesendet werden | Zutrittsquote |
| **Bestellung wieder** | Der Kunde möchte eine bevorzugte Bestellung wiederholen | Repopuliert den Warenkorb mit Gegenständen aus einer früheren Bestellung und startet Kasse | Vorheriger Auftrag abgeholt; verfügbare Artikel in neuen Warenkorb hinzugefügt | Bestellungen Service, Cart Service, Menu Service | Unterzeichnet; vorherige Bestellung existiert | Vom aktuellen Menü entfernte Gegenstände sind mit Warnung ausgeschlossen | Reordrate |
| **Favourite Orders* | Der Kunde hat eine Bestellung | Lassen Sie den Kunden speichern und schnell auf eine bevorzugte Bestellkonfiguration zugreifen | Vorliebe gespeichert gegen Kundenprofil; zurück in den Warenkorb auf Anfrage | Bestellungen Service, Cart Service | Eingetragen in | Die Favoriten sind kontogebunden — nicht für die Gäste | Vorliebener Sparsatz, reorder-from-favourite rate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Delivery Tracking / Order History</summary>

- **FRD References:** [FRD-HEL-024](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-024), [FRD-HEL-025](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-025), [FRD-HEL-052](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-052), [FRD-HEL-053](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-053), [FRD-HEL-054](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-054), [FRD-HEL-055](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-055), [FRD-HEL-056](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-056)
- **TRD Domain:** Order Tracking (Delivery)
- **Key Interfaces / APIs:** Order List (paginated), Order Detail, Delivery Events/ETA (poll/push), Receipt Render
- **Data Contracts:** Order (id, status, items[], totals); DeliveryEvent (ts, type, eta); Receipt (url, type, amount)
- **Source Summary:**
  - Tracking availability target: 99.9%
  - Real-time tracking optional per market; 3P logistics integration market-dependent
  - Event gap fallback: POS order status used; sequence IDs tracked for telemetry
  - Order list p95: ≤200ms
  - Orders/Tracking APIs: additive only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers track their delivery in the front-end → [Track Order: Delivery](/docs/frontend/customer-journey/track-order/delivery) and [Pickup](/docs/frontend/customer-journey/track-order/pickup)
:::

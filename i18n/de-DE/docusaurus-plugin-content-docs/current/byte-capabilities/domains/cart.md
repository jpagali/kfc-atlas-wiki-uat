---
title: Cart
description: Wie die Atlas-Plattform verwaltet, was Kunden ausgewählt haben – Artikel, Mengen, Belohnungen und Promos – vor dem Checkout.
sidebar_label: Cart
---

# Cart

**What it does:** Verwaltet, was der Kunde ausgewählt hat — Artikel, Mengen, Belohnungen und Promos — bevor sie zur Kasse gehen.

**Why it matters:** Cart Integrität ist entscheidend für Einnahmen. Pricing-Fehler im Warenkorb, verlorener Wagenzustand oder gescheiterte Promo-Anwendungen verursachen direkt verlassene Aufträge.

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| ** Artikel zum Warenkorb hinzufügen** | Der Kunde will eine Bestellung starten | Fügen Sie einen Menüpunkt (mit ausgewählten Modifiern) in den Warenkorb | Byte Helium sendet Add-line-Anfrage an Cart Service; Preis wird berechnet von Backend zu add time | Cart Service, Menu Service | Lokalisierung und Bestellmodus | Wagen an Sitzung gebunden; Gästewagen verloren, wenn Sitzung abläuft | Zusätzlicher Tarif |
| **Update / Cart Line entfernen* | Kunden ändern ihre Meinung | Aktualisiert Menge oder entfernt einen Artikel aus dem Warenkorb | Cart Service Update/Remove Line Call; insgesamt neu berechnet | Cart Service | Artikel muss in den Warenkorb gelegt werden | Echtzeit-Reparatur kann Preisänderungen an der Oberfläche | Cart Modifizierungsrate |
| **Apply Promo Code** | Kunden haben einen Promo-Code | Glättet und legt einen Promo-Code an den Warenkorb für einen Rabatt | Byte Helium sendet Promo-Code an Cart/Promo-Service; Berechtigung validiert serverseitig; Warenkorb repriced | Cart Service, Promo Engine | Cart muss Gegenstände haben; Promo muss für den Markt gültig sein | Ungültiger Code gibt Fehler (400) zurück, hält aber intakt; ein Promo-Code zu einer Zeit (Markt config) | Fördern Sie Rabatt, Diskontsatz |
| ** Zurück zum Warenkorb** | Loyalty-Mitglied will eine Belohnung verwenden | Befestigt eine Loyalitätsbelohnung zum Warenkorb (z.B. freier Gegenstand) | Reward validiert mit Loyalität Service; Belohnungstoken in den Warenkorb | Loyalität Service, Cart Service | Der Kunde muss in Loyalty angemeldet und eingeschrieben werden | Rückzahlung darf nicht abgelaufen sein; nur ein Belohnungstyp pro Warenkorb (Marktbeschlag) | Zinssatz |
| **Remove Reward from Cart** | Kunden ändern ihre Meinung über eine Belohnung | Entzieht die Belohnung aus dem Warenkorb | Loyalität Service Belohnung entfernt; Cart Gesamt aktualisiert | Loyalität Service, Cart Service | Zurück muss in den Warenkorb | Rückwärtsrendite zum verfügbaren Gleichgewicht | Cart Modifizierungsrate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Add Item to Cart / Apply Promo</summary>

- **FRD References:** [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048)
- **TRD Domain:** Cart
- **Key Interfaces / APIs:** Add/Update/Remove Line (App → Cart), Apply/Remove Promo (App → Cart)
- **Data Contracts:** Cart (id, lines[], totals, benefits[]) — idempotent ops
- **Source Summary:**
  - All cart operations are idempotent (safe to retry)
  - Pricing correctness: 100% accuracy required (enforced via golden tests in backend)
  - Invalid promo (400): error shown, cart state preserved
  - Cart API: additive changes only, 90-day deprecation window
  - Promo eligibility is always server-side — never computed in Byte Helium

</details>

---

:::tip See it in the wiki
- How customers experience the cart front-end → [Order and Get: Cart](/docs/frontend/customer-journey/order-and-get/cart)
- How to create and manage promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Promotion Recipes](/docs/playbooks/promotions-setup-guide)
:::

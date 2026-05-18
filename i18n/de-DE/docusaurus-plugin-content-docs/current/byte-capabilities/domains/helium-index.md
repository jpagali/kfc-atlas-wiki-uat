---
title: Byte Helium Fähigkeiten
description: Alle kundenorientierten Fähigkeiten im Besitz von Byte Helium — das Web- und App-Frontende der KFC Atlas-Plattform.
sidebar_label: Überblick
---

# Byte Helium Fähigkeiten

**Byte Helium** ist Yum!s Enterprise Design System und Front-End-Stiftung. In Atlas wird das weltweite Frontend von KFC auf Helium gebaut und für die Marke KFC gehäutet, wobei alles vom Anmelden und vom Menü-Browsen bis zum Checkout, Bezahlung und Post-Ordner-Tracking abgedeckt wird.

Im Atlas-Kontext macht Helium das, was der Backend bietet. Es hat keine eigenen Preise, Förderfähigkeit, Ordnungszustand oder Inhalte — die gehören Byte Commerce, Promo Engine bzw. CMS. Heliums Aufgabe ist es, die Front-End-Stiftung zur Verfügung zu stellen, die Atlas durch die Marke KFC und Customer Journey präsentiert.

---

## Byte Helium Capability Domains

| Gebiet | Was es deckt |
|---|---|
| [Identität und Zeichen In](/docs/byte-capabilities/domains/identity) | Kontoerstellung, OTP-Zeichen, Google/Apple OAuth, Profil, Privatsphäre |
| [Lokalisierung und Bestellmodus](/docs/byte-capabilities/domains/localisation) | Markterkennung, Lieferung vs. Sammelmodus, Speicherort |
| [Menü durchsuchen &amp; PDP](/docs/byte-capabilities/domains/menu) | Produktliste, Produktdetails, Modifizierungsmittel, Ernährung/allergene |
| [Cart](/docs/byte-capabilities/domains/cart) | Add/update/remove Items, Promo-Codes anwenden, Treuebelohnungen anhängen |
| [Check-out](/docs/byte-capabilities/domains/checkout) | Gast- und registrierter Checkout, Liefer- und Sammelvarianten |
| [Zahlungen & Angebote](/docs/byte-capabilities/domains/payments) | Karte, gespeicherte Karte, Gutschein, geteiltes Angebot, Geschenkkarte |
| [Promotionen & Loyalität](/docs/byte-capabilities/domains/promotions-loyalty) | Angebote Feed, Belohnungen, Herausforderungen, Loyalität an Bord, comms prefs |
| [Spenden & Tipps](/docs/byte-capabilities/domains/donations-tips) | Hinzufügen-Hope karitative Spenden, Liefertreiber Tipps |
| [Tracking und Geschichte bestellen](/docs/byte-capabilities/domains/order-tracking) | Echtzeit-Lieferung Tracking, Bestellhistorie, Quittungen, Reorder, Favoriten |
| [Inhalt und Recht](/docs/byte-capabilities/domains/content-legal) | CMS-Markenseiten, Rechtsdokumente, Cookie-Einwilligung |
| [Engagement und Messaging](/docs/byte-capabilities/domains/engagement) | In-App Posteingang, Push und E-Mail-Benachrichtigung Präferenzen |

---

:::caution Was Byte Helium nicht besitzt
Byte Helium Renders, aber nicht besitzen: Preise (Commerce Backend), Förderfähigkeit (Promo Engine), Loyalitätspunkte (Loyalty Service), Zahlungserfassung (PSP), Menüinhalt (Byte Menu), rechtliche Inhalte (Legal CMS) oder Store State (Byte Portal + POS). Siehe[Kapazitätsauslastung](/docs/byte-capabilities/enablement/capability-boundaries)für die vollständige Eigentümerkarte.
:::

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Byte Helium Capability Overview</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001), [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domains:** Identity, Localisation, Menu, Cart, Checkout, Payments, Loyalty, Tracking, Content
- **Key Interfaces / APIs:** App shell, Context/Store selection, Menu, Cart, Checkout, Payment, Order Status
- **Data Contracts:** Session context, cart, checkout session, payment intent, order summary, order status
- **Source Summary:**
  - Byte Helium is the customer-facing front-end foundation and orchestration surface for the KFC digital journey
  - Backend systems remain the source of truth for pricing, eligibility, order state, and most configuration
  - Domain-level technical details live in the linked capability pages below, each with its own source notes where needed

</details>

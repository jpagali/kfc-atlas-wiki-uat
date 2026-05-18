---
title: Inhalt und Recht
description: Wie die Atlas-Plattform Markenseiten, FAQs, Rechtsdokumente und Cookie-Einwilligungen für jeden Markt und Einheimischen macht.
sidebar_label: Inhalt und Recht
---

# Inhalt und Recht

**What it does:** Rendert alle nicht-transaktionellen Inhalte — Markenseiten, FAQs, Rechtsdokumente und Cookie-Einwilligung — für jeden Markt und Lokal.

**Why it matters:** Rechtskonformität und Markenvertrauen hängen von genauen, aktuellen, lokalisierten Inhalten ab. Byte Helium macht das, was Byte Portal und CMS bieten – Inhaltsqualität ist eine Marktverantwortung.

:::caution Byte Helium Renders; Märkte besitzen den Inhalt
Jede Seite dieser Domain wird außerhalb von Byte Helium verwaltet. Juristische Dokumente werden vom Juristischen Team im Legal CMS verfasst. Markenseiten und FAQs werden im CMS (über Byte Portal erreichbar) verfasst. Cookie-Kategorien werden im CMP konfiguriert. Ist der Inhalt falsch oder fehlt, ist die Fixierung im Quellsystem - nicht in Byte Helium.
:::

---

## Tabelle

| Merkmal | Das Problem ist: | Was es tut | Wie es funktioniert | Abhängigkeiten | Voraussetzungen | Einschränkungen | Betroffene Metriken |
|---|---|---|---|---|---|---|---|
| **Homepage** | Kunden benötigen ein Landeerlebnis | Rendert die lokalisierte Homepage mit Features, Promos und Inhalten | CMS, Lokalisierung und Promo-Kontexte kombiniert; Spotlight-Abschnitte, die von CMS config angetrieben werden | CMS, Kontextservice, Promo Engine | Lokalisierung komplett | Homepage Layout und Inhalt verwaltet in Byte Portal/CMS — nicht Byte Helium | Startseite Engagement, Bounce Rate |
| **Über unsere Geschichte** | Brand Storytelling Seiten | Renders statische Markenseiten | CMS-Seite von Slug und Local abgerufen; CDN-gespeichert | CMS / CDN | Inhalt veröffentlicht in CMS | Inhaltsänderungen erfordern CMS-Veröffentlichung - keine Codeänderung | Seite Ansichten |
| **Nutrition & Allergene Guide* | Regulatorische Anforderung und Kundenerwartung | Zeigt Nährwerte und Allergen-Info für alle Menüpunkte | Nährwertindex/Einzelheiten pro Produkt oder Kategorie | Ernährungsgewerbe | Ernährungsdaten in Byte Menu | Datengenauigkeit ist ein Byte Menu / Marktverantwortung | Kontakt |
| **Terms & Bedingungen* | Rechtliche Verpflichtung zur Anzeige von T&Cs | Rendert die aktuellen T&Cs für den Kundenort | Legal CMS bietet versionierte Dokumente von locale und effektive Datum | Rechtliches CMS | T&Cs veröffentlicht für Marktlokale | Byte Helium macht nur – Legal Team verwaltet Inhalte | T&C-Annahmequote |
| ** Datenschutz** | DS-GVO und lokales Datenrecht | Rendert die aktuelle Datenschutzerklärung für die Locale | Rechtliches CMS-Versionsdokument | Rechtliches CMS | Datenschutzerklärung veröffentlicht | Das gleiche wie T&Cs — Inhalt ist die Verantwortung von Legal | Zinssatz |
| **Cookie-Einstellungen* | Einhaltung des Cookie-Rechts (EU und andere) | Zeigt Cookie-Kategorien; lässt Kunden die Einwilligung aktualisieren | CMP Widget integriert; Präferenzen mit Zeitstempel und Quelle gespeichert | CMP | CMP für den Markt | Kategorien und Rechtstexte sind in CMP einzurichten — nicht in Byte Helium | Zustimmung Akzeptanzrate |

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Legal Pages / CMS / Cookie Consent</summary>

- **FRD References:** [FRD-HEL-070](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-070), [FRD-HEL-074](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-074), [FRD-HEL-075](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-075), [FRD-HEL-076](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-076), [FRD-HEL-071](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-071), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domain:** Content & Legal Pages
- **Key Interfaces / APIs:** CMS Page List/Render, FAQ List/Search, Legal Docs List/Render, CMP Get/Update
- **Data Contracts:** Page (id, title, slug, locale, contentUrl); LegalDoc (type, version, effectiveDate); Consent (category, status, ts)
- **Source Summary:**
  - CMS render p95: ≤150ms (CDN-cached)
  - CMS failure (5xx): fallback to cached version; CDN metrics monitored
  - Legal docs versioned by effective date per locale; Byte Helium renders current version
  - Consent preferences stored with source and timestamp for audit
  - CMS/Legal APIs: additive, 180-day deprecation (longest after Payments)

</details>

---

:::tip See it in the wiki
- How customers access brand content in the front-end → [Learn About KFC](/docs/frontend/customer-journey/learn-about-kfc/)
- Managing homepage and CMS content → [Contentful Guide](/docs/frontend/contentful/)
:::

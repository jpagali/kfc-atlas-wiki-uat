---
title: Byte Fähigkeiten
description: Starten Sie hier – was die KFC Atlas / Byte Helium Plattform tut, wie es funktioniert, und welche Märkte müssen wissen, bevor sie leben.
sidebar_label: Hier klicken
---

# 🧩 Byte Fähigkeiten

> **Audience:** Market Enablement, Launch Teams, Product Manager, Cross-funktionale Stakeholder > **Purpose:** Eine einzige Quelle der Wahrheit für das, was die Atlas / Byte Helium-Plattform tut, wie sie strukturiert ist, und was nötig ist, um live zu gehen.

Dieser Abschnitt lebt außerhalb der Betriebsführungen durch Design. Die[Leitfaden für Frontend](/docs/frontend/overview)und[Admin Portal Guide](/docs/admin-portal-guide/)sagen Sie *wie zu bedienen* die Plattform — Byte Capabilities sagt Ihnen *was die Plattform ist und was sie tun kann*.

:::note Anwendungsbereich in Atlas
In Atlas Wiki, **Byte Capabilities** ist absichtlich auf das Atlas **Commerce + Portal** Bild zugeschnitten. In der Praxis bedeutet das:

- **Atlas** ist das globale Frontend von KFC
- **Byte Commerce + Byte Portal** sind die Handels- und Konfigurationsschicht hinter Atlas
- **Byte Helium** ist Yum!s Unternehmensdesign-System und Front-End-Stiftung, die Atlas baut und durch
- **Byte Connect** ist die mittlere Schicht, wenn ein Markt POS nicht Byte POS ist

Die[Admin Portal Guide](/docs/admin-portal-guide/)noch besitzt die Schritt-für-Schritt-Bedienanleitung.
:::

---

## Wie Sie diesen Abschnitt verwenden

| Wenn Sie wollen... | Geh zu... |
|---|---|
| Die komplette Plattform in 5 Minuten verstehen | [Mental Model](/docs/byte-capabilities/mental-model) |
| Sehen Sie, was jeder Kernteil (Atlas auf Byte Helium / Byte Commerce / Byte Portal / Byte Connect) tut | [Plattformebenen](/docs/byte-capabilities/platform-layers) |
| Eine bestimmte Funktion finden | [Domains](/docs/byte-capabilities/domains/identity)— Wählen Sie Ihre Domain |
| Wissen was kann und kann nicht getan werden | [Kapazitätsauslastung](/docs/byte-capabilities/enablement/capability-boundaries) |
| Bereiten Sie sich auf einen Marktrollout vor | [Reality Check](/docs/byte-capabilities/enablement/reality-check) |
| Holen Sie sich eine Start-Checkliste | [Markteinführung Checkliste](/docs/byte-capabilities/enablement/market-launch-checklist) |
| Sehen Sie sich einen technischen Begriff an | [Glossar](/docs/byte-capabilities/reference/glossary) |
| Prüfen Sie die Leistung SLOs | [Leistung SLO](/docs/byte-capabilities/reference/performance-slos) |

---

## Die Plattform in einem Absatz

**KFC Atlas** ist das globale Frontend von KFC zur digitalen Bestellung. Atlas selbst ist auf **Byte Helium**, Yum!s Enterprise Design System und Front-End-Stiftung gebaut, um die Marke KFC zu reflektieren. Hinter diesem Frontend sitzt das **Byte Commerce + Byte Portal** Betriebsbild: Commerce verarbeitet Aufträge, Preise, Zahlungen und POS-Injektion, während Byte Portal den Markt und die operative Konfiguration verwaltet, die Atlas in der Produktion arbeitet.

Wenn ein Markt nicht auf Byte POS ist, wird **Byte Connect** die mittlere Schicht zwischen Byte Commerce und dem Markt POS-Umfeld. Das Verständnis, wie Atlas, Helium, Commerce, Portal und Connect zusammenpassen, ist die Grundlage für den Start und die operative Entscheidungsfindung.

---

## Die 12 Capability Domains

Die Plattform wird in 12 Funktionsbereiche organisiert. Jede Domain hat eine eigene Seite mit einer Feature-Tabelle, wie sie funktioniert, Abhängigkeiten, Einschränkungen und Links zu verwandten Wiki-Guides.

| Gebiet | Was es deckt |
|---|---|
| [Identität und Zeichen In](/docs/byte-capabilities/domains/identity) | Kontoerstellung, OTP-Zeichen, Google/Apple OAuth, Profil, Privatsphäre |
| [Lokalisierung und Bestellmodus](/docs/byte-capabilities/domains/localisation) | Markterkennung, Lieferung vs. Sammelmodus, Speicherort |
| [Menü durchsuchen &amp; PDP](/docs/byte-capabilities/domains/menu) | Produktliste, Produktdetails, Modifizierungsmittel, Ernährung/allergene |
| [Cart](/docs/byte-capabilities/domains/cart) | Add/update/remove Items, Promo-Codes anwenden, Treuebelohnungen anhängen |
| [Check-out](/docs/byte-capabilities/domains/checkout) | Gast- und registrierter Checkout, Liefer- und Sammelvarianten |
| [Zahlungen & Angebote](/docs/byte-capabilities/domains/payments) | Karte, gespeicherte Karte, Gutschein, geteiltes Angebot, Geschenkkarte |
| [Promotionen & Loyalität](/docs/byte-capabilities/domains/promotions-loyalty) | Angebote Feed, Belohnungen, Herausforderungen, Loyalität an Bord, comms prefs |
| [Spenden & Tipps](/docs/byte-capabilities/domains/donations-tips) | Add-Hope Spenden, Liefertreiber Tipps |
| [Tracking und Geschichte bestellen](/docs/byte-capabilities/domains/order-tracking) | Echtzeit-Tracking, Bestellhistorie, Quittungen, Reorder, Favoriten |
| [Inhalt und Recht](/docs/byte-capabilities/domains/content-legal) | CMS-Seiten, Rechtspunkte, Cookie-Einwilligung |
| [Engagement und Messaging](/docs/byte-capabilities/domains/engagement) | In-App Posteingang, Push und E-Mail-Benachrichtigung Präferenzen |
| [Portal — Admin & Konfiguration](/docs/byte-capabilities/domains/portal-admin) | RBAC, Geschäfte, Menüs, Promos, Steuern, Zahlungen, Berichterstattung, Audit |

---

## Was dieser Abschnitt nicht abdeckt

Dieser Abschnitt ist absichtlich konzeptionell. Für Schritt-für-Schritt-Führer auf *doing* Dinge in der Plattform gehen Sie in den entsprechenden operativen Abschnitt:

- Wie zu bedienen Byte Portal Tag zu Tag →[Admin Portal Guide](/docs/admin-portal-guide/)
- Wie man Geschäfte einrichten und verwalten →[Admin Portal Guide: Geschäfte](/docs/admin-portal-guide/stores/)
- So erstellen und konfigurieren Sie Aktionen →[Admin Portal Guide: Promotionen](/docs/admin-portal-guide/promotions/)
- Wie man Werbekampagnen baut und durchführt →[Spielbücher](/docs/playbooks/onboarding)
- Wie Kunden das Frontend erleben →[Leitfaden für Frontend](/docs/frontend/overview)

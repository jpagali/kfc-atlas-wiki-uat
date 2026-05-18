---
title: Plattformebenen
description: Was jede Schicht der Atlas / Byte Helium-Plattform in schlichtem Englisch macht und welche Märkte in jedem konfigurieren können.
sidebar_label: Plattformebenen
---

# 🌍 Plattformebenen

Die Atlas-Plattform verfügt über vier Kernteile sowie eine Reihe externer Services. Diese Seite gibt eine eindeutige englische Aufschlüsselung dessen, was jeder Teil tut und, kritisch, welche Märkte können und können nicht konfigurieren.

:::note Anwendungsbereich in Atlas
Wenn Atlas Wiki sich auf **Byte Capabilities* bezieht, ist der Hauptumfang das Atlas **Commerce + Portal* Bild: Atlas als globales Frontend von KFC, **Byte Helium** als Yum! Frontend Foundation, **Byte Commerce + Byte Portal* als Handels- und Konfigurationsschicht dahinter und **Byte Connect** als mittlere Schicht für Non-B. Detaillierte Betriebsschritte für Byte Portal gehören noch in der[Admin Portal Guide](/docs/admin-portal-guide/).
:::

:::caution Schlüsselprinzip
Byte Helium *renders* aber nicht *own* die meisten Dinge. Preise, Förderfähigkeit, Zustand und Inhalt leben alle im Backend oder externer Dienstleistungen. Wenn etwas in der App falsch aussieht, ist der Fix fast immer in der Backend-Konfiguration – nicht im Frontend.
:::

---

## Kernkompetenzen

| Teil | Laufsohle | Welche Märkte konfigurieren |
|---|---|---|
| **Atlas auf Byte Helium** | KFC's globales Frontend, gebaut auf Yum!'s gemeinsame Front-End-Stiftung und Marken für KFC Kunden | Marktverhalten ist konfigurationsgetrieben, nicht separat nachgebaut pro Markt |
| **Byte Commerce** | Prozesse jeder Bestellung — Preis, Steuer, Zahlung, POS-Injektion; Nicht-Byte POS-Märkte erfordern Byte Connect | Via Byte Portal — Promos, Steuern, Zahlungsverkehr, Marktgeschäfte |
| **Byte Portal* | Admin-Tool gepaart mit Commerce für Märkte und ops Teams | Öffnungszeiten, Menüs, Promos, Steuern, Zahlungen, Rückerstattungen, Benutzer |
| **Byte Connect** | mittlere Integrationsschicht zwischen Byte Commerce und nicht-Byte POS-Umgebungen | Markt/Anbieter Mapping und Integrationsbereitschaft für nicht-Byte POS-Bestellströme |
| **Menu Service** | Bietet Artikelkatalog, Preise, Optionen | Via Byte Menu Autorenwerkzeug (außer Atlas) |
| ** Identität / SSO** | Verwaltet Kundenkonten und Anmeldesitzungen | OTP, Google, Apple — pro Markt konfiguriert |
| **PSP / Vault* | Handles Kartenmarkierung und Zahlungserfassung | PSP Profile in Byte Portal konfiguriert |
| **Loyalty & Promo Engine** | Bewertungen bieten Förderfähigkeit, Belohnungen, Herausforderungen | Werbeaktionen im Byte Portal |
| **Order Tracking** | Bietet Echtzeit-Lieferstatus | Optional pro Markt; abhängig von 3P Logistik |
| **POS / KDS** | Erhält digitale Aufträge im Shop | Integration konfiguriert per Markt/Anbieter; Nicht-Byte POS-Märkte verbinden Byte Connect |

---

## Was jeder Kernteil im Detail tut

### Atlas auf Byte Helium — Frontend
Atlas ist das globale Frontend von KFC. Es ist auf **Byte Helium**, Yum! Unternehmen Design System und Front-End-Stiftung gebaut, dann gehäutet und geformt, um die Marke und Customer Journey von KFC zu reflektieren. Atlas erhält Daten von Byte Commerce, Menu Service, CMS und externen Services und macht es in die Web- und App-Erfahrung Kunden tatsächlich verwenden. Atlas berechnet keine Preise, bewertet nicht die Förderfähigkeit und besitzt keinen eigenen Bestellzustand. Es ist die kundenorientierte Frontendschicht auf Helium gebaut.

### Byte Commerce
Byte Commerce ist der Motor hinter jeder Transaktion. Wenn ein Kunde einen Artikel zu seinem Warenkorb hinzufügt, berechnet Byte Commerce den Preis. Wenn sie einen Promo-Code anwenden, validiert Byte Commerce die Berechtigung serverseitig. Wenn sie bezahlen, orchestriert Byte Commerce die Zahlung durch den PSP. Wenn eine Bestellung gestellt wird, spritzt Byte Commerce es in den Laden POS/KDS. Byte Commerce spricht direkt mit Byte POS; wenn ein Markt nicht mit Byte POS, Byte Connect ist die erforderliche mittlere Schicht auf dem Markt POS. Nichts geschieht ohne Byte Commerce.

:::note Byte POS Caveat
Nehmen Sie nicht an, Atlas kann direkt mit jedem Markt POS integrieren. Das unterstützte mentale Modell ist **Atlas -> Byte Commerce -> Byte POS**, oder **Atlas -> Byte Commerce -> Byte Connect -> POS** für nicht-Byte POS-Märkte.
:::

### Byte Portal — Admin Control Plane
Byte Portal ist, wo jede Markt-Level-Konfiguration lebt, neben der Commerce-Schicht, die es unterstützt. Märkte konfigurieren ihre Stores (Stunden, Zustand, POS-Mapping), Menüs (Veröffentlichte Menü-Versionen, Anwenden von Patches und Preisüberschreitungen), Promotionen (Förderungsregeln, Codes, Budgets, Scoping), Steuerprofile, Zahlungsführungsregeln, Benutzer und Zugriffsrollen und Betriebseinstellungen. ** Ohne korrekte Portalkonfiguration können die Märkte nicht live gehen.**

### Byte Connect
Byte Connect ist nicht das kundenorientierte Produkt und nicht die primäre Admin-Oberfläche, aber es ist immer noch Teil des Byte-Stacks in Atlas, wenn ein Markt POS nicht Byte POS ist. Es behandelt die Integrationsbrücke zwischen Byte Commerce und der Markt-POS-Umgebung, und es wird Teil der Startbereitschaft, Bestell-Routing, Stützgrenzen und Fehlerbehebung für diese Märkte.

### Menü Service / Byte Menu
Menüautorisierung — Erstellung von Objekten, Einstellung von Beschreibungen und Bildern, Verwaltung von Preisen und Optionen — geschieht in **Byte Menu*, einem separaten Werkzeug außerhalb der Atlas-Plattform. Byte Portal ordnet bereits veröffentlichte Menüversionen an Märkte und Kanäle zu. Byte Portal kann Patches und Overrides auf einem veröffentlichten Menü anwenden, aber es kann keine Menüinhalte von Grund auf erstellen.

### Externe Dienste
Die Plattform hängt von einer Reihe von externen Dienstleistungen ab, die pro Markt integriert sind: Identität/SSO für die Kundenauthentifizierung, ein PSP für die Zahlungsabwicklung, eine Loyalty & Promo Engine für die Angebotsauswertung, ein Order Tracking Service für Lieferstatus, ein CMS für Marken- und Rechtsinhalte und einen Geo/Store Locator Service. Alle diese müssen vor dem Start pro Markt konfiguriert und getestet werden.

---

:::tip Sehen Sie es im Wiki
- Speicher und Menüs in Byte Portal konfigurieren →[Admin Portal Guide: Geschäfte](/docs/admin-portal-guide/stores/)und[Menüs](/docs/admin-portal-guide/menus/)
- Aktionen konfigurieren →[Admin Portal Guide: Promotionen](/docs/admin-portal-guide/promotions/)
:::

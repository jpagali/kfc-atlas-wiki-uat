---
title: Plattform Mental Modell
description: Hierarchie, Struktur und Architektur der Byte Stack-Plattform in schlichtem Englisch.
sidebar_label: Mental Model
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 Plattform Mental Modell

Das Verständnis der Plattform beginnt mit dem Verständnis des Atlas-Plattform-Bildes – für welches jeder Teil verantwortlich ist, und wie sie sich gegenseitig betreffen.

:::note Anwendungsbereich in Atlas
Für Atlas Wiki konzentriert sich das **Byte Capabilities* Objektiv auf das Atlas **Commerce + Portal* Bild. Atlas ist das globale Frontend von KFC, gebaut auf **Byte Helium** als Yum! Unternehmensgründung. Hinterher, **Byte Commerce + Byte Portal** Power Transaktionshandling und Betriebskonfiguration, während **Byte Connect** in der Mitte sitzt, wenn ein Markt POS nicht Byte POS ist.
:::

---

## Das Atlas Platform Picture

Im Atlas-Kontext wird der **Byte Stack** am besten als vier zusammenhängende Teile verstanden:

- **Atlas on Byte Helium** — Atlas ist KFCs globales Frontend, und es wird auf **Byte Helium**, Yum!'s Enterprise Design System und Frontend Foundation gebaut. Helium gibt Atlas das gemeinsame UI-System; Atlas Skins, die Grundlage für die Marke KFC und Customer Journey.
- **Byte Commerce** Der Motor hinter jedem Auftrag. Griffe Warenkorb Zustand, Preis, Steuerberechnung, Zahlungsabwicklung und POS Injektion. Unsichtbar für Kunden, kritisch für alles.
- **Byte Portal* Die Admin-Steuerungsebene gepaart mit Commerce. Markt- und Ops-Teams nutzen diese, um Geschäfte, Menüs, Werbeaktionen, Steuern, Zahlungen, Benutzer und Inhalte zu konfigurieren.
- **Byte Connect** Die Integration mittlere Schicht, wenn ein Markt POS nicht Byte POS ist. Es überbrückt Byte Commerce auf den Markt POS-Umgebung und zählt überall nicht-Byte POS Onboarding oder Order Routing ist in Reichweite.

Diese Teile verbinden sich auch mit einer Reihe von **externen Dienstleistungen**: Menü, Identität/SSO, PSP (Zahlungen), Loyalty/Promos Engine, Order Tracking, CMS und Analytics.

:::note Byte POS Caveat
Leser nehmen oft an, Atlas oder Byte Commerce kann direkt mit jedem Markt POS sprechen. Das beabsichtigte Modell ist schmaler: **Atlas -> Byte Commerce -> Byte POS*** standardmäßig oder **Atlas -> Byte Commerce -> Byte Connect -> POS** wenn der Markt nicht auf Byte POS ist.
:::

---

## Hierarchie der Plattform

Dieser Entdecker kombiniert die Hierarchie und Architekturansichten an einem Ort. Verwenden Sie die Registerkarten, um zwischen einem Side-by-Side-Vergleich, Hierarchie-only oder Architektur-only-Modus zu wechseln.

<ThemeSyncedIframe
  src="/byte-stack-platform-explorer.html"
  title="Byte Stack Platform Explorer"
  height={1480}
  messageType="byte-stack-platform-explorer-theme"
  heightMessageType="byte-stack-platform-explorer-height"
/>

---

## Systemarchitekturdiagramm

Die Architekturansicht ist im gleichen Explorer oben verfügbar. Öffne die`Architecture only`Tab, wenn Sie sich nur auf Laufzeit-Beziehungen und Box-Level-Erklärungen konzentrieren möchten.

---

:::tip Weiterlesen
Siehe[Plattformebenen](/docs/byte-capabilities/platform-layers)für eine einfache englische Aufschlüsselung dessen, was jede Schicht tut und welche Märkte konfigurieren können. Brauchen Sie die POS-Integrationshöhle? Weiterlesen[Byte Connect](/docs/byte-capabilities/enablement/byte-connect).
:::

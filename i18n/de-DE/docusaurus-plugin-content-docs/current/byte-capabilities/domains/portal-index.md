---
title: Byte Portal Fähigkeiten
description: Alle Fähigkeiten im Besitz des Byte Portals — das Admin-Kontrollflugzeug für Markt- und Ops-Teams auf der KFC Atlas-Plattform.
sidebar_label: Überblick
---

# 🛠 Byte Portal Fähigkeiten

**Byte Portal** ist die mit Byte Commerce gepaarte Admin-Steuerungsebene – der Werkzeugmarkt und die Ops-Teams verwenden, um die Atlas-Plattform hinter dem Frontend zu konfigurieren und zu betreiben. Ohne Byte Portal können die Märkte nicht leben. Jedes Feature-Kunden-Erlebnis in Atlas hängt davon ab, dass zunächst etwas richtig konfiguriert ist.

Byte Portal gibt keine Autorenmenüs (das ist Byte Menu), verarbeitet keine Zahlungen (das ist der PSP), und sendet keine Push-Benachrichtigungen (das ist der Push-Anbieter). Es konfiguriert, zugewiesen und steuert alles andere.

---

## Was Byte Portal besitzt

| Kapazität | Was Marktteams hier tun |
|---|---|
| **Verwender & Roles (RBAC)* | Einladung von Benutzern, Zuweisung von Rollen, Durchsetzung Markt / Geschäft / Gruppenbereich |
| **Store & Group Konfiguration** | Aufbau von Geschäften, Handelszeiten, Echtzeit-Zustand, POS-Mapping, Drosselung |
| **Menu Zuweisung und Aufnäher* | Veröffentlichte Menü-Versionen zuordnen; Preis, Verfügbarkeit und Daypart-basierte Overrides anwenden |
| **Promotionen Konfiguration** | Werbeaktionen mit Förderregeln, Codes, Budgets und Scoping erstellen |
| **Tax Configuration** | Steuerprofile, Steuersätze, Regeln und Rundungen pro Markt definieren |
| **Payments Konfiguration** | Konfigurieren von PSP-Profilen, Zahlungsmethoden, Routing-Regeln, Zuschlagsrichtlinien |
| **Bestellungen und Rückerstattungen (Ops)** | Bestellungen, Prozesserstattungen, Anpassungen verwalten |
| **Lokalisation & Content Management** | Lokale, Übersetzungsschlüssel, Inhaltsblöcke und rechtliche Hinweise verwalten |
| **Feature Fahnen & Einstellungen* | Control Feature Rollouts nach Markt, Kanal oder Kundensegment |
| **Ausfuhren** | Berichte definieren, Ansichten speichern, Daten auf Anfrage oder auf Zeitplan exportieren |
| **Webhooks & Integrations* | Abonnieren von Drittsystemen auf Plattformveranstaltungen |
| **Audit & Observability** | Unwandelbares Auditprotokoll aller Admin-Aktionen; Gesundheitskontrollen und SLO-Tracking |

---

:::tip Byte Portal in Aktion sehen
Schritt für Schritt Anleitungen für jede Portalaufgabe →[Admin Portal Guide](/docs/admin-portal-guide/)
:::

:::caution Byte Portal nicht Autorenmenüs
Menüinhalt (Stücke, Beschreibungen, Preise, Optionen) wird in **Byte Menu** erstellt – ein separates Werkzeug außerhalb der Atlas-Plattform. Byte Portal ordnet bereits veröffentlichte Menü-Versionen an und kann Patches oben anwenden, kann aber keine Menüinhalte von Grund auf erstellen.
:::

---

## Technische Quellen

<details>
<summary>📎 Technical Source: Byte Portal Capability Overview</summary>

- **FRD References:** [FRD-PORTAL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), [FRD-PORTAL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), FRD-PORTAL-041, FRD-PORTAL-063
- **TRD Domains:** RBAC, Store Configuration, Menu Assignment, Promotions, Tax, Payments, Reporting, Audit
- **Key Interfaces / APIs:** Admin UI, RBAC policy engine, configuration services, export jobs, audit events
- **Data Contracts:** User role scope, store config, menu assignment, promotion config, tax profile, payment profile, audit record
- **Source Summary:**
  - Byte Portal is the configuration and operational control plane that determines how the market runs on Atlas
  - It does not process customer transactions directly, but its settings materially shape what Byte Helium and Commerce Backend do at runtime
  - Step-by-step operator workflows remain in the [Admin Portal Guide](/docs/admin-portal-guide/)

</details>

---
title: Marktkonfigurationen
sidebar_position: 4
---

# Marktkonfigurationen

Die Atlas Platform verwendet eine **feature-Flag-Architektur** – eine einzige gemeinsame Codebasis, bei der Marktdifferenzen durch Konfiguration gesteuert werden, nicht durch separate Bereitstellungen. Regionale Teams können Funktionen unabhängig aktivieren oder deaktivieren, ohne auf eine Produktfreigabe zu warten.

## Was kann pro Markt konfiguriert werden

| Angebotsbereich | Konfigurierbar? | Ort |
|---|---|---|
| Typ des Loyalitätsprogramms | ✅ | Markteinstellungen → Loyalität |
| Zinssatz | ✅ | Markteinstellungen → Loyalität Regeln |
| Code-Verhalten fördern | ✅ | Markteinstellungen → Promotionen |
| Fahrschritte (Darstellung/Hide) | ✅ | Markteinstellungen → Customer Journey |
| Verfügbarkeit des Kanals | ✅ | Restaurant → Kanaleinstellungen |
| Lieferradius | ✅ | Restaurant → Kanaleinstellungen → Lieferung |
| Mindestlieferungsauftrag | ✅ | Restaurant → Kanaleinstellungen → Lieferung |
| Zahlungsmethoden | ✅ | Markteinstellungen → Zahlungen |
| Gästebewertung | ✅ | Markteinstellungen → Customer Journey |
| Weitere Aufträge geplant | ✅ | Markteinstellungen → Customer Journey |

## Australien 🇦🇺 — Aktuelle Konfiguration

| Einstellung | Wert |
|---|---|
| Loyalitätsart | Gutscheinbasierte (KFC App Deals) |
| Zinssatz | N/A — Gutscheinmodell |
| Fördercodes | Ermöglicht |
| Geplante Aufträge | Behinderte |
| Gästebewertung | Ermöglicht |
| Aggregateintegration | Uber Eats, DoorDash |

## Anforderung einer Konfigurationsänderung

Konfigurationsänderungen für bestehende Funktionen sind selbsterhaltend durch das Byte Portal. Wenn ein Feature * * * * ausgegraut ** ist, dann entweder:
1. wurde noch nicht für Ihren Markt gebaut – eine Anfrage über den JIRA Service Desk
2. Erfordert regionalen Admin-Zugang — kontaktieren Sie Ihre BMU

:::tip
Alle Konfigurationsänderungen wirken ** sofort** – keine Bereitstellung ist erforderlich und kein anderer Markt ist betroffen.
:::

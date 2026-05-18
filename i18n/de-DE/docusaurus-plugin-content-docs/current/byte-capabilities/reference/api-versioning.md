---
title: API Versioning & Deprecation
description: Wie die Atlas-Plattform-APIs versioniert sind und wie viel Merkmärkte erhalten, bevor Änderungen brechen.
sidebar_label: API-Version
---

# 🔗 API Versionierung & Deprecation Referenz

> Alle Plattform-APIs verwenden Semantic Versioning. Breaking-Änderungen erfordern große Versions-Pumpen. Die Märkte werden vor den Abschreibungsfenstern gemeldet.

Verständnis von Abschreibungsfenstern für Markteinführungsplanung — Integrationen, die vor einem Abschreibungsfenster gebaut werden, sind sicher. Nach dem Fenster können brechende Änderungen gelten.

---

## Abschreibung von Windows durch API Domain

| API Domain | Vereinbarkeitspolitik | Abschreibungshinweis |
|---|---|---|
| Identität | Rückwärtskompatibel Minderjährige | 90 Tage |
| Kontext / Lokalisierung | Rückwärtskompatibel Minderjährige | 90 Tage |
| Menü schließen | Rückwärtskompatibel Minderjährige | 120 Tage (die Märkte brauchen Zeit für den Rollout) |
| Cart | Nur Änderungen des Zusatzstoffs | 90 Tage |
| Check-out Orchestrator | Nur Änderungen des Zusatzstoffs | 120 Tage |
| Zahlungen / PSP | Nur Änderungen des Zusatzstoffs | 180 Tage (Schemamandate gelten — längstes Fenster in Plattform) |
| Promo / Loyalität | Nur Änderungen des Zusatzstoffs | 120 Tage |
| Spenden / Tipps | Nur Änderungen des Zusatzstoffs | 90 Tage |
| Bestellungen / Tracking | Nur Änderungen des Zusatzstoffs | 120 Tage |
| CMS / Legal CMS | Zusatzstoff; lokal/version-aware | 180 Tage |
| Kontaktformular | Nur Änderungen des Zusatzstoffs | 120 Tage |

---

## Anmerkungen

**Zahlungen (180 Tage)* Das längste Abgrenzungsfenster in der Plattform. Zahlungsschemaänderungen betreffen PSP-Integrationen, Gewölbe-Token und Compliance-Anforderungen, die alle eine erweiterte Marktkoordination erfordern.

**CMS / Legal (180 Tage)* — Rechtsdokumente werden nach effektivem Datum pro Ort veröffentlicht. Änderungen an der Legal CMS API erfordern entsprechende rechtliche Überprüfungszyklen, bevor die Märkte neue Versionen annehmen können.

**Menu (120 Tage)* Märkte benötigen oft volle Stage-Rollouts (dev → staging → prod) bevor das Menü API ändert, so dass das Fenster länger ist als Cart oder Identität.

**Additive Änderungen nur** - bedeutet, dass neue Felder oder Endpunkte ohne Versionssprung hinzugefügt werden können. Während des Abschreibungsfensters werden bestehende Felder und Verhaltensweisen nicht verändert oder entfernt.

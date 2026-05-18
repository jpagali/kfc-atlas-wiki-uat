---
title: Leistung SLO
description: Schnelle Referenz für Service-Level-Ziele und Leistungsziele auf der Atlas / Byte Helium-Plattform.
sidebar_label: Leistung SLO
---

# 📐 Performance SLOs

> Schnelle Referenz für SLOs und Leistungsziele auf der gesamten Plattform. Es handelt sich um die Benchmarks, die jeder Dienst während des Start- und Eskalationsversuchs verwendet.

---

## Plattform-Leistungsziele

| Domain / Service | Metric | Ziel |
|---|---|---|
| Identität — Auth Endpunkte | Verfügbarkeit | 99,95% monatlich |
| Lokalisierung — Context fetch | Währung p95 | ≤150m |
| Menü — Produktliste Seite (PLP) | Währung p95 | ≤200ms |
| CMS Content Rendering | Währung p95 | ≤ 150ms (CDN-Cache) |
| Angebote füttern | Währung p95 | ≤200ms |
| Bestellliste | Währung p95 | ≤200ms |
| Check-in einreichen | Erfolg p99 | ≥99.5% |
| Zahlung Authentisierung | Erfolgsquote | ≥99.5% |
| Loyalität Belohnung Erlösung | Erfolg p99 | ≥99.8% |
| Auftragsverfolgung | Verfügbarkeit | 99.9% |
| In-App-Nachricht füttern Frische | Geschichte max | ≤60 Sekunden |
| Byte Portal Benutzer/Rollenabfragen | Währung p95 | ≤500m |

---

## Anmerkungen

** Checkout eingereicht (≥99,5% p99 Erfolg)** — Idempotency Schlüssel sorgen dafür, dass retried Einreichungen nicht doppelte Aufträge erstellen. A 409 on resubmit gibt den ursprünglichen Auftrag zurück.

**Loyalty Belohnung Erlösung (≥99,8% p99 Erfolg)* — Dies ist der engste Erfolg SLO auf der Plattform, der die Umsatz- und Vertrauensempfindlichkeit von gescheiterten Belohnungen widerspiegelt.

**In-App-Nachricht Frische (≤60s)* — Futter wird nach 60 Sekunden als stabil angesehen. Beim TTL-Ablauf wird ein Pull-to-refresh ausgelöst.

**CMS-Render (≤150ms CDN-Cache)** — Auf CDN-Cache-Verfehlung ist der Fallback eher die Cache-Version als ein Live-Fetch-Versagen.

---

:::tip Verwandte Artikel
- [API Versioning & Deprecation](/docs/byte-capabilities/reference/api-versioning)— Abschreibungsfenster, die die Planung beeinflussen
:::

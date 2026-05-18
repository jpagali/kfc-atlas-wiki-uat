---
title: Performance SLOs
description: Referencia rápida para objetivos de nivel de servicio y objetivos de rendimiento en toda la plataforma Atlas / Byte Helium.
sidebar_label: Performance SLOs
---

# 📐 Performance SLOs

Referencia rápida para SLOs y objetivos de rendimiento en toda la plataforma. Estos son los puntos de referencia que cada servicio se mantiene para — utilizarlos para fijar expectativas durante el lanzamiento y el triaje de escalada.

---

## Objetivos de la ejecución de la plataforma

| Dominio / Servicio | métrica | Meta |
|---|---|---|
| Identidad — Puntos finales auténticos | Disponibilidad | 99,95% mensual |
| Localisation — Context fetch | Latency p95 | ≤150ms |
| Menú — Página de listado de productos (PLP) | Latency p95 | ≤200ms |
| Rendición de contenido de CMS | Latency p95 | ≤150ms (CCDN) |
| Ofertas de alimentación | Latency p95 | ≤200ms |
| Lista de pedidos | Latency p95 | ≤200ms |
| Envío de salida | Success p99 | ≥99.5% |
| Tarjeta de pago | Tasa de éxito | ≥99.5% |
| La recompensa de la redención | Success p99 | ≥99.8% |
| Seguimiento de pedidos | Disponibilidad | 99.9% |
| In-app mensaje alimenta frescura | Staleness max | ≤60 segundos |
| Byte Portal consultas de usuario/role | Latency p95 | ≤500ms |

---

## Notas

**Atención de salida (≥99.5% p99 éxito)** — Las claves de Idempotencia aseguran que las sumisiones retrigidas no creen pedidos duplicados. Un 409 en el nuevo envío devuelve el orden originalRef.

**Recompensa de lealtad redención (≥99,8% p99 éxito)** Este es el mayor éxito de SLO en la plataforma, reflejando los ingresos y la sensibilidad de confianza de las redenciones de recompensa fracasadas.

**La frescura del mensaje de aplicación (≤60s)** — La alimentación se considera firme después de 60 segundos. Se activa un tiro-a-refresh en la caducidad TTL.

**CMS render (≤150ms CDN-cached)** En CDN cache miss, el inconveniente es la versión en caché en lugar de un fracaso en vivo.

---

:::tip Relacionados
- [API Versioning &quot; Deprecation](/docs/byte-capabilities/reference/api-versioning)- ventanas deprecation que afectan la planificación
:::

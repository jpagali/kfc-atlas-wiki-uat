---
title: Checkout
description: Cómo la plataforma Atlas guía a los clientes de carretilla para poner orden – coleccionar detalles de entrega, validar todo y enviar la intención de pedido.
sidebar_label: Checkout
---

# Checkout

**What it does:** Guía al cliente desde el carro hasta el orden: recoger los detalles de la entrega, validar todo y enviar la intención del pedido.

**Why it matters:** El checkout es el paso más alto. Cualquier falla aquí significa una venta perdida. El checkout debe manejar los usuarios invitados, las diferencias de entrega vs. colección, y ser resistente a errores de presentación.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **El checkout del cliente** | No todos los clientes quieren crear una cuenta | Permite a los clientes hacer un pedido sin firmar en | Checkout basado en sesión: OTP email o sesión anónima utilizada; carrito vinculado a sesión | Checkout Orchestrator, Servicio de Dirección | Carrito válido con artículos | No hay historial de pedidos o lealtad para las sesiones de invitados; direcciones no guardadas | Tasa de conversión de salida de clientes |
| **Atención: entrega** | El cliente quiere alimentos entregados a su dirección | Recoge la dirección de entrega, muestra honorarios, presenta orden | Dirección validada → gastos de entrega citado → orden presentado con información de entrega adjunta | Checkout Orchestrator, Servicio de Dirección, Geo service | Configuración del modo de entrega; almacena con cobertura de entrega activa | La dirección debe estar dentro de la zona de cobertura; las tarifas se calculan en backend (no Byte Helium-owned) | Tasa de comprobación de la entrega |
| **Checkout — Collection** | Recogiendo al cliente en la tienda | Verificación simplificada con selección de tiendas y tiempo de recogida | Tienda confirmada → ninguna dirección necesaria → orden presentado | Checkout Orchestrator | Juego de modo de colección; tienda abierta | La tienda debe estar en estado abierto; las políticas de lucha pueden limitar las órdenes | Tasa de comprobación de la colección |
| ** Variantes de entrega de salida** | Diferentes mercados/escenarios tienen diferentes flujos de salida | Admite configuraciones de pasos de checkout específicas del mercado | Orchestrator administra las sesiones de checkout de la variante; los pasos varían por contexto | Checkout Orchestrator | Variante de mercado configurada | Las variables deben ser configuradas por el equipo del mercado, no por el propio servicio de Byte Helium | Tasa de finalización por variante |
| # Order Again # | El cliente quiere repetir un pedido anterior | Repopulates cart with items from a past order | Detalles del pedido anterior recogido → artículos añadidos de nuevo a la cesta → checkout reanudado | Servicio de pedidos, Servicio de Carrito | El cliente debe ser firmado; los pedidos anteriores deben existir | Los elementos no disponibles en el menú actual serán excluidos con una advertencia | Tasa de reordenamiento |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Guest Checkout / Delivery Checkout</summary>

- **FRD References:** [FRD-HEL-012](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-012), [FRD-HEL-013](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-013), [FRD-HEL-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-014), [FRD-HEL-015](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-015)
- **TRD Domain:** Checkout (Core)
- **Key Interfaces / APIs:** Start/Resume Checkout, Address Create/Validate, Fees & Taxes Quote, Submit Order
- **Data Contracts:** CheckoutSession (id, cartRef, mode, steps); OrderIntent (totals, tenders, deliveryInfo — with idempotency keys)
- **Source Summary:**
  - Checkout submission p99: ≥99.5% success
  - Idempotency keys prevent duplicate orders on resubmit (409 replay returns original orderRef)
  - Fees and taxes calculated by backend — Byte Helium displays only
  - Orchestrator APIs: additive changes only, 120-day deprecation
  - Correlation IDs tracked for all submission events

</details>

---

:::tip See it in the wiki
- How customers experience checkout in the front-end → [Order and Get: Checkout](/docs/frontend/customer-journey/order-and-get/checkout)
:::

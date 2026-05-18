---
title: Seguimiento de pedidos &quot; Historia
description: Cómo la plataforma Atlas permite a los clientes ver el estado de entrega, ver pedidos pasados, reordenar y acceder a los recibos.
sidebar_label: Seguimiento de pedidos &quot; Historia
---

# Seguimiento de pedidos &quot; Historia

**What it does:** Permite a los clientes ver dónde está su entrega, ver pedidos pasados, reordenar y acceder a los recibos.

**Why it matters:** La experiencia posterior al pedido forma NPS y la tasa de compra de repetición. El seguimiento en tiempo real reduce los contactos de servicio al cliente. La historia del orden conduce el comportamiento de reorden.

:::warning Seguimiento en tiempo real es de mercado-opcional
El seguimiento de la entrega de GPS en vivo es **no disponible automáticamente** para cada mercado. Requiere integración con un proveedor de logística de terceros. Sin esta integración, los clientes ven el estado del pedido POS solamente (aceptado/ready/completed). Esto debe decidirse y configurarse antes de ir a vivir.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Delivery Order Tracking** | El cliente quiere saber cuándo llega la comida | Muestra el estado de entrega en tiempo real y el tiempo estimado de llegada | Tracking Gateway proporciona eventos de entrega y ETA; encuestados o empujados dependiendo del mercado | Servicio de seguimiento de pedidos, logística 3P (opcional) | Orden de entrega colocado | El seguimiento en tiempo real es opcional por mercado; el retroceso es el estado de orden POS | Seguimiento de la tasa de compromiso, los contactos de CS evitados |
| Orden de entrega obligatoria** | Orden de confirmación de las necesidades del cliente | Mostrar orden confirmado pantalla con los siguientes pasos | Confirmación del evento de Tracking; confirmación renderizada | Servicio de seguimiento de pedidos | Orden colocado | N/A | Tasa de confirmación del pedido |
| **Ver historia del orden** | Cliente registrado quiere ver pedidos anteriores | Lista todos los pedidos anteriores con fechas, artículos y totales | Servicio de pedidos devuelve la lista paginada de pedidos del usuario | Servicio de pedidos | Cliente firmado | Ordenes de huéspedes no accesibles a través de la historia | Tasa de compromiso de historia del orden |
| **Ver detalles del pedido / Receipt** | El cliente quiere ver lo que ordenó y pagó | Muestra el desglose completo del pedido con la recepción detallada | Detalles del pedido recogido; recepción entregada del servicio de Receipt; enlace CDN disponible | Servicio de pedidos, Servicio de recepción | Firmada; orden terminada | Las órdenes de los huéspedes se pueden enviar por correo electrónico únicamente | Tasa de acceso recibida |
| # Order Again # | El cliente quiere repetir un pedido favorito | Repopulates cart with items from a past order and starts checkout | Orden anterior traída; artículos disponibles añadidos al carrito nuevo | Servicio de pedidos, Servicio de Carritos, Servicio de Menú | Firmada; el orden anterior existe | Los artículos eliminados del menú actual están excluidos con advertencia | Tasa de reordenamiento |
| ** Órdenes favoritas** | El cliente tiene una orden | Permite al cliente guardar y acceder rápidamente a una configuración de pedido favorita | Favorito guardado contra el perfil del cliente; cargado de nuevo en el carrito bajo demanda | Servicio de pedidos, Servicio de Carrito | Firmada | Los favoritos están conectados con la cuenta - no están disponibles para los huéspedes | Tasa de ahorro favorable, tarifa reordenada de favor |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Delivery Tracking / Order History</summary>

- **FRD References:** [FRD-HEL-024](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-024), [FRD-HEL-025](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-025), [FRD-HEL-052](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-052), [FRD-HEL-053](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-053), [FRD-HEL-054](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-054), [FRD-HEL-055](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-055), [FRD-HEL-056](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-056)
- **TRD Domain:** Order Tracking (Delivery)
- **Key Interfaces / APIs:** Order List (paginated), Order Detail, Delivery Events/ETA (poll/push), Receipt Render
- **Data Contracts:** Order (id, status, items[], totals); DeliveryEvent (ts, type, eta); Receipt (url, type, amount)
- **Source Summary:**
  - Tracking availability target: 99.9%
  - Real-time tracking optional per market; 3P logistics integration market-dependent
  - Event gap fallback: POS order status used; sequence IDs tracked for telemetry
  - Order list p95: ≤200ms
  - Orders/Tracking APIs: additive only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers track their delivery in the front-end → [Track Order: Delivery](/docs/frontend/customer-journey/track-order/delivery) and [Pickup](/docs/frontend/customer-journey/track-order/pickup)
:::

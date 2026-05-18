---
title: Capacidades de helio Byte
description: Todas las capacidades de cara al cliente de Byte Helium — la web y la aplicación de la plataforma KFC Atlas.
sidebar_label: Sinopsis
---

# Las capacidades de helio

**Byte Helium** es el sistema de diseño empresarial de Yum! y la fundación frontal. En Atlas, el front-end global de KFC se construye en Helio y se descolora para la marca KFC, cubriendo todo desde el inicio de sesión y el menú navegando hasta el checkout, pago y seguimiento post-orden.

En el contexto Atlas, Helium hace lo que proporciona el backend. No tiene precios propios, elegibilidad de promo, estado de orden o contenido, los que pertenecen a Byte Commerce, Promo Engine, y CMS respectivamente. El trabajo de Helium es proporcionar la fundación frontal que Atlas presenta a través de la marca KFC y el viaje al cliente.

---

## Dominios de Capacidad de Helio Byte

| Dominio | Lo que cubre |
|---|---|
| [Identidad In](/docs/byte-capabilities/domains/identity) | Creación de la cuenta, Registro OTP, Google/Apple OAuth, perfil, privacidad |
| [Localización &quot; Modo de Orden &quot;](/docs/byte-capabilities/domains/localisation) | Detección de mercado, modo de recogida vs., localizador de tiendas |
| [Menú Hojear &amp; PDP](/docs/byte-capabilities/domains/menu) | Listado de productos, detalle de artículo, modificadores, nutrición/alergenos |
| [Carrito](/docs/byte-capabilities/domains/cart) | Agregar/actualizar/remove artículos, aplicar códigos promocionales, adjuntar recompensas de lealtad |
| [Checkout](/docs/byte-capabilities/domains/checkout) | Invitado y registrado de checkout, entrega y colecciones variantes |
| [Pagos &quot; prestamistas](/docs/byte-capabilities/domains/payments) | Tarjeta, tarjeta guardada, vale, tierna división, tarjeta regalo |
| [Promociones &quot; Lealtad](/docs/byte-capabilities/domains/promotions-loyalty) | Ofrece alimentación, recompensas, desafíos, lealtad a bordo, comas prefs |
| [Donaciones &amp; Consejos](/docs/byte-capabilities/domains/donations-tips) | Donaciones caritativas Add-Hope, consejos para el conductor |
| [Seguimiento de pedidos &quot; Historia](/docs/byte-capabilities/domains/order-tracking) | Seguimiento de entrega en tiempo real, historial de pedidos, recibos, reorden, favoritos |
| [Contenido &quot; Legal &quot;](/docs/byte-capabilities/domains/content-legal) | CMS brand pages, legal documents, cookie consent |
| [Participación &quot; Mensajería &quot;](/docs/byte-capabilities/domains/engagement) | Preferencias de notificación de entrada en la aplicación, push y email |

---

:::caution Lo que Byte Helium no posee
Byte Helium renders but does not own: pricing (Commerce Backend), elegibilidad de promo (Promo Engine), puntos de fidelidad (servicio de lealtad), captura de pago (PSP), contenido de menú (Byte Menu), contenido legal (Legal CMS), o estado de almacén (Byte Portal + POS). Véase[Límites de responsabilidad](/docs/byte-capabilities/enablement/capability-boundaries)para el mapa de propiedad completo.
:::

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Byte Helium Capability Overview</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001), [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domains:** Identity, Localisation, Menu, Cart, Checkout, Payments, Loyalty, Tracking, Content
- **Key Interfaces / APIs:** App shell, Context/Store selection, Menu, Cart, Checkout, Payment, Order Status
- **Data Contracts:** Session context, cart, checkout session, payment intent, order summary, order status
- **Source Summary:**
  - Byte Helium is the customer-facing front-end foundation and orchestration surface for the KFC digital journey
  - Backend systems remain the source of truth for pricing, eligibility, order state, and most configuration
  - Domain-level technical details live in the linked capability pages below, each with its own source notes where needed

</details>

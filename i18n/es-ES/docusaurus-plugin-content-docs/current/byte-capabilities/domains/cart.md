---
title: Carrito
description: Cómo la plataforma Atlas gestiona lo que los clientes han seleccionado — ítems, cantidades, recompensas y promociones— antes del checkout.
sidebar_label: Carrito
---

# Carrito

**What it does:** Gestiona lo que el cliente ha seleccionado — artículos, cantidades, recompensas y promociones— antes de proceder a la comprobación.

**Why it matters:** La integridad del carro es fundamental para los ingresos. Los errores de precios en el carrito, el estado del carrito perdido, o las aplicaciones de promo fallidas directamente causan órdenes abandonadas.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Añada el artículo al carro** | El cliente quiere iniciar un pedido | Añade un elemento de menú (con modificadores elegidos) al carrito | Byte Helium envía una solicitud de add-line a Cart Service; el precio se calcula por backend a su vez | Servicio de Carritos, Servicio de Menú | Configuración del modo de localización y orden | Carrito atado a la sesión; carritos de invitados perdidos si la sesión expira | Tasa de adición a coche |
| **Actualizar / Quitar la línea del carro** | El cliente cambia de opinión | Actualiza la cantidad o elimina un artículo del carrito | Cart Service update/remove line call; totals recalculated | Cart Service | El artículo debe estar en el carro | La corrección en tiempo real puede cambiar el precio superficial | Tasa de modificación del carro |
| ** Código de Procedimiento de Aplicación** | El cliente tiene un código promo | Valida y adjunta un código promo al carrito para un descuento | Byte Helium envía código promo al servicio Cart/Promo; elegibilidad validada lado del servidor; repelido del carrito | Servicio de Carrito, Motor Promo | Carrito debe tener artículos; promo debe ser válido para el mercado | El código inválido devuelve el error (400) pero mantiene intacto el carrito; un código promo a la vez (configura del mercado) | Tasa de rescate promocional, tasa de descuento |
| **Añadir recompensa al carro** | El miembro de la lealtad quiere usar una recompensa | Adjunta una recompensa de lealtad al carrito (por ejemplo, artículo gratis) | Recompensa validada con servicio de lealtad; token de recompensa adjunta al carrito | Servicio de lealtad, Carrito | El cliente debe ser firmado y matriculado en la Lealtad | La recompensa no debe ser caducada; sólo un tipo de recompensa por carrito (conferencia de mercado) | Tasa de fijación de recompensa |
| **Remove Reward from Cart** | El cliente cambia de opinión sobre una recompensa | Detiene la recompensa del carrito | Retirada la recompensa del servicio de lealtad; total del carrito actualizado | Servicio de lealtad, Carrito | La recompensa debe ser en carro | Retorno de recompensa al saldo disponible | Tasa de modificación del carro |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Add Item to Cart / Apply Promo</summary>

- **FRD References:** [FRD-HEL-011](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-011), [FRD-HEL-048](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-048)
- **TRD Domain:** Cart
- **Key Interfaces / APIs:** Add/Update/Remove Line (App → Cart), Apply/Remove Promo (App → Cart)
- **Data Contracts:** Cart (id, lines[], totals, benefits[]) — idempotent ops
- **Source Summary:**
  - All cart operations are idempotent (safe to retry)
  - Pricing correctness: 100% accuracy required (enforced via golden tests in backend)
  - Invalid promo (400): error shown, cart state preserved
  - Cart API: additive changes only, 90-day deprecation window
  - Promo eligibility is always server-side — never computed in Byte Helium

</details>

---

:::tip See it in the wiki
- How customers experience the cart front-end → [Order and Get: Cart](/docs/frontend/customer-journey/order-and-get/cart)
- How to create and manage promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Promotion Recipes](/docs/playbooks/promotions-setup-guide)
:::

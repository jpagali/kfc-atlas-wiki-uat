---
title: Donaciones &amp; Consejos
description: Cómo la plataforma Atlas permite a los clientes añadir una donación caritativa o una propina de entrega durante el checkout.
sidebar_label: Donaciones &amp; Consejos
---

# Donaciones &amp; Consejos

**What it does:** Permite a los clientes añadir una donación caritativa (Add Hope) o una propina para su conductor de entrega durante el checkout.

**Why it matters:** Add Hope es un programa mundialmente significativo de la KFC CSR. Consejos mejorar la satisfacción del conductor y la percepción de calidad de entrega. Ambos requieren cuidadoso manejo de pagos y habilitación de mercado.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| ** Donación de esperanza** | Los clientes quieren donar a una causa en el checkout | Permite al cliente añadir una donación a su total de pedido | El servicio de donación ofrece opciones de causa; el cliente selecciona la cantidad o redondeo; línea de donación agregada al pedido | Servicio de donación, PSP | Checkout activo; Add-Hope habilitado para el mercado | El mercado debe habilitar Add-Hope; si el servicio de donación falla (5x), la donación saltó y orden marcado | Tasa de apego a la donación, valor promedio de donación |
| **Añada la ficha del conductor de envío** | El cliente quiere dar propina a su conductor | Permite al cliente añadir una cantidad de propina a su pedido de entrega | El servicio de propina otorga la propina al orden; puede ser la captura PSP separada | Servicio de propinas, PSP | Modo de entrega activo; checkout en progreso | Consejos sólo disponibles para pedidos de entrega; propina puede ser una captura de pago separada | Tasa de apego de propina, valor promedio de propina |
| **Ver acerca de Add Hope** | El cliente quiere saber lo que donan para | Renders the Add-Hope information page | Página CMS traída y renderizada | CMS service, Donation config | Ninguno | Contenido gestionado en CMS — no Byte Helium | Conversión de páginas, conversión de donaciones |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Add-Hope Donation / Driver Tip</summary>

- **FRD References:** [FRD-HEL-022](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-022), [FRD-HEL-023](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-023), [FRD-HEL-073](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-073)
- **TRD Domain:** Donations & Tips
- **Key Interfaces / APIs:** Donation Config/Collect, Add Tip (Bearer auth)
- **Data Contracts:** DonationLine (amount, causeId); TipTender (amount, method)
- **Source Summary:**
  - Add-Hope market-enabled via Byte Portal configuration
  - Donation service failure (5xx): donation skipped, order tagged for reporting
  - Tip may be a separate PSP capture (market and PSP dependent)
  - Reporting fields required for compliance (donation amounts tracked)
  - APIs: additive changes only, 90-day deprecation

</details>

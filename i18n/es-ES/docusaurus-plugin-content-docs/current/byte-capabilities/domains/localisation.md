---
title: Localización &quot; Modo de Orden &quot;
description: Cómo la plataforma detecta el mercado del cliente, establece su idioma y les permite elegir la entrega o la colección.
sidebar_label: Localización &quot; Modo de Orden &quot;
---

# Localización &quot; Modo de Orden &quot;

**What it does:** Detecta el mercado y el idioma del cliente, les permite elegir cómo quieren ordenar (entrega o colección), y selecciona su tienda o dirección de entrega.

**Why it matters:** Cada experiencia posterior — menu, precios, promociones, checkout— depende de que el contexto del mercado se establezca correctamente primero. Hacer esto mal significa que los clientes ven el menú equivocado, los precios incorrectos, o no pueden comprobarlo en absoluto.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| *Iniciar la localización* | Los clientes deben estar en juego con el mercado adecuado | Detecta el mercado del cliente mediante geo-IP o selección explícita; establece local | App calls Config service → consigue mercados disponibles; Geo service resolves location → market confirmed | Servicio Geo, Servicio Config, Servicio Contexto | El mercado debe configurarse en Byte Portal | Context fetch debe ser ≤150ms p95; la detección del mercado puede fallar si geo bloqueado | Tasa de éxito de localización, tasa de deserción |
| **Modo de orden de seguridad — Colección** | El cliente quiere recoger de una tienda | Permite buscar y seleccionar una tienda KFC para la colección | El cliente selecciona almacenar → almacenar ID almacenado en contexto de sesión | Localizador de tiendas, Servicio de Contexto | La tienda debe ser activa y abierta | No se puede recoger de tiendas cerradas o limitadas | Tasa de recaudación |
| ** Modo de orden de seguridad - Entrega** | El cliente quiere comida entregada | Permite al cliente introducir una dirección de entrega y valida la cobertura | El cliente entra en la dirección → verificación de cobertura → zona de entrega confirmada | Geo service, Servicio de cobertura, Servicio de contexto | Tienda con cobertura de entrega debe estar disponible | Sin retroceso si no hay cobertura de tiendas; la cobertura varía según el mercado | Tasa de entrega, tasa de cobertura |
| **Encontrar un KFC (Store Locator)** | El cliente quiere encontrar su restaurante más cercano | Muestra un mapa/lista de tiendas KFC con horas, distancia y características | Calls Store Locator con ubicación del cliente; devuelve la lista de tiendas con estado y horas | Localizador de tiendas, proveedor de mapas, datos de almacén | Permiso del GPS/ubicación o entrada de dirección manual | Horas de negociación gestionadas en Byte Portal; estado en tiempo real (abierto/cerrado) debe ser preciso | Compromiso de localización de tiendas |
| **Ver &gt; Editar direcciones guardadas** | Clientes registrados quieren reutilizar las direcciones de entrega | Muestra direcciones guardadas y permite a los clientes editarlas o eliminarlas | Lista de direcciones del servicio Dirección; actualizaciones escritas de vuelta | Servicio de atención | El cliente debe ser firmado | No disponible para los usuarios invitados | Velocidad de control, velocidad de salida |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Start Localisation</summary>

- **FRD References:** [FRD-HEL-005](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-005), [FRD-HEL-082](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-082)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Locale Config, Geo Resolve Market, Set Fulfilment Mode
- **Data Contracts:** Context (market, language, mode, storeId — signed context IDs)
- **Source Summary:**
  - Context persisted per user/device; signed for integrity
  - p95 fetch target: ≤150ms
  - Fallback: if coverage unavailable (5xx), offer collection mode with error telemetry
  - Context API: backward compatible minor, 90-day deprecation
  - Market config owned by Byte Portal / Shared Catalogues

</details>

<details>
<summary>📎 Technical Source: Set Order Mode — Delivery</summary>

- **FRD References:** [FRD-HEL-007](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-007)
- **TRD Domain:** Localisation & Order Mode
- **Key Interfaces / APIs:** Set Fulfilment Mode, Coverage Check, Address Validate
- **Data Contracts:** Context (mode=delivery, storeId, coverageZoneId)
- **Source Summary:**
  - Coverage check runs before mode is confirmed
  - Failure (no coverage): user offered collection mode instead
  - Context signed and persisted across session
  - Delivery tracking availability is market-dependent (optional)
  - Trading hours from Byte Portal Stores module must be accurate

</details>

---

:::tip See it in the wiki
- Customer-facing store locator and order mode flows → [Find a Store](/docs/frontend/customer-journey/find-a-store/) and [Setup Order](/docs/frontend/customer-journey/setup-order/)
- Configuring store hours and coverage in Byte Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
:::

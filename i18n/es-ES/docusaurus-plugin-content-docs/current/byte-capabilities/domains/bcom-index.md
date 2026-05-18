---
title: Capacidades Byte Commerce Backend
description: Todas las capacidades de propiedad de Byte Commerce Backend — el motor de procesamiento de pedidos de la plataforma KFC Atlas.
sidebar_label: Sinopsis
---

# Capacidades de backend de Byte Commerce

**Byte Commerce Backend** es el motor detrás de cada transacción en la plataforma Atlas. Es invisible para los clientes, pero orquesta todo entre los sistemas de front-end y en la tienda — gestión de carritos, precios, cálculos fiscales, procesamiento de pagos, estado de pedido, inyección de POS y la ingestión de pedidos de agregadores.

:::note Byte POS Caveat
Byte Commerce habla directamente a **Byte POS**. Si un mercado no está utilizando Byte POS, **Byte Connect** debe ser incluido en el paquete Byte Commerce onboarding para que Byte Commerce pueda llegar al mercado POS a través del camino **Byte Commerce - título Byte Connect - propiedad POS**.
:::

Cada pedido colocado a través de Byte Helium es procesado por Commerce Backend. Cada precio que el cliente ve fue calculado por Commerce Backend. Cada pago fue autorizado a través del orquestador de pago de Commerce Backend.

---

## Qué demonios de comercio posee

| Dominio | Lo que hace |
|---|---|
| **Ordering &amp; Cart Lifecycle** | Creación de carros, mantenimiento, precios, máquina del estado del orden |
| **Consumo de Medios, Precios e Impuestos** | disponibilidad de menús, precios dinámicos, cálculo de impuestos, aplicación promo |
| **Pagos y reembolsos** | Pago auth, captura, procesamiento de reembolso, integración PSP |
| **Customer Accounts &quot; Auth** | Identidad vía OIDC/OAuth2; perfil del cliente |
| **Preferencias &quot; Loyalty Linking** | Favoritos, conexión de la cuenta de lealtad, seguimiento del consentimiento |
| **POS / KDS Integration** | Orden de inyección a sistemas en tienda; sincronización de estado, utilizando Byte Connect cuando el mercado POS no es Byte POS |
| ** Integración del agregador (Byte Connect)** | Ingestión normalizada de Uber Eats, DoorDash y otros agregadores |
| * Migración de datos* | Migrando a los clientes heredados y la historia del orden |
| **Observabilidad** | Registro, rastreo, monitoreo de salud, métricas |

---

## Contratos clave de datos

Estos son los esquemas de API/evento versionados que rigen cómo Commerce Backend se comunica con Byte Helium, Byte Portal, sistemas POS y agregadores.

| Identificación de contrato | Lo que Describe |
|---|---|
| DCI#BCOM-Cart-API-v1 | Estructura del carro: líneas, totales, beneficios |
| DCI#BCOM-Order-API-v1 | Registro del pedido: artículos, estado, totales, clave de idempotencia |
| DCI#BCOM-Menu-Projection-v1 | Datos de menú proyectados para la tienda/canal |
| DCI#BCOM-Pricing-API-v1 | Solicitud de precios/respuesta con desglose fiscal |
| DCI#BCOM-POS-Order-API-v1 | Carga de pedido enviada a los sistemas POS |
| DCI#BCOM-KDS-Order-Event-v1 | Evento de tickets KDS con desglose de elementos/estación |
| DCI#BCOM-Order-Status-Event-v1 | Actualizaciones del estado de Fulfillment de POS/KDS |
| DCI#BCOM-Aggregator-Order-API-v1 | Formato de orden de agregación normalizado |
| DCI#BCOM-Aggregator-Status-Event-v1 | Actualizaciones del estado de nuevo a los agregadores |

---

:::tip Relacionados
- Referencia técnica completa →[Referencia de Backend de Comercio](/docs/byte-capabilities/reference/commerce-backend)
- ¿Necesita la caverna a bordo? Empieza con[Byte Connect](/docs/byte-capabilities/enablement/byte-connect)
:::

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Byte Commerce Backend Capability Overview</summary>

- **FRD References:** [FRD-BCOM-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144136503), [FRD-BCOM-014](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4144464036), FRD-BCOM-033, FRD-BCOM-057
- **TRD Domains:** Cart, Pricing, Payments, Order Management, POS Integration, Aggregator Integration
- **Key Interfaces / APIs:** Cart API, Pricing API, Order API, POS Order API, Aggregator Order API, Status Events
- **Data Contracts:** Cart, order, pricing response, payment transaction, POS payload, order status event
- **Source Summary:**
  - Byte Commerce Backend is the transactional source of truth behind the customer journey rendered by Byte Helium
  - It owns pricing, taxes, payment orchestration, order lifecycle, and downstream handoff into POS and aggregator channels
  - Lower-level contract detail is maintained in the dedicated [Commerce Backend Reference](/docs/byte-capabilities/reference/commerce-backend)

</details>

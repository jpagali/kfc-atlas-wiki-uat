---
title: Capacidades Byte Portal
description: Todas las capacidades de propiedad del Portal Byte — el plano de control de administración para los equipos de mercado y operaciones en la plataforma KFC Atlas.
sidebar_label: Sinopsis
---

# Capacidades del Portal Byte

**Byte Portal** es el avión de control de administración emparejado con Byte Commerce — el mercado de herramientas y los equipos de operaciones utilizan para configurar y operar la plataforma Atlas detrás del extremo frontal. Sin Byte Portal, los mercados no pueden ir en directo. Cada experiencia de clientes en Atlas depende de que algo esté correctamente configurado en Byte Portal primero.

Byte Portal no autoriza los menús (es decir, Byte Menu), no procesa los pagos (es decir, el PSP), y no envía notificaciones de presión (es decir, el proveedor de presión). Configura, asigna y controla todo lo demás.

---

## Qué Portal Byte posee

| Capacidad | Qué hacen los equipos de mercado aquí |
|---|---|
| ** Funciones de los usuarios (RBAC)** | Invitar a los usuarios, asignar funciones, hacer cumplir el alcance de mercado/store/grupo |
| **Store &quot; Group Configuration** | Configurar tiendas, horarios de comercio, estado en tiempo real, mapeo de POS, trituración |
| **Minu Assignment &quot; Patching** | Asignar versiones de menús publicados; aplicar precio, disponibilidad y anulaciones basadas en el día |
| **Configuración de promociones** | Crear promociones con reglas de elegibilidad, códigos, presupuestos y análisis |
| **Configuración de texto** | Definir los perfiles fiscales, tarifas, reglas y redondeo por mercado |
| **Configuración de pagos** | Configurar perfiles PSP, métodos de pago, reglas de enrutamiento, políticas de recarga |
| **Reembolsos de pedidos* | Pedidos de búsqueda, reembolsos de procesos, gestionar ajustes |
| **Localización &quot; Gestión del Contenido** | Gestionar locales, claves de traducción, bloques de contenido y avisos legales |
| **Banderas decorativas &quot; Ajustes** | Rollouts de funciones de control por mercado, canal o segmento del cliente |
| **Informing &quot; Exports** | Definir informes, guardar puntos de vista, exportar datos a la demanda o según el calendario |
| **Distribuciones de Internet** | Suscríbase sistemas de terceros a eventos de plataforma |
| **Audit &quot; Observability** | Immutable audit log of all admin actions; health checks and SLO tracking |

---

:::tip Ver Portal de Byte en acción
Guías paso a paso para cada tarea Portal →[Guía del Portal de Admin](/docs/admin-portal-guide/)
:::

:::caution Byte Portal no autor menús
Contenido de menú (artículos, descripciones, precios, opciones) se crea en **Meta Menu** — una herramienta separada fuera de la plataforma Atlas. Byte Portal asigna versiones de menú ya publicadas y puede aplicar parches en la parte superior, pero no puede crear contenido de menú desde cero.
:::

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Byte Portal Capability Overview</summary>

- **FRD References:** [FRD-PORTAL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), [FRD-PORTAL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), FRD-PORTAL-041, FRD-PORTAL-063
- **TRD Domains:** RBAC, Store Configuration, Menu Assignment, Promotions, Tax, Payments, Reporting, Audit
- **Key Interfaces / APIs:** Admin UI, RBAC policy engine, configuration services, export jobs, audit events
- **Data Contracts:** User role scope, store config, menu assignment, promotion config, tax profile, payment profile, audit record
- **Source Summary:**
  - Byte Portal is the configuration and operational control plane that determines how the market runs on Atlas
  - It does not process customer transactions directly, but its settings materially shape what Byte Helium and Commerce Backend do at runtime
  - Step-by-step operator workflows remain in the [Admin Portal Guide](/docs/admin-portal-guide/)

</details>

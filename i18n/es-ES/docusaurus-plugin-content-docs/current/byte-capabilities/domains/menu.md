---
title: Menú Hojear &amp; PDP
description: Cómo la plataforma Atlas muestra a los clientes el menú localizado, detalles de los elementos, modificadores e información nutricional.
sidebar_label: Menú Hojear &amp; PDP
---

# Menú Hojear &amp; PDP

**What it does:** Muestra a los clientes el menú localizado para su mercado y tienda seleccionada, con detalles completos, modificadores e información nutricional.

**Why it matters:** El menú es la parte superior del embudo — cada pedido comienza aquí. La precisión del menú, la velocidad y la relevancia conducen directamente las tasas de adición a caja y el valor promedio del orden.

:::caution Byte Helium no posee el menú
Byte Helium renders the menu it receives from the Menu Service. Los precios, las descripciones de los elementos, la disponibilidad y los modificadores se gestionan en **Byte Menu** (la herramienta de autorización de menús) y se asigna a través del **Byte Portal**. Si algo está mal con el menú, la solución no está en Byte Helium.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Ver Menú Localizado (PLP)** | Los clientes necesitan ver lo que hay disponible | Muestra la página de lista de productos con categorías y artículos para la tienda/canal seleccionada | Byte Helium calls Menu Servicio con contexto de tienda → obtiene categoría/tema lista → renders | Servicio de menús, Servicio de texto | La localización debe completarse primero | El precio es específico del mercado; Byte Helium no posee precios; PLP p95 ≤200ms | Tasa de impresión de menú, profundidad de desplazamiento |
| **Ver detalle del artículo (PDP)** | El cliente necesita información completa del artículo antes de ordenar | Muestra el nombre del artículo, descripción, imagen, precio, modificadores y información nutricional | Byte Helium calls Menu Servicio con ítem ID + contexto → consigue detalles completos | Menu Servicio | PLP visto; elemento en el menú | Opciones filtradas por contexto (por ejemplo, sólo artículos de entrega ocultos para la colección) | PDP view rate, modifier selection rate |
| **Modify Selected Menu Item** | El cliente quiere personalizar su pedido | Permite al cliente elegir tamaño, complementos, eliminar ingredientes y ajustar la cantidad | Opciones de modificador tomadas del Servicio de Menú; selecciones capturadas antes de añadir a la carta | Menu Servicio | El elemento debe tener modificadores configurados en el menú | No todos los artículos son personalizables; configuración de modificador es una responsabilidad de Byte Menu / mercado | Tasa de apego de modificador |
| **Nutrition &quot; Allergens Guide** | Los clientes necesitan información dietética | Muestra el desglose nutricional completo e información de alérgenos para los elementos del menú | Datos nutricionales obtenidos de índices de nutrición/puntos finales detallados | Servicio de nutrición (vía Menú) | El menú debe incluir datos nutricionales (configurados en Byte Menu) | Los datos deben ser autorizados y mantenidos en Byte Menu - no una responsabilidad de Byte Helium | Tasa de participación en la guía |
| **FAQ** | Los clientes tienen preguntas que no son órdenes | Renders a searchable FAQ page | CMS API devuelve las entradas de FAQ para el mercado locale; búsqueda es lado cliente | Servicio CMS | Contenido de preguntas frecuentes autorizado en CMS (Byte Portal) | Calidad del contenido depende de lo que los mercados publican en CMS | FAQ visitas de página, consultas de búsqueda |
| **View Job Board** | KFC utiliza su app/web como canal de reclutamiento | Listas de funciones abiertas en el mercado | Tira de ATS (Applicant Tracking System) a través de CMS proxy | Integración ATS, CMS | Integración ATS activa para el mercado | Datos de trabajo gestionados externamente, no en Atlas | Vistas de la página de atención |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: View Localised Menu (PLP)</summary>

- **FRD References:** [FRD-HEL-008](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-008)
- **TRD Domain:** Menu Browse & PDP
- **Key Interfaces / APIs:** PLP Menu Feed (App → Menu), PDP Item Detail (App → Menu)
- **Data Contracts:** MenuItem (id, name, price, options[] — market-specific pricing)
- **Source Summary:**
  - PLP filtered by store context and channel (delivery vs. collection items differ)
  - Soft-refresh triggered on cache age detection; no hard reload
  - PLP p95: ≤200ms; cache telemetry monitored
  - Pricing is market-specific and owned by Commerce Backend — Byte Helium renders only
  - Menu APIs: SemVer backward compatible minor, 120-day deprecation (markets need stage rollout time)

</details>

---

:::tip See it in the wiki
- How customers browse the menu front-end → [Find Products](/docs/frontend/customer-journey/find-products/)
- Managing menu items and modifiers in Byte Portal → [Admin Portal Guide: Products](/docs/admin-portal-guide/products/) and [Menus](/docs/admin-portal-guide/menus/)
:::

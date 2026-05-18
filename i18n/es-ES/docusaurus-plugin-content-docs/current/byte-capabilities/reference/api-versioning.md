---
title: API Versioning &quot; Deprecation
description: Cómo se versionan las APIs de la plataforma Atlas y cuánto aviso obtienen los mercados antes de romper los cambios.
sidebar_label: Versión de API
---

# 🔗 API Versioning &quot; Deprecation Reference

√ Todas las API de plataforma usan Versión Semántica. Los cambios de ruptura requieren importantes golpes de versión. Los mercados se notifican por delante de las ventanas de deprecación.

Comprensión de las ventanas deprecación importa para la planificación del mercado: las integraciones construidas antes de que termine una ventana de deprecación son seguras. Después de la ventana, se pueden aplicar cambios de ruptura.

---

## Deprecation Windows por API Domain

| API Domain | Política de compatibilidad | Aviso de deprecación |
|---|---|---|
| Identidad | Menor compatible con Backward | 90 días |
| Contexto / Localización | Menor compatible con Backward | 90 días |
| Menú | Menor compatible con Backward | 120 días (los mercados necesitan tiempo de puesta en escena) |
| Carrito | Cambios adicionales sólo | 90 días |
| Checkout Orchestrator | Cambios adicionales sólo | 120 días |
| Pagos / PSP | Cambios adicionales sólo | 180 días (se aplican mandatos de esquemas - ventana más larga en la plataforma) |
| Promo / lealtad | Cambios adicionales sólo | 120 días |
| Donaciones / Consejos | Cambios adicionales sólo | 90 días |
| Pedidos / Seguimiento | Cambios adicionales sólo | 120 días |
| CMS / CMS legales | Aditivo; locale/version-aware | 180 días |
| Engagement Platform | Cambios adicionales sólo | 120 días |

---

## Notas

**Pagos (180 días)** La ventana de deprecación más larga de la plataforma. Los cambios en el esquema de pago afectan a las integraciones del PSP, las fichas abovedadas y los requisitos de cumplimiento, todo lo cual requiere una mayor coordinación del mercado.

**CMS / Legal (180 días)** — Los documentos jurídicos se versionan por fecha efectiva por local. Los cambios en la API de CMS Legal requieren ciclos de revisión legal correspondientes antes de que los mercados puedan adoptar nuevas versiones.

**Menu (120 días)** Los mercados a menudo necesitan rollos de escenario completo (dev → puesta en escena → prod) antes de adoptar los cambios de menú API, por lo que la ventana es más larga que el Carrito o la Identidad.

**Los cambios adicionales sólo** — significa que nuevos campos o puntos finales se pueden añadir sin un golpe de versión. Los campos y comportamientos existentes no se cambian ni se eliminan durante la ventana de deprecación.

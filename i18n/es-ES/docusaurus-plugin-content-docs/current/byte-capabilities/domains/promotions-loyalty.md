---
title: Promociones &quot; Lealtad
description: Cómo la plataforma Atlas supera las ofertas personalizadas, gestiona las recompensas, rastrea los desafíos y conecta las cuentas de lealtad de los clientes a las órdenes.
sidebar_label: Promociones &quot; Lealtad
---

# Promociones &quot; Lealtad

**What it does:** Surfaces personalizadas ofertas, gestiona recompensas, rastrea retos y conecta la cuenta de lealtad del cliente con sus pedidos.

**Why it matters:** La lealtad y los promos son ingresos clave y palancas de retención. Cada oferta mal entregada o la redención fallida erosiona la confianza. Este dominio abarca todo el viaje al cliente, desde el descubrimiento hasta la finalización del pedido.

:::caution Eligibilidad es siempre lado servidor
Byte Helium nunca compute promo ni elegibilidad de recompensa localmente. Toda evaluación de elegibilidad ocurre en el Promo Engine en el servidor. Si una oferta aparece pero falla en la redención, la solución está en la configuración de promo en Byte Portal — no en Byte Helium.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Ver ofertas localizadas* | El cliente necesita descubrir qué ofertas están disponibles | Muestra las ofertas personalizadas para el mercado y cuenta del cliente | Las heces de Byte Helium ofrecen alimentación de Promo Engine con contexto de mercado + usuario; personalizadas si se firman en | Promo Engine, servicio de lealtad | Completo de localización | Los usuarios no informados ven ofertas no personalizadas; ofrece alimentación p95 ≤200ms | Ofertas visitas de página, oferta click rate |
| *Loyalty Onboarding* | Los nuevos clientes no saben sobre el programa de recompensas | Introduce el programa de fidelización y los impulsos de matriculación | In-app guía al cliente para unirse; vinculado a la creación de cuenta o post-orden | Servicio de lealtad | Cliente firmado | El programa de arrendamiento debe estar habilitado para el mercado | Tasa de escolarización |
| **Regístrate para recompensas de lealtad** | El cliente quiere unirse al programa de recompensas | Inscribe al cliente en el programa de fidelización del mercado | Llamada de inscripción al servicio de lealtad; balance de puntos inicializado | Servicio de lealtad | Cliente firmado | No puede unirse sin una cuenta; las reglas del programa varían según el mercado | Tasa de afiliación a la lealtad |
| **Ver puntos Balance** | El miembro de la lealtad quiere saber cuántos puntos tienen | Muestra el equilibrio de puntos actuales del cliente | Servicio de lealtad devuelve los puntos balance con fechas de vencimiento | Servicio de lealtad | Cliente firmado y matriculado | La precisión de puntos depende de la sincronización de servicio de lealtad | Tasa de compromiso |
| **Ver todas las recompensas** | El miembro de la lealtad quiere buscar recompensas disponibles | Lista todas las recompensas en el catálogo con los puntos requeridos costo | Recompensas de servicio de lealtad | Servicio de lealtad | Inscrito en lealtad | Disponibilidad de recompensas de mercado específico; costo en puntos varía | Opiniones de la página de recompensas |
| *Redeem a Reward* | El cliente quiere utilizar puntos ganados | Convertir puntos en un beneficio de recompensa aplicado al carrito | Llamada de rescate de recompensa (idempotente); token aplicada al carrito | Servicio de lealtad, Carrito | Saldo de puntos suficiente; carro activo | Prevención de doble redención (409); la recompensa puede expirar | Tasa de rescate de recompensa |
| **Ver &quot; Desafíos completos** | Las unidades de gamificación repiten visitas | Muestra retos que los clientes pueden completar para puntos de bonificación/rewards | Reto alimentado por el servicio de lealtad/Gamificación; seguimiento de la finalización | Servicio de lealtad/Gamificación | Inscrito en lealtad | El mercado debe tener retos configurados | Tasa de participación en los desafíos |
| **Recompensas receptivas el cumpleaños / registro** | Los eventos de lealtad desencadenan el compromiso | Automáticamente otorga recompensa en fechas especiales | Servicio de lealtad desencadena eventos de subvención; notificado al cliente | Servicio de lealtad, plataforma de compromiso | Inscrito; DOB capturado (para cumpleaños) | Requiere datos de perfil correctos; controles de configuración de mercado que disparan son activos | Tasa de prima de recompensa, tasa de orden posterior a la concesión |
| **Ver &quot; Administrar Preferencias de Comunicación** | El cliente controla sus preferencias de marketing | Permite que el cliente opte por correo electrónico, push, SMS marketing | CRM Prefs API read/write; audit trail maintained; synced to CMP | CRM, CMP, Push provider | Firmada | Canales específicos de mercado; pista de auditoría necesaria para el cumplimiento | Tasa de entrada por canal |
| ** Mensajes de aplicación (Inbox)** | Brand necesita llegar a los clientes en-app | Muestra una fuente de mensajes personalizados en aplicación de campañas CRM | Engagement platform provides message; messages paginated; deep links supported | Plataforma de participación | Se registró (personalizado) o anónimo (global) | Mensaje de frescura ≤60s; objetivos de enlace profundo deben ser activos | Entrada abierta, tasa de clic del mensaje |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Offers Feed / Reward Redemption</summary>

- **FRD References:** [FRD-HEL-019](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-019), [FRD-HEL-020](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-020), [FRD-HEL-021](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-021), [FRD-HEL-026](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-026), [FRD-HEL-031](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-031), [FRD-HEL-032](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-032), [FRD-HEL-033](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-033), [FRD-HEL-034](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-034), [FRD-HEL-035](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-035), [FRD-HEL-036](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-036), [FRD-HEL-037](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-037), [FRD-HEL-038](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-038), [FRD-HEL-039](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-039), [FRD-HEL-040](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-040), [FRD-HEL-041](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-041), [FRD-HEL-042](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-042), [FRD-HEL-043](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-043), [FRD-HEL-044](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-044)
- **TRD Domain:** Promotions & Loyalty
- **Key Interfaces / APIs:** Offers Feed (personalised), Validate/Apply Promo, Rewards Feed/Detail, Redeem Reward, Challenges Feed/Complete, Comms Prefs Get/Update
- **Data Contracts:** Offer (id, title, eligibility, value); Reward (id, cost, expiry); Prefs (channel, status, timestamp)
- **Source Summary:**
  - Eligibility always server-side — Byte Helium never computes eligibility locally
  - Offers feed p95: ≤200ms; reward redemption p99: ≥99.8%
  - Idempotency on redemption (409 returns original token — no double-spend)
  - Expired offer (410): hidden and user notified
  - Promo/Loyalty APIs: additive changes only, 120-day deprecation

</details>

---

:::tip See it in the wiki
- How customers find deals and rewards in the front-end → [Find Deals and Rewards](/docs/frontend/customer-journey/find-deals-and-rewards/)
- Creating and managing promotions in Byte Portal → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) and [Store Groups](/docs/admin-portal-guide/store-groups/)
- Step-by-step promotion guides → [Playbooks: Promotions Setup Guide](/docs/playbooks/promotions-setup-guide) and [Promotion Recipes](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo)
:::

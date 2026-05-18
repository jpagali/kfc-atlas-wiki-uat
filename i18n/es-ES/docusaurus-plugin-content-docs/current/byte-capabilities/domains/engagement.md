---
title: Participación &quot; Mensajería &quot;
description: Cómo la plataforma Atlas ofrece mensajes de aplicación y gestiona las preferencias de notificación de presión.
sidebar_label: Participación &quot; Mensajería &quot;
---

# Participación &quot; Mensajería &quot;

**What it does:** Ofrece mensajes de aplicación y gestiona las preferencias de notificación de presión, conectando campañas CRM con la experiencia de aplicación del cliente.

**Why it matters:** La mensajería en la aplicación y las notificaciones push son el principal canal de retención entre órdenes. La mala gestión de preferencias erosiona la confianza y provoca salidas.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **In-App Mensaje Inbox** | Brand quiere comunicarse con los clientes dentro de la aplicación | Muestra mensajes personalizados, promociones y actualizaciones en un pienso | Engagement platform provides paginated message feed; messages can deep-link to app sections | Plataforma de participación, CRM | Inscrito para personalizado; anónimo para global | Alimentar la frescura ≤60s; los objetivos de enlace profundo deben existir y ser activos | Entrada abierta, velocidad de clic de mensaje, conversión de enlace profundo |
| **Preferencias de notificación de compra** | El cliente controla las notificaciones que reciben | Permite al cliente cambiar las notificaciones push en o apagado por canal | Empujar prefs leer/escrito a CRM; token dispositivo sincronizado en cambio | CRM / Proveedor de empuje, token de dispositivo de empuje | Firmada; permiso de empuje concedido | Alcance de nivel de dispositivo y nivel de usuario; los cambios requieren sincronización de CRM | Tasa de opt-in, tasa de exclusión |
| ** Preferencias de marketing por correo electrónico** | El cliente controla el email marketing | Suscribirse o darse de baja del email marketing | CRM Prefs API actualizado; ruta de auditoría registrada | CRM | Firmada | Cargo de auditoría obligatorio; sincronización de la CP/RP si se vincula con el consentimiento | Tasa de opt-in por correo electrónico |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: In-App Inbox / Push Preferences</summary>

- **FRD References:** [FRD-HEL-051](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-051), [FRD-HEL-065](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-065), [FRD-HEL-066](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-066)
- **TRD Domain:** Engagement & Messaging
- **Key Interfaces / APIs:** In-App Feed (paginated), Message Acknowledge, Push Prefs Get/Update
- **Data Contracts:** InAppMessage (id, title, body, deeplink, expiry); PushPrefs (enabled, ts, source)
- **Source Summary:**
  - In-app feed freshness target: ≤60s (real-time or near-real-time)
  - Preference audit trail required (CRM compliance)
  - Stale feed (TTL exceeded): pull-to-refresh triggered
  - Push token synced on preference update
  - Engagement APIs: additive changes, 120-day deprecation

</details>

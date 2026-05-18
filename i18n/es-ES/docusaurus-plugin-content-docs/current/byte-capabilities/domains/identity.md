---
title: Identidad In
description: Cómo los clientes crean cuentas, inician, gestionan su perfil y controlan la configuración de privacidad en la plataforma Atlas.
sidebar_label: Identidad In
---

# Identidad In

**What it does:** Gestiona cómo los clientes crean cuentas, ingresan, gestionan su perfil y controlan la configuración de privacidad.

**Why it matters:** Cada interacción de lealtad, historia del pedido, dirección guardada y oferta personalizada depende de que un cliente sea autenticado. Sin registrarse, los clientes sólo pueden utilizar el checkout de invitados — no tienen acceso a recompensas, historial de pedidos o preferencias guardadas.

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Crear cuenta con correo electrónico** | Los nuevos clientes necesitan una forma de registrarse | Permite a los clientes inscribirse con una dirección de correo electrónico y un PIN único | El cliente entra email → recibe OTP → verifica → cuenta creada; sesión token emitida | Servicio de identidad/SSO, Entrega por correo electrónico | Servicio de correo electrónico activo para el mercado | OTP-limitado por dispositivo (preventos abuso) | Tasa de conversión de registro |
| ** In with Email + OTP** | Los clientes que regresan necesitan acceder a su cuenta | Inscripción sin contraseña por correo electrónico OTP | El cliente entra email → recibe OTP → verifica → sesión reanudar | Servicio de identidad/SSO, Entrega por correo electrónico | La cuenta debe existir | OTP límite de intento con retroceso | Tasa de éxito de la sesión, duración del período de sesiones |
| **Iniciar sesión / registrarse en Google** | Los clientes prefieren acceso social por correo electrónico | Enlace de cuenta de Google de una sola ficha para registrarse o registrarse | Google OAuth2 fluid → Servicio de identidad intercambia token → cuenta creada o vinculada | Google OAuth, Identidad/SSO | Google OAuth habilitado para el mercado | Requiere la cuenta de Google; decisión de habilitación del mercado | Tasa de adopción de inicio social |
| ** In / Register with Apple ID** | Los usuarios de iOS esperan el registro nativo de Apple | Inicia sesión con Apple para clientes iOS/macOS | Apple OAuth flujo → token intercambiado → cuenta creada o vinculada | Apple Sign-In, Identity/SSO | Configurador de Apple por mercado | Apple solamente; requiere la cuenta de Apple | Tasa de registro de iOS |
| **Editar Perfil** | Los clientes necesitan actualizar sus datos | Deje que los clientes registrados actualicen su nombre, DOB, e información de contacto | Llamada de actualización del perfil al servicio de identidad; los cambios persisten en CRM | Identidad/SSO, CRM | El cliente debe ser firmado | Los campos varían según la configuración del mercado | Tasa de terminación del perfil |
| **Ver &quot; Cambiar las preferencias de comunicación** | Los clientes deben controlar cómo se contactan | Muestras y actualizaciones de correo electrónico/push/SMS status opt-in por canal | Lea de CRM; las actualizaciones de clientes activan la sincronización y la pista de auditoría CMP | CRM, CMP, Push provider | Firmada; marco de consentimiento activo para el mercado | Carretera de auditoría obligatoria; cambios registrados | Email/push opt-in rate |
| ** Cuenta total** | Los clientes tienen derecho a borrar (GDPR) | Inicia solicitud de eliminación de cuentas en todos los sistemas conectados | Enviar solicitud de eliminación a Identidad; cascadas a CRM, Lealtad | Identidad/SSO, CRM, servicio de lealtad | El cliente debe ser firmado; no hay órdenes pendientes | La eliminación puede tomar tiempo para propagar; los datos de lealtad eliminados | Tasa de solicitud de supresión |
| ################################################################################################################################################################################################################################################################ | Los clientes deben terminar su sesión de forma segura | Finaliza la sesión, despeja las fichas, empuje sin registro | Sesión invalidada en Identidad; no registrada | Identidad/SSO, Proveedor de empuje | Sesión activa | Ninguno | N/A |
| **Ver Términos y Condiciones / Política de Privacidad** | Los clientes deben poder ver lo que acordaron | Renders los últimos documentos legales para el local del mercado | Fetches versioned document from Legal CMS; CDN-cached | CMS Legal, CMP | Ninguno (disponible a los huéspedes) | Contenido gestionado por el equipo legal, no por Byte Helium | Cumplimiento jurídico |
| **Cookie Consent Settings** | Requisitos reglamentarios en muchos mercados | Muestra categorías de cookies; permite a los clientes aceptar/rechazar | CMP proporciona widget de consentimiento; preferencias almacenadas con timetamp | CP/RP | Ninguno (disponible a los huéspedes) | Market must configure CMP categories | Tasa de aceptación del consentimiento |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Create Account with Email</summary>

- **FRD References:** [FRD-HEL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-001)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** Auth Email, OTP Verify, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OTP verified via Identity service; rate-limited per device (429 backoff)
  - Session token stored in device secure keystore (iOS/Android)
  - Auth endpoints SLO: 99.95% monthly availability
  - Backward compatible SemVer; 90-day deprecation window
  - PII masking applied in all logs

</details>

<details>
<summary>📎 Technical Source: Sign In with Google / Apple</summary>

- **FRD References:** [FRD-HEL-003](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-003), [FRD-HEL-004](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-004), [FRD-HEL-027](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-027), [FRD-HEL-028](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-028), [FRD-HEL-029](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-029), [FRD-HEL-030](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-030)
- **TRD Domain:** Identity & Sign-In
- **Key Interfaces / APIs:** OAuth Google Callback, OAuth Apple Callback, Session Mint
- **Data Contracts:** Session (accessToken, refreshToken, expiry)
- **Source Summary:**
  - OAuth2 flow: IdP → Identity service → session token
  - Existing account: linked; new account: created in same flow
  - No PAN or sensitive data in OAuth payload
  - Market enablement: both providers configurable per market
  - 90-day API deprecation window

</details>

<details>
<summary>📎 Technical Source: Delete Account</summary>

- **FRD References:** [FRD-HEL-067](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-067)
- **TRD Domain:** Identity & Sign-In + CRM + Loyalty
- **Key Interfaces / APIs:** Account Delete Request/Status
- **Data Contracts:** Account erasure request (userId, timestamp, status)
- **Source Summary:**
  - GDPR-compliant erasure flow; cascades to CRM and Loyalty
  - Deletion is asynchronous; status available via polling
  - Loyalty balance and history permanently deleted
  - Audit log retained for compliance (anonymised)
  - Blocks re-use of same email for configurable period

</details>

---

:::tip See it in the wiki
The Identity domain maps to the customer-facing sign-in and account flows documented in the Front-end Guide: [Access Account & Manage Profile](/docs/frontend/customer-journey/access-account-and-manage-profile/)
:::

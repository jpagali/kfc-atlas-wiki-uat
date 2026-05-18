---
title: Contenido &quot; Legal &quot;
description: Cómo la plataforma Atlas ofrece páginas de marca, FAQs, documentos legales y consentimiento de cookies para cada mercado y local.
sidebar_label: Contenido &quot; Legal &quot;
---

# Contenido &quot; Legal &quot;

**What it does:** Renders all non-transactional content — paginas de marca, FAQs, documentos legales y consentimiento de cookies— para cada mercado y local.

**Why it matters:** El cumplimiento legal y la confianza de la marca dependen de contenidos precisos, actualizados y localizados. Byte Helium hace lo que Byte Portal y CMS proporcionan — la calidad del contenido es una responsabilidad del mercado.

:::caution Byte Helium renders; los mercados poseen el contenido
Cada página en este dominio se gestiona fuera de Byte Helium. Los documentos jurídicos son autorizados por el equipo jurídico de la CMS Legal. Las páginas de marca y las FAQs son autorizadas en el CMS (accesible a través de Byte Portal). Las categorías de cookies están configuradas en la CP/RP. Si el contenido es incorrecto o falta, la solución está en el sistema fuente, no en Byte Helium.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| **Homepage** | El cliente necesita una experiencia de aterrizaje | Renders la página web localizada con artículos destacados, promociones y contenido | CMS, localización y contextos Promo combinados; secciones de foco impulsados por CMS config | CMS, Servicio de Contexto, Motor Promo | Completo de localización | Diseño de página y contenido gestionado en Byte Portal/CMS — no Byte Helium | Inicio de compromiso, tasa de recompensa |
| *Sobre / Nuestra historia* | Páginas de narración de marca | Renders páginas de marca estática | Página CMS traída por slug y locale; CDN | CMS / CDN | Contenido publicado en CMS | Los cambios de contenido requieren la publicación de CMS – no un cambio de código | Vistas de página |
| **Nutrition &quot; Allergens Guide** | Requisitos regulatorios y expectativas del cliente | Muestra valores nutricionales e información alérgenos para todos los elementos del menú | Índice de nutrición/detalles por artículo o categoría | Servicio de nutrición | Datos nutricionales autorizados en Byte Menu | La exactitud de los datos es un menú Byte / responsabilidad del mercado | Participación en la guía |
| ** Términos y condiciones** | Obligación legal de mostrar TróCs | Renders the current TюCs for the customer's locale | Legal CMS proporciona documentos versionados por local y fecha efectiva | CMS legales | TENTCs publicado para market locale | Byte Helium renders only — El equipo legal gestiona el contenido | Tasa de aceptación |
| * Política de privacidad* | GDPR and local data law requirement | Renders the current Privacy Policy for the locale | Legal CMS versionado documento | CMS legales | Política de privacidad publicada | Del mismo modo que TENTCs — el contenido es responsabilidad de Legal | Tasa de presentación de políticas |
| **Cookie Settings** | Cumplimiento de la ley de cookies (UE y otros) | Muestra categorías de cookies; permite al cliente actualizar el consentimiento | widget CMP integrado; preferencias almacenadas con temporizador y fuente | CP/RP | CMP configured for market | Categorías y texto legal deben establecerse en la CP/RP - no en Byte Helium | Tasa de aceptación del consentimiento |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Legal Pages / CMS / Cookie Consent</summary>

- **FRD References:** [FRD-HEL-070](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-070), [FRD-HEL-074](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-074), [FRD-HEL-075](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-075), [FRD-HEL-076](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-076), [FRD-HEL-071](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-071), [FRD-HEL-072](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-072)
- **TRD Domain:** Content & Legal Pages
- **Key Interfaces / APIs:** CMS Page List/Render, FAQ List/Search, Legal Docs List/Render, CMP Get/Update
- **Data Contracts:** Page (id, title, slug, locale, contentUrl); LegalDoc (type, version, effectiveDate); Consent (category, status, ts)
- **Source Summary:**
  - CMS render p95: ≤150ms (CDN-cached)
  - CMS failure (5xx): fallback to cached version; CDN metrics monitored
  - Legal docs versioned by effective date per locale; Byte Helium renders current version
  - Consent preferences stored with source and timestamp for audit
  - CMS/Legal APIs: additive, 180-day deprecation (longest after Payments)

</details>

---

:::tip See it in the wiki
- How customers access brand content in the front-end → [Learn About KFC](/docs/frontend/customer-journey/learn-about-kfc/)
- Managing homepage and CMS content → [Contentful Guide](/docs/frontend/contentful/)
:::

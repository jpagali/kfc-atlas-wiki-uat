---
title: Capacidades Byte
description: Comience aquí — lo que hace la plataforma KFC Atlas / Byte Helium, cómo funciona, y lo que los mercados necesitan saber antes de ir en directo.
sidebar_label: Empieza aquí
---

# Capacidades Byte

**Audiencia:** Activación del mercado, Equipos de lanzamiento, Gestores de productos, Accionistas de funcionamiento cruzado **Purpose:** Fuente única de verdad para lo que hace la plataforma Atlas / Byte Helium, cómo se estructura, y lo que se necesita para vivir.

Esta sección vive fuera de las guías operativas por diseño. El[Guía de vanguardia](/docs/frontend/overview)y[Guía del Portal de Admin](/docs/admin-portal-guide/)dígale *cómo operar* la plataforma — Byte Capabilities le dice * qué es la plataforma y qué puede hacer*.

:::note Alcance dentro del sistema Atlas
En Atlas Wiki, **Las capacidades de los vasos** tienen un alcance intencionado en la imagen de Atlas **Commerce + Portal**. En la práctica, eso significa:

- **Atlas** es el frente global de KFC
- **Byte Commerce + Byte Portal** son la capa de comercio y configuración detrás de Atlas
- **Byte Helium** es el sistema de diseño empresarial de Yum! y la fundación frontal que Atlas se construye y marca a través de
- **Byte Connect** es la capa media utilizada cuando un mercado POS no es Byte POS

El[Guía del Portal de Admin](/docs/admin-portal-guide/)todavía posee las instrucciones de operación paso a paso.
:::

---

## Cómo utilizar esta sección

| Si quieres... | Ve a... |
|---|---|
| Comprender la plataforma completa en 5 minutos | [Modelo mental](/docs/byte-capabilities/mental-model) |
| Vea lo que hace cada parte central (Atlas on Byte Helium / Byte Commerce / Byte Portal / Byte Connect) | [Capas de plataforma](/docs/byte-capabilities/platform-layers) |
| Encontrar una característica específica | [Dominios](/docs/byte-capabilities/domains/identity)— elija su dominio |
| Saber lo que puede y no se puede hacer | [Límites de responsabilidad](/docs/byte-capabilities/enablement/capability-boundaries) |
| Prepárate para una puesta en marcha del mercado | [Reality Check](/docs/byte-capabilities/enablement/reality-check) |
| Obtener una lista de verificación de lanzamiento de go/no-go | [Lista de lanzamiento de mercado](/docs/byte-capabilities/enablement/market-launch-checklist) |
| Buscar un término técnico | [Glosario](/docs/byte-capabilities/reference/glossary) |
| Verificación de rendimiento SLOs | [Performance SLOs](/docs/byte-capabilities/reference/performance-slos) |

---

## La Plataforma en un párrafo

**KFC Atlas** es el frente global de KFC para el orden digital. Atlas mismo está construido en **Byte Helium**, el sistema de diseño empresarial de Yum! y la fundación frontal, descolorado para reflejar la marca KFC. Detrás de ese front-end se encuentra el cuadro operativo **Byte Commerce + Byte Portal**: El comercio procesa órdenes, precios, pagos y inyección de POS, mientras que Byte Portal gestiona el mercado y la configuración operacional que hace que Atlas funcione en producción.

Cuando un mercado no está en Byte POS, **Byte Connect** se convierte en la capa media entre Byte Commerce y el entorno POS del mercado. Comprender cómo encajan Atlas, Helio, Comercio, Portal y Connect es la base para el lanzamiento y la toma de decisiones operacionales.

---

## Los Dominios de Capacidad 12

La plataforma se organiza en 12 dominios funcionales. Cada dominio tiene su propia página con una tabla de características, cómo funciona, dependencias, limitaciones y enlaces a guías wiki relacionados.

| Dominio | Lo que cubre |
|---|---|
| [Identidad In](/docs/byte-capabilities/domains/identity) | Creación de la cuenta, Registro OTP, Google/Apple OAuth, perfil, privacidad |
| [Localización &quot; Modo de Orden &quot;](/docs/byte-capabilities/domains/localisation) | Detección de mercado, modo de recogida vs., localizador de tiendas |
| [Menú Hojear &amp; PDP](/docs/byte-capabilities/domains/menu) | Listado de productos, detalle de artículo, modificadores, nutrición/alergenos |
| [Carrito](/docs/byte-capabilities/domains/cart) | Agregar/actualizar/remove artículos, aplicar códigos promocionales, adjuntar recompensas de lealtad |
| [Checkout](/docs/byte-capabilities/domains/checkout) | Invitado y registrado de checkout, entrega y colecciones variantes |
| [Pagos &quot; prestamistas](/docs/byte-capabilities/domains/payments) | Tarjeta, tarjeta guardada, vale, tierna división, tarjeta regalo |
| [Promociones &quot; Lealtad](/docs/byte-capabilities/domains/promotions-loyalty) | Ofrece alimentación, recompensas, desafíos, lealtad a bordo, comas prefs |
| [Donaciones &amp; Consejos](/docs/byte-capabilities/domains/donations-tips) | Donaciones Add-Hope, consejos para el conductor de la entrega |
| [Seguimiento de pedidos &quot; Historia](/docs/byte-capabilities/domains/order-tracking) | Seguimiento en tiempo real, historial de pedidos, recibos, reorden, favoritos |
| [Contenido &quot; Legal &quot;](/docs/byte-capabilities/domains/content-legal) | CMS pages, legal docs, cookie consent |
| [Participación &quot; Mensajería &quot;](/docs/byte-capabilities/domains/engagement) | Preferencias de notificación de entrada en la aplicación, push y email |
| [Portal — Admin &gt; Configuración](/docs/byte-capabilities/domains/portal-admin) | RBAC, tiendas, menús, promociones, impuestos, pagos, informes, auditoría |

---

## Lo que esta sección no cubre

Esta sección es intencionalmente conceptual. Para guías paso a paso sobre *hacer* cosas en la plataforma, vaya a la sección operacional pertinente:

- Cómo operar Byte Portal día a día →[Guía del Portal de Admin](/docs/admin-portal-guide/)
- Cómo configurar y gestionar tiendas →[Guía del Portal de Admin: Tiendas](/docs/admin-portal-guide/stores/)
- Cómo crear y configurar promociones →[Guía del Portal de Admin: Promociones](/docs/admin-portal-guide/promotions/)
- Cómo construir y ejecutar campañas de promoción →[Playbooks](/docs/playbooks/onboarding)
- Cómo los clientes experimentan el front-end →[Guía de vanguardia](/docs/frontend/overview)

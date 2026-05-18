---
title: Plataforma modelo mental
description: La jerarquía, estructura y arquitectura de la plataforma Byte Stack en inglés claro.
sidebar_label: Modelo mental
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 Plataforma modelo mental

La comprensión de la plataforma comienza con la comprensión del panorama de la plataforma Atlas, lo que cada parte es responsable y cómo se relacionan entre sí.

:::note Alcance dentro del sistema Atlas
Para Atlas Wiki, la lente **Capabilities** se centra en la imagen Atlas **Commerce + Portal**. Atlas es el front-end global de KFC, construido en **Byte Helium** como la fundación de Yum!. Detrás de él, **Byte Commerce + Byte Portal** manipulación de transacciones de energía y configuración operacional, mientras **Byte Connect** se sienta en el centro cuando un mercado POS no es Byte POS.
:::

---

## The Atlas Platform Picture

En el contexto Atlas, el **Byte Stack** se entiende mejor como cuatro partes conectadas:

- **Atlas on Byte Helium** — Atlas es el front-end global de KFC, y está construido en **Byte Helium**, el sistema de diseño empresarial de Yum! y la fundación frontal. Helium le da a Atlas el sistema UI compartido; Atlas pieles que se basan para la marca KFC y el viaje al cliente.
- **Byte Commerce** El motor detrás de cada orden. Manijas estado del carrito, precios, cálculos fiscales, procesamiento de pagos y inyección de POS. Invisible para los clientes, crítico para todo.
- **Byte Portal** El avión de control de administración emparejó con Comercio. Los equipos de mercado y operaciones utilizan esto para configurar tiendas, menús, promociones, impuestos, pagos, usuarios y contenidos.
- **Byte Connect** La capa media de integración cuando un mercado POS no es Byte POS. Se puentea Byte Commerce al mercado ambiente POS y asuntos en cualquier lugar que no sea POS a bordo o routing de orden está en alcance.

Estas partes también se conectan a un conjunto de ** servicios externos**: Menu, Identidad/SSO, PSP (pagos), Motor de Lealtad/Promos, Seguimiento de pedidos, CMS y Analytics.

:::note Byte POS Caveat
Los lectores suelen asumir que Atlas o Byte Commerce pueden hablar directamente con cualquier POS de mercado. El modelo previsto es más estrecho: **Atlas - título Byte Commerce - Propiedad Byte POS** por defecto, o **Atlas - confianza Byte Commerce - confianza Byte Connect - propiedad POS** cuando el mercado no está en Byte POS.
:::

---

## Plataforma de Jerarquía

Este explorador combina la jerarquía y las vistas de la arquitectura en un solo lugar. Utilice las pestañas para cambiar entre un modo de comparación lado a lado, jerarquizado o solo de arquitectura.

<ThemeSyncedIframe
  src="/byte-stack-platform-explorer.html"
  title="Byte Stack Platform Explorer"
  height={1480}
  messageType="byte-stack-platform-explorer-theme"
  heightMessageType="byte-stack-platform-explorer-height"
/>

---

## Diagrama de Arquitectura Sistema

La vista de arquitectura está disponible en el mismo explorador de arriba. Abrir el`Architecture only`ficha si quieres concentrarte en las relaciones de tiempo de ejecución y explicaciones de nivel de caja.

---

:::tip Leer más
Véase[Capas de plataforma](/docs/byte-capabilities/platform-layers)para un desglose de lo que hace cada capa y lo que los mercados pueden configurar. ¿Necesita la integración del POS caveat? Leer[Byte Connect](/docs/byte-capabilities/enablement/byte-connect).
:::

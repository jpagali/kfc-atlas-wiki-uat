---
title: Antecedentes
sidebar_position: 1
---

# Antecedentes

**KFC Atlas** es el front-end global de KFC para el orden digital, con lo que sus huéspedes interactúan cuando piden en línea, a través de la aplicación KFC o a través de un agregador de terceros.

Atlas está construido en **Byte Helium**, el sistema de diseño empresarial de Yum! y la fundación frontal. En el cuadro más amplio de la plataforma Atlas, Atlas trabaja con **Byte Commerce + Byte Portal**, y con **Byte Connect** cuando un mercado POS no es Byte POS.

Esta guía es para los equipos de seguridad y BMUs** que necesitan entender lo que la plataforma ofrece a los clientes, cómo se comporta en cada mercado, y lo que es configurable sin requerir un despliegue de productos.

## Lo que cubre el frente

El Atlas abarca cuatro áreas:

- **Viaje del cliente**: el flujo final al final del descubrimiento al orden de confirmación
- **Order Channels** — cómo se presentan y gestionan Dine-in, Delivery y Takeaway por restaurante
- **Customer Engagement Surveys** — cómo los programas de retroalimentación de estilo KFC Escucha recopilan sentimientos postordenados
- **Configuraciones de marca** — qué se puede activar o apagar por mercado (lealtad, promos, programación)

## Sistema de diseño

El front-end KFC Atlas está construido en **Byte Helium**, el sistema de diseño empresarial de Yum! y la fundación frontal. Helium proporciona las fichas de diseño compartidas, componentes de la UI y patrones estructurales; Atlas aplica la marca KFC en la parte superior de esa fundación por lo que la experiencia se siente KFC-native mientras sigue utilizando el sistema Yum compartido debajo.

### Filosofía del Diseño

Atlas está diseñado intencionadamente alrededor de un flujo de compra ** centrado**, no simplemente los pocos clics posibles. Algunos viajes pueden utilizar más pasos cuando eso le da a los clientes opciones más claras, hace que el producto sea más fácil de entender, y presenta opciones de comercio relevantes en el momento en que están decidiendo qué comprar.

Esto significa que el front-end debe ser juzgado por si el viaje es claro, seguro y comercialmente útil, no sólo por si es corto. Un flujo de comida, por ejemplo, puede exponer mejoras de tamaño, complementos o opciones de personalización paso a paso porque esas decisiones son más fáciles de entender en contexto que si cada opción se colapsa en una pantalla densa.

Véase[Sistema de diseño](/docs/frontend/design-system)para una explicación completa de cómo la identidad visual fluye desde Figma hasta la pantalla.

## Mercados en Alcance

| Mercado | Plataforma de aplicación |
|---|---|
| 🇦🇺 Australia | KFC Australia App + Web |

## Quien debe leer esto

| Función | Por qué es relevante |
|---|---|
| Operador del Restaurante / Equipo del Mercado | Comprender la experiencia de sus clientes y lo que puede configurar |
| BMU / Oficina Regional | Comprender las opciones de configuración a nivel de mercado y cómo activar las funciones |
| Ventas / Nuevo mercado a bordo | Comprender las capacidades de la plataforma de referencia antes de ir-live |

:::info
El front-end está construido en una base de código compartida en todos los mercados. Las diferencias de mercado están controladas por la configuración, no por construcciones separadas.
:::

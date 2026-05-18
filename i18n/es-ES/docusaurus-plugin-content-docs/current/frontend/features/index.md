---
title: Características generales
sidebar_position: 1
---

# Características

Esta sección documenta cada capacidad incorporada en la plataforma KFC Atlas. Cada característica tiene su propia página dedicada que cubre lo que hace, cómo se comporta a través de plataformas, y cualquier consideración específica del mercado.

## ¿Qué cuenta como una característica?

Una característica en Atlas es una capacidad distinta, orientada al usuario o orientada al operador que:

- Ofrece una pieza específica de producto o valor operacional
- Ha definido el comportamiento en iOS, Android y Web
- Se puede activar, configurar o ampliar por mercado

## Características actuales

| Característica | Descripción | Plataformas |
|---|---|---|
| [KFC Deeplink] | Enlace universal](./KFC-deeplink-universal-link) | Abrir contenido específico de KFC directamente en la aplicación a través de cualquier URL de KFC | iOS, Android, Web |
| [Branch Deeplink](./branch-deeplink) | Attribution-aware deep linking and aferred routing via Branch.io | iOS, Android |
| [MarTech](./martech) | Seguimiento de eventos, datos de clientes e integraciones de automatización de marketing | iOS, Android, Web |
| [Social Sign In](./social-sign-in) | Google, Facebook y Apple login a través de web y aplicación nativa | iOS, Android, Web |
| [Menú Reserva de artículos](./menu-item-reservation) | Permitir a los clientes ordenar previamente y reservar elementos de menú específicos por adelantado | iOS, Android, Web |

:::info
Las características están habilitadas por mercado a través de la configuración — no separan las implementaciones de código. Véase[Configuraciones de mercado](/docs/frontend/market-configurations)para detalles.
:::

## Dependencias de valores

Cada característica en Atlas se construye para ser reutilizable en los mercados. Dicho esto, algunas características pueden tener dependencias en sistemas de terceros, como el Punto de Venta (POS) o el Sistema de Gestión de Entregas (DMS) del mercado, y requerirán una evaluación de integración antes de que puedan ir en directo.

Menú Reserva de artículos es un ejemplo: cualquier flujo de reserva específico del mercado depende de API de stock y timelot del POS o sistema de inventario pertinente. Los mercados sin el apoyo equivalente de API de su POS tendrían que completar esa integración antes de que la característica pudiera ser habilitada.

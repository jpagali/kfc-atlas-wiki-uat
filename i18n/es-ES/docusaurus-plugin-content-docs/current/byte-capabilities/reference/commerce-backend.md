---
title: Referencia de Backend de Comercio
description: Lo que hace el Atlas Commerce Backend, su desglose de dominios y contratos de datos clave.
sidebar_label: Commerce Backend
---

# 🗂 Commerce Backend — Feature Reference

√ El Backend de Comercio es invisible para los clientes pero orquesta todo lo que sucede entre los sistemas de front-end y in-store.

---

## Lo que hace

El Backend de Comercio es el motor que procesa cada pedido digital colocado en la plataforma Atlas. Se ocupa de la creación y mantenimiento de carritos, el cálculo de precios y impuestos, la autorización y captura de pago, la gestión del estado de pedido, la inyección de POS/KDS, la ingestión de pedidos de agregadores y la conexión de la cuenta de cliente.

Byte Helium nunca orquesta directamente órdenes — envía solicitudes a Commerce Backend, y Commerce Backend gestiona el resultado.

:::note Byte POS Caveat
Byte Commerce está conectado para hablar directamente con **Byte POS**. Si un mercado no está utilizando Byte POS, **Byte Connect** es requerido como el puente entre Byte Commerce y el mercado POS, y debe ser tratado como parte de Byte Commerce a bordo.
:::

---

## Comercio Backend Domain Overview

| TRD Domain | Lo que hace | Propietario por |
|---|---|---|
| Ordenación &amp; Cart Lifecycle | Creación de carros, mantenimiento, precios, máquina del estado del orden | Comercio Backend Producto &amp; Ingeniería |
| Menú Consumo, Precios &amp; Impuestos | disponibilidad de menús, precios dinámicos, cálculo de impuestos, aplicación promo | Byte Menu &gt; Precios |
| Pagos &quot; reembolsos | Pago auth, captura, procesamiento de reembolso, integración PSP | Pagos de Backend de Comercio |
| Cuentas de clientes &quot; Auth | Identidad vía OIDC/OAuth2; perfil del cliente | Byte Customer Platform |
| Preferencias &quot; Loyalty Linking | Favoritos, conexión de la cuenta de lealtad, seguimiento del consentimiento | Plataforma de clientes / lealtad |
| POS / Integración KDS | Orden de inyección a sistemas en tienda; sincronización de estado; los mercados POS no-Byte pasan por Byte Connect | Comercio Backend + Ops |
| Aggregator Integration | Ingestión normalizada de Uber Eats, DoorDash, etc. | Comercio Backend + Byte Connect |
| Migración de datos | Migrando a los clientes heredados y la historia del orden | Herramientas de migración / Plataforma cliente |
| Observabilidad | Registro, rastreo, salud, métricas | Plataforma / SRE |

---

## Contratos de datos clave de backend de comercio

Estos son los contratos de datos versionados (DCI — Data Contracts & Interfaces) que rigen cómo los servicios se comunican a través de la plataforma.

| Identificación de contrato | Lo que Describe |
|---|---|
| DCI#BCOM-Cart-API-v1 | Estructura del carro: líneas, totales, beneficios |
| DCI#BCOM-Order-API-v1 | Registro del pedido: artículos, estado, totales, clave de idempotencia |
| DCI#BCOM-Menu-Projection-v1 | Datos de menú proyectados para la tienda/canal |
| DCI#BCOM-Pricing-API-v1 | Solicitud de precios/respuesta con desglose fiscal |
| DCI#BCOM-POS-Order-API-v1 | Carga de pedido enviada a los sistemas POS |
| DCI#BCOM-KDS-Order-Event-v1 | Evento de tickets KDS con desglose de elementos/estación |
| DCI#BCOM-Order-Status-Event-v1 | Actualizaciones del estado de Fulfillment de POS/KDS |
| DCI#BCOM-Aggregator-Order-API-v1 | Formato de orden de agregación normalizado |
| DCI#BCOM-Aggregator-Status-Event-v1 | Actualizaciones del estado de nuevo a los agregadores |

---

*Fuente: Comercio Backend FRD/TRD Master Index, Comercio Backend Requisitos funcionales, Comercio Backend Requisitos técnicos, Comercio Backend TRD Domain Catalogue.*

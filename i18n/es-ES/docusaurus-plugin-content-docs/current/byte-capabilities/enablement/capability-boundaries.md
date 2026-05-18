---
title: Límites de responsabilidad
description: Quien posee lo que hay en la plataforma Atlas, la referencia inequívoca para lo que Byte Helium hace y no hace.
sidebar_label: Límites de responsabilidad
---

# 🚫 Límites de responsabilidad

¿Puede Byte Helium do X?* y *¿Quién es el dueño de esto?*

Esto hace que la propiedad sea inequívoca. Los errores más comunes en la planificación y el análisis provienen de asumir que Byte Helium posee algo que no lo hace. Cuando esté en duda, compruebe esta tabla primero.

---

## Cuadro de propiedad

| Capacidad | Propietario por | No es propiedad de | Notas |
|---|---|---|---|
| Cálculo de precios | Commerce Backend | Byte Helium | Byte Helium muestra precios que recibe |
| Autorización de contenidos de menú | Menú Byte (herramienta externa) | Byte Portal, Byte Helium | Byte Portal asigna; Byte Helium renders |
| Promo elegibilidad lógica | Promo Engine (servidor-side) | Byte Helium | Byte Helium nunca calcula elegibilidad |
| Cálculo de puntos de fidelidad | Servicio de lealtad | Byte Helium | Byte Helium muestra equilibrio sólo |
| Proceso de pago / captura | PSP (via Vault) | Byte Helium | Byte Helium envía fichas; PSP hace el resto |
| Manejo de datos de tarjetas (PAN) | PSP SDK | Byte Helium | SDK captura; no PAN en Byte Helium |
| Cálculo fiscal | Tax Engine / Commerce Backend | Byte Helium | Tasas de impuestos establecidas en Byte Portal; calculadas a la salida |
| Validación de direcciones | Servicio de atención | Byte Helium | Llamadas Byte Helium Dirección servicio |
| Estado de la tienda (abierto/cerrado) | Portal de Byte + POS | Byte Helium | Byte Helium lee estado desde el servicio Store |
| Horas de tránsito | Portal de Byte (modulo de almacenamiento) | Byte Helium | Configurado en Byte Portal; Byte Helium renders |
| Zonas de cobertura | Byte Portal / Geo service | Byte Helium | Cobertura validada en la selección del modo de entrega |
| Entrega de notificación push | Proveedor de empuje (externo) | Byte Helium | Byte Helium administra preferencias; proveedor envía |
| Creación de contenidos CMS | CMS (via Byte Portal) | Byte Helium | Byte Portal publica; Byte Helium renders |
| Documento jurídico autor | Equipo legal a través de CMS Legal | Byte Helium | Byte Helium renders what Legal CMS provides |
| Categorías de cookies | CMP (configurado por mercado) | Byte Helium | Byte Helium renders CMP widget |
| Adquirir / resolver | PSP | Byte Helium, Commerce Backend | Alcance del sistema Atlas |
| Integración POS/KDS | Comercio Backend + Portal | Byte Helium | Byte Helium no tiene conexión POS directa; los mercados POS no-Byte requieren Byte Connect entre Byte Commerce y el mercado POS |
| Ingestión de orden de agregación | Byte Connect (Commerce Backend) | Byte Helium | Las órdenes de agregador entran a través de la puerta de backend de Comercio |
| Creación de registros de auditoría | Byte Portal + todos los servicios | Los mercados pueden configurar | La auditoría es generada por el sistema; inmutable |
| Bandera de alimentación | Portal de Byte (modulo de configuración) | Byte Helium | Byte Helium respeta las banderas; Portal las dirige |
| Garantía de entrega Webhook | Plataforma de integración | Mercados | At-least-once; los suscriptores manejan idempotency |

---

## El principio básico

Byte Helium es una capa **rendering y orquestación**. Solicita datos de los servicios de backend, lo hace al cliente, y captura las entradas de los clientes para enviar de vuelta al backend. No es propio estado, no realiza cálculos, y no contiene secretos.

Todo lo que parece "actuación de aplicación" a un cliente es en realidad una decisión de backend que Byte Helium presenta. Esto es por diseño: significa que el comportamiento puede cambiarse por configuración sin redistribuir el front-end.

:::note Byte POS Caveat
Commerce Backend está conectado para hablar directamente con **Byte POS**. Si un mercado no está utilizando Byte POS, **Byte Connect** debe estar a bordo como el puente entre Byte Commerce y el POS de ese mercado.
:::

---

:::tip Relacionados
- [Reality Check](/docs/byte-capabilities/enablement/reality-check)— las ideas erróneas más comunes que tropiezan
- [Capas de plataforma](/docs/byte-capabilities/platform-layers)- desglose de lo que cada capa hace
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)— cuando y por qué se requiere Byte Connect
:::

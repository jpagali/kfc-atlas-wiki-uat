---
title: Configuraciones de mercado
sidebar_position: 4
---

# Configuraciones de mercado

La Plataforma Atlas utiliza una arquitectura de la bandera ** flotante** —una sola base de código compartida donde las diferencias de nivel de mercado se controlan por configuración, no por despliegues separados. Los equipos regionales pueden activar o desactivar funciones independientemente sin esperar una liberación de producto.

## Qué puede ser configurado por mercado

| Zona de actividad | ¿Configurable? | Donde |
|---|---|---|
| Tipo de programa de lealtad | ✅ | Ajustes del mercado → Lealtad |
| Tasa de ganancia de lealtad | ✅ | Ajustes de mercado → Reglas de lealtad |
| Promo code behaviour | ✅ | Ajustes de mercado → Promociones |
| Pasos de viaje (show/hide) | ✅ | Ajustes del mercado → Viaje al cliente |
| Disponibilidad de canales de orden | ✅ | Restaurante → Configuración de canales |
| Radio de entrega | ✅ | Restaurante → Ajustes del Canal → Entrega |
| Orden de entrega mínima | ✅ | Restaurante → Ajustes del Canal → Entrega |
| Métodos de pago | ✅ | Ajustes de mercado → Pagos |
| Checkout de invitados | ✅ | Ajustes del mercado → Viaje al cliente |
| Órdenes futuras programadas | ✅ | Ajustes del mercado → Viaje al cliente |

## Australia 🇦🇺 — Configuración actual

| Ajuste | Valor |
|---|---|
| Tipo de lealtad | Voucher-based (KFC App Deals) |
| Tasa de aprendizaje | N/A - modelo de vales |
| Códigos promocionales | Enabled |
| Órdenes programadas | Discapacitados |
| Checkout de invitados | Enabled |
| Integración del agregador | Uber Eats, DoorDash |

## Solicitar un cambio de configuración

Los cambios de configuración para las características existentes son autoservicio a través del Portal Byte. Si una característica es **verdeada**, o bien:
1. Aún no se ha construido para su mercado — plantear una solicitud a través de la JIRA Service Desk
2. Requiere acceso a administración regional — contacte con su BMU

:::info
Todos los cambios de configuración tienen efecto **inmediatamente** — no se requiere ningún despliegue y ningún otro mercado se ve afectado.
:::

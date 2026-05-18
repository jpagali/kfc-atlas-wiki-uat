---
title: Pagos &quot; prestamistas
description: Cómo la plataforma Atlas maneja pagos de tarjetas, vales, tarjetas de regalo divididas y de forma compatible con PCI.
sidebar_label: Pagos &quot; prestamistas
---

# Pagos &quot; prestamistas

**What it does:** Maneja cómo los clientes pagan — tarjetas, vales, tarjetas de regalo divididas y tarjetas de regalo— de una manera compatible con PCI y resistente al fraude.

**Why it matters:** El pago es la barrera final a los ingresos. Los pagos fallidos o el pago deficiente UX reducen directamente la terminación del pedido. Este dominio es también el área de seguridad más alta de la plataforma.

:::caution Byte Helium no maneja datos de la tarjeta
El SDK de PSP captura los detalles de la tarjeta directamente — ningún PAN (número de tarjeta) pasa por Byte Helium o se almacena en Atlas. Byte Helium maneja sólo fichas. Cualquier configuración de pago ( credenciales de PSP, reglas de enrutamiento, políticas de recargo) vive en Byte Portal y PSP Vault.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| *Pagar con tarjeta* | El cliente quiere usar una tarjeta de débito o de crédito | Tokenises the card and processes payment through the PSP | PSP SDK maneja la captura de la tarjeta (no PAN en Byte Helium); token enviado a Checkout Orchestrator; autenticación 3DS cuando sea necesario | PSP / Vault, Orquesta de Salida | Sesión de verificación válida | 3DS puede agregar fricción; falla → reiniciar o cambiar de licitación | Tasa de éxito en el pago |
| **Pago con tarjeta guardada** | El cliente quiere reutilizar una tarjeta almacenada | Listas tarjetas guardadas; el cliente selecciona una para el pago | fichas de tarjeta guardadas de PSP Vault; ficha seleccionada utilizada en intención de pago | PSP / Vault | Cliente firmado; tarjeta previamente guardada | La tarjeta no debe expirar; bóveda gestionada por PSP (no Byte Helium) | Tasa de uso de tarjetas guardadas |
| **Delete Saved Card** | El cliente quiere quitar una tarjeta almacenada | Elimina la tarjeta de los métodos de pago guardados del cliente | Suprimir llamada a PSP Vault vía Byte Helium | PSP / Vault | Cliente firmado | No puede deshacer la eliminación | Actividad de gestión por defecto |
| *Pago con Voucher* | El cliente tiene un vale digital | Aplica un código de vales como pago completo o parcial | Voucher validado con servicio Voucher; valor agregado como licitación para ordenar | Voucher service, Checkout Orchestrator | Código de vale válido; no vencido o redimido | Las reglas de los Voucher varían según el mercado; validación del lado del servidor; prevención de doble palabra (409) | Tasa de redención de Voucher |
| **Tender delgado (Card + Voucher)** | Voucher cubre parte de la factura | Permite al cliente pagar el resto con una tarjeta después de aplicar un vale | Voucher se aplica primero; saldo restante se licita mediante la intención de pago de la tarjeta | Voucher service, PSP, Checkout Orchestrator | Vale válido; sesión de verificación activa | Secuenciación de tender gestionada por Orchestrator | Tasa de licitación dividida |
| #Buy a Voucher # | El cliente quiere comprar un vale digital (gift) | Permite al cliente comprar un vale vía tarjeta | Pago mediante PSP; vale generado y entregado por correo electrónico/SMS | Servicio de Voucher, PSP | Método de pago activo | El flujo de compra de Voucher está habilitado para el mercado; separado del pago de pedidos | Volumen de ventas de Voucher |
| **Resend Gift Card Details** | El cliente perdió su email de tarjeta de regalo | Reenvia la entrega de tarjeta regalo al contacto registrado del cliente | Llamada de reenviado limitada a la tarjeta de regalo servicio; entregado vía canal configurado | Servicio de tarjeta de regalo, Mensajería | Cliente firmado; tarjeta de regalo comprada | Tasa de identificación por tarjeta para evitar abusos | Tasa de solicitud de reembolso |

---

## Fuentes técnicas

<details>
<summary>📎 Technical Source: Pay with Card / Split Tender</summary>

- **FRD References:** [FRD-HEL-016](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-016), [FRD-HEL-017](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-017), [FRD-HEL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4123951223/ITBFR-Functional+Requirements+-+Helium#FRD-HEL-018)
- **TRD Domain:** Payments & Tenders
- **Key Interfaces / APIs:** Card Tokenise/Pay (PSP SDK), Voucher Apply/Redeem, Submit Payment Intent (Orchestrator)
- **Data Contracts:** PaymentIntent (amount, currency, tenders[]); TenderCard (token, scheme, 3dsStatus — no PAN in logs)
- **Source Summary:**
  - PCI-DSS compliant: SDK handles card capture; no PAN stored in Byte Helium or logs
  - 3DS supported; 3DS outcome tracked via telemetry
  - Auth capture success target: ≥99.5%
  - Voucher double-spend prevented via idempotency (409 returns original token)
  - Payment APIs: additive only, 180-day deprecation window (longest in platform — schema mandates apply)

</details>

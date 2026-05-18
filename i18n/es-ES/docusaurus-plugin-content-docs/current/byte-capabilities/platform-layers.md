---
title: Capas de plataforma
description: Lo que cada capa de la plataforma Atlas / Byte Helium hace en inglés claro, y lo que los mercados pueden configurar en cada uno.
sidebar_label: Capas de plataforma
---

# 🌍 Capas de plataforma

La plataforma Atlas tiene cuatro partes básicas más un conjunto de servicios externos. Esta página da un desglose de lo que cada parte hace y, críticamente, lo que los mercados pueden y no pueden configurar.

:::note Alcance dentro del sistema Atlas
Cuando Atlas Wiki se refiere a **Capacidades Byte**, el alcance primario es el Atlas **Commerce + Portal** Imagen: Atlas como frontal global de KFC, **Byte Helium** como su fundación de Yum!, **Byte Commerce + Byte Portal** como la capa de comercio y configuración detrás de ella, y **Byte Connect** como la capa media para los mercados de POS no-Byte. Pasos de funcionamiento detallados para Byte Portal todavía pertenecen al[Guía del Portal de Admin](/docs/admin-portal-guide/).
:::

:::caution Principio clave
Byte Helium *renders* pero no posee* la mayoría de las cosas. Precios, elegibilidad, estado y contenido todos viven en el backend o servicios externos. Cuando algo se ve mal en la aplicación, la solución está casi siempre en la configuración de backend — no en el front-end.
:::

---

## Responsabilidades básicas

| Parte | Función | Lo que los mercados configuran |
|---|---|---|
| *Atlas on Byte Helium* | El frontal global de KFC, construido sobre la base de Yum! y etiquetado para clientes de KFC | El comportamiento del mercado está impulsado por la configuración, no por separado reconstruido por el mercado |
| **Byte Commerce** | Procesa cada orden: precios, impuestos, pagos, inyección de POS; los mercados de POS no-Byte requieren Byte Connect | Via Byte Portal — promos, impuestos, rutas de pago, operaciones de mercado |
| **Byte Portal** | Herramienta de Admin junto con Comercio para mercados y equipos de operaciones | Horarios, menús, promociones, impuestos, pagos, reembolsos, usuarios |
| **Byte Connect** | Capa de integración media entre Byte Commerce y entornos POS no-Byte | Elaboración de mapas de mercados y proveedores y preparación para la integración de los flujos de pedidos no comprometidos |
| *Menu Service* | Proporciona catálogo de artículos, precios, opciones | Via Byte Menu authoring tool (outside Atlas) |
| **Identidad / SSO** | Gestiona cuentas de clientes y sesiones de registro | OTP, Google, Apple — configurado por mercado |
| **PSP / Vault** | Tokenización de tarjetas y captura de pago | Perfiles PSP configurados en Byte Portal |
| **Loyalty &amp; Promo Engine** | Los valores ofrecen elegibilidad, recompensas, retos | Promociones autorizadas en Byte Portal |
| **Order Tracking** | Proporciona el estado de entrega en tiempo real | Opcional por mercado; depende de la logística 3P |
| **POS / KDS** | Recibe pedidos digitales en tienda | Integración configurada por mercado/vendor; los mercados POS no-Byte se conectan a través de Byte Connect |

---

## Lo que cada parte esencial hace en más detalle

### Atlas on Byte Helium — Front-End
Atlas es el frontal global de KFC. Está construido en **Byte Helium**, el sistema de diseño empresarial de Yum! y la fundación frontal, luego descolorado y con forma para reflejar la marca KFC y el viaje al cliente. Atlas recibe datos de Byte Commerce, Menu Service, CMS y servicios externos, y lo convierte en la experiencia web y de aplicaciones que los clientes utilizan realmente. Atlas no calcula los precios, no evalúa la elegibilidad de promo, y no posee el estado de orden. Es la capa frontal orientada al cliente construida en Helio.

### Byte Commerce
Byte Commerce es el motor detrás de cada transacción. Cuando un cliente agrega un artículo a su carrito, Byte Commerce calcula el precio. Cuando aplican un código de promo, Byte Commerce valida la elegibilidad lado servidor. Cuando pagan, Byte Commerce orquesta la intención de pago a través del PSP. Cuando se coloca un pedido, Byte Commerce lo inyecta al POS/KDS en la tienda. Byte Commerce habla directamente con Byte POS; si un mercado no está usando Byte POS, Byte Connect es la capa media requerida al mercado POS. Nada transaccional ocurre sin Byte Commerce.

:::note Byte POS Caveat
No asuma que Atlas pueda integrarse directamente con cualquier POS de mercado. El modelo mental compatible es **Atlas - confianza Byte Commerce - título Byte POS**, o **Atlas - título Byte Commerce - confianza Byte Connect - confianza POS** para mercados de POS no-Byte.
:::

### Portal de Byte — Plano de Control de Admin
Byte Portal es donde vive cada configuración de nivel de mercado, junto con la capa de Comercio que soporta. Los mercados configuran sus tiendas (horas, estado, asignación de POS), menús (asignar versiones de menús publicados, aplicar parches y sobrevalores de precios), promociones (reglas de elegibilidad, códigos, presupuestos, scoping), perfiles fiscales, reglas de enrutamiento de pagos, usuarios y roles de acceso, y ajustes operativos. **Sin la configuración correcta del Portal, los mercados no pueden ir en directo.**

### Byte Connect
Byte Connect no es el producto orientado al cliente y no la superficie de administración primaria, pero sigue siendo parte de la pila Byte en Atlas cuando un mercado POS no es Byte POS. Maneja el puente de integración entre Byte Commerce y el entorno de POS del mercado, y se convierte en parte de la preparación de lanzamiento, el enrutamiento de pedidos, los límites de apoyo y la solución de problemas para esos mercados.

### Menú Servicio / Menú Byte
Autorización de menús, creación de elementos, descripción e imágenes, gestión de precios y opciones, ocurre en **Byte Menu**, una herramienta separada fuera de la plataforma Atlas. Byte Portal asigna versiones de menú ya publicadas a mercados y canales. Byte Portal puede aplicar parches y overrides en la parte superior de un menú publicado, pero no puede crear contenido de menú desde cero.

### Servicios externos
La plataforma depende de un conjunto de servicios externos integrados por mercado: Identidad/SSO para la autenticación del cliente, PSP para el procesamiento de pagos, un motor de préstamo &quot; Promo para la evaluación de ofertas, un servicio de seguimiento de pedidos para el estado de entrega, un CMS para la marca y el contenido legal, y un servicio Geo/Store Locator. Cada uno de estos debe ser configurado y probado por mercado antes del lanzamiento.

---

:::tip Míralo en el wiki
- Configuración de tiendas y menús en Byte Portal →[Guía del Portal de Admin: Tiendas](/docs/admin-portal-guide/stores/)y[Menús](/docs/admin-portal-guide/menus/)
- Configuración de promociones →[Guía del Portal de Admin: Promociones](/docs/admin-portal-guide/promotions/)
:::

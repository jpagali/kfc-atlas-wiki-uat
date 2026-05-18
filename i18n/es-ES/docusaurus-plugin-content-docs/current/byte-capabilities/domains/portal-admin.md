---
title: Portal de Byte — Admin &amp; Configuration
description: Lo que Byte Portal hace — el plano de control completo para los equipos de mercado y operaciones que abarcan tiendas, menús, promociones, impuestos, pagos y más.
sidebar_label: Byte Portal — Admin &quot; Config
---

# Portal de Byte — Admin &amp; Configuration

**What it does:** Byte Portal es el avión de control para todos los mercados y equipos de operaciones. Es donde se configura todo sobre la plataforma, desde horas de tienda y menús hasta promociones, impuestos, pagos y reembolsos.

**Why it matters:** Sin Byte Portal, los mercados no pueden ir en directo. Cada característica en Byte Helium depende de que algo esté correctamente configurado en Byte Portal. Misconfiguración en Byte Portal tiene impacto directo del cliente.

:::danger Byte Portal no autor menús
Autorización de menús (crear artículos, descripciones, precios, opciones) ocurre en **Byte Menu** — una herramienta separada fuera de la plataforma Atlas. Byte Portal asigna versiones de menú ya publicadas a mercados y canales. Puede aplicar parches y sobrevalores de precios, pero no puede crear contenido de menú desde cero.
:::

---

## Cuadro de cuadros

| Característica | Problema que Solves | Lo que hace | Cómo funciona | Dependencias | Prerrequisitos | Limitaciones | Metrices afectadas |
|---|---|---|---|---|---|---|---|
| ** Funciones de los usuarios (RBAC)** | Los equipos de mercado necesitan acceso amplio | Invita a los usuarios, asigna funciones, hace cumplir el acceso basado en el alcance (mercado/grupo/store) | SSO + MFA para iniciar sesión; RBAC con motor de políticas; control de alcance bloquea el acceso fuera de lugar | Proveedor de identidad, servicio RBAC, tienda de auditoría | IdP configurado por mercado | Funciones personalizadas utilizan la acción aprobada lista blanca; todas las acciones auditadas | Tasa de violación de acceso, tiempo de inscripción del usuario |
| **Store &quot; Group Configuration** | Los mercados necesitan configurar sus restaurantes | Gestiones almacenan datos de administración, jerarquías de grupo, horarios comerciales, estado en tiempo real y políticas de trinificación | Tiendas vinculadas al POS; grupos definen la herencia; horarios comerciales; estado (abierto/pausado/cerrado) afecta los canales | Integración del POS, catálogos compartidos | Semillas de datos de la tienda | No hay ciclos en la jerarquía de grupos; el estado es fuente de verdad en tiempo real para todos los canales | Fiabilidad de los datos de la tienda, eventos de tiempo libre |
| **Minu Assignment &quot; Patching** | Los mercados necesitan controlar qué menú se muestra donde | Asignaciones versiones de menú publicadas al mercado/store/canal; aplica parches, salidas de día y anulaciones | Byte Portal consume versiones publicadas por Byte Menu; asignaciones con ventanas de validez; plantillas de parche para reglas de precio/disponibilidad; salidas para disponibilidad y precios basados en el tiempo | Servicio Byte Menu, Motor de Asignación | Versión de menú publicada en Byte Menu | Byte Portal no autoriza los menús, es Byte Menu. Los parches conflictivos están bloqueados. El comportamiento de Daypart todavía depende de la estructura de menú publicada que apoye a las entidades de destino. | Menú publicar la tasa de éxito |
| **Configuración de promociones** | Los equipos de marketing necesitan crear y gestionar ofertas | Crea promociones con elegibilidad, beneficios, horarios, códigos y presupuestos | Definición de promoción → evaluación por Commerce Backend al checkout | Commerce Backend, Promo Engine | Configuración de promoción completa | Conflictos de bloqueo resueltos por política; presupuestos vencidos bloquean automáticamente nuevas redencións | Tasa de rescate de promoción, tasa de quemaduras presupuestarias |
| **Configuración de texto** | Los equipos financieros deben establecer tasas de impuestos correctas | Define perfiles fiscales, categorías, tarifas, reglas y redondeo por mercado | Perfiles fiscales asignados a los mercados; el motor de precios se aplica al checkout | Motor de impuestos, Servicio de precios | Perfil fiscal creado y asignado | Las tasas de superposición bloqueadas; deben ajustarse a la ley local | Precisión fiscal, tasa de auditoría de cumplimiento |
| **Configuración de pagos** | Los mercados necesitan establecer sus métodos de pago | Configura perfiles PSP, métodos de pago, reglas de enrutamiento, políticas de sobrecarga y reglas de riesgo | PSP credenciales almacenadas en bóveda (no en Byte Portal); el motor de enrutamiento utiliza reglas de canal/mercado | PSP, Vault, motor de rugido | Contrato PSP en vigor; credenciales en bóveda | Los secretos nunca expuestos en Byte Portal; los cambios de enrutamiento no deben interrumpir los flujos de pago | Disponibilidad del método de pago, tasa de error de enrutamiento |
| **Reembolsos de pedidos* | Los equipos de opciones necesitan gestionar problemas con los clientes | Órdenes de búsqueda (PII-redacted), reembolsos de procesos, gestionar ajustes no monetarios | Búsqueda de pedidos con acceso a PII basado en el papel; reembolso validado contra la política; aprobación de varios pasos opcional | Servicio de pedidos, PSP, tienda de auditoría | Política de reembolso configurada | Reembolsos, plazos y reglas de aprobación establecidas en la política; eliminación permanente no permitida | Tiempo de procesamiento de reembolso, tasa de rechazo de reembolso |
| **Localización &quot; Gestión del Contenido** | Los mercados necesitan contenido localizado | Gestiona locales, claves de traducción, bloques de contenido, anuncios y avisos legales | Entradas de traducción por local; bloques de contenido programados por ámbito; avisos legales versionados | CMS, Legal CMS, CMP | Locale habilitado para el mercado | Las traducciones perdidas se remontan al lugar predeterminado | Cobertura de traducción, tasa de habilitación local |
| **Banderas decorativas &quot; Ajustes** | Ingeniería y productos necesitan rollos controlados | Crea banderas con reglas de selección; gestiona la jerarquía de configuración del sistema | Banderas evaluadas en tiempo de ejecución por mercado/canal/segment; configuración hereda global → entorno → mercado | Servicio de configuración, Motor de bandera de la naturaleza | Bandera creada y dirigida | Mal config rollback a través de la historia de la versión o bandera mata-switch | Tasa de adopción de bandera, tasa de error de configuración |
| **Informing &quot; Exports** | Los equipos necesitan datos de la plataforma | Define los informes, guarda opiniones, exporta datos para archivar o programar la entrega | Informe del almacén de datos de las consultas del motor; las exportaciones se materializan de forma asincrónica; se entregan a S3/FTP/Email/Webhook | Almacén de datos, Motor de exportación | Informe definido y acceso concedido | Grandes exportaciones asinc con seguimiento de progreso; RBAC controla lo que cada papel puede exportar | Uso de informes, tasa de éxito en el trabajo de exportación |
| **Distribuciones de Internet** | Los sistemas de terceros necesitan eventos de plataforma | Gestiona suscripciones webhook para eventos de plataforma; monitores de entrega y DLQ | Entrega al menos una vez; firmada con HMAC/OAuth; DLQ para eventos fallidos | Plataforma de integración/Evento | Tipo de evento suscrito; punto final configurado | At-least-once (no exactamente-once); los suscriptores deben manejar idempotency | Tasa de éxito de entrega Webhook, tamaño DLQ |
| **Audit &quot; Observability** | El cumplimiento y las operaciones necesitan visibilidad | Registra todas las acciones de administración con quién / qué / cuándo; monitorea cheques de salud y SLOs | Actos de auditoría estructurados; registros de acceso; controles de salud y reglas de alerta; seguimiento de SLO con presupuesto de error | Tienda de auditoría, Plataforma de observabilidad | Observabilidad configurada | Registros de auditoría resistentes; modificaciones no permitidas | Cumplimiento de SLO, integridad de auditoría |

---

:::tip Míralo en el wiki
Byte Portal características arriba del mapa directamente a la Guía del Portal de Admin:

- [Tiendas](/docs/admin-portal-guide/stores/)— Configuración del Grupo Store
- [Menús](/docs/admin-portal-guide/menus/)y[Productos](/docs/admin-portal-guide/products/)— Asignación de menús
- [Promociones](/docs/admin-portal-guide/promotions/)y[Grupos de tiendas](/docs/admin-portal-guide/store-groups/)— Promociones Configuración
- [Bundles](/docs/admin-portal-guide/bundles/)- Gestión de la selección
- [Agentes](/docs/admin-portal-guide/agents/)— Agentes de automatización
- [Atención al cliente](/docs/admin-portal-guide/customer-support/)— Ordenes &quot; Reembolsos
- [Dispositivos intraestables](/docs/admin-portal-guide/in-store-devices/)— Gestión de dispositivos POS
:::

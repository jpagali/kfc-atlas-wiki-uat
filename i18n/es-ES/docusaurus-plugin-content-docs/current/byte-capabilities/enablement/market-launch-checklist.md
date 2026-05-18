---
title: Lista de lanzamiento de mercado
description: Una lista de verificación de go/no-go para equipos de mercado lanzando en la plataforma Atlas / Byte Helium. Construido de la capa de realidad — estas son las cosas que realmente fallan si se saltan.
sidebar_label: Lista de lanzamiento de mercado
---

# Lista de verificación de lanzamiento de mercado

Esta lista de verificación se construye desde el[Reality Check](/docs/byte-capabilities/enablement/reality-check)— las lagunas de dependencia y los patrones de fracaso que aparecen en cada despliegue. Trabajar a través de él en orden. No empiece UAT hasta que la Fase 1 esté completa.

---

## Cómo utilizar esta lista de verificación

Cada artículo tiene un nivel ** de riesgo** y una puerta **go/no-go**. Los elementos marcados 🔴 son bloqueadores duros — el lanzamiento no puede proceder con seguridad sin ellos. Los elementos marcados 🟡 deben ser confirmados antes de que comience UAT. Los elementos marcados 🟢 son elementos de pulido que deben hacerse antes del día de lanzamiento.

---

## Fase 1 — Fundación (Se debe completar antes de cualquier prueba)

### 1.1 Acceso Byte Portal &quot; Usuarios

:::danger Ve / No-Go Gate
La prueba no puede comenzar hasta que el equipo haya ampliado el acceso de Byte Portal.
:::

- [ ] El entorno Byte Portal está previsto para el mercado
- [ ] Los usuarios de administración de mercado invitaron y asignaron funciones correctas (RBAC)
- [ ] Guardia de alcance verificada — los usuarios no pueden acceder a datos fuera del mercado
- [ ] MFA habilitado para todos los usuarios de Byte Portal

---

### 1.2 Configuración de la tienda

:::danger Ve / No-Go Gate
Los clientes no pueden ordenar si las tiendas están desaparecidas o mal configuradas.
:::

- [ ] Todas las tiendas de lanzamiento creadas en Byte Portal con datos de la tienda correcta
- [ ] Horas de negociación inscritas en el ** zona horaria local incorrecta** (punto común de fracaso)
- [ ] Almacenar estado en tiempo real integrado con POS (abierto/pausado/cerrado refleja estado vivo)
- [ ] Grupos de tiendas configurados con la jerarquía correcta — no ciclos
- [ ] Configuración de políticas de oscilación (limites de orden por ventana de tiempo) si es aplicable

---

### 1.3 Menú

:::danger Ve / No-Go Gate
Los clientes no ven ningún menú si el oleoducto de publicación no está completo.
:::

- [ ] Contenido de menú completamente autorizado en **Meta Menu** (no Portal)
- [ ] Versión de menú publicada en Byte Menu para todos los canales de lanzamiento
- [ ] Versión de menú asignada al mercado en Byte Portal
- [ ] Menú probado: artículos correctos, precios y modificadores mostrar por tienda/canal
- [ ] Artículos sólo de entrega y colección correctamente abarcados por el canal
- [ ] Datos de nutrición y alérgenos autorizados en Byte Menu (si es necesario por mercado)

---

### 1.4 Configuración fiscal

:::danger Ve / No-Go Gate
Incorrect tax causes incorrect pricing at checkout — a financial and compliance risk.
:::

- [ ] Perfil fiscal creado para el mercado con tasas y categorías correctas
- [ ] Reglas fiscales verificadas contra la ley fiscal local con firma de Finanzas
- [ ] Perfil fiscal asignado al mercado en Byte Portal
- [ ] Prueba de salida final a fin muestra la correcta descomposición fiscal

---

### 1.5 Pagos / PSP

:::danger Ve / No-Go Gate
Los pagos no pueden procesar si el PSP no está configurado final a extremo.
:::

- [ ] PSP contrato en el mercado
- [ ] PSP credenciales almacenadas en el Vault (NOT en Byte Portal directamente)
- [ ] Perfil PSP creado en Byte Portal con métodos de pago correctos habilitados
- [ ] Reglas de enrutamiento configuradas (enrutamiento de canal/mercado específico)
- [ ] Políticas de recarga y tarifas configuradas (si procede)
- [ ] Pago de la tarjeta final a fin probado con éxito en el estancamiento

---

## Fase 2 — Canales &quot; Experiencias (Debe ser completo antes de UAT)

### 2.1 Localización

:::warning Pre-UAT Gate
Localización incorrecta significa que los clientes ven menús incorrectos, precios o texto.
:::

- [ ] Mercado configurado en el servicio Byte Portal / Config con el local correcto
- [ ] Detección de idiomas / locales probados (geo-IP y selección explícita)
- [ ] Claves de traducción completas para todas las cadenas de interfaz de usuario - informe de cobertura de ejecución
- [ ] Traducciones perdidas confirmadas para volver al inglés correctamente (no al campo en blanco)

---

### 2.2 Modos de Orden

:::warning Pre-UAT Gate
El modo de orden es el punto de entrada - si esto falla, no se puede poner orden.
:::

- [ ] Modo de colección probado final a extremo: selección de tiendas → menú → checkout → orden colocado
- [ ] Modo de entrega probado final a extremo: entrada de la dirección → check → menú → checkout → orden colocado
- [ ] Zonas de cobertura de entrega configuradas en Byte Portal / Geo service (si la entrega activada)
- [ ] Modo de entrega desactivado para mercados que no soportan la entrega
- [ ] Estado de la tienda (abierto/cerrado) bloques correctos ordenando desde tiendas cerradas

---

### 2.3 Cuentas de identidad

- [ ] OTP email sign-in probado (registración y login)
- [ ] Google OAuth probado (si está habilitado para el mercado)
- [ ] Apple Sign-In probado (si está habilitado para el mercado)
- [ ] edición de perfiles, preferencias de comunicación y trabajo de eliminación de cuentas
- [ ] Camino de checkout de invitados probado (sin cuenta requerida)

---

### 2.4 Promoción

:::warning Pre-UAT Gate
Los promos mal colocados pueden ser redimidos por el mercado o canal equivocado.
:::

- [ ] Todas las promociones de lanzamiento configuradas en Byte Portal con la correcta:
  - Análisis de los mercados (no mundial a menos que se desee)
  - Escopado de canales (entrega vs. colección cuando sea aplicable)
  - Gama de fechas (comparación de fechas de inicio y final)
  - Límites presupuestarios (capítulos de exención configurados)
- [ ] Código Promo probado: aplica correctamente, código inválido devuelve el error pero mantiene el carrito
- [ ] La promoción no se apila con otros promos a menos que se pretenda apilar

---

### 2.5 Lealtad (Si el mercado está lanzando con Lealtad)

- [ ] Programa de lealtad habilitado para el mercado con el equipo de lealtad global
- [ ] La lealtad a bordo de flujo probado para nuevos registros
- [ ] El balance de puntos muestra correctamente post-orden
- [ ] Catálogo de recompensas muestra recompensas correctas para el mercado
- [ ] Redención de recompensa probado final a fin
- [ ] Desafíos configurados (si procede)
- [ ] Cumpleaños / recompensa de registro activados configurados

---

### 2.6 Seguimiento de entrega (Si el mercado tiene seguimiento en tiempo real)

- [ ] Integración logística 3P confirmada y probada
- [ ] ETA en tiempo real mostrado correctamente en la pantalla de seguimiento del orden
- [ ] Comportamiento de Fallback confirmado si los eventos de seguimiento se retrasan

---

## Fase 3 — Contenido &quot; Legal (Se debe completar antes del día de lanzamiento)

### 3.1 Contenido del CMS

:::warning Estos serán visibles para los clientes el primer día.
:::

- [ ] Contenido de la página principal autorizado y publicado en CMS
- [ ] Sobre / Nuestra página de historia publicado
- [ ] Contenido de preguntas frecuentes autorizado y publicado
- [ ] Carreras / tablero de trabajo configurado (si es aplicable)

---

### 3.2 Cumplimiento jurídico

- [ ] Condiciones publicadas en Legal CMS para el mercado local y fecha efectiva
- [ ] Política de privacidad publicada para el mercado locale
- [ ] Categorías de cookies configuradas en CMP por ley local de cookies
- [ ] banner de consentimiento de cookies probado - preferencias correctamente almacenadas

---

## Fase 4 — Operaciones (antes del inicio de sesión)

### 4.1 Banderas de alimentación

- [ ] Todas las banderas de características específicas del mercado revisadas y establecidas correctamente en Byte Portal
- [ ] Banderas de disparos identificados para características críticas
- [ ] Configuración de la bandera probada en el estancamiento - no características inesperadas activadas o deshabilitadas

---

### 4.2 Webhooks & Integrations (si procede)

- [ ] Suscripciones Webhook configuradas para sistemas de terceros
- [ ] Puntos finales del suscriptor confirmados como idempotente (mano eventos duplicados con seguridad)
- [ ] DLQ (Dead Letter Queue) monitoreado y alertas configuradas

---

### 4.3 Reembolsos y opciones

- [ ] Política de reembolso configurada en Byte Portal (caps, límites de tiempo, reglas de aprobación)
- [ ] El equipo de Ops tiene acceso Byte Portal a reembolsos de procesos
- [ ] Búsqueda de pedidos probada con acceso PII basado en el papel correcto

---

### 4.4 Observabilidad

- [ ] Controles de salud y paneles SLO configurados para el mercado
- [ ] Reglas de alerta activas para los servicios de checkout, pago y seguimiento
- [ ] Acceso de registro de auditoría confirmado para el equipo de cumplimiento

---

## Final Sign-Off

| Zona | Propietario | Signed Off |
|---|---|---|
| Configuración de menús | Market Byte Portal Admin | ☐ |
| Configuración fiscal | Finanzas | ☐ |
| PSP / Pagos | Equipo de pagos | ☐ |
| Promociones de análisis | Marketing / Byte Portal Admin | ☐ |
| Contenido legal de cumplimiento | Equipo jurídico | ☐ |
| Completación de la traducción | Equipo de localización | ☐ |
| Banderas de alimentación | Equipo de producto | ☐ |
| UAT final a fin pasado | QA / Equipo de lanzamiento | ☐ |

---

:::tip Lectura relacionada
- [Reality Check](/docs/byte-capabilities/enablement/reality-check)— los patrones de falla esta lista de verificación está diseñada para prevenir
- [Límites de responsabilidad](/docs/byte-capabilities/enablement/capability-boundaries)- que posee lo que antes de levantar el billete equivocado
:::

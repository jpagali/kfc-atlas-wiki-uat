---
title: Reality Check
description: Los problemas de salida más caros provienen de malentendidos, no de características perdidas. Lee esto antes de ir a vivir.
sidebar_label: Reality Check
---

# Comprobación de la Realidad vocacional — Lo que los mercados necesitan saber

Los problemas más caros de salida provienen de malentendidos, no de características perdidas. Lee esto antes de ir a vivir.

---

## Las grandes misconcepciones

Estos son los supuestos que los equipos más comúnmente llevan a la puesta en marcha — y la realidad detrás de cada uno.

---

### ❌ "Byte Helium posee precios"

**Reality:** Byte Helium muestra precios — no posee, calcula ni controla. Los precios son propiedad del Servicio de Backend de Comercio y Menu. Si los precios están mal en la aplicación, la fijación está en el backend o configuración del menú, no en Byte Helium.

---

### ❌ "Podemos configurar el flujo de salida en Byte Helium"

**Reality:** Los flujos de checkout (variantes, pasos, tarifas) son orquestados por la Orquesta de Checkout de Commerce Backend. Los mercados definen qué variante utilizar a través de la configuración Byte Portal. Byte Helium renders what the backend tell it.

---

### ❌ "Byte Portal nos permite escribir nuestro menú"

**Reality:** Byte Portal asigna y remiendo menús ya publicados. Autorización de menús (crear artículos, descripciones, precios) ocurre en **Meta Menu** — una herramienta separada fuera de la plataforma Atlas. Byte Portal no puede crear contenido de menú desde cero.

---

### ❌ "Las promociones están configuradas en Byte Helium"

**Reality:** Las reglas de promoción, elegibilidad, códigos y presupuestos se configuran en el **Byte Portal**. Byte Helium sólo hace lo que el Promo Engine devuelve. La eligibilidad es siempre el lado del servidor.

---

### ❌ "Real-time delivery tracking is always available"

**Reality:** El seguimiento de la entrega es **opcional por mercado**. Requiere integración con un proveedor de logística de terceros. Sin esto, los clientes ven el estado del pedido de POS solamente (aceptado/ready/completed), no el seguimiento del GPS en vivo.

---

### ❌ "Loyalty funciona automáticamente cuando un mercado va en directo"

**Reality:** La lealtad requiere tres cosas: (1) el programa de lealtad configurado para el mercado, (2) el cliente a ser firmado, y (3) el cliente a haber inscrito. Los usuarios invitados no obtienen beneficios de lealtad.

---

## Dependencias ocultas

Estas son características que dependen silenciosamente de otras cosas que están en su lugar primero. Si la dependencia falta, la característica falla a tiempo de ejecución o no aparece en absoluto.

| Característica | Lo que depende silenciosamente de | Impacto si falta |
|---|---|---|
| Elegibilidad promo | Motor Promo del lado del servidor por mercado | Promos puede aparecer pero fracasar en la redención |
| Seguimiento de la entrega | Integración logística 3P por mercado | El seguimiento muestra que no está disponible |
| Direcciones guardadas | Se firma al cliente | Los usuarios invitados pierden sus direcciones cada sesión |
| Historia del orden | Cuenta de cliente existente y vinculada | Ordenes no visibles en la historia |
| Desafíos &quot; gamification | Programa de arrendamiento habilitado por mercado | La pestaña Desafíos no aparece |
| Consentimiento de cookies | CMP configurado por mercado | El banner de consentimiento no puede cumplir con la ley local |
| Suscriptores de Webhook | Manejo de responsabilidad civil al final | Los eventos pueden ser procesados dos veces (al menos una vez entregada) |
| Proceso de reembolso | Política de reembolso configurada en Byte Portal | Las solicitudes de reembolso fallarán la validación |
| Función de inclinación | Modo de entrega activo; PSP configurado para captura separada | Consejo no disponible para todos los mercados |
| Precisión fiscal | Perfil fiscal asignado al mercado en Byte Portal | Los pedidos pueden mostrar impuestos incorrectos o fallar en el checkout |

---

## Puntos de falla comunes durante el rodillo

### Cuestiones de configuración de la tienda
Horas de tráfico establecidas en la zona horaria equivocada. Estado de la tienda en tiempo real no integrado con POS. Resultado: los clientes intentan pedir desde tiendas cerradas.

### Menu no publicado
Versión de menú escrita en Byte Menu pero no asignada/publicada al mercado en Byte Portal. Resultado: los clientes no ven ningún menú.

### Códigos promocionales no abarcados correctamente
Promos creados sin correcto mercado/canal/fecha de copiado. Resultado: promos visibles globalmente cuando están destinados a ser locales.

### PSP credenciales no en bóveda
Byte Portal configurado pero los secretos PSP no se colocan en la bóveda de secretos. Resultado: los pagos de tarjetas fallan en silencio.

### Locale/traducción incompleta
Mercado lanzado con claves de traducción incompletas. Resultado: los clientes ven texto inglés o campos vacíos.

### Zona de cobertura de entrega no configurada
Modo de entrega habilitado pero sin zonas de cobertura definidas para el mercado. Resultado: todas las direcciones de entrega rechazadas.

### La lealtad no está habilitada para el mercado
Lealtad UI visible en Byte Helium pero programa no habilitado para el mercado en servicio de Lealtad. Resultado: falla la matrícula.

---

## Donde los mercados lucharán más

| Zona | Nivel de riesgo | Qué hacer |
|---|---|---|
| Configuración fiscal | 🔴 High | Trabaja con Finanzas + Portal taxista antes de ir-live |
| Información de publicación de menús | 🔴 High | Asegurar los equipos Byte Menu y Portal alineados en publicar → asignar → previsualizar → publicar a los canales de tubería |
| PSP / Configuración de pago | 🔴 High | Contrato de PSP, secretos de bóveda, reglas de enrutamiento y recargar todo debe estar en su lugar antes de las pruebas de salida |
| Seguimiento de la entrega | 🟡 Medium | Decidir temprano si el mercado tendrá seguimiento en tiempo real; afecta el ajuste de expectativas del cliente |
| Facilitación de la lealtad | 🟡 Medium | La lealtad es un mercado-opt-in; necesita coordinación con el equipo de lealtad global |
| Preparación de contenidos de CMS | 🟡 Medium | Acerca de páginas, FAQs, documentos legales deben ser autorizados antes del lanzamiento |
| Configuración de la bandera | 🟡 Medium | Características cerradas por banderas; confirmar qué banderas están en el mercado y probarlas |
| Completación de la traducción | 🟢 Baja (pero visible) | Ejecutar informe de cobertura de traducción antes de UAT; las claves faltantes se vuelven al inglés |

---

:::tip Use la lista de verificación
El[Lista de lanzamiento de mercado](/docs/byte-capabilities/enablement/market-launch-checklist)convierte todo en puertas de go/no-go concretas para su lanzamiento.
:::

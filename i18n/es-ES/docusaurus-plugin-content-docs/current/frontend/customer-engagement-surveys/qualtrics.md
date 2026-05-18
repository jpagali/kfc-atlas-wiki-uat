---
title: Qualtrics
sidebar_position: 5
---

# Qualtrics

**Feature area:** [Encuestas de participación del cliente](./)

Qualtrics se utiliza como la plataforma de encuestas para **KFC Escucha** encuestas de compromiso de clientes de estilo. Se ocupa de la entrega de encuestas, la lógica de ramificación, captura de respuestas y flujos de trabajo de presentación de informes utilizados por los equipos de experiencia del cliente y operaciones de mercado.

## Qué Qualtrics Handles

Dentro del ecosistema Atlas, el Qualtrics suele apoyar:

- Formularios de encuesta presentados a través de enlaces web o códigos QR
- Preguntas de encuesta condicional basadas en canal, mercado o tipo de respuesta
- métricas de satisfacción como CSAT, NPS y códigos de razón
- Exportaciones y paneles de respuesta para la presentación de informes CX
- Alertas para respuestas de bajo nivel que pueden requerir seguimiento

## Típico KFC Escucha Flow

```text
1. Customer completes an order or visit
2. KFC shares a survey invitation (receipt, email, push, or QR code)
3. Customer opens the Qualtrics survey
4. Qualtrics collects ratings, comments, and store experience details
5. Market teams review dashboards and act on service-recovery cases
```

## Datos comunes capturados

| Punto de datos | Ejemplo |
|---|---|
| Visita o orden de referencia | Número de pedido, ID de tienda, fecha de visita |
| Canal | Dine-in, Takeaway, Delivery, App, Web |
| Puntaje de satisfacción | Visita general o clasificación de pedidos |
| Categoría temática | Calidad de los alimentos, artículos desaparecidos, velocidad, servicio de personal |
| Comentarios de texto libre | Comentarios de los clientes en sus propias palabras |

## Consideraciones operacionales

### Survey Triggering
Los mercados eligen cuándo invitar a los clientes. Los patrones comunes incluyen inmediatamente después del checkout, después del cumplimiento, o de enlaces de recibo impresos utilizados en la tienda.

### Incentivos
Algunos programas incluyen un incentivo, como un código de validación o una oferta después de la finalización de la encuesta. Las normas de incentivos se gestionan a nivel de mercado y pueden requerir coordinación con promociones o equipos de CRM.

### Escalas
Las respuestas de bajo nivel se pueden enrutar en el soporte al cliente o en los flujos de trabajo de revisión CX. Los mercados deben definir:

- ¿Qué umbral de puntuación crea una alerta
- Que equipo posee seguimiento
- Cuán rápido deben contactarse los clientes

## Notas de integración

Qualtrics está adyacente a Atlas en lugar de una dependencia de flujo de pedidos de núcleo. La experiencia de la encuesta puede hacer referencia a los datos de pedidos de Atlas, pero la propia plataforma de la encuesta se gestiona por separado de la aplicación principal de pedidos de clientes.

:::
Al iniciar o cambiar un programa KFC Listens, alinear la redacción de la encuesta, el tiempo de activación y el SLA de recuperación de servicios antes de ir en vivo. Una encuesta bien prematura con una propiedad de seguimiento poco clara generalmente crea ruido operacional en lugar de una información útil.
:::

---
title: MarTech
sidebar_position: 4
---

# MarTech

## Lo que hace

La característica de MarTech es la pila de tecnología de marketing de la plataforma Atlas, el conjunto de integraciones que recopilan, enrutan y actúan en los datos de comportamiento del cliente en cada punto de contacto de la experiencia KFC.

Conecta tres sistemas:

- **Event Tracking** — captura lo que hacen los clientes en la aplicación y en la web
- **mParticle** — actúa como la plataforma de datos del cliente (CDP), recibiendo todos los eventos y routing them to downstream tools
- **Braze** — la plataforma de compromiso del cliente, utilizada para notificaciones de empuje, mensajes de aplicación y automatización de marketing

Juntos, permiten que los mercados de KFC ejecuten campañas personalizadas y basadas en datos sin implicación de ingeniería para cada uno.

## Cómo Flujo de Datos

```
Customer Action (app / web)
        ↓
  Event Tracking Layer
  (structured event fired)
        ↓
     mParticle
  (data collected + routed)
        ↓
      Braze
  (campaigns, push, in-app)
```

## Componentes

### Seguimiento de eventos
Cada acción significativa del cliente en Atlas — ver un producto, añadir al carrito, completar un pedido, tocar un promo — dispara un evento estructurado. Estos eventos siguen un esquema consistente para que los datos sean comparables en los mercados.

### mParticle
mParticle es el centro central. Recibe todos los eventos de Atlas, los normaliza y enriquece, y envía los datos relevantes a herramientas como Braze, plataformas de análisis y cualquier otro destino configurado.

### Braze
Braze recibe perfiles de clientes y datos de eventos de mParticle y los utiliza para potenciar:

- Envío de notificaciones (actualizaciones de pedidos, promociones, reingeniería)
- Mensajes de aplicación (cartas personalizadas, avisos de embarque)
- Automatización de la comercialización (campañas activadas basadas en el comportamiento del cliente)

## Plataformas

| Plataforma | Apoyo |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

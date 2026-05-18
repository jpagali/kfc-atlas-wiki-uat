---
title: Canales de pedidos
sidebar_position: 3
---

# Canales de pedidos

::: alerta
Todo el contenido de abajo debe ser tratado como framing de productos de marcadores de posición basado en lo que actualmente se apoya en la Guía del Portal de Admin. Validar los detalles de implementación específicos del mercado antes de usar esta página como fuente final de verdad.
:::

Atlas es compatible con un modelo de pedidos multicanal por tienda**, lo que permite a los equipos configurar cómo se entregan menús, disponibilidad y experiencias de pedidos en todos los puntos de contacto del cliente.

En lugar de tratar los canales de orden como un trío global fijo como`Dine-in / Delivery / Takeaway`, Atlas se entiende mejor como una plataforma de distribución basada en canales**. Las tiendas pueden publicar diferentes menús a diferentes destinos como **Digital**, **Kiosk** y **In-Store**, mientras que la experiencia de frontend se adapta en consecuencia.

Para el front-end, esto crea dos capas de diseño de experiencia:

- el canal **ordering** la tienda está configurada para servir
- el modo **order** el cliente selecciona dentro de esa experiencia, como la entrega, la recogida o la entrada

## Vista del producto

### Digital es la superficie de pedido del cliente principal
El canal digital es la base para la aplicación y el orden web. Es donde la disponibilidad del menú se convierte en visible para el cliente, donde el pedido en línea se controla operacionalmente, y donde la experiencia del escaparate se vuelve factible.

Desde una perspectiva de producto, esto le da a los equipos un modelo operativo claro:

- los clientes sólo ven menús en vivo que han sido asignados y publicados al canal digital de esa tienda
- **Aceptar pedidos en línea** suprime el pedido sin requerir cambios de menú más amplios
- la disponibilidad del almacén se puede gestionar a nivel de la tienda sin cambiar la experiencia general del producto

Esto hace que Atlas sea operacionalmente flexible manteniendo el viaje del cliente simple.

### Los modos de orden viven dentro de la experiencia del canal
El viaje de frontend ya trata ** entrega**, **pickup**, **dine-in**, **catering**, y **scheduled ordering** como opciones de cliente. La Guía del Portal de Admin, sin embargo, describe etiquetas de canal como **Digital**, **Kiosk**, y **In-Store**.

La interpretación más limpia del producto es:

- **Digital** es el canal operativo
- **Entrega** y **Pickup** sentarse dentro de ese canal digital como modos de pedido del cliente
- **Kiosk** y **In-Store** pueden llevar su propia estrategia de menú y reglas de experiencia

Esta distinción importa porque permite que la plataforma se separe ** Distribución operacional** de ** Elección de cumplimiento de clientes**.

### Estrategia de menú basada en canales es una fuerza
La Guía del Portal de Admin confirma que las tiendas pueden asignar diferentes menús a diferentes canales y publicarlos de forma independiente.

Eso crea un fuerte valor de producto en el frontend:

- la disponibilidad de productos puede variar entre app/web, kiosco y pedido en tienda
- precios, paquetes o estructura de categoría puede diferir por canal
- un cambio de menú puede aparecer en una superficie antes de que aparezca en otra si la publicación se hace canal por canal

Esto es especialmente útil cuando el negocio quiere adaptar la experiencia por punto de contacto en lugar de forzar un menú para servir cada caso de uso.

### Ordenación programada está controlada, no se asume
La Guía del Portal de Admin documenta un **Allows Future Orders** toggle y señala que depende de un canal de pedidos compatible.

Para el frontend, esta posición programada ordenando como una experiencia gestionada:

- Ordenación programada existe como una capacidad configurable
- aparece sólo donde la tienda y la configuración del canal lo apoyan
- se puede introducir selectivamente sin redefinir todo el viaje

Eso da espacio a los mercados para lanzar la característica intencionalmente en lugar de hacerlo obligatorio en todas partes.

### Las operaciones de almacén dan forma directa a la experiencia del cliente
El Portal Byte expone los controles de la tienda como **Aceptar pedidos en línea** y la publicación de menús específicos de la tienda.

Esto significa que el frontend es sensible a la tienda por el diseño:

- una tienda puede ser ordenable mientras que otra no está disponible temporalmente
- una tienda puede mostrar un menú digital mientras que otra no tiene un menú digital en vivo publicado
- cierres temporales o pausas operativas pueden explicarse por configuración de la tienda en lugar de un outage de la plataforma

Esta es una característica valiosa del producto porque permite a los equipos de operaciones reaccionar rápidamente preservando un patrón de plataforma consistente.

## Posición recomendada

La forma más fuerte de posicionar a Atlas hoy es:

- Atlas admite múltiples canales de pedidos por tienda
- los nombres de los canales son específicos para la aplicación, con ejemplos como **Digital**, **Kiosk**, y **In-Store**
- el viaje del cliente digital se encuentra encima de la configuración del canal digital de una tienda
- Los modos de orden orientados al cliente como **entrega** y **pickup** son experiencias dentro de esa capa digital, no lo mismo que los canales de publicación de administración
- la visibilidad del menú y la disponibilidad de pedidos se conforman por asignación de canales por tienda, estado de publicación y toggles operativos

:::
Si usted necesita documentar el comportamiento de frontend específico del mercado, verifique las etiquetas de canal y las asignaciones de menú en la vista **Menus** de la tienda primero, luego describir el viaje del cliente en la parte superior de esa configuración operacional.
:::

## Lo que debemos evitar sobreestadización

- que todos los mercados utilizan los mismos tres canales
- que cada canal soporta las mismas capacidades
- que el comportamiento del agregador se puede inferir de la actual Guía del Portal de Admin
- que cualquier mercado específico tiene entrada, entrega y despegue desplegado de la misma manera en cada tienda

## Byte Portal Sources Behind These Presumptions

- [Ver un menú de la tienda](/docs/admin-portal-guide/stores/view-a-stores-menu/)
- [Nuevo menú](/docs/admin-portal-guide/stores/assign-new-menu/)
- [Publicar un menú](/docs/admin-portal-guide/stores/publish-a-menu/)
- [Editar detalles de la tienda](/docs/admin-portal-guide/stores/edit-store-details/)
- [Aceptar Pedidos en línea (Turn On o Off)](/docs/admin-portal-guide/stores/2a-accept-online-orders-turn-on-or-off/)
- [Permitir Órdenes Futuros (en adelante o fuera)](/docs/admin-portal-guide/stores/2c-allow-future-orders-turn-on-or-off/)

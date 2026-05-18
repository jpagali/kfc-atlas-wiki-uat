---
title: Crear promociones
sidebar_position: 1
---

# Crear promociones

Este libro de juegos muestra cómo los equipos de KFC deben crear y lanzar una promoción en Atlas, desde el resumen de la campaña inicial a través de la asignación del grupo de almacenamiento y los controles previos al lanzamiento.

**Estimated time:** 30-60 minutos para la configuración, más aprobación y tiempo de QA
**Who does this:** Regional / BMU Admin, operaciones de marketing o propietarios de campañas con acceso de Admin Byte Portal

---

## Qué cubre este libro de juegos

Utilice este libro de juegos cuando KFC necesita:

- lanzar una nueva oferta digital en Atlas
- configurar elegibilidad y lógica de descuento
- asignar la promoción a las tiendas correctas o grupos de tiendas
- completar un paso básico de QA antes de la campaña va en vivo

Si usted está creando específicamente una oferta Comprar 1 Obtener 1, utilice la página de receta dedicada:[Receta 1 - Comprar 1 Obtener 1 Gratis (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/).

## Prerrequisitos

- la campaña KFC aprobada breve con detalles de oferta, fechas y mercado objetivo
- copia de promoción confirmada con el equipo de marketing local
- almacenamiento o grupo de almacenamiento confirmado
- Admin Byte Portal access to Promotions and Store Groups

## Paso 1: Confirme la estructura de promoción

Antes de construir algo en Atlas, confirme:

- el tipo de descuento
- productos o paquetes de clasificación
- Fecha de inicio y fin/hora
- si la promoción es automática o basada en códigos
- si la campaña se aplica a todas las tiendas o grupos de tiendas seleccionados

:::
Para las campañas de KFC, siempre confirme si la oferta debe aparecer en la aplicación, web, flujos conectados con agregadores, o un conjunto limitado de canales de pedidos antes de iniciar la configuración.
:::

## Paso 2: Crear la cáscara de promoción

Utilice la página de guía de Byte Portal[Crear una promoción](/docs/admin-portal-guide/promotions/create-a-promotion/)para crear el registro de promoción.

En esta etapa:

- elegir el flujo de promoción correcto
- añadir el nombre de promoción interna
- añadir el nombre de la pantalla orientado al cliente
- añadir una descripción clara para los operadores de KFC y los equipos de apoyo

## Paso 3: Agregar reglas y efectos

Definir:

- las condiciones que hacen que un cliente elija
- el efecto que debe aplicarse una vez que se cumple la condición
- cualquier límite, exclusiones o ventanas de campaña

Ejemplos:

- porcentaje de descuento en un paquete de comida
- descuento de valor fijo para un gasto de umbral
- ítem libre o recompensa de upsell después de una compra de calificación

## Paso 4: Asignar la promoción a las tiendas

Si la oferta no se aplica a cada tienda, asigne a través de grupos de tiendas:

- uso[Crear un grupo de tiendas](/docs/admin-portal-guide/promotions/create-a-store-group/)si se necesita un nuevo grupo de campaña
- uso[Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)para vincular la promoción
- comprobar que sólo se incluyen los restaurantes KFC previstos

## Paso 5: QA antes del lanzamiento

Antes del lanzamiento:

- verificar las fechas y tiempos
- probar la promoción contra los productos objetivo
- confirmar las pantallas de descuento correctamente en el viaje del cliente KFC
- confirmar los elementos ineligibles no activan la recompensa
- asegúrate de que los equipos de apoyo conozcan la fecha en vivo y el comportamiento esperado del cliente

## Paso 6: Monitor después del lanzamiento

Una vez en vivo, monitor:

- Comportamiento de redención
- apilamiento inesperado con otros promos
- cobertura del grupo de almacenamiento
- cualquier entrada de soporte de operadores o clientes

Si se requieren cambios, actualice la promoción inmediatamente en Atlas y notifique al propietario de la campaña.

## Guías relacionadas del Portal de Admin

- [Crear una promoción](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Editar una promoción](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Crear un grupo de tiendas](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [View Promotions for a Store Group](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)

## KFC Notes

- utilizar nombres de campaña que identifican claramente el mercado, el mecánico y el rango de fechas
- copia de pantalla de promoción alineada con la aprobación de marketing local KFC antes del lanzamiento
- para campañas de alto tráfico, completar QA tanto en la aplicación como en la web antes de ir-live

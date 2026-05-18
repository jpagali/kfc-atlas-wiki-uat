---
title: Braze Welcome Reward Canvas
sidebar_position: 3
---

# Braze Welcome Reward Canvas

Este libro explica cómo los equipos KFC pueden configurar un lienzo de recompensa de bienvenida en Braze para nuevos clientes. Los supuestos de contenido se tratan como verificados por ahora, por lo que el enfoque se centra en la estructura, el tiempo y el flujo de ejecución.

---

## Objetivo

Utilice este libro de juegos cuando KFC quiere dar la bienvenida a un cliente recién identificado o recién registrado con un viaje de recompensa automatizado.

Ejemplos típicos:

- primera recompensa de registro de aplicaciones
- primer premio de registro de lealtad
- primer incentivo de compra después de la creación de cuenta

## Prerrequisitos

- verificado contenido de recompensa y ofrecer lógica
- copia del mensaje KFC aprobada para el mensaje push, email o in-app
- Definición del público acordada
- Acceder a crear o editar el lienzo
- seguimiento o destino de enlace profundo confirmado

## Paso 1: Define el público de entrada

Opciones comunes de la KFC:

- clientes que completan el registro de aplicaciones
- clientes que se unen a la lealtad
- clientes que optan por la comercialización durante la configuración de cuenta

Asegúrese de que el público sólo incluye clientes realmente nuevos, no los usuarios existentes reingresen al viaje.

## Paso 2: Defina el gatillo y el retraso

Elija:

- el evento del gatillo que inicia el lienzo
- cualquier retraso antes del mensaje de recompensa envía
- si el cliente debe recibir la recompensa inmediatamente o después de un período de espera

Para KFC, un breve retraso es a menudo útil si desea que el mensaje se sienta bien orientado en lugar de transaccional.

## Paso 3: Establecer la secuencia del mensaje

Flujo de tela recomendado:

1. mensaje de bienvenida
2. explicación
3. CTA en la aplicación KFC o flujo de pedido
4. recordatorio opcional si la recompensa no se canjea dentro de la ventana activa

Mantenga el primer mensaje simple y marcado. Los detalles de la recompensa deben ser fáciles para que los clientes entiendan de un vistazo.

## Paso 4: Adjuntar la lógica de recompensa

Confirme:

- qué recompensa recibe el cliente
- cuánto tiempo permanece válido
- si debe conectarse a un elemento de menú específico, categoría o página de aterrizaje
- si se aplican exclusiones de mercado

Si la recompensa depende de una promoción en directo de Atlas, confirme que la promoción ya está configurada y asignada a las tiendas correctas antes de que el lienzo Braze se inicie.

## Paso 5: QA el viaje al cliente

Antes del lanzamiento:

1. prueba de entrada del público
2. verificar el tiempo de mensaje
3. validar copia, marca y enlaces
4. check fallback manejo si la recompensa no está disponible
5. confirmar las tierras CTA en la experiencia KFC esperada

## Paso 6: Lanzamiento y monitorización

Una vez en vivo, monitor:

- volumen de entrada
- Tasas de ejecución
- click-through para la aplicación o destino de pedido
- recompensa
- tickets de apoyo o confusión de clientes

## KFC Notes

- match tone and copy to current KFC brand campaigns
- mantener las recompensas bienvenidas fáciles de redimir; evitar la explicación pesada en el primer toque
- si la recompensa es específica para el mercado, confirme que las reglas del público de Braze y la cobertura de promoción de Atlas coinciden exactamente

---
title: "Guía: Categoría Contenido"
sidebar_position: 3
---

# Guía: Categoría Contenido

Categorías son cómo se organiza el menú KFC: agrupar productos en secciones como pollo, lados, bebidas o postres. Contentful le permite controlar la secuencia ** de productos dentro de una categoría y gestionar **subcategorías** para una estructura de menú más granular.

:::info
Categorías son creadas y gestionadas en **Byte Admin Portal**. Contentful es donde controlas la estructura de secuenciación y subcategoría. Los productos que no han sido configurados en Contentful son ** escondidos en el menú**.
:::

---

## Donde lo ves en el frente

** Navegación de menu** — Las categorías aparecen como elementos de navegación de alto nivel en el menú (por ejemplo, "Burgers", "Sides", "Drinks"). Hacer clic en una categoría lleva al cliente a una red de productos.

**Subcategorías** — Dentro de una página de categoría, las subcategorías actúan como pestañas o grupos de filtros (por ejemplo, dentro de "Chicken" podrías tener "Receta original", "Zinger", "Wraps"). Los productos están anidados dentro de cada subcategoría.

**Secuencia del producto** El orden en que los productos aparecen dentro de una categoría o subcategoría se controla en Contentful. Si no se establece ninguna secuencia en Contentful, el orden se remonta a lo que se define en Byte Admin Portal.

---

## Qué Configurar en Contentful

### Productos de secuenciación en una categoría

1. Una vez que la categoría ha sido creada en Byte Admin Portal con productos asignados, navega a la entrada **Categoría** en Contentful
2. Desplazarse hacia la sección **Menu Items**
3. Haga clic en **Añadir contenido existente** y seleccione los productos o paquetes que desee incluir — haga clic en **Seleccione entradas** para confirmar
4. Arrastre la mano derecha de cada entrada para reordenarlos
5. Haga clic en ** Cambios duplicados**

### Crear una Subcategoría

1. Haga clic en **Añadir Entrada** (el botón azul de la derecha)
2. Buscar y seleccionar **Subcategoría**
3. Rellene todos los campos requeridos (nombre, etiquetas de visualización, etc.)
4. Click **Publicar**

### Agregar una subcategoría a una categoría

1. Navegue a la entrada correspondiente de la categoría
2. Haga clic en **Contenido**, luego **Agregar entrada** y buscar **Categoría**
3. Seleccione el código de categoría deseado, rellene los campos requeridos y agregue la subcategoría existente como entrada vinculada
4. Click **Publicar**

### Subcategorías de secuencia

1. Navegue a la entrada de categoría deseada
2. Haga clic en el mango de tres puntos en el lado derecho de cada entrada subcategoría
3. Arrastre y suelte la posición deseada
4. Haga clic en ** Cambios duplicados**

### Productos de secuenciación dentro de una subcategoría

1. Navegue a la categoría que contiene la subcategoría
2. Haga clic en la subcategoría deseada
3. Utilice el mango de tres puntos para arrastrar y soltar productos en orden
4. Click **Publicar**

---

## Casos de uso

**Nuevo lanzamiento de productos** Cuando se agrega un nuevo artículo en Byte Admin Portal, añádalo y colóquelo en la categoría Contentful correcta por lo que aparece en el lugar correcto en el menú inmediatamente.

**Reestructuración de menús razonables** — Reordenar productos o promover una subcategoría (por ejemplo, mover "Holiday Specials" a la parte superior del menú) para un período promocional sin una implementación de código.

**Secuenciación específica de marca** — Diferentes mercados pueden querer diferentes pedidos para la misma categoría. El espacio Contentful de cada mercado se puede configurar independientemente.

**Introducción subcategoría** — Añada un nuevo grupo de productos (por ejemplo, "Plant-Based" o "Shareboxes") como subcategoría bajo una categoría existente sin soporte técnico.

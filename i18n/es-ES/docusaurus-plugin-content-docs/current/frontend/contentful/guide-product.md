---
title: "Guía: Contenido del producto"
sidebar_position: 4
---

# Guía: Contenido del producto

Contenido del producto es donde usted trae elementos de menú individuales a la vida — asignando imágenes, títulos y mostrar detalles a los productos que ya han sido creados en Byte Admin Portal.

:::info
Productos **Debe existir en Byte Admin Portal primero** antes de que puedan configurarse en Contentful. Los productos sin contenido son ** escondidos en el menú**.
:::

---

## Donde lo ves en el frente

** Tarjetas de producto de menu** — Cada artículo que aparece en una cuadrícula de categoría (nombre, imagen y precio) está alimentado por contenido de producto Contentful.

**Detalle del producto** Cuando un cliente toca o hace clic en un producto, la vista del detalle muestra la imagen del producto, el título y la descripción provenientes de Contentful.

**Variant selection** (para los mercados de pizza) — Pizza crust, tamaño y opciones de topping cada uno tiene sus propias entradas de contenido en Contentful, que potencian la selección de modificadores UI.

---

## Qué Configurar en Contentful

### Publicar un producto con contenido

1. Haga clic en **Añadir Entrada** (el botón azul en el lado derecho de la pantalla)
2. De la lista desplegable de tipos de contenido, seleccione **Producto**
3. Haga clic en **Seleccione de Yum** para elegir un producto ya creado
   - Los productos muestran una placa de estado: **PUBLISHED** (verde), **DRAFT** (amarillo), o **NEW** (purple)
   - Seleccionar un producto PUBLISHED le pedirá que confirme antes de sobrescribir el contenido existente
4. Populate the **Title** and **Display Order**
5. Haga clic en **+ Agregar medios** para asignar imágenes — use **Añadir medios existentes** para activos previamente subidos, o **Añadir nuevos medios** para subir imágenes frescas
6. Haga clic en el botón verde **Publicar** — o utilice la flecha desplegable para programar la publicación en un momento posterior

### Publishing Pizza Crust Content

1. Agregar entrada → select **Pizza Crust**
2. Haga clic en el campo **Option Value Code** para seleccionar la variante de corteza
3. Populate the title and assign images via **+ Add Media**
4. Publish

### Publishing Pizza Tamaño Contenido

1. Agregar entrada → select **Pizza Tamaño**
2. Haga clic en el campo **Option Value Code** para seleccionar el tamaño
3. Popular el título y asignar imágenes
4. Publish

### Publishing Pizza Topping Content

1. Agregar entrada → select **Topping**
2. Haga clic en el campo **Modifier Internal Name** para seleccionar el topping
3. Popular el título y asignar imágenes
4. Publish

:::note
Contentful no le permitirá crear una entrada duplicada para un producto, corteza, tamaño o topping que ya ha publicado contenido. Edita la entrada existente.
:::

---

## Casos de uso

**Nuevo lanzamiento del elemento de menú** Cuando un producto se crea en Byte Admin Portal, crea su entrada Contentful para traerlo en vivo en el menú con imágenes y un nombre de visualización.

** Actualización de la fotografía de productos** — Actualizar imágenes sobre productos existentes durante refrescos de marca o campañas de temporada sin tocar ningún dato en Byte Admin Portal.

**Ubicación de nombres de productos** — Ingrese títulos específicos de mercado por localidad (por ejemplo, "Zinger Burger" vs "Zinger Sandwich" dependiendo del mercado).

**La programación de un producto revela** — Utilice el desplegable publicado programado para colar un nuevo producto para ir a vivir en una fecha y hora específicas, alineado con un lanzamiento de campaña.

**Administrar variantes de pizza** — Para los mercados de pizza, configura cada corteza y opción de tamaño con su propia imagen para que los clientes vean una imagen precisa al personalizar su pedido.

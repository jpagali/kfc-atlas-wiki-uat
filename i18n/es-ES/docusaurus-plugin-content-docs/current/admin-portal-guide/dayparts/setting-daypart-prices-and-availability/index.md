---
title: Setting Daypart Precios y Disponibilidad
sidebar_label: Setting Daypart Precios y Disponibilidad
---

# Setting Daypart Precios y Disponibilidad

## Resumen

Los Dayparts están disponibles a nivel mundial en Byte Portal y pueden utilizarse para definir precios específicos para cada día y disponibilidad basada en el día.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el diagrama de precios de día y disponibilidad que une las piezas de día de la organización a productos, variantes y paquetes aquí.

## Precios

Dentro de las variantes y paquetes, un precio predeterminado, todo el día se puede fijar así precios para cada día. Si un artículo se ordena en un plazo fuera de las salidas configuradas, se cargará el precio predeterminado. Por ejemplo, digamos que tiene un artículo con la siguiente configuración:

# Item A #

- Precio predeterminado:`$10`
- Precios de salida:
  - Hora feliz:`$8`
  - Noche tardía:`$12`

Tema A será`$8`durante el **Hora feliz** día,`$12`durante el **Noche tardía** día, y`$10`en cualquier momento no cubierto por **Hora feliz** y **Noche tardía**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando una matriz de precio de ejemplo con precio predeterminado y precios específicos de parte del día para un solo artículo aquí.

## Disponibilidad

Dentro de los productos, variantes y paquetes, las piezas de día se pueden utilizar para configurar la disponibilidad. Por defecto, los elementos están disponibles todo el día. Si se seleccionan piezas de día específicas, el artículo solo estará disponible durante los días seleccionados. Por ejemplo, un elemento que sólo tiene el **Breakfast** Daypart seleccionado sólo estará disponible durante el **Breakfast** daypart. Este artículo no será ordenado fuera de los plazos especificados en el **Desayuno** día.

**Screenshot placeholder:** Ponga captura de pantalla que muestra una configuración de disponibilidad donde sólo el Daypart del desayuno se selecciona aquí.

## Ajuste de los precios del día en las variantes

**Step 1:** Empezando desde el panel, haga clic en **Productos** en la barra lateral.

**Step 2:** Seleccione un producto específico.

**Step 3:** Haga clic en el paso 3 del mago - **Variantes &amp; Precios**.

**Step 4:** En la variante deseada, haga clic en la celda dentro de la columna **Precio**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el asistente del producto en los precios de Variedades con una célula de precios variante seleccionada aquí.

**Step 5:** Si esta variante debe tener el mismo precio todo el día, haga clic en **Precio fijo** y proporcione un precio.

**Step 6:** Si esta variante debe tener diferentes precios durante días específicos, haga clic en **Daypart Precios**.

**Step 7:** Proporcione un precio predeterminado**.

**Step 8:** Seleccione una parte del día desde el desplegable y proporcione un precio. Al igual que todos los otros campos de precio, esto puede ser un valor estático o una variable de precio nombrada.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el cajón de precios de la variante con Daypart Precios seleccionados, un precio predeterminado, y uno o más precios específicos del día aquí.

Usted puede proporcionar un precio único para tantos o tan pocos días como desee. No necesita ser un precio explícito para cada día. Los artículos serán valorados al precio predeterminado a menos que se les ordene dentro de una de las piezas de día especificadas.

**Step 9:** Haga clic en **Guardar**.

Variantes que utilizan **Daypart Precios** tendrán un símbolo ** en la celda de precios**. Sólo el precio predeterminado se muestra en la celda. Para ver la lista completa de precios de salida, haga clic en la celda.

## Ajuste de los precios del día en los paquetes

**Step 1:** Empezando desde el panel, haga clic en **Bundles** en la barra lateral.

**Step 2:** Seleccione un paquete específico.

**Step 3:** Haga clic en el paso 2 del mago - **Modo de precios**.

**Step 4:** En el modo **Precio** desplegable, seleccione **Daypart Precios**.

**Screenshot placeholder:** Pon la captura de pantalla mostrando el paquete wizard Precio Modo paso con Daypart Precios seleccionado aquí.

**Step 5:** Proporcione un precio predeterminado**.

**Step 6:** Seleccione una parte del día desde el desplegable y proporcione un precio. Al igual que todos los otros campos de precio, esto puede ser un valor estático o una variable de precio nombrada.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el formulario de precio del día del paquete con precios predeterminados y entradas de precios específicas del día aquí.

Usted puede proporcionar un precio único para tantos o tan pocos días como desee. No necesita ser un precio explícito para cada día. Los artículos serán valorados al precio predeterminado a menos que se les ordene dentro de una de las piezas de día especificadas.

**Step 7:** Haga clic en **Guardar**.

## Configuración de disponibilidad de Daypart en productos

**Step 1:** Empezando desde el panel, haga clic en **Productos** en la barra lateral.

**Step 2:** Seleccione un producto específico.

**Step 3:** Haga clic en el paso 2 del mago - **Nombre &amp; Descripción**.

**Step 4:** Desplazarse hacia la sección **Item Availability**.

**Step 5:** Haga clic en **Añadir Daypart**.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el producto Nombre &gt; Descripción paso con la sección Disponibilidad del elemento y Agregue acción Daypart aquí.

**Step 6:** Seleccione las piezas de día que le gustaría que este producto esté disponible durante. Se pueden seleccionar varios días. Tenga en cuenta que si no se seleccionan partidas de día, el producto estará disponible durante todo el día del negocio.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el cajón de disponibilidad del producto con varios días seleccionados aquí.

**Step 7:** Haga clic en **Guardar** en el formulario del cajón.

**Step 8:** Haga clic en **Guardar** en la parte superior derecha del mago.

## Configuración de la disponibilidad de Daypart en variantes

**Step 1:** Empezando desde el panel, haga clic en **Productos** en la barra lateral.

**Step 2:** Seleccione un producto específico.

**Step 3:** Haga clic en el paso 3 del mago - **Variantes &amp; Precios**.

**Step 4:** En la variante deseada, haga clic en el enlace dentro de la columna ** Disponibilidad**. Usted puede necesitar desplazar la tabla a la derecha para llevar a la vista la columna **Disponible**. El enlace se etiquetará como **Añadir** o **Ver / Editar** dependiendo de si la disponibilidad ya ha sido configurada para esta variante.

**Screenshot placeholder:** Ponga captura de pantalla mostrando la fila de la variante con el enlace de la columna Disponibilidad etiquetado Añadir o Ver / Editar aquí.

**Step 5:** Desplazarse hacia la sección **Item Availability**.

**Step 6:** Seleccione las piezas de día que le gustaría que esta variante esté disponible durante. Se pueden seleccionar varios días. Tenga en cuenta que si no se seleccionan partidas de día, la variante estará disponible durante todo el día del negocio.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el editor de disponibilidad de la variante con las piezas de día seleccionadas aquí.

**Step 7:** Haga clic en **Guardar** en el formulario del cajón.

**Step 8:** Haga clic en **Guardar** en la parte superior derecha del mago.

## Configuración de disponibilidad de parte del día en paquetes

**Step 1:** Empezando desde el panel, haga clic en **Bundles** en la barra lateral.

**Step 2:** Seleccione un paquete específico.

**Step 3:** Haga clic en el paso 2 del mago - **Nombre &amp; Descripción**.

**Step 4:** Desplazarse hacia la sección **Item Availability**.

**Step 5:** Haga clic en **Añadir Daypart**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el paquete Nombre &gt; Descripción paso con la sección Disponibilidad del elemento y Agregue acción Daypart aquí.

**Step 6:** Seleccione las piezas de día que le gustaría este paquete para estar disponible durante. Se pueden seleccionar varios días. Tenga en cuenta que si no se seleccionan partidas de día, el paquete estará disponible durante todo el día del negocio.

**Screenshot placeholder:** Ponga captura de pantalla que muestra el cajón de disponibilidad del paquete con las piezas de día seleccionadas aquí.

**Step 7:** Haga clic en **Guardar** en el formulario del cajón.

**Step 8:** Haga clic en **Guardar** en la parte superior derecha del mago.

:::
No necesita ser un precio explícito para cada día. El precio predeterminado se utilizará cuando un pedido caiga fuera de los precios configurados de la fecha.
:::

:::note
Si no se seleccionan piezas de día para su disponibilidad, el producto, la variante o el paquete permanecerán disponibles durante todo el día del negocio.
:::

## Guías relacionadas

- [Definir Dayparts](/docs/admin-portal-guide/dayparts/define-dayparts/)— Crear el día antes de asignar el comportamiento del menú a él
- [Crear un parche](/docs/admin-portal-guide/menus/create-a-patch/)- Aplicar anulaciones selectivas a escala

---

*Part of the[Guía del Portal de Admin](/docs/admin-portal-guide)· Sección: Partos de día*

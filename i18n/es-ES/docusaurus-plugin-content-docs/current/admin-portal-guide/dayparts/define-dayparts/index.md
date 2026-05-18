---
title: Definir Dayparts
sidebar_label: Definir Dayparts
---

# Definir Dayparts

## Resumen

Los Dayparts están configurados en el nivel superior de una organización, al mismo nivel que los menús, productos y paquetes. Una vez definidos, estas piezas de día están inmediatamente disponibles para su uso en todas las tiendas dentro de una organización.

Cada parte del día consiste en un nombre, un código de salida único, y una lista de ocasiones soportadas, cada una con su propia lista de plazos. Para comodidad al crear inicialmente un día, un único conjunto de plazos se puede aplicar a todas las ocasiones soportadas. Una vez que se ha creado un día, los plazos de ocasión pueden personalizarse individualmente.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el diagrama de jerarquía de las piezas de día que define con la organización, las piezas de día, las ocasiones y los plazos aquí.

## Definir las piezas de día en Byte Portal

**Step 1:** Navegue a la sección **Menus** usando el menú de navegación de la mano izquierda.

**Step 2:** Haga clic en la pestaña **Dayparts** para ver todos los días existentes.

**Screenshot placeholder:** Ponga la captura de pantalla mostrando la página Menús con la pestaña Dayparts seleccionada y el botón Crear Nuevo Daypart visible aquí.

**Step 3:** Haga clic en **Crear nuevo Daypart**.

**Step 4:** Proporcionar un **nombre** y un código de **día* único.

| Campo | Qué entrar | Notas |
|-------|--------------|-------|
| *Nombre* | Una etiqueta legible para el día que es visible tanto para los gestores de datos como para los usuarios finales | Por ejemplo,`Breakfast`. |
| * Código de salida* | Un identificador único y proporcionado por marca destinado a sistemas externos para consumir | Este código se proporcionará en el menú publicado. |

**Screenshot placeholder:** Ponga captura de pantalla mostrando el cajón Crear Nuevo Daypart con campos Daypart Name y Daypart Code aquí.

**Step 5:** Haga clic en **Agregar el marco de tiempo**.

**Step 6:** Seleccione las **occasions** que este día debe apoyar. Si el día debe apoyar todas las ocasiones, haga clic en **Seleccionar todo** dentro del desplegable.

**Step 7:** Añada los siguientes detalles: **días de la semana** (requerido), **tiempo inicial** y **tiempo final** (requirido), ** fecha inicial** y ** fecha final** (opcional).

**Screenshot placeholder:** Ponga captura de pantalla mostrando el cajón Add Time Frame con ocasiones, días de la semana, tiempo de inicio, hora de inicio, fecha de inicio y campos de cita final aquí.

**Step 8:** Haga clic en **Crear el marco de tiempo**.

**Step 9:** Todas las ocasiones seleccionadas tendrán el mismo plazo por defecto. Los plazos se pueden editar para ocasiones individuales haciendo clic en el nombre de la ocasión.

**Screenshot placeholder:** Ponga captura de pantalla mostrando los plazos creados agrupados por ocasión dentro del editor de la parte del día aquí.

**Step 10:** Haga clic en **Guardar**.

El recién creado Daypart aparecerá ahora en la tabla en la pestaña **Dayparts**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando la mesa Dayparts con la nueva fila de Daypart visible aquí.

## Edición de salidas

**Step 1:** Empezando desde el panel, haga clic en **Menus** en la barra lateral.

**Step 2:** Haga clic en la pestaña **Dayparts**.

**Step 3:** En la parte del día que debe ser editado, haga clic en el icono **kebab** en la celda más derecha de la fila de la tabla y haga clic en **Editar**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el menú de acción de la fila de mesa Dayparts con la opción Editar seleccionada aquí.

## Eliminar las partidas del día

**Step 1:** Empezando desde el panel, haga clic en **Menus** en la barra lateral.

**Step 2:** Haga clic en la pestaña **Dayparts**.

**Step 3:** En la parte del día que debe ser editado, haga clic en el icono **kebab** en la celda más derecha de la fila de la tabla y haga clic en **Delete**.

**Screenshot placeholder:** Ponga captura de pantalla mostrando el menú de acción de la fila de mesa Dayparts con la opción Eliminar seleccionada aquí.

Se eliminarán todas las configuraciones asociadas a este día, incluidos los precios y los ajustes de disponibilidad.

:::
Cuando creas primero un día, aplica un plazo compartido a todas las ocasiones soportadas si se comportan de la misma manera. Siempre puedes refinar plazos específicos para cada ocasión más tarde.
:::

:::note
Los Dayparts se crean a nivel **org**, pero sus horas y ocasiones soportadas se pueden personalizar a nivel **store**.
:::

## Guías relacionadas

- [Vista general de los días](/docs/admin-portal-guide/dayparts/)— Aprenda cómo se utilizan las piezas de día en Byte
- [Días de personalización en el nivel de la tienda](/docs/admin-portal-guide/dayparts/customizing-dayparts-at-the-store-level/)— Partes de nivel de org para una tienda
- [Setting Daypart Precios y Disponibilidad](/docs/admin-portal-guide/dayparts/setting-daypart-prices-and-availability/)- Aplicar normas de precios y disponibilidad a las entidades

---

*Part of the[Guía del Portal de Admin](/docs/admin-portal-guide)· Sección: Partos de día*

---
title: "Guía: Cruz-Sell en Carrito"
sidebar_position: 7
---

# Guía: Cruz-Sell en Carrito

Dynamic Cross-Sell permite a los autores del menú configurar los productos que se recomiendan a los clientes en la cesta, basándose en lo que ya está en su carrito. Es una herramienta de upsell dirigida — la sugerencia correcta en el momento adecuado.

---

## Donde lo ves en el frente

**Carta / Sección de cestas** — Debajo de la lista de artículos que un cliente ha añadido, un "También le puede gustar" o similarmente etiquetado superficies de filas productos recomendados. Los productos que se muestran en esta fila son dinámicos — ellos cambian en función de los elementos específicos en el carrito.

Por ejemplo: si un cliente añade un Burger Zinger, la sección de ventas cruzadas podría mostrar a Fries, una bebida o un postre. Un artículo diferente en el carrito podría desencadenar un conjunto completamente diferente de sugerencias.

Estas superficies en tanto **Web** como **Mobile App**.

---

## Qué Configurar en Contentful

1. Tipo de contenido: Tipo de contenido dinámico**
2. Haga clic en **Añadir entrada** → select **Venta de Cruz Dinámica**

La entrada tiene tres campos:

**Nombre / Título** - Una etiqueta interna para la entrada (no se muestra a los clientes). Use algo descriptivo, por ejemplo "Cross-sell for Zinger Burger".

**Menu Item** El elemento disparador. Cuando este producto está en el carrito del cliente, se mostrarán las sugerencias de grifo a continuación. Haga clic en **Seleccione desde Yum** para elegir el elemento del menú.

**Cross Sell Products** La lista de productos recomendados cuando el elemento de activación está en el carrito. Haga clic en **Añadir productos**, seleccione varios elementos si es necesario, y haga clic en **Guardar selecciones**.

3. Haga clic en **Publicar** para activar la regla de la venta cruzada

---

## Casos de uso

*Beber upsell* Pruebe una recomendación de bebida cada vez que una hamburguesa se añade al carrito, alimentando a los clientes para completar una comida.

**Sugerencia de producto de la ayuda** — Mostrar papas fritas o una ensalada lateral como una venta cruzada cuando una proteína independiente (por ejemplo, las tiras de pollo) está en la cesta.

**Dessert close** — Recomendar un helado o un pastel cuando un producto de comida principal está presente, aumentando el valor promedio del pedido en un punto de decisión natural.

**Acoplamientos específicos de la cámara** — Durante una promoción de tiempo limitado, configura un cross-sell para destacar el elemento promocional cuando un producto calificado está en el carrito.

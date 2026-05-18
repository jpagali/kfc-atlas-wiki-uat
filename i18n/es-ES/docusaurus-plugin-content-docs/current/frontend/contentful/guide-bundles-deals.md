---
title: "Guía: Bundles &amp; Deals"
sidebar_position: 5
---

# Guía: Bundles &amp; Deals

Los envases son comidas combo, un conjunto fijo de productos vendidos juntos. Las ofertas son agrupaciones promocionales que combinan productos o paquetes a un precio especial, a menudo con un enlace objetivo para una navegación más profunda. Ambos requieren la configuración de contenido en Contentful después de ser establecido en Byte Admin Portal.

:::info
Paquetes y ofertas **Debe crearse en Byte Admin Portal primero** antes de que puedan configurarse en Contentful. Los artículos sin contenido son ** escondidos en el menú**.
:::

---

## Donde lo ves en el frente

**Bundle cards** — Aparecer en el menú junto a productos individuales, mostrando una imagen combo, título y precio. Los clientes seleccionan un paquete y personalizan los artículos incluidos.

**Cartas de la obra** — Superfíciese en el menú o en una página dedicada de ofertas. Un acuerdo normalmente agrupa uno o más Productos o Bundles bajo el encuadre promocional, y puede vincularse profundamente a una página o sección de menú específico a través de un URI Target.

Ambos tipos de contenido se pueden incluir en el **Homepage** como elementos promocionados cuando se configuran.

---

## Qué Configurar en Contentful

### Publishing a Bundle with Content

1. Click **Añadir entrada** → select **Bundle**
2. Haga clic en **Seleccione de Yum** bajo el campo del Código de Bundle para elegir un paquete ya creado
   - Contentful no permitirá una segunda entrada para un paquete que ya tiene contenido — editar la entrada existente en su lugar
3. Click **+ Añadir Media** para añadir imágenes del paquete
4. Haga clic en el botón verde **Publicar** — o utilice la flecha desplegable para programar una fecha futura

### Publishing a Deal with Content

1. Haga clic en **Añadir entrada** →
2. Populate the required fields:
   - **Título en inglés** y **Título en español** (o segundo lugar pertinente)
   - **Item(s)** — añadir productos o envases existentes a través de **Añadir contenido existente**
   - **Target URI** - el camino a el que se conectará la tarjeta de acuerdo cuando se tapped
3. Click **+ Añadir Media** para asignar imágenes de acuerdo
4. Puede hacer clic a través de cualquier producto vinculado o Bundle desde dentro de la entrada Deal para hacer ediciones
5. Haga clic en **Publicar** — o programar a través de la caída

---

## Casos de uso

*Nueva comida de combo* Cuando se crea un paquete en Byte Admin Portal, crea su entrada Contentful con imágenes y un título de pantalla para que aparezca en el menú con el tratamiento visual correcto.

**Página de acuerdo profesional** — Crear una entrada de Deal que agrupa varios productos bajo un nombre de campaña (por ejemplo, "Family Feast") y enlaces a una página de aterrizaje de ofertas dedicadas.

** Programación de una oferta de tiempo limitado** Utilice la publicación programada para establecer un paquete o un acuerdo para ir en vivo al comienzo de una ventana promocional, y otra publicación para eliminarlo al final.

**Ofertas de mercado de basura** — Diferentes mercados pueden configurar entradas separadas de Deal con títulos e imágenes localizadas para la misma oferta de productos subyacentes.

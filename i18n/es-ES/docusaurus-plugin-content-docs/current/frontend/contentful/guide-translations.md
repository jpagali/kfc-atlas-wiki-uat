---
title: "Guía: Traducción de contenidos"
sidebar_position: 10
---

# Guía: Traducción de contenidos

No todas las piezas de texto en el sitio web de KFC están atadas a un tipo de contenido específico como un producto o un banner de página web. Algunas cadenas UI — etiquetas widget, copia de botones, texto ayudante, mensajes de error— existen independientemente. El sistema de traducción en Contentful le permite gestionar estas cadenas y localizarlas por idioma, utilizando **Modo de traducción** para identificar exactamente qué cadena necesita editar.

---

## Donde lo ves en el frente

Las traducciones afectan el texto que aparece en todo el sitio, donde se muestra una etiqueta, dirección o cadena UI. Por ejemplo:

- The location widget prompt: *"Introduzca su dirección para ver las ofertas del menú local"*
- Etiquetas de paso de salida: *"Tu pedido", "Detalles de envío"*
- Texto del botón: *"Añadir al carrito", "Continúe"*
- Mensajes de error y copia de estado vacía

Si una cadena vive dentro de un Tipo de Contenido conocido (como un título de producto o encabezado de página), mostrará un indicador de flecha (→) en Modo de Traductor que le indica de nuevo a esa entrada de tipo de contenido. Si no hay flecha, la cadena se gestiona directamente a través del tipo de contenido de traducción.

---

## Qué Configurar en Contentful

### Modo de Traductor

Modo de Traductor es una herramienta de vista previa que superpone cada pieza de contenido en el sitio web de KFC con su ID de traducción, permitiéndole identificar qué entrada Contentful controla ese texto.

1. Abrir una ventana del navegador **incognito**
2. Navegue a la URL de su mercado KFC con el siguiente parámetro anexado:
   ```
   https://{your_kfc_domain}/?previewContent=true
   ```
3. Toggle **Modo de Traductor ON** utilizando el toggle que aparece en la página
4. Sobre cualquier pieza de texto, se mostrará su ** ID de traducción** (por ejemplo.`locationWidget.Heading`)

Para desactivar el Modo Traductor:
```
https://{your_kfc_domain}/?previewContent=false
```

### Actualización de una traducción

Una vez que tenga el ID de traducción:

1. En Contentful, navega hasta **Content** → **Traducción** Tipo de contenido
2. Haga clic en **Añadir entrada**
3. Pruebe el ** ID de traducción** (por ejemplo.`locationWidget.Heading`) en el campo de identificación
4. Rellene la copia de traducción para **todos los idiomas / locales** su soporte de mercado
5. Haga clic en **Publicar** — el texto actualizado aparecerá en el sitio en vivo

:::
Si un pedazo de texto muestra un indicador de flecha (→) en modo Traductor, significa que vive en un tipo de contenido estructurado (por ejemplo, Homepage, Categoría). Navegue a esa entrada de tipo de contenido para editar el texto.
:::

---

## Casos de uso

** Localización de una etiqueta de widget** Si el aviso de búsqueda de ubicación necesita decir algo diferente en francés vs Inglés, utilice el modo Traductor para encontrar el ID y establecer traducciones para ambos locales.

**Fixing a UI string** Si un botón o una etiqueta tiene una copia incorrecta, utilice el Modo Traductor para localizarlo, luego actualice la entrada de Traducción en Contentful — no se requiere despliegue.

** Establecer un nuevo idioma** Al a bordo de un nuevo local para un mercado, utilice el tipo de contenido de traducción para asegurar que todas las cadenas de interfaz de usuario genéricas estén pobladas en el nuevo idioma.

** Frasing específico de marca** — Incluso dentro del mismo idioma, diferentes mercados pueden necesitar una copia diferente (por ejemplo, "Basket" vs "Cart", "Delivery" vs "Takeaway"). Las traducciones permiten que cada mercado establezca sus propios valores por local.

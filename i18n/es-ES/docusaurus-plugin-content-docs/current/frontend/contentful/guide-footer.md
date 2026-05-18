---
title: "Guía: Contenido del pie"
sidebar_position: 8
---

# Guía: Contenido del pie

El **Global Footer** aparece en la parte inferior de cada página del sitio web de KFC. Contentful permite a los mercados configurar las secciones de navegación, enlaces y activos conectados (incluyendo PDFs) sin necesidad de soporte técnico.

---

## Donde lo ves en el frente

El pie se divide en secciones ** de navegación**, cada una con un grupo de enlaces. Las secciones comunes en los mercados incluyen:

| Sección | Contenido típico |
|---------|-----------------|
| *Menu* | Enlaces a páginas de la categoría de menús (por ejemplo, Pollo, Lados, Bebidas) |
| **Policías / Políticas** | Política de privacidad, Términos de uso |
| **Delivery Policies** | Condiciones de envío, FAQs |
| **FAQ** | Preguntas frecuentes |
| ** Contenido nutricional** | Páginas de información nutricional o PDF descargables |
| Ayuda y servicio / Ayuda y servicio** | Enlaces de contacto de atención al cliente |

Cada enlace en una sección puede apuntar a una ruta de página interna (dentro del sitio KFC) o una URL externa.

---

## Tipos de contenido

Antes de la edición, ayuda a entender los tres tipos de contenido Contentful involucrados:

| Tipo de contenido | Lo que es | Donde vive |
|---|---|---|
| **Papeles globales** | El contenedor de alto nivel — contiene todas las secciones | Contentful → Contenido → |
| ** Sección de Navegación de Alimentos** | Un grupo llamado de enlaces (por ejemplo, "políticas") | Creado dentro del Calzado Global |
| ** Enlace de Footer* | Un solo enlace clicable con texto y destino | Creado dentro de una Sección de Navegación de Pies |

---

## Agregar una nueva sección al pie

**Step 1:** En Contentful, navega hasta **Content** y busca **Global Footer**. Abre la entrada.

**Step 2:** Dentro de la entrada Global Footer, haga clic en **Añadir Contenido** para añadir una nueva sección.

**Step 3:** Seleccione **Sección de navegación de alimentos** de las opciones de contenido.

**Step 4:** Rellene los detalles de la sección:

| Campo | Qué entrar | Notas |
|-------|--------------|-------|
| ** Nombre de la sesión (en inglés)** | La etiqueta para este grupo de enlaces | por ejemplo, "Policías", "FAQ", "Ayuda" |
| ** Nombre de sesión (español)** | Etiquetas localizadas, si su mercado utiliza español | Por ejemplo, "Políticas". Deja en blanco si no es aplicable. |

**Step 5:** Una vez que se guarda la sección, puede comenzar a añadir Enlaces Footer dentro de ella (ver[Crear un enlace de pie](#creating-a-footer-link)infra).

:::note
El orden de sección en la calzada coincide con el orden de secciones en la entrada Global Footer. Arrastre secciones arriba o abajo para reordenarlos.
:::

---

## Crear un enlace de pie {#creating-a-footer-link}

**Step 1:** En el interior de un **Sección de Navegación de Alimentos**, haga clic en **Añadir Contenido** → ** Nuevo Contenido** → ** Enlace de Footer**.

**Step 2:** Rellene los campos Footer Link:

| Campo | Qué entrar | Notas |
|-------|--------------|-------|
| Texto de Enlace** | La etiqueta visible mostrada en el pie | por ejemplo, "Política de privacidad", "Información alérgena" |
| **Link** | Donde se hace clic - ver los campos de entrada **Link** | Se requiere |
| **Imagen* | Un icono opcional o logo para acompañar el enlace | Consulte a su desarrollador antes de usar — no todos los diseños de pie soportan imágenes. |

**Step 3:** Dentro de la entrada **Link**, rellene:

| Campo | Qué entrar | Notas |
|-------|--------------|-------|
| **Identificador** | Un nombre de referencia interno (no se muestra a los clientes) | por ejemplo,`footer-privacy-link`Ayuda a los editores a encontrar la entrada más tarde. |
| Texto de Enlace** | La etiqueta de texto para este enlace | Debe coincidir con el campo Footer Link **Link Text** |
| Sendero Interior** | Send to a page within the KFC website | por ejemplo,`/privacy`, `/faq`. Utilice esto para páginas alojadas en el sitio KFC. |
| ** | URL externa completa | por ejemplo,`https://partner.com/delivery-terms`. Utilice esto para páginas de terceros. |

:::caution
Use ya sea ** Camino interno** o **URL** — no ambos. Si ambos están llenos, consulte a su desarrollador para confirmar que tiene prioridad en la implementación de su mercado.
:::

**Step 4:** Publish in this order to ensure changes go live properly:

1. Publicar la entrada **Link**
2. Publish the **Footer Link** entry
3. Publish the **Footer Navigation Section**
4. **Republicar el Global Footer** — este paso final es necesario para que los cambios aparezcan en el sitio en vivo.

:::caution
Olvidar volver a publicar el **Global Footer** es que los cambios de pie de página más comunes no aparecen en el sitio en vivo. Siempre completar los cuatro pasos de publicación.
:::

---

## Añadiendo un PDF vinculado al Footer

Use esto cuando necesite conectarse a un documento descargable (por ejemplo, información nutricional, tablas de alérgenos o términos PDF) desde el pie.

**Step 1:** En Contentful, vaya a **Media** y haga clic en **Agregar nuevo comienzo** → **Single Asset**.

**Step 2:** Dar al activo un título descriptivo (por ejemplo, "Nutritional Information PDF – AU 2024") y subir el archivo PDF.

**Step 3:** Una vez subido, haga clic en el icono **download** junto al activo para copiar la URL directa al archivo.

**Step 4:** Utilice esta URL como el campo **URL** en una entrada Footer Link (ver[Crear un enlace de pie](#creating-a-footer-link)supra).

:::
Nombra tus activos PDF claramente e incluye el mercado y la fecha en el título; esto hace que sea mucho más fácil encontrarlos y reemplazarlos cuando estén actualizados.
:::

---

## Casos de uso

**Nueva página de política** — Una nueva página de Política de Privacidad o Términos de Servicio ha sido publicada en el sitio KFC. Añádalo como enlace de pie en la sección Políticas utilizando su camino interno (por ejemplo,`/privacy-policy`), así que los clientes siempre pueden encontrar la última versión.

**Nutritional PDF** — Subir una información nutricional actualizada PDF a Contentful Media, copiar su URL directa y enlazarla desde la sección Contenido Nutricional. No se necesita trabajo de ingeniería.

** Estructura de pie regional** — Los mercados pueden configurar diferentes nombres de sección y conjuntos de enlaces para que coincidan con los requisitos legales locales, las preferencias lingüísticas y las necesidades de navegación. Cada mercado gestiona su propia entrada Global Footer independientemente.

**Página de aterrizaje de campaña externa** — Agregue temporalmente un enlace de pie que apunta a una página de micrositio de campaña o de aterrizaje externo durante un período promocional. Eliminar o actualizar el enlace cuando termine la campaña.

---

## Guías relacionadas

- [Guía: SEO](/docs/frontend/contentful/guide-seo)— Gestionar títulos de página y meta descripciones
- [Sinopsis](/docs/frontend/contentful/)— Lo Contentful funciona a través de la plataforma
- [Antecedentes](/docs/frontend/overview)— El contexto de la plataforma frontal más amplio

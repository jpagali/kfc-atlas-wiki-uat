---
title: Guía de configuración
sidebar_label: Guía de configuración
---

# Guía de configuración

Una referencia práctica de campo a campo para las promociones de edificios en el Portal Byte Commerce Byte. Esta guía te lleva a través de cada paso del mago, explica cada opción, y termina con una hoja de receta de los tipos de promoción más comunes que puedes construir con la plataforma de hoy.

:::note
Las promociones siempre se asignan a un **Store Group**, nunca a una sola tienda. Asegúrese de que sus tiendas de destino ya están agrupadas antes de crear una promoción.
:::

:::note
Capturas de pantalla para esta guía están siendo refrescados. La guía de configuración escrita sigue siendo la fuente de verdad para las definiciones de flujo y campo.
:::

---

## Lo que puedes construir

El motor de promoción Byte Commerce admite los siguientes tipos de promoción fuera de la caja:

| Tipo de promoción | Cómo funciona |
|---|---|
| ** Descuento porcentaje** | Quítate el X% de un artículo, un grupo de artículos, o todo el orden |
| ** Cantidad fijada** | Reducir el precio del carrito o artículo por una cantidad de dólar/moneda fija |
| **Precio fijo** | Establezca un precio específico para un artículo calificado (por ejemplo, $5 hamburguesas) |
| *Buy One Get One (BOGO)* | Consultar la presencia del artículo + aplicar un descuento del 100% o precio fijo a un segundo artículo |
| **Minimum Spend Discount** | Probar un descuento sólo cuando el carrito alcanza un umbral subtotal |
| **Trato exclusivo del canal** | Restrict a promotion to specific ordering platforms (e.g., app-only, delivery-only) |
| *Promoción por tiempo* | Ejecute un acuerdo sólo durante fechas específicas, días o horas |
| **Ocasion-Specific Deal** | Limite una promoción a un tipo de pedido específico (por ejemplo, Drive Thru sólo, Entrega solamente) |
| **Entrega gratuita / Exención de tarifas** | Descuento o cero gastos de entrega, servicio o regulación |
| ** Descuento de miembro de lealtad** | Restrict a promotion to registered customers only |
| **Promoción del Código del Consejo** | Requiere un código de redención para el cliente para desbloquear el acuerdo |
| **Promoción de cancelación del administrador** | Requiere un administrador PIN o firma en POS para aplicar el descuento |
| **Códigos serie / únicos** | Generar códigos individuales de redención de un solo uso por cliente |

## Páginas de receta

Utilice estas páginas de recetas dedicadas cuando desea un punto de partida más rápido para los patrones de promoción KFC más comunes:

- [Receta 1 - Comprar 1 Obtener 1 Gratis (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/)
- [Descuento mínimo para gastar](/docs/playbooks/promotion-recipes/minimum-spend-discount/)
- [Receta 3 - App-Exclusive Deal](/docs/playbooks/promotion-recipes/app-exclusive-deal/)
- [Receta 4 - Almuerzo Especial](/docs/playbooks/promotion-recipes/lunch-special-time-limited/)
- [Receta 5 - Entrega gratuita en pedidos grandes](/docs/playbooks/promotion-recipes/free-delivery-on-large-orders/)
- [Receta 6 - Exclusivo para Clientes Registrados](/docs/playbooks/promotion-recipes/registered-customer-exclusive/)
- [Receta 7 - Descuento en Código de Cupón](/docs/playbooks/promotion-recipes/coupon-code-discount/)
- [Receta 8 - Drive-Thru Sólo Trato](/docs/playbooks/promotion-recipes/drive-thru-only-deal/)
- [Receta 9 - Trato diario (Una vez por cliente por día)](/docs/playbooks/promotion-recipes/daily-deal-once-per-customer-per-day/)
- [Receta 10 - Promoción de la multicondición apilada](/docs/playbooks/promotion-recipes/stacked-multi-condition-promotion/)

---

## El Asistente de 4 pasos

Cada promoción se crea a través de un asistente de 4 pasos: **Información básica → Requisitos → Efectos → Revisión**. Usted puede navegar entre los pasos usando el panel de paso izquierdo, y saltar de nuevo a cualquier paso completado de la pantalla de revisión.

---

## Paso 1 - Información básica

Este paso define la identidad de la promoción, cómo se activa, y cuántas veces se puede utilizar.

### Campos obligatorios

| Campo | Qué entrar |
|---|---|
| **Nombre de promoción** | Nombre interno para los operadores - no se muestra a los clientes. Sea descriptivo: por ejemplo,`BOGO Zinger – May 2024` |
| ** Combinable con otras promociones** | `No`— la promoción no puede apilar con otros en el mismo carrito.`Yes`- puede. Defaults to`No`. |

### Campos estándar

| Campo | Qué entrar |
|---|---|
| *Nombre del juego* | El nombre del cliente se muestra en los canales de pedidos. Mantenlo corto y convincente: por ejemplo,`Buy 1 Get 1 Free Zinger` |
| **Descripción** | Explica la promoción a los clientes en la interfaz de pedido |
| **Max Promo Usos Por Carrito** | Cuantas veces esta promoción puede aplicarse dentro de un único pedido. Defaults to`1`. Establece más alto para promociones que pueden aplicarse a múltiples artículos en el mismo carrito |
| **Max Total Promotion Amount** | Caps el valor total de descuento que se puede aplicar de esta promoción en un solo carrito. Deja en blanco sin gorra |

### Código Automático contra la Redención

| Ajuste | Cuándo utilizar |
|---|---|
| **Automática: No** (por defecto) | Un cliente debe introducir un código de redención para activar la promoción |
| **Automática: Sí** | La promoción se dispara automáticamente cuando se cumplen los requisitos — no se necesita código |

:::caution
Switching **Automatic** desde`No`a`Yes`**Permanentemente eliminar** cualquier código de redención que ya haya añadido. Haz esto antes de añadir códigos, no después.
:::

Haga clic en **ADD REDEMPTION CODE** para adjuntar uno o más códigos cuando se establece Automático`No`.

### Opciones adicionales

Haga clic aquí para mostrar estos campos:

| Campo | Qué entrar |
|---|---|
| Texto legal** | Cualquier renuncia legal mostrada junto con la promoción (por ejemplo, términos y condiciones) |
| ** Código de presentación** | Un código interno utilizado para el seguimiento y la analítica en sistemas de presentación de informes externos |
| **Catalog Tags** | Etiquetas utilizados para clasificar esta promoción en integraciones de catálogos |
| # Display POS Button # | Toggle`Yes`para hacer que esta promoción aparezca como un botón de acceso directo en el Yum! Interfaz POS |
| **Publicado* | Toggle`Yes`para permitir que esta promoción surja en canales web y móviles |

---

## Paso 2 - Requisitos

Requisitos definen las **condiciones** un cliente debe reunirse antes de que la promoción se active. Usted puede añadir múltiples requisitos a una sola promoción - todos deben estar satisfechos para la promoción al fuego. Haga clic en **ADD REQUIREMENT** para apilar condiciones adicionales.

---

### Canal

Restricts the promotion to one or more specific ordering platforms. Seleccione todos los canales donde esta promoción debe estar activa.

| Campo | Opciones |
|---|---|
| **Seleccionar canales** | Web, Móvil, iOS, Android, POS, Kiosk, DoorDash, Uber Eats, Grubhub, Deliveroo, Just Eat, Call Center |

**When to use:** Ofertas exclusivas de aplicaciones, promociones de agregadores de entrega, o POS/kiosk-only ofrece.

---

### Exclusión

Impide que los artículos específicos sean elegibles para la promoción. Los artículos enumerados aquí están explícitamente excluidos de los objetivos de promoción.

| Campo | Opciones |
|---|---|
| **Tipo de item** | Producto, Variante, Bundle, Promo Tag |
| **Código de selección** | Buscar y seleccionar el artículo específico para excluir |

**When to use:** Un descuento en todo el sitio que no debe aplicarse a artículos premium o ya descubridos.

---

### Presencia del elemento

El carrito debe contener al menos una cantidad mínima de uno o más artículos especificados. Utilice esto para exigir que un cliente realmente tiene el producto calificador en su carrito.

| Campo | Qué entrar |
|---|---|
| **Minimum Quantity** | La cantidad mínima combinada de los artículos de clasificación que deben estar en el carrito |
| ** Valor igual o menor** | Una comparación para la verificación de precios: artículos de igual o menor valor |
| **Calificación de artículos — Tipo de artículo** | etiqueta de producto, variante, acolchado o promocional |
| **Calificación de artículos — Seleccionar código** * | Buscar y seleccionar el elemento de calificación específico |
| **Opciones de valor | Filtro adicional por valores de opción (por ejemplo, sólo un tamaño o sabor específico) |

Haga clic en **ADD ITEM TYPE** para añadir varios elementos de calificación: el cliente necesita al menos uno de ellos en su carrito.

**When to use:** Configuraciones de BOGO, requisitos de acuerdo de comida, o "comprar el producto X para obtener descuento en Y".

---

### Artículo Cantidad

El carrito debe contener un número total mínimo de artículos en todo el orden — ningún producto específico requerido.

| Campo | Qué entrar |
|---|---|
| **Minimum Total Items** | El número mínimo de artículos individuales que el carrito debe contener |

**When to use:** "Orden 3 o más artículos y obtener un descuento" tipo promociones.

---

### Manager Approval

Requiere a un gerente que autorice la promoción en el punto de venta antes de que se aplique. Sólo uso POS.

| Campo | Opciones |
|---|---|
| Ocasion** | `PIN`— el gerente introduce su PIN en el dispositivo POS.`SIGNATURE`— gestor físicamente firmas para aprobar |

**When to use:** Descuentos discrecionales, resoluciones de denuncia o cualquier promoción que no debe ser auto-servida por el cliente.

---

### Número máximo de veces se puede utilizar una promoción

Establece una tapa dura global en las redencións totales a través de todos los clientes y todo el tiempo. Una vez alcanzado el límite, la promoción deja de funcionar para todos.

| Campo | Qué entrar |
|---|---|
| **Max Number of Times a Promotion Can be used** | Introduzca un número entero, por ejemplo,`1000`para una promoción de primer nivel |

**When to use:** Ventas Flash, promociones de gestión limitada, o cualquier oferta con un inventario fijo de descuentos.

---

### Max Total Uses Por Cliente

Limita cuántas veces una sola cuenta de cliente puede redimir esta promoción durante toda su vida (sin restablecimiento diario).

| Campo | Qué entrar |
|---|---|
| **Max Total Uses Por Cliente** * | Introduzca un número entero, por ejemplo,`1`para una promoción de uso único por cliente |

**When to use:** Ofertas de bienvenida, promociones de cumpleaños de una sola vez, o ofertas de "primer orden solamente".

---

### Max Total Uses Por Cliente Por Día

Igual que antes, pero el contador se reinicia todos los días a medianoche.

| Campo | Qué entrar |
|---|---|
| **Max Total Uses Por Cliente Por Día** * | Introduzca un número entero, por ejemplo,`1`para una oferta de una vez por día |

**When to use:** Ofertas diarias, recompensas de lealtad recurrentes, o "un artículo gratis por día" promociones.

---

### Max Total Uses Por Redemption Code

Capsa cuántas veces se puede utilizar un código de redención específico, independientemente de qué cliente lo use.

| Campo | Qué entrar |
|---|---|
| **Max Total Uses Por Redemption Code** * | Introduzca un número entero, por ejemplo,`1`para un código de uso único, o`50`para un código compartido con usos limitados |

**When to use:** Códigos de cupones, códigos de promo de influencer con una tapa de uso, o códigos serializados emitidos a un número específico de clientes.

---

### Ocasión

Restricts the promotion to a specific order realization type. Diferente de Canal — esto es sobre *cómo* el cliente está recogiendo su pedido, no donde lo colocaron.

| Campo | Opciones |
|---|---|
| Ocasion** | Carryout, Catering, Entrega, Dine In, Drive Thru |

**When to use:** Ofertas sólo para conducir, promociones de entrega o especiales Dine-In.

---

### Subtotal

El carrito debe alcanzar un valor total mínimo antes de que la promoción gane.

| Campo | Qué entrar |
|---|---|
| **Minimum Subtotal** | El valor del carrito del umbral, por ejemplo,`$20.00`Defaults to`$0.00` |
| **Modo de cálculo** | **Actual Subtotal** — comprueba el valor del carrito *antes* se aplican otros descuentos (por defecto). **Descuento Subtotal** — comprueba el valor *después* factorización en todas las demás promociones activas |
| ** Temas excluidos** | Toggle on to specify items that should *not* count towards the subtotal threshold. Conjunto **Tipo de tema**, **Código de selección**, y **Cuantidad a ser excluida** para cada uno |

**When to use:** "Spend $30 y obtener $5 de descuento" o "entrega gratuita por pedidos superiores a $25."

---

### Time Frame

Restricts the promotion to specific date ranges, days of the week, and hours of the day. Se pueden agregar múltiples marcos de tiempo para cubrir diferentes ventanas (por ejemplo, horas de almuerzo Mon-Fri y todo el día sábado).

| Campo | Qué entrar |
|---|---|
| **Valida contra el tiempo actual** | Compruebe esto para validar cuando el pedido es *placed* |
| **Validar contra el tiempo de cumplimiento solicitado** | Compruebe esto para validar cuando el pedido está * programado para ser cumplido*. Al menos uno debe ser seleccionado |
| Fecha de inicio** | La primera fecha de la promoción es activa. Deja en blanco sin restricción de fecha de inicio |
| ** Fecha alta** | La última fecha de la promoción es activa. Deja en blanco sin restricción de fecha final |
| *Day Range* | Select individual days (Su Mo Tu We Th Fr Sa) or check **All Week** |
| ** Hora de inicio intervalor* | El tiempo que la promoción se activa cada día — formato`HH:MM:SS`(por ejemplo,`11:00:00`) |
| # Interval End Time # | El tiempo que la promoción se detiene cada día — formato`HH:MM:SS`(por ejemplo,`14:00:00`) |
| *Peso* | Un valor prioritario utilizado cuando se superponen múltiples marcos de tiempo - mayor peso tiene precedencia |
| ¿Es Blackout Timeframe? | Toggle`Yes`*invert* esta ventana — la promoción es válida * fuera* este período en lugar de dentro de ella |
| **Use UTC** | Compruebe esta caja para entrar todo el tiempo en UTC en lugar de la zona horaria local de la tienda |

Haga clic en **ADD ANOTHER TIME FRAME** para definir ventanas adicionales dentro del mismo requisito.

**When to use:** Ofertas de almuerzo (11am–2pm días de semana), especiales de fin de semana, campañas de tiempo limitado con una fecha definida de inicio y final.

---

### Situación del usuario

Restricts the promotion based on whether the customer has a registered account.

| Campo | Opciones |
|---|---|
| **¿Es cliente registrado?** | `Yes`— la promoción sólo está disponible para los titulares de cuentas conectados.`No`— la promoción sólo está disponible para clientes invitados |

**When to use:** Exclusividades de miembros de la lealtad, ofertas de bienvenida de nuevos usuarios (sólo invitado), o programas de recompensa basados en la cuenta.

---

## Paso 3 - Efectos

Efectos definen ** qué descuento o recompensa recibe el cliente** cuando se cumplen todos los requisitos. Puede añadir múltiples efectos usando el botón **ADD EFFECT** en la parte superior derecha. Cada efecto tiene un icono de basura para borrarlo.

:::caution
El banner de advertencia — *"Hay problemas con los siguientes efectos que deben resolverse antes de que se pueda salvar la promoción"* — aparece cuando un campo requerido en un efecto es incompleto. Todos los efectos deben estar completamente configurados antes de proceder a la revisión.
:::

Hay tres tipos de efecto:

---

### Tipo de efecto: Nivel de orden

Aplica el descuento al subtotal de orden **, no a los artículos individuales.

| Campo | Qué entrar |
|---|---|
| **Efecto de precios* | See table below — Order Level supports 4 types |
| * Valor de cuenta* | El porcentaje o la cantidad dependiendo del tipo de efecto de precio seleccionado |
| **Discusión de cuentas** | ** Precio subtotal** — aplica el descuento como una sola reducción al subtotal (por defecto). **Distribuir a través de todos los artículos en el carrito** - difunde el descuento proporcionalmente en todos los artículos del carrito |
| ** Temas excluidos** | Los artículos enumerados aquí no contarán ni recibirán el descuento de nivel de pedido. Set Item Type + Code para cada uno. Click **ADD ANOTHER ITEM TYPE** para excluir varios elementos |
| ** Temas incluidos** | Limita el efecto a sólo los elementos especificados. **Nota:** Los artículos incluidos están deshabilitados siempre y cuando estén presentes los artículos no incluidos: eliminar todos los artículos excluidos primero para permitir esta sección |

** Tipos de Efecto dePrecio disponibles para el Nivel de Pedido:**

| Tipo | Lo que hace |
|---|---|
| *Porcentaje* | Reduce el subtotal de pedido por un porcentaje fijo (por ejemplo, 10% de descuento) |
| **Suficiente* | Reduce el subtotal del pedido por una cantidad de divisa fija (por ejemplo, $5 de descuento) |
| **Variable Percent Off** | Descuento porcentual que varía — típicamente utilizado con códigos serializados o dinámicos |
| **Suma provisional* | Descuento de cantidad fija que varía según código o condición |

---

### Tipo de efecto: Nivel de artículo

Aplica el descuento a ** artículos de clasificación específicos sólo**, no todo el orden. Ofrece el control más granular sobre lo que se descarta y por cuánto.

| Campo | Qué entrar |
|---|---|
| **Efecto de precios* | See table below — Item Level supports 6 types |
| * Valor de cuenta* | El porcentaje, cantidad o precio fijo dependiendo del tipo seleccionado |
| **Item Target Price** | **Más bajo** — el descuento apunta el elemento de calificación más barato en el carrito (por defecto). **Más alto** - el descuento apunta el elemento de calificación más caro |
| **Target All Items** | **No** — el efecto se aplica sólo a una instancia del primer elemento (por defecto). **Sí** - el efecto se aplica a cada artículo en juego en el carrito |
| **Cualificación de artículos** | Los artículos a los que se aplica este descuento. Haga clic en **+ ADD ITEMS AND DEFINE EFFECTS** para abrir el cajón de selección de elementos |

**Calificar el cajón de los artículos — Seleccionar los elementos de calificación y definir los efectos de los objetivos:**

| Sección | Campo | Qué entrar |
|---|---|---|
| **Seleccionar artículos** | Tipo de artículo | Producto, Variante, Bundle |
| **Seleccionar artículos** | Seleccione producto / Variante / Bundle | Busque y seleccione el elemento de calificación. Los artículos seleccionados aparecen en una tabla que muestra Nombre del producto y Código del producto |
| **Define Target Effects** | Precio básico | El descuento se aplica sólo al precio base del artículo (modificadores excluidos) |
| **Define Target Effects** | Precio base con modificadores | El descuento se aplica al precio base más cualquier modificador seleccionado (por defecto) |
| **Define Target Effects** | Modificadores de destino a descuento | Toggle`Yes`para incluir el costo de los modificadores en la cantidad de descuento |

Haga clic aquí para confirmar.

** Tipos de efecto de fijación disponibles para el nivel del elemento:**

| Tipo | Lo que hace |
|---|---|
| *Porcentaje* | Reduce el precio del artículo calificado por un porcentaje fijo |
| **Suficiente* | Reduce el precio del artículo calificado por una cantidad de moneda fija |
| **Precio fijo** | Establece el elemento clasificatorio a un precio específico, por ejemplo, $5 plana |
| **Variable Percent Off** | Porcentaje de descuento que varía según código o condición |
| **Suma provisional* | Cantidad de descuento que varía según código o condición |
| **Variable Precio fijo** | Precio fijo que varía según código o condición |

---

### Tipo de efecto: Entrega, Servicio y Tarifas Regulatorias

Aplica el descuento a **sentidos** en lugar de los artículos del carrito ellos mismos. Utilice esto para ofrecer entrega gratuita o renunciar a otros cargos.

| Campo | Qué entrar |
|---|---|
| **Delivery, Service y Regulatory Fees Type** * | **Delivery Fee** — descuentos el cargo de entrega. ** Tarifa de servicio** - descuentos la cuota de servicio de plataforma. **Cargos regulatorios** - descuentos cualquier recargo regulatorio |
| **Efecto de precios* | Porcentaje desactivado, Cantidad desactivada o precio fijo |
| * Valor de cuenta* | El porcentaje, la cantidad o la cuota fija dependiendo del tipo seleccionado |

**Tipos de Efecto de Prelación disponibles para Fees:**

| Tipo | Lo que hace |
|---|---|
| *Porcentaje* | Reduce la tasa por porcentaje, por ejemplo, 100% de descuento = entrega gratuita |
| **Suficiente* | Reduce la cuota por una cantidad fija |
| **Precio fijo** | Establece la cuota a un valor específico, por ejemplo, $0.00 para la entrega gratuita |

---

### Tipos de efecto de precios — Comparación completa

| Tipo de efecto | Nivel de orden | Nivel de referencia | Fees |
|---|:---:|:---:|:---:|
| Percentaje | ✅ | ✅ | ✅ |
| Cantidad desactivada | ✅ | ✅ | ✅ |
| Precio fijo | — | ✅ | ✅ |
| Percentaje variable | ✅ | ✅ | — |
| Cantidad variable | ✅ | ✅ | — |
| Precio fijo variable | — | ✅ | — |

---

## Paso 4 - Examen

Un resumen de todo lo que ha configurado. Cada sección muestra sus valores actuales y tiene un enlace **EDIT** sobre el derecho a retroceder directamente y hacer cambios sin perder ningún otro progreso.

La pantalla de revisión muestra:

- **Información básica** — Combinable con otras promociones, Max Promo Usos Por Carrito, Automático, Códigos de Redención, Mostrar botón POS, Público
- **Requisitos**: cada tipo de requisito y sus valores configurados
- **Efectos** — Tipo de efecto, Distribución de descuento, Artículos no incluidos

Cuando todo parece correcto, haga clic en **CREATE** (top right) para guardar y publicar la promoción.

:::caution
El botón **CREATE** sigue grisado si cualquier efecto tiene errores de validación sin resolver. Revise el banner de advertencia en el paso 3 y resuelva todos los efectos marcados antes de proceder.
:::

---

## Recetas de Promoción Común

Las páginas de recetas detalladas ahora viven en la sección de recetas dedicadas arriba para que los mercados puedan seguir agregando nuevos patrones sin hacer esta guía de configuración demasiado largo.

---

## Guías relacionadas

- [Crear una promoción](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Editar una promoción](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Crear códigos serializados](/docs/admin-portal-guide/promotions/create-serialized-code/)
- [Búsqueda avanzada de promociones](/docs/admin-portal-guide/promotions/advanced-promotions-search/)

---

*Part of the[Guía del Portal de Admin](/docs/admin-portal-guide)· Sección: Promoción*

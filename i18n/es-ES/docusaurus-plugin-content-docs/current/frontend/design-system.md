---
title: "Sistema de diseño"
sidebar_label: "Sistema de diseño"
sidebar_position: 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# KFC Atlas Design System
### Cómo se construye nuestra plataforma — De la identidad visual a su pantalla

---

## ¿Qué es un sistema de diseño?

Piense en un sistema de diseño como fuente de verdad ** para cómo KFC se ve y trabaja digitalmente — en todas partes. Es el conjunto de reglas, piezas reutilizables y herramientas compartidas que aseguran un botón en la aplicación KFC Australia se ve y se comporta de forma consistente en experiencias web y nativas. Sin ella, cada mercado reconstruiría lo mismo desde cero, de maneras ligeramente diferentes. Con él, cada equipo trabaja desde la misma fundación.

La plataforma KFC Atlas está impulsada por **Byte Helium**, el sistema de diseño empresarial de Yum!. Así es como todo encaja.

---

## Las tres capas

### Capa 1 — Diseño (Lo que parece)

Todo comienza en **Figma**, la herramienta de diseño utilizada por el equipo Atlas UI/UX. Dentro de Figma, un plugin llamado **Tokens Studio** gestiona *design tokens* — los valores brutos que definen la identidad visual de KFC: colores de marca, tamaños de fuente, unidades de espaciado, radios de esquina y más.

Desde esos tokens, el equipo monta un **UI Kit** — una biblioteca de componentes listos (botones, tarjetas, barras de navegación, campos de entrada) que los diseñadores pueden arrastrar y soltar para construir nuevas pantallas. Cada componente del UI Kit está conectado a las fichas, por lo que un solo color cambia cascadas en todas partes automáticamente.

* En términos simples* Tokens Studio es el libro de reglas de la marca. El UI Kit es la caja de piezas de Lego de marca. Los diseñadores construyen pantallas montando esas piezas.

---

### Capa 2 — Código (Cómo se construye)

Una vez aprobado un diseño, los ingenieros lo traducen en código de trabajo utilizando los mismos tokens de diseño, ahora exportados para su uso en software.

Un proceso de construcción de estilo ** toma esas fichas y genera dos conjuntos de salida:

- ** Estilos nativos** — para aplicaciones iOS y Android (la aplicación móvil KFC en tu teléfono)
- ** Estilos web** — para experiencias basadas en el navegador (el sitio web de KFC y el flujo de pedidos web)

Esos estilos se alimentan de **Design System Components (DSC)** — los equivalentes codificados del diseño UI Kit. Estos componentes son los bloques de construcción que utilizan los ingenieros al escribir nuevas características para Atlas. Ejecuten la consistencia para que ningún equipo de mercado individual pueda introducir accidentalmente una fuente desajustada o un color fuera de marca.

* En términos simples* Las fichas de diseño se "compilan" en código. El resultado es una biblioteca de componentes listos para usar, de marca que los ingenieros de todos los mercados sacan de.

---

### Capa 3 — Aplicaciones de mercado (Lo que pasa en directo)

En la parte inferior de la pila se sientan las aplicaciones reales que los clientes utilizan:

| Aplicación | Lo que es |
|---|---|
| **KFC Web App** | La experiencia principal de pedidos web para los mercados de KFC a nivel mundial, basada en Atlas |
| **Core Web App** | La base web compartida que KFC Web App (y otros) se construyen en la parte superior |
| **Core Native App** | La fundación móvil compartida para experiencias nativas iOS/Android |

El front-end de cada mercado se monta desde las aplicaciones Core y los componentes DSC anteriores, lo que significa que los mercados obtienen consistencia gratuita, y la personalización se gestiona de forma controlada y estructurada.

---

## Por qué esto importa para los mercados de Atlas

Para mercados como **Australia, Reino Unido, Alemania y Singapur**, esta arquitectura significa:

- **Hablado** No reconstruir elementos comunes desde cero. Nuevas características construidas en la nave del sistema de diseño más rápido.
- **Consistencia** — La marca KFC se ve directamente en cada pantalla, en cada mercado, en cada dispositivo.
- **Scalability** — Cuando Yum! actualiza un token de marca (por ejemplo, un nuevo rojo), fluye a través de la aplicación de cada mercado automáticamente.
- **Calidad** — Los componentes se prueban una vez a nivel de plataforma y son heredados por todos los mercados.

KFC Global Enablement and Market Success ayuda a cada mercado a aprovechar plenamente este sistema, traduciendo las capacidades de las plataformas en las características de mercado, y el mercado de surfacing necesita volver al equipo de ingeniería de una manera estructurada.

---

## Diagrama de Arquitectura de Plataforma

El diagrama a continuación ilustra cómo el sistema de diseño Byte Helium fluye de tokens de diseño en Figma —a través del proceso de construcción de estilo— en componentes de plataforma, y finalmente en el mercado de aplicaciones KFC que usan los clientes.

<iframe
  src={useBaseUrl('/kfc-atlas-design-system-diagram.html')}
  width="100%"
  height="900px"
  style={{border: 'none', borderRadius: '12px'}}
/>
---

*Documento preparado por KFC Global Enablement and Market Success — KFC Global*

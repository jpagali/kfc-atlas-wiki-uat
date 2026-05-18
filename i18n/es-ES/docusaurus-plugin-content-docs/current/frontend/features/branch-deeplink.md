---
title: Branch Deeplink
sidebar_position: 3
---

# Branch Deeplink

## Lo que hace

Branch Deeplink amplía las capacidades de conexión de la plataforma Atlas usando el **Branch.io SDK** — una plataforma de conexión y atribución profunda de terceros utilizada ampliamente en aplicaciones móviles.

Cuando KFC Universal Links envía a los usuarios al contenido de la aplicación, Branch agrega una capa de inteligencia en la parte superior: rastrea *donde* vino un usuario, maneja enlaces aplazados profundos para los usuarios que no tienen la aplicación todavía, y proporciona datos de atribución que conecta la actividad de marketing a las instalaciones y pedidos de la aplicación.

## Capacidades clave

| Capacidad | Descripción |
|---|---|
| **Acoplamiento profundo diferido** | Un usuario hace clic en un enlace de Branch, instala la aplicación, y se lleva a la pantalla de aplicación correcta en el primer lanzamiento, aunque la aplicación no fue instalada cuando hizo clic |
| *Atribución* | Enlaces rastrean qué campaña, canal o creativo condujo la instalación o sesión |
| **Cross-platform routing** | Branch maneja iOS, Android, y los inconvenientes web de un solo enlace |
| ** Gestión unificada de enlaces** | Los equipos de marketing pueden crear y gestionar vínculos profundos a través del panel de rama sin participación de ingeniería |

## Cómo se relaciona con los vínculos universales

KFC Universal Links y Branch Deeplinks sirven propósitos complementarios:

|  | Enlace universal | Branch Deeplink |
|---|---|---|
| ** Uso obligatorio** | Enrutamiento directo (app instalado) | Atribución + enlace diferido |
| **App no instalado** | Web fallback | Puede activar App Store redireccionar + enlace profundo diferido |
| **Atribución de marcación** | No | Sí. |
| **Managed by** | Ingeniería | Marketing + Ingeniería |

## Plataformas

| Plataforma | Apoyo |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ↑ (fallback) |

---
title: Glosario
description: Definiciones para todos los términos técnicos y de plataforma utilizados en el Centro de Conocimiento de Atlas / Byte Helium.
sidebar_label: Glosario
---

# 📋 Glosario de Plataforma

Definiciones para todos los términos utilizados en la documentación de capacidades Byte. Cuando hay duda de lo que significa un término, comienza aquí.

---

| Mandato | Definición |
|---|---|
| *Byte Helium* | El sistema de diseño empresarial de Yum! y la fundación frontal. KFC Atlas está construido en Helio y despellejado para reflejar la marca KFC |
| **Byte Commerce** | El motor de comercio detrás de Atlas. Procesa órdenes, precios, pagos e inyección de POS; si un mercado no está en Byte POS, Byte Connect es requerido como el puente al mercado POS |
| **Commerce Backend** | El componente backend de Byte Commerce — ver Byte Commerce |
| **Byte Portal** | La interfaz de administración se unió con Byte Commerce para los equipos de mercado y operaciones para configurar y operar la plataforma |
| *Por menú* | La herramienta de autoría del menú — externo a Atlas; Byte Portal asigna menús publicados |
| **Byte Connect** | La capa media utilizada cuando Atlas / Byte Commerce necesita alcanzar un entorno POS no-Byte; también es compatible con los flujos de orden de agregación hacia Byte Commerce |
| **PSP** | Proveedor de servicio de pago — maneja la tokenización de tarjetas y captura |
| *Vault* | Almacenamiento seguro para fichas de tarjetas y credenciales PSP |
| ***** | Página de Lista de Producto — el menú ver |
| **PDP** | Página de detalles del producto — vista de un solo artículo con opciones |
| ################################################################################################################################################################################################################################################################ | PIN de un tiempo - utilizado para el registro sin contraseña |
| **SSO** | Servicio de autenticación centralizado |
| **CMP** | Consent Management Platform — gestiona el consentimiento de cookie y marketing |
| **CRM** | Gestión de las relaciones con los clientes — gestiona los perfiles de los clientes y comas prefs |
| **KDS** | Sistema de pantalla de cocina — la pantalla en la tienda mostrando pedidos entrantes |
| **POS** | Punto de venta: el sistema de gestión de pedidos en la tienda; Atlas llega a Byte POS a través de Byte Commerce, y llega a los mercados de POS no-Byte a través de Byte Commerce más Byte Connect |
| *DCI* | Data Contracts & Interfaces — el registro versionado de todos los esquemas API/evento |
| **RBAC** | Control de acceso basado en roles — cómo se gestionan los permisos de usuario de Portal |
| *Guardia de Seguridad* | Mecanismo de seguridad Byte Portal que bloquea el acceso fuera de su alcance a nivel UI y API |
| **Add-Hope** | Programa global de donación caritativa de KFC integrado en el checkout |
| **Split Tender** | Pagar con dos métodos de pago: por ejemplo, vale + tarjeta |
| **Idempotency Key** | Un ID único que previene pedidos duplicados o pagos si se retira una solicitud |
| **TRD** | Documento de requisitos técnicos |
| **FRD** | Documento de requisitos funcionales |
| *Slo* | Objetivo de nivel de servicio: el objetivo de rendimiento de un sistema |
| **DLQ** | Dead Letter Queue — donde los eventos fallidos de webhook se celebran para su revisión |
| **3DS** | 3D Secure — protocolo de autenticación de tarjetas para la prevención del fraude |
| *Byte* | El nombre del programa para la iniciativa general de comercio electrónico KFC |
| *Atlas* | El frontal global de KFC para el orden digital, construido sobre Byte Helium y alimentado por Byte Commerce + Byte Portal, con Byte Connect incluido donde un mercado POS no es Byte POS |
| **Contexto* | El registro de la plataforma del mercado de un cliente, idioma, modo de pedido y tienda |
| **BCOM** | Forma corta de Commerce Backend - ver Comercio Backend |
| *Patch* | Una anulación del menú se aplica en la parte superior de una versión del menú publicada, utilizada para cambios de precio o disponibilidad a nivel de tienda o grupo |
| ** Grupo de los Estados Unidos** | Una agrupación lógica de las tiendas en Byte Portal utilizado para la asignación de menús, promociones scoping, y la herencia de regla tributaria |
| ** Zona de cobertura** | Un límite geográfico de entrega configurado en Byte Portal / Geo servicio que determina qué direcciones pueden recibir órdenes de entrega |
| ** bandera de la naturaleza** | Un cambio de tiempo de ejecución en Byte Portal que permite o deshabilita una característica para un mercado, canal o segmento de cliente específico sin redistribución |
| **Aggregator** | Una plataforma de entrega de terceros (por ejemplo, Uber Eats, DoorDash) cuyos pedidos se ingieren a través de Byte Connect en Byte Commerce |

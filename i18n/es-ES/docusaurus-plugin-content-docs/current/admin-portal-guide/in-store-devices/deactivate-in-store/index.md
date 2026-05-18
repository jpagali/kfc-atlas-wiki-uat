---
title: Desactivar In-Store
sidebar_label: Desactivar In-Store
---

# Desactivar In-Store

## Qué cubre esta guía

Deshabilita un terminal de POS o un quiosco de recibir actualizaciones del menú y pedidos de procesamiento. Esta acción es reversible: el dispositivo se puede reactivar en cualquier momento.

:::note Byte POS Caveat
Esta guía asume que el dispositivo se gestiona como parte de un **Byte POS** despliegue en Admin Portal.

Si el mercado no está utilizando Byte POS, **Byte Connect** debe ser parte de Byte Commerce a bordo, y los controles operativos para el mercado POS pueden diferir del flujo de desactivación del dispositivo mostrado aquí.
:::

## Pasos

**Step 1:** Navegue a la sección **In-Store Devices** utilizando el menú de navegación de la mano izquierda.

**Step 2:** Encuentra el dispositivo que quieres desactivar. Puede buscar o filtrar por tipo de estación, número de tienda o estado del dispositivo.

**Step 3:** Haga clic en el botón ****** (menú de tres puntos) en la misma fila que el dispositivo, luego seleccione **Desactivar**.

![Paso 2](./img/step-2.png)

**Step 4:** Una confirmación modal parece pedirle que confirme la desactivación. Revisa el nombre del dispositivo para asegurarte de desactivar el dispositivo correcto.

**Step 5:** Haga clic en **Confirm** para desactivar el dispositivo. El dispositivo inmediatamente dejará de recibir actualizaciones del menú y no puede procesar pedidos. Haga clic en **Cancel** o haga clic fuera del modal para mantener el dispositivo activo.

![Paso 3](./img/step-3.png)

:::caution
Desactivar un dispositivo le impide recibir actualizaciones del menú y procesar pedidos hasta que se reactiva. Los clientes en esa ubicación no podrán pedir.
:::

:::
La desactivación es reversible. Si necesita reactivar el dispositivo más tarde, puede hacerlo utilizando el mismo menú. Es posible que necesite generar una nueva contraseña única para reacondicionar el dispositivo.
:::

## Guías relacionadas

- [Generar contraseña de un tiempo](/docs/admin-portal-guide/in-store-devices/generate-one-time-password/)
- [Ver detalles del dispositivo dentro de la página](/docs/admin-portal-guide/in-store-devices/view-in-store-device-details/)
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)

---

*Part of the[Guía del Portal de Admin](/docs/admin-portal-guide)· Sección: Dispositivos In-Store*

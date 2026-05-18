---
title: Deployment Runbook
---

# Deployment Runbook

Este repo debe seguir a`staging`primero,`main`segundo modelo de promoción.

## Regla por defecto

- `staging`es la primera zona de aterrizaje para los cambios orientados al usuario.
- `main`sólo deben recibir cambios que ya han sido verificados`staging`.
- Si un cambio aún no está estable en el estadificación o la validación de la nube todavía está pendiente, no lo promuevas a`main`.

## Flujo de trabajo estándar

1. Presentar el cambio`staging`o cereza-pick allí primero.
2. Empuja`staging`.
3. Verificar el estado de estancamiento:
   - Corre`npm run build`
   - Previsualizar localmente cuando el cambio afecta la enrutamiento, localización o estado UI
   - confirmar cualquier nube o control ambiental específico son verdes
4. Después de la estadificación es estable, promover el mismo compromiso con`main`
5. Notas de actualización durante el`main`paso de promoción a menos que la nota esté expresamente destinada a la visibilidad
6. Empuja`main`

## Reglas de promoción

- Preferir promover la confirmación exacta verificada`staging`en`main`
- Evite hacer una nueva solución ad hoc directamente en`main`si el cambio original no ha sido probado`staging`
- Si`main`accidentalmente consigue un solo compromiso local primero, restablecer local`main`volver a`origin/main`y promover desde`staging`en lugar

## Notas de lanzamiento

- Notas de liberación visibles para el usuario pertenecen a`main`promoción por defecto
- Si el estancamiento necesita su propia masa interna, manténgalo breve y no lo presente como un lanzamiento de producción
- Cuando un cambio afecta a múltiples locales, actualizar o retirar esos locales juntos antes de la promoción

## Lista de verificación rápida

- Cambio`staging`
- `staging`Construido
- El comportamiento de estadificación fue visto donde era necesario
- Las notas de liberación están listas
- Objetivo de promoción`main`
- Sólo después de eso se debe desencadenar el despliegue de producción

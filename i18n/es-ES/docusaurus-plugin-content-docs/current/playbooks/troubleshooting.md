---
title: Solución de problemas
sidebar_position: 2
---

# Solución de problemas

Este libro de juegos cubre los problemas más comunes que el restaurante y los equipos regionales encuentran en la plataforma Atlas, y la ruta correcta de escalada cuando el autoservicio no resuelve el problema.

---

## Problemas comunes &quot;

### Restaurante que no aparece en la aplicación del cliente

| Check | Cómo |
|---|---|
| ¿El restaurante está listo para vivir? | Byte Portal → Perfil → Estado |
| ¿Están todos los canales discapacitados? | Ajustes de canales — al menos uno debe estar activo |
| ¿Las coordenadas GPS estaban establecidas correctamente? | Perfil → Ubicación — confirm pin placement |

Si todos los cheques pasan y el restaurante todavía no es visible después de 30 minutos, escalar a su BMU.

---

### El cliente no puede completar el checkout

**La mayoría de las causas comunes:**
1. El artículo seleccionado ha sido desactivado ya que el cliente lo ha añadido al carrito
2. Un código promo ha expirado o alcanzado su límite de uso
3. La dirección de entrega está fuera del radio de entrega del restaurante

**Franchisee action:** Check Menu → Artículos para cualquier artículo desactivado recientemente. Check Channel Settings → Envío Radius si los pedidos de entrega están fallando.

---

### Menú elemento que muestra el precio incorrecto

1. Check **Menu → Artículos → [Item] → Precios** para confirmar el precio en Byte Portal
2. Si el precio Byte Portal es correcto, pero la aplicación muestra diferente, espere 15 minutos para el refresco de caché
3. Si el problema persiste después de 15 minutos, levante un billete a través de la JIRA Service Desk

---

### Franchisee bloqueado fuera de Byte Portal

1. Vaya a la página de inicio de sesión y utilice **Ha olvidado la contraseña** — esto envía un enlace de reset a su email registrado
2. Si el correo electrónico no se recibe dentro de 5 minutos, compruebe las carpetas de spam
3. Si la cuenta ha sido desactivada, un administrador regional debe reincorporarla bajo Configuración → Usuarios

---

### Ordenes que no llegan a la entrega

1. Confirme el canal de entrega es **Disponible** en Ajustes de Canal
2. Compruebe que las horas de funcionamiento incluyen el tiempo actual para el canal de entrega
3. Confirme que la toggle temporariamente cerrada es **off**
4. Si se integra con un agregador (Uber Eats / DoorDash), compruebe la plataforma del agregador directamente — el problema puede estar en su lado

---

## Sendero de escalada

Utilice este camino cuando el autoservicio no resuelve el problema:

```
Franchisee
    ↓  (cannot resolve in 15 mins)
Regional / BMU Admin
    ↓  (cannot resolve in 30 mins)
Atlas Platform Support (JIRA Service Desk)
    ↓  (P1 / production down)
Yum! Brands Tech — Emergency Line
```

### Niveles de gravedad

| Nivel | Definición | Respuesta a la meta |
|---|---|---|
| **P1** | Restaurante totalmente incapaz de tomar pedidos | 30 minutos |
| **P2** | Un canal hacia abajo, otros trabajando | 2 horas |
| **P3** | Número de características individuales, solución de trabajo disponible | Próximo día de negocios |
| **P4** | Solicitud de pregunta o configuración | 3 días laborables |

### JIRA Service Desk

Billetes de aumento en:`support.atlas.yum.com`

Incluye en cada billete:
- ID del restaurante
- Mercado
- Descripción del número
- Medidas ya adoptadas
- Captura de pantalla o grabación de pantalla si es posible

:::
Las cuestiones P1 también pueden plantearse a través del canal **Emergencia Slack** —`#atlas-p1-support`Tag`@atlas-oncall`para enviar directamente al ingeniero de guardia.
:::

---
title: Social Sign In
sidebar_position: 6
---

# Social Sign In

## Lo que hace

Social Sign En permite a los clientes crear una cuenta y conectarse a KFC utilizando sus credenciales existentes de Google, Facebook o Apple, en lugar de crear una contraseña específica KFC separada.

Para los clientes, elimina la fricción en el registro y el login. Para los mercados, aumenta las tasas de creación de cuentas y reduce las cuestiones de apoyo relacionadas con la contraseña.

## Proveedores de apoyo

| Proveedor | Web | iOS | Android |
|---|---|---|---|
| Google | ✅ | ✅ | ✅ |
| Facebook | ✅ | ✅ | ✅ |
| Apple (Regístrate con Apple) | ✅ | ✅ | ❌ Apple solo admite esto en iOS |

## Cómo funciona

Cuando un cliente pulsa un botón de inicio de sesión social:

1. Son redirigidos a la pantalla de autenticación del proveedor (Google, Facebook o Apple)
2. El proveedor confirma la identidad del cliente y devuelve una ficha
3. Atlas utiliza esa ficha para crear o recuperar la cuenta KFC del cliente
4. El cliente está firmado

Si un cliente ya tiene una cuenta KFC con la misma dirección de correo electrónico, el login social está vinculado a su cuenta existente.

## Capacidad de mercado

Social Sign En está configurado por mercado y por proveedor. Cada proveedor está habilitado independientemente, por lo que un mercado puede tener Google Sign En activo sin Facebook, por ejemplo.

El flujo de autenticación se establece en la configuración del mercado:

```js
authenticationOptions: {
  enabledFlows: {
    MagiclinkEmail: true,   // passwordless email login (always recommended)
    Google: true,
    Facebook: false,
    Apple: true,
  },
  primaryIdentifier: 'email',
}
```

## Plataformas

| Plataforma | Apoyo |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

:::note
Google One Tap Login está disponible en la web como una capa adicional de conveniencia. Muestra una superposición de registro automáticamente. Es opcional y siempre debe ser emparejado con botones estándar OAuth, ya que puede ser suprimido por la configuración del navegador.
:::

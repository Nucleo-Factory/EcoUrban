# EcoUrban

Landing page estática en Angular, mobile-first.

## Desarrollo

```bash
npm install
npm start
```

## Producción

```bash
npm run build
```

El resultado queda en `dist/ecourban`. Para Ploi, configurar el deploy para servir esa carpeta y usar una regla SPA que redirija las rutas no encontradas a `index.html`.

## Configuración del correo

Usa `.env.example` como referencia para crear el archivo `.env` cuando se defina el proveedor. El formulario todavía no envía datos: primero habrá que conectar estas variables a un proveedor o endpoint backend. Las credenciales privadas deben configurarse únicamente en el servidor.

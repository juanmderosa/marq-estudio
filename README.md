# Marq Estudio

Web institucional de Mariana Toledo, arquitecta en Gral. Las Heras. Primera versión local basada en la dirección visual Editorial carbón aprobada, con logo original, fotografías ilustrativas y formulario a WhatsApp. El plan actualizado está en PLAN.md.

## Ejecutar

Requiere Node 24 LTS. Validado con el Node activo del equipo, 24.22.1. La línea se registra en `.node-version` y `engines`. No se modificó la configuración global.

```sh
npm ci
npm run dev
```

Abrir la URL local impresa por Astro. Los scripts usan el host y puerto predeterminados.

```sh
npm run check
npm test
npm run build
npm run preview
```

`dist/` contiene el sitio estático para una futura publicación. No se publicó ni se configuró un dominio.

## Dependencias

Se consultaron npm, la documentación de instalación de Astro y la integración oficial de Tailwind el 22/10/2026. Astro 7.4.2, Tailwind 4.3.3 y Vitest 5.0.5 son las versiones estables consultadas. TypeScript 7.0.2 es estable, pero `@astrojs/check` 0.9.12 declara peers `^5.0.0 || ^6.0.0`; por eso se usa TypeScript 6.0.3, última versión compatible consultada. No hay peers forzados ni overrides. El lockfile fija las versiones resueltas.

- https://docs.astro.build/en/install-and-setup/
- https://tailwindcss.com/docs/installation/framework-guides/astro

## Editar

- `src/data/business.ts`: datos del negocio, teléfono y cinco servicios.
- `src/pages/index.astro`: composición de la página.
- `src/layouts/BaseLayout.astro`: documento, metadatos y estilos globales.
- `src/components/`: cabecera, inicio, servicios, estudio, contacto, footer y logo compartido.
- `src/styles/global.css`: identidad, radios y diseño responsive.
- `src/components/ContactForm.astro`: interacción y errores.
- `src/lib/contact.ts`: validación y construcción del mensaje.

El formulario no envía ni almacena consultas: abre un mensaje preparado que la persona revisa y confirma en WhatsApp. El enlace alternativo queda disponible tras preparar el mensaje si el navegador bloquea la pestaña. También hay contacto directo por WhatsApp y llamada. El flujo incluye una alternativa sin JavaScript.

## Contenido y recursos

Los servicios, nombre, profesión, localidad y teléfono provienen del brief. Las frases de conexión y presentación son adaptaciones editoriales para revisión. No se añadieron credenciales, trayectoria, dirección exacta ni testimonios. Las fotografías son referencias visuales, no trabajos de Marq Estudio. Sus fuentes están en RECURSOS.md.

El logo recortado conserva los píxeles del adjunto; su resolución nativa es 225 × 80 px y no reemplaza un archivo vectorial original. Se muestra con mezcla de aclarado sobre el fondo oscuro para integrar el fondo del recorte, sin redibujar la marca.

## Auditoría Lighthouse

Ejecutar `npm run audit:serve` y auditar la URL que imprima Astro preview. Este comando compila antes de servir la versión de producción, sin Vite ni la barra de desarrollo. No medir el sitio publicable con `npm run dev`. Resultados y correcciones en LIGHTHOUSE.md; informe completo en lighthouse-production.report.html.

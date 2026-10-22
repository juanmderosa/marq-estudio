# Marq Estudio — primera versión

Plan actualizado e implementado el 22 de octubre de 2026.

## Decisiones aprobadas

- Proyecto independiente en `Webs Las Heras/marq-estudio`, sin modificar Almonaci & Miraglia.
- Diseño Editorial carbón: fondo #232323, blanco cálido #FAF8F4 y rosa apagado #C8A99D; Manrope local.
- Radio de 10 px en fotografías, tarjetas y formulario; 8 px en botones y campos.
- Logo original extraído del segundo adjunto, sin reconstrucción ni cambio de tipografía.
- Fotografías de referencia identificadas como ilustrativas, sin atribuirlas al estudio.
- Orden: Inicio, Servicios, Estudio, Contacto y footer.
- Formulario de nombre, servicio y consulta, que prepara un mensaje a +54 9 11 7363-6120.
- WhatsApp en pestaña nueva; el visitante confirma el envío. Sin almacenamiento ni backend.
- Menú móvil superpuesto y crédito de desarrollo según la skill sitios-para-negocios.
- Entrega local sin publicación ni dominio.

## Implementación

Astro estático, Tailwind mediante Vite, TypeScript y Vitest. Contenido comercial separado de la lógica de validación y composición de mensajes. No se añadieron antecedentes, matrículas, reseñas, horarios ni proyectos ficticios.

## Aceptación

Tipos y build correctos; pruebas del mensaje y validación; revisión de escritorio y móvil, navegación por teclado, enlaces, menú, errores y contraste. Registrar límites de las verificaciones en VALIDACION.md.

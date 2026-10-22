# Validación de la primera versión

Fecha: 22/10/2026. Runtime activo: Node 24.22.1, npm 11.19.1.

## Comprobaciones automáticas

- `npm run check`: cero errores, advertencias e indicaciones.
- `npm test`: cuatro pruebas correctas. Cubren tildes, ñ, saltos de línea, símbolos, parámetros URL, espacios, campos obligatorios, servicios válidos y límites de longitud.
- `npm run build`: salida estática generada en `dist/`.
- `npm ls --depth=0`: dependencias sin conflictos reportados. `npm install`: cero vulnerabilidades reportadas.
- HTTP local: respuesta 200.
- Axe-core 4.14.0 sobre el documento real en un iframe del mismo origen, con etiquetas WCAG 2 A/AA, 2.1 A/AA y 2.2 AA: cero infracciones, 26 reglas aprobadas y una comprobación incompleta de contraste con cuatro elementos. No equivale a certificación.
- La página temporal de auditoría y su script se retiran antes del build final.

## Revisión con navegador integrado

- Vista de escritorio a 1280 × 900 y móvil a 320 × 800.
- A 320 px: ancho del documento 320 px; sin desbordamiento horizontal.
- Menú móvil: apertura, `hidden`, `aria-expanded`, cierre con Escape y foco devuelto al botón. El inicio del hero permanece en y=94 px al abrir el menú.
- Campos vacíos: tres errores asociados, foco al nombre y controles marcados como inválidos.
- Consulta válida de prueba: mensaje preparado con caracteres españoles, enlace alternativo y apertura real de una pestaña de WhatsApp con número y texto correctos. No se confirmó ni envió el mensaje; se cerró esa pestaña.
- Las dos imágenes y los logos cargaron correctamente; la fotografía inferior usa carga diferida.
- Se inspeccionó el árbol de accesibilidad, la estructura de encabezados y las etiquetas del formulario.
- Los enlaces internos tienen destinos existentes en el HTML. La automatización del navegador integrado no activó los enlaces de fragmento: la navegación por esas anclas y la preselección al consultar desde una tarjeta requieren una comprobación adicional en un navegador convencional. No se presentan como verificadas funcionalmente.

## Contraste medido

Relación calculada con luminancia relativa WCAG de los colores reales, sin incluir el logo:

| Combinación | Relación |
| --- | --- |
| Rosa #C8A99D / carbón #232323 (y botón invertido) | 7,20:1 |
| Rosa #C8A99D / panel #2B2B2B | 6,48:1 |
| Texto secundario #C5C1BD / panel #2B2B2B | 7,91:1 |
| Texto principal #FAF8F4 / carbón #232323 | 14,82:1 |
| Borde de campos #938A82 / fondo #232323 | 4,64:1 |
| Error #F1B0A7 / panel #2B2B2B | 7,76:1 |

## Límites

No se realizó una sesión con lector de pantalla, zoom real del navegador ni una revisión exhaustiva en Safari, Firefox o dispositivos físicos. Se implementó `prefers-reduced-motion`, sin animación de entrada ni efectos continuos; no se emuló ese ajuste del sistema. Las cuatro comprobaciones incompletas de axe quedan registradas; la medición de la paleta complementa esa revisión, pero no reemplaza una auditoría manual completa.

Entrega local, sin publicación. Fotografías ilustrativas y textos de enlace editorial pendientes de revisión del negocio. El logo es un recorte raster de 225 × 80 px, conservado sin redibujo.

# Recursos y procedencia

## Identidad

`public/images/marq-logo.png`: recorte exacto del logo aportado en el segundo adjunto (imagen vertical), zona x=428, y=1258, ancho=225, alto=80 px. No se recreó la marca. Se preserva su fondo original. Si se dispone del vector o PNG original, podrá sustituirse para mejorar definición.

## Fotografías ilustrativas

Fotografías de Unsplash descargadas en WebP a 1200 px de ancho. Se muestran con la leyenda “Fotografía ilustrativa · No corresponde a una obra del estudio.” No forman un portfolio ni se atribuyen a Mariana Toledo.

- Interior: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85&fm=webp
- Arquitectura: https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&fm=webp
- Licencia consultada el 22/10/2026: https://unsplash.com/license — permite descarga y uso comercial. No se tomó contenido de los sitios de terceros donde también aparecen las imágenes.

## Tipografía

Manrope Variable, paquete `@fontsource-variable/manrope` 5.3.0. Se importa únicamente el subconjunto latino, con soporte para castellano y `font-display: swap`. Licencia SIL Open Font License incluida en el paquete. Las fuentes se sirven localmente en la compilación; no dependen de Google Fonts en tiempo de navegación.

## Imágenes con Astro Picture

Las fotografías y el logo se importan desde `src/assets/images/` y se renderizan mediante `Picture` de `astro:assets`. Las fotografías generan AVIF y WebP con respaldo JPEG, cinco anchos y `sizes`; el logo genera WebP con respaldo PNG, sin ampliar la resolución original. El hero conserva carga inmediata y prioridad alta, y la imagen del estudio y el logo del footer conservan carga diferida. El PNG de `public/images/` se mantiene para el favicon.

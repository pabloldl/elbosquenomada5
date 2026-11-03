# NOMADA 5 — Rural Living

Web reconstruida en HTML5, CSS3 y JavaScript vanilla, compatible con Live Server. No requiere instalación, compilación ni librerías. La fase de diseño se realizó sin commits, pushes ni despliegues. Posteriormente, el usuario autorizó subir esta versión a https://github.com/pabloldl/elbosquenomada5 (rama main). No se ha configurado un despliegue. Solo se han escrito archivos bajo el-bosque-nomada-5/.

## Dirección visual

Se han sustituido HTML, CSS y JavaScript de interfaz. Se abandona la portada cinematográfica oscura, el lenguaje de actos y la galería de hoja de contactos. Nueva identidad de alojamiento: marfil #F7F4EE, marrón #40352E, terracota #BD765B, arena #E9DED0 y blanco. Se emplea un terracota más oscuro para textos pequeños y foco, por contraste.

Cormorant Garamond en titulares y Karla en textos y navegación. No se detectaron estas familias en los archivos principales consultados de los once proyectos indicados. Las fuentes se sirven desde Google Fonts con display=swap y alternativas del sistema. No se han copiado código, composiciones ni activos de esos proyectos; se han consultado en modo lectura. No se afirma comparación visual completa de sus páginas.

Portada con dormitorio en marco arqueado y texto fuera de la imagen; presentación con gran fotografía vertical del salón; recorrido asimétrico de cocina y acceso; comodidades con separadores; breve entorno; reserva y dirección; cierre sencillo. Móvil tiene una composición propia: nombre y ubicación antes de la fotografía, descripción y reserva después, imágenes del recorrido desplazadas y navegación modal específica.

«Alojamiento rural» y «Rural Living» expresan la dirección creativa solicitada y el contexto del destino. El dato contrastado es apartamento turístico; no se afirma una categoría turística oficial de casa rural ni hotel boutique.

## Fotografías revisadas

En img/ siguen existiendo ocho WebP: las cuatro tomas interiores y sus versiones de 384 px. Se han inspeccionado visualmente los ocho. No se han encontrado nuevas escenas u originales en esta carpeta. Los seis JPG originales se conservan sin modificar en imgs/.

| Fotografía | Selección y motivo |
|---|---|
| dormitorio.webp / 875653157.jpg | Portada: la imagen más luminosa, tonos claros y lectura completa de la cama y el mobiliario. |
| salon.webp / 875653691.jpg | Presentación: la fotografía más representativa de la estancia común, con sofá, chimenea y comedor. |
| cocina.webp / 844617810.jpg | Recorrido: mesa preparada y distribución de cocina; menos luminosa, pero complementaria. |
| perspectiva.webp / 875653300.jpg | Recorrido: relación entre acceso, salón y cocina; vertical y de luz más tenue. |
| 844618062.jpg | Excluida: piscina sin relación o acceso verificados. |
| 875655012.jpg | Excluida: exterior sin localización comprobada. |

Todos los originales son verticales de 577 × 768 px. No se fuerzan panorámicas ni se crean detalles inexistentes. Cada toma aparece una sola vez en la página; el visor abre las mismas fuentes. El marco arqueado recorta únicamente las esquinas superiores del dormitorio; en el visor se muestra la fotografía completa.

Se conservan los derivados WebP a 384 y 577 px, sin ampliación artificial ni modificación de escenas. Srcset, sizes y dimensiones declaradas en las cuatro fotos; lazy loading fuera de la portada. Los originales ya estaban comprimidos y los WebP completos no siempre pesan menos. La nitidez de monitores grandes queda limitada por los originales de 577 px.

## Funcionamiento y contenido

Visor nativo dialog con ampliación, selección directa, anterior/siguiente, flechas, Escape, gesto horizontal y retorno de foco. Menú móvil con aria-expanded, Escape, cierre al navegar y retorno de foco. Solo se bloquea el fondo mientras hay un modal abierto; no hay scroll dirigido.

Animaciones discretas de aparición de fotografías, hover suave y transiciones de enlaces. Prefers-reduced-motion muestra todo sin animación. Sin 3D, parallax ni movimientos continuos.

Datos del apartamento y enlace de reserva: https://www.booking.com/hotel/es/nomada-5.es.html. Se mantienen los datos contrastados en esta conversación: dirección, 65 m², hasta cuatro personas, un dormitorio, cama doble y sofá cama, cocina, lavadora, baño, aire acondicionado y mascotas admitidas. No se publican precios ni disponibilidad. No hay teléfono ni correo directo verificados.

Entorno: https://www.cadizturismo.com/es/municipios/el-bosque. Maps utiliza la búsqueda pública de la dirección verificada. Límites del acceso a páginas externas y comprobaciones en VERIFICACION.md.

Se mantienen .gitignore y una única etiqueta robots noindex, nofollow en el HTML público.


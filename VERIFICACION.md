# Verificación — Rural Living

Comprobaciones ejecutadas con Chrome local, servidor HTTP temporal y Chrome DevTools Protocol. Script y salida: .qa/verify.cjs y .qa/results.json. No son dependencias de la web.

- Sintaxis de script.js y herramienta QA: correcta con node --check.
- Viewports 375, 390, 768, 1440 y 1920 px: scrollWidth no supera innerWidth. Sin scroll horizontal.
- En los cinco anchos: exactamente una meta robots noindex, nofollow; destinos internos existentes; tipografías Cormorant Garamond y Karla cargadas; comprobación de indicadores de texto corrupto sin incidencias.
- Las cuatro fotografías cargan y se decodifican. Ninguna repetida en el cuerpo principal.
- Visor: apertura, siguiente y anterior por teclado, zoom, selección directa, cierre por botón y Escape real mediante CDP. Deslizamiento horizontal emulado cambia del salón al dormitorio.
- Menú móvil: apertura, aria-expanded=true, Escape, estado false tras cierre, retorno de foco y cierre al elegir enlace.
- Movimiento reducido: scroll automático y opacidad 1 en los cuatro bloques con revelado.
- Capturas de portada y página completa a 390 y 1440 px generadas. Se inspeccionaron visualmente ambas portadas y la página móvil completa. Las imágenes se mantienen sin deformación, los textos no se superponen a las fotografías y la navegación no colisiona.
- Ocho archivos WebP de img/ inspeccionados visualmente: cuatro fotografías y sus cuatro variantes pequeñas. Originales JPG conservados.
- Metadatos, favicon y documentación actualizados; .gitignore conservado. Solo se ha trabajado dentro de el-bosque-nomada-5/. Sin commits, pushes ni despliegues.

## Límites

Safari de iPhone real sigue pendiente; Chrome no acredita compatibilidad de todos los dispositivos. No se ha completado una reserva. Booking directo requiere verificación JavaScript; sus datos se habían contrastado mediante la ficha indexada durante esta conversación. Maps es un enlace de búsqueda por dirección; su marcador requiere revisión visual. No se publica contacto telefónico o correo sin verificar. Originales de 577 px: la resolución limita la nitidez en monitores grandes y requiere archivos de mayor tamaño para una mejora real.

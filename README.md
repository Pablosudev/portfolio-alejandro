# Portfolio de Alejandro López Suárez

Primera versión local, estática y en español. HTML5, CSS3 y JavaScript vanilla, sin instalación, compilación ni backend. No se ha publicado la web ni registrado un dominio.

## Probar en local

Abre una terminal en esta carpeta y ejecuta:

```sh
python -m http.server 8000
```

Visita http://localhost:8000 y http://localhost:8000/proyectos/jupiter/. Si Windows no reconoce `python`, utiliza `py -m http.server 8000`. También puedes abrir `index.html` directamente: todos los recursos y enlaces internos usan rutas relativas.

## Archivos

- `index.html`: inicio, proyectos, competencias, sobre mí y contacto.
- `proyectos/jupiter/index.html`: caso completo con aportaciones individuales y resultados del equipo separados.
- `css/styles.css`: tokens, componentes, responsive y accesibilidad.
- `js/main.js`: mejora progresiva del menú móvil, con Escape y cierre tras navegar.
- `assets/favicon.svg`: marca tipográfica local.
- `assets/images/alejandro-lopez-suarez.png`: foto original facilitada, utilizada en la presentación y en Sobre mí. La carpeta también queda preparada para las capturas autorizadas.
- `assets/docs/alejandro-lopez-suarez-cv.pdf`: CV facilitado por el usuario, disponible desde Inicio y Contacto.
- `.nojekyll`: compatibilidad con GitHub Pages.
- `SPEC.md`: copia de la documentación facilitada.

## Contenido y decisiones

Se mantiene el titular y el contenido base de la especificación. Júpiter es el único proyecto. Las cifras del caso son resultados globales del equipo transcritos de SPEC.md; no se ha facilitado la memoria original para contrastarlas independientemente. No se atribuye a Alejandro la totalidad del modelo, dashboard o entrenamiento.

Los espacios visuales son placeholders CSS expresamente identificados. No contienen gráficas ni cifras inventadas. El CV facilitado está incorporado sin modificaciones y tiene enlaces de descarga en Inicio y Contacto. No hay formulario, teléfono en el HTML, analítica, cookies ni perfiles inventados. El PDF conserva los datos de contacto de su versión original.

Se usan Space Grotesk e Inter mediante Google Fonts, con fuentes de sistema como alternativa. El contenido funciona si la carga externa falla y la navegación sigue disponible con JavaScript desactivado. Esta petición de fuentes es la única dependencia de red del sitio.

## Pendientes antes de publicar

1. Revisar textos y datos con Alejandro, incluidas las cifras del proyecto y la situación académica.
2. Antes de publicar, confirmar la versión del CV y la difusión de los datos personales que contiene. El PDF ya está incorporado en local y enlazado desde Inicio y Contacto.
3. Añadir capturas reales autorizadas, optimizadas y con textos alternativos. Sustituir cada `.media-placeholder` por la imagen correspondiente; implementar ampliación accesible cuando existan imágenes.
4. Decidir repositorio y publicación; elegir dominio más adelante. Añadir canonical, metadatos sociales y sitemap cuando exista la URL final.

## Publicar en GitHub Pages cuando se autorice

Sube el contenido de esta carpeta a la raíz del repositorio elegido. En GitHub: Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Conserva `.nojekyll`. No hace falta `npm install` ni `npm run build`. Comprueba la home y Júpiter bajo la subruta del repositorio. Este README describe el procedimiento; no se ha realizado ninguna publicación.

## Revisión manual

Comprueba ambas páginas a 320, 375, 768, 1024 y 1440 px, teclado y menú móvil (abrir, Escape, selección de enlace). Verifica el enlace de salto, foco visible, movimiento reducido y navegación con JavaScript desactivado. Los enlaces de email y LinkedIn utilizan las direcciones facilitadas; su destino externo depende de las aplicaciones del visitante.

### Verificación de esta entrega

Comprobados: recursos y enlaces locales de ambas páginas, destinos de fragmentos, identificadores sin duplicados, un H1 por página, idioma, titular exacto, cinco secciones, dos enlaces de descarga al CV incorporado y sintaxis de JavaScript. La comprobación visual y funcional en navegador queda pendiente: el navegador de esta sesión no pudo conectar con el servidor local y las peticiones HTTP desde el entorno fueron bloqueadas con EACCES. Los estilos incluyen reglas para los anchos previstos, pero no se afirma que se hayan verificado visualmente.

## Actualización con CV y documento de apoyo

Se ha copiado el CV original sin editar. El documento de apoyo se ha utilizado como referencia editorial para añadir estadística y explicitar el objetivo de Power BI Developer Junior. No se incluye ese documento como descarga ni se amplían las atribuciones individuales en Júpiter. Se conserva la distinción entre contribuciones individuales y resultados del equipo. No se afirma la expedición del título del máster.

## Foto de perfil

Foto facilitada por el usuario, incorporada sin modificar el archivo original. Se presenta como avatar en el hero y como retrato con marco turquesa, esquinas de encuadre y ficha de identidad en Sobre mí. El recorte y la presentación se realizan solo con CSS; el retrato principal incluye texto alternativo, dimensiones explícitas y carga diferida. El avatar es decorativo para evitar repetir el nombre al lector de pantalla.

### Revisión de la dirección visual
El retrato grande y el avatar inicial se han sustituido por una sola composición compacta en el hero: fotografía con silueta de arco, inclinación sutil y órbita de herramientas. Sobre mí recupera el equilibrio entre texto y trayectoria, sin fotografía duplicada. Esta revisión sustituye la descripción anterior de la foto.

## Evidencias incorporadas de Júpiter

Se han extraído imágenes originales de la presentación facilitada: dashboard (diapositiva 16), KPIs (12) y modelo relacional (8 y 10). Reemplazan todos los placeholders visuales de la web. El caso incluye ampliación con diálogo, cierre mediante Escape y devolución del foco; sin JavaScript los enlaces abren la imagen original. Las imágenes se atribuyen al equipo y las cifras del dashboard se contextualizan como escenario académico. La diapositiva 25 confirma accuracy y F1 de 0,81; no especifica F1 macro ni tamaño de prueba, que siguen atribuidos a SPEC.md. No se incorpora la presentación completa. Esta actualización sustituye las notas anteriores sobre capturas pendientes.

# DOCUMENTO MAESTRO — PORTFOLIO ALEJANDRO LÓPEZ SUÁREZ

**Versión:** 1.0  
**Fecha:** 20 de noviembre de 2026  
**Estado:** especificación para iniciar desarrollo con Codex; pendiente de revisión visual y validación de contenido por Alejandro.  
**Idioma inicial:** español (`es-ES`).

> **Propósito de este documento.** Es la fuente de referencia para construir una primera versión publicable del portfolio de Alejandro con HTML, CSS y JavaScript sin frameworks. Priorizar contenido profesional veraz, claridad, diseño responsive y sencillez de mantenimiento.

---

## 1. Objetivo y público

**Objetivo principal:** que una persona de selección o un responsable de equipo comprenda rápidamente quién es Alejandro, qué posición busca y qué evidencias de trabajo tiene, y pueda consultar su proyecto y contactar con él.

**Puestos prioritarios:** Data Analyst Junior, BI Analyst Junior y Power BI Developer Junior. También puede encajar en roles afines de reporting y calidad de datos, pero el mensaje principal no debe dispersarse.

**Posicionamiento:** candidato junior a su primera oportunidad profesional en datos y BI, con formación en Data Analytics & Data Science y experiencia laboral en diagnóstico técnico y resolución sistemática de problemas en automoción.

**No hacer:** presentar a Alejandro como analista de datos con experiencia laboral previa en ese puesto; atribuirle individualmente todos los resultados de Júpiter; inventar métricas de negocio, clientes, capturas o testimonios.

**Criterio de éxito del visitante:** en unos 30 segundos entiende su especialidad, identifica Júpiter y encuentra los botones de proyecto, CV y contacto.

## 2. Decisiones ya aprobadas

- Estética **Dark Tech / Data**, oscura, premium, sobria y profesional.
- El titular principal es exactamente: **«Data Analytics, Business Intelligence y visualización de datos.»**
- Desktop: presentación a la izquierda (aprox. 60 %) y **Proyecto Júpiter** como tarjeta protagonista a la derecha (aprox. 40 %).
- Móvil: una columna; presentación → botones → tarjeta Júpiter.
- Página principal de cinco secciones: **Inicio, Proyectos, Competencias, Sobre mí y Contacto**.
- Júpiter tiene página individual: `proyectos/jupiter/index.html`.
- Capturas reales de dashboards **aplazadas**. Utilizar componentes placeholder de CSS con texto explícito; jamás visualizaciones con datos falsos que parezcan resultados del proyecto.
- Contacto por `mailto:` y LinkedIn; **sin formulario con backend**.
- Implementación con **HTML5, CSS3 y JavaScript vanilla**, compatible con GitHub Pages, sin React, Tailwind, bundlers ni backend.
- Dominio personalizado y publicación definitiva se abordarán una vez validada la V1.

## 3. Mapa del sitio y recorrido

### Rutas

| Ruta | Función |
| --- | --- |
| `index.html` | Home y navegación principal. |
| `index.html#proyectos` | Sección destacada de Júpiter. |
| `index.html#competencias` | Stack y competencias. |
| `index.html#sobre-mi` | Trayectoria y transición profesional. |
| `index.html#contacto` | Acciones de contacto. |
| `proyectos/jupiter/index.html` | Caso de estudio de Júpiter. |

### Orden de la home

1. **Header + hero:** quién es Alejandro, especialidad, CTA a proyectos y CV; tarjeta Júpiter a la derecha.
2. **Proyectos:** bloque destacado de Júpiter con problema y aportación resumidos.
3. **Competencias:** cuatro tarjetas por especialidad.
4. **Sobre mí:** narrativa breve de la trayectoria en automoción y la formación en datos.
5. **Contacto + footer:** CTA por email, LinkedIn, CV y ubicación Madrid.

En la home no se deben repetir íntegros los contenidos del caso de estudio. Debe animar a visitarlo.

## 4. Sistema visual

### Colores (tokens CSS)

```css
:root {
  --color-bg: #091321;
  --color-surface: #14283C;
  --color-surface-alt: #102338;
  --color-accent: #58E0D1;
  --color-accent-alt: #6F92FF;
  --color-text: #EAF2F8;
  --color-muted: #B7C9D8;
  --color-border: #2C4B60;
  --container-max: 1200px;
  --radius-card: 20px;
  --radius-button: 10px;
}
```

Revisar contraste de los colores secundarios sobre sus fondos. Si alguna combinación no alcanza contraste accesible, ajustar **el tono**, no sacrificar legibilidad por fidelidad literal al hex.

### Tipografía

- Titulares: **Space Grotesk**, fallback `system-ui, sans-serif`.
- Texto, navegación y botones: **Inter**, fallback `system-ui, sans-serif`.
- Si no se cargan las fuentes externas, la web debe funcionar perfectamente con fuentes del sistema.
- Desktop: H1 de aproximadamente 56–64 px (adaptable), texto hero de 17–18 px, interlineado generoso.
- Móvil: H1 de aproximadamente 34–40 px según el espacio, texto de 16 px.
- Usar `clamp()` para tamaños fluidos; no forzar saltos de línea que causen desbordamientos.

### Espaciado y presentación

- Contenedor central `max-width: 1200px`, márgenes horizontales adaptables.
- Header de 72–80 px en desktop y compacto en móvil.
- Separación vertical entre secciones: aprox. 80–112 px desktop; 56–72 px móvil.
- Tarjetas con radios de 16–20 px; borde sutil de 1 px; sombra muy discreta.
- Utilizar gradientes muy contenidos si mejoran profundidad; **sin partículas permanentes, neón excesivo ni fondos distraídos**.
- Logotipo tipográfico `AL.` en recuadro turquesa; no necesita imagen.
- Iconos simples SVG inline o CSS, evitando librerías innecesarias.

## 5. Componentes reutilizables

1. `SiteHeader`: logotipo `AL.`, enlaces **Proyectos**, **Sobre mí**, **Contacto**; navegación fija o `sticky` con transparencia ligera sobre scroll. En móvil menú accesible desplegable.
2. `PrimaryButton`: fondo turquesa, texto oscuro, hover/focus perceptibles.
3. `SecondaryButton`: fondo transparente, borde visible, texto claro.
4. `ProjectCard`: contenedor completo enlazado a Júpiter, con título, categoría, resumen, stack y área de placeholder.
5. `SectionHeading`: código numérico corto (`02 / PROYECTOS`), título y entradilla.
6. `SkillCard`: icono sencillo, especialidad y tecnologías; sin porcentajes ficticios de dominio.
7. `Timeline/Path`: recorrido profesional breve, automoción → formación en datos → objetivo junior.
8. `MediaPlaceholder`: superficie oscura, borde discontinuo, icono, título descriptivo y etiqueta **«Imagen pendiente»**. Debe poder cambiarse por una imagen real sin modificar la estructura del componente.
9. `Footer`: copyright, nombre y ubicación; opcional repetición discreta de enlaces de contacto.

### Estados

- Hover: cambio sutil de borde / elevación y transición de 200–300 ms.
- Focus: contorno **visible** para teclado, no depender solo del color.
- Menú móvil: abrir/cerrar, `aria-expanded`, cierre con `Escape`, cierre tras escoger enlace, sin bloqueo de navegación por teclado.
- Respetar `prefers-reduced-motion: reduce`.
- No hacer animaciones de scroll imprescindibles para leer contenido.

## 6. Contenidos de la HOME — Copy inicial

> Mantener estos textos como contenido base. Los cambios de fondo deben validarse con Alejandro. El nombre y el titular son datos prioritarios.

### 6.1 Header y hero (`#inicio`)

**Etiqueta:** `DATA ANALYST JUNIOR · BUSINESS INTELLIGENCE`  
**H1 (exacto):** `Data Analytics, Business Intelligence y visualización de datos.`

**Presentación:**

> Soy Alejandro López Suárez. Combino mi experiencia en diagnóstico técnico y resolución de problemas con formación en análisis de datos y proyectos prácticos utilizando Python, SQL y Power BI.

**Dato corto:** `Madrid, España · Oportunidades junior en datos y BI`

**CTA primaria:** `Ver proyectos` → `#proyectos`.  
**CTA secundaria:** `Descargar CV` → `assets/docs/alejandro-lopez-suarez-cv.pdf`, **solo si el archivo se ha incorporado**. Si falta, no dejar un enlace roto: mostrar un estado temporal claramente indicado y reportar el recurso pendiente.

**Tarjeta derecha — Júpiter:**

- Sobreetiqueta: `PROYECTO DESTACADO / 001`.
- Título: `Proyecto Júpiter`.
- Subtítulo: `Business Intelligence & Machine Learning`.
- Chips: `Python`, `SQL`, `Power BI`, `DAX`.
- Visual: placeholder CSS `Visualización del proyecto · Imagen pendiente`.
- Acción accesible: `Explorar caso de estudio` → `proyectos/jupiter/`.

### 6.2 Proyectos (`#proyectos`)

**Etiqueta:** `02 / PROYECTOS`  
**H2:** `De los datos a las decisiones.`

**Entradilla:**

> Un ejemplo práctico de análisis de datos, Business Intelligence y Machine Learning aplicado a una plataforma musical.

**Tarjeta:**

- Nombre: `Júpiter`.
- Tipo: `Proyecto académico colaborativo · 2026`.
- Texto: `Análisis exploratorio, calidad de datos, creación de KPIs y dashboards para un escenario de negocio musical, junto con la evaluación de modelos de clasificación.`
- Imagen: placeholder CSS de dashboard, sin gráficas o cifras ficticias.
- CTA: `Ver caso completo` → `proyectos/jupiter/`.

**Regla:** un solo proyecto bien explicado es mejor que tres tarjetas vacías. No crear más proyectos hasta tener contenido real.

### 6.3 Competencias (`#competencias`)

**Etiqueta:** `03 / COMPETENCIAS`  
**H2:** `Mi stack tecnológico.`  
**Entradilla:** `Herramientas y tecnologías trabajadas durante mi formación y proyectos de análisis de datos.`

| Tarjeta | Tecnologías / conceptos |
| --- | --- |
| Análisis de datos | Python · pandas · NumPy · EDA |
| Business Intelligence | Power BI · DAX · Tableau · KPIs |
| Bases de datos | SQL · Modelado relacional |
| Machine Learning | scikit-learn · Clasificación · Evaluación de modelos |

No mostrar porcentajes de nivel o calificaciones subjetivas. La formación también incluye Matplotlib, Seaborn y Jupyter, que pueden aparecer en la ficha de Júpiter o futuras ampliaciones sin sobrecargar la home.

### 6.4 Sobre mí (`#sobre-mi`)

**Etiqueta:** `04 / SOBRE MÍ`  
**H2:** `Una trayectoria diferente. Una mentalidad analítica.`

**Texto:**

> Mi experiencia en el sector de la automoción me ha enseñado a interpretar información técnica, diagnosticar problemas y buscar soluciones de forma sistemática. Ahora quiero aplicar esa forma de trabajar al mundo del análisis de datos y Business Intelligence.

**Recorrido visual breve:**

1. **Experiencia profesional:** diagnóstico técnico y resolución de incidencias en automoción.
2. **Especialización:** Máster en Data Analytics & Data Science — PontIA (2026).
3. **Objetivo:** desarrollar mi carrera como Data Analyst o BI Analyst Junior.

No afirmar que el máster está formalmente terminado o que dispone de título expedido hasta comprobarlo. No detallar fechas laborales o empresas en la home salvo decisión posterior; esa información está en el CV.

### 6.5 Contacto (`#contacto`)

**Etiqueta:** `05 / CONTACTO`  
**H2:** `¿Hablamos de datos?`

**Texto:**

> Estoy buscando mi primera oportunidad profesional en análisis de datos y Business Intelligence. Si crees que mi perfil puede encajar en tu equipo, estaré encantado de conversar.

**CTA:**

- `Contactar por email`: `mailto:alejandrolopezsua82@gmail.com`.
- `LinkedIn`: `https://www.linkedin.com/in/alejandro-lopez-suarez/`.
- `Descargar CV`: enlace al PDF local cuando esté incorporado.

No publicar el número de teléfono como texto en la home. El CV descargable contiene datos personales: confirmar con Alejandro que autoriza esa versión para una web pública.

### 6.6 Footer

`© 2026 Alejandro López Suárez · Madrid, España`.

Evitar inventar perfiles de GitHub personales, testimonios o empresas clientes. La página puede estar hospedada en la cuenta GitHub de Pablo sin anunciarla como si fuera la cuenta profesional de Alejandro.

## 7. Página JÚPITER — Caso de estudio

**Ruta:** `proyectos/jupiter/index.html`.  
**Navegación de vuelta:** enlace relativo a `../../` o `../../#proyectos`, válido en GitHub Pages de proyecto y con dominio personalizado.

### 7.1 Hero del caso

**Etiqueta:** `BUSINESS INTELLIGENCE · DATA ANALYTICS · MACHINE LEARNING`  
**H1:** `Júpiter`  
**Subtítulo:** `Transformando datos musicales en información útil.`

**Texto:**

> Júpiter es un proyecto académico colaborativo desarrollado durante el Máster en Data Analytics & Data Science de PontIA. El equipo trabajó en la organización, análisis y visualización de datos de una plataforma musical, así como en la evaluación de modelos para clasificar géneros musicales.

**Metadatos:** `Proyecto académico en equipo` · `2026` · `Data & BI`.

**Visual hero:** placeholder de dashboard de Power BI, área con relación de aspecto 16:9 o 16:10, claramente identificada como pendiente.

### 7.2 Bloques en orden

**01 — El problema**

> El escenario planteaba una plataforma musical con información que debía estructurarse y analizarse para mejorar su explotación. Se requerían indicadores de negocio, controles de calidad del dato y una aproximación a la clasificación automática de géneros.

**02 — Objetivos del equipo**

- Diseñar un modelo relacional para el análisis.
- Detectar nulos, inconsistencias y anomalías.
- Definir KPIs y visualizarlos en dashboards.
- Comparar algoritmos de Machine Learning y Deep Learning para clasificación musical.

**03 — Mi contribución (atribución individual a Alejandro)**

Cuatro tarjetas, basadas en el reparto del trabajo de la memoria:

1. `EDA de listas y favoritos`: análisis exploratorio de esas tablas.
2. `KPIs y dashboard`: elaboración de KPIs sobre reproducciones, discográficas, discos y patrones de consumo; creación de indicadores para el dashboard.
3. `Preparación de datos`: código para trabajar con datos de entrenamiento/prueba y análisis previo de la tabla de canciones.
4. `Documentación técnica`: colaboración en escritura y redacción de la memoria.

No escribir «Alejandro diseñó por sí solo todo el modelo de datos», «entrenó todos los modelos» o «creó el dashboard completo», porque no está sustentado como aportación individual.

**04 — Proceso (trabajo del equipo)**

`Exploración → Calidad y transformación → Modelo relacional → KPIs y dashboards → Evaluación de modelos`.

Usar esquema sencillo o tarjetas de etapas; sin necesidad de animaciones complejas.

**05 — Evidencias visuales**

Tres espacios, sustituibles en el futuro:

- `Dashboard de Power BI` — placeholder.
- `Indicadores y visualizaciones` — placeholder.
- `Modelo relacional (10 tablas)` — placeholder.

Cada espacio debe tener un título legible y un texto descriptivo. Las capturas reales se añadirán después y permitirán ampliar al pulsar, con textos alternativos adecuados.

**06 — Resultado del equipo**

- Modelo relacional descrito en la memoria: **10 tablas**.
- Clasificación: **Random Forest con votación mayoritaria**, mejor opción global en la comparativa documentada.
- **Accuracy: 0,81 (81 %)**.
- **F1 macro: 0,81**.
- Evaluación realizada sobre **200 canciones de prueba**.

Etiquetar inequívocamente: **«Resultados globales del proyecto colaborativo; no resultados individuales»**. Evitar porcentajes inventados para el negocio o afirmar que el sistema se implantó en producción.

**07 — Aprendizajes**

> Mi participación en Júpiter reforzó la importancia de explorar y preparar los datos antes de analizarlos, definir indicadores útiles y comunicar resultados de forma comprensible. También afianzó mi interés profesional por Business Intelligence y el análisis de datos.

**08 — Navegación final:** `Volver a proyectos` y `Contactar`.

### Fuentes de verdad de Júpiter

- *Máster Data Analytics & Data Science — Memoria del Proyecto Júpiter*: página 4, reparto de contribuciones; páginas 3 y 5, problema y modelo; páginas 12–15, modelos y resultados.
- *CV de Alejandro López Suárez*: perfil, formación, habilidades y experiencia profesional.
- *Perfil de puestos y conocimientos*: prioridad a roles Data Analyst / BI / Power BI junior.

Revisar cualquier afirmación nueva con esas fuentes. No publicar la memoria íntegra, notebooks, datasets ni capturas de equipo sin autorización o comprobación de que pueden difundirse.

## 8. Responsive, accesibilidad y UX

### Breakpoints orientativos

- **Móvil:** < 768 px → una columna, header compacto, hero antes de Júpiter, botones de ancho cómodo.
- **Tablet:** 768–1023 px → usar dos columnas solo si caben sin comprometer la lectura; de lo contrario, apilar.
- **Desktop:** >= 1024 px → hero 60/40; grid de competencias de dos columnas (o cuatro solo si sigue siendo legible).

Verificar anchos de **320, 375, 768, 1024 y 1440 px**; nunca generar scroll horizontal.

### Accesibilidad funcional

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`; un `h1` por página y jerarquía de encabezados coherente.
- Idioma del documento `lang="es"`; enlaces con textos descriptivos.
- Menú móvil mediante botón real y `aria-expanded`; apertura/cierre mediante teclado y Escape.
- Enlace «Saltar al contenido» al recibir foco.
- Contraste adecuado, estados de foco visibles, objetivos táctiles cómodos.
- `prefers-reduced-motion`, imágenes con `alt` cuando se incorporen, `loading="lazy"` para imágenes no prioritarias.
- Animaciones solo decorativas y sin esconder contenido si JavaScript falla.
- Evitar dependencias JS para navegación básica y enlaces.

## 9. Arquitectura técnica propuesta

```text
alejandro-portfolio/
├── index.html
├── proyectos/
│   └── jupiter/
│       └── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── docs/
│   │   └── alejandro-lopez-suarez-cv.pdf  # añadir cuando se copie el PDF
│   └── images/
│       └── .gitkeep                       # capturas reales en fase posterior
├── .nojekyll
├── README.md
└── SPEC.md                               # este documento
```

### Reglas de implementación

- No utilizar frameworks CSS/JS, dependencias de servidor, bundler o CMS para la V1.
- CSS organizado por: tokens, reset/base, layout, componentes, responsive y accesibilidad.
- JS solo para menú móvil y mejoras progresivas (si hacen falta); nada de visualizaciones falsas o lógica superflua.
- Evitar imágenes decorativas descargadas sin necesidad; usar placeholders CSS.
- Servir rutas **relativas** en HTML: desde la home `css/styles.css` y `proyectos/jupiter/`; desde Júpiter `../../css/styles.css`, `../../js/main.js` y `../../#proyectos`.
- Los placeholders deben seguir funcionando con JavaScript deshabilitado.
- Añadir favicon sencillo en SVG o equivalente si se puede crear sin complejidad.
- Si el PDF CV aún no está en el repositorio, no apuntar un botón activo a un archivo inexistente.
- No incluir teléfono en texto o metadatos de la web sin confirmación explícita del interesado.

## 10. SEO básico y rendimiento

- Título sugerido home: `Alejandro López Suárez | Data Analyst Junior & Business Intelligence`.
- Descripción sugerida: `Portfolio de Alejandro López Suárez: análisis de datos, Power BI, SQL, Python y proyecto Júpiter de Business Intelligence.`
- Título Júpiter: `Proyecto Júpiter | Alejandro López Suárez`.
- Descripción Júpiter: `Caso de estudio académico de análisis de datos y Business Intelligence aplicado a una plataforma musical. Aportaciones, KPIs y resultados del equipo.`
- `<meta name="viewport" content="width=device-width, initial-scale=1">` y estructura semántica.
- Evitar meter `canonical`, `og:url`, sitemap o un dominio ficticio. Añadirlos cuando el dominio final esté decidido. Las tarjetas sociales con imagen real también quedan para más adelante.
- Optimizar imágenes reales cuando existan (WebP/AVIF si procede, dimensiones y peso controlados).
- Sin scripts externos innecesarios, sin analítica invasiva ni cookies de seguimiento en la V1.
- Priorizar fluidez real frente a un número artificial de Lighthouse; objetivo orientativo de buen rendimiento y accesibilidad.

## 11. GitHub Pages y dominio

**Fase inicial:** crear repositorio en la cuenta de GitHub de Pablo, subir archivos estáticos y comprobarlos antes de publicar. Las modificaciones públicas o la compra de dominio se harán cuando se acuerde.

**Publicación simplificada:** GitHub → repositorio → `Settings` → `Pages` → `Deploy from a branch` → rama `main` y carpeta `/ (root)`, si se opta por publicación desde rama. No requiere servidor ni compilación.

**Rutas:** probar tanto `https://USUARIO.github.io/NOMBRE_REPO/` como, más adelante, `https://DOMINIO-ELEGIDO/`. Por eso es obligatorio utilizar enlaces relativos.

**Dominio personalizado:** comprar y configurar después de aprobar la V1; revisar DNS, asociarlo en GitHub Pages y activar HTTPS. No inventar dominios disponibles ni registros DNS sin conocer el proveedor y dominio elegido.

**Referencias oficiales:**

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 12. Criterios de aceptación para la primera entrega de Codex

- [ ] `index.html` contiene las cinco secciones y el titular aprobado sin cambios.
- [ ] `proyectos/jupiter/index.html` contiene el caso de estudio completo y distingue contribuciones individuales de resultados de equipo.
- [ ] Hero desktop a dos columnas (aprox. 60/40) con Júpiter a la derecha; móvil en una columna.
- [ ] Colores, tipografía, espaciados y tarjetas coherentes con la especificación.
- [ ] Placeholders CSS claramente marcados, sin imágenes o datos falsos.
- [ ] Navegación principal y rutas entre home / Júpiter correctas.
- [ ] Enlaces de contacto y LinkedIn funcionan; el CV solo se ofrece para descarga si existe el PDF.
- [ ] Menú móvil accesible: abrir, cerrar, Escape y foco perceptible.
- [ ] Diseño verificado en 320, 375, 768, 1024 y 1440 px sin scroll horizontal.
- [ ] Sitio usable sin JavaScript salvo mejoras no esenciales.
- [ ] No hay errores críticos en consola ni enlaces rotos.
- [ ] La aplicación se puede ejecutar localmente con un servidor estático (`python -m http.server 8000`) y se documenta en README.
- [ ] Se incluye `.nojekyll` y no se requiere `npm install` ni `npm run build`.
- [ ] Codex entrega resumen de archivos creados, decisiones menores tomadas y asuntos pendientes.

## 13. Trabajo posterior — fuera de esta primera entrega

- Sustituir placeholders por capturas reales y autorizadas de Power BI y del modelo relacional.
- Confirmar y copiar el CV definitivo, validando permiso para hacerlo público.
- Revisión final de textos por Alejandro.
- Selección y compra de dominio; configuración de DNS y HTTPS.
- Añadir metadatos canónicos, imagen de compartir y sitemap cuando la URL sea final.
- Añadir más proyectos reales y, opcionalmente, repositorio profesional de Alejandro.
- Revisar resultados en navegador y ajustar detalles visuales con capturas de la web implementada.

## 14. Instrucción operativa para Codex

> Lee `SPEC.md` completo y considéralo la especificación de referencia. Implementa la primera versión estática del portfolio de Alejandro López Suárez en HTML, CSS y JavaScript vanilla. No utilices frameworks, bundlers ni backend. Respeta exactamente el titular, la estructura y los textos base, y diseña con el sistema Dark Tech / Data descrito. La tarjeta de Júpiter debe estar a la derecha en desktop y debajo del texto en móvil. Implementa la home y la página `/proyectos/jupiter/`, con placeholders CSS explícitos para las capturas pendientes. No inventes datos, proyectos o experiencia profesional. Distingue claramente la contribución de Alejandro de los resultados globales del equipo. Usa enlaces relativos que funcionen en una URL de proyecto de GitHub Pages y en un futuro dominio propio. Añade navegación móvil accesible, responsive, estados de foco y respeto a movimiento reducido. Crea README con instrucciones para ejecutar localmente y publicar en GitHub Pages. Si falta el PDF del CV, no dejes un enlace roto: indícalo como pendiente. No compres dominio ni publiques la web por tu cuenta. Al terminar, indica qué has implementado, cómo probarlo y qué materiales faltan.

---

**Regla editorial permanente:** primero la credibilidad profesional y la claridad; después los efectos visuales. El diseño debe ayudar a Alejandro a conseguir entrevistas, no distraer de su trabajo.

# Seal And Find

Eres un diseñador de producto y desarrollador front-end senior. Vas a construir un prototipo HTML funcional, de un solo archivo, para una demo de la extensión web SELLO. El prototipo debe verse y comportarse como un producto real de gestión de recursos digitales para equipos de diseño, no como una maqueta genérica.

Contexto del producto (todo lo que esta en la memoria de este proyecto)

SELLO permite que un equipo de diseño sella (certifica, marca con fecha, versión y responsable) sus documentos existentes, los conecta con sus fuentes (SharePoint, Google Drive, Figma) y luego los encuentra y reutiliza sin buscar carpeta por carpeta. Es una extensión web que se instala desde la tienda de aplicaciones.

Protagonista del relato de la demo: Jairo "El Confiado", diseñador de un equipo mediano que pierde tiempo buscando la versión correcta de un recurso. Úsalo en los datos de ejemplo y en el microcopy cuando encaje de forma natural, sin convertir la demo en una historia de caricatura.

Flujo completo a mostrar (como si alguien entrara por primera vez)

Ficha en la tienda de aplicaciones: página tipo Play Store con ícono, capturas simuladas, calificaciones, descripción breve, permisos solicitados y botón "Instalar". Al instalar, pantalla de progreso corta.

Registro: nombre, correo corporativo, equipo y rol. Validación real de campos (formato de correo, contraseña con requisitos visibles).

Inicio de sesión: formulario limpio, opción de recuperar contraseña y acceso con cuenta corporativa.

Primera configuración / conexión de fuentes: tarjetas para SharePoint, Google Drive y Figma. Cada una tiene un botón "Conectar" que abre un modal simulado de autorización (qué permisos pide, qué cuenta usar), y al aceptar cambia a estado "Conectado" con fecha y número de archivos detectados. Después de conectar, una barra de progreso muestra el escaneo de documentos.

Sellado de documentos existentes: lista de archivos detectados por fuente. El usuario selecciona uno o varios, elige el tipo de sello (Aprobado, En revisión, Versión vigente, Obsoleto), completa responsable y vigencia, y ve una vista previa del documento con el sello aplicado. Al confirmar, el archivo aparece con su sello en la lista.

Búsqueda y hallazgo: buscador con filtros por fuente, tipo de sello, responsable y fecha. Resultados con vista previa, indicador de sello vigente y acción "Abrir en la fuente original".

Panel principal: resumen con documentos sellados, documentos sin sello, fuentes conectadas y últimas actividades.

Debe existir un modo "Recorrido guiado" (un panel lateral pequeño con los pasos del flujo y un botón "Siguiente") y, además, navegación libre entre pantallas para quien quiera explorar. Cada paso del recorrido debe llevar a la pantalla correspondiente y resaltar el elemento clave.

Identidad visual (respeta estas decisiones)

Paleta: violeta oficial de la marca como color principal: [pegar código hex exacto]. Un color de apoyo para estados (éxito, alerta, obsoleto): [hex]. Fondos neutros cálidos o grises muy claros; nada de azul como color dominante.

Logo: [en la memoria del proyecto]. Úsalo tal cual, sin rediseñarlo.

Tipografía: [familia]. Si no hay una definida, usa una sans-serif sobria del sistema o de Google Fonts, con jerarquía clara y pocos pesos.

Referencia de layout: sigue los wireframes adjuntos ([en la memoria del proyecto]) y el flujograma para el orden de pantallas. Si una pantalla del wireframe no se entiende, propón la solución más simple y dilo en un comentario dentro del código.

Cómo evitar el aspecto de "hecho con IA"

Nada de degradados morado-azul, glassmorphism, fondos con blobs ni sombras difuminadas exageradas.

Nada de emojis como íconos ni de íconos genéricos decorativos. Usa un set de íconos lineales consistente (por ejemplo, Lucide en SVG en línea).

Bordes de radio moderados y uniformes (6–8 px). No todo debe ser una tarjeta con sombra.

Textos reales de producto en español peruano neutro, con tono directo y sin frases de bienvenida genéricas tipo "¡Bienvenido a tu nueva experiencia!". Botones con verbos concretos: "Conectar SharePoint", "Aplicar sello", "Abrir en Figma".

Datos de ejemplo verosímiles y no redondos: nombres de archivo reales de un equipo de diseño (por ejemplo "Guia_tono_v3_final_JS.docx", "Kit_botones_2026-09.fig"), fechas recientes, cifras no simétricas (127 archivos, no 100).

Estados vacíos, mensajes de error y cargas que sí existen en un producto real (sin resultados para "logo 2024", error de conexión caducada, sesión expirada).

Microinteracciones sobrias: transición corta de 150–200 ms, sin rebotes ni animaciones llamativas.

Sin texto lorem ipsum en ningún lado.

Sin comentarios ni menciones a IA, a Claude, ni a "prototipo generado" en la interfaz.

Requisitos técnicos

Estado guardado en memoria o en localStorage para que el registro, la conexión y los sellos persistan durante la demo. Incluye un botón "Reiniciar demo" discreto en el pie.

Responsive: versión de escritorio como prioridad y que no se rompa en móvil.

Accesibilidad básica: contraste suficiente, foco visible, etiquetas en formularios, navegación con teclado en los modales.

todas las conexiones son simuladas y deben parecer reales en la interfaz.

Entregable

Entrega el prototipo completo listo para abrir

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://seal-and-find.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cc98668a-e071-4500-b038-519182da0c25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

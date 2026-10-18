# De Moda KissOdel — Coleção Pijamas Femininos (Proposta 2026)

Sitio web de una sola página, **100% vanilla** (HTML + CSS + JavaScript, sin
frameworks ni dependencias — solo Google Fonts). Pensado para ser fácil de editar
y de publicar en GitHub Pages, Netlify o Vercel.

> **Sitio TRILINGÜE:** incluye un selector de idioma en la cabecera con
> **PT-BR · ES · EN**. El idioma por defecto es **Portugués (PT-BR)** por ser
> para cliente de Brasil. Al pulsar un idioma, toda la página se vuelve a
> construir en ese idioma al instante (sin recargar).

---

## 1. Estructura de archivos

```
demodakissodel-pijamas/
├── index.html          ← esqueleto de la página (carga CSS + JS)
├── css/
│   └── style.css       ← todos los estilos y los design tokens (colores, fuentes)
├── js/
│   ├── data.js         ← ÚNICA FUENTE DE VERDAD: aquí editas TODO el contenido
│   └── main.js         ← lógica que construye la página a partir de data.js
└── assets/
    └── hero.webp       ← imagen principal (hero) usada en varias páginas
```

---

## 2. Cómo editar el contenido

Todo el texto, precios, modelos, tecidos, estampas y datos de contacto viven en
**`js/data.js`** dentro del objeto `CONTENT`, que está **separado por idioma**:
`CONTENT.pt` (PT-BR), `CONTENT.es` (ES) y `CONTENT.en` (EN). Los tres bloques
tienen **exactamente las mismas claves** — para cambiar un texto, edita la clave
dentro del idioma correspondiente. No necesitas tocar `main.js` ni el HTML: solo
edita `data.js` y recarga la página.

- El idioma por defecto se define en la constante `DEFAULT_LANG` (arriba de `data.js`).
- Los idiomas del selector se listan en `LANGS` (código + etiqueta del botón).

Ejemplos (recuerda repetir el cambio en los 3 idiomas si aplica):
- Cambiar precios → sección `investment.pacotes` (en cada idioma: `CONTENT.pt.investment`, etc.).
- Cambiar modelos → sección `models.lista`.
- Cambiar colores de marca → variables `--burgundy`, `--gold`, etc. en
  `css/style.css` (bloque `:root`).
- Cambiar la imagen hero → reemplaza `assets/hero.webp` por otra con el mismo
  nombre (o actualiza la constante `HERO` en `js/main.js`).

---

## 3. Ver la página en tu computadora

Como el sitio usa archivos separados (`js/`, `css/`), algunos navegadores
bloquean cargarlos con doble clic directo (`file://`). Usa un servidor local
simple:

```bash
# dentro de la carpeta demodakissodel-pijamas/
python3 -m http.server 8000
```
Luego abre: http://localhost:8000

(Si abres `index.html` con doble clic y no carga, es por esa restricción del
navegador — usa el servidor local o publícalo online, abajo.)

---

## 4. Publicar GRATIS en GitHub Pages

1. Crea un repositorio en https://github.com (ej. `demodakissodel-pijamas`).
2. Sube **todo el contenido de la carpeta** (index.html, css/, js/, assets/).
3. Entra en **Settings → Pages**.
4. En **Source** elige la rama `main` y carpeta `/ (root)`. Guarda.
5. En 1-2 minutos tendrás tu enlace público:
   `https://TU-USUARIO.github.io/demodakissodel-pijamas/`

> Las rutas ya son relativas (`./css/`, `./js/`, `./assets/`), así que funciona
> en GitHub Pages sin ajustes.

---

## 5. Publicar en Netlify (arrastrar y soltar)

1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta completa `demodakissodel-pijamas`.
3. Obtienes un enlace público en segundos.

---

## Notas

- No requiere Node, npm ni compilación: es estático puro.
- Los comentarios del código (`main.js` y `data.js`) están en español.
- El contenido se muestra en PT-BR por defecto; el selector permite ES e EN.
- Para añadir o quitar un idioma: edita `LANGS` y el objeto `CONTENT` en `js/data.js`.

© 2026 De Moda KissOdel Studio — Los Frailes, Santo Domingo, República Dominicana

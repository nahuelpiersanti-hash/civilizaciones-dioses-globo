# Civilizaciones y los Dioses — Globo 3D

Globo terráqueo 3D interactivo (Three.js) que recorre ~5000 años de historia religiosa y
política, cruzando civilizaciones (Sumeria, Egipto, Levante, Grecia, Persia, India, China,
Mesoamérica, Andes, Europa, Árabes, Mongoles, Otomanos) sobre una línea de tiempo con slider
y play automático. Cada evento tiene tres "capas" de lectura: base académica, relato
narrativo, e interpretación personal.

Es un archivo HTML autocontenido (sin build, sin dependencias locales) que carga Three.js,
D3 y topojson-client desde CDN.

## Ver en vivo

https://mundo.fulcrocore.com (desplegado como Cloudflare Worker sirviendo `index.html` directo)

## Correr localmente

Abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
python3 -m http.server 8080
```

## Estructura

Todo vive en `index.html`:
- CSS de sidebar, barra de tiempo, tarjetas holográficas y media queries responsive.
- `CIVS` / `EVENTS`: datos de civilizaciones y eventos (año, ubicación, lat/lon, capas de texto).
- `TERRITORIES`: manchas de territorio aproximadas por civilización a lo largo del tiempo.
- Escena Three.js: esfera con shader día/noche, atmósfera fresnel, contornos vía topojson,
  marcadores por evento, interacción touch/mouse (drag para rotar, pinch/wheel para zoom).

## Notas

Las reconstrucciones geográficas (retroceso del Golfo Pérsico, manchas de territorio) son
estilizadas, no mediciones arqueológicas exactas — están documentadas como tales en el propio
código y en la UI.

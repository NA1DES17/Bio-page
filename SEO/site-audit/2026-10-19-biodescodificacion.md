# Site Audit + SEO Competitivo: Biodescodificación / Biodecodificación (Argentina)

**Fecha**: 19 octubre 2026
**Sitio auditado**: Alma en Calma (`src/` de Bio-page, Astro) + estado real de `almaencalma.com.ar`
**Mercado**: Argentina (es-AR), sesiones online de biodescodificación
**Objetivo**: mapear búsquedas de usuarios, competidores argentinos, canales de contratación de sesiones y definir qué puntos fortalecer en la web
**Insumos**: investigación previa (`SEO/keyword-research`, `SEO/competitor-analysis`, `SEO/content-gap-analysis` de mayo 2026), autocompletado real de Google (es-AR), SERPs actuales, código fuente del sitio y dominio en vivo

---

## 1. Resumen ejecutivo

1. **La web del proyecto aún no está publicada en su dominio.** `almaencalma.com.ar` hoy sirve un sitio distinto (SPA React de "acompañamiento holístico en Ushuaia"), no el sitio Astro de este repo. Además, el código mezcla dos dominios: `astro.config.mjs` usa `sereneroots.com.ar` y `src/config/site.ts` usa `almaencalma.com.ar`.
2. **Hay 6 fallas técnicas críticas** que anulan trabajo de SEO hecho: `og:image` rota en todas las páginas, preloads de fuentes inexistentes, favicon PNG inexistente, footer con 3 enlaces legales que dan 404, formulario de contacto que no envía nada y WhatsApp con teléfono placeholder.
3. **No hay ninguna medición** (ni Google Analytics ni Search Console) → es imposible evaluar posiciones o conversiones.
4. **Las búsquedas reales de usuarios son mayormente por síntoma** ("biodescodificación ojo derecho", "dolor de espalda", "ansiedad", "diabetes"), **y transaccionales con precio** ("sesiones de biodescodificación precio", "biodescodificación online argentina"). El sitio cubre ansiedad, pero no precio, no síntomas y no la variante argentina "biodecodificación".
5. **Los competidores argentinos que rankean** (agusbiocoach.com.ar, walteriace.com, reikiurbano.com) convierten con tres cosas que a este sitio le faltan: **precios visibles en pesos/dólares, agendado directo (Calendly/WhatsApp precargado) y reseñas de Google Maps**.
6. **Falta contenido planificado y de alto valor**: landing local "biodescodificación Argentina/Buenos Aires" (KD 12, sin competencia), "¿cuántas sesiones se necesitan?" (pregunta del autocompletado), comparativa "vs psicología", y el blog está huérfano (no aparece en header ni footer) con solo 2 de los 16 artículos planificados.

---

## 2. Terminología: ¿Biodescodificación o Biodecodificación?

Evidencia (autocompletado Google es-AR, DeCS/BVS, competidores argentinos):

| Término | Evidencia | Recomendación |
|---|---|---|
| **biodescodificación** | Término preferido en DeCS/BVS (descriptor MT3.795.124), mayoría de competidores y de los informes previos | **Término principal** en títulos, H1, URLs |
| **biodecodificación** (sin "s") | Autocompletado propio con tráfico real (biodecodificacion dientes / rodilla izquierda / dolor de espalda / diabetes / riñones / infección urinaria). Lo usa la "Escuela Argentina de Biodecodificación" citada en las credenciales del sitio | Mencionar 1–2 veces en texto y H2 de las páginas pilar (sin forzar) para capturar la variante argentina |
| **descodificación biológica** | Autocompletado dominado por PDFs/libros (Christian Fleche, "de las enfermedades pdf") | Usar como sinónimo en la página "qué es" y en FAQ |
| **bioneuroemoción** | Término de marca de Enric Corbera; ya hay FAQ propia | Mantener como contenido comparativo |

**Gap concreto**: el sitio solo optimiza "biodescodificación". Ninguna página captura "biodecodificación" (variante con volumen visible en Argentina) ni "descodificación biológica".

---

## 3. Búsquedas comunes de usuarios (agrupadas por intención)

Fuente: informe de keywords (mayo 2026) + autocompletado real de Google Argentina (octubre 2026).

### 3.1 Por síntoma u órgano (la intención más fuerte y la menos atendida por el sitio)

Autocompletado observado hoy:

| Sintagma | Ejemplos reales del autocompletado |
|---|---|
| Ojos | biodescodificación ojo derecho, ojo izquierdo |
| Aparato locomotor | dolor de espalda lado derecho, rodilla izquierda, rodilla derecha |
| Metabólico/enfermedades | obesidad, diabetes, fibromialgia |
| Ansiedad | biodescodificación ansiedad ✔️ (ya cubierto en `/biodescodificacion/ansiedad/`) |
| Otros | dientes, riñones, infección urinaria, intestinos |

→ Patrón de contenido que ya usan competidores (biodescodifica.net indexa una página por síntoma). **Decisión estratégica**: alto volumen pero también alto riesgo YMYL (ver §6).

### 3.2 Informativas (construcción de autoridad)

- qué es biodescodificación (2.400), biodescodificación para qué sirve (880), biodescodificación significado (1.200), cómo funciona (880), biodescodificación beneficios (650), biodescodificación funciona (480), biodescodificación base científica / mitos
- Autocompletado: "diccionario", "pdf", "libro" → intención de descarga, baja conversión

### 3.3 Transaccionales / de contratación (las que facturan)

Autocompletado real verificado:

| Query | Señal |
|---|---|
| sesiones de biodescodificación (720) | base |
| sesiones de biodescodificación **precio** | el usuario compara valor antes de reservar |
| **cuántas sesiones de biodescodificación se necesitan** | duda de compra; el sitio NO la responde (gap) |
| biodescodificación online (880) / online argentina / sesión online / terapia biodescodificación online | modalidad + país |
| biodescodificación precio / sesión de biodescodificación precio | el sitio no tiene página ni copy de precios explícito en title/description |

### 3.4 De formación (no tu negocio, pero sí tráfico y backlinks)

curso/diplomado/escuela de biodescodificación argentina, curso online gratis — dominado por escuelas (IACE, ESEP, Sentir Salud).

---

## 4. Competidores en Argentina

### 4.1 Directos (ofrecen sesiones y rankean para queries comerciales argentinas)

| Competidor | URL / sede | Modelo y precios | Fortalezas | Debilidades explotables |
|---|---|---|---|---|
| **Agus Biocoach** | agusbiocoach.com.ar — CABA (Saavedra) + online | Sesiones bio + constelaciones, presencial y online | **#1 orgánico** en "biodescodificación sesiones" y "Buenos Aires"; reseñas de Google Maps embebidas; CTA "Quiero un turno" | Página densa, poco contenido educativo, sin blog fuerte |
| **Walter IACE** | walteriace.com — CABA | Sesión USD 60 (antes 90) ≈ $100.000 ARS; proceso 4 sesiones USD 216; **Calendly + Hotmart** | Landing de servicio modelo, precios y comparativas USD/ARS, garantía, formación de nicho | Enfocado a venta de formación; copy agresivo de descuentos |
| **Mariano Blumenfeld** | reikiurbano.com — Villa Urquiza, CABA | **AR$12.000 online / AR$18.000 presencial / USD 40** | Precios claros y en pesos; responde "cuántas sesiones" y "cuánto vale"; compatible con tratamiento médico bien explicitado | SEO viejo, página larga, sin schema |
| **Carolina Diana** | carolinadiana.com | Sesión biodescodificación **$90.000 ARS**, reiki $35.000, integral $115.000 | Precios visibles, venta por WhatsApp, combinación de servicios | Contenido thin, sin localía |
| **Sandra Villarruel** | sandravillarruelbio.com.ar | Cursos + sesiones + testimonios + prensa | Prueba social (TV, reseñas), formulario con países | Diseño anticuado, counters en "0", débil SEO on-page |
| **PsicoCarpeDiem / Centro Bio. Psicología Holística** | psicocarpediem.com.ar, psicologiaholistica.com.ar — Caballito | Consultorio + online | Rankean en queries locales por antigüedad y contenido | Textos confusos/desactualizados, sin conversión |
| **Sentirse Amada** | sentirseamada.com | USD 40/50 (PayPal), online para todo el país | Página de servicio clara, garantía, disclaimers | Sin blog/localía |
| **Roma Domínguez** | romadominguez.com — WhatsApp +549 261 (Córdoba) | Sesiones online, masterclasses | **WhatsApp con mensaje precargado "quiero agendar y pagar en pesos"** | Formularios de suscripción, no agenda automática |
| **Tavo Portillo** | tavoportillo.com | USD 180, "Reserva tu sesión" repetido | Landing de conversión pura, grabación de sesión como valor | Precio alto, sin audiencia local |

### 4.2 Directorios y agregadores (capturan la contratación ajena)

- **tuterapia.com.ar/psicologos/biodescodificacion** — rankea para "psicólogos biodescodificación" por provincia (CABA, Córdoba, Mendoza…)
- **psicologiaymente.com** — fichas con dirección real (ej.: Yenni Payeski, Zapiola 2076 CABA)
- **Doctoralia** — clínicas de biodescodificación con reserva de cita

→ **Insight de contratación**: parte del usuario que "contrata sesiones" no va a tu web directa: va al directorio o a Google Maps. Estar en directorios + Google Business Profile es parte de la estrategia, no solo el SEO on-site.

### 4.3 Indirectos (dominan lo informativo a nivel hispanohablante)

Enric Corbera Institute (Bioneuroemoción®), Instituto Ángeles Wolder, NoeBo, biodescodifica.net (SEO por síntoma), biodescodificacion.net, escuchabiologica.com. No compiten en "Argentina" ni en precio local, pero sí en "qué es / para qué sirve".

---

## 5. Contrataciones de sesiones: cómo se compra realmente

| Señal | Evidencia en el mercado | Estado en Alma en Calma |
|---|---|---|
| **Canal #1: WhatsApp con texto precargado** | romadominguez.com ("agendar y pagar en pesos"), agusbiocoach, carolinadiana, tavoportillo | Botón wa.me existe pero con **teléfono placeholder `+5491123456789`** → el canal real está roto |
| **Agenda automática (Calendly)** | walteriace.com ("agendás vía Calendly post-pago") | No hay; el CTA lleva a `/contacto` (paso extra) |
| **Checkout (Hotmart / Mercado Pago / PayPal / transferencia)** | walteriace (Hotmart), sentirseamada (PayPal), FAQ propia menciona Mercado Pago y transferencia | Precio visible (USD 45 / USD 120), pero **sin medio de pago mostrado en la página de sesiones** (solo en FAQ) |
| **Precio visible = filtro de entrada** | Todos los competidores directos muestran precio; en AR los locales cotizan en pesos (AR$12.000–$100.000) y los online en USD (40–60) | Precio en USD sí está en `/sesiones-online/` pero **sin equivalente en ARS** y sin mención de "precio" en titles/descriptions |
| **Prueba social = Google Maps reviews** | agusbiocoach embebe reseñas de Google; psicologiaymente muestra dirección | Testimonios genéricos en home ("Carolina M.", "Andrés P.") sin fuente verificable, sin schema de Review |
| **Dudas de compra que bloquean** | "¿cuántas sesiones se necesitan?", "¿reemplaza a la medicina?", "¿cómo pago?" | FAQ cubre duración y pago; **no cubre "cuántas sesiones"** (autocompletado) ni política de cancelación |
| **Fricción idioma/país** | Argentina: pesos vs dólares; "pagar en pesos" es copy de venta | Todo en USD; sin opción ARS |

**Conclusión de embudo**: el recorrido típico es SERP → página de servicio con precio → WhatsApp/Calendly → pago. Hoy el sitio entra en ese embudo por la puerta (hay landing de sesiones con precio y FAQ), pero la **última milla está cortada**: teléfono placeholder, formulario `action="#"` sin backend y sin agenda.

---

## 6. Diagnóstico del sitio: qué está bien y qué fortalecer

### 6.1 Fortalezas (mantener)

- Arquitectura estática Astro (rápida, indexable), `trailingSlash` y formato directorio consistentes, canonical por página, `lang="es"`.
- Schema: LocalBusiness en todas las páginas, BreadcrumbList, FAQPage en home/sesiones/qué-es, Service en sesiones, Article en páginas pilar.
- Contenido alineado a los quick wins del research: `/biodescodificacion/que-es/` (pilar), `/biodescodificacion/ansiedad/` (gap total detectado), `/sesiones-online/` (transaccional).
- Aclaratorias de "no reemplaza la medicina" en FAQ y copy → base correcta para un tema YMYL.
- Sitemap (`@astrojs/sitemap`) + robots.txt con URL de sitemap.

### 6.2 Puntos a fortalecer (priorizados)

#### 🔴 P0 — Bloqueantes (sin esto el SEO no puede funcionar)

| # | Hallazgo | Evidencia | Acción |
|---|---|---|---|
| 1 | **Dominios en conflicto**: sitemap generado con `sereneroots.com.ar`, canonicals/OG/robots con `almaencalma.com.ar` | `astro.config.mjs:7` vs `src/config/site.ts:6` (package.json también dice "serene-roots") | Elegir dominio canónico y unificar las tres referencias + redirigir el otro dominio |
| 2 | **El dominio vivo muestra otro sitio**: SPA React "terapias holísticas en Ushuaia", `og:url` → `alma-en-calma.vercel.app`, sin contenido SSR (`<div id="root">`) | fetch de `https://almaencalma.com.ar` | Desplegar el sitio Astro en el dominio correcto; si el sitio viejo tenía indexación, mapear redirecciones 301 |
| 3 | **`og:image` rota en todas las páginas**: `SITE.defaultOgImage = '/og/default.jpg'` y `public/og/` está vacío | `site.ts:13`, `public/og/` sin archivos | Crear 1200×630 y subirla; verificar share cards en WhatsApp/Facebook/X |
| 4 | **Recursos 404**: preloads de `/fonts/manrope-variable.woff2` y `/fonts/libre-caslon-text-variable.woff2` (`public/fonts/` vacío) y `/favicon.png` (no existe) | `HeadSEO.astro:77-89` | Quitar preloads o subir fuentes; usar solo favicon.ico/svg |
| 5 | **Contacto inexistente**: teléfono/WhatsApp `+5491123456789` (placeholder) y formulario `action="#"` (no envía) | `site.ts:12`, `ContactSection.astro:48` | Poner número real + backend de formulario (o reemplazar por WhatsApp/Calendly) |
| 6 | **Enlaces legales rotos**: footer apunta a `/aviso-legal/`, `/privacidad/`, `/cookies/` que no existen (404) | `navigation.ts:36-40`, no hay páginas en `src/pages/` | Crear las 3 páginas legales (también refuerza confianza/YMYL) |
| 7 | **Cero medición**: sin GA4, sin Google Search Console, sin verificación de dominio | grep sin resultados en `src/` | Instalar GA4 + GSC (etiqueta o DNS) antes de publicar |

#### 🟠 P1 — Contenido y conversión (30–60 días)

| # | Hallazgo | Evidencia | Acción |
|---|---|---|---|
| 8 | **Falta la landing local de mayor oportunidad**: "biodescodificación Argentina" (320 búsqu., KD 12) y "Buenos Aires" (260, KD 10) no tienen página | `content-gap-analysis` y SERP actual: solo directorios y agusbiocoach | Crear `/biodescodificacion-argentina/` (o `/sesiones-presenciales/` si aplica) con schema LocalBusiness/Service |
| 9 | **No se responde "cuántas sesiones de biodescodificación se necesitan"** (autocompletado) ni "sesiones de biodescodificación precio" | Autocompletado es-AR; FAQ actual solo dice duración | Nueva FAQ + sección en `/sesiones-online/` con "¿Cuántas sesiones necesitás?", política de cancelación y precios en ARS/USD |
| 10 | **Blog huérfano**: no está en header ni footer; solo 2 artículos vs 16 planificados | `navigation.ts`, `src/content/blog/` | Agregar "Blog" a nav y footer; publicar según calendario (pilares primero) |
| 11 | **Falta "biodescodificación vs psicología"** como página (hoy es solo una FAQ de 3 líneas) | `content.ts` FAQS_HOME | Página comparativa con tabla (ya identificada como alto valor en keyword-research) |
| 12 | **Variante "biodecodificación" no capturada** | §2 de este informe | Mencionar la variante en pilar "qué es" + alguna H2 |
| 13 | **Posts de blog sin schema de artículo** y autoría inconsistente: los posts firman "Mariana" pero la practicante es Melisa Solange Faria | `blog/[slug].astro` (no pasa schema), `content.config.ts:12`, `about.ts` | Unificar autoría real + BlogPosting/Article schema con author Person |
| 14 | **CTA de reserva con paso intermedio**: desde `/sesiones-online/` "Reservar sesión" va a `/contacto` | `sesiones-online.astro:70-75` | WhatsApp precargado o agenda (Calendly) directo desde la card de precio |

#### 🟡 P2 — Autoridad, E-E-A-T y datos estructurados (60–90 días)

| # | Hallazgo | Por qué importa | Acción |
|---|---|---|---|
| 15 | **E-E-A-T débil en tema de salud (YMYL)**: testimonios genéricos sin fuente, credenciales sin institución verificable en la página, sin schema `Person`, autoría "Mariana" inexistente | Google evalúa expertise/experience en temas de salud; además reduce el riesgo de que el contenido se lea como promesa curativa | Página "Sobre mí" con formación real y enlaces, schema Person, testimonios reales con nombre y/o embeber reseñas de Google Maps (solo si son genuinas: Google penaliza reseñas fabricadas) |
| 16 | **Afirmaciones fuertes sin matizar** ("todo síntoma físico tiene un origen emocional", FAQ "¿Tiene base científica?" atribuye respaldo a psiconeuroinmunología/epigenética) | Riesgo de política de desinformación en salud y de culpabilizar al usuario (perspectiva crítica recogida en `AGENTS.md`) | Reformular como "propuesta del enfoque…", mantener visible el "complementa, no reemplaza" en cada página de síntoma, citar fuentes |
| 17 | **LocalBusiness incompleto** (sin address/geo/hours) y sin Google Business Profile | El pack de Maps es el canal de contratación local real | Completar schema (incluso como negocio de área de servicio online) y crear/optimizar ficha de Google Business Profile con reseñas |
| 18 | Sin contenido por síntoma (ojo, espalda, dientes, obesidad…) donde está el mayor volumen del autocompletado | Es donde compiten biodescodifica.net y blogs similares | Decidir alcance: guía única "síntomas y biodescodificación" (recomendado, más seguro) vs. una landing por síntoma |
| 19 | `lastmod` idéntico para todo el sitemap; og:image y twitter:image sin imagen propia por post | Señales de frescura y shares | `lastmod` por post (`updatedDate` ya existe en el content schema) |
| 20 | Poca interlinking temático (footer sin blog/FAQ hub; que-es ↔ ansiedad ↔ sesiones solo por CTAs | Reparto de autoridad interna y descubrimiento de Google | Enlaces contextuales en el cuerpo de los pilar y "guías relacionadas" al final de cada post |

### 6.3 Verificación por build de producción (ejecutado el 19/10/2026)

Se corrió `npm run build` (Astro 6, sale OK: 10 páginas) y se auditaron los artefactos de `dist/` para confirmar los hallazgos:

| Afirmación | Evidencia en `dist/` | Estado |
|---|---|---|
| Conflicto de dominio | `sitemap-index.xml` y `sitemap-0.xml` con `https://sereneroots.com.ar/…` (9 URLs), mientras `robots.txt` declara `Sitemap: https://almaencalma.com.ar/sitemap-index.xml` y todos los canonical/OG usan `almaencalma.com.ar` | ✅ **Confirmado**: Google recibiría un sitemap con dominio ajeno al canonical |
| `og:image` rota | HTML con `og:image content="https://almaencalma.com.ar/og/default.jpg"` en las 10 páginas; `dist/og/` existe pero **vacío** | ✅ Confirmado |
| Fuentes inexistentes | 2 `<link rel="preload" href="/fonts/*.woff2">` en cada página; `dist/fonts/` **vacío** (cero .woff2) | ✅ Confirmado |
| Favicon PNG inexistente | `<link rel="icon" type="image/png" href="/favicon.png">`; `dist/` solo tiene `favicon.ico` y `favicon.svg` | ✅ Confirmado |
| Enlaces legales rotos | Footer con `/aviso-legal`, `/privacidad`, `/cookies`; el build genera 10 páginas y **ninguna legal** | ✅ Confirmado |
| WhatsApp placeholder | `href="https://wa.me/5491123456789?text=…"` en `/contacto/` y en secciones de contacto | ✅ Confirmado |
| `lastmod` idéntico | Las 9 URLs del sitemap comparten el mismo timestamp (`2026-10-20T01:31:26Z`) | ✅ Confirmado |
| CTA de reserva con paso extra | El botón de `/sesiones-online/` apunta a `/contacto` | ✅ Confirmado |

### 6.4 Dos hallazgos nuevos de la verificación

| # | Hallazgo | Evidencia | Acción |
|---|---|---|---|
| 21 | **Títulos duplicados de marca**: `formatMetaTitle` siempre agrega " \| Alma en Calma", y varias páginas ya lo traen → `<title>` queda "Contacto — Alma en Calma \| Alma en Calma" o "… — Blog Alma en Calma \| Alma en Calma" | `metadata.ts:4-6` vs títulos de `contacto.astro`, `sesiones-online.astro`, `blog/[slug].astro` | Quitar la marca de los títulos que ya la incluyen o no duplicar en `formatMetaTitle`; afectaCTR y canibalización |
| 22 | **La colección `legal` existe pero está vacía y nadie la consume**: `content.config.ts` declara `legal` con loader sobre `src/content/legal` (el build avisa "No files found") y no hay ruta que la renderice | `content.config.ts:28-35`; aviso del build; no hay `src/pages/legal/` ni `src/content/legal/` | Crear el contenido **y** la ruta (resuelve a la vez el ítem #6 de P0) |

---

## 7. Benchmark rápido: Alma en Calma vs. quienes rankean hoy

| Criterio | Competidores que rankean (AR) | Alma en Calma | Veredicto |
|---|---|---|---|
| Landing de servicio con precio visible | ✅ todos | ✅ USD 45 / 120 (sin ARS) | En paridad → sumar ARS |
| Reserva directa (WhatsApp real / Calendly) | ✅ | ❌ teléfono placeholder + form roto | **Pérdida de conversiones** |
| Reseñas / prueba social verificable | ✅ Google Maps | ❌ testimonios genéricos | Brecha |
| Página local (Argentina/Buenos Aires) | ⚠️ parcial (directores, agusbiocoach) | ❌ | **Oportunidad ganable** |
| Contenido educativo con schema FAQ | ⚠️ algunos | ✅ | Ventaja parcial |
| Blog activo y enlazado | ⚠️ mixto | ❌ huérfano, 2 posts | Brecha |
| Medición (GA/GSC) | desconocido | ❌ | Brecha |
| Publicación del sitio en su dominio | ✅ | ❌ | **Bloqueante** |

---

## 8. Plan de acción recomendado

**Semana 1 (P0)**: unificar dominio → desplegar Astro en `almaencalma.com.ar` → subir `og/default.jpg` → arreglar fuentes/favicon → teléfono real + WhatsApp precargado → páginas legales → GA4 + GSC.

**Semanas 2–5 (P1)**: landing "Biodescodificación en Argentina" → FAQ "¿cuántas sesiones?" + precios ARS → artículo "biodescodificación vs psicología" → Blog en nav/footer → CTA directo a agenda → unificar autoría (Melisa) + Article schema en blog.

**Mes 2–3 (P2)**: ficha de Google Business Profile + reseñas → schema Person/Review → guía de síntomas → interlinking → primeras 3–5 fuentes de autoridad (directorios argentinos, podcasts de bienestar, colaboraciones) → revisión de copy YMYL.

---

## 9. Handoff Summary

```
AUDIT → site-audit | 2026-10-19 | Biodescodificación Argentina (Alma en Calma) — ACTUALIZADO POST-AJUSTES
DOMINIO UNIFICADO ✓: astro.config + site.ts + package.json = almaencalma.com.ar (sitemap y robots verificados en dist/)
BUILD: 13 páginas, sin warnings; sitemap con URLs propias

RESUELTO EN CÓDIGO (verificado por build):
- og:image real /og/default.jpg 1200×630 ✓ | tipografías Manrope+Libre Caslon auto-hospedadas con @font-face ✓
- favicon 404 eliminado ✓ | títulos sin marca duplicada y optimizados (keyword + Argentina) ✓
- Blog en header y footer ✓ | FAQ "cuántas sesiones" y "cuánto cuesta" (ARS+USD) con FAQPage schema ✓
- Variantes "biodecodificación"/"descodificación biológica" en pilar qué-es ✓
- Páginas legales creadas (aviso-legal, privacidad, cookies) vía colección legal + ruta [legal] ✓
- GA4 condicional listo (SITE.analytics.googleAnalyticsId, vacío) ✓
- Schema Person (sobre-mi) + Article (blog) + autoría unificada "Melisa Solange Faria" ✓
- CTA de reserva → WhatsApp directo con mensaje precargado ✓
- PRECIOS CONFIRMADOS POR EL USUARIO, unificados en PRICING (src/data/services.ts, fuente única):
  90 min · $120.000 ARS; paquete 3 sesiones $324.000 ARS (10% off). Sin USD (decisión: solo pesos).
  Home, página de sesiones y FAQ coinciden (antes contradecían: 90min/35.000 vs 60-75/45USD).
  Nota comercial: $120.000 queda arriba del mercado AR online (carolinadiana $90.000, walteriace ≈$100.000);
  el copy lo respalda con 90 min y acompañamiento — revisar si es la posición deseada

PENDIENTE (dato de usuario o fase siguiente):
- 🔴 WhatsApp real en SITE.authorPhone (placeholder +5491123456789 — NO publicar así)
- 🔴 Reemplazar el sitio vivo (SPA Ushuaia) por este build en almaencalma.com.ar
- ⚠️ CUIT/domicilio en TODOs de aviso-legal y privacidad | handle real de Instagram en sameAs
- ⚠️ GA4: pegar ID en site.ts cuando exista | GSC post-publicación
- ⚠️ Testimonios reales + reseñas Google Maps (los actuales son genéricos)
- Fase contenido: landing local Argentina, vs psicología, calendario de 16 posts, contenido por síntoma

COMPETIDORES AR: agusbiocoach (#1), walteriace (Calendly/Hotmart), reikiurbano (pesos+USD), directorios tuterapia/doctoralia
CONTRATACION: WhatsApp precargado > Calendly > form; reseñas Google Maps = prueba social decisiva
NEXT: datos faltantes del usuario → deploy → fase de contenido P1
```

---

## 10. Estado de los ajustes pre-publicación (19/10/2026, tarde)

### Resuelto esta sesión (13 puntos del P0/P1)

| Punto del informe | Qué se hizo | Verificación |
|---|---|---|
| #1–2 dominio y publicación | `astro.config.mjs`, `site.ts` y `package.json` unificados en `almaencalma.com.ar`; naming "serene-roots" eliminado | `dist/sitemap-0.xml` con URLs propias; robots consistente |
| #3 og:image | Generada `/og/default.jpg` 1200×630 con la paleta de marca (#4f653f / #f8fbf1) | Archivo presente en `dist/og/` |
| #4 fuentes y favicon | Descargadas Manrope variable + Libre Caslon Text (subset latin, woff2); `@font-face` en `global.css`; preload apunta al archivo real; link a `favicon.png` inexistente eliminado | `dist/fonts/` con 2 woff2; HTML sin referencias rotas |
| #5 contacto | CTA "Reservar sesión" de `/sesiones-online/` ahora va a WhatsApp con mensaje precargado; todo deriva de `SITE.authorPhone` (un solo lugar para cargar el número) | HTML con enlace wa.me |
| #6 legales | Creados `aviso-legal`, `privacidad` y `cookies` (colección `legal` + ruta `[legal].astro`), con disclaimer YMYL y referencia a Ley 25.326 | 3 rutas generadas; footer sin 404; sin warning de colección |
| #7 medición | Snippet GA4 condicional en `HeadSEO` (solo si hay ID en `SITE.analytics`) | No inyecta con ID vacío |
| #10 blog huérfano | "Blog" agregado a header y footer | `navigation.ts` |
| #9 FAQ de compra | Nuevas FAQ "¿Cuántas sesiones se necesitan?" y "¿Cuánto cuesta?" (con ARS y USD) | FAQPage schema en `/sesiones-online/` |
| #12 variante | Menciones de "biodecodificación" y "descodificación biológica" en el pilar "qué es" | `que-es.astro` |
| #13 autoría/schema blog | Autor unificado "Melisa Solange Faria" (posts + default del schema); Article schema en posts | HTML del blog con `"@type":"Article"` |
| #14 CTA con paso extra | Reserva directa por WhatsApp desde la tarjeta de precio | HTML |
| títulos | `formatMetaTitle` no duplica la marca; títulos optimizados: home con "Biodescodificación Online en Argentina", páginas con keyword + brand dentro de ~60 caracteres | Todos los `<title>` verificados |
| precios contradictorios | **Nuevo hallazgo**: el home decía "90 Min / 35.000 ARS" y `/sesiones-online` "60-75 min / 45 USD". Unificado en `PRICING` (fuente única) con los valores finales dados por el usuario: 90 min · $120.000 ARS; paquete 3 sesiones $324.000 ARS (10% off); sin USD. El home ahora consume los mismos datos | Home y sesiones coinciden; FAQ de precio y duración actualizadas; verificado en `dist/` |

### Fase de contenido y navegación (20/10/2026)

| Qué se hizo | Detalle | Verificación |
|---|---|---|
| **Landing local** `/biodescodificacion/argentina/` | Oportunidad #1 del análisis (320 búsquedas/mes, KD 12, sin competidor con landing). H1 "Sesiones de biodescodificación online en todo el país", precios desde `PRICING`, 5 FAQ, breadcrumbs, schema FAQPage + Service | Página generada; FAQPage y Service en JSON-LD; en sitemap |
| **Comparativa** `/biodescodificacion/vs-psicologia/` | Keyword 390+210 búsquedas/mes (KD 16/11). Tabla de 5 dimensiones (naturaleza, enfoque, formación, regulación, uso), caja YMYL honesta, 3 FAQ | Página generada; FAQPage schema; en sitemap |
| **Dropdown del nav** | Los `children` existían en `navigation.ts` pero el Navbar nunca los renderizaba. Implementado el menú desplegable (hover + focus-within en desktop, anidado en mobile) con los 4 hijos de "Biodescodificación" | Los 4 hrefs presentes en las 15 páginas |
| **Footer** | "¿Qué es?", "En Argentina" y "vs. Psicología" agregados a `FOOTER_NAV` (link equity a las páginas pilar desde todas las rutas) | HTML del footer en todas las páginas |
| **Enlaces internos** | Bloques "Seguí explorando" en `/que-es/` y `/ansiedad/`; la comparativa enlaza las 3 guías | Escaneo de las 15 páginas: 0 enlaces internos rotos |
| **FAQ científica honesta** | Respuesta de "¿Tiene base científica?" reescrita: sin respaldo de eficacia, no reconocida por la medicina convencional, úsese como complemento y no postergues tratamientos (consistente con AGENTS.md) | Presente en `dist/` |
| **Bug blog** | El índice del blog linkeaba a `/blog/undefined` (`post.slug` no existe en Astro 5). Corregido a `post.id` como la ruta `[slug]` | Links del índice resuelven a los 2 posts |
| **Header roto (corregido el 20/10)** | El desplegable no se veía y el header se veía comprimido. Causas: (1) el `<header>` tenía `overflow-x-hidden`, que recortaba el panel del dropdown; (2) el logo se renderizaba a 294px de ancho (`w-auto` sobre una imagen apaisada) y, sumado a 6 ítems + CTA, desbordaba el contenedor útil de 1040px (`container-page` = 1200px − 160px de padding). Arreglos: `overflow-x-hidden` eliminado; logo limitado por ancho (`max-w-[150px]` / `xl:max-w-[200px]`); el nav desktop pasa a `xl` (≥1280px) y la hamburguesa cubre <1280px; CTA con `shrink-0`; `ml-auto` reemplaza al `justify-between` frágil; hamburguesa sin `absolute` | Medido en Chrome emulado de 360px a 1920px: **0px de desborde en todos los anchos**; dropdown `visibility: visible`, 224×170px, cae bajo el header sin recorte; menú móvil con los 10 enlaces |

### Antes de publicar (requiere tus datos)

1. **WhatsApp real**: reemplazá el placeholder en `src/config/site.ts` (`authorPhone` y `social.whatsapp`). Mientras sea `+5491123456789`, los botones de reserva envían mensajes a un número ajeno.
2. **Instagram**: verificá que `@almaencalma` sea tu handle real (se usa en el schema `sameAs`).
3. **Datos legales**: completá CUIT y domicilio en los comentarios TODO de `aviso-legal.md` y `privacidad.md`.
4. **Publicar**: el build actual debe reemplazar al sitio vivo (SPA de Ushuaia) en `almaencalma.com.ar`; si el sitio viejo estuvo indexado, agregar redirecciones 301.
5. **Post-publicación**: dar de alta Search Console, enviar el sitemap y pegar el ID de GA4 en `SITE.analytics.googleAnalyticsId` cuando lo tengas.
6. **Testimonios**: los tres del home (Carolina M., Luciana R., Martín E.) son genéricos y el análisis los marcó como riesgo para la credibilidad (E-E-A-T). Reemplazalos por reseñas reales de clientes o de Google, o quitá la sección.

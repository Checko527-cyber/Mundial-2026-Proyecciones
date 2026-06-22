# 🚀 Guía de publicación en Vercel — Mundial 2026

Esta guía te lleva paso a paso para publicar tu fixture en Vercel (gratis, 1 millón de invocaciones/mes).

---

## PARTE 1 — Crear cuenta en Vercel

1. Entra a **https://vercel.com**
2. Haz clic en **"Sign Up"** (arriba a la derecha)
3. Elige registrarte con **GitHub**, **GitLab** o **email**
   - Lo más fácil: usar tu cuenta de **GitHub** (si no tienes, créala gratis en github.com)
4. Acepta los permisos y confirma tu correo

---

## PARTE 2 — Subir el proyecto (opción fácil: drag & drop)

Vercel permite arrastrar la carpeta directamente, igual que Netlify.

1. Una vez dentro de tu panel de Vercel, busca el botón **"Add New..."** → **"Project"**
2. Si te pide conectar un repositorio de GitHub, busca abajo la opción **"Deploy"** o el enlace pequeño que dice **"Import Third-Party Git Repository"** — pero NO la necesitas
3. **MÉTODO MÁS SIMPLE — Vercel CLI o drag & drop:**

### Opción A: Arrastrar (más simple)
   - Descomprime el archivo `mundial2026-vercel.zip` en tu computador
   - Ve a **https://vercel.com/new**
   - Arrastra la **carpeta completa** `mundial2026-vercel` a la zona de carga
   - Vercel detecta automáticamente la configuración

### Opción B: Con GitHub (recomendado para actualizaciones futuras)
   - Sube la carpeta a un repositorio nuevo de GitHub
   - En Vercel: "Add New" → "Project" → selecciona el repositorio
   - Clic en **"Deploy"**

4. Espera 1-2 minutos mientras Vercel construye el sitio
5. ¡Listo! Te dará una URL como `https://mundial2026-tunombre.vercel.app`

---

## PARTE 3 — (Opcional) Activar partidos EN VIVO

El botón LIVE funciona sin configuración para resultados finales (vía openfootball).
Para ver partidos **en curso minuto a minuto**, necesitas una API key gratis de API-Football:

1. Entra a **https://www.api-football.com/**
2. Crea una cuenta gratis (plan "Free": 100 requests/día)
3. Copia tu **API Key** del dashboard
4. En Vercel, ve a tu proyecto → **Settings** → **Environment Variables**
5. Agrega una variable:
   - **Name:** `API_FOOTBALL_KEY`
   - **Value:** (pega tu API key)
   - **Environment:** marca las tres (Production, Preview, Development)
6. Clic en **"Save"**
7. Ve a **Deployments** → en el último deploy haz clic en los tres puntos → **"Redeploy"**

> Sin esta key, el botón LIVE igual funciona para resultados de partidos terminados.

---

## PARTE 4 — Actualizar el sitio en el futuro

### Si usaste drag & drop:
- Ve a **https://vercel.com/new** y arrastra la carpeta actualizada de nuevo

### Si usaste GitHub:
- Solo haz `git push` y Vercel redespliega automáticamente

---

## ⚡ Consumo y límites (plan gratis Hobby)

| Recurso | Límite gratis | Tu uso estimado |
|---|---|---|
| Invocaciones de función | 1,000,000/mes | Muy por debajo |
| Ancho de banda | 100 GB/mes | Mínimo |
| Builds | 6,000 min/mes | Insignificante |

**Optimizaciones ya incluidas en tu fixture:**
- ✅ Auto-refresh eliminado (solo actualiza al presionar LIVE)
- ✅ Caché de 3 minutos en el navegador (evita llamadas repetidas)
- ✅ Cache headers en `vercel.json` (respuestas compartidas entre visitantes)

Con esto es prácticamente imposible que agotes el plan gratis de Vercel.

---

## ❓ Problemas comunes

**"El botón LIVE no marca partidos en vivo"**
→ Necesitas configurar `API_FOOTBALL_KEY` (Parte 3). Sin ella solo funcionan resultados finales.

**"Error 404 en /api/scores"**
→ Verifica que la carpeta `api/` con `scores.js` esté en la raíz del proyecto.

**"El sitio no actualiza resultados"**
→ Espera 3 minutos (caché) o borra el caché del navegador. Los resultados vienen de openfootball que se actualiza periódicamente.

---

## 📁 Estructura del proyecto

```
mundial2026-vercel/
├── index.html          ← El fixture completo
├── vercel.json         ← Configuración de Vercel
└── api/
    └── scores.js       ← Función serverless (resultados live)
```

¡Eso es todo! Tu fixture estará en línea en menos de 5 minutos.

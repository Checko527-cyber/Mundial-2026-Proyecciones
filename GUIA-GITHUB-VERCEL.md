# 🔄 Guía: Conectar GitHub + Vercel para actualizaciones automáticas

Esta guía te configura UNA SOLA VEZ para que después actualizar tu fixture
sea cuestión de segundos, conservando siempre la misma URL.

**Tiempo de configuración inicial:** ~15 minutos
**Tiempo de cada actualización futura:** ~1 minuto

---

# PARTE A — CONFIGURACIÓN INICIAL (solo una vez)

## Paso 1 — Crear cuenta en GitHub

1. Entra a **https://github.com**
2. Clic en **"Sign up"** (registrarse)
3. Usa el mismo correo que usas para Vercel (facilita la conexión después)
4. Elige un nombre de usuario y contraseña
5. Verifica tu correo

> Si ya tienes cuenta de GitHub, salta este paso.

---

## Paso 2 — Crear un repositorio nuevo

Un "repositorio" es como una carpeta en la nube donde vive tu proyecto.

1. Una vez dentro de GitHub, clic en el botón verde **"New"** (o el "+" arriba a la derecha → "New repository")
2. En **"Repository name"** escribe: `mundial2026`
3. Déjalo como **"Public"** (público) — es gratis
4. **NO marques** ninguna casilla de "Add README", "Add .gitignore" ni "license"
5. Clic en **"Create repository"**

---

## Paso 3 — Subir tus archivos a GitHub

Ahora verás una página con instrucciones. Ignóralas y usa el método visual:

1. En la página del repositorio, busca el enlace que dice **"uploading an existing file"**
   (está en el texto: "...or push an existing repository... or **uploading an existing file**")
   - Si no lo ves, ve directo a: `https://github.com/TU-USUARIO/mundial2026/upload/main`

2. **Descomprime** el `mundial2026-vercel.zip` en tu computador

3. **Arrastra TODOS los archivos** de la carpeta descomprimida a la zona de carga de GitHub:
   - `index.html`
   - `package.json`
   - `vercel.json`
   - la carpeta `api` (con `scores.js` dentro)

   > IMPORTANTE: arrastra el CONTENIDO de la carpeta, no la carpeta `mundial2026-vercel` en sí.
   > Es decir, abre la carpeta y selecciona los archivos que están adentro.

4. Espera a que suban (verás los nombres aparecer)

5. Abajo, en **"Commit changes"**, deja el mensaje por defecto y clic en **"Commit changes"**

---

## Paso 4 — Conectar Vercel con GitHub

1. Entra a **https://vercel.com** e inicia sesión
2. Clic en **"Add New..."** → **"Project"**
3. Vercel te mostrará tus repositorios de GitHub
   - Si es la primera vez, te pedirá autorizar la conexión con GitHub → acepta
   - Puede pedirte instalar "Vercel" en tu cuenta de GitHub → dale "Install"
4. Busca **`mundial2026`** en la lista y clic en **"Import"**
5. En la pantalla de configuración, **NO cambies nada** (Vercel detecta todo solo)
6. Clic en **"Deploy"**
7. Espera 1-2 minutos → ¡listo! Tendrás tu URL `.vercel.app`

> Esta vez SÍ es la URL definitiva que se mantendrá para siempre.

---

## Paso 5 — (Opcional) Configurar la API key para partidos en vivo

Si quieres ver partidos en curso minuto a minuto:

1. Crea cuenta gratis en **https://www.api-football.com/**
2. Copia tu **API Key**
3. En Vercel: tu proyecto → **Settings** → **Environment Variables**
4. Agrega: Name = `API_FOOTBALL_KEY`, Value = (tu key), marca los 3 entornos
5. **Save** → ve a Deployments → Redeploy

---

# PARTE B — ACTUALIZAR EN EL FUTURO (cada vez que haya datos nuevos)

Cuando yo te entregue un `index.html` actualizado (o cualquier archivo nuevo):

## Método visual (sin instalar nada)

1. Ve a tu repositorio: `https://github.com/TU-USUARIO/mundial2026`
2. Clic en el archivo que quieres actualizar (normalmente `index.html`)
3. Clic en el ícono del **lápiz** (✏️ "Edit this file") arriba a la derecha
4. Borra todo el contenido (Ctrl+A, luego Delete)
5. Pega el contenido nuevo del archivo actualizado
6. Abajo, clic en **"Commit changes"**
7. **Vercel se actualiza solo en ~1 minuto** — misma URL, datos nuevos

### Alternativa: reemplazar el archivo completo

1. En tu repositorio, clic en **"Add file"** → **"Upload files"**
2. Arrastra el `index.html` nuevo (reemplaza al anterior)
3. **"Commit changes"**
4. Vercel redespliega automáticamente

> Para archivos grandes como el index.html, el método de "Upload files" (arrastrar)
> suele ser más cómodo que copiar/pegar.

---

# ⚡ RESUMEN DEL FLUJO FUTURO

```
Claude te da archivo nuevo
        ↓
Subes a GitHub (arrastrar + commit)  ← 30 segundos
        ↓
Vercel detecta el cambio y redespliega solo  ← 1 minuto
        ↓
Tu URL .vercel.app muestra los datos nuevos
```

**Nunca más creas proyectos nuevos. Nunca cambias de URL.**

---

# ❓ Problemas comunes

**"No veo mis repositorios en Vercel"**
→ En Vercel, ve a Settings de tu cuenta → Integrations → asegúrate que GitHub esté conectado y que Vercel tenga permiso para ver el repo `mundial2026`.

**"Subí el archivo pero Vercel no se actualiza"**
→ Ve a tu proyecto en Vercel → pestaña "Deployments" → verifica que aparezca un deploy nuevo. Si no, revisa que hayas hecho "Commit changes" en GitHub.

**"El deploy falla"**
→ Revisa que los 4 elementos estén en el repo: index.html, package.json, vercel.json y la carpeta api/scores.js. Si falta package.json, el deploy puede mostrar warnings.

**"Quiero borrar el proyecto viejo que se creó con drag & drop"**
→ En Vercel: ese proyecto viejo → Settings → abajo "Delete Project". No afecta al nuevo conectado con GitHub.

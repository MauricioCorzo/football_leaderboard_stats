# ⚽ Football Leaderboard Stats

🚀 **Aplicación web creada con Vite y React Router 7, desplegada en Railway.**  
🔹 Permite visualizar estadísticas de jugadores y ligas con un diseño optimizado.

## 📌 Características

✅ Desarrollado con **Vite** para rendimiento optimizado.  
✅ Uso de **React Router 7** para navegación dinámica.  
✅ Desplegado en **Railway** con configuración `vite preview`.  
✅ API integrada para obtener datos de rendimiento de jugadores.

## 📜 Configuración de API-Football

Este proyecto usa la **API-Football** para obtener datos de jugadores y equipos.

### 🔹 **Obtener una API Key**

1️⃣ **Regístrate en API-Football:**  
👉 Ve a [https://www.api-football.com/](https://www.api-football.com/) y crea una cuenta.  
2️⃣ **Solicita una API Key:**  
🔹 Una vez registrado, accede al dashboard y solicita una API Key gratuita o premium.  
3️⃣ **Guarda la clave en las variables de entorno:**  
🔹 En tu proyecto, puedes guardarla en `.env` para mayor seguridad:

```.env
VITE_API_FOOTBALL_API_KEY=tu-api-key-aquí
```

## 🔗 Backend y configuración

Este proyecto utiliza un **backend ya desplegado** para facilitar el uso inmediato sin necesidad de configuraciones adicionales. El frontend se comunica con este backend a través de una API pública.

Sin embargo, si prefieres utilizar tu propio backend (por ejemplo, uno desplegado localmente o en un servidor propio mediante Docker), puedes hacerlo fácilmente configurando la siguiente variable de entorno:

```env
VITE_JSON_SERVER_PUBLIC_API=https://tuservidor.com/api
```

## 🧩 Tipado estricto con TypeScript

Este proyecto utiliza **interfaces específicas de TypeScript** para manejar los datos que provienen del backend. Esto garantiza una mayor seguridad y consistencia en el desarrollo, pero también implica que los datos servidos por la API deben seguir **estructuras bien definidas**.

### 📦 Formato esperado de los datos

Asegúrate de que tu backend devuelva los datos en el **formato exacto** esperado por el frontend. De lo contrario, podrías experimentar errores de tipado o mal funcionamiento de componentes.

Por ejemplo, si el frontend espera un objeto con esta forma:

```ts
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}
```

Entonces el backend debe devolver un JSON similar a:

```json
{
  "id": 1,
  "nombre": "Producto A",
  "precio": 99.99,
  "disponible": true
}
```

⚠️ Si modificas las interfaces en el frontend, asegúrate de actualizar también los datos en el backend para mantener la compatibilidad.

## 🚀 Instalación y uso

### 🔧 1️⃣ Clonar el repositorio

Si aún no tienes el código fuente, clónalo desde GitHub:

```bash
git clone https://github.com/MauricioCorzo/football_leaderboard_stats
cd football-leaderboard-stats
npm install
npm run dev
```

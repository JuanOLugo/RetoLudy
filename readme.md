# 🌐 Web App con React, TypeScript y Express (opcional)

Este proyecto es una aplicación web construida con **React + TypeScript + TailwindCSS** y opcionalmente se puede correr un **servidor Express** para facilitar el despliegue local.

---

## 🚀 Tecnologías Utilizadas

- [React JS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Express JS](https://expressjs.com/) _(opcional para correr localmente)_

---

## 📁 Estructura del Proyecto

````plaintext
client/
├── public/                  # Vacío
└── src/
    ├── assets/
    ├── components/
    ├── controllers/
    ├── interfaces/
    ├── pages/
    ├── routes/
    ├── app.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts

server/
├── public/
│   └── dist/                # Build del frontend
├── app.js                   # Servidor Express
└── package.json             # Configuración del servidor
````

📖 Manual de Uso
✅ Requisitos

- Tener instalado Node.js 18+ (opcional)
- ⚙️ Modo sin Node.js (desde navegador)
- Entra a la carpeta: server/public/dist
- Haz doble clic en index.html o ábrelo con tu navegador favorito.
- ⚙️ Modo con Node.js y Express
- Abre una terminal y navega a la carpeta server

```plaintext
npm install
node app.js
Accede a la app desde tu navegador: http://localhost:3000
```

🛠️ Build y Deploy del Proyecto
Este proyecto usa Vite para construir el frontend. El resultado debe moverse manual o automáticamente a server/public/dist.

🔧 Generar Build del Frontend
Desde la raíz del proyecto:

```plaintext
cd client
npm run build
````

Esto creará la carpeta dist/.

📁 Mover el Build al Servidor
En Windows:

```plaintext
xcopy /E /I /Y client\dist server\public\dist
````

En Linux/Mac:

```plaintext
cp -r client/dist/ server/public/dist/
````

🧑‍💻 Autor
Juan Ojeda

Email: juanandresojeda77@gmail.com

# Pokedurex

Una Pokédex de la primera generación hecha con React y TypeScript. Los 151 Pokémon de Kanto, sus tipos y sus sprites de Game Boy, con una interfaz retro inspirada en la consola original.

Es un proyecto académico: no hay backend ni pretensiones de producción. La idea es simple — abrir la página, ver la Pokédex y, si quieres, crear una cuenta como ejercicio.

## Qué incluye

- Los **151 Pokémon de Kanto** con número, nombre, tipos y sprite de Rojo/Azul.
- Estilo visual retro: tipografía monoespaciada, sombras duras y efecto CRT con CSS puro.
- **Login y registro opcionales** desde el header. La Pokédex se ve exactamente igual con sesión o sin ella.
- Sesión persistida en `localStorage`, así que el nombre se mantiene al recargar.
- Diseño responsive para móvil y escritorio.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Scripts

| Comando           | Qué hace                              |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR        |
| `npm run build`   | Compila TypeScript y genera `dist/`   |
| `npm run preview` | Sirve la build de producción          |
| `npm run lint`    | Revisa el código con ESLint           |

## Stack

- **React 19** con componentes funcionales y hooks.
- **TypeScript** en modo estricto.
- **Vite** como bundler y servidor de desarrollo.
- **React Router** para el enrutado.
- **CSS Modules** para los estilos, sin librerías de UI.
- **ESLint** con las reglas de React y TypeScript.

## Estructura del proyecto

```text
src/
├── componentes/
│   ├── atomos/       # Botones, campos, badges, sprites...
│   ├── moleculas/    # Tarjetas, formularios, panel de sesión...
│   └── organismos/   # Header, lista, modal de auth, footer...
├── datos/
│   └── pokemon.ts    # Los 151 Pokémon y la URL de los sprites
├── hooks/
│   └── useAuth.ts    # Registro, login y cierre de sesión
├── paginas/
│   └── PaginaPokedex.tsx
├── estilos/
│   └── global.css
├── App.tsx
└── main.tsx
```

La separación sigue el patrón átomos → moléculas → organismos: los componentes chicos no saben nada del resto y se van componiendo hacia arriba.

## Sobre el login

Al entrar se muestra directamente el home. Las opciones **Iniciar sesión** y **Registrarse** están en el header y abren un modal; puedes cerrarlo y seguir usando la Pokédex sin cuenta.

Las cuentas se guardan en el `localStorage` del navegador, en texto plano y sin ningún tipo de validación real. Es parte del ejercicio, no un sistema de autenticación: no uses contraseñas que utilices en otros sitios.

## Créditos

- Sprites obtenidos de [PokeAPI](https://pokeapi.co/).
- Pokémon y los nombres de los personajes pertenecen a Nintendo, Game Freak y Creatures Inc.
- Proyecto sin fines de lucro, hecho para practicar React y TypeScript.

# Pokedurex

Una Pokédex de la primera generación hecha con React y TypeScript. Los 151 Pokémon de Kanto, sus tipos y sus sprites de Game Boy, con una interfaz retro inspirada en la consola original.

Es un proyecto académico: no hay backend ni pretensiones de producción. La idea es simple — abrir la página, ver la Pokédex y, si quieres, crear una cuenta como ejercicio.

## Qué incluye

- Los **151 Pokémon de Kanto** con número, nombre y sprite de Rojo/Azul. Los tipos se ven en la página de detalle.
- **Página de detalle por Pokémon**: el botón **Ver** navega con React Router a `/pokemon/:numero` y muestra el sprite en grande, el número, el nombre, los tipos y una descripción. Un número fuera del rango 1–151 redirige al home.
- Estilo visual retro: tipografía monoespaciada, sombras duras y efecto CRT con CSS puro.
- **Login y registro opcionales** en `/login` y `/registro`, enlazados desde el header. La Pokédex se ve exactamente igual con sesión o sin ella.
- **Formularios controlados con `useState`** y validación propia: correo obligatorio y con formato, contraseña obligatoria de mínimo 8 caracteres y mensajes con `alert()`.
- Sesión persistida en `localStorage` y compartida por toda la app mediante un contexto de React.
- **Diseño responsive con Bootstrap 5**: grid, utilidades y componentes adaptan columnas, espaciados y alineación en móvil, tablet y escritorio.

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
- **TypeScript** con `interface` para las props de cada componente, los datos de Pokémon y el contexto de autenticación.
- **Vite** como bundler y servidor de desarrollo.
- **React Router** con las rutas `/`, `/pokemon/:numero`, `/login` y `/registro`.
- **Context API** para compartir la sesión entre páginas.
- **Bootstrap 5** (CSS) para el layout responsive, los formularios y los componentes.
- **CSS Modules** encima de Bootstrap para conservar el estilo pixel art: colores, bordes, sombras y tipografía.
- **ESLint** con las reglas de React y TypeScript.

## Estructura del proyecto

```text
src/
├── componentes/
│   ├── atomos/       # Input, botones, badges, sprites...
│   ├── moleculas/    # CampoFormulario, tarjetas, panel de sesión...
│   └── organismos/   # Layout, header, formularios, ficha, footer...
├── contextos/
│   ├── AuthProvider.tsx  # Estado global de la sesión
│   └── authContexto.ts   # Contexto, tipos y hook useAuth
├── datos/
│   ├── pokemon.ts    # Los 151 Pokémon y la URL de los sprites
│   └── descripciones.ts # Descripciones breves de cada Pokémon
├── validaciones/
│   └── auth.ts       # Reglas de nombre, correo y contraseña
├── paginas/
│   ├── PaginaPokedex.tsx
│   ├── PaginaPokemon.tsx
│   ├── Login.tsx
│   └── Registro.tsx
├── estilos/
│   └── global.css
├── App.tsx
└── main.tsx
```

La separación sigue el patrón átomos → moléculas → organismos: los componentes chicos no saben nada del resto y se van componiendo hacia arriba.

Bootstrap se importa una sola vez en `main.tsx` y se usa desde el markup: `container-xxl`, `row`, `col`, breakpoints `row-cols-*`, utilidades de espaciado y flex, `card`, `btn`, `form-control` y `badge`. No se carga el JavaScript de Bootstrap: la sesión y la navegación siguen controladas por React.

El header y el footer viven en `Layout`, una ruta contenedora con `<Outlet />`. Así el header aparece en todas las páginas y agregar una página nueva solo requiere una ruta y un componente de página.

## Rutas

| Ruta               | Página           | Descripción                                              |
| ------------------ | ---------------- | -------------------------------------------------------- |
| `/`                | `PaginaPokedex`  | Lista de los 151 Pokémon.                                |
| `/pokemon/:numero` | `PaginaPokemon`  | Detalle con descripción. `:numero` es la ruta dinámica.  |
| `/login`           | `Login`          | Inicio de sesión.                                        |
| `/registro`        | `Registro`       | Creación de cuenta.                                      |
| `*`                | —                | Redirige a `/`.                                          |

`PaginaPokemon` lee `:numero` con `useParams`, busca el Pokémon en los datos y valida que esté entre 1 y 151. Si el valor no es un entero válido, redirige al home. La misma página atiende a los 151 Pokémon, así que no hay una página de detalle distinta por cada uno. El botón **Ver** de cada tarjeta es un `Link` de React Router que apunta a `/pokemon/:numero`.

## TypeScript

El proyecto compila en modo estricto y usa `interface` para describir las formas de los datos:

- Cada componente declara `interface Props` con sus props tipadas.
- `Pokemon` incluye `nombre`, `tipos` y `descripcion`; `TipoPokemon` describe cada tipo.
- `Usuario`, `NuevoUsuario` y `AuthContextoValor` describen la sesión y el contexto.

Los estados de React también van tipados con genéricos, por ejemplo `useState('')` en los formularios y `useParams<{ numero: string }>()` en la página de detalle.

## Sobre el login

**Iniciar sesión** lleva a `/login` y **Registrarse** a `/registro`. Ambas páginas comparten el mismo layout visual y las pestañas de navegación. Si ya hay una sesión activa, esas rutas redirigen al home.

El estado de autenticación vive en `AuthProvider` y se consume con `useAuth`. Al iniciar sesión, el usuario se guarda en `localStorage`, de modo que la sesión se mantiene al navegar entre rutas y al recargar. El header muestra el nombre y el botón **Cerrar sesión** cuando hay una sesión activa.

La estructura ya deja preparado el patrón para páginas privadas: una futura `RutaProtegida` puede redirigir a `/login` guardando el destino en `location.state`, y `Login` ya lee ese destino para volver después de autenticarse.

Las cuentas se guardan en el `localStorage` del navegador, en texto plano y sin backend. Es parte del ejercicio, no un sistema de autenticación: no uses contraseñas que utilices en otros sitios.

Si tienes cuentas de prueba creadas con la validación anterior, que permitía contraseñas de 4 caracteres, la nueva regla de mínimo 8 no las dejará entrar. Vuelve a registrarte o borra la clave `pokedurexUsuarios` de `localStorage`.

## Validación de formularios

Los formularios de login y registro usan `useState` para controlar cada campo, `noValidate` para desactivar los mensajes del navegador y validaciones propias con `if`:

- Nombre obligatorio en el registro.
- Correo obligatorio y con formato válido.
- Contraseña obligatoria de al menos 8 caracteres.

Los errores de formato se muestran con `alert()`, siguiendo el patrón de la materia. Los errores de autenticación, como credenciales incorrectas o correo duplicado, se muestran inline para no mezclarlos con la validación del formulario.

## Créditos

- Sprites obtenidos de [PokeAPI](https://pokeapi.co/).
- Pokémon y los nombres de los personajes pertenecen a Nintendo, Game Freak y Creatures Inc.
- Proyecto sin fines de lucro, hecho para practicar React y TypeScript.

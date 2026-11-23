# Pokedurex

Una Pokédex de la primera generación hecha con React y TypeScript. Los 151 Pokémon de Kanto, sus tipos y sus sprites de Game Boy, con una interfaz retro inspirada en la consola original.

El registro y el inicio de sesión se apoyan en un backend Spring Boot con MySQL. La sesión usa un token JWT y cada usuario puede guardar sus Pokémon favoritos, que aparecen en el home. También hay un rol **ADMIN** con una vista global de favoritos. Es un proyecto académico, sin pretensiones de producción: la idea es abrir la página, ver la Pokédex y crear una cuenta como ejercicio.

## Qué incluye

- **Home separado** en `/`: portada ilustrada de Kanto y botón para entrar a la Pokédex.
- Los **151 Pokémon de Kanto** en `/pokedex` con número, nombre y sprite de Rojo/Azul. Los tipos se ven en la página de detalle.
- **Página de detalle por Pokémon**: el botón **Ver** navega con React Router a `/pokemon/:numero` y muestra el sprite en grande, el número, el nombre, los tipos y una descripción. Un número fuera del rango 1–151 redirige a la Pokédex. El botón **Volver a la Pokédex** regresa a `/pokedex`.
- Estilo visual retro: tipografía monoespaciada, sombras duras y efecto CRT con CSS puro.
- **Navbar de Bootstrap** con enlaces **Inicio** y **Pokédex**, accesos de sesión siempre visibles y menú hamburguesa en móvil. El estado del menú se controla con React, sin el JavaScript de Bootstrap.
- **Login y registro** en `/login` y `/registro`, enlazados desde la navbar y conectados a la API REST del backend. Las contraseñas se guardan como hash BCrypt y el login devuelve un **token JWT** con el rol del usuario. La Pokédex se ve exactamente igual con sesión o sin ella.
- **Favoritos por usuario**: cada tarjeta de la Pokédex tiene una estrella para agregar o quitar el Pokémon. Cada usuario puede guardar un **máximo de 6 favoritos**, que se muestran en el home en 6 ranuras fijas (con espacios libres cuando faltan), con contador y apodo opcional.
- **Vista de administración** en `/admin/favoritos`: un usuario con rol `ADMIN` ve los favoritos de todos los usuarios y puede eliminarlos. El registro público siempre crea usuarios `USER`; el administrador inicial se define con variables de entorno.
- **Formularios controlados con `useState`** y validación propia: nombre y correo obligatorios, correo con formato, contraseña de 8 a 72 caracteres y mensajes con `alert()`.
- **Sesión persistida en `localStorage`** como `{ token, usuario }`, compartida por toda la app mediante contextos de React. El token se valida contra `/api/auth/me` al recargar. La contraseña nunca se guarda en el navegador.
- **Rutas protegidas** con React Router: `/admin/favoritos` exige sesión y rol `ADMIN`; si no hay sesión, redirige a `/login` conservando el destino.
- **Diseño responsive con Bootstrap 5**: grid, utilidades y componentes adaptan columnas, espaciados y alineación en móvil, tablet y escritorio.

## Cómo ejecutarlo

### 1. Backend

El backend es un proyecto Maven aparte del frontend. Desde su carpeta, configura el secreto y el administrador inicial y levanta MySQL:

```bash
export JWT_SECRET='un-secreto-de-al-menos-32-caracteres'
export APP_ADMIN_EMAIL='admin@ejemplo.com'
export APP_ADMIN_PASSWORD='una-clave-segura'
docker compose up -d
./mvnw spring-boot:run
```

El backend queda en `http://localhost:8080` y Swagger en `http://localhost:8080/swagger-ui.html`.

`APP_ADMIN_EMAIL` y `APP_ADMIN_PASSWORD` son opcionales: si se definen y todavía no existe ningún usuario `ADMIN`, el arranque crea esa cuenta una sola vez. Si el correo ya pertenece a un usuario, no lo promueve automáticamente. `JWT_SECRET` debe tener al menos 32 caracteres; en desarrollo hay un valor por defecto, pero conviene definir uno propio.

Las pruebas de integración usan `MockMvc` y Testcontainers con MySQL 8.0, así que necesitan Docker:

```bash
./mvnw test
```

### 2. Frontend

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`. La URL del backend se puede cambiar con `VITE_API_URL`; hay un ejemplo en `.env.example`.

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
- **React Router** con las rutas `/`, `/pokedex`, `/pokemon/:numero`, `/login`, `/registro` y `/admin/favoritos`.
- **Context API** para compartir la sesión y los favoritos entre páginas.
- **Bootstrap 5** (CSS) para el layout responsive, los formularios y los componentes.
- **CSS Modules** encima de Bootstrap para conservar el estilo pixel art: colores, bordes, sombras y tipografía.
- **ESLint** con las reglas de React y TypeScript.
- **Spring Boot 3.5.16** con Spring Web, Spring Data JPA, Validation, Flyway, BCrypt y springdoc.
- **Spring Security** con JWT HS256, roles `USER`/`ADMIN` y contraseñas BCrypt.
- **MySQL 8.0** en Docker, con migraciones versionadas en `src/main/resources/db/migration/` del backend.
- **Testcontainers + MockMvc** para pruebas de integración del registro, login y favoritos.
- **Swagger UI** para documentar y probar los endpoints de autenticación y favoritos.

## Estructura del proyecto

El frontend y el backend son proyectos separados. Esta es la estructura del frontend:

```text
src/
├── componentes/
│   ├── atomos/       # Input, botones, badges, sprites...
│   ├── moleculas/    # CampoFormulario, tarjetas, panel de sesión...
│   └── organismos/   # Layout, header, formularios, ficha, footer...
├── contextos/
│   ├── AuthProvider.tsx      # Sesión JWT, login, registro y validación de /me
│   ├── authContexto.ts       # Contexto, tipos de usuario/rol y hook useAuth
│   ├── FavoritosProvider.tsx # Estado global de los favoritos del usuario
│   └── favoritosContexto.ts  # Tipos de favorito y hook useFavoritos
├── datos/
│   ├── pokemon.ts    # Los 151 Pokémon y la URL de los sprites
│   └── descripciones.ts # Descripciones breves de cada Pokémon
├── servicios/
│   └── api.ts        # fetch con Bearer, ErrorApi y llamadas CRUD
├── validaciones/
│   └── auth.ts       # Reglas de nombre, correo y contraseña
├── paginas/
│   ├── PaginaInicio.tsx
│   ├── PaginaPokedex.tsx
│   ├── PaginaPokemon.tsx
│   ├── AdminFavoritos.tsx
│   ├── Login.tsx
│   └── Registro.tsx
├── estilos/
│   └── global.css
├── App.tsx
└── main.tsx
```

La separación sigue el patrón átomos → moléculas → organismos: los componentes chicos no saben nada del resto y se van componiendo hacia arriba.

Bootstrap se importa una sola vez en `main.tsx` y se usa desde el markup: `navbar`, `container-xxl`, `row`, `col`, breakpoints `row-cols-*`, utilidades de espaciado y flex, `card`, `btn`, `form-control` y `badge`. No se carga el JavaScript de Bootstrap: el menú de la navbar, la sesión y la navegación siguen controlados por React.

El header, la navbar y el footer viven en `Layout`, una ruta contenedora con `<Outlet />`. Así aparecen en todas las páginas y agregar una página nueva solo requiere una ruta y un componente de página.

### Backend

El backend es un proyecto Spring Boot independiente. Esta es su estructura:

```text
docker-compose.yml        # MySQL 8.0 con volumen persistente
pom.xml
src/main/
├── java/com/pokedurex/pokeboot/
│   ├── config/           # CORS, seguridad, BCrypt, OpenAPI y admin inicial
│   ├── controller/       # AuthController y FavoriteController
│   ├── dto/              # Requests/responses de auth y favoritos
│   ├── exception/        # Errores de dominio y manejador global
│   ├── model/            # User, Role y Favorite
│   ├── repository/       # UserRepository y FavoriteRepository
│   ├── security/         # JwtService y filtro de autenticación
│   └── service/          # UserService y FavoriteService
└── resources/
    ├── application.yml
    └── db/migration/
        ├── V1__create_users_table.sql
        ├── V2__create_favorites_table.sql
        └── V3__add_role_to_users.sql
src/test/java/com/pokedurex/pokeboot/
└── FavoriteIntegrationTest.java
```

`docker-compose.yml` crea la base `poke_boot` y expone MySQL en `3306`; los datos quedan en un volumen para sobrevivir a reinicios. Flyway es la única fuente del esquema y Hibernate solo lo valida, así que los cambios de tablas se agregan como migraciones nuevas (`V4__...` en adelante) sin editar las ya aplicadas.

## Rutas

| Ruta               | Página           | Descripción                                              |
| ------------------ | ---------------- | -------------------------------------------------------- |
| `/`                | `PaginaInicio`   | Home con portada ilustrada y acceso a la Pokédex.        |
| `/pokedex`         | `PaginaPokedex`  | Lista de los 151 Pokémon.                                |
| `/pokemon/:numero` | `PaginaPokemon`  | Detalle con descripción. `:numero` es la ruta dinámica.  |
| `/login`           | `Login`          | Inicio de sesión.                                        |
| `/registro`        | `Registro`       | Creación de cuenta.                                      |
| `/admin/favoritos` | `AdminFavoritos` | Favoritos globales; requiere sesión y rol `ADMIN`.       |
| `*`                | —                | Redirige a `/`.                                          |

`PaginaPokemon` lee `:numero` con `useParams`, busca el Pokémon en los datos y valida que esté entre 1 y 151. Si el valor no es un entero válido, redirige a la Pokédex. La misma página atiende a los 151 Pokémon, así que no hay una página de detalle distinta por cada uno. El botón **Ver** de cada tarjeta es un `Link` de React Router que apunta a `/pokemon/:numero`.

## TypeScript

El proyecto compila en modo estricto y usa `interface` para describir las formas de los datos:

- Cada componente declara `interface Props` con sus props tipadas.
- `Pokemon` incluye `nombre`, `tipos` y `descripcion`; `TipoPokemon` describe cada tipo.
- `Usuario` (`{ id, name, email, role }`), `NuevoUsuario` (`{ name, email, password }`), `RespuestaAuth` (`{ token, user }`) y `AuthContextoValor` describen la sesión, el registro y el contexto.
- `Favorito` (`{ id, pokemonId, alias, createdAt }`) y `FavoritoAdmin` (con los datos del usuario) tipan las respuestas de favoritos.
- `servicios/api.ts` tipa las respuestas con genéricos (`solicitar<T>`), agrega `Authorization: Bearer` cuando hay token y expone `ErrorApi` para conservar el código HTTP junto al mensaje del backend.

Los estados de React también van tipados con genéricos, por ejemplo `useState('')` en los formularios y `useParams<{ numero: string }>()` en la página de detalle.

## Sobre el login

**Iniciar sesión** lleva a `/login` y **Registrarse** a `/registro`. Ambas páginas comparten el mismo layout visual y las pestañas de navegación. Si ya hay una sesión activa, esas rutas redirigen al home.

El estado de autenticación vive en `AuthProvider` y se consume con `useAuth`. El login devuelve `{ token, user }`; el frontend guarda `{ token, usuario }` en `localStorage` y valida el token contra `GET /api/auth/me` al recargar. Las llamadas protegidas envían `Authorization: Bearer <token>` y, si el backend responde `401`, la sesión local se elimina. El header muestra el nombre, el botón **Cerrar sesión** y, solo para administradores, el enlace **Admin**.

El backend es un monolito Spring Boot con capas `controller`, `service`, `repository` y `model`. Las contraseñas se guardan como hash BCrypt en MySQL; el frontend nunca recibe ni persiste la contraseña. Spring Security valida el JWT en cada petición y deja disponible el usuario autenticado. Los roles son `USER` y `ADMIN`: el registro público siempre crea `USER`, aunque el cuerpo incluya otro rol.

### Endpoints

| Método   | Endpoint                | Acceso                | Cuerpo / respuesta                                              |
| -------- | ----------------------- | --------------------- | --------------------------------------------------------------- |
| `POST`   | `/api/auth/register`    | Público               | `{ name, email, password }` → `201` con `{ id, name, email, role }` |
| `POST`   | `/api/auth/login`       | Público               | `{ email, password }` → `200` con `{ token, user }`             |
| `GET`    | `/api/auth/me`          | Autenticado           | `200` con el usuario del token                                  |
| `GET`    | `/api/favorites`        | Autenticado           | Favoritos del usuario                                           |
| `POST`   | `/api/favorites`        | Autenticado           | `{ pokemonId, alias? }` → `201` con el favorito creado          |
| `GET`    | `/api/favorites/{id}`   | Dueño o `ADMIN`       | Favorito por id                                                 |
| `PUT`    | `/api/favorites/{id}`   | Dueño o `ADMIN`       | `{ alias }` → favorito actualizado                              |
| `DELETE` | `/api/favorites/{id}`   | Dueño o `ADMIN`       | `204` sin cuerpo                                                |
| `GET`    | `/api/favorites/all`    | Solo `ADMIN`          | Favoritos de todos los usuarios, con datos del dueño            |

Los errores usan un JSON uniforme con `status`, `message` y, en validaciones, un mapa `errors` por campo. Los códigos principales son `400` para datos inválidos, `401` para token ausente o credenciales incorrectas, `403` para permisos insuficientes, `404` para favoritos inexistentes o de otro usuario y `409` para correo duplicado, favorito duplicado o límite de 6 favoritos alcanzado. Swagger documenta todos los endpoints y permite probarlos desde el navegador.

El esquema lo administra Flyway y Hibernate solo valida (`ddl-auto=validate`). CORS permite los orígenes de Vite en desarrollo (`5173`) y de la build servida (`4173`), además de los encabezados `Authorization` y `Content-Type`.

## Favoritos y roles

Cada tarjeta de la Pokédex tiene una estrella que agrega o quita el Pokémon de los favoritos del usuario autenticado. Cada usuario puede tener un **máximo de 6 favoritos**: al intentar agregar el séptimo, el backend responde `409` con `Solo puedes tener hasta 6 Pokémon favoritos` y el frontend bloquea la acción antes de llamar a la API. El home muestra siempre 6 ranuras —las ocupadas con su tarjeta y las libres como placeholders— junto a un contador `X de 6`, permite quitar favoritos y guardar un apodo. La tabla `favorites` relaciona `user_id` con `pokemon_id` y tiene una restricción única para que un usuario no repita el mismo Pokémon.

Un usuario `ADMIN` puede consultar la lista global y borrar cualquier favorito desde `/admin/favoritos`; un `USER` solo puede ver y modificar los suyos, y recibe `404` si intenta acceder al de otra persona. El administrador inicial se crea al arrancar con `APP_ADMIN_EMAIL` y `APP_ADMIN_PASSWORD`, únicamente si todavía no existe ningún `ADMIN`. Para promover otra cuenta manualmente:

```sql
UPDATE users SET role = 'ADMIN' WHERE email = 'correo@ejemplo.com';
```

## Validación de formularios

Los formularios de login y registro usan `useState` para controlar cada campo, `noValidate` para desactivar los mensajes del navegador y validaciones propias con `if`:

- Nombre obligatorio en el registro, máximo 100 caracteres.
- Correo obligatorio, con formato válido y máximo 150 caracteres.
- Contraseña obligatoria de 8 a 72 caracteres.

Los errores de formato se muestran con `alert()`, siguiendo el patrón de la materia. Los errores de la API, como credenciales incorrectas o correo duplicado, se muestran inline con el mensaje que devuelve el backend para no mezclarlos con la validación del formulario. El backend repite las mismas reglas con Bean Validation, así que la API también rechaza datos inválidos aunque se llame directamente.

## Créditos

- Sprites obtenidos de [PokeAPI](https://pokeapi.co/).
- Pokémon y los nombres de los personajes pertenecen a Nintendo, Game Freak y Creatures Inc.
- Proyecto sin fines de lucro, hecho para practicar React y TypeScript.

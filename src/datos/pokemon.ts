/**
 * Datos de los 151 Pokémon de la primera generación.
 *
 * Cada tipo guarda su nombre en español y el color que usa la Pokédex.
 * Algunos mapeos son herencia del proyecto original (Clefairy/Clefable usan
 * "normal" para representar el tipo Hada, y Mr. Mime usa "normal" en su
 * segundo tipo); se conservan tal cual para que el clon sea idéntico.
 */

export type ColorTipo =
  | 'normal'
  | 'fire'
  | 'water'
  | 'electric'
  | 'grass'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'

export type TipoPokemon = {
  nombre: string
  /**
   * null cuando el proyecto original no definía color para ese tipo
   * (Jigglypuff y Wigglytuff con Hada). Así el badge queda sin fondo,
   * exactamente como en el clon.
   */
  color: ColorTipo | null
}

export type Pokemon = {
  nombre: string
  tipos: TipoPokemon[]
}

type FilaPokemon = [
  nombre: string,
  tipos: [nombre: string, color: ColorTipo | null][],
]

const filas: FilaPokemon[] = [
  ['Bulbasaur', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Ivysaur', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Venusaur', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Charmander', [['Fuego', 'fire']]],
  ['Charmeleon', [['Fuego', 'fire']]],
  ['Charizard', [['Fuego', 'fire'], ['Volador', 'flying']]],
  ['Squirtle', [['Agua', 'water']]],
  ['Wartortle', [['Agua', 'water']]],
  ['Blastoise', [['Agua', 'water']]],
  ['Caterpie', [['Bicho', 'bug']]],
  ['Metapod', [['Bicho', 'bug']]],
  ['Butterfree', [['Bicho', 'bug'], ['Volador', 'flying']]],
  ['Weedle', [['Bicho', 'bug'], ['Veneno', 'poison']]],
  ['Kakuna', [['Bicho', 'bug'], ['Veneno', 'poison']]],
  ['Beedrill', [['Bicho', 'bug'], ['Veneno', 'poison']]],
  ['Pidgey', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Pidgeotto', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Pidgeot', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Rattata', [['Normal', 'normal']]],
  ['Raticate', [['Normal', 'normal']]],
  ['Spearow', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Fearow', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Ekans', [['Veneno', 'poison']]],
  ['Arbok', [['Veneno', 'poison']]],
  ['Pikachu', [['Eléctrico', 'electric']]],
  ['Raichu', [['Eléctrico', 'electric']]],
  ['Sandshrew', [['Tierra', 'ground']]],
  ['Sandslash', [['Tierra', 'ground']]],
  ['Nidoran♀', [['Veneno', 'poison']]],
  ['Nidorina', [['Veneno', 'poison']]],
  ['Nidoqueen', [['Veneno', 'poison'], ['Tierra', 'ground']]],
  ['Nidoran♂', [['Veneno', 'poison']]],
  ['Nidorino', [['Veneno', 'poison']]],
  ['Nidoking', [['Veneno', 'poison'], ['Tierra', 'ground']]],
  ['Clefairy', [['Hada', 'normal']]],
  ['Clefable', [['Hada', 'normal']]],
  ['Vulpix', [['Fuego', 'fire']]],
  ['Ninetales', [['Fuego', 'fire']]],
  ['Jigglypuff', [['Normal', 'normal'], ['Hada', null]]],
  ['Wigglytuff', [['Normal', 'normal'], ['Hada', null]]],
  ['Zubat', [['Veneno', 'poison'], ['Volador', 'flying']]],
  ['Golbat', [['Veneno', 'poison'], ['Volador', 'flying']]],
  ['Oddish', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Gloom', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Vileplume', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Paras', [['Bicho', 'bug'], ['Planta', 'grass']]],
  ['Parasect', [['Bicho', 'bug'], ['Planta', 'grass']]],
  ['Venonat', [['Bicho', 'bug'], ['Veneno', 'poison']]],
  ['Venomoth', [['Bicho', 'bug'], ['Veneno', 'poison']]],
  ['Diglett', [['Tierra', 'ground']]],
  ['Dugtrio', [['Tierra', 'ground']]],
  ['Meowth', [['Normal', 'normal']]],
  ['Persian', [['Normal', 'normal']]],
  ['Psyduck', [['Agua', 'water']]],
  ['Golduck', [['Agua', 'water']]],
  ['Mankey', [['Lucha', 'fighting']]],
  ['Primeape', [['Lucha', 'fighting']]],
  ['Growlithe', [['Fuego', 'fire']]],
  ['Arcanine', [['Fuego', 'fire']]],
  ['Poliwag', [['Agua', 'water']]],
  ['Poliwhirl', [['Agua', 'water']]],
  ['Poliwrath', [['Agua', 'water'], ['Lucha', 'fighting']]],
  ['Abra', [['Psíquico', 'psychic']]],
  ['Kadabra', [['Psíquico', 'psychic']]],
  ['Alakazam', [['Psíquico', 'psychic']]],
  ['Machop', [['Lucha', 'fighting']]],
  ['Machoke', [['Lucha', 'fighting']]],
  ['Machamp', [['Lucha', 'fighting']]],
  ['Bellsprout', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Weepinbell', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Victreebel', [['Planta', 'grass'], ['Veneno', 'poison']]],
  ['Tentacool', [['Agua', 'water'], ['Veneno', 'poison']]],
  ['Tentacruel', [['Agua', 'water'], ['Veneno', 'poison']]],
  ['Geodude', [['Roca', 'rock'], ['Tierra', 'ground']]],
  ['Graveler', [['Roca', 'rock'], ['Tierra', 'ground']]],
  ['Golem', [['Roca', 'rock'], ['Tierra', 'ground']]],
  ['Ponyta', [['Fuego', 'fire']]],
  ['Rapidash', [['Fuego', 'fire']]],
  ['Slowpoke', [['Agua', 'water'], ['Psíquico', 'psychic']]],
  ['Slowbro', [['Agua', 'water'], ['Psíquico', 'psychic']]],
  ['Magnemite', [['Eléctrico', 'electric']]],
  ['Magneton', [['Eléctrico', 'electric']]],
  ["Farfetch'd", [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Doduo', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Dodrio', [['Normal', 'normal'], ['Volador', 'flying']]],
  ['Seel', [['Agua', 'water']]],
  ['Dewgong', [['Agua', 'water'], ['Hielo', 'ice']]],
  ['Grimer', [['Veneno', 'poison']]],
  ['Muk', [['Veneno', 'poison']]],
  ['Shellder', [['Agua', 'water']]],
  ['Cloyster', [['Agua', 'water'], ['Hielo', 'ice']]],
  ['Gastly', [['Fantasma', 'ghost'], ['Veneno', 'poison']]],
  ['Haunter', [['Fantasma', 'ghost'], ['Veneno', 'poison']]],
  ['Gengar', [['Fantasma', 'ghost'], ['Veneno', 'poison']]],
  ['Onix', [['Roca', 'rock'], ['Tierra', 'ground']]],
  ['Drowzee', [['Psíquico', 'psychic']]],
  ['Hypno', [['Psíquico', 'psychic']]],
  ['Krabby', [['Agua', 'water']]],
  ['Kingler', [['Agua', 'water']]],
  ['Voltorb', [['Eléctrico', 'electric']]],
  ['Electrode', [['Eléctrico', 'electric']]],
  ['Exeggcute', [['Planta', 'grass'], ['Psíquico', 'psychic']]],
  ['Exeggutor', [['Planta', 'grass'], ['Psíquico', 'psychic']]],
  ['Cubone', [['Tierra', 'ground']]],
  ['Marowak', [['Tierra', 'ground']]],
  ['Hitmonlee', [['Lucha', 'fighting']]],
  ['Hitmonchan', [['Lucha', 'fighting']]],
  ['Lickitung', [['Normal', 'normal']]],
  ['Koffing', [['Veneno', 'poison']]],
  ['Weezing', [['Veneno', 'poison']]],
  ['Rhyhorn', [['Tierra', 'ground'], ['Roca', 'rock']]],
  ['Rhydon', [['Tierra', 'ground'], ['Roca', 'rock']]],
  ['Chansey', [['Normal', 'normal']]],
  ['Tangela', [['Planta', 'grass']]],
  ['Kangaskhan', [['Normal', 'normal']]],
  ['Horsea', [['Agua', 'water']]],
  ['Seadra', [['Agua', 'water']]],
  ['Goldeen', [['Agua', 'water']]],
  ['Seaking', [['Agua', 'water']]],
  ['Staryu', [['Agua', 'water']]],
  ['Starmie', [['Agua', 'water'], ['Psíquico', 'psychic']]],
  ['Mr. Mime', [['Psíquico', 'psychic'], ['Hada', 'normal']]],
  ['Scyther', [['Bicho', 'bug'], ['Volador', 'flying']]],
  ['Jynx', [['Hielo', 'ice'], ['Psíquico', 'psychic']]],
  ['Electabuzz', [['Eléctrico', 'electric']]],
  ['Magmar', [['Fuego', 'fire']]],
  ['Pinsir', [['Bicho', 'bug']]],
  ['Tauros', [['Normal', 'normal']]],
  ['Magikarp', [['Agua', 'water']]],
  ['Gyarados', [['Agua', 'water'], ['Volador', 'flying']]],
  ['Lapras', [['Agua', 'water'], ['Hielo', 'ice']]],
  ['Ditto', [['Normal', 'normal']]],
  ['Eevee', [['Normal', 'normal']]],
  ['Vaporeon', [['Agua', 'water']]],
  ['Jolteon', [['Eléctrico', 'electric']]],
  ['Flareon', [['Fuego', 'fire']]],
  ['Porygon', [['Normal', 'normal']]],
  ['Omanyte', [['Roca', 'rock'], ['Agua', 'water']]],
  ['Omastar', [['Roca', 'rock'], ['Agua', 'water']]],
  ['Kabuto', [['Roca', 'rock'], ['Agua', 'water']]],
  ['Kabutops', [['Roca', 'rock'], ['Agua', 'water']]],
  ['Aerodactyl', [['Roca', 'rock'], ['Volador', 'flying']]],
  ['Snorlax', [['Normal', 'normal']]],
  ['Articuno', [['Hielo', 'ice'], ['Volador', 'flying']]],
  ['Zapdos', [['Eléctrico', 'electric'], ['Volador', 'flying']]],
  ['Moltres', [['Fuego', 'fire'], ['Volador', 'flying']]],
  ['Dratini', [['Dragón', 'dragon']]],
  ['Dragonair', [['Dragón', 'dragon']]],
  ['Dragonite', [['Dragón', 'dragon'], ['Volador', 'flying']]],
  ['Mewtwo', [['Psíquico', 'psychic']]],
  ['Mew', [['Psíquico', 'psychic']]],
]

export const pokemones: Pokemon[] = filas.map(([nombre, tipos]) => ({
  nombre,
  tipos: tipos.map(([nombreTipo, color]) => ({ nombre: nombreTipo, color })),
}))

export const urlSpritePokemon = (numero: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${numero}.png`

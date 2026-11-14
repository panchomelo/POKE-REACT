/**
 * Descripciones breves de los 151 Pokémon de Kanto.
 *
 * Se guardan aparte de las filas de `pokemon.ts` para que los datos base
 * sigan siendo fáciles de leer. La clave es el nombre exacto del Pokémon.
 */
export const descripciones: Record<string, string> = {
  Bulbasaur:
    'Lleva una semilla en el lomo desde que nace; la semilla crece con él y absorbe la luz del sol.',
  Ivysaur:
    'La semilla de su lomo se agranda y echa hojas cuando acumula suficiente energía solar.',
  Venusaur:
    'La flor de su lomo libera un aroma dulce que calma a los Pokémon cercanos.',
  Charmander:
    'La llama de su cola indica su estado de ánimo y se apaga si su salud se debilita.',
  Charmeleon:
    'Es un Pokémon agresivo que ataca con garras y una llama más intensa que la de Charmander.',
  Charizard:
    'Su fuego alcanza temperaturas extremas y puede volar a gran altura en busca de oponentes fuertes.',
  Squirtle:
    'Se protege con su caparazón y lanza chorros de agua con gran precisión.',
  Wartortle:
    'Su cola peluda y su caparazón le permiten nadar rápido y resistir ataques.',
  Blastoise:
    'Dispara potentes chorros de agua por los cañones de su caparazón.',
  Caterpie:
    'Su cuerpo segrega un hilo pegajoso que usa para defenderse y para construir su capullo.',
  Metapod:
    'Permanece casi inmóvil mientras su interior se transforma para evolucionar.',
  Butterfree:
    'Sus alas están cubiertas de un polvo venenoso que usa para defenderse.',
  Weedle:
    'Tiene un aguijón venenoso en la cabeza y otro en la cola; vive entre la hierba y los árboles.',
  Kakuna:
    'Cuelga de los árboles mientras su cuerpo se prepara para la evolución.',
  Beedrill:
    'Ataca en enjambres y usa sus grandes aguijones venenosos con gran velocidad.',
  Pidgey:
    'Es un Pokémon dócil que levanta arena con sus alas para protegerse.',
  Pidgeotto:
    'Defiende su territorio con ferocidad y vuela en círculos para vigilar.',
  Pidgeot:
    'Sus alas le permiten volar a gran velocidad y crear ráfagas de viento.',
  Rattata:
    'Sus incisivos crecen sin parar; roe objetos para desgastarlos.',
  Raticate:
    'Sus bigotes le sirven para mantener el equilibrio y sus dientes para roer.',
  Spearow:
    'Es pequeño pero muy territorial; ataca con su pico afilado.',
  Fearow:
    'Puede volar durante largos periodos y atacar con su largo pico.',
  Ekans:
    'Se desplaza sin hacer ruido y detecta a sus presas con la lengua.',
  Arbok:
    'El dibujo de su vientre intimida a los rivales; puede inmovilizar con su mirada.',
  Pikachu:
    'Almacena electricidad en sus mejillas y libera descargas cuando se siente amenazado.',
  Raichu:
    'Su cola actúa como antena y puede descargar electricidad de gran potencia.',
  Sandshrew:
    'Se enrolla para protegerse y vive en zonas desérticas.',
  Sandslash:
    'Sus garras le permiten cavar rápido y defenderse con golpes precisos.',
  'Nidoran♀':
    'Sus pequeños colmillos segregan un veneno que usa solo si se siente en peligro.',
  Nidorina:
    'Es protectora con su grupo y ataca con su cuerno venenoso.',
  Nidoqueen:
    'Su cuerpo robusto y sus escamas resistentes la convierten en una gran defensora.',
  'Nidoran♂':
    'Sus orejas grandes detectan el peligro y su cuerno segrega veneno.',
  Nidorino:
    'Es agresivo y ataca con su cuerno; su veneno puede ser peligroso.',
  Nidoking:
    'Su cola gruesa y su cuerno lo hacen un oponente temible.',
  Clefairy:
    'Se dice que aparece en noches de luna llena y que baila junto a otros de su especie.',
  Clefable:
    'Su oído es tan fino que puede detectar sonidos a larga distancia.',
  Vulpix:
    'Cuando es joven tiene una sola cola; al crecer, el fuego de su interior se intensifica.',
  Ninetales:
    'Se cree que vive mil años y que sus nueve colas guardan un poder misterioso.',
  Jigglypuff:
    'Usa su canto para dormir a los rivales y luego los marca con el micrófono que lleva.',
  Wigglytuff:
    'Su cuerpo elástico le permite absorber golpes y rebotar sin daño.',
  Zubat:
    'Se orienta con ultrasonidos y vive en cuevas oscuras.',
  Golbat:
    'Su boca puede abrirse mucho y absorbe grandes cantidades de sangre.',
  Oddish:
    'Durante el día se entierra en la tierra y por la noche sale a absorber luz lunar.',
  Gloom:
    'Segrega un líquido maloliente que usa para defenderse.',
  Vileplume:
    'La flor de su cabeza libera polen tóxico cuando se siente amenazado.',
  Paras:
    'Los hongos de su espalda crecen alimentándose de su cuerpo.',
  Parasect:
    'El hongo de su espalda controla su cuerpo y lo obliga a buscar nutrientes.',
  Venonat:
    'Sus grandes ojos compuestos le permiten ver en la oscuridad.',
  Venomoth:
    'Sus alas esparcen un polvo venenoso que paraliza a sus presas.',
  Diglett:
    'Vive bajo tierra y solo asoma la cabeza; su cuerpo es muy sensible a la luz.',
  Dugtrio:
    'Tres Diglett trabajan juntos para cavar túneles a gran velocidad.',
  Meowth:
    'Le encantan las monedas brillantes y se mueve con gran sigilo.',
  Persian:
    'Es elegante y orgulloso; su pelaje y sus bigotes le dan un aire distinguido.',
  Psyduck:
    'Sufre dolores de cabeza constantes que a veces liberan un gran poder psíquico.',
  Golduck:
    'Nada con gran velocidad y usa sus poderes psíquicos para cazar.',
  Mankey:
    'Se enfurece con facilidad y ataca sin pensar cuando se siente acorralado.',
  Primeape:
    'Es muy agresivo y persigue a sus rivales hasta agotarlos.',
  Growlithe:
    'Es leal y valiente; protege a su entrenador con gran determinación.',
  Arcanine:
    'Su velocidad y su melena flameante lo hacen un Pokémon majestuoso.',
  Poliwag:
    'La espiral de su vientre le ayuda a mantenerse orientado.',
  Poliwhirl:
    'Puede vivir fuera del agua y usa sus guantes para golpear.',
  Poliwrath:
    'Es un gran nadador y un experto en combate cuerpo a cuerpo.',
  Abra:
    'Duerme casi todo el día y se teletransporta cuando percibe peligro.',
  Kadabra:
    'Su cuchara amplifica sus poderes psíquicos y sus ondas cerebrales.',
  Alakazam:
    'Su inteligencia es enorme y sus cucharas le permiten predecir el futuro.',
  Machop:
    'Entrena levantando rocas y desarrolla una fuerza sorprendente.',
  Machoke:
    'Su musculatura le permite levantar objetos muy pesados con facilidad.',
  Machamp:
    'Sus cuatro brazos le permiten lanzar cientos de golpes en pocos segundos.',
  Bellsprout:
    'Su cuerpo flexible le permite atrapar insectos con sus hojas.',
  Weepinbell:
    'Segrega un líquido corrosivo para disolver a sus presas.',
  Victreebel:
    'Atrae a sus presas con un aroma dulce y las atrapa con su gran boca.',
  Tentacool:
    'Sus tentáculos contienen veneno y flotan en aguas poco profundas.',
  Tentacruel:
    'Puede extender sus tentáculos y liberar veneno para defenderse.',
  Geodude:
    'Se confunde con una roca y golpea con sus puños cuando alguien se acerca.',
  Graveler:
    'Rueda por las montañas y no se detiene ante los obstáculos.',
  Golem:
    'Su caparazón rocoso lo protege y puede rodar con gran fuerza.',
  Ponyta:
    'Sus cascos son más duros que el diamante y su melena es fuego puro.',
  Rapidash:
    'Galopa a gran velocidad y deja una estela de fuego a su paso.',
  Slowpoke:
    'Es muy lento y tardío, pero su cola puede regenerarse.',
  Slowbro:
    'El Shellder de su cola le proporciona una gran resistencia y poder psíquico.',
  Magnemite:
    'Flota usando energía electromagnética y atrae objetos metálicos.',
  Magneton:
    'Tres Magnemite unidos generan un campo magnético muy potente.',
  "Farfetch'd":
    'Siempre lleva un puerro con el que se defiende y con el que cocina.',
  Doduo:
    'Sus dos cabezas piensan y actúan por separado, pero corren en la misma dirección.',
  Dodrio:
    'Sus tres cabezas se turnan para vigilar mientras las otras duermen.',
  Seel:
    'Su piel gruesa le permite resistir el frío y nadar en aguas heladas.',
  Dewgong:
    'Su cuerpo estilizado y su grasa lo protegen del frío extremo.',
  Grimer:
    'Se alimenta de desechos y deja un rastro tóxico a su paso.',
  Muk:
    'Su cuerpo está formado por lodo tóxico que puede intoxicar a quien lo toque.',
  Shellder:
    'Su concha es muy dura y se cierra con fuerza para protegerse.',
  Cloyster:
    'Su concha resiste golpes muy fuertes y dispara púas cuando se abre.',
  Gastly:
    'Está formado por gases y puede aparecer y desaparecer a voluntad.',
  Haunter:
    'Le gusta asustar a la gente y puede atravesar paredes.',
  Gengar:
    'Se esconde en las sombras y se dice que roba el calor de quienes se acercan.',
  Onix:
    'Su cuerpo de roca le permite excavar túneles a gran velocidad.',
  Drowzee:
    'Se alimenta de los sueños de las personas y puede hipnotizarlas.',
  Hypno:
    'Balancea un péndulo para hipnotizar y luego devora los sueños de su víctima.',
  Krabby:
    'Sus pinzas le sirven para defenderse y para cavar en la arena.',
  Kingler:
    'Su pinza izquierda es enorme y puede romper rocas con ella.',
  Voltorb:
    'Se parece a una Poké Ball y explota cuando se siente amenazado.',
  Electrode:
    'Puede almacenar grandes cantidades de electricidad y explotar con facilidad.',
  Exeggcute:
    'Son varias semillas que se comunican entre sí mediante ondas psíquicas.',
  Exeggutor:
    'Sus cabezas piensan de forma independiente y pueden caer al suelo.',
  Cubone:
    'Lleva el cráneo de su madre como casco y llora por las noches.',
  Marowak:
    'Usa el hueso que lleva como arma y protege a su grupo con ferocidad.',
  Hitmonlee:
    'Sus patas elásticas le permiten lanzar patadas a gran distancia.',
  Hitmonchan:
    'Sus guantes le permiten lanzar golpes rapidísimos y precisos.',
  Lickitung:
    'Su lengua es muy larga y pegajosa; la usa para atrapar objetos y limpiarse.',
  Koffing:
    'Su cuerpo contiene gases tóxicos que pueden explotar si se calienta.',
  Weezing:
    'Expulsa gases venenosos por sus dos bocas y flota en el aire.',
  Rhyhorn:
    'Su piel es dura como una roca y embiste con gran fuerza.',
  Rhydon:
    'Su cuerno le permite perforar rocas y su cuerpo resiste golpes muy fuertes.',
  Chansey:
    'Lleva un huevo en la bolsa y lo comparte con los Pokémon heridos.',
  Tangela:
    'Su cuerpo está cubierto de enredaderas que se mueven solas.',
  Kangaskhan:
    'Protege a su cría dentro de la bolsa de su vientre.',
  Horsea:
    'Se aferra a las rocas con su cola y dispara tinta para escapar.',
  Seadra:
    'Sus aletas y su cola le permiten nadar con gran precisión.',
  Goldeen:
    'Su cuerno le sirve para defenderse y su aleta le permite nadar rápido.',
  Seaking:
    'Su cuerno puede perforar rocas y su aleta le da gran velocidad.',
  Staryu:
    'Su núcleo brilla y puede regenerar sus brazos si los pierde.',
  Starmie:
    'Su núcleo emite destellos y puede comunicarse mediante ondas psíquicas.',
  'Mr. Mime':
    'Puede crear barreras invisibles con sus manos e imita a las personas.',
  Scyther:
    'Sus guadañas son afiladas y se mueve con una velocidad increíble.',
  Jynx:
    'Se comunica mediante danzas y puede hipnotizar con sus movimientos.',
  Electabuzz:
    'Acumula electricidad en su cuerpo y la libera cuando se enfada.',
  Magmar:
    'Su cuerpo emite un calor intenso y puede lanzar llamas por la boca.',
  Pinsir:
    'Sus pinzas son muy fuertes y pueden romper troncos.',
  Tauros:
    'Es un Pokémon rápido y fuerte que embiste con sus cuernos.',
  Magikarp:
    'Es débil y casi solo sabe saltar, pero puede evolucionar en un Pokémon poderoso.',
  Gyarados:
    'Su furia es legendaria y puede destruir ciudades con sus ataques.',
  Lapras:
    'Es tranquilo y le gusta transportar a personas y Pokémon sobre su lomo.',
  Ditto:
    'Puede transformarse en cualquier Pokémon que tenga cerca.',
  Eevee:
    'Su código genético es inestable y puede evolucionar de varias formas.',
  Vaporeon:
    'Su cuerpo se adapta al agua y puede fundirse con ella.',
  Jolteon:
    'Su pelaje acumula electricidad y puede lanzar rayos.',
  Flareon:
    'Su cuerpo almacena calor y puede lanzar llamas por la boca.',
  Porygon:
    'Fue creado por ordenador y puede moverse por el espacio digital.',
  Omanyte:
    'Es un Pokémon antiguo que se extinguió y fue revivido a partir de un fósil.',
  Omastar:
    'Su concha en espiral y sus tentáculos lo convierten en un depredador marino.',
  Kabuto:
    'Vivía en el fondo del mar y se protegía con su caparazón.',
  Kabutops:
    'Sus guadañas le permiten cazar y nadar con gran velocidad.',
  Aerodactyl:
    'Es un Pokémon prehistórico que surca los cielos con sus alas.',
  Snorlax:
    'Duerme casi todo el día y solo se despierta para comer.',
  Articuno:
    'Es un Pokémon legendario que congela el aire con sus alas.',
  Zapdos:
    'Es un Pokémon legendario que controla los rayos y las tormentas.',
  Moltres:
    'Es un Pokémon legendario cuya llama nunca se apaga.',
  Dratini:
    'Vive en lagos y ríos; muda la piel mientras crece.',
  Dragonair:
    'Su cuerpo alargado y sus alas le permiten volar y controlar el clima.',
  Dragonite:
    'Es un Pokémon bondadoso que ayuda a los barcos perdidos en el mar.',
  Mewtwo:
    'Fue creado mediante manipulación genética y posee un poder psíquico inmenso.',
  Mew:
    'Se dice que es el ancestro de todos los Pokémon y que puede aprender cualquier movimiento.',
}

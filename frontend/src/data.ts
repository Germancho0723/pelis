import { Movies, Reparto } from "./app/shared/models/movies"
import { Genero } from "./app/shared/models/genero"

export const sample_movies: Movies[] = [
  {
    id:"1",
    nombrePeli: "Jhon Wick 4",
    director: "Chad Stahelski",
    genero: ["Accion", "Ciencia Ficcion"],
    duracion:"2h 50m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
    fecha:"03/23/2023",
    resena:"John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
    imdb:"8,2",
  },
  {
    id:"2",
    nombrePeli: "Ant-Man and the Wasp: Quantumania",
    director: "Peyton Reed",
    genero: ["Accion", "Aventura", "Ciencia Ficcion"],
    duracion:"2h 5m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    fecha:"02/16/2023",
    resena:"Scott Lang y Hope Van Dyne, junto con Hank Pym y Janet Van Dyne, exploran el Reino Cuántico, donde interactúan con extrañas criaturas y se embarcan en una aventura que va más allá de los límites de lo que creían posible.",
    imdb:"6,3",
  },
  {
    id:"3",
    nombrePeli: "Barbarian",
    director: "Zach Cregger",
    genero: ["Terror", "Suspenso", "Misterio"],
    duracion:"1h 43m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rHDL6LTRgc9h3oGkeoWVJpnkhTI.jpg",
    fecha:"09/09/2022",
    resena:"Una joven que viaja a Detroit para una entrevista de trabajo alquila una casa para pasar la noche. Pero cuando llega a altas horas de la noche, descubre que la casa está doblemente reservada y que un hombre extraño ya se está quedando allí. En contra de su buen juicio, decide pasar la noche allí, pero pronto descubre que hay mucho más que temer que un invitado inesperado.",
    imdb:"7,0",
  },
  {
    id:"4",
    nombrePeli: "Beau Tiene Miedo",
    director: "Ari Aster",
    genero: ["Thriller", "Suspenso"],
    duracion:"2h 59m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4cpko9t8rapKC6OS9rIzkfavl6l.jpg",
    fecha:"04/14/2023",
    resena:"Beau (Joaquin Phoenix) es un hombre que tendrá que enfrentarse a sus miedos y paranoias al aventurarse en una épica odisea para llegar a casa de su controladora madre.",
    imdb:"7,4",
  },
  {
    id:"5",
    nombrePeli: "Blue Beetle",
    director: "Ángel Manuel Soto",
    genero: ["Accion", "Aventura", "Ciencia Ficcion"],
    duracion:"2h 5m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m2jDL4NCgEdMDEoMfe6SObyqobz.jpg",
    fecha:"08/18/2023",
    resena:"Un adolescente mexicano encuentra un escarabajo alienígena que le proporciona una armadura superpoderosa.",
    imdb:"0,0",
  },
  {
    id:"6",
    nombrePeli: "Cocaine Bear",
    director: "Elizabeth Banks",
    genero: ["Accion", "Aventura", "Ciencia Ficcion", "Comedia"],
    duracion:"1h 35m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xNaMZMtGUPPmjYU5h5iqVxvcSe.jpg",
    fecha:"04/13/2023",
    resena:"Inspirado en hechos reales ocurridos en Kentucky en 1985, durante los cuales un oso negro de 175 libras ingirio 88 libras de cocaína pura.",
    imdb:"6,0",
  },
  {
    id:"7",
    nombrePeli: "Evil Dead: Rise",
    director: "Lee Cronin",
    genero: ["Terror", "Suspenso"],
    duracion:"1h 36m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ioMtng0qHbwNjR1fuxYZsRf1kjm.jpg",
    fecha:"04/21/2023",
    resena:"Historia de dos hermanas separadas cuyo reencuentro se ve interrumpido por el surgimiento de demonios poseedores de carne, empujándolos a una batalla por la supervivencia mientras se enfrentan a la version de familia más aterradora que se pueda imaginar. Secuela de la trilgía original de 'Evil Dead'.",
    imdb:"7,4",
  },
  {
    id:"8",
    nombrePeli: "Maligno",
    director: "James Wan",
    genero: ["Terror", "Suspenso"],
    duracion:"1h 51m",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Lq3VTrxyMjIMiI91rI6RPqScsu.jpg",
    fecha:"10/09/2021",
    resena:"Madison es una mujer que tiene unas macabras pesadillas que la dejan completamente paralizada. Aterrada por lo que ve en ellas, Madison no consigue dormir por las noches ni vivir por el día. Pero el terror cada vez se irá apoderando de ella cuando descubra que esas pesadillas no son sueños, sino que son hechos de la vida real.",
    imdb:"6,2"
  }

]

export const sample_reparto: Reparto[] = [
  {
    id:"1",
    movie: "Ant-Man and the Wasp: Quantumania",
    nombreAct:"Paul Rudd",
    personaje:"Scott Lang, Ant-Man",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg",
  },
  {
    id:"1",
    movie: "Ant-Man and the Wasp: Quantumania",
    nombreAct:"Evangeline Lilly",
    personaje:"Hope van Dyne, The Wasp",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/n8WZuHASdxzympHd6TaJtF4REhp.jpg",
  },
  {
    id:"1",
    movie: "Ant-Man and the Wasp: Quantumania",
    nombreAct:"Michael Douglas",
    personaje:"Dr. Hank Pym",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rNE2O4JvDfDS7yd869tNwnkgYq7.jpg",
  },

  {
    id:"2",
    movie: "Jhon Wick 4",
    nombreAct:"Keanu Reeves",
    personaje:"John Wick",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
  },
  {
    id:"2",
    movie: "Jhon Wick 4",
    nombreAct:"Donnie Yen",
    personaje:"Caine",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg"
  },
  {
    id:"2",
    movie: "Jhon Wick 4",
    nombreAct:"Bill Skarsgård",
    personaje:"Marquis de Gramont",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cFQN6rLSSLhGx8NQI7krYWwdRpl.jpg"
  },
  {
    id:"3",
    movie: "Barbarian",
    nombreAct:"Georgina Campbell",
    personaje:"Tess",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kgXHKjI728Nv7FLVf38S9QzHU2n.jpg"
  },
  {
    id:"3",
    movie: "Barbarian",
    nombreAct:"Bill Skarsgård",
    personaje:"Keith",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cFQN6rLSSLhGx8NQI7krYWwdRpl.jpg"
  },
  {
    id:"3",
    movie: "Barbarian",
    nombreAct:"Justin Long",
    personaje:"AJ",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/Hlz1LnrOzGBKoZ50HBk9ytuVUa.jpg"
  },
]

export const sample_genero:Genero[] = [
  {name:'Todos'},
  {name:'Accion'},
  {name:'Ciencia Ficcion'},
  {name:'Aventura'},
  {name: 'Comedia'},
  {name: 'Terror'},
  {name: 'Suspenso'},
  {name: 'Thriller'},
  {name: 'Misterio'}
]

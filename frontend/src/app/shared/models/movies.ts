export class Movies {
  id!:string;
  nombrePeli!:string;
  director!:string;
  genero!:string[];
  duracion!:string
  poster!:string;
  fecha!:string;
  resena!:string;
  imdb!:string;
}

export class Reparto{
  id!:string;
  movie!:string;
  nombreAct!:string;
  personaje!:string;
  imagen!:string;
}

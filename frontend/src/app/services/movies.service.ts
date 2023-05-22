import { Injectable } from '@angular/core';
import { Movies, Reparto } from '../shared/models/movies';
import { sample_movies, sample_reparto, sample_genero } from 'src/data';
import { Genero } from '../shared/models/genero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MOVIES_BY_GENERO_URL, MOVIES_BY_ID_URL, MOVIES_BY_NAME_URL, MOVIES_BY_REPARTO_URL, MOVIES_BY_SEARCH_URL, MOVIES_GENERO_URL, MOVIES_REPARTO_URL, MOVIES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Movies[]>{
  return this.http.get<Movies[]>(MOVIES_URL);
  }

  getAllMoviesbySearch(search:string){
    return this.http.get<Movies[]>(MOVIES_BY_SEARCH_URL + search);
  }

  getAllReparto(): Observable<Reparto[]>{
    return this.http.get<Reparto[]>(MOVIES_REPARTO_URL);
    }

    getAllGenero(): Observable<Genero[]>{
      return this.http.get<Genero[]>(MOVIES_GENERO_URL);
    }

    getAllMoviesbyGenero(genero:string): Observable<Movies[]>{
      return genero==="Todos"?
      this.getAll():
      this.http.get<Movies[]>(MOVIES_BY_GENERO_URL + genero);
    }

    getMoviebyId(movieId:string):Observable<Movies>{
      return this.http.get<Movies>(MOVIES_BY_ID_URL+movieId);
    }

    getMoviebyName(movieName:string):Observable<Movies[]>{
      //console.log("MovieName: "+movieName);
      //console.log("MovieName: "+ MOVIES_BY_NAME_URL+movieName);
      //console.log("httpGet: "+this.http.get<Movies>(MOVIES_BY_NAME_URL + movieName));
      const movie = this.http.get<Movies[]>(MOVIES_BY_NAME_URL + movieName);

      //console.log(movie);
      return this.http.get<Movies[]>(MOVIES_BY_NAME_URL + movieName);
    }

    getActorbyName(movieName:string): Observable<Reparto[]>{
      return this.http.get<Reparto[]>(MOVIES_BY_REPARTO_URL + movieName);
    }

}

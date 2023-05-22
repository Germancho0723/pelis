import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies, Reparto } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit{
  movies!:Movies[];
  reparto!:Reparto[];

  constructor(activatedRoute:ActivatedRoute, moviesServices:MoviesService){
    activatedRoute.params.subscribe((params) => {
    if(params.nombrePeli)
      moviesServices.getMoviebyName(params.nombrePeli).subscribe(serverMovies => {
        console.log(serverMovies);
      this.movies = serverMovies;
    });
      moviesServices.getActorbyName(params.nombrePeli).subscribe(serverReparto => {
      this.reparto = serverReparto;
    });
    })

  }


  ngOnInit():void{

  }
}

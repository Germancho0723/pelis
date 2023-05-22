import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies, Reparto } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movieElected: Movies = new Movies();
  repartoElected: Reparto = new Reparto();

  movies:Movies[] = [];
  reparto:Reparto[] =[];

  constructor(private moviesService:MoviesService, activatedRoute:ActivatedRoute) {
    let moviesObservable:Observable<Movies[]>;
    let repartoObservable:Observable<Reparto[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.search)
        moviesObservable = this.moviesService.getAllMoviesbySearch(params.search);
      else if (params.genero)
        moviesObservable = moviesService.getAllMoviesbyGenero(params.genero);
      else
        moviesObservable = moviesService.getAll();

        moviesObservable.subscribe((serverMovies) => {
          this.movies = serverMovies;
        })

        repartoObservable=moviesService.getAllReparto();
        repartoObservable.subscribe((serverReparto) => {
          this.reparto=serverReparto;
        })

    })




  }



  ngOnInit(): void {

  }

  verMovie(movie: Movies): void {
    this.movieElected=movie;
    //this.repartoElected=reparto;
    console.log(this.movieElected);
    //console.log(this.repartoElected);
  }

  verReparto(reparto: Reparto): void {
    this.repartoElected=reparto;
    console.log(this.repartoElected);
  }

  /*getClass(eleccion: Movies):string{
    return this.movieElected.id===eleccion.id ? 'bg-dark text-white' : '';
  }*/


}

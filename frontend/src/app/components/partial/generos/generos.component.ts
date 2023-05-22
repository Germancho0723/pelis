import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genero } from 'src/app/shared/models/genero';
import { Movies } from 'src/app/shared/models/movies';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  generoElected: Genero = new Genero();

genero?:Genero[];
constructor(moviesServices:MoviesService){
  moviesServices.getAllGenero().subscribe(serverGenero => {
    this.genero=serverGenero;
  });
}

  ngOnInit(): void{

  }

}


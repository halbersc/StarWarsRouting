import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-one-film',
  templateUrl: './one-film.component.html',
  styleUrls: ['./one-film.component.css']
})
export class OneFilmComponent implements OnInit {

  /*objFilms: Observable <any>; */
  objFilm: any[] = [];
  objCharacters: any[] = [];
  objVehicles: any[] = [];
  objSpecies: any[] = [];
  objStarships: any[] = [];


  constructor(private filmsService: FilmsService) { 

    filmsService.getFilm(1).subscribe(
      (data) => {
        this.objFilm = data;
        this.objCharacters = this.objFilm['characters'];
        this.objVehicles = this.objFilm['vehicles'];
        this.objStarships = this.objFilm['starships'];
        this.objSpecies = this.objFilm['species'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }

}

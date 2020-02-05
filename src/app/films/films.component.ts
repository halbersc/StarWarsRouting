import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from '../services/films.service';

@Component(
  {
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
  }
)



export class FilmsComponent implements OnInit {

  /*objFilms: Observable <any>; */
  objFilms: any[] = [];
  objResults: any[] = [];


  constructor(private filmsService: FilmsService) { 

    /*filmsService.getFilms().subscribe(
      responseObject => {
        this.objFilms = responseObject;
      }
    )*/
    filmsService.getFilms().subscribe(
      (data) => {
        this.objFilms = data;
        this.objResults = this.objFilms['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}

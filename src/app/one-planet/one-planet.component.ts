import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-one-planet',
  templateUrl: './one-planet.component.html',
  styleUrls: ['./one-planet.component.css']
})
export class OnePlanetComponent implements OnInit {
  objPlanet: any[] = [];
  objResidents: any[] = [];
  objFilms: any[] = [];


  constructor(private planetService: PlanetsService) { 

    planetService.getOnePlanet(1).subscribe(
      (data) => {
        this.objPlanet = data;
        this.objResidents = this.objPlanet['residents'];
        this.objFilms = this.objPlanet['films'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }

}

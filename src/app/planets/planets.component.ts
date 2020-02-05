import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  objPlanets: any[] = [];
  objResults: any[] = [];


  constructor(private planetsService: PlanetsService) { 

    planetsService.getPlanets().subscribe(
      (data) => {
        this.objPlanets = data;
        this.objResults = this.objPlanets['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}

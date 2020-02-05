import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-one-person',
  templateUrl: './one-person.component.html',
  styleUrls: ['./one-person.component.css']
})
export class OnePersonComponent implements OnInit {
  objPerson: any[] = [];
  objVehicles: any[] = [];
  objSpecies: any[] = [];
  objFilms: any[] = [];
  objStarships: any[] = [];


  constructor(private peopleService: PeopleService) { 

    peopleService.getOnePerson(1).subscribe(
      (data) => {
        this.objPerson = data;
        this.objVehicles = this.objPerson['vehicles'];
        this.objStarships = this.objPerson['starships'];
        this.objSpecies = this.objPerson['species'];
        this.objFilms = this.objPerson['films'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
  }

}

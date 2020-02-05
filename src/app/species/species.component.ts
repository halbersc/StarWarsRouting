import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesService } from '../services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  objSpecies: any[] = [];
  objResults: any[] = [];


  constructor(private SpeciesService: SpeciesService) { 

    SpeciesService.getSpecies().subscribe(
      (data) => {
        this.objSpecies = data;
        this.objResults = this.objSpecies['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}

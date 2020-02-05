import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarshipsService } from '../services/starships.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  objStarships: any[] = [];
  objResults: any[] = [];


  constructor(private StarshipsService: StarshipsService) { 

    StarshipsService.getStarships().subscribe(
      (data) => {
        this.objStarships = data;
        this.objResults = this.objStarships['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}

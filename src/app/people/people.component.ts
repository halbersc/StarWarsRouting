import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  objPeople: any[] = [];
  objResults: any[] = [];


  constructor(private peopleService: PeopleService) { 

    peopleService.getPeople().subscribe(
      (data) => {
        this.objPeople = data;
        this.objResults = this.objPeople['results']
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {

  }

}
